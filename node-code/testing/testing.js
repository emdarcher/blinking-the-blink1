

var Blink1 = require('node-blink1');

var blink1 = new Blink1();

Step = require('step');

Step(
        function(){
            blink1.fadeToRGB(2000, 32,128,16, this); 
        }, function(err){
            if(err) throw err;
            blink1.fadeToRGB(3000, 48,64,64, this); 
        }, function(err){
            if(err) throw err;
            blink1.fadeToRGB(3000, 128,32,48, this); 
        }, function(err){
            if(err) throw err;
            blink1.fadeToRGB(3000, 128,32,48, this); 
        }, function(err){
            if(err) throw err;
            blink1.fadeToRGB(3000, 0,0,0, this); 
        } 
 

);
