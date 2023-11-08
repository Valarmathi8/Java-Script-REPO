function basicexe1(){
    var a=8,b=4,c=2;
    if(a>b && a>c){
      console.log(a+" is the largest");
    }
    else if(b<c){
      console.log(b+" is the smallest");
    }
    else{
      console.log(c);
    }
  }
  basicexe1();

  function findTriangleType(){
    var a=6,b=4,c=8;
    if(a==b==c)
    console.log("Equilateral Triangle")
  else if(a==b&&c)
  console.log("Isosceles Triangle")
else
console.log("Scalene Triangle")
  }
  findTriangleType();


  function checkinrange(){
    var num=25,start=20,range=30;
    if(num>=start&&num<=range)
    console.log("Between the range")
  else
  console.log("Outside the range")
  }
  checkinrange();


  function evalnumbers(){
var a=4,b=6,c=24;
if(a+b==c)
console.log("Add")
else if(a-b==c)
console.log("Subtract")
else if(a*b==c)
console.log("Multiply")
else if(a/b==c)
console.log("Divide")
else if(a%b==c)
console.log("Modulus")
else
console.log("Invalid Operation")
  }
  evalnumbers();


  function checkleapyear(){
    var year=2020;
    if(year%4==0 && year%100!=0 || year%400==0)
    console.log("Leap Year")
  else
  console.log("Not a Leap Year")
  }
  checkleapyear();


  function findgrade(){
    var mark=75;
    if(mark>90 && mark<=100)
    console.log("S Grade")
  else if(mark>80 && mark<=90)
  console.log("A Grade")
  else if(mark>70 && mark<=80)
  console.log("B Grade")
  else if(mark>60 && mark<=70)
  console.log("C Grade")
  else if(mark>50 && mark<=60)
  console.log("D Grade")
  else if(mark>40 && mark<=50)
  console.log("E Grade")
  else if(mark>0 && mark<=40)
  console.log("Student has failed")
  else
  console.log("Invalid marks")
  }
  findgrade();


  function finddaysinmonth(){
    var month=2;
    var year=2012;
    if( month==2 && year%4==0 )
       console.log("The month has 29 days")
    else if(month==2 && year%4!=0 )
     console.log("The month has 28 days")
    else if(month==4 || month==6 || month==9 || month==11)
    console.log("The month has 30 days")
    else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) 
    console.log("The month has 31 days")
    else
    console.log("Invalid month")
    }
finddaysinmonth()

