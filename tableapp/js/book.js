let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function (){
    let userName = document.getElementById("userName")
    let usernNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userRemarks = document.getElementById("userRemarks")
    let usernRemarksVal = userRemarks.value

BoonNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal)
})

function BookNow (UserName,userEmail, userPax, userRemarks){
    console.log(userName)
    console.log(userEmail)
    console.log(userPax)
    console.log(userRemarks)
}

}