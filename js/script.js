$(document).ready(function(){
	// var newName = "abc"
	// var name = $(".man_1 .man_name");
	// name.text(newName);

	// 첫화면
	$(".blackhole").click(function(){
		$(".modal").slideUp('slow');
		$(this).css({
            "transform": "translate(-50%, 50%)",
            "transition": "1s"
		})
		$(this).addClass("blurEffect")
		$("#Layer_1").css({
			"animation": "bkhole_ani 10s infinite linear"
		});
		$("canvas").show();
		$(".main").show(1500);
	});
	$(".man").click(function(){
		$(this).find(".man_talk").toggle();
	});
	$('.reload_button').click(function() {
		location.reload();
		});
});
