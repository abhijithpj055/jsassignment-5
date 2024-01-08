let str= "Welcome to my page";


//1.concat
let string= str.concat('My name is abhijith');
console.log(''+string);

// 2 endsWith

let end= str.endsWith('page');
console.log(end);

//3. includes
let text= str.includes("abhijith");
console.log(text)

//4.indexOf
let result=str.indexOf('page');
console.log(result)

//5.lastIndexOf

let a=str.lastIndexOf('page')
console.log(a)

//6.match

let mt=str.match('age')
console.log(mt)

//7.matchAll
let m=str.matchAll('come')
console.log(m)

//8.padEnd
let pad1='Hellow';
let pad2= pad1.padEnd(10," Good Morning");
console.log(pad2);


//9.padStart
let pad3='5'
let pad4=pad3.padStart(4,'0');

//10.repeat
let rpt=str.repeat(2);
console.log(rpt)

//11.replace
let r=str.replace("page",'Homepage')
console.log(r)

//12.search
let pos=str.search('my')
console.log(pos)

//13.slice
let slc=str.slice(0,5);
console.log(slc)

//14.split
let splt=str.split("");
console.log(splt)

//15.startsWith
let sw=str.startsWith('Welcome')
console.log(sw)

//16. substr
let sub=str.substring(1,4)
console.log(sub)

//17.substring
let ss=str.substring(1,5)
console.log(ss)

//18.toLowerCase
let lcase=str.toLowerCase()
console.log(lcase)

//19.toUpperCase
let ucase=str.toUpperCase()
console.log(ucase)

//20.trim
let tm=str.trim();
console.log(tm)

//21.trimEnd
let te=str.trimEnd()
console.log(te)

//22.trimStart
let ts=str.trimStart()
console.log(ts)

//23.charAt
let chr=str.charAt(1)
console.log(chr)

//24. charCodeAt
let ccode=str.charCodeAt(0)
console.log(ccode)