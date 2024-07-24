// Function
var a = 10
var b = 20
function addition()
{
    var res = a+b;
    console.log("Addition of a and b :"+res)
}
addition()
//Function Eg
var factor = "SK"
var fmovie = "Remo"
var fplayer= "Dhoni"
function fav()
{
    console.log("Favourite Actor :"+factor )
    console.log("Favourite Movie :"+fmovie)
    console.log("Favorite Player : "+fplayer)
    
}
fav()
//Parameters in function
function add(a,b)
{
    c=a+b
    console.log(c)
}
add(10,20)
//find the area using function
function area(length,breadth)
{
    area = length*breadth
    console.log("Area is :"+area)
}
area(23,45)
//REturn type
function name()
{
    return "Karthika K"

}
var a = name()
console.log(a)

//return a value using return function
function ad(a,b)
{
    return a+b
}
var a=ad(12,34)
console.log(a)
//If else statement Eg-1
var rain = false
if(rain)
{
    console.log("Take an umbrella")
}
else
{
    console.log("enjoy the sunshine")
}
//If else statement Eg-2
var hw = false
if (hw)
{
    console.log("Great Job!")
}
else
{
    console.log("Finish your homework before playing")
}
//If else statement Eg-3
var score = 94
if (score>90){
    console.log("Excellent")
}
if(score>60 && score<80){
    console.log("Good")
}
if(score<50){
    console.log("Need to improve")
}
//If else statement Eg-3
var num = 10
if (num%2 ==0){
    console.log("The number is even")
}
if (num%2 !=0){
    console.log("The number is odd")
}


