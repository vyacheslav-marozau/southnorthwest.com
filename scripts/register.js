$(document).ready ( function() {
       /* заставляем соц. сети крутится*/
       $(".fa").hover( function() { 
           $(this).addClass("fa-spin");
        });
       $(".fa").mouseleave( function() { 
           $(this).removeClass("fa-spin");
         });
       /* табы на js */
       $(".dws-form").on("click", ".tab", function() {
           $(".dws-form").find(".active").removeClass("active");
           $(this).addClass("active");
           $(".tab-form").eq($(this).index()).addClass("active");
       });
         /*(де)активация кнопки регистрации */
       $("#agreement").change ( function() { 
           $("#regButton").toggleClass("disabledBut"); 
        });
         /* клик по кнопке регистрации */
        $("#regButton").click ( function() {
            if ($("#regButton").hasClass("disabledBut")) {
                  alert("Для регистрации вы должны согласиться с условиями");
            } 
          else if ( ($("#tabjs1").val() === '') || ($("#tabjs2").val() === '') || ($("#tabjs3" ).val() === '') ) {
                  alert("все поля должны быть заполнены!!!");
           } else {
                  alert("Вы успешно зарегестрированы");
            } 
        });
});
