function emailSend(){



  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "inkedbyanshul@gmail.com
",
    Password : "E5C253E66645A4FC6268C139EC598D3AF5DC
",
    To : 'anshularya512@gmail.com',
    From : "inkedbyanshul@gmail.com
",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
