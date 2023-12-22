
/* Reset Variables
--------------------------------------------------------------------- */
let computerWord=""
let wrongNum = 0;
let correctNum=0;
let wrong = [];

/* Create a function called `$` for selecting an HTML element
--------------------------------------------------------------------- */


function $(cssSelector) {
    return document.querySelector(cssSelector)
}


/* Create a function called `calcsStat` for selecting random Element within a Range
-----------------------------------------------------------------------------------------*/


function calcStat (min,max)
{
   return Math.floor((Math.random() * (max-min))+ min);
}


/* Create a function called `calcsStat` for selecting random Element within a Range
-----------------------------------------------------------------------------------------*/


function grabWord (category)
{
    computerWord = category[calcStat(0,christmasChoices.length)]
}


/* All HTML elements we need to manipulate
--------------------------------------------------------------------- */

const popup = $('#popup')
const head = $("#head")
const torso = $('#torso')
const leftArm = $('#leftArm')
const rightArm = $('#rightArm')
const leftLeg = $('#leftLeg')
const rightLeg = $('#rightLeg')
const results = $('.results')
const rulesContainer = $('.rulesContainer')
const wrongLetters = $('#wrongletters')
const gameDisplay = $('.game')
const christmasPlayGame = $('#christmas')
const rules = $('#rulesButton')
const keyBoardBtn = $('.keyboard')
const playAgain = $('#Yes')
const resultsText = $('#resultsText')
// const buttonClicked = $("#clicked")


/* All HTML elements we need to manipulate computers choice section
--------------------------------------------------------------------- */


const letter1 = $("#l1")
const letter2 = $("#l2")
const letter3 = $("#l3")
const letter4 = $("#l4")
const letter5 = $("#l5")
const letter6 = $("#l6")
const letter7 = $("#l7")
const letter8 = $("#l8")
const letter9 = $("#l9")
const letter10 = $("#l10")

computerLetter=
[
    letter1,
    letter2,
    letter3,
    letter4,
    letter5,
    letter6,
    letter7,
    letter8,
    letter9,
    letter10,
]

for(let i = 0 ; i<=computerLetter.length-1; i ++)
{
    let tempId = document.getElementById(computerLetter[i].id)
    tempId.style.display="none"
    computerLetter[i].innerText="_"
}


/* THIS SECTION IS FOR THE Initial Screens
--------------------------------------------------------------------- */

for(let i = 0 ; i<=26; i ++)
{
    const enableBTN = document.getElementById("clicked")
//    enableBTN.disabled=false;
   console.log(enableBTN)
}


/* THIS SECTION IS FOR THE SETTING UP HANGMAN
--------------------------------------------------------------------- */
head.style.display = "none";
torso.style.display = "none";
leftArm.style.display = "none";
rightArm.style.display = "none";
leftLeg.style.display = "none";
rightLeg.style.display = "none";

const hangman= [head,torso,leftArm,rightArm,leftLeg,rightLeg];

/* THIS SECTION IS FOR THE GETTING RID OF HANGMAN AND GRABBING RANDOM WORD FROM CORRESPONDING ARRAY
--------------------------------------------------------------------------------------------------*/
christmasPlayGame.addEventListener('click', () => 
{
    popup.style.display="none"
    results.style.display="none";
    rulesContainer.style.display = "none"
    gameDisplay.style.display = "grid";
    for(let i = 0 ; i<=computerLetter.length-1; i ++)
    {
        let tempId = document.getElementById(computerLetter[i].id)
        tempId.style.display="none"
    }
    grabWord(christmasChoices);
    console.clear();
    for(let i = 0 ; i<=computerWord.length-1 ; i ++)
    {
        let tempId = document.getElementById(computerLetter[i].id)
        computerLetter[i].innerText="_";
        tempId.style.display="grid"
        console.log(computerWord[i]);
    }
}
)
rules.addEventListener('click', () => 
{
    popup.style.display="grid"
    results.style.display="none";
    rulesContainer.style.display ="grid"
    gameDisplay.style.display ="none";
}
)
keyBoardBtn.addEventListener('click', () => 
{
    correctNum=0;
    for(let i = 0 ; i < computerWord.length ; i ++)
    {
        let tempString = computerWord[i].toUpperCase(i)
        if(keyBoardBtn.id==tempString)
        {
            correctNum=1;
            computerLetter[i].innerText = keyBoardBtn.id ;
            
            console.log("CORRECT")
        }
        if( correctNum != 1 && i == (computerWord.length-1))
        {
            tempBody = hangman[wrongNum];
            tempBody.style.display="grid";           
            wrong[wrongNum] = keyBoardBtn.id;
            wrongLetters.innerText=wrong;
            buttonClicked=document.getElementById("clicked");
            buttonClicked.setAttribute('id',keyBoardBtn.id);
            wrongNum++;
            correctNum=0;
            console.log(buttonClicked.id)
            if(wrongNum==hangman.length)
            {
                resultsText.innerText="LOOKS LIKE YOU LOST";
                popup.style.display="grid";
                results.style.display="grid";
                rulesContainer.style.display = "none"
                gameDisplay.style.display = "none";
                for(let n = 0 ; n < wrong.length ; n ++)
                {
                    tempchar=wrong[n]
                    console.log(tempchar)
                    tempButton=document.getElementById(tempchar)
                    tempButton.disabled=false;
                }
            }
        }
    }
})
playAgain.addEventListener('click', () => 
{
    popup.style.display="none"
    results.style.display="none";
    rulesContainer.style.display = "none"
    gameDisplay.style.display = "grid";
    for(let i = 0 ; i<=computerLetter.length-1; i ++)
    {
        let tempId = document.getElementById(computerLetter[i].id)
        tempId.style.display="none"
    }
    grabWord(christmasChoices);
    console.clear();
    for(let i = 0 ; i<=computerWord.length-1 ; i ++)
    {
        let tempId = document.getElementById(computerLetter[i].id)
        computerLetter[i].innerText="_";
        tempId.style.display="grid"
        console.log(computerWord[i]);
    }
}
)


/* THIS SECTION CONTAINS THE ARRAY OF COMPUTER CHOICES
--------------------------------------------------------------------- */
const christmasChoices= ["santa","presents","coal","snow","sledding"];
