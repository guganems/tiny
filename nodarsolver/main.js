function solve (n) {
    let div = document.getElementById('container');
    let res = "1";
    let sum = "1" + "<br />";
    let isfour = false;
    for (let i = 0; i < n; i++) {
        let newStr = "";
        let arr = [];
        let count = 1;
        for (let j = 0; j < res.length; j++) {
            let next = res[j+1];
            if (res[j] == next) {
                count++;
                if (count > 3) {
                    isfour = true;
                    return;
                }
            }
            else {
                newStr += count;
                newStr += res[j];
                count = 1;
            }
        }
        res = newStr;
        sum += res + "<br />";
    }
    if (isfour) div.innerHTML += res;
    else div.innerHTML = sum;
}

solve(20);