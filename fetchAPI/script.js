const preTag = document.getElementById("preTag");
const click = document.getElementById("click");

click.addEventListener("click", ()=>{
    handleCLick();
})
async function handleCLick() {
    try {
        const response = await fetch('user.json')
        if(response.ok){
            const res = await response.json();
            preTag.textContent = JSON.stringify(res);
        }
        else{
            throw new Error("response not ok");
            
        }
    } catch (error) {
        console.log(error);
        
    }
}