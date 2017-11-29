(function(){
//Initialize Firebase	
/*var config = {
    apiKey: "AIzaSyAI4RD9LoiAism8TuzwmpYRNSMaeGwBwV8",
    authDomain: "dishedout-99414.firebaseapp.com",
    databaseURL: "https://dishedout-99414.firebaseio.com",
    projectId: "dishedout-99414",
    storageBucket: "dishedout-99414.appspot.com",
    messagingSenderId: "949450220295"
  };
  firebase.initializeApp(config);*/

        // Initialize Firebase
        var config = {
        apiKey: "AIzaSyCdM0cDcs2qJB2llg1a-61TaaABpgzfR-A",
        authDomain: "test-635ac.firebaseapp.com",
        databaseURL: "https://test-635ac.firebaseio.com",
        projectId: "test-635ac",
        storageBucket: "",
        messagingSenderId: "88199967986"
        };
        firebase.initializeApp(config);*/

  var ref = firebase.database().ref();
  //Get Elements
  var entEmail = document.getElementById('entEmail');
  var entPassword = document.getElementById('entPassword');
  var entcomName = document.getElementById('entcomName');
  var entName = document.getElementById('entName');
   var enterEmail = document.getElementById('enterEmail');
  var enterPassword = document.getElementById('enterPassword');
  var enterEmail1 = document.getElementById('enterEmail1');
  var btnSignIn = document.getElementById('btnSignIn');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogOut = document.getElementById('btnLogOut');
  
  //add Login event
  btnSignIn.addEventListener('click', e => {
	  //Get Email and Password
	  var email = entEmail.value;
	  var pass = entPassword.value;
	  var auth = firebase.auth();
	  
	  //LogIn
	  var promise = auth.signInWithEmailAndPassword(email, pass); 
	  promise.catch(e =>{
		   document.getElementById("incorrect").style.display = "block";
	  });
  });
  
  //Sign Up
  btnSignUp.addEventListener('click', e => {
	   
     var comName= entcomName.value;
      var Name = entName.value;
	  var email = enterEmail.value;
      var pass = enterPassword.value;
	var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
   console.log(email, pass, comName);
       firebase.auth().createUserWithEmailAndPassword(email, pass).then(user =>{
		 firebase.auth().signInWithEmailAndPassword(email, pass).then(user =>{
			   
            var staff=firebase.database().ref("User").child(comName).child(Name); 
               
			   staff.set({
				   Name, 
				   email,
				   comName,
			   },function(error){
				   if(error)
                    console.log("No Data Saved");
                //else
                   // window.location.replace("choice.html");
			   }) 				   
			   
               
            })
        .catch(error=>{
              console.log(error);
               });
       })
      /*.catch(error => {
        console.log(error);
      });*/
       
});
      
      
      
      
		  /* promise.catch(e=>console.log("User is authenticated, attempting to enter the user data now..."));
		    firebase.database().ref('users/' + userId).set({
            firstname: firstName,
            surname: surName,
            email: email
			
        });

    }, function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        Console.log("There was an error: " + errorCode + "." + errorMessage);
        // ...
    });
});
		  
   // const degree=yourSelect.options[yourSelect.selectedIndex].value;
     /* var users=firebase.database().ref().child("User");
		
    console.log(email, pass, firstName);
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then(user => {
       firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(user =>{
           users=ref.child(degree).child(name); users.set({firstName, surName, email,} ,function(error){
                if(error)
                    console.log("No Data Saved");
				alert ("Welcome");
               /* else
                    window.location.replace("");
            })
            })
        .catch(error=>{
              console.log(error);
               });
       })
      .catch(error => {
        console.log("Create Error");
      });
       
      })
      */
      
    //  });
      
  /*add SignUp event
  btnSignUp.addEventListener('click', e => {
	   //Get Email and Password
	  var firstName = entfirstName.value;
	  var lastName = entsurName.value; 
	  var email1 = enterEmail.value;
	  var pass1 = enterPassword.value;
	  var auth = firebase.auth();
	  
	  //SignUp
	  var promise = auth.createUserWithEmailAndPassword(email1, pass1); 
	  promise
	  .catch(e => console.log(e.message));
	 /* var authData = ref.getAuth();
	  if(authData)
		ref.child('users').child(authData.uid).set({ "Firstname": firstName, "Secondname": secondName});
	  else
		  log.console("Didn't add names");*/
  
  
     btnLogOut.addEventListener('click', e => {
		 firebase.auth().signOut();
	 });
  
	  firebase.auth().onAuthStateChanged(firebaseUser => {
		  if(firebaseUser){
			  var reff = firebase.database().ref().child("curLog");
			  var sendInfo = entEmail.value;
			  if(!sendInfo == ""){
				  reff.set({Logged:sendInfo});
			   window.location="choice.html";
			  }else{
				  sendInfo = enterEmail.value;
				  reff.set({Logged:sendInfo});
			      window.location="choice.html";
			  }
	 
		  }//else{
			// var reff = firebase.database().ref().child("curLog");	
			//  reff.set({Logged:""});
		  // }
	   });
	   
	   btnReset.addEventListener('click', e => {
          var email2 = enterEmail1.value;
		  var auth = firebase.auth();

          var promise = auth.sendPasswordResetEmail(email2);
		  promise
	  .catch(e => console.log(e.message));
	  alert("Email Sent");
  });
		  
			  
}());
 function showDiv(){
   document.getElementById('container2').style.display = "block";
    document.getElementById('container').style.display = "none";
}
function showDiv1(){
   document.getElementById('container3').style.display = "block";
    document.getElementById('container').style.display = "none";
}
