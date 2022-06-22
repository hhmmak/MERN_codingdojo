function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

// async function
const fiveHeads = () => {
  return new Promise((resolve, reject) => {
    // your code here!
    let headsCount = 0;
    let attempts = 0;

    while (attempts <= 100 && headsCount < 5) {
      attempts++;

      let result = tossCoin();
      headsCount = result == "heads" ? headsCount + 1 : 0;
      console.log(`${result} was flipped, headsCount = ${headsCount}`);
    }
    if (attempts <= 100) {
      resolve(`It took ${attempts} tries to flip five "heads`);
    } else {
      reject(`Over 100 attempts made`);
    }
  });
};
fiveHeads()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
console.log("When does this run now?");

// sync function
// function fiveHeadsSync() {
//         let headsCount = 0;
//         let attempts = 0;
//         while(headsCount < 5) {
//             attempts++;
//             let result = tossCoin();
//             console.log(`${result} was flipped`);
//             if(result === "heads") {
//                 headsCount++;
//             } else {
//                 headsCount = 0;
//             }
//         }
//         return `It took ${attempts} tries to flip five "heads"`;
//     }
//     console.log( fiveHeadsSync() );
//     console.log( "This is run after the fiveHeadsSync function completes" );
