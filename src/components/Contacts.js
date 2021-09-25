import React from 'react';
import './Contacts.css';



function Contacts() {


 

  function handleSubmit(event) {
    event.preventDefault();
    
    if(validate()===true){
      window.location.reload(false);
    }
  }
    return(
      <div class="wrappercontainer">
      <div class="wrapper">
      <h2>Pisite nam</h2>
      <div id="error_message"></div>
      <form id="myform" onSubmit={handleSubmit}>
        <div class="input_field">
            <input type="text" placeholder="Ime" id="name"/>
        </div>
        <div class="input_field">
            <input type="text" placeholder="Telefon" id="phone"/>
        </div>
        <div class="input_field">
            <input type="text" placeholder="Email" id="email"/>
        </div>
        <div class="input_field">
            <textarea placeholder="Predlog/sugestije" id="message"></textarea>
        </div>
        <div class="btn">
            <input type="submit"/>
        </div>
      </form>
    </div>
    </div>


    );

}

function validate(){
  var name = document.getElementById("name").value;
 
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Molim Vas unesite pravo ime";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(phone) || phone.length !== 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") === -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 40){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}

export default Contacts;