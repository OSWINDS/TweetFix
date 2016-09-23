/**
 * Created by Kostas Platis on 9/22/16.
 */


window.onload = function(){

        $(".infopop-icon").hover(
            function () {
                    $(".infopop").fadeIn(200);
                }
                ,
            function () {
                    $(".infopop").fadeOut(200);
            }
                );


}

