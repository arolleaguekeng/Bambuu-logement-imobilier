$(document).ready(
    function()
    {
        $("#body-index-more").hide();
        $("#btn-masquer").hide();

        $("#btn-more").click(
            function()
            {
                $("#body-index-more").show();
                $("#btn-masquer").show();
                $("#btn-more").hide();
            }
        )
        $("#btn-masquer").click(
            function()
            {
                $("#body-index-more").hide();
                $("#btn-masquer").hide();
                $("#btn-more").show();

            }
        )
        
    }
)