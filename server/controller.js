// res.status(200).send(getRandom(fortunes));
// Can I add a res.status(200) to a function?
// I wanted to add the above code to the getRandom, but it did not work.

///////// FUNCTION FOR RANDOM ITEM FROM ARRAY /////////
const getRandom = co => co[Math.floor(Math.random() * co.length)];

///////// EXPORTS /////////
module.exports = {
  getCompliment: (req, res) => {
    const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
    res.status(200).send(getRandom(compliments));
  },
  getFortune: (req, res) => {
    const fortunes = [
      "Your determination and bravery will lead you to new horizons in your journey.",
      "In the face of challenges, your heart of gold will always shine through.",
      "Like Pikachu by your side, you'll find strength in your friendships.",
      "Your dreams are as boundless as the sky, and you're destined for greatness.",
      "Every step you take brings you closer to becoming a true Pokémon Master.",
    ];
    res.status(200).send(getRandom(fortunes));
  },
  getAurelius(req, res) {
    const aurelius = [
      "You have power over your mind - not outside events. Realize this, and you will find strength.",
      "The best revenge is not to be like your enemy.",
      "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
      "The happiness of your life depends upon the quality of your thoughts.",
      "The soul becomes dyed with the color of its thoughts.",
      "The impediment to action advances action. What stands in the way becomes the way.",
      "Waste no more time arguing about what a good man should be. Be one.",
      "The universe is change; our life is what our thoughts make it.",
      "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
      "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.",
    ];
    res.status(200).send(getRandom(aurelius));
  },
  getThomas(req, res) {
    const thomas = [
      "If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you.",
      "Recognize what is in your sight, and that which is hidden from you will become plain to you.",
      "Let him who seeks continue seeking until he finds. When he finds, he will become troubled. When he becomes troubled, he will be astonished, and he will rule over the All.",
      "The Kingdom of God is inside you, and it is outside you. When you come to know yourselves, then you will become known, and you will realize that it is you who are the sons of the living Father.",
      "If your leaders say to you, 'Look, the Kingdom is in the sky,' then the birds of the sky will precede you. If they say to you, 'It is in the sea,' then the fish will precede you. But the Kingdom is within you and it is around you.",
      "I am the light that is over all things. I am all: from me all came forth, and to me all attained. Split a piece of wood, and I am there. Lift up the stone, and you will find me there.",
      "When you make the two into one, and when you make the inner like the outer and the outer like the inner, and the upper like the lower, and when you make male and female into a single one, so that the male will not be male nor the female be female, when you make eyes in place of an eye, a hand in place of a hand, a foot in place of a foot, an image in place of an image, then you will enter the Kingdom.",
      "Blessed are the solitary and elect, for you will find the Kingdom. For you are from it, and to it you will return.",
    ];
    res.status(200).send(getRandom(thomas));
  },
};
