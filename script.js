function validateForm() 
{
    event.preventDefault();

    let first = document.getElementById("first");
    let last = document.getElementById("last");
    let npi = document.getElementById("npi");
    let address = document.getElementById("address1");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");

    if (first.value.length == 0 || 
        last.value.length == 0 || 
        npi.value.length == 0|| 
        address.value.length == 0|| 
        phone.value.length == 0|| 
        email.value.length == 0) 
    {
        alert("Please fill out all fields!");
        return false;
    }
    else 
    {
        document.getElementById("regForm").submit();
    }
}

