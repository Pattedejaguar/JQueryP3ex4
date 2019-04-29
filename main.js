$(document).ready(function (){
  $('#px').on('click', function(){
  $('#rec').css('height','+=10px');

});
 $('#green').on('click',function(){
 $('#rec').css('background-color','green');
});
 $('#reset').on('click',function(){
 $('#rec').css('background-color','orange');
});
$('#vanish').on('click',function(){
$('#rec').css('background-color','inherit');
});
$('#hello').on('click',function(){
$('#rec').css('background-color','orange');
});
});
