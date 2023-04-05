const number = 15;

const promise1 = new Promise ((resolve,reject) => {
    if (number > 10) {
        resolve("number is ok")
    }
    else{
        reject(new Error("smaller than 10"))
    }
})

promise1
.then((result) =>{
    console.log(result);
})
.catch((error) => {
    console.error(error)
})
