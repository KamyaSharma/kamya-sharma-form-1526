let btn = document.getElementById("btn");

function formValidation() {
    let fna = document.getElementById("fn").value;
    let em = document.getElementById("ue").value;
    let msg = document.getElementById("msg").value;
    let top = document.getElementById("top");

    let regex = /^[a-zA-Z][a-zA-Z0-9\.]{1,20}(@)[a-zA-Z]{2,7}(\.)[a-zA-Z]{2,6}$/;
    let collectedData = {
        fn: "",
        em: "",
        msg: ""
    };
    let errors = [];
   
    if (fna != "") {
     
        collectedData.fn = fn;
    } else {
        console.log(fna + "it run");
        let html = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
       <strong>Error! </strong> You should check Your Full Name.
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>`;
        top.innerHTML = html;

        errors.push("Please enter your Fullname.");
    }
    if (em !== "") {
        if (regex.test(em)) {
            
            collectedData.em = em;
        } else {
            let html = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
       <strong>Error! </strong> You should check Your Email.
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>`;
            top.innerHTML = html;
            errors.push("Invalid email!");
        }
    } else {
        let html = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
       <strong>Error! </strong> You should check Your Email.
       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
         <span aria-hidden="true">&times;</span>
       </button>
     </div>`;
        top.innerHTML = html;
        errors.push("Please enter your email.");
    }
    if (msg !== "") {
        
        collectedData.msg = msg;
    } else {
        let html = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Error! </strong> You should check Your Message field.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
        top.innerHTML = html;
        errors.push("Please enter your message.");
    }
    if (errors.length > 0) {
        console.log("Errors:")
        console.log(errors);
    } else {
        let html = `<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Success! </strong> Successfully submited.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
        top.innerHTML = html;
        console.log("Collected Data:");
        console.log(collectedData);
        myform.reset();
    }
}
btn.addEventListener("click", formValidation);
