/*Fetch Process - https://www.w3schools.com/jsref/api_fetch.asp
The JSON Server code is connected with my Github account. Meaning that
Any changes would have to go through my computer.*/    
fetch('https://my-json-server.typicode.com/ChefKirby51/Pacman_Arrangements/db')
    .then(response => response.json())
    .then(data => {
        const originalGhosts = data["Original Ghosts"]; //Original Ghost JSON Array
        const poweredGhosts = data["Powered Ghosts"];   //Powered Ghost JSON Array
        const pills = data["Pills"]; //Pills JSON Array 
        
        //Original Ghost JSON Accessors
        const blinky = originalGhosts[0];
        const pinky = originalGhosts[1];
        const inky = originalGhosts[2];
        const clyde = originalGhosts[3];
        const kinky = originalGhosts[4];
        //Powered Ghost JSON Accessors
        const poweredBlinky = poweredGhosts[0];
        const poweredPinky = poweredGhosts[1];
        const poweredInky = poweredGhosts[2];
        const poweredClyde = poweredGhosts[3];
        //Pills JSON Accessors
        const blinkyPills = pills[0];
        const pinkyPills = pills[1];
        const inkyPills = pills[2];
        const clydePills = pills[3];
        const kinkyPills = pills[4];
        
        //InnerHTML Elements - original
        const blinkyLi = document.createElement('li');
        blinkyLi.innerHTML = `
            <h1 style="color: red;">${blinky.Name}</h1>
            <p>Nickname: ${blinky.Nickname}</p>
            <p>Difficulty: ${blinky.Difficulty}</p>
            <p>Description: ${blinky.Description}</p>
        `;
        const PinkyLi = document.createElement('li');
        PinkyLi.innerHTML = `
            <h1 style="color: pink;">${pinky.Name}</h1>
            <p>Nickname: ${pinky.Nickname}</p>
            <p>Difficulty: ${pinky.Difficulty}</p>
            <p>Description: ${pinky.Description}</p>
        `;
        const InkyLi = document.createElement('li');
        InkyLi.innerHTML = `
            <h1 style="color: aqua;">${inky.Name}</h1>
            <p>Nickname: ${inky.Nickname}</p>
            <p>Difficulty: ${inky.Difficulty}</p>
            <p>Description: ${inky.Description}</p>
        `;
        const ClydeLi = document.createElement('li');
        ClydeLi.innerHTML = `
            <h1 style="color: orange;">${clyde.Name}</h1>
            <p>Nickname: ${clyde.Nickname}</p>
            <p>Difficulty: ${clyde.Difficulty}</p>
            <p>Description: ${clyde.Description}</p>
        `;
        const KinkyLi = document.createElement('li');
        KinkyLi.innerHTML = `
            <h1 style="color: rgb(243, 243, 69);">${kinky.Name}</h1>
            <p>Nickname: ${kinky.Nickname}</p>
            <p>Difficulty: ${kinky.Difficulty}</p>
            <p>Description: ${kinky.Description}</p>
        `;
        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
        //innerHTML Elements - Powered Ghosts
        const poweredBlinkyLi = document.createElement('li');
        poweredBlinkyLi.innerHTML = `
            <p>Ability: ${poweredBlinky.Ability}</p>
            <p>Difficulty: ${poweredBlinky.Difficulty}</p>
            <p>Description: ${poweredBlinky.Description}</p>
        `;
        const poweredPinkyLi = document.createElement('li');
        poweredPinkyLi.innerHTML = `
            <p>Ability: ${poweredPinky.Ability}</p>
            <p>Difficulty: ${poweredPinky.Difficulty}</p>
            <p>Description: ${poweredPinky.Description}</p>
        `;
        const poweredInkyLi = document.createElement('li');
        poweredInkyLi.innerHTML = `
            <p>Ability: ${poweredInky.Ability}</p>
            <p>Difficulty: ${poweredInky.Difficulty}</p>
            <p>Description: ${poweredInky.Description}</p>
        `;
        const poweredClydeLi = document.createElement('li');
        poweredClydeLi.innerHTML = `
            <p>Ability: ${poweredClyde.Ability}</p>
            <p>Difficulty: ${poweredClyde.Difficulty}</p>
            <p>Description: ${poweredClyde.Description}</p>
        `;
        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
        //innerHTML Elements - Powered Ghosts
        const blinkyPillLi = document.createElement('li');
        blinkyPillLi.innerHTML = `
            <p>${blinkyPills.Name}</p>
            <p>${blinkyPills.Description}</p>
        `;
        const pinkyPillLi = document.createElement('li');
        pinkyPillLi.innerHTML = `
            <p>${pinkyPills.Name}</p>
            <p>${pinkyPills.Description}</p>
        `;
        const inkyPillLi = document.createElement('li');
        inkyPillLi.innerHTML = `
            <p>${inkyPills.Name}</p>
            <p>${inkyPills.Description}</p>
        `;
        const clydePillLi = document.createElement('li');
        clydePillLi.innerHTML = `
            <p>${clydePills.Name}</p>
            <p>${clydePills.Description}</p>
        `;
        const kinkyPillLi = document.createElement('li');
        kinkyPillLi.innerHTML = `
            <p>${kinkyPills.Name}</p>
            <p>${kinkyPills.Description}</p>
        `;
         
        // HTML Placement code
        document.getElementById('blinkyInfo').appendChild(blinkyLi);
        document.getElementById('pinkyInfo').appendChild(PinkyLi);
        document.getElementById('inkyInfo').appendChild(InkyLi);
        document.getElementById('clydeInfo').appendChild(ClydeLi);
        document.getElementById('kinkyInfo').appendChild(KinkyLi);
        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
        document.getElementById('poweredBlinkyInfo').appendChild(poweredBlinkyLi);
        document.getElementById('poweredPinkyInfo').appendChild(poweredPinkyLi);
        document.getElementById('poweredInkyInfo').appendChild(poweredInkyLi);
        document.getElementById('poweredClydeInfo').appendChild(poweredClydeLi);
        //- - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
        document.getElementById('blinkyPillInfo').appendChild(blinkyPillLi);
        document.getElementById('pinkyPillInfo').appendChild(pinkyPillLi);
        document.getElementById('inkyPillInfo').appendChild(pinkyPillLi);
        document.getElementById('clydePillInfo').appendChild(clydePillLi);
        document.getElementById('kinkyPillInfo').appendChild(kinkyPillLi);
    })
    .catch(error =>console.error('Error fetching data:', error));

//Button Process
const Blinky = document.getElementById("Blinky");
const Pinky = document.getElementById("Pinky");
const Inky = document.getElementById("Inky");
const Clyde = document.getElementById("Clyde");
const Button1 = document.getElementById("Button1");
const Button2 = document.getElementById("Button2");
const Button3 = document.getElementById("Button3");
const Button4 = document.getElementById("Button4");

//This site really helped me out with this button image swapping - 
// https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener

let isBlinkyFirstImage = true;
let isPinkyFirstImage = true;
let isInkyFirstImage = true;
let isClydeFirstImage = true;

Button1.addEventListener("click", function () {
    if (isBlinkyFirstImage) {
        Blinky.src = "Images/Blinky2.gif";
    } else {
        Blinky.src = "Images/Blinky1.gif";
    }
    isBlinkyFirstImage = !isBlinkyFirstImage;

});

Button2.addEventListener("click", function () {
    if (isPinkyFirstImage) {
        Pinky.src = "Images/Pinky2.gif";
    } else {
        Pinky.src = "Images/Pinky1.gif";
    }
    isPinkyFirstImage = !isPinkyFirstImage;

});

Button3.addEventListener("click", function () {
    if (isInkyFirstImage) {
        Inky.src = "Images/Inky2.gif";
    } else {
        Inky.src = "Images/Inky1.gif";
    }
    isInkyFirstImage = !isInkyFirstImage;

});

Button4.addEventListener("click", function () {
    if (isClydeFirstImage) {
        Clyde.src = "Images/Clyde2.gif";
    } else {
        Clyde.src = "Images/Clyde1.gif";
    }
    isClydeFirstImage = !isClydeFirstImage;

});


