$(document).ready(function(){
	var newName = "abc"
	var name = $(".man_1 .man_name");
	name.text(newName);

	// 첫화면
	$(".blackhole").click(function(){
		$(".modal").slideUp();
		$(this).css({
			"transform": "translate(-50%, 50%)",
			"transition": "1s"
		})
		$("#Layer_1").css({
			"animation": "bkhole_ani 10s infinite linear"
		});
		$("canvas").show();
		$(".main").show(1500);
	});

	$('#frame1').load(function(){
		var $iframe = $('#frame1').contents();
		$iframe.find('text');
	});
});
