window.onload = function(){
	let code = new Code();
	// code.start();
	let begin = document.querySelector('.begin');
	let end = document.querySelector('.end');
	let stop = document.querySelector('.stop');
	let cont = document.querySelector('.continue');
	begin.onclick = function(){
		code.start();
	};
	end.onclick = function(){
		code.end();
	};
	stop.onclick = function(){
		code.stop();
	};
	cont.onclick = function(){
		code.cont();
	};
}