//Populates responsive table headers
//Author: Angelo Compagnucci <angelo.compagnucci@gmail.com>
jQuery(document).ready(function() {
	set_table_headers();
});

jQuery(window).resize(function() {
	jQuery(".resp-header").remove();
	set_table_headers();
});

function set_table_headers(){
	if (jQuery(document).width() < 700) {
		jQuery("div").not("form").children("table").each(function() {
	   	curtable = jQuery(this);
	   	curtable.find("td:empty").html("&nbsp;");
	   	curhead = curtable.children("thead").children("tr").children("th");
	   	if (curhead.length > 0) {
		   	curtable.children("tbody").children("tr").each(function() {
		   		jQuery(this).children("td").each(function(index){
		   			curth = curhead.eq(index).html();
		   			curth = (curth != null) ? curth : '&nbsp;';
		   			jQuery(this).before('<span class="resp-header">' + curth + '</span>');
		   		});
		   	});
		}
		else {
			curtable.find("td").css({
			'padding-left': '0',
        	'width': 'auto',
        	'left': '3px'
			});
		}
	   	});
	}
}
