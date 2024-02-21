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
scoresButton.addEventListener("click", () => {
    //mainSection.innerHTML="";
    mainSection.replaceChildren(scoresSection);
    scoresSection.style.display = "block";
})

const projectsButton = document.getElementById("projectsButton");
projectsButton.addEventListener("click", (event) =>{
  console.log(event.currentTarget);
})

test();


function test(){
    const fetchPromise = fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      fetchPromise
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data[0].name);
      })
      .catch((error) => {
        console.error(`Could not get products: ${error}`);
    });
}

