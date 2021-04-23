
Question Number1;

let arr = [1,50,40,3,10];
let result  = arr.filter(num=>num>20)
.reduce((sum,current,index,arr)=>sum + current);
console.log(result);



Question Number 2:

let arrofString = ["holy","shit","match","worst","besteeeer","cooper","darkSide"];

let result2  = arrofString.filter(x=>x.length>=5 && (x.includes("a") || x.includes("A") ));

console.log(result2);


Q3:

function Employee(firstname, lastname,birthDay){ 
  this.firstname = firstname;
  this.lastname = lastname; 
  this.birthDay = birthDay; 

  this.getFullName = function(){
     return this.firstname + ' ' + this.lastname;
    }

  this.getAge = function(){

     var diff_ms = Date.now() - this.birthDay.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
}
const emp1 = new Employee("Muniba","Kayani",new Date(1993, 5, 2));


const emp2 = new Employee("kashif","jawad",new Date(2002, 4, 3));

const emp3 = new Employee("Johan","Santiago",new Date(2005, 5, 2));

const emp4 = new Employee("Ambasa","Yo",new Date(2006, 5, 2));

const emp5 = new Employee("yaya","Saiku",new Date(1992, 5, 2));

let arrayOfEmp = [emp1,emp2,emp3,emp4,emp5];

console.log("===========Employeewith Age more than 20=============");
let ageMore20 = arrayOfEmp.filter(x=>x.getAge()>20);
console.log(ageMore20);

let employeeBornAfter20 = arrayOfEmp.filter(x=>x.birthDay.getFullYear() > 2000)
.map(x=>x.getFullName());
console.log("===========Employee with birth year after 2000=============");
console.log(employeeBornAfter20);




