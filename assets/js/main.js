
    $(document).ready(function(){
        // seach slide
        if ($("#slideNext").length > 0) { 
                $("#slideNext").click(function(){
                $("#slider").scrollLeft(300);
                $(this).hide();
            });
        }

        // show results
        if ($("#search").length > 0) { 
                $("#search").focus(function(){
                    $("#result").removeClass("hidden");
                }).blur(function(){
                    $("#result").addClass("hidden");
                })
             }

        // modal 
        if ($("[data-modal]").length > 0) { 
                $("[data-modal]").click(function(){
                    let modal = $(this).attr("data-modal");
                    $("#"+modal).addClass("modal-show");
                });
                $("[data-dismiss]").click(function(e){
                    let dismiss = $(this).attr("data-dismiss");
                     if (e.target.id == dismiss) {
                        $("#"+dismiss).removeClass("modal-show");
                     }
                });
            }
        });
     