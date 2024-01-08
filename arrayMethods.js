const array1=[2,8,3,6,5,4,8,1,];
const array2=['Pineapple','Orange','Apple','Mango','Banana','Mango'];
const array3=[50,45,85,23,47,60];

// 1.Concat

let newArray= array1.concat(array3);
console.log(newArray);

// 2.every
let e= array1.every(checkNumber)
function checkNumber(num){
    return num>5;

}

// 3.fill
let g = array3.fill('Abhijith');
console.log(g);

//4. find
const ck= (value)=>{
    return value<7;
}
let arr= array1.find(check);
console.log(arr);

// 5 findIndex

const arr2= (val)=>{
    return val<7;
}
let findex= array1.findIndex(arr2);
console.log(findex);



//6.flat
const array= [3,5,7,['akhil','arun']];
let s= array.flat();
console.log(s);

//7. forEach
array2.forEach((fruits,index)=>{
    console.log(fruits,'',index);
})

//8.includes
let iElement  = array1.includes(2);
console.log("includes of 2 :",iElement);

//9.indexOf
let index = array2.indexOf('Mango');
console.log("index of Mango : ",index);

//10.join
let jn=array2.join();
console.log("joined array",':',jn)

//11.lastIndxOf
let ind= array2.lastIndexOf("Apple")
console.log(ind)

//12.pop
array1.pop();
console.log(array1)

//13.push
array2.push('lemon');
console.log(array2)

//14.Reverse
array1.reverse()
console.log(array1)

//15.unshift
array2.unshift('grape');
console.log(array2);

// 16. shift
array1.shift();
console.log(array1);

// 17. slice
let slc=array2.slice(1,3);
console.log(slc)

//18.some
let sm=array1.some(checkValue)
function checkValue(num){
    if(num==2){
        return true;
    }

}
console.log(sm)

//19.sort
let srt= array2.sort()
console.log('Sorted array','',srt)


//20.splice
let spl=array2.splice(2,0,"jackfruit","greenapple")
console.log(spl)

//21.toString
let text=array2.toString()
console.log(text)

//22.Filter
let flr= array1.filter((value)=>{
    if(value<5){
        return value;
    }
})
console.log(flr)

//23.Reduce
let reduce= array1.reduce((a,b)=>{
    return a+b;
})
console.log(reduce);

//24.Map
let newarray=array1.map(Math.sqrt)
console.log(newarray)





