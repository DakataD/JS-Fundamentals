function factoriel(numOne,numTwo) {
    let numOneFacSum = 1;
    let numTwoFacSum = 1;
    for (let i = 1; i<=numOne; i++) {
        numOneFacSum = numOneFacSum*Number(i);
    }
    for (let z = 1; z<=numTwo; z++) {
        numTwoFacSum = numTwoFacSum*Number(z)
    }
    console.log((numOneFacSum/numTwoFacSum).toFixed(2))
}
factoriel(6,2)