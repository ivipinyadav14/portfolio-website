function sendMsg() {
    let fullName = document.getElementById("name").value;
    let msg = document.getElementById("msg").value;
    let email = document.getElementById("email").value;

    let body = "Name : " + fullName + "<br> Email : " + email + "<br> Message : " + msg;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vipinyadav.work@gmail.com",
        Password : "4CA07B939F4C15C08913D6C1CFA082E3FA0E",
        To : 'vipinyadav.work@gmail.com',
        From : "vipinyadav.work@gmail.com",
        Subject : "Message sent via My Portfolio Website",
        Body : body
    });
}