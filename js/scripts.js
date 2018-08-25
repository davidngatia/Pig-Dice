
var scores, roundScore, activePlayer,gamePlaying;
var btnRoll = document.querySelector('.btn-roll');
var btnHold = document.querySelector('.btn-hold');
document.querySelector('.btn-roll').addEventListener('click', function(){
	if (gamePlaying) {
		var dice = Math.floor(Math.random() * 6) + 1;
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = diceimgs['diceimg' + activePlayer + dice];
		document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em';
		if (dice !== 1) {
			hideRolledMsg();
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			disableBtn(btnRoll, 1000);
			hideRolledMsg();
			document.querySelector('.player-'+activePlayer+'-rolled-1').style.visibility = 'visible';
			nextPlayer();
		}
	}


});



document.querySelector('.btn-hold').addEventListener('click', function(){
		if (gamePlaying) {
			disableBtn(btnRoll, 1000);
			scores[activePlayer] += roundScore;
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			if (scores[activePlayer] >= 100) {
				document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
				document.querySelector('.dice').style.display = 'none';
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner-' + activePlayer);
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active-' + activePlayer);
				gamePlaying = false;
			} else {
				nextPlayer();
			}
		}


});
document.querySelector('.btn-new').addEventListener();
document.querySelector('.btn-rules').addEventListener('click', function(){
	    var games = document.getElementsByClassName('game-panel');
		for(i=0;i<games.length;i++){
			games[i].style.display = 'none';
		}
	    document.querySelector('.btn-back').style.display = 'block';
		}
});

document.querySelector('.btn-back').addEventListener('click', function(){
	    var games = document.getElementsByClassName('game-panel');
		for(i=0;i<games.length;i++){
			games[i].style.display = 'block';
		}
	    document.querySelector('.btn-back').style.display = 'none';
		var rules = document.getElementsByClassName('rules-panel');
		for(i=0;i<rules.length;i++){
			rules[i].style.display = 'none';
		}
});

function nextPlayer() {
		var icons = document.getElementsByTagName('i');
		for(i=0;i<icons.length;i++){
			icons[i].classList.remove('color-' + activePlayer);
		}
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active-' + activePlayer);
		activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;

		for(i=0;i<icons.length;i++){
			icons[i].classList.add('color-' + activePlayer);
		}
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('active-' + activePlayer);
		document.querySelector('#current-0').textContent = '0';
		document.querySelector('#current-1').textContent = '0';
}
function disableBtn(btn, time) {
		btn.disabled = true;
      	setTimeout(function(){btn.disabled = false;},time);
}

function hideRolledMsg(){
	document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
	document.querySelector('.player-1-rolled-1').style.visibility = 'hidden';
}
