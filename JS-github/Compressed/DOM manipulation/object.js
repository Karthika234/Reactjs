/*
let car ={
    Name :'Swift',
    color :'Black'
};
car.model = function(){
    console.log("Newly Launched Model!!!");
}
car.model();
*/
function Person (fName,lName){
    this.fName = fName;
    this.lName = lName;
    this.getFullName = function(){
        return this.fName + " "+this.lName;
    }
}
let person = new Person("Karthika ","K");
let person2= new Person("Janes","K")
console.log(person.getFullName());
console.log(person2.getFullName());