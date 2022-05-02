<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>

var jq = jQuery.noConflict(true);

 
    var played = 0;

function animate_stack(){
            jq(".stack_img").hide();
            jq("#repeat_btn").hide();
        
            var img = 5;
            var duration = 1500;
        
            for(var i = 1; i < (img+1); i++){
            
            
      
            jq("#stack_img_"+i).delay( (i-1)*duration ).fadeToggle(1000);

        
        }
        jq("#repeat_btn").delay(img*duration ).fadeToggle(500);
    played++;
        }; 

jq("#repeat_btn").click(function() {
  animate_stack();
});


//scrolling function
jq(window).scroll(function(){
   

    var currentScroll = jq(this).scrollTop();
    var schooltop = jq("#school_life").offset();
    
    // var pageheight = jq(document).height();
    // var windowheight = jq(window).height();
    // var activediv = jq("#school_life").height()+jq("#connect").height()+jq(".site-footer").height();



    if((schooltop.top.toFixed() - currentScroll < 150) && played == 0){
        
     animate_stack();

     //console.log('activeplay');
     
    jq(window).off("scroll");
    
    }


    
      
    //debug
    //   console.log("currentScroll "+currentScroll);
    //   console.log("schooltop "+schooltop.top.toFixed() );
    //   console.log(schooltop.top.toFixed() - currentScroll );
      
      //console.log("pageheight "+pageheight);
      //console.log("windowheight "+windowheight);
      //console.log("activediv "+activediv);
      





});

     </script>

