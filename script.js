function convertToRoman(num) {
    var romanList = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    var romanNum = "";
    let i = 0;
    for (i in romanList) {
        while (num >= romanList[i]) {
            romanNum += i;
            num -= romanList[i];
        }
    }
    return romanNum;
}

convertToRoman(36);