
-Creation just write 
-execution again scan all program and assigned


1-Global Execution Context for makeArmy

LE:{   creation
     makeArmy:<function> , outer:null ,                                               TDZ { army}
    ThisBinding:Window
}

LE:{   execution
     makeArmy:<function> , outer:null ,  army = undefined          TDZ{pause}     
    ThisBinding:Window                             
     army[0];
}

2- makeArmy function  Execution Context

LE:{  creation.   


                                                                        TDZ{ shooters , i}
   outer : Global
    
 ThisBinding:Window                             


}

LE:{  Execution.  
                                                                        TDZ{ shooters , i}
 outet : Global , i=1,2,shooters:[fn,fn]


      
    
 ThisBinding:Window     
     
}

3-Execution Context for while iteration 1

LE:{  creation 
   Shooter:<anonymous function>,outer:makeArmy
 ThisBinding:Window     


}

LE:{  execution 
   Shooter:<anonymous function>,outer:makeArmy
 ThisBinding:Window     
Shooter (function calling)

}



4-Lexical Environment for army[0]

Free variable = i = 2

   


LE:{creation
Argument{length:0}Outer:while                                    
} 



5-what will army[0] alert

Nothing because no method call


6-Can you fix the code
Var j = i;
And j will be free variable


7-How will diagram change
j would be in creation and execution of while with value LE













=>Question Number 2

function printNumbers(fromIdex,to){
    let initial = fromIdex;
   let timerId =  setInterval(()=>{
     if(initial <= to){
      console.log(initial);
        initial ++;
     }
       
    },1000);

    setTimeout(() => { clearInterval(timerId); alert('Timer Stop'); }, (to - fromIdex + 2)*1000);

}
printNumbers(3,8);

=> Question Number 3

let i = 0;
setTimeout(()=>alert(i),100);
for(let j = 0;j<100000000;j++){
  i++;
}

-after loop = yes
-before loop = no
-in the beginning of loop = No
-what is alert going to show = 100000000






