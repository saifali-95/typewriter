const sentence = "hello there from lighthouse labs";

let timeDelay = 50;
let decentTime = 50+(sentence.length*50); 

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write (char);
  }
  , timeDelay)
timeDelay +=50;
}

setTimeout(() =>{
  console.log('');
},decentTime)


