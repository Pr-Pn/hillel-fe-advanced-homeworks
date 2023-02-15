// 1)
/*let str = '';
for (let i = 20; i <= 30; i += .5) {
    str = str + i + ' ';
}
console.log(str);*/

// 2)
/*const rate = 27;
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} -> ${i * rate}`);
}*/

// 3)
/*const n = 50;
for (let i = 1; i <= 100; i++) {
    if (i * i <= n) {
        console.log(i);
    } else {
        break;
    }
}*/

// 4)
/*
const n = +prompt("Please type a number:");
console.log(isPrime(n) ? `${n} is prime` : `${n} is not prime`);

// let result = 'False';
// if (isPrime(n)) {
//     result = 'True';
// }
// console.log(result);

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
*/

// 5)
/*const x = 13;
switch (x%3 === 0) {
    case true:
        console.log('+');
        break;
    default :

}*/
const n = +prompt("Please type a number:");
console.log(logarithmCheck(n) ? 'Yes' : 'No');

function logarithmCheck(number) {
    let grade = 0;
    while (number >= 3 ** grade) {
        if (number === 3 ** grade) {
            return true;
        }
        grade++;
    }
    return false;
}

