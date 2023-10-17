//fun1();

function fun1() {
    const name = "Sourabh";
    console.log(this);
    console.log(this.name);
}


const fun2 = ()=>{
    const name = "Sourabh";
    console.log(this);
    console.log(this.name);
}

//fun2();

function add(nums) {
    let sum = 0;
    const newArray = nums.reduce((acc,curr)=>acc.concat(curr,[]));
    const len = newArray.length;

    for (let index = 0; index < len; index++) {
        sum += newArray[index];
        //console.log(index,sum)
    }
    return sum;
}

const fun3 = (...nums) => (add(nums));

console.log(fun3([1,2,3,4,5,6,7,8,9]));
