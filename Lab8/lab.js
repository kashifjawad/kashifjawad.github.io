/*************************************** Question Number 1 ***************************************/
//Object Literal

let student = {
    firstName:"",
    lastName:"",
    gradeArray:[]
      ,
    inputNewGrade:function(grade){
     this.gradeArray.push(grade);
    }
,
    computeAverage:function(){
        let sum = 0;
        for(let i = 0 ; i < this.gradeArray.length; i ++){
          sum = sum + this.gradeArray[i];
        }
        return sum / this.gradeArray.length;
    }
}

let std1 = Object.create(student);
let std2 = Object.create(student);
let std3 = Object.create(student);

std1.firstName = "kashif";
std1.lastName = "jawad";
std1.gradeArray = [];

std1.inputNewGrade(90);
std1.inputNewGrade(89);
std1.inputNewGrade(70);

std2.firstName = "daniya";
std2.lastName = "javed";
std2.gradeArray = [];

std2.inputNewGrade(50);
std2.inputNewGrade(50);
std2.inputNewGrade(40);

std3.firstName = "ahmad";
std3.lastName = "ali";
std3.gradeArray = [];
std3.inputNewGrade(80);
std3.inputNewGrade(80);
std3.inputNewGrade(80);

let newArray = [std1,std2,std3];

for(let i = 0 ; i < newArray.length; i ++){
     console.log( newArray[i].firstName + " " + newArray[i].lastName + " Avergae Grade is: "  + newArray[i].computeAverage());
    }



/*************************************** Question Number 2 ***************************************/
//Constructor Function
function student (firstName,lastName,gradeArray)  {

    this.firstName  =firstName;
    this.lastName = lastName;
    this.gradeArray = gradeArray;
      
}
student.prototype.computeAverage=function(){
        let sum = 0;
        for(let i = 0 ; i < this.gradeArray.length; i ++){
          sum = sum + this.gradeArray[i];
        }
        return sum / this.gradeArray.length;
    }

student.prototype.inputNewGrade = function(grade){
     this.gradeArray.push(grade);
    }

let std1 = new student("kashif","Jawad",[50,90,89]);
let std2 = new student("Daniyal","Javed",[70,30,59]);
let std3 = new student("Ahsan","Saleem",[40,70,69]);

let newArray = [std1,std2,std3];
for(let i = 0 ; i < newArray.length; i ++){
     console.log( newArray[i].firstName + " " + newArray[i].lastName + " Avergae Grade is: "  + newArray[i].computeAverage());
    }


/*************************************** Question Number 3 ***************************************/
//Sort an Array

Array.prototype.sorting = function(){
    // return newArray.sort();
    newArray = this;

    return newArray.sort();
  }


let newArray2 = [3, 2, 4, 5, 1];
console.log("Sorted Array ", newArray2.sorting());

/*************************************** (i) Question Number 4 Literal object ***************************************/




let Node =  {
   data:null,
   next:null
}

let LinkedList = {
  firstNode:null ,
   lastNode:null,
      size:null,

  add:function(value){
  
  let newNode = Object.create(Node);
   newNode.data = value;

  

    if (this.firstNode == null) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    }
    else {
      this.lastNode.next = newNode;
      this.lastNode = newNode;
    }

    this.size++;
   
  },

    getSize : function() {
    return this.size;
  }
  ,  
   printLinkList : function() {

   var currentNode = this.firstNode;
      
      result = 'Expected Result: LinkedList{';
      
      for (i = 0; currentNode != null; i++) {
        if (i > 0) {
          result += ',';
        }
        var dataObject = currentNode.data;
        
        result += (dataObject == null ? '' : dataObject);
          currentNode = currentNode.next;
      }
      result += '}';
  
      return result;


  },

    remove : function(data) {
    var currentNode = this.firstNode;
        if (this.size == 0) {
          return;
        }
                    
        var deleted = false;
                          
        if (data == currentNode.data) {
            
            if (currentNode.next == null) {
              this.firstNode.data = null;
              this.firstNode = null;
              this.lastNode = null;
              this.size--;
              return;
            }
            
          currentNode.data = null;
          currentNode = currentNode.next; 
          this.firstNode = currentNode;
          this.size--;
          return;
        }

          
        while (true) {
          
            if (currentNode == null) {
              deleted = false;
                break;
            }

            var nextNode = currentNode.next;
            if (nextNode != null) {
                if (data == nextNode.data) {
                    
                    var nextNextNode = nextNode.next;
                    currentNode.next = nextNextNode;
                    
                    nextNode = null;
                    deleted = true;
                    break;
                }
            }
                
            currentNode = currentNode.next;
        }

          this.size--;
        
  }


}

let list = Object.create(LinkedList);
list.add(4);
list.add(11);
list.add(111);
list.add(99);
list.remove(111);
list.add(44);
console.log(list.printLinkList());



// ************** (ii) Question 4 Constructor function **************************************

function Node(){
  this.data = null;
  this.next = null;
}

function LinkedList(){
  this.firstNode = null;
  this.lastNode = null;
  this.size = 0;

}

LinkedList.prototype.Add = function(data){
    
    var newNode = new Node();
    newNode.data = data;

    if (this.firstNode == null) {
      this.firstNode = newNode;
      this.lastNode = newNode;
    }
    else {
      this.lastNode.next = newNode;
      this.lastNode = newNode;
    }

    this.size++;
}

LinkedList.prototype.getSize = function(){
  return this.size;
}

LinkedList.prototype.printLinkList = function(){
  var currentNode = this.firstNode;
      
      result = 'Expected Result: LinkedList{';
      
      for (i = 0; currentNode != null; i++) {
        if (i > 0) {
          result += ',';
        }
        var dataObject = currentNode.data;
        
        result += (dataObject == null ? '' : dataObject);
          currentNode = currentNode.next;
      }
      result += '}';
  
      return result;
}

this.remove = function(data) {
    var currentNode = this.firstNode;

        if (this.size == 0) {
          return;
        }
          
        var wasDeleted = false;
                          
        if (data == currentNode.data) {
            
            if (currentNode.next == null) {
              this.firstNode.data = null;
              this.firstNode = null;
              this.lastNode = null;
              this.size--;
              return;
            }
            
          currentNode.data = null;
          currentNode = currentNode.next; 
          this.firstNode = currentNode;
          this.size--;
          return;
        }
          
        while (true) {
            if (currentNode == null) {
              wasDeleted = false;
                break;
            }

            var nextNode = currentNode.next;
            if (nextNode != null) {
                if (data == nextNode.data) {
                    
                    var nextNextNode = nextNode.next;
                    currentNode.next = nextNextNode;
                    
                    nextNode = null;
                    wasDeleted = true;
                    break;
                }
            }
                
            currentNode = currentNode.next;
        }
        
        if (wasDeleted) {
          this.size--;
        }
  }


let list = new LinkedList();
list.Add(4);
list.Add(11);
list.Add(111);
list.Add(99);
list.remove(111);
list.Add(44);
console.log(list.printLinkList());

