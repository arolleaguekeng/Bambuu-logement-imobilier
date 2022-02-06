class Logement{
    Description;
    Location; 
    NumberRoom ;
    NumberKitchen; 
    NumberShower; 
    NumberExibition; 
    Client;
    Terrasse ;
    Parking ;
    Used ;
    NumberOfLevel;
    Pitctures ;
//la zone de definition des prix
    PriceRoom = 5000 ;
    PriceKitchen = 5000; 
    PriceShower = 5000; 
    PriceExibition = 5000; 
    PriceTerrasse = 5000;
    PriceParking = 5000;
    constructor(description,location,room,kitchen,shower,exibition,terrasse,parking,used,level,pictures,client)
    {
        this.Description = description;
        this.Location = location;
        this.NumberRoom = room;
        this.NumberKitchen = kitchen;
        this.NumberShower = shower;
        this.NumberExibition = exibition;
        this.terrasse  = terrasse;
        this.Parking = parking;
        this.Used = used;
        this.NumberOfLevel = level;
        this.Pitctures = pictures;
        this.Client = client;
    }
//methode pour calculer le prix total
    CalculerPrix()
    {
        return (parseFloat(this.NumberExibition) * parseFloat(this.PriceExibition)) +
         (parseFloat(this.NumberKitchen) * parseFloat(this.PriceKitchen))+
         (parseFloat(this.NumberShower) * parseFloat(this.PriceShower))+
         parseFloat(this.PriceParking) + parseFloat(this.PriceTerrasse);
    }

    ModifierPrixBasique(priceRoom,priceKitchen,priceShower,priceExibition,priceTerrasse,priceParking)
    {
        this.priceExibition = priceExibition;
        this.priceKitchen = priceKitchen;
        this.PriceParking = priceParking;
        this.PriceRoom = priceRoom;
        this.PriceTerrasse = priceTerrasse;
        this.PriceShower = priceShower;
    }
}

