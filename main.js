$(document).ready(function(){
  $.ajax({
		    dataType: "json",
		    url: "https://spreadsheets.google.com/feeds/list/1s3ljuEdN7Gbm-Tqur338zYL49GMY96aIH4KF6Z4g9wE/od6/public/values?alt=json",
				success: function(data) {
						data = data.feed.entry;

						// Grab the template script
						var listTemplateScript = $("#list-template").html();
            var blurbTemplateScript = $("#blurb-template").html();

						// Compile the template
						var listTemplate = Handlebars.compile(listTemplateScript);
            var blurbTemplate = Handlebars.compile(blurbTemplateScript);

						var mydata = data;

						// Pass our data to the template
						var listCompiledHtml = listTemplate(mydata);
            var blurbCompiledHtml = blurbTemplate(mydata);

						// Add the compiled html to the page
						$('.list-placeholder').html(listCompiledHtml);
            $('.blurb-placeholder').html(blurbCompiledHtml);

            afterAJAX();
				}
	});

  var afterAJAX = function(){
    $(".blurb").hide();

    $(".sidebar ul li").on("click", function(){
        $(".blurb").hide();
        var id = $(this).attr("id").slice(-1);
        $("#blurb" + id).show();
    });
  }

  Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn('<img src="http://dailybruin.com/images/paws/full.png" style="height: 10px; width:10px;" />');
    for(i = 0; i < 5 - n; i ++)
        accum += block.fn('<img src="http://dailybruin.com/images/paws/blank.png" style="height: 10px; width:10px;" />');
    return accum;
  });

});
