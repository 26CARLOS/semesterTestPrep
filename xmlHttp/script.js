const loadButton = document.getElementById("loadButton");
const dataContainer = document.getElementById("dataContainer");
////callback function to promise conversion
loadButton.addEventListener("click", () => {
  // const request = new XMLHttpRequest();
  // request.onreadystatechange = function () {
  //     // Only update the UI once the request completed successfully
  //     if (request.readyState === 4 && request.status === 200) {
  //         dataContainer.textContent = request.responseText;
  //     }
  // };

  // request.open('GET', 'data.txt', true);
  // request.send();

  fetchWithXHR("data.txt")
    .then((response) => {
      dataContainer.textContent = response;
    })
    .catch((message) => {
      console.log(message);
    });
});

function fetchWithXHR(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onreadystatechange = () => {
      if (request.readyState !== 4) {
        return;
      }
      if (request.status === 200 || request.status === 304) {
        resolve(request.responseText);
      } else {
        reject("Error");
      }
    };

    request.open("GET", url, true);
    request.send();
  });
}
