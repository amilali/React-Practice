
const promise1 = new Promise((resolve, reject)=>setTimeout(()=>resolve('First Done!1'),1000));
const promise2 = new Promise((resolve, reject)=>setTimeout(()=>resolve('Second Done!1'),200));
const promise3 = new Promise((resolve, reject)=>setTimeout(()=>reject('Third Failed!1'),3000));


Promise.all([promise1,promise2,promise3]).then((response)=>{
  console.log(response);
}).catch((error)=>{
  console.log(error);
})

Promise.allSettled([promise1,promise2,promise3]).then((response)=>{
  console.log(response);
}).catch((error)=>{
  console.log(error);
})

Promise.any([promise1,promise2,promise3]).then((response)=>{
  console.log(response);
}).catch((error)=>{
  console.log(error);
})


Promise.race([promise1,promise2,promise3]).then((response)=>{
  console.log(response);
}).catch((error)=>{
  console.log(error);
})
