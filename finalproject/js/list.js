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
        console.log(json.courtBooking);
        let bookingNameList = document.getElementById("bookingNameList")
        let bookingIds = []

        for(let k = bookingNameList.rows.length - 1; k > 0; k--){
            bookingNameList.deleteRow(k)
        }

        for( let i = 0; i<json.preOrder.length; i++){
            let gName = json.preOrder[i].name;
            let gEmail = json.preOrder[i].email;
            let gCourt = json.preOrder[i].variant;
            let gHour = json.preOrder[i].quantity;
            let gRemarks = json.preOrder[i].remarks;
            let gId = json.preOrder[i].id;
            let btnId = "delete"+ gId

            let row = bookingNameList.insertRow(bookingNameList.rows.length)
            row.insertCell(0).innerHTML = gId
            row.insertCell(1).innerHTML = gName
            row.insertCell(2).innerHTML = gEmail
            row.insertCell(3).innerHTML = Variant
            row.insertCell(4).innerHTML = Quantity
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

    let url = 'https://api.sheety.co/037280b6973c5dbe7ff7a69aaa72d0a9/courtBookingApp/courtBooking/2';
    fetch(url, {
        method: 'DELETE',
    }) 
            .then(() => {
            alert("Your Selection " + id + " been remove ")
            getBooking()
        });
}