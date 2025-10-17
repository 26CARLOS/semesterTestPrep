let p = new Promise((resolve, reject)=>{
    let a = 1 + 2
    if(a==2){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})

p.then((message)=>{
    console.log('this is what is in the then: '+message);
}).catch((message)=>{
    console.log('this is the catch: '+message);
})


const promise1 = new Promise((resolve, reject)=>{
    resolve("p1")
})

const promise2 = new Promise((resolve, reject)=>{
    resolve("p2")
})


const promise3 = new Promise((resolve, reject)=>{
    resolve("p2")
})

Promise.all([promise1,
    promise2,
    promise3
]).then((message)=>{
    console.log(mess);
    
})

