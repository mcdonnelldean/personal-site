---
layout: draft.html
---

‣ [Maker][] ‣ [Projects][]
# Kallax Mood Lighting (Ikea style box shelving)
We have a Kallax unit at home that was looking a bit dull. Mood lighting seemed to be a neat way to spice it up a little. The plan was three fold,

1. Add some nice mood lighting to the unit
2. Use up the [Analogue LED][] strip I have laying around
3. Make it usable via a mobile interface to keep it realistically usable

It turns out point number two would make this project a whole lot harder than it needed to be in terms of part list and software requirements. But more on that later.

## Hardware
Hardware selection on this project focused on what I could use from of my existing kit. If you are looking to attempt a similar project take look at my [Party Box][] project, which uses digital
strips for more functionality and less parts.

### 12v RGB LED Analogue strip (300m)
It would have been easier to go with a bunch a digital strip which have chips like the `WS21xx` built in but I had a full strip of Analogue lights lying around. These sort of strips usually come in .5, 1, and 5 meter reels.

### Mini D1 or similar ESP8266 style board
The interface for this project uses [Blynk][] which dicates some form of connection to the internet. Mini D1's are fabulous `ESP8266` based boards with WiFi built in. They have an odd pin out format and take a bit of fettling to get working as an _arduino alike_ but other than that they are pretty reliable.

### 12v~1A DC wall wart
The max current draw for this project is about 800~1000mA give or take a couple of milliamps. With that in mind the project is not battery friendly; power must be sourced from a socket. This is partly to do with the physical nature of the led strips and also because full bright white is a valid use case. In the power requirements section I talk more about how you could shave off enough draw to go mobile.

## Software


## Build

## Power requirements
First up the LEDS, we are using two strips. Each strip is 140cm / 1.4 meters long. In this strip there are 14 _sections_ of LEDS. Each section consists of 9 LEDS with a max draw of 20mA each. The leds are packaged into RGB meaning each section has 3 12v~60mA 5050 style RGB led per section.

- 14 sections x 60mA each = 840mA
- 2 strips x 840mA = 1.68A
- 1.7A Maximum draw

Next up is the Mini D1. When working with such a small board it can be easy to figure in about 200mA as a solid guideline. However the D1 has WiFi on board which can be a large current sucker. With that in mind we should allow a total of 500mA for the board.

- 1.7A LED strips
- 0.5A D1 mini
- 2.2A Max draw

That's a lot of current right! Thankfully it was possible trim off some of the draw with various changes, restrictions and optimisations later. The final max draw figures where

- Voltage Range: 9V ~ 12V
- Current Draw: 400mA ~ 800mA

### Power saving actions
I've put these hear for easier comprehension

#### Reducing max brightness
First up, reducing max brightness reduced by 50% using the following calculation,

`(COLOR x DESIRDED BRIGHTNESS) / MAX BRIGHTNESS`

This will bring our max draw for LEDs to 840mA total or a neath 1A for the whole circut with plenty of headroom.

#### Reducing the available color selection
Before I talk about this I want to state that I didn't add this restriction to this project because it's primary purpose was to be a full spectrum mood strip. With that out of the way, restricting colors can vastly improve power. Lets see how.

...

## Power supply
Our final draw is close enough to 1A that po


[maker]: /maker
[projects]: /maker/projects
[blynk]: http://blynk.io
[party box]: /maker/projects/party-box
[analogue led]: /maker/guides/analogue-leds