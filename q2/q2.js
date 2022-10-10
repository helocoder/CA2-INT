var buf = Buffer.from('Welcome to node js class');
var str = buf.toString();
//loop first 3 char
console.log("First 5 char");
for (var i = 0; i <5; i++) {
    console.log(str[i]);
  }
  //loop last 3 char
 console.log("last 3 char");
for(var j=str.length-3;j<str.length;j++)
{
    console.log(str[j])
}

  
  

  