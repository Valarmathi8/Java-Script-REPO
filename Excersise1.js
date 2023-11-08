function ex1(){
    let a=3,b=-7,c=2;
    alert(a*b*c)
}
ex1();

function ex2(){
    for(var i=0; i<=15; i++){
    if(i%2==0){
        console.log(i+" is even");
    }
    else{
        console.log(i+" is odd");
    }
}
}
ex2();

function ex3(){
    var a=5,b=10;
    if(a>b){
        console.log(a+" is largest");
    }
    else if(a<b){
        console.log(b+" is largest");
    }
    else{
        console.log(a+" and "+b+" are equal");
    }
}
ex3();

function ex4(){
    var sum=0;
    for(var x=0;x<10;x++){
        if(x%3==0 || x%5==0){
            sum+=x;
        }
    }
    console.log(sum);
}
ex4();

function ex5(){
    for(var i=1;i<=100;i++){
        if(i%3==0 && i%5==0){
            console.log(i+" FizzBuzz");
        }
        else if(i%3==0){
            console.log(i+" Fizz");
        }
        else if(i%5==0){
            console.log(i+" Buzz");
        }
        else{
            console.log(i)
        }
    }
}
ex5();