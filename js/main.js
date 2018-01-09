$(function(){
	// 调用fullPage
	$('.main').fullpage({
		sectionsColor:["rgb(0,195,164)","rgb(0,195,164)","rgb(0,195,164)","rgb(0,195,164)"]
	});

	// 控制音频播放
	var audiobox = document.getElementById("audiobox");
	var audio = document.getElementById("audio");
	audiobox.onclick = function(){
		// 如果是暂停，则播放;否则，则暂停
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
	}
})