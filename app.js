/*
  @author: Andrew Oikonomidis
*/

var quotes = [
    {
      quote: "Don't cry because it's over, smile because it happened.",
      author: "Dr. Seuss"
    },
    {
      quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
      author: "Marilyn Monroe"
    },
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      author: "Bernard M. Baruch"
    },
    {
      quote: "So many books, so little time.",
      author: "Frank Zappa"
    },
    {
      quote: "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening and live like it's heaven on earth.",
      author: "William W. Purkey"
    },
    {
      quote: "A room without books is like a body without a soul.",
      author: "Marcus Tullius Cicero"
    },
    {
      quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      author: "Dr. Seuss"
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
      author: "J.K. Rowling"
    },
    {
      quote: "No one can make you feel inferior without your consent.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain"
    },
    {
      quote: "A friend is someone who knows all about you and still loves you.",
      author: "Elbert Hubbard"
    },
    {
      quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
      author: "Maya Angelou"
    },
    {
      quote: "Always forgive your enemies; nothing annoys them so much.",
      author: "Oscar Wilde"
    },
    {
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "To live is the rarest thing in the world. Most people exist, that is all.",
      author: "Oscar Wilde"
    },
    {
      quote: "I am so clever that sometimes I don't understand a single word of what I am saying.",
      author: "Oscar Wilde"
    },
    {
      quote: "Without music, life would be a mistake.",
      author: "Friedrich Nietzsche"
    }
];
  
var currentIndex;
  
function getQuote() {
    do {
      var index = Math.floor(Math.random()*quotes.length);
    }while(currentIndex === index);
    currentIndex = index;
    $('#quote').html(quotes[index].quote);
    $('#author').html(quotes[index].author);
}
  
function shareTweet() {
    var quoteToTweet = quotes[currentIndex].quote;
    var authorToTweet = quotes[currentIndex].author;
    if(quoteToTweet.length > 100) {
      quoteToTweet = quoteToTweet.substr(0, 100).match(/(^.+)\s/)[1] + "...";
    }
    quoteToTweet = encodeURI("\"" + quoteToTweet + "\"");
    authorToTweet = encodeURI(" \~" + authorToTweet)
    window.open("https://twitter.com/intent/tweet?text=" + quoteToTweet + authorToTweet + "&hashtags=quotes,freeCodeCamp");
}
  
$(function(){
    getQuote();
    $('#generator').click(getQuote);
    $('#twitter').click(shareTweet);
});
