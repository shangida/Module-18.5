
var br = "</br>"

//practice problem-1 starts
/* var texts  = ["১) রাত ৮ টা বাজে মডিউল আনলক করো  " , "২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো ", "৩) ভিডিও দেখতে দেখতে নোটস নাও  "];
var br = "</br>"

document.write("<h1>using for loop</h1>" + br );

for(var i = 1; i <=10; i++)
{
    document.write(texts + br);
} */
//end

//practice problem-2 starts
/* var takeMoney = parseFloat(prompt("Enter your amount : "));


if(takeMoney>80000)
{
    document.write("ami mac kinbo");
}
else if(takeMoney>60000)
{
    document.write("ami gaming laptop kinbo");

}
else if(takeMoney>40000)
{
    document.write("ami lenovo yoga computer kinbo");
}
else if(takeMoney>20000)
{
    document.write("ami puran laptop kinbo");
}
else
{
    document.write("ami mobile kinbo");
} */
//end

//practice problem-3 starts
/* document.write("<h1>for loop use print text 39 bar</h1>")

var text = "আসকে আমার মন ভালো নেই";

for(var i = 1; i<=39; i++)
{
    document.write(text +br)
} */
//end

//practice problem-4 starts
/* for(var i=58; i<=98; i++)
{
    console.log(i);
} */
//end

//practice problem-5 starts
/* var i = 412;
while(i<=456)
{
    console.log(i);
    i+=2;
} */
//end

//practice problem-6 starts
/* document.write("odd number using for loop" + br)
for(var i=581; i<=623; i+=2)
{
    document.write(i +br);
} */
//end

//practice problem-7 starts
//Display the array elements as output one by one using while loop 
/* var js =["variable", " array", " data type", " while loop", " for loop"]
var i = 0;
while(i<js.length)
{
    document.write(js[i]);
    i++;
} */
//end


//practice problem-8 starts
/* var mobileName = ["vivo ", "lenevo ", "samsung ", "iphone ", "nokia ", "samphoney"];

for(var i=0; i<mobileName.length; i++)
{
    document.write(mobileName[i]);
} */
//end

//practice problem-9 starts
for(var i=30; i<=86; i++)
{
    if(i==44){
        break;
    }
    document.write(i + br);
}
//end

//practice problem-10 starts
var price = [45, 66, 23, 200, 50, 123, 100, 345, 80, 250, 50];
var i = 0;

while(i<price.length)
{
    console.log(price[i]);
    i++;

    if(price[i]>200){
        continue;
    }

}