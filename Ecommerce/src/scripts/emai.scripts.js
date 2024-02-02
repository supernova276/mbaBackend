const registerUser=()=>{

}
const bookingSuccess=(user,booking)=>{

    return {

        subject:`congratulations your bookiong is successful ${user.name}`,
        html:`
        <div>
        <h3>Hello ${user.name}</h3>
        <br/>
        your booking is confirmed successfully, here are your details
        bookingId:${booking._id}
        TheatreId:${booking.theatreId}
        </div>
        `
    }
}

module.exports={
    bookingSuccess,
    registerUser
}