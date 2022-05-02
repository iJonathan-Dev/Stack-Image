
<script>

$(document).ready(function(){
    $("#play_btn").click(function(){
      
        $("#stack_img_1").animate({opacity:"1"},"slow");
        $("#stack_img_2").animate({opacity:"1"},"slow");
        $("#stack_img_3").animate({opacity:"1"},"slow");

        var img = 3;
        
        for(var i = 1; i < (img+1); i++){
            
        var duration = 1000;
      
        $("#stack_img_"+i).delay( (i-1)*duration ).fadeToggle(1000);
        
        }
        
    })
    });



</script>


jq("#stack_img_1").fadeToggle(1000,function(){
    jq("#stack_img_2").fadeToggle(1000,function(){
    jq("#stack_img_3").fadeToggle(1000);
});
});