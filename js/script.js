function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = "kamień";

printMessage("Zagrałem" + computerMove + "! Jeśli twój ruch to papier to wygrywasz");

let playerMove = "papier";

printMessage("Zagrałem" + playerMove + "! Jeśli twój ruch to papier to wygrywasz");

