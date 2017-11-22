		// Initialize Firebase
		var config = {
		apiKey: "AIzaSyCdM0cDcs2qJB2llg1a-61TaaABpgzfR-A",
		authDomain: "test-635ac.firebaseapp.com",
		databaseURL: "https://test-635ac.firebaseio.com",
		projectId: "test-635ac",
		storageBucket: "",
		messagingSenderId: "88199967986"
		};
		firebase.initializeApp(config);

		$(document).on("click", "#s", function(){
			document.getElementById("workStarters").style.display = 'block';
			document.getElementById("workMains").style.display = 'none';
			document.getElementById("workDesserts").style.display = 'none';
		});
		$(document).on("click", "#m", function(){
			document.getElementById("workStarters").style.display = 'none';
			document.getElementById("workMains").style.display = 'block';
			document.getElementById("workDesserts").style.display = 'none';
		});
		$(document).on("click", "#d", function(){
			document.getElementById("workStarters").style.display = 'none';
			document.getElementById("workMains").style.display = 'none';
			document.getElementById("workDesserts").style.display = 'block';
		});


		document.getElementById("workStarters").style.display = 'none';
		document.getElementById("workMains").style.display = 'none';
		document.getElementById("workDesserts").style.display = 'none';
		/*Starters*/
		var stableRef = firebase.database().ref().child("roma").child("dockets").child("starter");
		stableRef.on("child_added", snap=>{
			//console.log(snap.key);
			$("#starterDocketDisplay").append("<div class='theDocket'> <div class='docketHeader'> <div class='tNum'><h2>Table "+snap.key+"</h2></div> <div class='logo'>D</div> <div id='demo' class='demo"+snap.key+"'></div> </div> <div class='docketContents' id='Table"+snap.key+"'></div> <button class='TheSButton' id = 'true' value='"+snap.key+"'>Order In</button><button class='btn' value='"+snap.key+"'>Done</button> </div>");

			var d = new Date();
		    var n = d.getHours();
		    var s = d.getMinutes();
		    var len = s.toString().length;
		    //console.log(len);
		    if(len == 1){
		    	$(".demo"+snap.key).append("<h2>" + n + ":0" + s + "</h2>");
		    }
		    else{
		        $(".demo"+snap.key).append("<h2>" + n + ":" + s + "</h2>");
			}
		});

		// $(document).on('click','.TheSButton', function() {
		//     var tableNumber = this.getAttribute("value");  
		//     var search = firebase.database().ref().child("roma").child("dockets").child("starter").child(tableNumber);
		//     var isSet = this.getAttribute("id");
		//     if(isSet == "true"){
		//     	this.setAttribute("id", "false");
		//     	search.on("value", snap=>{
		// 	    	//console.log(snap.key);
		// 	    	var numOfChildren = snap.numChildren();
		// 	    	//console.log(numOfChildren);
		// 	    	for(var i = 0; i < numOfChildren; i++){
		// 				//console.log(numOfChildren);
		// 		 		var item = snap.child(i).child("Name").val();
		// 		 		var quant = snap.child(i).child("Quantity").val();
		// 		 		$("#Table"+snap.key).append("<span class='itemListing'>"+item+" x"+quant+"</span><br><br>");
		// 		 	}
		// 	    });
		//     }
		//     else
		//     	console.log("Nope");
		// });

		$(document).on('click','.TheSButton', function() {
		    var tableNumber = this.getAttribute("value");  
		    var search = firebase.database().ref().child("roma").child("dockets").child("starter").child(tableNumber);
		    var isSet = this.getAttribute("id");
		    if(isSet == "true"){
		    	this.setAttribute("id", "false");
		    	search.once("value", snap=>{
			    	//console.log(snap.key);
			    	var numOfChildren = snap.numChildren();
			    	//console.log(numOfChildren);
			    	for(var i = 0; i < numOfChildren; i++){
						//console.log(numOfChildren);
				 		var item = snap.child(i).child("Name").val();
				 		var quant = snap.child(i).child("Quantity").val();
				 		$("#Table"+snap.key).append("<span class='itemListing'>"+item+" x"+quant+"</span><br><br>");
				 	}
			    });
		    }
		    else
		    	console.log("Nope");
		});



		/*Mains*/
		var mtableRef = firebase.database().ref().child("roma").child("dockets").child("main");
		mtableRef.on("child_added", snap=>{

			$("#mainDocketDisplay").append("<div class='theDocket'> <div class='docketHeader'> <div class='tNum'><h2>Table "+snap.key+"</h2></div> <div class='logo'>D</div> <div id='demo' class='mdemo"+snap.key+"'></div> </div> <div class='docketContents' id='MTable"+snap.key+"'></div> <button class='TheMButton' id = 'true' value='"+snap.key+"'>Order In</button><button class='mbtn' value='"+snap.key+"'>Done</button> </div>");
			var d = new Date();
		    var n = d.getHours();
		    var s = d.getMinutes();
		    var len = s.toString().length;
		    //console.log(len);
		    if(len == 1){
		    	$(".mdemo"+snap.key).append("<h2>" + n + ":0" + s + "</h2>");
		    }
		    else{
		        $(".mdemo"+snap.key).append("<h2>" + n + ":" + s + "</h2>");
			}
		});

		$(document).on('click','.TheMButton', function() {
		    var tableNumber = this.getAttribute("value");  
		    var search = firebase.database().ref().child("roma").child("dockets").child("main").child(tableNumber);
		    var isSet = this.getAttribute("id");
		    if(isSet == "true"){
		    	this.setAttribute("id", "false");
		    	search.once("value", snap=>{
			    	//console.log(snap.key);
			    	var numOfChildren = snap.numChildren();
			    	//console.log(numOfChildren);
			    	for(var i = 0; i < numOfChildren; i++){
						//console.log(numOfChildren);
				 		var item = snap.child(i).child("Name").val();
				 		var quant = snap.child(i).child("Quantity").val();
				 		$("#MTable"+snap.key).append("<span class='itemListing'>"+item+" x"+quant+"</span><br><br>");
				 	}
			    });
		    }
		    else
		    	console.log("Nope");
		});

		/*Desserts*/
		var dtableRef = firebase.database().ref().child("roma").child("dockets").child("dessert");
		dtableRef.on("child_added", snap=>{

			$("#dessertDocketDisplay").append("<div class='theDocket'> <div class='docketHeader'> <div class='tNum'><h2>Table "+snap.key+"</h2></div> <div class='logo'>D</div> <div id='demo' class='ddemo"+snap.key+"'></div> </div> <div class='docketContents' id='DTable"+snap.key+"'></div> <button class='TheDButton' id = 'true' value='"+snap.key+"'>Order In</button><button class='dbtn' value='"+snap.key+"'>Done</button> </div>");
			var d = new Date();
		    var n = d.getHours();
		    var s = d.getMinutes();
		    var len = s.toString().length;
		    //console.log(len);
		    if(len == 1){
		    	$(".ddemo"+snap.key).append("<h2>" + n + ":0" + s + "</h2>");
		    }
		    else{
		        $(".ddemo"+snap.key).append("<h2>" + n + ":" + s + "</h2>");
			}
		});

		$(document).on('click','.TheDButton', function() {
		    var tableNumber = this.getAttribute("value");  
		    var search = firebase.database().ref().child("roma").child("dockets").child("dessert").child(tableNumber);
		    var isSet = this.getAttribute("id");
		    if(isSet == "true"){
		    	this.setAttribute("id", "false");
		    	search.once("value", snap=>{
			    	//console.log(snap.key);
			    	var numOfChildren = snap.numChildren();
			    	//console.log(numOfChildren);
			    	for(var i = 0; i < numOfChildren; i++){
						//console.log(numOfChildren);
				 		var item = snap.child(i).child("Name").val();
				 		var quant = snap.child(i).child("Quantity").val();
				 		$("#DTable"+snap.key).append("<span class='itemListing'>"+item+" x"+quant+"</span><br><br>");
				 	}
			    });
		    }
		    else
		    	console.log("Nope");
		});		

		$(document).on('click','.btn', function() {
			var val = this.value;
			console.log(val);
			stableRef.child(val).remove();
		});
		$(document).on('click','.mbtn', function() {
			var val = this.value;
			mtableRef.child(val).remove();
		});
		$(document).on('click','.dbtn', function() {
			var val = this.value;
			dtableRef.child(val).remove();
		});

		stableRef.on("child_removed", snap => {
			var rem = document.getElementById("Table"+snap.key);
			rem.parentNode.remove();
		});
		mtableRef.on("child_removed", snap => {
			var rem = document.getElementById("MTable"+snap.key);
			rem.parentNode.remove();
		});
		dtableRef.on("child_removed", snap => {
			var rem = document.getElementById("DTable"+snap.key);
			rem.parentNode.remove();
		});