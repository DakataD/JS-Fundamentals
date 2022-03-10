function solve(arraySeq){
    let final_seq = []
    let counter = 0
    let final_counter = 0
    let number = 0
    let final_num = 0
    let max_achieved = false
    for(let i=0; i<arraySeq.length;i++){
        for(let j=i;j<arraySeq.length;j++){
            if(arraySeq[i]===arraySeq[j]){
                counter += 1
                number = arraySeq[i]
                if(counter === arraySeq.length){
                    max_achieved = true
                    break;
                }
            } else {
                if(final_counter < counter){
                    final_counter = counter
                    final_num = number
                    number = 0
                    counter = 0
                    break;
                } else {
                    counter = 0
                    number = 0
                    break;
                }
            }
        }
        if(max_achieved){
            final_counter = counter
            final_num = number
            break;
        }
    }
    for(let i=0;i<final_counter;i++){
        final_seq.push(final_num)
    }
    console.log(final_seq.join(' '))
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])