function fiveHeads() {
        return new Promise( (resolve, reject) => {
        
       
                let headsCount = 0;
                let attempts = 0;
        
                function flipCoin() {
                    attempts++;
                    let result = tossCoin();
                    console.log(`${result} was flipped`);
        
                    if (result === "heads") {
                        headsCount++;
                    } else {
                        headsCount = 0;
                    }
        
                    if (headsCount === 5) {
                        resolve(`It took ${attempts} tries to flip five "heads" in a row.`);
                    } else if (attempts >= 10000) { // Optional: A condition to avoid infinite loops
                        reject('Too many attempts, stopping...');
                    } else {
                        // Recursively call flipCoin to continue flipping
                        flipCoin();
                    }
                }
        
                flipCoin();
            });
     
               }
    
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );
    