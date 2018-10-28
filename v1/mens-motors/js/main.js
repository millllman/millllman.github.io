$(document).ready(function() {

    $('.btn-preview').click(function(e) {
        e.preventDefault();
    });

    $("#phone").inputmask({"mask": "+7 (999) 999-99-99"});

    //E-mail Ajax Send
	$("#form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "js/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$("#form").slideUp();
			$('#form-success__send').slideDown();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});