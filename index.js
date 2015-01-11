module.exports = Class;

function Class(argument){
	var cons = function(){};
	if (argument['initialize']){
		cons = argument['initialize'];
	}
	var name ='';
	for(var name in argument){
		if (name !== 'initialize'){
			cons.prototype[name] = argument[name];
		}
	}
	return cons;
}