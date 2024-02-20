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

function showNewsFeed(){

}

