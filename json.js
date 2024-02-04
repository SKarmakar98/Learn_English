// Using Fetch API to load JSON asynchronously
fetch("word.json")
  .then((response) => response.json())
  .then((data) => {
    let randomNumber = Math.ceil(Math.random() * (data.length - 1));
    console.log("Random Number:", randomNumber);
    console.log(data);
    let arrayLength = data[randomNumber].bn;
    let arrayLengthe = data[randomNumber].en;
    console.log("alert " + arrayLength);
    console.log("alert " + arrayLengthe);
    // Use the 'data' object here
    let ques = document.querySelector("#question");
    console.log(document.querySelector("#anser").innerHTML);
    //   console.log(ques)
    ques.innerHTML = arrayLength;
    let anser = document.querySelector('.comment');
    let anser_value = anser.value;
    let pic_anser = document.querySelector("#anser_button");
    console.log(`input value is ${anser_value}`);
    pic_anser.addEventListener(
      "click",
      (click_to_change = () => {
        console.log(`your anser is : ${anser_value}`);
        alert(`your anser is ${anser_value}`);
      })
    );
  })
  .catch((error) => console.error("Error fetching JSON:", error));
