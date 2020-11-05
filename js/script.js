{
	const playGame = function(playerInput){
	clearMessages();
	const getMoveName = function (move) {
		if (move == 1){
			return "kamień";
		} else if(move == 2){
			return "papier";
		} else if(move == 3){
			return "nożyce";
		}
	}
	
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	
	console.log("Wylosowana liczba to:" + randomNumber);
	
	const computerMove = 'nieznany ruch';
	
	computerMove = getMoveName(randomNumber);
	
	printMessage("mój ruch to:" + computerMove);
	
	console.log("Gracz wpisał:" + playerInput);
	
	const playerMove = 'nieznany ruch';
	
	playerMove = getMoveName(playerInput);
	
	
	printMessage('Twoj ruch to:' + playerMove);
	
	const displayResult = function (pMove, cMove) {
		if(pMove === cMove) {
			printMessage("remis"); 
		}else if(pMove === "kamień" && cMove === "nożyce"){
			printMessage("wygrałeś");
		}else if(pMove ==="kamień" && cMove === "papier"){
			printMessage("przegrałeś");
		}else if(pMove ==="nożyce" && cMove === "kamień"){
			printMessage("przegrałeś");
		}else if(pMove ==="nożyce" && cMove === "papier"){
			printMessage("wygrałeś");
		}else if(pMove ==="nieznany ruch"){
			printMessage("wybierz: 1, 2 lub 3");
		}
	} 	
	
	
	displayResult(playerMove, computerMove);
}

const buttonRock = document.querySelector('button#play-rock');
const buttonPaper = document.querySelector('button#play-paper');
const buttonScissors = document.querySelector('button#play-scissors');

buttonRock.addEventListener('click', function() {
	playGame(1);
})
buttonPaper.addEventListener('click', function(){
	playGame(2)
})
buttonScissors.addEventListener('click', function(){
	playGame(3)
})
}