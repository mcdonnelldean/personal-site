---
layout: draft.html
---

‣ [Maker][] ‣ [Projects][]
# Shed LEDs
A nice side effect of starting the [LED Wall][] project was my garden shed now had access to a 5v~9AH supply. It was duly pointed out to me that our shed lacked any sort of light and that anyone who could add lights to a wall could surely illuminate a shed. Luckily I over ordered some IP67 rated LED strips that would do nicely.

## Hardware used

- 01 x Pro Micro
- 01 x 8 LED Strip, WSWS281X, 10mm, IP67 covered
- 01 x Heatshrink tubing
- 01 x Micro usb cable

## Libs used

- WS2812FX
- Adafruit NeoPixel Lib (via WS2812FX)

## Build Notes
Overall this was a pretty simple build.

### Power considerations
The Pro Micro can output a max current of about 200mA on it's `VIN` pin and uses about 15mA itself. The LED strip is composed of 8 LED's which have a max output of 60mA each for a total of 480mA. To get under the requirements of the `VIN` pin, and to not blind anyone, the lights are ran at 35% brightness. Reducing the brightness brings the total consumption of the strip right down to 168mA.

The whole circut runs on 5V. Given the total draw hovers around 183mA power can be sourced directly from the micro usb connector on board the Pro Micro. The soure is a USB port on a solar controller that is cabable of 5v~2A.

- Voltage: 3.3~5V
- Draw max: 183mA
- Board usage: 15mA
- Board max draw: 200mA
- LED max draw: 60mA x 8 = 480mA
- LED 35% draw: 60mA x 8 = 480mA @ 35% = 168mA

## Software
The software for the LEDs is super simple, in fact this implementation is probably overkill, but hey, no point leaving all that free memory. The LEDS are simply set to 35% White. I've used WS2812FX which wraps Adafruits NeoPixel library and provides a bunch of really nice presets which can be changed via the `.mode()` method. 

```c
#include <WS2812FX.h>

#define LED_COUNT 8
#define LED_PIN 6

WS2812FX ws2812fx = WS2812FX(LED_COUNT, LED_PIN, NEO_RGB + NEO_KHZ800);

void setup() {
  ws2812fx.init();

   // Solid static, see WS2812FX.h for other modes
  ws2812fx.setMode(0);

   // 35% of 255
  ws2812fx.setBrightness(89);

   // White / FFFFFF
  ws2812fx.setColor(255, 255, 255);

  ws2812fx.start();
}

void loop() {
  ws2812fx.service();
}
```

## Gallery
... to follow.

[maker]: /maker
[projects]: /maker/projects