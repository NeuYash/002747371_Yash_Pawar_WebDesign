$(document).ready(function () {
    // Validate Username
    $("#userValidation").hide();

    let usernameError = true;
    $("#username").keyup(function () {
        usernameValidation();
    });
    $("#username").blur(function () {
        usernameValidation();
    });
    $("#email").keyup(function () {
        emailValidation();
    });
    $("#email").blur(function () {
        emailValidation();
    });
    $("#pw").blur(function () {
        passwordValidation();
    });
    $("#pw").blur(function () {
        passwordValidation();
    });
    $("#submitBtn").click(function () {
        btnVal();
    });



});


function usernameValidation() {
    let uName = $("#username").val();
    var regexAlpha1 = /^[@~`!@#$%^&*()_=+\\\\';:\"\\/?>.<,-]*$/i;
    var pattern = /^[A-Za-z0-9 '.-]+$/;
    //$("#userValidation").hide();
    if (uName.length == "") {
        $("#userValidation").show();
        $("#userValidation").html("Username is missing");
        uNameError = true;
        disableButton();
        return false;
    } else if (uName.length < 3 || uName.length > 10) {
        let submit = $("#submitBtn").val();
        $("#userValidation").show();
        $("#userValidation").html("**length of username must be between 3 and 10");
        disableButton();
        uNameError = false;
        return false;
    } else if (!pattern.test(uName)) {
        $("#userValidation").show();
        $("#userValidation").html("No special charactes allowed");
        uNameError = true;
        disableButton();
        return false;

    }
    else {
        $("#userValidation").hide();
        enableButton()
    }
}
function disableButton() {
    let submit = $("#submitBtn").val();
    $('#submitBtn').prop("disabled", true);
}
function enableButton() {
    // let uName = $("#username").val();
    // let emailInput = $("#email").val();
    // let passwordInput = $("#pw").val();
    let submit = $("#submitBtn").val();

    // if(uName.length == ""|| uName.length < 3 || uName.length > 10||emailInput.length == ""||passwordInput.length == ""||passwordInput.length < 3 || passwordInput.length > 10){
    //     $('#submitBtn').prop("disabled", true);  
    // }
    $('#submitBtn').prop("disabled", false);
}

function emailValidation() {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@northeastern.edu$/;
    let emailInput = $("#email").val();
    //$("#userValidation").hide();
    if (emailInput.length == "") {
        $("#emailIdValidation").show();
        $("#emailIdValidation").html("Email Id is missing");
        emailError = true;
        disableButton();
        return false;
    } else if (!emailRegex.test(emailInput)) {
        $("#emailIdValidation").show();
        $("#emailIdValidation").html("Invalid Email.Please enter Northeastern id");
        emailError = false;
        disableButton();
        return false;
    } else {
        $("#emailIdValidation").hide();
        enableButton();
    }
}

function passwordValidation() {
    let passwordInput = $("#pw").val();
    //var regexPass = /$%^&*()_+{}~/;
    var regexPass = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g
    //$("#userValidation").hide();
    if (passwordInput.length == "") {
        disableButton();
        $("#passwordValidation").show();
        $("#passwordValidation").html("Please fill in your password");
        $('#submitBtn').prop('disabled', true)
        passError = true;
        //disableButton();
        return false;
    } else if (passwordInput.length < 3 || passwordInput.length > 10) {
        $("#passwordValidation").show();
        $("#passwordValidation").html("Password must be of 3 to 10 characters");
        passError = false;
        disableButton();
        return false;
    }else if(!regexPass.test(passwordInput)){
        $("#passwordValidation").show();
        $("#passwordValidation").html("Password must have a special characters");
        passError = false;
        disableButton();
        return false;
    }
    else {
        $("#passwordValidation").hide();
        enableButton();
    }
}


function btnVal() {
    let uName = $("#username").val();
    let emailInput = $("#email").val();
    let passwordInput = $("#pw").val();
    let submit = $("#submitBtn").val();

    if (uName.length == "" || uName.length < 3 || uName.length > 10 || emailInput.length == "" || passwordInput.length == "" || passwordInput.length < 3 || passwordInput.length > 10) {
        $('#submitBtn').prop("disabled", true);
        $("#errmssg").show();
        $("#errmssg").html("Please Enter all the mandatory fields before submitting ");



    } else {
        $('#submitBtn').prop("disabled", false);
        // $("input[type=text], textarea").val("")
        $("input[type=email], textarea").val("")
        $("input[type=password], textarea").val("")


    }
}