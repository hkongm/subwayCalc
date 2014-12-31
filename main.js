function calc(single) {
  'use strict';

	var sum = 0,

			price = parseInt(single,10),
			discountFlag1 = false,
			discountFlag2 = false;

	for (var i=0; i < 21; i++) {
		if (sum > 100 && !discountFlag1) {
			price = single * .8;
			discountFlag1 = true;
		} else if (sum > 150 && !discountFlag2) {
			price = single * .5;
			discountFlag2 = true;
		}
		sum += price * 2;
	}
	sum = Math.floor(sum);
	return sum;
}
calc(6);
