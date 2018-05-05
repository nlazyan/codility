"use strict"
function solution(N) {
    let bin = N.toString(2).split("");
	
	while(bin[bin.length-1] == 0) {
	  bin.pop();
	}

	let max = 0;
	let sum = 0;
	for(let i = 1; i < bin.length; i++) {
	  if(bin[i] == 0) sum += 1;
	  else sum = 0;
	  max = Math.max(sum, max);
	}
	return max;
}
alert( solution(9)); //2
alert( solution(16)); //0
alert( solution(1040)); //5
alert( solution(1024)); //0
alert( solution(1041)); //5
