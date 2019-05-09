/* function to submit form */
function submitForm() {
    document.studentForm.submit();
}

/* Function to hide error message */
function hideResult() {
    document.getElementById("result").style.display = "none";
}

/* function to hide result only with Email validation */
function hideEmailResult() {
    if (checkEmail()) {
        document.getElementById("result").style.display = "none";
    }
}

/* Function to show error message */
function showResult(result) {
    document.getElementById("result").innerHTML = result;
    document.getElementById("result").style.display = "block";
}


/* function to hide all response messages */
function hideResponses() {
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";
}

/* function to show success result message */
function showSuccess(result) {
    hideResponses();

    document.getElementById("success").innerHTML = result;
    document.getElementById("success").style.display = "block";
}

/* function to show error result message */
function showError(result) {
    hideResponses();

    document.getElementById("error").innerHTML = result;
    document.getElementById("error").style.display = "block";
}

/* function to show retrieved information from database */
function showData(jsonData) {

    var json = JSON.parse(jsonData)
    $("#sName").val(json.sName);
    $("#sPhoneNumber").val(json.sPhoneNumber);
    $("#sAddress").val(json.sAddress);
    $("#sDepartment").val(json.sDepartment);
    document.getElementById("data").style.display = "block";

}

/* function to hide data fields */
function hideData() {
    document.getElementById("data").style.display = "none";
    document.getElementById("error").style.display = "none";
    document.getElementById("success").style.display = "none";
}

/* function to check Email */
function checkEmail() {
    var email = document.studentForm.sEmail.value;
    /* regular expression to check email format */
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.studentForm.sEmail.value)) {
        return true;
    }
    var message = "Enter valid email address";
    showResult(message);
    return false;

}

/* function to get length of phone number field */
function getLength() {
    return document.studentForm.sPhoneNumber.value.length;
}

/* function to check entered key number or not */
function IsNumeric(e) {
    var keyCode = e.which ? e.which : e.keyCode
        /* checking entered key is number */
    var number = ((keyCode >= 48 && keyCode <= 57));
    if (!number) {

        message = "Please enter only numbers";
        showResult(message);
        return false;
    }
    /* restricting entering more than 10 numbers */
    if (getLength() > 9) {
        message = "Invalid Mobile Number";
        showResult(message);
        return false;
    }
}

/* function to check name field empty or not */
function checkNameEmpty() {
    var sName = document.studentForm.sName.value;
    if (sName == "" || sName == null) {
        var message = "Name should not be empty";
        showResult(message);
        return true;
    } else {
        hideResult();
        return false;
    }
}

/* function to check email field is empty or not */
function checkEmailEmpty() {

    var email = document.studentForm.sEmail.value;
    if (email == "" || email == null) {
        var message = "Email should not be empty";
        showResult(message);
        return true;
    } else
        checkEmail();
    hideResult();
    return false;
}

/* function to check phone number field empty or not */
function checkPhoneEmpty() {
    var phoneNumber = document.studentForm.sPhone.value;

    if (phoneNumber == "" || phoneNumber == null) {
        var message = "Phone number should not be empty";
        showResult(message);
        return true;
    } else {
        if (phoneNumber.length != 10) {
            showResult("Invalid Phone Number");
            return true;
        }
        hideResult();
        return false;
    }

}

/*function to check Address field empty or not */
function checkAddressEmpty() {
    var address = document.studentForm.sAddress.value;
    if (address == "" || address == null) {
        var message = "Address should not be empty";
        showResult(message);
        return true;
    } else
        hideResult();
    return false;
}

/* function to check department field empty or not */
function checkDepartmentEmpty() {
    var department = document.studentForm.sDepartment.value;
    if (department == "" || department == null) {
        var message = "Department should not be empty";
        showResult(message);
        return true;
    } else
        hideResult();
    return false;
}

/* function to validate all fields when form submitted */
function validate() {

    if (checkEmailEmpty()) {
        return false;
    } else
    if (checkNameEmpty()) {
        return false;
    } else
    if (!checkEmail()) {
        return false;
    } else
    if (checkPhoneEmpty()) {
        return false;
    } else
    if (checkAddressEmpty()) {
        return false;
    } else
    if (checkDepartmentEmpty()) {
        return false;
    }

    return true;

}
