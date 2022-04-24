
//1.write a program to ad 5 number
const num1 =5;
const num2 =13;
const num3 =7;
const num4 =21;
const num5 =48;7

console.log('sum is',num1+num2+num3+num4+num5);

//2.check whether number is even or odd

const rs=require('readline-sync');

const number=rs.question('type any number :');
if(number%2==0)
{
  console.log(number ,' is even number');
}
else
{
  console.log(number,'is odd  number');
}
//check minimum and maximum out of two number
const n1=129;
const n2=251;
if(n1<n2)
{
  console.log(n1+ 'is less than 251');
  
}
else
{
  console.log(n2+ 'is less than 251');
  
}
//4.check minimum number out of thfree number
const n3=18;
const n4=23;
const n5=17;

if(n3>n4)
{
  if(n3>n5)
  {
    console.log(n3+' is smallest number out of three');
  }
}
//find miniimum number out of three given number
const nu1=35;
const nu2=29;
const nu3=46;
if(nu1>nu2&&nu1>nu3)
   {
     console.log(nu1+'is maximum');
     
   }
else if(nu2>nu3)
{
  console.log(nu2+'is maximum');
}
else
{
  console.log(nu3+'is maximum');
}
  
//WAP to take an input from user any find it is prime or not

let i, c=0;
for(i=1;i<=number;i++)
  {
    if(number%i==0)
    {
      c++;
      
    }
  }
if(c==2)
{
  console.log('number is  prime')
  
}
else
{
  console.log('number is not prime');
  
}
//WAP to take input from user and check whether it is wekend or holiday

const day=rs.question('what is the day today:' );
if(day=='saturday'||day=='sunday')
{
  console.log(day,'is holiday');
}
else
{
  console.log(day,'is weekend');
}
//accept number from user any find its facorial

const userNumber=rs.question('enter any number :');
let j,fact=1;
for(j=1;j<=userNumber;j++)
  {
    fact=fact*j;
  }
console.log('factorial is :',fact);

//WAP to  take a number  input  from user and print multiplication table 12 times for that number


for(i=1;i<=12;i++)
  {
    console.log(12*i);
  }
