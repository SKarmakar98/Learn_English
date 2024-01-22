// import './json.js';
var data ='./question.json';

var json = JSON.parse('./question.json');
        
// alert(json["name"]); //mkyong
// alert(json.name); //mkyong

// alert(json.address.streetAddress); //88 8nd Street
// alert(json["address"].city); //New York
        
// alert(json.phoneNumber[0].number); //111 111-1111
// alert(json.phoneNumber[1].type); //fax
        
// alert(json.phoneNumber.number); //undefined



let text = document.getElementById("question").innerText=json["name"];
document.getElementById("demo").innerHTML = text;  