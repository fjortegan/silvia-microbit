let ALETORIO = 0
input.onButtonPressed(Button.B, function () {
    basic.showString("Sigue las señales")
    basic.showString("SON ESTAS")
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showString("    Agita")
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showString("    Dale la vuelta")
    basic.showLeds(`
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        `)
    basic.showString("   Inclina a la derecha")
    basic.showString("A JUGAR!!!")
    for (let index = 0; index < 5; index++) {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        ALETORIO = randint(1, 3)
        if (ALETORIO == 1) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
                `)
            while (!(input.isGesture(Gesture.Shake))) {
                basic.pause(100)
            }
            basic.showIcon(IconNames.Happy)
            music.playMelody("C E A D F G E C5 ", 120)
        }
        if (ALETORIO == 2) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
            while (!(input.isGesture(Gesture.LogoDown))) {
                basic.pause(100)
            }
            basic.showIcon(IconNames.Happy)
            music.playMelody("C E A D F G E C5 ", 120)
        }
        if (ALETORIO == 3) {
            basic.showLeds(`
                # # # # #
                . . . . .
                # # # # #
                . . . . .
                # # # # #
                `)
            while (!(input.isGesture(Gesture.TiltRight))) {
                basic.pause(100)
            }
            basic.showIcon(IconNames.Happy)
            music.playMelody("C E A D F G E C5 ", 120)
        }
    }
    basic.showString("    Se ha acabado")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
basic.forever(function () {
	
})
