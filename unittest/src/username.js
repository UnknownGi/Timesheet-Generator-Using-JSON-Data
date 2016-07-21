var checkUsername = function ( param ) {
	var regex = /(([1234567890-=+_)(*&^%$#@!`~\\\/[\]{}|';:"?.,<>*']|^\s)|\  +)/;
	if ( param.length <= 1 ) return true;
	return regex.test(param);
};