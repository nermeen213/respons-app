

//************************section home**********************//
$('.openNav').on('click',function(){
    $('.navbar').animate({left:'0'},500);
   
   
   
  
});
$('.navbar .closebtn').on('click',function(){
    $('.navbar').animate({left:"-250"},500);
  
  
});




//************************section sliderDown**********************//


$('h3').on('click',function({target}){
    const currentElement=target;
   
    const nextElement= $(currentElement).next();
    
   
    // $(nextElement).animate({height:"toggle" , paddding:"toggle"},1000)
    $(nextElement).slideToggle(1000);
    $('.inner').not(nextElement).slideUp();
   

})



//************************section counter**********************//

function makeTimer() {

	//		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
		var endTime = new Date("10 septemper 2023 9:56:00 GMT+01:00");			
			endTime = (Date.parse(endTime) / 1000);

			var now = new Date();
			now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);




    //************************section contactus**********************//
    $('textarea').on('keyup',function(){
        const textAreaOfLength= $('textarea').val().length;
        if(textAreaOfLength<100){
            $('.count').text(100-textAreaOfLength)



        }else{
            $('.count').text('your avalible character finished')

        }
       

        
    })

//************************navbar**********************//

	$('.navbar .navLink').on('click',function(e){
		const currentLink =$(e.target).attr('href');
		const currentOffset =$(currentLink).offset().top;
		// console.log(currentOffset);
	 $('html,body').animate({scrollTop : currentOffset}, 1000)

		
	});

