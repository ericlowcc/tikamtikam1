input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    LuckyNum = randint(1, 5)
    radio.sendNumber(LuckyNum)
    basic.showNumber(LuckyNum)
})
let LuckyNum = 0
radio.setGroup(8)
basic.showString("SHAKE ME!")
basic.showIcon(IconNames.Heart)
