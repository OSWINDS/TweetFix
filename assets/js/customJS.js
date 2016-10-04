/**
 * Created by Kostas Platis on 9/22/16.
 */


window.onload = function(){

        $(".infopop-icon").hover(
            function () {
                    $(this).parent().next().fadeIn(200);
                }
                ,
            function () {
                    $(this).parent().next().fadeOut(200);
            }
                );


}
