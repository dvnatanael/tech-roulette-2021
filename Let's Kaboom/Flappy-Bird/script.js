kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
});

loadRoot("/img/");
loadSprite("birdy", "birdy.png");
loadSprite("bg", "bg.png");
loadSprite("pipe", "pipe.png");

scene("main", () => {

    layers([
        "game",
        "ui",
    ], "game");

    add([
        sprite("bg"),
        scale(width() / 240, height() / 240),
        origin("topleft"),
    ]);

    const birdy = add([
        sprite("birdy"),
        pos(80, 80),
        scale(1.5),
        body(),
    ]);

    const JUMP_FORCE = 320;

    keyPress("space", () => {
        birdy.jump(JUMP_FORCE);
    });

    birdy.action(() => {
        if (birdy.pos.y + birdy.height * 1.5 < 0
            || birdy.pos.y >= height()) {
            go("gameover", score.value);
        }
    });

    birdy.collides("pipe", () => {
        go("gameover", score.value);
    });

    PIPE_OPEN = 120;
    PIPE_SPEED = 90;
    NEW_PIPE_EVERY = 1.5;
    const k = PIPE_SPEED * NEW_PIPE_EVERY;

    loop(1, () => {
        if(PIPE_OPEN >= 80) PIPE_OPEN--;
        PIPE_SPEED++;
        NEW_PIPE_EVERY = k / PIPE_SPEED;
    })

    loop(NEW_PIPE_EVERY, () => {

        const pipePos = rand(16, height() - PIPE_OPEN - 16);

        add([
            sprite("pipe"),
            origin("bot"),
            pos(width(), pipePos),
            "pipe",
        ]);

        add([
            sprite("pipe"),
            pos(width(), pipePos + PIPE_OPEN),
            scale(1, -1),
            origin("bot"),
            "pipe",
            { passed: false, },
        ]);

    });

    action("pipe", (pipe) => {

        pipe.move(-PIPE_SPEED, 0);

        if (pipe.pos.x + pipe.width <= birdy.pos.x && pipe.passed === false) {
            score.value++;
            score.text = score.value;
            pipe.passed = true;
        }

        if (pipe.pos.x + pipe.width < 0) {
            destroy(pipe);
        }

    });

    const score = add([
        pos(12, 12),
        text("0", 32),
        layer("ui"),
        {
            value: 0,
        },
    ]);

});

scene("gameover", (score) => {
    add([
        sprite("bg"),
        scale(width() / 240, height() / 240),
        origin("topleft"),
    ]);

    add([
        text(`score: ${score}`, 24),
        pos(width() / 2, height() / 2 - 16),
        origin("center"),
    ]);

    add([
        text('press space to continue...', 14),
        pos(width() / 2, height() / 2 + 16),
        origin("center"),
    ]);

    keyPress("space", () => {
        go("main");
    });

});

start("main");