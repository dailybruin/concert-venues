$(document).ready(function(){
  console.log("preparing ajax call");
  $.ajax({
		    dataType: "json",
		    url: "https://spreadsheets.google.com/feeds/list/1s3ljuEdN7Gbm-Tqur338zYL49GMY96aIH4KF6Z4g9wE/od6/public/values?alt=json",
				success: function(data) {
            console.log(data.feed.entry[0]);
						data = data.feed.entry;

						// Grab the template script
						var theTemplateScript = $("#list-template").html();

						// Compile the template
						var theTemplate = Handlebars.compile(theTemplateScript);

						var mydata = data;

						// Pass our data to the template
						var theCompiledHtml = theTemplate(mydata);

						// Add the compiled html to the page
						$('.list-placeholder').html(theCompiledHtml);
				}
	});

});
