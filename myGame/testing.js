import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
kaplay();

const BEAN_CENTER = width()/2 - 40;

loadSprite("bean", "sprites/bean.png");

add([
    sprite("bean"),
    pos(BEAN_CENTER, height()/2 - 40)
]);

// screen("game", () => {
    
// });

// go("game");