var Basket = (function(){
  var set = {
    item:null,
    container:null,
    list:{} // list of added items
  }

  set.init = function(){
    // parse handlebars
    set.item = Handlebars.compile( $('#basket-item').html() )
    // box for shop items
    set.container = $('#basket')
  }

  set.init()

  // add item to Basket from shop list
  set.add = function(e){
    // get item id
    var id = e.closest('.shop-item').attr('data-id')
    // render item in basket
    set.container.append( set.item ( Shop.list[id] ) )
    // hide item from general items list
    e.closest('.shop-item').hide()
    // store item`s id in Basket.list
    set.list[id] = Shop.list[id]
  }

  // add item to Basket from shop list
  set.remove = function(e){
    // get item id
    var id = e.closest('.basket-item').attr('data-id')
    // remove item from basket
    e.closest('.basket-item').remove()
    // show item in #shop list
    $('#shop').find('div[data-id="'+id+'"]').show()
  }


  return set

})()
