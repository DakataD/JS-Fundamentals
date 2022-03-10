function flag(input) {
    let days = Number(input.shift());
   
    let plunderForDay = Number(input.shift());
   
    let expectedPlunder = Number(input.shift());
  
    let total= 0;
    for (let i = 1; i <= days; i++) {
        total += plunderForDay;
        if (i % 3 === 0) {
            total += plunderForDay * 0.5;
        }
        if (i % 5 === 0) {
            total -= total * 0.3;
        }
    }
    if (total >= expectedPlunder) {
        console.log(`Ahoy! ${total.toFixed(2)} plunder gained.`);
    } else {
        let percentage = total / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
flag(['5','40','100']);