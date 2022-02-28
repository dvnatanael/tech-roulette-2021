// https://kaboomjs.com/#kaboom

kaboom({
    global: true,
    fullscreen: true,
    // width: 1920, // 1920 pixels wide
    // height: 1080, // 1080 pixels tall
    // scale: 2, // Everything will be twice as large now!

    // debug: true

    // if "debug" is enabled, your game gets some special key bindings
    // - `: toggle debug.showLog
    // - f1: toggle debug.inspect
    // - f2: debug.clearLog()
    // - f8: toggle debug.paused
    // - f7: decrease debug.timeScale
    // - f9: increase debug.timeScale
    // - f10: debug.stepFrame()
    // see more at https://kaboomjs.com/#debug
})

loadRoot("/assets/")
loadSprite("grass", "grass.png")
loadSprite("doux", "dino/sheets/doux.png", {
    sliceX: 24, // Number of frames horizontally
    sliceY: 1, // Number of frames vertially
    anims: {
        main: {
            from: 0, // Range of frames for main animation
            to: 23,
        },
        running: {
            from: 24, // Range of frames for running animation
            to: 47,
        }
    }
})
loadSprite("mort", "dino/sheets/mort.png", {
    sliceX: 24, // Number of frames horizontally
    sliceY: 1, // Number of frames vertially
    anims: {
        main: {
            from: 0, // Range of frames for main animation
            to: 23,
        },
        running: {
            from: 24, // Range of frames for running animation
            to: 47,
        }
    }
})
loadSprite("tard", "dino/sheets/tard.png", {
    sliceX: 24, // Number of frames horizontally
    sliceY: 1, // Number of frames vertially
    anims: {
        main: {
            from: 0, // Range of frames for main animation
            to: 23,
        },
        running: {
            from: 24, // Range of frames for running animation
            to: 47,
        }
    }
})
loadSprite("vita", "dino/sheets/vita.png", {
    sliceX: 24, // Number of frames horizontally
    sliceY: 1, // Number of frames vertially
    anims: {
        main: {
            from: 0, // Range of frames for main animation
            to: 23,
        },
        running: {
            from: 24, // Range of frames for running animation
            to: 47,
        }
    }
})

scene("intro", () => {
    const doux = add([
        sprite("doux"),
        pos(0, 0),
        scale(4),
    ])
    const mort = add([
        sprite("mort"),
        pos(100, 0),
        scale(4),
    ])
    const tard = add([
        sprite("tard"),
        pos(200, 0),
        scale(4),
    ])
    const vita = add([
        sprite("vita"),
        pos(300, 0),
        scale(4),
    ])

    doux.play("main")
    mort.play("main")
    tard.play("main")
    vita.play("main")

    add([text("Hello World!", 32), pos(200, 115), origin("center")])

    add([rect(220, 30), color(255, 255, 255), origin("center"), pos(200, 160)])

    add([
        text("Here's some smaller text.", 8),
        pos(200, 160),
        color(0, 0, 0),
        origin("center"),
    ])
})

scene("main", () => {
    const SCALE = 4
    const JUMP_FORCE = 800
    const SPEED = 400

    // const platform = add([
    //     rect(width(), height() / 5),
    //     color(0, 0, 0),
    //     pos(0, height() * 4 / 5),
    //     solid(),
    // ])

    const map = addLevel([
        "                              ",
        "                              ",
        "                              ",
        "                              ",
        "                              ",
        "                              ",
        "                              ",
        "          X                   ",
        "         ======               ",
        "                              ",
        "                              ",
        "                   X          ",
        "               ======         ",
        "                              ",
        "                              ",
        "               X              ",
        "           ======              ",
        "                              ",
        "==============================",
    ], {
            width: 48,
            height: 48,
            pos: vec2(0, 0),
            "=": [
                sprite("grass"),
                scale(2),
                solid(),
            ],
            "X": [
                sprite("vita"),
                scale(SCALE),
                area(vec2(3, 4), vec2(21, 20)), // edit collision area
                body(),
                "enemy",
            ],
        })

    const player = add([
        sprite("doux"),
        pos(0, 0),
        scale(SCALE),
        area(vec2(3, 4), vec2(21, 20)), // edit collision area
        body(),
        "player",
    ])

    // const enemy = add([
    //     sprite("vita"),
    //     pos(400, 0),
    //     scale(-SCALE, SCALE),
    //     area(vec2(3, 4), vec2(21, 20)), // edit collision area
    //     body(),
    //     "enemy",
    // ])

    collides("player", "enemy", (p, e) => {
        go("gameover")
    })

    keyPress("space", () => {
        if (player.grounded())
            player.jump(JUMP_FORCE)
    })

    keyPress("up", () => {
        if (player.grounded())
            player.jump(JUMP_FORCE)
    })

    keyDown("left", () => {
        player.move(-SPEED, 0)
    })

    keyDown("right", () => {
        player.move(SPEED, 0)
    })
})

scene("gameover", () => {
    add([
        text("You died!", 32),
        pos(width() / 2, height() / 2 - 20),
        origin("center"),
    ])

    add([
        text("Press space to try again.", 16),
        pos(width() / 2, height() / 2 + 20),
        origin("center"),
    ])

    keyPress("space", () => {
        go("main")
    })
})

// start("intro")
start("main")
