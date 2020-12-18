$(document).ready(function(){
	// var newName = "abc"
	// var name = $(".man_1 .man_name");
	// name.text(newName);

	// 첫화면
	$(".blackhole").click(function(){
		$(".modal").slideUp('slow');
		$(this).css({
            "transform": "translate(-50%, 40%)",
			"transition": ".8s",
			"z-index": "1"
		})
		$(this).addClass("blurEffect")
		$("#Layer_1").css({
			"animation": "bkhole_ani 10s infinite linear"
		});
		$("canvas").show();
		$(".main").show(1500);
		move();
	});
	$(".man").click(function(){
		$(this).find(".man_talk").toggle();
	});
	$('.reload_button').click(function() {
		location.reload();
		});

	function move() {
		var elem = document.getElementById("myBar");
		var width = 0;
		var id = setInterval(frame, 30);
		function frame() {
			if (width >= 42) {
			clearInterval(id);
			} else {
			width++;
			elem.style.width = width + '%';
			elem.innerHTML = width * 1 + ' days left';
			}
		}
		}
});
