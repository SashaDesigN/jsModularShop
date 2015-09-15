var Pay = (function(){
  var set = {}

  // buy item from #basket of #shop list
  set.add = function(e){
    // get item id
    var id = e.closest('div[data-id]').attr('data-id')
    // create an AJAX request for buy Item
    $.ajax({
      type:'post',
      data:{
        item_id:id,
        token:Shop.list[id].token
      },
      // I send this request to index.html
      // and each time when I will buy some item it will be success
      url:'index.html',
      success:function(response){
        // remove item from page
        $('div[data-id="'+id+'"]').hide()
        alert('Thanks for shopping!')
      }
    })
    // store item`s id in Basket.list
    set.list[id] = Shop.list[id]
  }

  return set

})()
