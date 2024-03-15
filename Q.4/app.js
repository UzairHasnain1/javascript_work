let rows = 0;
let char ="";

for (let i = 1; i <= rows; i++){

    for (let j = 1; j <= i; j++){
        char += j;
    }
    char += "/n";
}
console.log(char);