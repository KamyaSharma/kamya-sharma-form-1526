function formValidation() {
    let fn = document.getElementById("fn").value;
    let em = document.getElementById("ue").value;
    let msg = document.getElementById("msg").value;
    let btn = document.getElementById("btn");
    let myForm = document.getElementById("myform");
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let collectedData = {
        fn: "",
        em: "",
        msg: ""
    };
    let errors = [];
    if (fn !== "") {
        collectedData.fn = fn;
    } else {
        errors.push("Please enter your Fullname.");
    }
    if (em !== "") {
        if (regex.test(em)) {
            collectedData.em = em;
        } else {
            errors.push("Invalid email!");
        }
    } else {
        errors.push("Please enter your email.");
    }
    if (msg !== "") {
        collectedData.msg = msg;
    } else {
        errors.push("Please enter your message.");
    }
    if (errors.length > 0) {
        console.log("Errors:")
        console.log(errors);
    } else {
        console.log("Collected Data:");
        console.log(collectedData);
        myform.reset();
    }
}
btn.addEventListener("click", formValidation);
