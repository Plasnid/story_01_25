// * This is a single line comment

/**
 * 
 *  * This is a multi line comment
 * 
 */
 // * example of a string
let faveVideoGame = "Mortal Kombat";

// * an example of a template literal
let videoGameSentence = `My favourite video game is ${faveVideoGame}`;

console.log(videoGameSentence);

// * example of a function declaration
function dice(numSides){
    let rando = Math.random();
    let myUnfilteredRoll = numSides * rando;
    let myRoundedRoll = Math.ceil(myUnfilteredRoll)
    console.log(`Unrounded: ${myUnfilteredRoll} rounded: ${myRoundedRoll}`);
    // * get the page body
    let pageBody = document.querySelector("body");
    // * create a p tag
    let family = document.createElement("p");
    // * check pageBody and family tags to see if they exist
    console.log(pageBody);
    console.log(family);
    // * put the rolled number in the p tag
    family.innerText = myRoundedRoll;
    // * put the p tag on the html page
    pageBody.appendChild(family)
}
/**dice(20);
dice(12);
dice(10);
dice(6);
dice(4);*/

function describeToenails(){
    // * get the page body
    let pageBody = document.querySelector("body");
    // * write html to the page body
    pageBody.innerHTML="<h1>I like toenails</h1><p>They have fungus</p>";
    // * an array of toenail lengths
    toeNailLengths = ["12","4","9","7"]
    let myList = document.createElement("ul");
    pageBody.append(myList);
    /*toeNailLengths.forEach(function(){

    })*/
}
describeToenails();

let halflingVeteran = {
    name: "Grayson",
    occupation: "Soldier",
    numYearsWorked: 8,
    numToes: 10,
    onLeave: true,
    hasInPockets: ["sword", "healing potion", "shield", "frags", "rifle", "gummy trolls","the one ring"],
    reduceToes: function(){
        if(this.numToes==0){
            console.log("run away")
        }else{
            this.numToes-=1;
            console.log(`I still have ${this.numToes} left!`);
            this.swingSword();
        }
    },
    swingSword: function(){
        let swordRando = Math.random();
        if(swordRando<0.8){
            console.log("oooowww!  My foot!  Damn it!");
            yellOw();
            console.log(this.numToes);
            this.reduceToes();
            
        }else{
            console.log("I can't believe it!  I hit something that wasn't me!");
        }
    }
}
function yellOw(){
    console.log("OWWWWWW!!!");
}
console.log(halflingVeteran.name);
console.log(halflingVeteran.hasInPockets[5]);
halflingVeteran.swingSword();

