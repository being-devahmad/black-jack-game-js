let player = {
    name: "Ahmad",
    chips: 145
    //one of easy way is to make oject and declare the same linked variables in it
}
// Alternative way
// let playerName = "Ahmad"
// let playerChips = 145
cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""


let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
let messageEL = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if( randomCard === 1){
        return 11
    }
    else if( randomCard > 10){
        return 10
    }
    else{
        return randomCard
    }
}
function startGame(){
    // if you log cards without clicking on start game btn it'll log automatically 2 numbers which is fishy so we set first and second card and their ssum in startGame function (only to start when the btn is clicked) and also we assign isAlive --> false in start and will make true in this function again 
    isAlive = true
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard 
    
    
    renderGame()
}

function renderGame()
{
    cardEL.textContent = "Cards : "
    for (let i=0; i < cards.length; i++)
    {
        cardEL.textContent += cards[i] + " "
    }


    sumEL.textContent = 
    "Sum : " + sum
    
    if(sum<21){
    message = "Do you want to draw new card ? "
    }
    else if(sum === 21){
        message = "Congrats! You've got a BlackJack ! "
        hasBlackjack = true
    }
    else {
        message = "You're out of the game ! "
        isAlive = false
    }

    messageEL.textContent = message
}

function newCard()
{
    //we'll only allow player to draw newCard if isAlive is true annd hasBlackjack is false so,
    if( isAlive === true && hasBlackjack === false )
    {
        let newcard = getRandomCard()
        sum += newcard
        cards.push(newcard)
        renderGame()
    }
}