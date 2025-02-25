const homeButton = document.getElementById("homebtn", "sublista")
const homeList = document.querySelector("#sublista")



homeButton.addEventListener("mouseover", function () {
    homeList.style.visibility = "visible"
})

homeButton.addEventListener("mouseout", function () {
    homeList.style.visibility = "hidden"
})


/*const numbers = [1, 2, 3, 4, 5]

const evenNumbers = numbers.filter(function(number){
    return number % 2 ===0
})

console.log(evenNumbers)

console.log(numbers[0])

const aboveTwoNumbers = numbers.filter(function(number){
    return number > 2
})

console.log(aboveTwoNumbers)

console.log(numbers.length)*/