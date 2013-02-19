self.addEventListener('message', function(e){
	var contador = 0;
	if (!isNaN(parseInt(e.data.contador))){
		contador = parseInt(e.data.contador);
	}
	contador += 1;
	self.postMessage({'contador':contador});
}, false);