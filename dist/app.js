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