/**
 * jQuery Lined Textarea Plugin 
 *   http://alan.blog-city.com/jquerylinedtextarea.htm
 *
 * Copyright (c) 2010 Alan Williamson
 * 
 * Released under the MIT License:
 *    http://www.opensource.org/licenses/mit-license.php
*/
!function(a){a.fn.linedtextarea=function(b){var c=a.extend({},a.fn.linedtextarea.defaults,b),d=function(a,b,d){for(;a.height()-b<=0;)d==c.selectedLine?a.append("<div class='lineno lineselect'>"+d+"</div>"):a.append("<div class='lineno'>"+d+"</div>"),d++;return d};return this.each(function(){var b=1,e=a(this);e.attr("wrap","off"),e.css({resize:"none"});var f=e.outerWidth();e.wrap("<div class='linedtextarea'></div>");var g=e.parent().wrap("<div class='linedwrap' style='width:"+f+"px'></div>"),h=g.parent();h.prepend("<div class='lines' style='width:50px'></div>");var i=h.find(".lines");i.height(e.height()+6),i.append("<div class='codelines'></div>");var j=i.find(".codelines");if(b=d(j,i.height(),1),c.selectedLine!=-1&&!isNaN(c.selectedLine)){var k=parseInt(e.height()/(b-2)),l=parseInt(k*c.selectedLine)-e.height()/2;e[0].scrollTop=l}var m=i.outerWidth(),n=parseInt(h.css("border-left-width"))+parseInt(h.css("border-right-width"))+parseInt(h.css("padding-left"))+parseInt(h.css("padding-right")),o=f-n,p=f-m-n-20;e.width(p),h.width(o),e.scroll(function(c){var e=a(this)[0],f=e.scrollTop,g=e.clientHeight;j.css({"margin-top":-1*f+"px"}),b=d(j,f+g,b)}),e.resize(function(b){var c=a(this)[0];i.height(c.clientHeight+6)})})},a.fn.linedtextarea.defaults={selectedLine:-1,selectedClass:"lineselect"}}(jQuery);
