const homeButton = document.getElementById("homebtn", "sublista")
const homeList = document.querySelector("#sublista")



homeButton.addEventListener("mouseover", function() {
    homeList.style.visibility = "visible"
})

homeButton.addEventListener("mouseout", function() {
    homeList.style.visibility = "hidden"
})