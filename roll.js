function roll(number) {
	var result = 0;
	for(var i = 0; i<number; i++){
		let tempresult = math.floor(math.random()*6)+1;
		if (tempresult==6){
			result = result + roll(2);
		}
		else {
			result = result + tempresult;
		}
	}
	return result;
}
