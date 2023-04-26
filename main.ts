function arm_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 20)
}
function forward2 () {
    wuKong.stopAllMotor()
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
function arm_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function Backward () {
    wuKong.setAllMotor(-20, -20)
}
joystickbit.initJoystickBit()
radio.setGroup(25)
basic.showLeds(`
    # . . # .
    # . # . .
    # # . . .
    # . # . .
    # . . # .
    `)
basic.forever(function () {
	
})
