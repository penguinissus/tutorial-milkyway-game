import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs";
import { text } from "node:stream/consumers";
kaplay();

const BEAN_CENTER = width()/2 - 40;
const JUMP_FORCE = 800;
const FLOOR_HEIGHT = 48;

loadSprite("bean", "sprites/bean.png");

scene("start", () => {
    const title = add([
        text("World's easiest game"),
        pos(24, 24),
        color(255, 255, 255),
        scale(3),
        anchor("center")
    ]);
    onclick(() => go("game"));
});

scene("game", () => {
    setGravity(1600);
    const player = add([
        sprite("bean"),
        pos(BEAN_CENTER, height()/2 - 40),
        area(),
        body(),
    ]);

    //floor
    add([
        rect(width(), FLOOR_HEIGHT),
        outline(4),
        pos(0, height()),
        anchor("botleft"),
        area(),
        body({isStatic: true}),
        color(127, 200, 255),
    ]);

    function jump() {
        if(player.isGrounded()) {
            player.jump(JUMP_FORCE);
        }
    }
    function moveRight() {
        player.move(200, 0);
    }
    function moveLeft() {
        player.move(-200, 0);
    }
    onKeyPress("space", jump);
    onKeyPress("up", jump);
    onKeyPress("right", moveRight);
    onKeyPress("left", moveLeft);
});

go("start");