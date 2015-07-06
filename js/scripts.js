$(document).ready(function(){
    scroll_txt();
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