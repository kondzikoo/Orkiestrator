// const fruits = ["banan", "japko", "koperek"];

/*const date = new Date();
date.setFullYear(2020)
console.log(date);*/
// const container1 = document.getElementsByClassName("container")[0];

// const veggies = [...fruits];

// function addClickEventOnContainerClassElements(){
//     containersArray.forEach((item) => {
//         item.addEventListener("click", toggleColorsOnClicked.bind(item));
//     })
// }

// function toggleColorsOnClicked (){
//     if(this.style.backgroundColor == "red"){
//         this.style.backgroundColor = "blue";
//         return;
//     }
//     this.style.backgroundColor = "red";
//     }


// const containers = document.getElementsByClassName("container");
// const containersArray = [...containers];

// addClickEventOnContainerClassElements();

// test();


// function test(){
//     const fetchPromise = fetch(
//         "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//       );
//       fetchPromise
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data[0].name);
//       })
//       .catch((error) => {
//         console.error(`Could not get products: ${error}`);
//     });
// }

  //const file = new File([],);

  // const [fileHandle] = await window.showOpenFilePicker();
  // const file = await fileHandle.getFile();
  // return file;


const newsFeedSection = document.getElementById("newsFeed");
const mainSection = document.getElementById("mainTextPanel");
const scoresSection = document.getElementById("scores");

const newsButton = document.getElementById("newsButton");
newsButton.addEventListener("click", () => {
    //mainSection.innerHTML="";
    mainSection.replaceChildren(newsFeedSection);
    newsFeedSection.style.display = "block";
})

const scoresButton = document.getElementById("scoresButton");
scoresButton.addEventListener("click", async() => {
    mainSection.innerHTML="";
    // mainSection.replaceChildren(scoresSection);
    // scoresSection.style.display = "block";
    await displayUserTextInput();
})

const projectsButton = document.getElementById("projectsButton");
projectsButton.addEventListener("click", async (event) =>{
  console.log(event.currentTarget);
  const localJsObj = await getLocalJson();
  populateWithObjectJsonData(localJsObj);
})

const documentsButton = document.getElementById("documentsButton");
documentsButton.addEventListener("click", () => {
    mainSection.innerHTML="";
   populateWithSuperHeroes();
})

async function populateWithSuperHeroes(){

  const request = new Request("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
  const response = await fetch(request);
  const superHeroes = await response.json();

  console.log(superHeroes);
  populateHeaders(superHeroes);
  populateHeroes(superHeroes);
}

async function getLocalJson(){
  const request = new Request("./data.json");

  //https://github.com/kondzikoo/Orkiestrator/blob/main/data.json

  const response = await fetch(request);
  //const responseObj = await fetch (request);
  const data = await response.json();
  //const text = await responseObj.text();

  //const dataObject = JSON.parse(text);
  return data;
  //console.log(dataObject);
}

function populateHeaders(superHeroes){

  const h1 = document.createElement("h1");
  h1.textContent = superHeroes.squadName;
  mainSection.appendChild(h1);

  const p1 = document.createElement("p");
  p1.textContent = `Hometown: ${superHeroes.homeTown} // Formed: ${superHeroes.formed}`;
  mainSection.appendChild(p1);

}

function populateHeroes(superHeroes){
  const heroes = superHeroes.members;
  for(const hero of heroes){
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }
    mainSection.appendChild(myH2);
    mainSection.appendChild(myPara1);
    mainSection.appendChild(myPara2);
    mainSection.appendChild(myPara3);
    mainSection.appendChild(myList);

  }
}

function populateWithObjectJsonData(jsObject){
  mainSection.innerHTML="";
  console.log(jsObject);
  const h1 = document.createElement("h1");
  h1.textContent = `Dzień dobry ${jsObject.person}`;
  mainSection.appendChild(h1);
}

async function displayUserTextInput(){

  const form = document.createElement("form");
  const h1 = document.createElement("h1");
  h1.textContent = "Podaj imię";
  const textInput = document.createElement("input");
  textInput.type = "text";

  form.addEventListener("submit",async function(e){

    e.preventDefault();
    const jsonObject = await getLocalJson();
    console.log(jsonObject);
    jsonObject.person = textInput.textContent;

    const stringResult = JSON.stringify(jsonObject);

    const request = new Request("./data.json");

    await fetch(request, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: stringResult
    })
    .then(response => console.log(response.status))

    // fetch nie działa tutaj :///

  });


  const submitButton = document.createElement("button");
  submitButton.textContent = "Wyślij";
  submitButton.type = "submit";

  form.appendChild(h1);
  form.appendChild(textInput);
  form.appendChild(submitButton);

  mainSection.appendChild(form);
}