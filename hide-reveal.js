/* hide-reveal.js plugin for Isotope
 * demo here http://codepen.io/desandro/pen/drpJK/
 * explanation here http://stackoverflow.com/questions/25916873/jquery-isotope-filtering-fade-unmatched-items-instead-of-hiding */

$.fn.hideReveal = function( options ) {
  options = $.extend({
    filter: '*',
    hiddenStyle: { opacity: 0.2 },
    visibleStyle: { opacity: 1 },
  }, options );
  this.each( function() {
    var $items = $(this).children();
    var $visible = $items.filter( options.filter );
    var $hidden = $items.not( options.filter );
    // reveal visible
    $visible.animate( options.visibleStyle );
    // hide hidden
    $hidden.animate( options.hiddenStyle );
  });
};
