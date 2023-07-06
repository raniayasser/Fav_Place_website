function FormValidation() {
    var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var massage = document.getElementById("massage").value;
  var error =document.getElementById("error");
  text="";

  if (name ==""||name.length<5) {
   text="Please Enter a Valid Name";
    error.innerHTML=text;
    return false;

  } else if (email.indexOf("@") == -1 || email.length < 7) {
    text="Please Enter a Valid Email";
    error.innerHTML=text;
    return false;
 

  } else if ( isNaN(phone)||phone.length != 11) {
    text="Please Enter a Valid Phone";
    error.innerHTML=text;
    return false;


  } else if (massage == "" || massage.length < 6) {
    text="Please Enter a Valid Massage";
    error.innerHTML=text;
    return false;


  } else {
   
    text="";
    error.innerHTML=text;
    alert("Sending..!");
    return true;

  }
}
