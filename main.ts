let x = randint(0, 4)
let y = 0
let p1x = x
let p1y = -1
let p2x = x
let p2y = -2
led.plotBrightness(x, y, 1000)
led.plotBrightness(p1x, p1y, 500)
led.plotBrightness(p2x, p2y, 250)
basic.forever(function () {
    while (true) {
        basic.pause(1000)
        led.unplot(x, y)
        led.unplot(p1x, p1y)
        led.unplot(p2x, p2y)
        y += 1
        p1y += 1
        p2y += 1
        led.plotBrightness(x, y, 255)
        led.plotBrightness(p1x, p1y, 127)
        led.plotBrightness(p2x, p2y, 63)
    }
})
