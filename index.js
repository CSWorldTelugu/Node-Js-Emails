var nm = require('nodemailer');
var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'youeemail@gmail.com',
            pass: 'apppassword'
        }
    }
);

var options = {
    from: 'youremail@gmail.com',
    to: 'csworlddoubts@gmail.com',
    subject: "Testing node emails",
    html: `<h1>Heloo welcome to our appplication</h1>
     <img src='cid:food' width='200px'>
     <button>Click Here </button>
    `,
    attachments: [
        {
            filename: 'food.jpeg',
            path: "https://images.pexels.com/photos/421809/pexels-photo-421809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            cid: 'food'
        }
    ]


};

transporter.sendMail(
    options, function (error, info) {
        if (error) {
            console.log(error)
        }
        else {
            console.log("sent ")
        }

    }
)