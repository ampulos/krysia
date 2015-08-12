$(document).ready(function(){
    scroll_txt();
    gallery();
});

function scroll_txt() {
    var txt = $('section#content .page .txt');
    var container = $('section#content .page nav');
    
    $('span.up',container).on('click',function(){
        txt.scrollTo('-=500px',400,{'axis':'y'});
    });
    $('span.down',container).on('click',function(){
        txt.scrollTo('+=500px',400,{'axis':'y'});
    });
}

function gallery(){
    var gallery = $('div.gallery');
    var txt_gallery = $('div.text-gallery');
    
    $('.show-gallery').click(function(ev){
        ev.preventDefault();
        $('a:first',gallery).click();
    });
      
    gallery.photobox('a', {thumbs:false});
    txt_gallery.photobox('a');
    
    return false;
}