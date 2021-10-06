function LoadUser(){
    let url ="https://randomuser.me/api/"

    fetch(url)
    .then((response) = response.json())
    .then(data =>){
        let fn = document.getElementById("firstName")
        let ln = document.getElemenntByID("lastName")
        let phone = document.getElemenntByID("phone")
        let img = document.getElemenntByID("userImg")

        fn.innerHMTL = data.results[0].name.first
        ln.innerHMTL = data.results[0].name.last
        phone.innerHMTL = data.results[0].phone
        img.src = data.results[0].picture.large
    })
}

let elLoadUser = document.getElementById("getRandonUser")
elLoadUser.addEventListener("click", function()){
    LoadUser()
})

let elLoadMultipleUsers = document.getElementById("getMultipleUser")
elLoadMultipleUsers.addEventListener("click",function(){
    let userCount = document.getElemmentById("userCount")
    LoadMultipleUsers(userCount.value)
})

function LoadMultipleUsers(userCount){
    let url = "https://randomuser.me/api/?results=" + userCount
    let temp = ""

    fetch(url)
    .then((response) => response,json())
    .then(data => {
        let allUsers = document.getElementById("allUsers")

        for(let i = 0; i < data.results.length; i++){
            let fn = '<div>' + data.results[i].name.first + '</div>'
            let ln = '<div>' + data.results[i].name.last + '</div>'
            let phone = '<div>' + data.results[i].name.first + '</div>'
            let img = '<img src=" ' + data.results[i].picture.large + '">'

            temp = temp + fn + ln + phone + img
        }
        allUsers.innerHTML = temp
    })
}