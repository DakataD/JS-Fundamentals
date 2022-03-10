function addAndSub(numOne,numTwo,numThree) {
    function sum(a,b) {
        return a+b;
    }
    function sub(a,b) {
        return a-b;
    }
    return sub(sum(numOne,numTwo),numThree);
}
    console.log(addAndSub(23,6,10))
