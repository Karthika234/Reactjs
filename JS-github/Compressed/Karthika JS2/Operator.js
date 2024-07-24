//Arithmetic Operator
//Addition 

let add = 12 + 45;
console.log("Addition operator : "+add);

//subtarction
let sub = 12-45;
console.log("Subtraction operator : "+sub);

//multiplication
let mul = 12*45;
console.log("Multiplication operator : "+mul);
let mul1 = -45 * 4;
let mul2 = Infinity *0;
let mul3 = Infinity*Infinity;
console.log("Mul 1 : "+mul1);
console.log("Mul 2 : "+mul2);
console.log("Mul 3 :" +mul3);

//Divide
let div = 45 / 12;
console.log("Division operator : "+div);

//concatenation
let concat = 12 + " Concat";
console.log("Concatenation operator : "+concat);

//Modulo
let x = 9 % 10;
let x1 = 9%-10;
let x2 = -9 % 10;
let x3 = 9 %Infinity;
let x4 = 8.9%2;
let x5 = NaN %5;
console.log("Modulo 1 : "+x);
console.log("Modulo 2 : "+x1);
console.log("Modulo 3 : "+x2);
console.log("Modulo 4 : "+x3);
console.log("Modulo 5 : "+x4);
console.log("Modulo 6 : "+x5);

//Exponentiation
let e1 = 5**5;
let e2 = -(5**4);
let e3 = 3**9.9;
let e4 = NaN**2;
console.log("Exponentiation 1 : "+e1);
console.log("Exponentiation 2 : "+e2);
console.log("Exponentiation 3 : "+e3);
console.log("Exponentiation 4 : "+e4);

//Incremental Operator 
let a =7;
b = a++;

let a1 = 7;
b1 = ++a1;
console.log("Incremantal operator 1 : "+a);
console.log("Incremantal operator 2 : "+b);
console.log("Incremantal operator 3 : "+a1);
console.log("Incremantal operator 4 : "+b1);

//Decremental
let n = 5;
m = n--;
let p = 5;
q = --p;
console.log("Decremental operator 1 : "+n);
console.log("Decremental operator 2 : "+m);
console.log("Decremental operator 3 : "+p);
console.log("Decremental operator 4 : "+q);

//Assignment
//Addition Assignment operator
let d = 10;
f = 20;
console.log(d);
console.log("Addition Assignment operator"+(d = f+16));
console.log("Subtraction Assignment Operator : "+(d=d-5 ));
console.log("Mul Assignment operator : "+(d = f*49));
console.log("Div Assignment operator : "+(d = d/2));
console.log("Mod Assignment operator : "+(f =f%3));

//left shift operator
let yu = 6;
console.log("Leftshift : "+(yu<<2));
console.log("Right Shift : "+(yu>>1));

//Comparison operator 
let v1 = 67;
v2 = 78;
let v3 = 45;
v4 = 45;
console.log("v1 == v2 : "+(v1 == v2));
console.log("v3 == v4 : "+(v3 == v4));
console.log("v1 != v4 : "+(v1 != v4));

//Logical Operator
let logi = 3;
console.log("Not operator : "+(!logi));
console.log("Not operator : "+(!!logi));
//AND
let ni = 0 , nj = 5 , nk =6 , nm =8;
console.log("And (ni&&nj&&nk) : "+(ni&&nj&&nk));
console.log("And (nj&&nk&&nm) : "+(nj&&nk&&nm));
//OR operator
let si =56 , sj = 78 , sg = 65;
console.log("si||sj : "+(si||sj));
console.log("sj||sk : "+(sj||sk));

// Bitwise operator
let vu =78 ,ju = 34 , ji =90;
console.log ("vu&ju :" +(vu&ju));
console.log("ju|ji : "+(ju|ji));
console.log("~ji : "+(~ji));
