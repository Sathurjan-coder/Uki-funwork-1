SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });

  $(document).ready(function() { 
    SC.stream('/tracks/139988336',function(sound){
        //start button function
        $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });

          //stop button function
          $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
 
     });
   }); 
     
   
 