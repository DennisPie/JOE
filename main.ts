input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        . # . . .
        . # # # .
        . # . . .
        . # # # .
        `)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        # . # . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . . .
        . . # # .
        `)
    basic.pause(100)
    basic.clearScreen()
})
basic.showLeds(`
    # # # # #
    . # # # .
    . # # # #
    . # # # .
    # # # # #
    `)
basic.clearScreen()
basic.showString("JOE")
basic.forever(function () {
	
})
