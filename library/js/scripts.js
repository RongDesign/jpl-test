// JavaScript Document

setInterval(function(){ 
   // toggle the class every five second
   setTimeout(function(){
     // toggle back after 1 second
     $('#harrisburg_cityscape').toggleClass('harrisburg_storm');  
   },2000);

},8000);

/*var limit = 1;

$('.returning').change(function(){
   if($(this).siblings(':checked').length >= limit) {
       this.checked = false;
   };
    if(this.checked){
    $('.form_continued').css('display', 'block');
    $('.found').css('opacity', '1').css('width','48%').css('height','100px').css('overflow','hidden');
	$('.question').addClass('sixcol').removeClass('twelvecol first');
	} else {
	}
});
$('.new').change(function(){
    if($(this).siblings(':checked').length >= limit) {
       this.checked = false;
	   alert
   };
   if(this.checked){
    $('.form_continued').css('display', 'block');
    $('.found').css('opacity', '0').css('width','0').css('height','100px');
	$('.question').addClass('twelvecol first');
	} else {
	}
});
*/

$(".returning").click(function(){
    $('.form_continued').css('display', 'block').addClass('form_continued_open_all').removeClass('form_continued_open_one');	
	$('.found').addClass('sixcol first').removeClass('hide');
	$('.question').addClass('sixcol').removeClass('twelvecol first');
});

$(".new").click(function(){
    $('.form_continued').css('display', 'block').addClass('form_continued_open_one').removeClass('form_continued_open_all');	
	$('.found').addClass('hide');
	$('.question').addClass('twelvecol first');
});

$('#form_example').submit(function () {
 return false;
}); 

$('.open_menu_button').click(function(){
	$('#main_navigation').toggleClass('open_menu');
});

