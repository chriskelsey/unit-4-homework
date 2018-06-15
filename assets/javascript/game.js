$(document).ready(function() {
	// Declare global variables
	var wins = 0;
	var loss = 0;
	var answer = 0;
	var guessTotal = 0;

	function randNumGen() {
		answer = Math.floor(Math.random() * 102) + 19;
		guessTotal = 0;
		$('.answer').text(answer);
		$('.number').text('');
		$('.gem').each(function(){
			var guess = Math.floor(Math.random() * 11) + 1;
			$(this).attr('id', guess);
		})
	}
	randNumGen();

	$('.gem').on('click', function(){
		var gemNum = parseInt($(this).attr('id'))
		if (guessTotal + gemNum === answer) {
			wins++;
			$('.announcement').text('You Win!');
			randNumGen();
			$('p.win').text('Wins: ' + wins);
		} else if (guessTotal + gemNum > answer){
			loss++;
			$('.announcement').text('You Lose!');
			randNumGen();
			$('p.loss').text('Losses: ' + loss);
		} else {
			guessTotal += gemNum
		}
		$('.number').text(guessTotal);
	});
});