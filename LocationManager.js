class LocationManager{
    
    constructor(){
        this.locations = [];
        this.loadLocations();
    }

    loadLocations(){
        firebase.database().ref('/Locations').once('value').then((snapshot)=> {
        snapshot.forEach((childSnapshot)=> {
            this.locations[childSnapshot.key] = { name : childSnapshot.val().name, 
                                            lat: childSnapshot.val().lat, 
                                            long:childSnapshot.val().long};  
            });
        });  
    }
    
    getLocation(code){
        if (code == null)
            return "";
        return this.locations[code].name; 
    }
}