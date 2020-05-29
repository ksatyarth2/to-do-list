$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var todo = {items: item.val()};

      $.ajax({
        type: 'POST',
        url: '/',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var items = $(this).text().trim().replace(/ /g, "-");  //white space replaced by - coz it needs to be passed in url
      $.ajax({
        type: 'DELETE',
        url: '/' + items,          //url passed to controller
        success: function(data){        //if success then this function is called
          //do something with the data via front-end framework
          location.reload();            //reload the page
        }
      });
  });

});
