function matchPhoneNum(input) {
    let pattern = /\+359( |-)2\1\d{3}\1\d{4}\b/g;
    let phones = [];
    let match = pattern.exec(input);
    while (match != null) {
        phones.push(match[0]);

        match = pattern.exec(input);
    }
    console.log(phones.join(', '))
}
matchPhoneNum("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222");