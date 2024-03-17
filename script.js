let tamagotchiName = "";
let health = "";
let food = 0;
let thirst = 0;
let happiness = 0;
let money = 80;
let buyFoodFlag = false;
let gender = "";
let level = 1;
let monsterImage = "";
let tired = 100




let petRadio1 = document.getElementById("pet1");
let petRadio2 = document.getElementById("pet2");
let petRadio3 = document.getElementById("pet3");
let img1 = document.getElementById("petImg1");
let img2 = document.getElementById("petImg2");
let img3 = document.getElementById("petImg3");
let levelStatus = document.querySelector(".level-status");
let levelHeader = document.querySelector(".level-header");
let levelHeaderText = document.querySelector(".level-header-text");
let button1 = document.querySelector(".start-btn");
let button2 = document.querySelector(".create-tamagotchi-btn");
let button3 = document.querySelector(".feed-pet-btn");
let button4 = document.querySelector(".buy-toys-btn");
let button5 = document.querySelector(".sleep-btn");
let gameControls = document.querySelector(".game-controls");
let notifications = document.querySelector(".notifications");
let foodStatus = document.querySelector(".food-status");
let thirstStatus = document.querySelector(".thirst-status");
let tiredStatus = document.querySelector(".tired-status");
let moneyStatus =document.querySelector(".money-status");
let happinessStatus = document.querySelector(".happiness-status");
let pet = document.querySelector(".pet-img");
let tamagotchiNameInput = document.querySelector(".tamagotchi-name")
let foodAnimation = document.querySelector(".foodAnimation")
let bodyElement = document.body;
let petDiv = document.querySelector(".pet");
let petImg = document.querySelector(".pet-img");
let drinkAnimation = document.querySelector(".drinkAnimation");
let sportAnimation = document.querySelector(".sportAnimation");
let sleepingPet = document.querySelector(".sleepingPet")
let zzzSleep = document.querySelector(".zzzSleep");
let form = document.querySelector(".formPetSelect");







button1.addEventListener("click", startToWelcome);
button2.addEventListener("click", function (e){
    let monsterSelected = false;
    if (petRadio1.checked || petRadio2.checked || petRadio3.checked) {
        monsterSelected = true;
        e.preventDefault(); // Prevent the default behavior of the button
        document.querySelector(".welcome-elements-2").style.display = "none";
        tamagotchiName = tamagotchiNameInput.value;
        console.log(tamagotchiName)
        notifications.innerText = tamagotchiName + " is happy and healthy. Be sure to give them lots of attention "
        petImg.style.display = "block"
        gameControls.style.display = "flex" //change this if needed
    } else if (!monsterSelected){
        e.preventDefault();
        alert("Please Select A Pet");
    }


});
button3.addEventListener("click", feedPet);
button4.addEventListener('click', playSport);
button5.addEventListener("click", goToSleep);




function startToWelcome() {
    document.querySelector(".welcome-elements").style.display = "none";
    document.querySelector(".welcome-elements-2").style.display = "block";
}




function welcomeToBegin(event) {
    event.preventDefault(); // Prevent the default behavior of the button
    document.querySelector(".welcome-elements-2").style.display = "none";
    tamagotchiName = tamagotchiNameInput.value;
    console.log(tamagotchiName)
    notifications.innerText = tamagotchiName + " is happy and healthy. Be sure to give them lots of attention "
    petImg.style.display = "block"
    gameControls.style.display = "block"

}

petRadio1.addEventListener("change", function(){
    if (this.checked) {
        petImg.src = "monster.gif";
        monsterImage = petImg.src;
    }
}
);

petRadio2.addEventListener("change", function(){
    if(this.checked) {
        petImg.src = "monster2.gif";
        monsterImage = petImg.src;
    }
});

petRadio3.addEventListener("change", function(){
    if(this.checked) {
        petImg.src ="monster3.gif";
        
    }
});


function scalePet () {
   setTimeout(() => {
    pet.classList.add("scaleUp") }, 1000);
   pet.classList.remove("scaleUp");

}

function normalPet (){
    pet.style.transform = "scale(1)";
}



function buyFood () {
    console.log("scalePet();")
    foodAnimation.style.display = "block";
    foodStatus.style.color = "var(--accent-color)";
    food += 20;
    scalePet();
    if (money > 10) {
        money -=10;
        moneyStatus.innerHTML = "Money: <strong>" + money + "</strong>";
        notifications.innerText = tamagotchiName + " loves burgers! NOM NOM NOM";
        moneyStatus.style.color = "red";
        setTimeout(()=>{
            moneyStatus.style.color = "var(--second-color)"
        },1000)
    } else {
        button3.removeEventListener('click', buyFood);
        notifications.innerText = "⚠️ You don't have enough money to buy food! ⚠️";
    };
    console.log(money);
    foodStatus.innerHTML = "Food: <strong>" +  food + "</strong>";
   setTimeout( ()=> {
    foodStatus.style.color = "var(--second-color)";
   }, 1000);
   setTimeout(() => {
    foodAnimation.style.display = "none";}, 2000);
};

function buyWater() {
    button4.removeEventListener('click', playSport);
    thirst += 10;
    if (money > 10 ) {
        money -= 10;
        moneyStatus.innerHTML = "Money: <strong>" + money + "</strong>";
        notifications.innerText = "Gulp, Gulp! " + tamagotchiName + " feels rehydrated!"
        thirstStatus.style.color = "var(--accent-color";
        thirstStatus.innerHTML = "Thirst: <strong>" + thirst + "</strong>";
        scalePet();
        drinkAnimation.style.display = "block";
        setTimeout(()=>{
            drinkAnimation.style.display = "none";
        }, 2000);
        setTimeout(()=>{
            thirstStatus.style.color = "var(--secondary-color)";
        }, 1000)
        moneyStatus.style.color = "red";
        setTimeout(()=>{
            moneyStatus.style.color = "var(--second-color)"
        },1000)
    } else {
        notifications.innerText = "⚠️ You don't have enough money to buy drinks! ⚠️";
    }



}


function feedPet (){

    if (buyFoodFlag) {
        console.log("This works)")
    } else {
    button3.innerText = "Buy Food"
    button4.innerText = "Buy Drinks"
    button5.innerText =  "Go Back"
    notifications.innerText = tamagotchiName + " is licking their lips! What are you going to give them?"
    buyFoodFlag = true;
    button4.removeEventListener('click', playSport);
    button3.addEventListener('click', buyFood);
    button4.addEventListener("click", buyWater);
    }
    button5.removeEventListener('click', goToSleep);
    button5.addEventListener('click', defaultScreen);

};


function playSport () {
    if (tired > 20){
    tired -=20;
    button4.removeEventListener("click", playSport);
    tiredStatus.innerHTML ="Energy : <strong>" + tired + "</strong>";
    tiredStatus.style.color = "red";
    notifications.innerText = tamagotchiName + " Loves playing basketball!";
    happiness += 20;
    defaultScreen();
    happinessStatus.style.color = "var(--accent-color)";
    setTimeout(()=>{
        tiredStatus.style.color = "var(--second-color)"
    },1000);
    setTimeout(()=>{happinessStatus.style.color="var(--secondary-color)"}, 1000);
    sportAnimation.style.display="block";
       
    setTimeout(()=>{sportAnimation.style.display="none"}, 2000);
    happinessStatus.innerHTML = "Happiness: <strong>"  + happiness +  "</strong>";


    } else {
        button4.removeEventListener('click', playSport);
        sportAnimation.style.display="none";
        happinessStatus.style.color ="var(--second-color)"
        notifications.innerText ="⚠️ " + tamagotchiName + " is too tired to play anymore. Get some rest!⚠️"
    };
    if (happiness % 100  === 0) {
        level++;
        levelStatus.innerText = "Level: " + level;
        notifications.innerHTML = "<strong>🥳Congratulations! You just reached level " 
        + level + "🥳</strong>";
        levelHeader.style.display = "block";
        levelHeaderText.innerText = "Level " + level;
        setTimeout(()=>{
            levelHeader.style.display = "none";
        },1000);
    } else {
       
    }
};



function goToSleep (){
    bodyElement.classList.remove('.background-day');
    bodyElement.classList.add('background-night');
    petImg.style.display = "none";
    sleepingPet.style.display ="block";
    button5.innerText = "Wake Up"
    button5.addEventListener('click', ()=>{clearInterval(moneyInterval)})
    button5.addEventListener('click', ()=>{clearInterval(tiredInterval)})
    petImg.classList.add("sleeping-pet");
    petImg.classList.remove("pet-img");
    zzzSleep.style.display = "block";
    button3.style.display="none"
    button4.style.display = "none"
    wakeUp();
    notifications.innerText = tamagotchiName + " is asleep!"
    moneyInterval = setInterval(()=>{
        if (money < 150) {
            money += 5;
            moneyStatus.innerHTML = "Money: <strong>" + money + "</strong>";
            moneyStatus.style.color = "var(--accent-color)";

        } else {
            notifications.innerText = "You have earned the maximum money"
            moneyStatus.style.color = "var(--second-color)";

        }
    }, 1000);

    tiredInterval = setInterval(()=>{
        if (tired<160) {
            tired += 10;
            tiredStatus.innerHTML ="Energy : <strong>" + tired + "</strong>";
            tiredStatus.style.color = "var(--accent-color)";
        } else {
            notifications.innerText = "You have slept the maximum amount of time!"
            tiredStatus.style.color = "var(--second-color)";
        }
    }, 1000)
}


function wakeUp (){

    button5.removeEventListener("click", goToSleep);
    button5.addEventListener("click", defaultScreen);
}



function goBack() {
   defaultScreen();
}



function defaultScreen () {

    button5.removeEventListener('click', goBack);
    button5.addEventListener('click', goToSleep);
    button4.removeEventListener("click", buyWater);
    button3.style.display="inline";
    button4.style.display = "inline";
     sleepingPet.style.display ="none"
    buyFoodFlag = false;
    button3.removeEventListener('click', buyFood);
    button4.addEventListener('click', playSport);
    button3.innerText = "Feed Pet";
    button4.innerText = "Play Sports";
    button5.innerText = "Go To Sleep";
    bodyElement.classList.remove("background-night");
    bodyElement.classList.add("background-day");
    monsterImage;
    petImg.classList.add("pet-img");
    petImg.style.display = "block";
    moneyStatus.style.color = "var(--secondary-color)";
    tiredStatus.style.color = "var(--secondary-color)";
    notifications.innerText = tamagotchiName + " is happy and healthy. Be sure to give them lots of attention ";
    zzzSleep.style.display = "none";

}








