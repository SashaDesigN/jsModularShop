var Shop = (function(){
  var set = {
    item:null,
    container:null,
    list:{} // here I will store shop`s items data
  }

  set.init = function(){
    // parse handlebars
    set.item = Handlebars.compile( $('#shop-item').html() )
    // box for shop items
    set.container = $('#shop')
    // render available items
    $.getJSON('shop.json',function(list){
      $.each(list,function(k,v){
        set.container.append( set.item( v ) )
        // store data to Shop.list array
        set.list[v.id] = v
      })
    })
  }

  return set

})()

$(function(){
  Shop.init()
})
