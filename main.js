$(document).ready(function(){

  $.ajax({
		    dataType: "json",
		    url: "https://spreadsheets.google.com/feeds/list/1s3ljuEdN7Gbm-Tqur338zYL49GMY96aIH4KF6Z4g9wE/od6/public/values?alt=json",
				success: function(data) {
						data = data.feed.entry;

						// Grab the template script
						var theTemplateScript = $("#modal-template").html();

						// Compile the template
						var theTemplate = Handlebars.compile(theTemplateScript);

						var mydata = data;

						// Pass our data to the template
						var theCompiledHtml = theTemplate(mydata);

						// Add the compiled html to the page
						$('.modal-placeholder').html(theCompiledHtml);
				}
	});

}
