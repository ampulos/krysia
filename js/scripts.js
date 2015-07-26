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
    
    $('.click').click(function(){
        $('a:first',gallery).click();
    });
      
    gallery.photobox('a');
}