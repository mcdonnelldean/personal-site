---
layout: draft.html
---

‣ [Maker][] ‣ [Projects][]
# NeoIR
You would be forgiven for thinking that wiring together a WS281X LED strip and an IR reciever would be a piece of cake using an Arduino or other AVR style Microcontroller. It turns out however this is not the case. 

## The assembled circut

## Parts used

- 1 x Pro Micro
- 1 x ATTiny85
- 1 x IR Receiver TSOP38238
- 3 x Tactile button 6x6x5mm 
- 1 x Protoboard 3cm x 7cm (Pitch 2.45mm / Diameter 1mm)
- 1 x Length of 40 Pin female header (Pitch 2.45mm)
- 1 x DIP IC Socket 8 Pin
- ~ x Wire 22AWG Stranded, various colors

## Overview
The NeoIR circut is designed to make it easy to power and control, via IR, a strip of WS291X or similar LEDs. The LED's are controlled via the on board Pro Micro. The ATTiny85 is connected as worker via I2C to the Pro Micro. IR and parsing to a usable color are delegated to the ATTiny85.


### LED IC

### IR IC

### Config Panel

### Ports


[maker]: /maker
[projects]: /maker/projects