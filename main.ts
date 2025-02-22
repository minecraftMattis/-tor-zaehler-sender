input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (zeichen == "+") {
        zeichen = "-"
    } else if (zeichen == "-") {
        zeichen = "+"
    }
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(0)
    sendeZahl()
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    sendeZahl()
})
function sendeZahl () {
    if (zeichen == "+") {
        radio.sendNumber(1)
    } else if (zeichen == "-") {
        radio.sendNumber(-1)
    }
}
let zeichen = ""
zeichen = "+"
basic.forever(function () {
    basic.showString(zeichen)
})
