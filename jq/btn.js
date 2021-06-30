var video =$("#video").attr("src");
var appendJ = "?autoplay=1" + "&enablejsapi=1" + "&rel=0";
$(".bear-button").click(function() {
	$(".lightbox").fadeIn(400);
	//通過追加[0]到jQuery對象將返回第一個 DOM元素。
	//+=就是累加
	$("#video")[0].src += appendJ;
});

//click X
$(".closebtn").click(function() {
	$("#video")[0].src = video;
	$(".lightbox").fadeOut(400);
});

//console.log(video);
