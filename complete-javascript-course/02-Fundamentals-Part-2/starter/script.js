// Section 2.17

/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

// Template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew)

// Strings with multiple line
console.log ('String with \n\
multiple \n\
line')

console.log (`String
multiple
line`
)

*/

// Section 2.18 : Taking Decisions: if/else statement

/*
const age = 16
// const isOldEnough = age >= 18
// const yearsLeft = 18 - age

if(age >= 18) {
    console.log(`You can drive now 👍`)
} else {
    const yearsLeft = 18 - age
    console.log(`You are not old enough. 🤪.  You have to wait another ${yearsLeft} years to get your license`)
}

const birthYear = 2012
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21
}

console.log (century)

*/

// Section 2.19: Coding Challenge #2

    // Fullfil Challenge 1 : Data set 1
    /*
    const markWeight1 = 78
    const markHeight1 = 1.69
    const johnWeight1 = 92
    const johnHeight1 = 1.95

    let markBMI1 = Number((markWeight1/(markHeight1**2)).toFixed(2))
    console.log(markBMI1)
    
    let johnBMI1 = Number((johnWeight1/(johnHeight1**2)).toFixed(2))
    console.log(johnBMI1)

    let markHigherBMI1 = markBMI1 > johnBMI1
    console.log('Does Mark have higher BMI: ', markHigherBMI1)

    if(markBMI1 > johnBMI1) {
        console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`)
    } else {
        console.log(`John's BMI (${johnBMI1}) is higher than Mark's! (${markBMI1})`)
    }

    // Fullfil Challenge 1 : Data set 2
    const markWeight2 = 95
    const markHeight2 = 1.88
    const johnWeight2 = 85
    const johnHeight2 = 1.76

    let markBMI2 = Number((markWeight2/(markHeight2**2)).toFixed(2))
    console.log(markBMI2)
    
    let johnBMI2 = Number((johnWeight2/(johnHeight2**2)).toFixed(2))
    console.log(johnBMI2)

    let markHigherBMI2 = markBMI2 > johnBMI2
    console.log('Does Mark have higher BMI: ', markHigherBMI2)

    if(markBMI2 > johnBMI2) {
        console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`)
    } else {
        console.log(`John's BMI (${johnBMI2}) is higher than Mark's! (${markBMI2})`)
    }

    */


// Section 2.20: Type Conversion and Coercion

// Type Conversion String to number
/*
const inputYear = '1991'
console.log(Number(inputYear));
let birthYear = Number(inputYear)
console.log(inputYear + 18)
console.log(birthYear);
console.log(birthYear + 18);

console.log('23' + '10' + 3)
console.log ('23' - (-10) - (-3))
*/


// Section 2.21: Truthy and Falsy Values
/*
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log({})
console.log(Boolean(''))
console.log(Boolean(NaN))
console.log(Boolean(null))

const money = 0

if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log('You should get a job!')
}

let height
if(height) {
    console.log('YAY! Height is defined')
} else {
    console.log('Height is undefined')
}

*/

// Section 2.22: Equality Operators: == vs. ===
/*
const age = '18';

if(age === 18) console.log('You just became an adult ;D (Strict)')

if(age == 18) console.log('You just became an adult :D (loose)')

const favorite = Number(prompt("What is your favorite number?"))
console.log(favorite)
console.log(typeof(favorite))

if (favorite == 23) {
    console.log('Cool!  23 is an amazing number!')
}

if (favorite === 23) {
    console.log('Perfect! you are an amazing number match')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('There is no cool number')
}

if (favorite !== '23') {
    console.log('Why not 23?')
}
*/

// Section 2.23 - 2.24: Boolean Logic, Logical Operators

/*
const hasDriversLicense = true
var hasGoodVision = true

console.log(hasDriversLicense && hasGoodVision)

const canDrive = hasDriversLicense && hasGoodVision

if(canDrive) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive ...')
}

const isTired = false

console.log("Is Tired = ", hasDriversLicense || hasGoodVision || isTired)

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired
if(shouldDrive) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive ...')
}

var hasGoodVision = false

console.log(hasDriversLicense && hasGoodVision)
console.log(hasDriversLicense || hasGoodVision)
console.log(hasDriversLicense && !hasGoodVision) 

*/

// Section 2.25: Coding Challenge #3

/*
const scoreDolphines1 = 96
const scoreDolphines2 = 108
const scoreDolphines3 = 89
const numberOfScoresDolphines = 3

const averageScoresDolphines = (scoreDolphines1 + scoreDolphines2 + scoreDolphines3) / 3

console.log(averageScoresDolphines)

const scoreKoalas1 = 88
const scoreKoalas2 = 91
const scoreKoalas3 = 110
const numberOfScoresKoalas = 3

const averageScoresKoalas = (scoreKoalas1 + scoreKoalas2 + scoreKoalas3) / 3

console.log(averageScoresKoalas)

if(averageScoresDolphines > averageScoresKoalas) {
    console.log("Dolphines are the Winner!!!")
} else if(averageScoresDolphines === averageScoresKoalas) {
    console.log("It is a tie!!!")
} else {
    console.log("Koalas are the Winner!!!")
}


const scoreDolphines11 = 97
const scoreDolphines12 = 112
const scoreDolphines13 = 101
const numberOfScoresDolphinesBonus1 = 3

const averageScoresDolphinesBonus1 = (scoreDolphines11 + scoreDolphines12 + scoreDolphines13) / numberOfScoresDolphinesBonus1

console.log(averageScoresDolphinesBonus1)

const scoreKoalas11 = 109
const scoreKoalas12 = 95
const scoreKoalas13 = 123
const scoreKoalas14 = 106
const numberOfScoresKoalasBonus1 = 3

const averageScoresKoalasBonus1 = (scoreKoalas11 + scoreKoalas12 + scoreKoalas13) / numberOfScoresKoalasBonus1
const averageScoresKoalasBonus2 = (scoreKoalas11 + scoreKoalas12 + scoreKoalas14) / numberOfScoresKoalasBonus1

console.log(averageScoresKoalasBonus1)
console.log(averageScoresKoalasBonus2)

const minimumScore1 = 100

if((averageScoresDolphinesBonus1 > averageScoresKoalasBonus1) && minimumScore1) {
    console.log("Dolphines are the Winner!!!")
} else if((averageScoresDolphinesBonus1 === averageScoresKoalasBonus1) && minimumScore1) {
    console.log("It is a tie!!!")
} else if((averageScoresDolphinesBonus1 < averageScoresKoalasBonus1) && minimumScore1) {
    console.log("Koalas are the Winner!!!")
} else {
    console.log("Nobody is winner")
}

if((averageScoresDolphinesBonus1 > averageScoresKoalasBonus2) && minimumScore1) {
    console.log("Dolphines are the Winner!!!")
} else if((averageScoresDolphinesBonus1 === averageScoresKoalasBonus2) && minimumScore1) {
    console.log("It is a tie!!!")
} else if((averageScoresDolphinesBonus1 < averageScoresKoalasBonus2) && minimumScore1) {
    console.log("Koalas are the Winner!!!")
} else {
    console.log("Nobody is winner")
}

*/

// Section 2.26: The Switch Statement

/*
const day = 'd'

switch(day) {
    case 'monday':
        console.log("Plan course structure")
        console.log('Go to coding meetup')
        break
    case 'Tuesday':
        console.log('Prepare theory videos')
        break
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples')
        break
    case 'friday':
        console.log('Records videos')
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D')
        break
    default: 
        console.log('Not a valid day')
}

if(day === 'monday') {
    console.log("Plan course structure")
    console.log('Go to coding meetup')
} else if(day === 'tuesday') {
    console.log('Prepare theory videos')
} else if(day === 'wednesday'|| day === 'thursday') {
    console.log('Write code examples')
} else if(day === 'friday'){
    console.log('Records videos')
} else if(day === 'saturday'|| day === 'sunday') {
    console.log('Enjoy the weekend :D')
} else {
    console.log('Not a valid day')
}

*/

// Section: 2.27: Statements and Expressions

/*
if (23>10) {
    const str = '23 is bigger'
    console.log (str)
}

function helloMe() {
    const str = '23 is much bigger'
    console.log(str)
}

helloMe();

function greet(greeting) {
    return greeting + ', How are you?'

}

console.log(greet("Sadi"))

let test1 = greet("Sadi")
document.getElementById('demo').innerHTML = test1
*/


// Section 2.28: The Conditional (Ternary) Operator

