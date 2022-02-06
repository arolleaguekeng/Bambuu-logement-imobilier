function AjouterUtilisateur() {
        
    let user = new User($('#txt-email').contains,$('#txt-nom').contains,$('#txt-prenom').contains,$('#txt-password').contains);
    alert(user.FirstName);

}