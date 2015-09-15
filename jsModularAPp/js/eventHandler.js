var EventHandler = (function(){

  var set = {}
  // handle click events
  $('body').click(function(e){
    e = $(e.target)
    // parse event routing rule
    var route = e.attr('data-target').split('-')
    // check module exists
    if(typeof window[ route[0] ] == 'undefined'){
      // install module
      $('').attr('src', 'js/'+route[0]+'.js').appendTo('body')
    }
    // make method call
    window[ route[0] ][route[1]]( e )
  })

  return set

})()
