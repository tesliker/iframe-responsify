(function( $ ) {
 
  $.fn.iframeResponsify = function() {
    if (this.length > 0) {
      this.each(function(){
        var width = $(this).width();
        var height = $(this).height();
        var paddingBottom = (height / width) * 100;
        paddingBottom = paddingBottom.toFixed(2);
        $(this).wrap('<div class="responsive-iframe" style="position:relative; height: 0; overflow: hidden; padding-bottom: ' + paddingBottom + '%;"></div>');
        $(this).css({position: "absolute", top: 0, left: 0, width: "100%", height: "100%"});
      });
    }
  };
 
}( jQuery ));
