
// Using Fetch API to load JSON asynchronously
fetch('word.json')
    .then(response => response.json())
    .then(data => {
        let randomNumber = Math.ceil(100* (Math.random(1, 100)));
        console.log("Random Number:", randomNumber);
        console.log(data);
        let arrayLength = data[randomNumber].bn;
        let arrayLengthe = data[randomNumber].en;
        console.log("alert " + arrayLength);
        console.log("alert " + arrayLengthe);
        // Use the 'data' object here
        let ques = document.getElementById("question");
        console.log(document.getElementById("anser").innerHTML);
        //   console.log(ques)
        ques.innerHTML = arrayLength;
    })
    .catch(error => console.error('Error fetching JSON:', error));