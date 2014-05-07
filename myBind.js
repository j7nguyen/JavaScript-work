Function.prototype.myBind = function(obj) {
	var f = this;
	raturn function () {
		f.apply(obj);
	};
}