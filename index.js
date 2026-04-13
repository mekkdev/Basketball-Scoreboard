let counter_home = 0
let counter_guest = 0
let  home_score = document.getElementById("home_score").innerText
let  guest_score = document.getElementById("guest_score").innerText




function home_one(){
    counter_home += 1
    document.getElementById("home_score").innerText = counter_home
}

function home_two(){
    counter_home += 2
    document.getElementById("home_score").innerText = counter_home
}

function home_three(){
    counter_home += 3
    document.getElementById("home_score").innerText = counter_home
}

function guest_one(){
    counter_guest += 1
    document.getElementById("guest_score").innerText = counter_guest
}

function guest_two(){
    counter_guest += 2
    document.getElementById("guest_score").innerText = counter_guest
}

function guest_three(){
    counter_guest += 3
    document.getElementById("guest_score").innerText = counter_guest
}

