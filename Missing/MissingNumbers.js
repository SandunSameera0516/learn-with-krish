

const a  = [21,25,29,28,22,24,27,26,30];
	a.sort()

	for(var i=0; i<a.length-1;i++){

		var b = a[i];
		var c = a[i+1];

		if(b+1 != c){
			console.log(b+1);
			break;
		}else if((b+1 == c) && (i == a.length-2)){
			console.log(c+1);
		}
	}

	