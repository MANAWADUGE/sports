function validtext()
{

    if((document.logform.uname.value.length<1)&&(document.logform.pword.value.length<1))
    {
        window.alert("Please enter your Username and Password");
        return;
    }
    else  if(document.logform.uname.value.length<1)
    {
        window.alert("Username is Missing");
        return;
    }
    else if(document.logform.pword.value.length<1)
    {
        window.alert("Password is Missing");
        return;
    }
    if(document.logform.pword.value.length<7)
    {
        window.alert("Invalid Password (Password must contain atleast 6 characters)");
        return;
    }


}