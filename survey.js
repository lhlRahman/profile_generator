const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing in your spare time? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('What is you favourite genre of music? ', (answer4) => {
        rl.question('What is your favourite food? ', (answer5) => {
          rl.question('What is your favourite animal? ', (answer6) => {
            rl.question('What is your favourite superpower? ', (answer7) => {
  
  
  
              console.log(`Thank you for your valueable feedback: ${answer1} likes to ${answer2} and listen to ${answer3} in their spare time. ${answer1}'s favourite genre of music is ${answer4} and favourite food is ${answer5}. ${answer1}'s favourite animal is a ${answer6} and favourite superpower is ${answer7}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});