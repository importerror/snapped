$(document).ready(function(){
	$('#submit-msg').on('click',function () {
		$('#send-msg').submit();
	});
	$('#logout').on('click',function () {
		FB.logout(function(response) {
		  console.log('Logging out');
		});
	});
});