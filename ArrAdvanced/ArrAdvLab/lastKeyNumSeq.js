function lastKNumSeq(n,k) {
    let result = [1];
    
    for (let i = 1; i<n; i++) {
        let elements = result.slice(-k);
        let sum = 0;
        for (let element of elements) {
            sum+=element;
        }
        result.push(sum);
    }
    console.log(result.join(' '))
}
lastKNumSeq(8,2);