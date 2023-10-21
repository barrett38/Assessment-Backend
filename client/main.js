document.addEventListener("DOMContentLoaded", function () {
  // const { PORT } = require("../server/index.js");
  // The above code in comments did not work.
  // Question- Is it possoble to use the PORT variable from server/index.js here?
  const PORT = 4000;
  const BASEURL = `http://localhost:${PORT}/api/`;

  ///////// COMPLIMENT BUTTON //////////

  const complimentBtn = document.getElementById("complimentButton");
  const getCompliment = () => {
    axios.get(`${BASEURL}compliment/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  complimentBtn.addEventListener("click", getCompliment);

  ///////// FORTUNE BUTTON //////////

  const fortuneBtn = document.getElementById("fortuneButton");
  const getFortune = () => {
    axios.get(`${BASEURL}fortune/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  fortuneBtn.addEventListener("click", getFortune);

  ///////// AURELIUS BUTTON //////////

  const aureliusBtn = document.getElementById("aureliusButton");
  const getAurelius = () => {
    axios.get(`${BASEURL}aurelius/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  aureliusBtn.addEventListener("click", getAurelius);

  ///////// THOMAS BUTTON //////////

  const thomasBtn = document.getElementById("thomasButton");
  const getThomas = () => {
    axios.get(`${BASEURL}thomas/`).then(res => {
      const data = res.data;
      alert(data);
    });
  };
  thomasBtn.addEventListener("click", getThomas);
});

///////// BIRTHDAY SELECTION //////////

function getNumerologyQuote(number) {
  number = parseInt(number);
  let numerologyQuote;
  if (number === 1 || number === 10 || number === 19 || number === 28 || number === 37 || number === 46) {
    numerologyQuote = "You are the architect of your destiny; create a masterpiece.";
  } else if (number === 2 || number === 20) {
    numerologyQuote = "In your gentle strength lies the power to harmonize the world.";
  } else if (number === 3 || number === 12 || number === 21 || number === 30) {
    numerologyQuote = "Embrace your creativity and let your vibrant spirit shine.";
  } else if (number === 4 || number === 13 || number === 31) {
    numerologyQuote = "Solid foundations lead to boundless possibilities.";
  } else if (number === 5 || number === 14 || number === 23) {
    numerologyQuote = "Adventure awaits those who seek change and freedom.";
  } else if (number === 6 || number === 15 || number === 24) {
    numerologyQuote = "Love is your guiding light; let it nurture and heal.";
  } else if (number === 7 || number === 16 || number === 25) {
    numerologyQuote = "Wisdom is found in the depths of your introspection.";
  } else if (number === 8 || number === 17 || number === 26) {
    numerologyQuote = "Abundance flows where ambition and integrity meet.";
  } else if (number === 9 || number === 18 || number === 27) {
    numerologyQuote = "You are the humanitarian, a beacon of universal love.";
  } else if (number === 11 || number === 29) {
    numerologyQuote = "Your intuition is your superpower; trust it to guide your path.";
  } else if (number === 22) {
    numerologyQuote = "Master builder, your dreams can shape reality.";
  } else {
    numerologyQuote = "Please enter a valid numerology number between 1 and 31.";
  }
  alert(numerologyQuote);
  return numerologyQuote;
}
const getEnteredDay = () => {
  const val = document.getElementById("dayInput").value;
  console.log(`Returned value: ${val} testing`);
  getNumerologyQuote(val);
};
