let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function(){
    getBooking()
})

function getBooking(){
    let url = 'https://api.sheety.co/3916d578b401ffa66a19148295d570ad/finalProject/bookings';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json.booking);
        let bookingNameList = document.getElementById("bookingNameList")
        let bookingIds = []

        for(let k = bookingNameList.rows.length - 1; k > 0; k--){
            bookingNameList.deleteRow(k)
        }

        for( let i = 0; i<json.preorder.length; i++){
            let gName = json.preorder[i].name;
            let gEmail = json.preorder[i].email;
            let gVariant = json.preorder[i].variant;
            let gQuantity = json.preorder[i].quantity;
            let gRemarks = json.preorder[i].remarks;
            let gId = json.preorder[i].id;
            let btnId = "delete" + gId

            let row = bookingNameList.insertRow(bookingNameList.rows.length)
            row.insertCell(0).innerHTML = gId
            row.insertCell(1).innerHTML = gName
            row.insertCell(2).innerHTML = gEmail
            row.insertCell(3).innerHTML = gVariant
            row.insertCell(4).innerHTML = gQuantity
            row.insertCell(5).innerHTML = gRemarks
            row.insertCell(6).innerHTML = "<button id='"+ btnId + "'type='button' class='btn btn-danger'> Delete</button>"

            bookingIds.push(btnId)
        }

        for( let j = 0; j<bookingIds.length; j++){
            let el = document.getElementById(bookingIds[j])
            el.addEventListener("click", function(){
                let theId = el.id.replace("delete","")
                DeleteBooking(theId)
            })
        }       
    })
};


   

function DeleteBooking(id){

    let url = 'https://api.sheety.co/3916d578b401ffa66a19148295d570ad/finalProject/bookings';
    fetch(url, {
        method: 'DELETE',
    }) 
            .then(() => {
            alert("Your Selection " + id + " deleted ")
            getBooking()
        });
}