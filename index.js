let studentMarks = prompt("Enter your marks");
 studentMarks = parseFloat(studentMarks);

   if(studentMarks>100 || studentMarks<=0){
    console.log("Enter marks between 0 and 100")
   } else if(studentMarks>79){
    console.log("Your grade is A");
   } else if(studentMarks>=60 && studentMarks<=79){
    console.log("Your grade is B");
   } else if(studentMarks>49 && studentMarks<=59){
    console.log("Your grade is C");
   } else if(studentMarks>=40 && studentMarks<=49){
    console.log("Your grade is D");
   } else {
    console.log("Your grade is E");
   }


