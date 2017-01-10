$(document).ready(function(){
  $.ajax({
		    dataType: "json",
		    url: "https://spreadsheets.google.com/feeds/list/1s3ljuEdN7Gbm-Tqur338zYL49GMY96aIH4KF6Z4g9wE/od6/public/values?alt=json",
				success: function(data) {
						data = data.feed.entry;

						// Grab the template script
						var listTemplateScript = $("#list-template").html();
            var blurbTemplateScript = $("#blurb-template").html();
            var photoTemplateScript = $("#photo-template").html();

						// Compile the template
						var listTemplate = Handlebars.compile(listTemplateScript);
            var blurbTemplate = Handlebars.compile(blurbTemplateScript);
            var photoTemplate = Handlebars.compile(photoTemplateScript);

						var mydata = data;

						// Pass our data to the template
						var listCompiledHtml = listTemplate(mydata);
            var blurbCompiledHtml = blurbTemplate(mydata);
            var photoCompiledHtml = photoTemplate(mydata);

						// Add the compiled html to the page
						$('.list-placeholder').html(listCompiledHtml);
            $('.blurb-placeholder').html(blurbCompiledHtml);
            $('.photo-placeholder').html(photoCompiledHtml);

            afterAJAX();
				}
	});

  var afterAJAX = function(){
    $(".blurb").hide();

    $(".sidebar ul li").on("click", function(){
        $(".main-intro-page").hide();
        $(".blurb").hide();
        var id = $(this).attr("id").slice(-1);
        $("#blurb" + id).show();
    });

    $(".main-photo").on("click", function(){
        $(".main-intro-page").hide();
        $(".blurb").hide();
        var id = $(this).attr("id").slice(-1);
        $("#blurb" + id).show();
    });

    $(".back-button").on("click", function(){
      $(".blurb").hide();
      $(".main-intro-page").show();
    });

  }

  Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    if (n == 0.5 || n == 1.5 || n == 2.5 || n == 3.5 || n == 4.5) {
      for(var i = 0; i < n - 1; ++i) {
          accum += block.fn('<img src="http://dailybruin.com/images/paws/full.png" style="height: 10px; width:10px;" />');
      }
      accum += block.fn('<img src="http://dailybruin.com/images/paws/half.png" style="height: 10px; width:10px;" />');
    } else {
      for(var i = 0; i < n; ++i) {
          accum += block.fn('<img src="http://dailybruin.com/images/paws/full.png" style="height: 10px; width:10px;" />');
      }
    }

    if (n == 0.5 || n == 1.5 || n == 2.5 || n == 3.5 || n == 4.5) {
      for(i = 0; i < 5 - n - 1; i ++)
          accum += block.fn('<img src="http://dailybruin.com/images/paws/blank.png" style="height: 10px; width:10px;" />');
    } else {
      for(i = 0; i < 5 - n; i ++)
          accum += block.fn('<img src="http://dailybruin.com/images/paws/blank.png" style="height: 10px; width:10px;" />');
    }
    return accum;
  });

});
