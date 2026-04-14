let counter_home = 0
let counter_guest = 0
let  home_score = document.getElementById("home_score").innerText
let  guest_score = document.getElementById("guest_score").innerText




window.home_one = function (){
    counter_home += 1
    document.getElementById("home_score").innerText = counter_home
}

window.home_two = function (){
    counter_home += 2
    document.getElementById("home_score").innerText = counter_home
}

window.home_three = function (){
    counter_home += 3
    document.getElementById("home_score").innerText = counter_home
}

window.guest_one = function (){
    counter_guest += 1
    document.getElementById("guest_score").innerText = counter_guest
}

window.guest_two = function (){
    counter_guest += 2
    document.getElementById("guest_score").innerText = counter_guest
}

window.guest_three = function (){
    counter_guest += 3
    document.getElementById("guest_score").innerText = counter_guest
}

