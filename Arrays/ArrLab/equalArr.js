function equalArr(firstArr, secondArr) {
    flag = true;
    let sum = 0;
    for (let i = 0; i <= firstArr.length - 1; i++) {
        sum += Number(firstArr[i]);
        if (firstArr[i] == secondArr[i]) {
            continue;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
equalArr(['10', '20', '30'], ['10', '20', '30']);
