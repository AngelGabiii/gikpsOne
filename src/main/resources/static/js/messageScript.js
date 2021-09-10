// Some custom validation
//function theCustomevalidation(){
//    
//    // Validate Username 
//    $('#usercheck').hide();     
//    let usernameError = true; 
//    $('#usernames').keyup(function () { 
//        validateUsername(); 
//    }); 
//      
//    function validateUsername() { 
//      let usernameValue = $('#usernames').val(); 
//      if (usernameValue.length === '') { 
//      $('#usercheck').show(); 
//          usernameError = false; 
//          return false; 
//      }  
//      else if((usernameValue.length < 3)||  
//              (usernameValue.length > 10)) { 
//          $('#usercheck').show(); 
//          $('#usercheck').html 
//("**length of username must be between 3 and 10"); 
//          usernameError = false; 
//          return false; 
//      }  
//      else { 
//          $('#usercheck').hide(); 
//      } 
//    } 
//  
//   // Validate Email 
//    const email =  
//        document.getElementById('email'); 
//    email.addEventListener('blur', ()=>{ 
//       let regex = 
///^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
//       let s = email.value; 
//       if(regex.test(s)){ 
//          email.classList.remove( 
//                'is-invalid'); 
//          emailError = true; 
//        } 
//        else{ 
//            email.classList.add( 
//                  'is-invalid'); 
//            emailError = false; 
//        } 
//    }); 
//      
//   // Validate Password 
//    $('#passcheck').hide(); 
//    let passwordError = true; 
//    $('#password').keyup(function () { 
//        validatePassword(); 
//    }); 
//    function validatePassword() { 
//        let passwrdValue =  
//            $('#password').val(); 
//        if (passwrdValue.length === '') { 
//            $('#passcheck').show(); 
//            passwordError = false; 
//            return false; 
//        }  
//        if ((passwrdValue.length < 3)||  
//            (passwrdValue.length > 10)) { 
//            $('#passcheck').show(); 
//            $('#passcheck').html 
//("**length of your password must be between 3 and 10"); 
//            $('#passcheck').css("color", "red"); 
//            passwordError = false; 
//            return false; 
//        } else { 
//            $('#passcheck').hide(); 
//        } 
//    } 
//          
//// Validate Confirm Password 
//    $('#conpasscheck').hide(); 
//    let confirmPasswordError = true; 
//    $('#conpassword').keyup(function () { 
//        validateConfirmPasswrd(); 
//    }); 
//    function validateConfirmPasswrd() { 
//        let confirmPasswordValue =  
//            $('#conpassword').val(); 
//        let passwrdValue =  
//            $('#password').val(); 
//        if (passwrdValue !== confirmPasswordValue) { 
//            $('#conpasscheck').show(); 
//            $('#conpasscheck').html( 
//                "**Password didn't Match"); 
//            $('#conpasscheck').css( 
//                "color", "red"); 
//            confirmPasswordError = false; 
//            return false; 
//        } else { 
//            $('#conpasscheck').hide(); 
//        } 
//    } 

// Submitt button 
//    $('#submitbtn').click(function () { 
//        validateUsername(); 
//        validatePassword(); 
//        validateConfirmPasswrd(); 
//        validateEmail(); 
//        if ((usernameError === true) &&  
//            (passwordError === true) &&  
//            (confirmPasswordError === true) &&  
//            (emailError === true)) { 
//            return true; 
//        } else { 
//            return false; 
//        } 
//    }); 
//    
//}








// Our custom alert
function customizedAlert(yourInfo, flag) {
    if (flag) {
        $('.alert').removeClass("alert-danger").addClass("alert-success");
    } else {
        $('.alert').removeClass("alert-success").addClass("alert-danger");
    }

    $('.alert').fadeIn(400);
    $('.alert').css("display", "block");
    $('.alert').text(yourInfo);
    setTimeout(function () {
        $('.alert').fadeOut();
    }, 5000);
}

function customizedAlertTwo(yourInfo, flag) {
    if (flag) {
        $('.alertTwo').removeClass("alert-danger").addClass("alert-success");
    } else {
        $('.alertTwo').removeClass("alert-success").addClass("alert-danger");
    }

    $('.alertTwo').fadeIn(400);
    $('.alertTwo').css("display", "block");
    $('.alertTwo').text(yourInfo);
    setTimeout(function () {
        $('.alertTwo').fadeOut();
    }, 5000);
}


function clearMessageFields() {
    $('#name').val("");
    $('#email').val("");
    $('#subject').val("");
    $('#message').val("");
}

//==Custom validation ==
function validatingAllFields() {
    if (nameValue.length <= 3 ||
            emailValue.length <= 3 ||
            subjectValue.length <= 3 ||
            messageValue.length <= 3) {

        $('#nameCheck').show();
        $('#emailCheck').show();
        $('#subjectCheck').show();
        $('#messageCheck').show();

        return false;
    } else {
        preventShowingDefaultValidationValues();
        console.log("the length of nameValue is" + nameValue.length);
    }
}

//To post a message

function postMessage() {
    $('#submitBtn').click(function () {
        //Gets the values from the various fields
        var jsonVar = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };

        //==========performing some kind of validation=====================

        var nameValue = $('#name').val();
        var emailValue = $('#email').val();
        var subjectValue = $('#subject').val();
        var messageValue = $('#message').val();

        if (nameValue.length <= 3) {
            $('#nameCheck').show();
            return false;
        }
        if (emailValue.length <= 3) {
            $('#emailCheck').show();
            return false;
        }
        if (subjectValue.length <= 3) {
            $('#subjectCheck').show();
            return false;
        }
        if (messageValue.length <= 3) {
            $('#messageCheck').show();
            return false;
        } else {
            preventShowingDefaultValidationValues();
            console.log("the length of nameValue is" + nameValue.length);
        }

        //======== Perform the ajax call here=============
        $.ajax({
            type: "POST",
            url: window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/api/sendMessage",
            data: JSON.stringify(jsonVar),
            contentType: "application/json",
            success: function (data) {
                customizedAlert("Thank you. Your message has been sent", true);
                console.log("Your Message was sent sucessfully");
                clearMessageFields();
            },
            error: function (error) {
                console.log("Could not perform the request");
                alert(error);
                customizedAlert("Sorry, your message was not sent", false);
            }
        });


    });

}

function subscribe() {
    $('#subcribeEmailBtn').on('click', function () {
        event.preventDefault(); // Prevents your webpage from reloading when the html emelent is surrounded by a form 
   //     Perform email verification
//    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//    email = $('#subEmailInput').val();
//    
//    if(filter.test(email.val())){
//        console.log("The filter matches");
        
         var jsonVar = {
            email: $('#subEmailInput').val()
        };

        $.ajax({
            type: "POST",
            url: window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/api/subscribe",
            data: JSON.stringify(jsonVar),
            contentType: "application/json",
            success: function (data) {
                console.log("The subcription was successfull");
                console.log(data);
                customizedAlertTwo("You have subcribed sucessfully", true);
                $('#subEmailInput').val("");
            },
            error: function (error) {
                console.log("Sorry there was an error subscribing to this website");
                customizedAlertTwo("Your subscription was not sucessfully sent", true);
            }
        });
        
//    }else{
//        alert("Please enter a valide email");
//        return false;
//    }

    });
}

function subscribeUsingEnterKey(){
   $('#subEmailInput').keydown( function(event){
        if (event.which===13){
            subscribe();
        }else{
            console.log("nothing happend");
        }
    }); 
}




function preventShowingDefaultValidationValues() {
    $('#nameCheck').hide();
    $('#emailCheck').hide();
    $('#subjectCheck').hide();
    $('#messageCheck').hide();
}






$(document).ready(function () {
    //alert("Hello, we are working");
    preventShowingDefaultValidationValues();
    postMessage();
    subscribeUsingEnterKey();
//    subscribe();
});