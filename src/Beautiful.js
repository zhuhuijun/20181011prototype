/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-10-11 13:39:22
 * @version $Id$
 */
 var Beautifier = function(ele,opt){
 	this.$element = ele;
 	this.defaults={
 		'color':'red',
 		'fontSize':'12px',
 		'textDecoration':'none'
 	};
 	this.options = $.extend({},this.defaults,opt);
 };

Beautifier.prototype={
	beautify:function(){
		return this.$element.css({
			'color':this.options.color,
			'fontSize':this.options.fontSize,
			'textDecoration':this.options.textDecoration
		})
	}
};
$.fn.mupiao=function(options){
	var beau = new Beautifier(this,options);
	return beau.beautify();
};
