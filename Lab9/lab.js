/*************************************** Question Number 1 ***************************************/




function Clock({ template }) {
      let timer;
      function render() {
          let date = new Date();
          let hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
          let mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
          let secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
          let output = template
              .replace('h', hours)
              .replace('m', mins)
              .replace('s', secs);
          console.log(output);
      }
      this.stop = function () {
          clearInterval(timer);
      };
      this.start = function () {
  
          render();
          timer = setInterval(render, 1000);
  //1-stop time after 10 seconds
          setTimeout(function( ) { clearInterval( timer ); }, 10000);
          
      };
  }
  let clock = new Clock({ template: 'h:m:s' });
  clock.start();

  //1-stop time after 10 seconds
  // setTimeout(function( ) { clearInterval( timer ); }, 10000);
    //2-start(),stop(),render() are inner functions
  // 3- local variable of constructor function?       
  //Answer: timer
  //4-what is the clock interface returned by the constructor function?
  //Answer: The this  reference of Clock object
  //5-closures are block of code.
  //Answer: closure are block of code that store information of methods that are being
  // returned or pass as parameter.
  //6-private variables and methods are used for encapsulation of code
  //you can acheive private in java script through inner function
  //7-java script is public by default that allow users to use its method openly
  //8-behind seen java class is same as function interface




/*************************************** Question Number 2 ***************************************/


class Node{
  constructor(){
 this.data = null;
  this.next = null;
  }

  set setData(data){
    this._data = data;
  }
 
  set setNext(next){
    this._next = next;
  }

   get getData(){
    return this._data ;
  }
 
  get getNext(){
    this._next;
  }
}

class LinkedList{

  constructor(){

  this.firstNode = null;
  this.lastNode = null;
  this.size = null;

  }

  set setfirstNode(node){
    this._firstNode = node;
  }
 
  get getfirstNode(){
    return this._firstNode ;
  }

  set setlastNode(node){
    this._lastNode = node;
  }

  get getlastNode(){
    this._lastNode;
  }

    set setSize(size){
    this._size++;
  }

  get getSize(){
    this._size;
  }


  Add (data){
    
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
 
    getSize (){
  return this.size;
}



printLinkList (){
  var currentNode = this.firstNode;
	    
	   let result = 'Expected Result: LinkedList{';
	    
	    for (let i = 0; currentNode != null; i++) {
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


 remove (data) {
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


}

let list = new LinkedList();
list.Add(1);
list.Add(2);
list.Add(3);
console.log(list.printLinkList());

list.remove(3);
console.log(list.printLinkList());



/*************************************** Question Number 3 ***************************************/

function Student(id){
  this.studentId = id;
  this.answerArray = [];

}

Student.prototype.addAnswer = function(quesiton){
    this.answerArray.push(quesiton);
}

function Question(qid,qans){
   this.qid = qid;
   this.qans = qans;
}
Question.prototype.CheckAnswer = function(answer){
     if(this.qans === answer){
       return true;
     }else{
       return false;
     }
}

function Quiz(questionMap,studentsArray){
    this.questionMap = questionMap;
    this.studentsArray = studentsArray;
    this.totalScore = null;
}

Quiz.prototype.scoreStudentBySid = function(sid){

      let score = 0;
      let selectStudent = new Student(sid);
      for(let i = 0; i < this.studentsArray.length;i++){
            if(this.studentsArray[i].studentId == sid){
           
              selectStudent = this.studentsArray[i];

              break;
            }
      }

       for(let i = 0 ; i < selectStudent.answerArray.length; i++  )
             {

              for (let j = 0 ; j < this.questionMap.length; j ++){

                      if(this.questionMap[j].qid === selectStudent.answerArray[i].qid ){
                         
                        if(this.questionMap[j].qans === selectStudent.answerArray[i].qans ){

                        score = score + 1; 
                        }  

                      }
              }

             }

            this.totalScore = this.totalScore + score;
             return score;

}

Quiz.prototype.getAverageScore = function(){

     return this.totalScore / this.studentsArray.length;
    
}



const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5