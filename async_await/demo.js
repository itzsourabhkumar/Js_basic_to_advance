async function fun() {
  return new Promise.reject(false);
}

fun().then(() => console.log("done")).catch(()=>console.log("not done")); 
