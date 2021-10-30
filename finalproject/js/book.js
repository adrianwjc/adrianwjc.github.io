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

    preOrderNow(userNameVal, userEmailVal,userVariantVal,userQuantityVal,userRemarksVal)
})


function preOrderNow(userName, userEmail, userVariant, userQuantity,userRemarks){
    let url = 'https://api.sheety.co/3916d578b401ffa66a19148295d570ad/finalProject/bookings';
    let body = {
        preorder: {
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
        console.log(json.preorder);
        alert(json.preorder.name +" have pre-ordered " + json.preorder.variant + " quantity " + json.preorder.quantity + " in the list.")
    });
}