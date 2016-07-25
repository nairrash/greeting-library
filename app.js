//var g = G$('rashmi','nayar');
//g.greet().setLang('es').greet(true).log();

$('#login').click(function(){
   var loginGrtr = G$("Rashmi", "Nair");
    
    $('#logindiv').hide();
    loginGrtr.setLang($('#lang').val()).changeHtml('#greeting',true).log();
});