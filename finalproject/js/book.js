let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click",function(){
    let userName  = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail  = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userVariant= document.getElementById("userVariant")
    let userVariantVal = userVariant.value

    let userQuantity = document.getElementById("userQuantity")
    let userQuantityVal = userQuantity.value

    let userRemarks  = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    preorderNow(userNameVal, userEmailVal,userVariantVal,userQuantityVal,userRemarksVal)
})


function preorderNow(userName, userEmail, userVariant, userQuantity,userRemarks){
    let url = 'https://api.sheety.co/3916d578b401ffa66a19148295d570ad/finalProject/bookings';
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            variant: userVariant,
            quantity: userQuantity,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then(json => {
        // Do something with object
        console.log(json.booking);
        alert(json.booking.name +" have pre-ordered " + json.booking.variant + " quantity " + json.booking.quantity + " in the list.")
    });
}