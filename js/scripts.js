var questions=function(choice1,choice2,choice3,choice4,choice5){
return(choice1+choice2+choice3+choice4+choice5);
}

$(document).ready(function(){
  $("#btn").click(function (event) {
	$("#hide").hide();
 event.preventDefault()
     var choice1 = parseInt($("input[type=radio][name=choice1]:checked").val());
     var choice2 =parseInt($("input[type=radio][name=choice2]:checked").val()); 
	 var choice3 = parseInt($("input[type=radio][name=choice3]:checked").val());
	 var choice4 = parseInt($("input[type=radio][name=choice4]:checked").val());
	 var choice5 = parseInt($("input[type=radio][name=choice5]:checked").val());
	 var award=questions(choice1,choice2,choice3,choice4,choice5)

     if (award>=80){
		 $("#hide").hide();
		 $("#result").show();
		 result.innerHTML=("well done, your score is: " + award)
	 }
	 else if(award<80&&award>=60){
		$("#hide").hide();
		$("#result").show(); 
		 result.innerHTML=("Above average! Your score is: "+ award)
	 }
	 else if(award<60&&award>=0){
		$("#hide").hide();
		$("#result").show();
		result.innerHTML=("Below average! Your score is: "+ award)
	}
	 else{
		$("#hide").hide();
		$("#result").show();
		 result.innerHTML=("Error! Kindly fill all the questions.")
	 }
	})
})