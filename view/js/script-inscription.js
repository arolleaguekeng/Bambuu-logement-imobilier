let etape = 1;
$(document).ready(
    function()
    {

        $("#btn-precedent").hide();
        $("#btn-terminer").hide();
        hideNom_prenom();
        hide_phone_number();
        hideNom_passwords()
        $("#btn-suivant").click(

            function()
            {
                if(etape ==1)
                {
                    $("#lb-title").html("Informations sur vous");
                    $("#btn-precedent").show();
                    hide_email();
                    show_nom_prenom();
                    showPhoneNumber();
                    etape++;
                }
                else if(etape == 2)
                {
                    $("#lb-title").html("Creer un mot de passe");
                    hideNom_prenom();
                    hide_phone_number();
                    show_passwords();
                    $("#btn-terminer").show();
                    $("#btn-suivant").hide();
                    etape++;
                }
                function hide_email() {
                    $("#lb-email").hide();
                    $("#txt-email").hide();
                }

                function show_nom_prenom() {
                    $("#lb-nom").show();
                    $("#lb-prenom").show();
                    $("#txt-nom").show();
                    $("#txt-prenom").show();
                }
                function show_passwords() {
                    $("#lb-password").show();
                    $("#lb-confirm-password").show();
                    $("#txt-password").show();
                    $("#txt-confirm-password").show();
                }
            }
        );
        $("#btn-precedent").click(
            function()
            {
                etape--;
            }
        )

        function hide_phone_number() {
            $("#lb-phone-number").hide();
            $("#txt-phone-number").hide();
        }

        function hideNom_prenom() {
            $("#lb-nom").hide();
            $("#lb-prenom").hide();
            $("#txt-nom").hide();
            $("#txt-prenom").hide();
        }
        function hideNom_passwords() {
            $("#lb-password").hide();
            $("#lb-confirm-password").hide();
            $("#txt-password").hide();
            $("#txt-confirm-password").hide();
        }
    }
);
function showPhoneNumber() {
    $("#lb-phone-number").show();
    $("#txt-phone-number").show();
}

