// inArray function
Array.prototype.inArray = function(check){
    for(i=0; i<this.length; i++){
        if(check === this[i]){
            return true;
        }
    }
    return false;
}

// array random function
Array.prototype.random = function(){
    var stored = [];
    var random = [];
    for(i=0; i<this.length; i++){
        var index = Math.floor(Math.random()*this.length);
        if(!stored.inArray(index)){
            random[random.length] = this[index];
            stored[stored.length] = index;
        }
    }
    return random;
}