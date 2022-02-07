import colors from "data/colors.json";

const randomNumber = (min, max, float = false) => {
  min = float ? min : Math.ceil(min);
  max = float ? max : Math.floor(max);
  const random = Math.random() * (max - min) + min;
  return float ? random : Math.floor(random);
}

const randomColor = ( ) => {
  let min = 0  , max = colors.length;
  const randomIndex = randomNumber(min, max);
  return colors[randomIndex];
}


export { randomNumber, randomColor }
