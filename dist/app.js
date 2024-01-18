function navtabs(tabs) {
    const tablets = document.querySelectorAll('.tablets')
    const tbbtn = document.querySelectorAll('.tabs button')
    tablets.forEach(content => {
        content.style.display = 'none'
    })

    const selectshow = document.getElementById(tabs)
    selectshow.style.display = 'block'

    tbbtn.forEach(content => {
        content.classList.remove('bg-blue-800')
        content.classList.remove('text-white')
    })


    const activetab = document.querySelector(`button[onclick = "navtabs('${tabs}')"]`)
    activetab.classList.add("bg-blue-800")
    activetab.classList.add("text-white")
    activetab.classList.add("duration-300")

}
navtabs('tab1')


// top---to---bottom
// var toTopButton = document.getElementById("to-top-button");
// if (toTopButton) {
//     window.onscroll = function () {
//         if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//             toTopButton.classList.remove("hidden");
//         } else {
//             toTopButton.classList.add("hidden");
//         }
//     };
//     window.goToTop = function () {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };
// }

// top---bottom---button


var addbtn = document.getElementById("add");
var subbtn = document.getElementById("sub");
var counting = document.getElementById("number");


addbtn.addEventListener("click", function () {
    if (counting.innerHTML < 20)
        counting.innerHTML = +counting.innerHTML + 1;
})
subbtn.addEventListener("click", function () {
    if (counting.innerHTML > 1) {
        counting.innerHTML = counting.innerHTML - 1;
    }

})
// checking---of--passwordd---strenghth____======

let pass = "1sdfjejerhfhhehehhehhrehhefh"
if (pass.length < 5) {
    console.log("password is weak")
} else if (pass.length > 6 && pass.length < 10) {
    console.log("password is medium")
}
else {
    console.log("password is strong")
}


// ticket--checking---age--based'''
let age = 77;
if (age <= 12) {
    console.log("ticket is 5 dollar")
}
else if (age > 13 && age < 64) {
    console.log("ticket is 10 dollar")
}
else {
    console.log("ticket is 7 dollar")
}

// number---checkin---task
let num1 = 2
let num2 = 2
let num3 = -4
if (num1 + num2 + num3 < 0) {
    console.log("number is negative")
} else if (num1 + num2 + num3 > 0) {
    console.log("number is positive")

}
else {
    console.log("number is zero")
}


// BMI----check--task
let BMI = 29.9

if (BMI < 18.5) {
    console.log("Underweight")
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal weight")
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("Overweight")
}
else {
    console.log("Obese")
}


// Palindrome---task--

function isPalindrome(word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('');
}
let names = "mama";
if (isPalindrome(names)) {
    console.log(names + " is a palindrome.");
} else {
    console.log(names + " is not a palindrome.");
}


// table--printing--task
for (let i = prompt(Number); i <= Number; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(` ${i} * ${j} = ${i * j}`)
    }
    break
}