/* 2.Ders Ödevi */

//Soru 1
function findPrime(...numbers) {
    numbers.map((number, index) => {
        number % index == 0 ? console.log(`${number} sayısı asal`)
            : console.log(`${number} sayısı asal değil`)
    })
}

findPrime(2, 5, 8, 21, 13);
findPrime(3, 5)
console.log("-".repeat(10))

//Soru 2
function friendNumbers(number1, number2) {
    let sum1 = 0, sum2 = 0;
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 = sum1 + i;
        }
    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            sum2 = sum2 + i;
        }
    }

    if (number1 == sum2 && number2 == sum1) {
        console.log(`${number1} ve ${number2} arkadaş sayılardır`);
    }
    else {
        console.log(`${number1} ve ${number2} arkadaş sayı değillerdir`);
    }
}

friendNumbers(124, 150)
friendNumbers(220, 284)
console.log("-".repeat(10))

//Soru 3
function perfectNumbers() {
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        for (let x = 1; x < i; x++) {
            if (i % x == 0) sum = sum + x;
        }
        if (sum == i) console.log(`${i} sayısı mükemmel sayıdır.`)
        sum = 0;
    }
}

perfectNumbers()
console.log("-".repeat(10))

//Soru 4
function listPrimeNumber() {
    let primes = []
    for (let i = 1; i < 1000; i++)
    {
        let syc = 0;
        for (let j = 1; j <= i; j++) if (i % j == 0) syc++;
        if (syc == 2) primes.push(i);
    }
    console.log(`1000' e kadar olan asal sayılar : ${primes}`)
}

listPrimeNumber();



