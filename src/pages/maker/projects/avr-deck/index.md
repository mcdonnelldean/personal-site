---
layout: draft.html
---

‣ [Maker][] ‣ [Projects][]
# AVR Deck
The beating heart of many Arduino style boards is the venerable ATMEGA32 and in some cases ATTINY85. Both of these microcontrollers are from the AVR family. What's cool about these little chips is that they come backed with a lot of functionality in the chip alone. While these chips are fun to work with, programming them is a chore. AVR Deck is my solution to this problem.

## Parts used

- 1 x Protoboard, 3cm x 7cm, Pitch 2.45mm, Diameter 1mm
- 2 x Tactile button 6x6x5mm 
- 1 x Length of 40 pin male header, Pitch 2.45mm
- 1 x DIP IC Socket, 8 pin
- 1 x DIP IC Socket, 28 pin
- Wire 22AWG, stranded, various colors

## Overview
AVR Deck provides a surface for mounting 8 pin (ATTINY85) and 28 pin (ATMEGA32) AVR chips. Each mount has connection to a 5 and 10 pin ISP header bank. These banks match up with the two most widely used programmer pinout configuration. 

For convienence each socket has a button wired to RESET since it's common to reset the chip many for programming.

### Chip size selector
Both ATTiny85 and ATMEGA32 (and possibly other AVR familiy chips) use a common 4 or 8 pin connection for programming. The one in use primarily depends on the physical programmer being used. Some programmers have 4 pin connectors, some have 8. 

To support both ISP header types a simple 3 pin jumper system is used.

### 4 pin connectors

## Software
The project itself has no intrinsic software as it is just a connection platform. However I would like to talk briefly about how I program chips and the software I use to do so.

### AVRGIRL / AVRDUDE
Talk about both here

### MAKE
Talk about make here



[maker]: /maker
[projects]: /maker/projects