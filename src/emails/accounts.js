const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: '2019342@iiitdmj.ac.in',
        subject: 'Thanks for joining!',
        text: `Welcome, ${name}!. Let me know how you get along.`
    })

}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: '2019342@iiitdmj.ac.in',
        subject: 'Goodbye!',
        text: `Sorry to see you go, ${name}. Hope to see you again sometime.`
    })
}

module.exports = {
    sendWelcomeEmail, 
    sendCancellationEmail
}