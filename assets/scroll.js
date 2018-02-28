$('ul').scroll(function() {
    
    var $ul = $(this);
   
    $('#visible-items').html( '' );
    
    $ul.find('li').each( function (n) {

        var $this = $(this);
        
        if ( $this.position().top + $this.height() > 0 && $this.position().top < $ul.height() ) {     
            
            $('#visible-items').html(  $('#visible-items').html() + ', ' + n );
        }
    });
 
});