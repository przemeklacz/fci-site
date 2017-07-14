$(document).ready(function () {


  (function($) {
  	var tabs = $(".tabs li a");

  	tabs.click(function() {
  	    var content = this.hash.replace('/', '');
  	    tabs.removeClass("active");
  	    $(this).addClass("active");
  	    $("#content").find('p').hide();
  	    $(content).fadeIn(400);
  	});
  })(jQuery);

  function initMap() {
    var uluru = {
      lat: -25.363,
      lng: 131.044
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
});
