---
layout: content.html
---

‣ [Maker][] ‣ [Projects][]
# Colour Wall
This was, at the time, the biggest project I had taken on; to light up the retaining walls in our garden. What made this project a biggie was the total count of LED's, about 250 over 10 feet, and the power requirements that came with them. I settled on solar power pretty early, it was the only realistic option given the outdoor-ness of the project and the fact that our AC is 230v; not something I wanted to play around with.

## Hardware used
- 4 Solar Panels
- 4 Shcottky Diodes
- 5 Female DC adaptors
- 5 Male DC adaptors

### Solar panels
Power is provided by 4 solar panels combined into sets of two.

- 200mm high x 130mm wide
- 18v ~ 230mA (4.2W)

### Panel merge circut
Some notes about the merge circut

- An x by y protoboard
- 4 x Shcottky Diodes
- 5 x Female DC terminals (4 out ~ 1 in)

The point behind this circut is to allow replacements.

### Solar Controller
Solar controllers are available on Ebay and AliExpress for prices of around €8 to €15. The controller used is chock full of features but the most pertinent for the project are,

- 18v ~ 20A in (charge) 
- 12v ~ 10A out (discharge)
- Solar in, Battery in, LED out, via screw terminals
- Overcharge protection for the connected battery
- Overdischarge protection for the connected battery and LEDS
- Timer functionality for LEDs


### SBEC Regulator
Talk about the SBEC here.

- 20A Max
- 7v to 50v in ()
- Selectable voltage out (5V is what we care about)

## Design considerations


## Distance of solar controller from LED controller
The retaining wall the LED strips and controller are mountend on are roughly 10m away from the solar controller. Pushing 5V over that distance would have caused an unacceptable drop of +/- 2.5v. To alieviate this we run 12v from the solar controller to an SBEC located beside the led controller. The SBEC can pull 5v from 7v or more and is rated for 10A; well within our required params of 5v ~ 2A.  


## Size of legs on Schottky Diodes
Yeah they are way too big

## Waterproofing LED's
Talk about water proofing leds



[maker]: /maker
[projects]: /maker/projects

