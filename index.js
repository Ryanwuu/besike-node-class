module.exports = Class;
function Class(func){
	if (func['initialize']){
		return func['initialize'];
	}
	return function(){
		
	}

}