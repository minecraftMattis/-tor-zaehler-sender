input.onButtonPressed(Button.A, function () {
    radio.setGroup(0)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(1)
    radio.sendNumber(-1)
})
basic.forever(function () {
	
})
