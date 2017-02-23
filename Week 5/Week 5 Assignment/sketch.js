var randomHello = []; 

function setup (){
    createCanvas (1000,1000);
    background ("pink"); 
    
    randomHello.push ("Bonjour"); 
    randomHello.push ("Merci");
    randomHello.push ("Oui"); 
    randomHello.push ("Non"); 
    randomHello.push ("Salut"); 
    randomHello.push ("Ca va"); 
    randomHello.push ("Mon Amie");
    randomHello.push ("Amour");  
    
    for (var i = 0; i < randomHello.length; i++){
        text(randomHello[i], random(width), random(height)); 
        
        frameRate (200000); 
        
    }
    
}


function draw (){
    for (var i = 0; i < randomHello.length; i++)
        text(randomHello[i], random(width), random(height)); 
}