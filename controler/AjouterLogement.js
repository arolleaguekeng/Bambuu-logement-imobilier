let prix;
function AjouterLogement(){
    
    let { description, location, room, kitchen, shower, exibition, terrasse, parking, used, level } = getValues();
    let pictures = "sfdfsd";
    let client = "new User()";
    let logement = new Logement(description,location,room,kitchen,shower,exibition,terrasse,parking,used,level,pictures,client);
 
    //creer des elements html 
    let infoHouse = document.createElement('a');
    infoHouse.id = '1';
    let cont = document.createElement('div');
    cont.className = 'menu-right-menu';
    cont.id = 'menu-right-menu';
    infoHouse.setAttribute("onclick","openForm('popup-showInfo-house');");

    let image = document.createElement('img');
    image.src = '../images/bg/bg_header3.jpg';

    let labelPrix = document.createElement('h2');
    labelPrix.id = 'titre';
    labelPrix.textContent =  logement.CalculerPrix()+'\t'+ 'XFA';

    let labelDescription = document.createElement('p');
    labelDescription.id = 'titre';
    labelDescription.textContent = logement.Description;




    //ajouter les elements html dans d'autres
    cont.appendChild(image);
    cont.appendChild(labelPrix);
    cont.appendChild(labelDescription);
    infoHouse.appendChild(cont);
    document.getElementById('menu-right-container').appendChild(infoHouse);

    alert("l'appartement a été ajouté avec succes");

}//pour recuperer les valeures dse éléments du formulaire
function getValues() {
    let description = document.getElementById('txt-description').value;
    let location = document.getElementById('txt-location').value;
    let room = document.getElementById('txt-room').value;
    let kitchen = document.getElementById('txt-kitchen').value;
    let shower = document.getElementById('txt-shower').value;
    let exibition = document.getElementById('txt-exibition').value;
    let terrasse = document.getElementById('cb-terrasse').value;
    let parking = document.getElementById('cb-parking').value;
    let used = document.getElementById('cb-used').value;
    let level = document.getElementById('txt-level').value;
    return { description, location, room, kitchen, shower, exibition, terrasse, parking, used, level };
}


function getValuesDefinitionPrice() {
    let room = document.getElementById('txt-dRoom').value;
    let kitchen = document.getElementById('txt-dKitchen').value;
    let shower = document.getElementById('txt-dShower').value;
    let exibition = document.getElementById('txt-dExibition').value;
    let terrasse = document.getElementById('cb-dTerrasse').value;
    let parking = document.getElementById('cb-dParking').value;
    return { room, kitchen, shower, exibition, terrasse, parking };
}

//definir un prix unitaire de base pour chaques compartiment

  // ModifierPrixBasique(room,kitchen,shower,exibition,terrasse,parking);
function DefinirPrixBase(logement)
{
    let { room, kitchen, shower, exibition, terrasse, parking } = getValuesDefinitionPrice();
    logement.ModifierPrixBasique(room,kitchen,shower,exibition,terrasse,parking);

    
}
function openForm(form) {
    document.getElementById(form).style.display = "block";
    
    }
    function closeForm(form) {
    document.getElementById(form).style.display = "none";
    }
    
