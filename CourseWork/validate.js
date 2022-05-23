function validateForm() {
    var x=document.forms["myForm"]["visitor_name"].value;if (x==null || x==""){alert("Name must be filled out");return false}
    var x=document.forms["myForm"]["visitor_secondName"].value;if (x==null || x==""){alert("SecondName must be filled out");return false}
    var x=document.forms["myForm"]["visitor_email"].value;
    var atpos=x.indexOf("@");var dotpos=x.lastIndexOf(".");if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
    {alert("Not a valid e-mail address");return false;}
    var x = document.forms["myForm"]["visitor_phone"].value;
    var phoneno = /^\d{10}$/;
     if (!x.match(phoneno)) { alert("Invalid phone number"); return false }
  }