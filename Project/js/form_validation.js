
	function form_validation()
	{
		var name = document.forms["registration_form"]["Name"];
		var email = document.forms["registration_form"]["EMail"];
		var phone = document.forms["registration_form"]["Phone"];
		var what =  document.forms["registration_form"]["Subject"];
		var password = document.forms["registration_form"]["Password"];
		var address = document.forms["registration_form"]["Address"];
		var gender = document.forms["registration_form"]["Gender"];

		if (name.value == "")
			{
				alert("Please enter your name.");
				name.focus();
				return false;
			}
			
	
		if (address.value == "")
			{
				alert("Please enter your address.");
				name.focus();
				return false;
			}

		if (email.value == "")
			{
				alert("Please enter a valid e-mail address.");
				email.focus();
				return false;
			}

		if (email.value.indexOf("@", 0) < 0)
			{
				alert("Please enter a valid e-mail address.");
				email.focus();
				return false;
			}

		if (email.value.indexOf(".", 0) < 0)
			{
				alert("Please enter a valid e-mail address.");
				email.focus();
				return false;
			}

		
		 if (password.value == "")
			{
				alert("Please enter your password");
				password.focus();
				return false;
			}
		
		if((password.value).length < 8) 
			{
				
				alert("Password must be of minimum 8 characters.");
				password.focus();
				return false;	
			}

		if (phone.value == "")
			{
				alert("Please enter your telephone number.");
				phone.focus();
				return false;
			}
			
		
			
		if((phone.value).length > 10)
		{
			
			alert("Please enter valid phone number i.e., 10.");
			phone.focus();
			return false;
		}
		
		if((phone.value).length  < 10)
		{
			
			alert("Please enter valid phone number i.e., 10.");
			phone.focus();
			return false;
		}

		if ( (gender[0].checked == false ) && (gender[1].checked == false ) ) 
			{
				alert ( "Please choose your Gender: Male or Female" ); 
				
				return false;
			}
		
		if (what.selectedIndex < 1)
			{
				alert("Please enter your course.");
				what.focus();
				return false;
			}
		

		return true;
	}
	
/* 	function submit_function() 
	{
		var txt;
		if (confirm("Are you sure ?")) {
			txt = "Thank You !";
		} else {
			txt = "Why not sure ?";
		}
		document.getElementById("demo").innerHTML = txt;
	} */