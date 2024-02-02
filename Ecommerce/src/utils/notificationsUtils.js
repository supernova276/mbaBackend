const nodemailer=require("nodemailer")

const sendEmail=(emails,subject,html,text)=>{

    const emailIds=emails.join(",")

    let transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"dixitak2001@gmail.com",
            pass:"uqzj bkoj lfdx uluw"
        }
    });

    let mailDetails={
        from:"dixitak2001@gmail.com",
        to:emailIds,
        subject:subject
    }
    if(html){
        mailDetails.html=html
    }
    if(text){
        mailDetails.text=text
    }

    transporter.sendMail(mailDetails,function(err,data){

        if(err){
            console.log(`unbale to send email ${err}`)
        }
        else{
            console.log("email sent to emailIds")
        }
    })
    

}
module.exports={
    sendEmail
}