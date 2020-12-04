const simpleQuotes = [
    {
        quote:'No matter the amount of negativity that comes your way, smile because you are still alive. Nothing is more precious than life.'
    },

    {
        quote:'From the beginning of time, nothing worth having has ever come easy. And until the end of time, nothing worth having will ever come easy.'
    },

    {
        quote:"Don't let the thoughts of your past failures blind you to the point where you can't see the bright future your Creator has prepared for you."
    },

    {
        quote:'Celebrate your life, come what may, for you are strong, beautiful and blessed.'
    },

    {
        quote:'Be cheerful and never lose your faith in God, for He will never let you down'
    },

    {
        quote:'Whenever you are feeling down, remember to count your blessings and you shall smile again.'
    },

    {
        quote:"Don't let the storm make you miss out on the coming rainbow."
    },

    {
        quote:"You're braver than you believe, stronger than you seem, and smarter than you think."
    },

    {
        quote:"You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens."
    }
]

const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');

btn.addEventListener('click', displayQuotes);

function displayQuotes() {
let number = Math.floor(Math.random()*simpleQuotes.length);

/*select the array, get the random number to give a random index.
and from the random index, we get the quote value*/
quote.innerHTML = simpleQuotes[number].quote;

}


















