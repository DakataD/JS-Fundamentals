function sortAnArr(input) {
    input.sort((a,b) => {
       let firstCrit =  a.length-b.length;
       let secondCrit = a.localeCompare(b);
       return firstCrit || secondCrit;
    })
    console.log(input.join('\n'))
}
sortAnArr(["gamma","alpha", "beta"])