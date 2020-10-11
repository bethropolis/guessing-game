var img = document.getElementById('img');
var msg = document.querySelector('.msg');
var input = document.querySelector('input');
var hLeft = document.querySelector('#heartLeft')
var btn = document.querySelector('.sub');
const game = document.querySelector('.game');
//this the game sets
var gn = Math.floor(Math.random()*100);
var guessLimit = 10;
var userGuess = 0;
var text; 
var lastMsg;
var win = false;

btn.addEventListener('click', validate)

 function validate(){
    
 	text = parseInt(input.value);
 	 guessLimit -= 1;
 	 userGuess += 1; 
 	 hLeft.innerText = guessLimit;
 	 lastMsg = myArray[userGuess]; 

 	 if (isNaN(text)){
 	 	msg.innerText = "it must be a number";
		msg.style.color = "orange"; 
 	 }else{
 	 	if (guessLimit < 1){

 	 		endgame()
 	 	}else{
 	 	play()
 	 } 
   }
      
 }


var myArray = ["this will never be done","that is imposible", "how?","this is quite rare","you are a good guesser", "wow, you did it","those are some cool moves.","3rd's a charm","and you got it!","that was lucky"]; 
var wins = [];

function play(){

     checkMsg()
     //this is just for maybe another developer seeing this
     console.log("the answer is "+gn)
  if (text > gn){
  	highMsg()
	msg.style.color = "orange"; 
  }
  if (text < gn){
      lowMsg() 
 msg.style.color = "yellow"; 
  }
    if (text === gn){ 
  	 win = true;  
  	endgame()
  }
}

function checkMsg(){
   if(text - gn < 5 || text- gn > -5){
          g = 2;
	}
	if(text - gn < 10 && text - gn > 5||  text - gn > -10 && text-gn < -5 ){   
          g = 1;
	}

    if(text - gn > 10 ||text - gn < -10 ){
          g = 3;
	}
}



function highMsg(){
	 	if (g === 1) {
  	    msg.innerText = "you are high but close"; 
  	    img.src = "img/sad.png";
  	} 	
  	if (g === 2) {
  	    msg.innerText = "you are high but too close "; 
  	    img.src = "img/ooh.png"; 
  		
  	} 
  		if (g === 3) {
  	    msg.innerText = "you are too high "; 
  	    img.src = "img/noo.png";
  	}
}

function lowMsg(){
	 	if (g === 1) {
  	    msg.innerText = "you are low but close "; 
  	    img.src = "img/sad.png";
  		
  	} 	
  	if (g === 2) {
  	  msg.innerText = "you are low but too close "; 
  	   img.src = "img/ooh.png";
  	
  	} 
  		if (g === 3) {
  	  msg.innerText = "you are too low"; 
  	  img.src = "img/noo.png";
  	}
}


function endgame(){
	stop()
	btn.removeEventListener('click', validate);  
	if (win) {
		msg.innerText = "congratulations you won";
		msg.style.color = "lime";
		img.src = "img/win.png" 
	} else{ 
		msg.innerText = "guess limit reached you lost"; 
		msg.style.color = "red"; 
		img.src = "img/lose.png"; 
	}
}

function stop(){
  input.style.display = 'none';
  btn.style.display = 'none';
  var p = document.createElement('p'); 
  var btnR = document.createElement('button'); 
  game.appendChild(p);
  game.appendChild(btnR);
  p.classList.add('info');
  btnR.classList.add('ref');
  btnR.innerText = 'restart';
  btnR.addEventListener('click', reset)
  	if (win) {

    p.innerText = "you only guessed "+userGuess+" times and had "+guessLimit+" guesses left, "+ lastMsg;
	} else{    
    p.innerText = "you used all your 10 guesses, and did not guess it 😥 better luck next time";
    
	}
}


function reset() {  
   img.src = "img/think.png";
   input.value = '';
   input.style.display = '';   
   btn.style.display = '';
   guessLimit = 10;
   userGuess = 0;
   game.removeChild(p);
   game.removeChild(btnR);
   btn.addEventListener('click', validate);
    
}