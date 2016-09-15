## Identification of Potential Problems
### Internal
#### Screen Burn-in/Image Persistence
Screen burn-in refers to visible damage on a screen that involves prevailing images failing to fade as the image changes, often retaining a watermark effect overlaid onto parts of the screen. It can be caused through prolonged viewing sessions, consistently watching in non-widescreen, or leaving the television on for more than 24 hours, and is often permanent. While it occurs less often on LCD screens, it still is a big threat to NewsTruck’s TV setups as a lot of live news content prominently features stationary logos or marquees which means the display should not be left on a news feeds for prolonged periods of time, and also that the layout of the screen cannot be too stationary, and needs to be designed to be dynamic enough so that the interface itself does not become burnt into the screen.

Image burn-in can also occur in smaller instances called image persistence, however this can be alleviated with the same solutions used to tackle burn-in.

These problems can be tackled through other methods that are often included with television sets, such as pixel-shifting displays - which move individual pixels to prevent burn-in without any visible changes to the display. While visually and audibly abrasive, leaving a television on static is the simplest way to prevent burn-in.

http://lifehacker.com/5982108/is-burn-in-still-an-issue-on-tvs-and-monitors 15 September 2015

### Power Insufficiency
Televisions can vary greatly in their required power consumption, and depending on the size and type of screen, can require vast amounts of power to maintain. On average, LCD televisions can require between 125 and 260 watts, while plasma screens ranging between 125 and 340 watts, and DLP larger screens requiring 170 watts. When we consider that the setup will also require a set of speakers, an audio and input mixer, and potentially even power inverters to facilitate solar panels planted on the roof of the vehicle, we start to require up to 500 watts or more for the whole setup. This setup also assumes that only one TV is use, and when designing the interface, we need to consider whether it is more advantageous to use multiple smaller screens or just one large one. This decision will be returned to numerous times in discussion, but in terms of power supply, it seems more advantageous to use one larger screen as the wattage does not scale enough for multiple monitors/screens to be just as efficient in energy consumption as one larger screen would be. 

In terms of the power supply, there are multiple options, but none of them are extremely cheap or viable. A residential circuit’s conductor on average can withstand up to 15 to 20 amps worth of electrons, while a wall socket provides 120 volts, meaning that we can calculate the maximum amount of watts before the circuit breaker is destroyed:
Total Watts = Total Amps*Total Volts
                   = 15A*120V
                   = 1800 watts

Consequently in a house setting, NewsTruck could have a setup of 1 large LCDTV, 2 speakers, and an audio mixer, and barely emit a third of the total wattage capacity. This does not represent the environment in which NewsTruck would manage its electricity, but it demonstrates that a basic setup is viable in a stationary area. On the side of a road or in a public area, power sockets and circuits may not be available, and if they are, may not be usable as the owner would need to pay for the energy consumed by NewsTruck on their grid. Solar panels are a viable alternative to this, and could be set up on the roof of the truck and utilized with power inverters and a basic circuit.    Solar panels are not cheap, however many are designed with RV vehicles in mind and a quick look online shows that panels that generate 200W can be bought at an upwards of $200. Installation, protection and maintenance are important to consider and every added component drives up the need for better circuits, more protective components and a longer setup time.

http://michaelbluejay.com/electricity/maxload.html 15 September 2016
https://www.nde-ed.org/EducationResources/HighSchool/Electricity/amperage.htm 15 September 2016

### Internal Temperature of Screen Display
All TVs are designed to work within a certain internal temperature range, which becomes harder to maintain when exposed to outdoor environments. Operating televisions in general best operate between 1.7C and 32.2C, and can be safely stored at temperatures between -20C and 45C, meaning that they can withstand hefty conditions provided that no residue liquid comes into contact with the internal components. The LCD screen itself does not generate heat - the backlight is source of all heat and the one component that needs to be considered when setting or using a TV. In a broader scope, LCTVs are considered to have a half life of 50,000 hours or 5.7 years of continual operation before they decline in quality. This lifespan can be shortened considerably through being set to higher brightness or contrast settings, as these drive the backlight to output more light, increasing their operating temperature, which lessens their lifetime. Consequently, this makes managing the backlight temperature critical. Operating on its own, the backlight generates heat which is exhausted out the back side of the TV, meaning that it should never set up against a wall, as this limits the avenues in which heat can escape. Using a wall-mount for NewsTruck’s TV screen should help provide sufficient airflow. Additionally, 

While there are televisions specifically designed to work outdoors, they have a shorter lifespan which is necessitated by the need to be viewable through sun glare. The screen needs to be brighter and have a higher contrast, which means operating at a higher temperature, requiring more airflow management. 

## External
### Sunlight
Sunlight exacerbates other issues that arise from internal and external heating, while also presenting many unique threats. Exposure to sunlight can cause the plastic TV panels heat up and melt, as well as raising the screen’s temperature, which can build over time and heat up the backlight, resulting in permanent damage. Moreover, the UV rays emitted from sunlight can damage the LCD panel by causing the liquid to crystallize and permanently form black pixels on the screen. An LCD screen that is exposed to sunlight will degrade so quickly that LED displays are preferred, as they do not suffer the same effects from UV rays, are easy to maintain (as they are an array of bulbs instead of a single large TV), and are considered easier to read from a distance. LED screens would almost be the preferred option for a screen display if they could be viewed up close and far away, but as LED screens are designed to be seen on the sides of buildings, or on billboards, they cannot be viewed at the proximity we intend them to be. 



Figure 1 & 2: Two examples of LED displays outside, which are becoming increasingly prominent due to falling maintenance costs.

http://getemsignsandmarketing.com.au/led-signage/fixed-oudoor-led-displays/ 15 September 2016
 http://static.wixstatic.com/media/f4981a_6c845934590e4deba7cf75ccaf37660e.jpg/v1/fill/w_784,h_441,al_c,q_90,usm_0.66_1.00_0.01/f4981a_6c845934590e4deba7cf75ccaf37660e.jpg 15 September 2016 

UV damage is even more of a problem in Australia since we have very high UV ray exposure compared to the rest of the world, as seen in the graph below. This indicates that the effects of UV damage will be accelerated, making it an even larger problem.


Figure 3: A map of the global UV Index, generated in 2003.
http://www.livescience.com/46701-andes-highest-uv-index-measured.html 15 September 2016

Luckily there are ways we can minimize the effects of UV and sun damage, such as providing a canvas above the tv for shade, upgrading to a pivoting wall mount (an example seen below) to hold the tv so that it can be angled to receive less sunlight, angling the truck when parking such that the tv has its back to the sunlight, or parking in the shade of a larger building -particularly in areas with high-rise buildings. Another preventative measure that’s often taken in electronics stores is to put the TV behind a pane of glass, which neutralises some of the UV rays from getting through to the tv.


Figure 4: A sketch of a pivoting wall-mount for an LCD screen, providing the user with even more degrees of rotation.
http://sealtv.com.au/top-10-tips-for-installing-a-tv-outside/ 15 September 2016

### Heat and Cold
As previously mentioned, internal heating is a crucial factor of an operating LCD television, and the external temperature outside will have a huge impact on managing this, especially since the brightness of an LCD screen can drop at cold enough temperatures. The Australian temperature climate can have a great deal of variance, and while it leans towards extremely hot temperatures, many southern parts of Australia can remain consistently close to the freezing point. Keeping the screen at room temperature (23C degrees celcius) also requires ensuring the TV’s temperature does not get too low, which is important as colder LCD screens can take longer to start up and will be dimmer until heated up. Furthermore, with the changing seasons, Brisbane’s climate alone changes considerably, reaching temperatures as low as 14 degrees during Winter and 42 degrees in the summer, meaning that NewsTruck will need to be outfitted for wide temperature variances from the start. The setup for NewsTruck will need to be able to withstand extreme heat and subzero temperatures. 

While many of the preventative measures for combatting heat have already been addressed above, in extreme heat there are other approaches to keeping the operating temperature consistent, despite being more expensive. Firstly, air-conditioning can be used in an enclosed space close to the television to keep its components cold, however it does require that the TV be contained within an enclosed space, which can be difficult to contain on a moving truck. Another solution is to use an enclosed case (as seen below) which provides a screen as well as a back-panel that can connect to an air-conditioner, however this is at the cost of a pivoting wall-mount, as the case would need to sit flat on a connecting wall to the inside of the truck. Finally, windshields can also be installed inside the cover of an LCD screen behind the backlight, to prevent wind chill from cooling down the components.


Figure 5 & 6: Two example sketches of a TV enclosure mounted to a wall, with connections to an AC system and a protective screen for the TV.

### Moisture
Newstruck’s setup will not only face environments with temperatures that televisions are not intended to operate within, but also wildly changing temperatures, posing the risk of consation and water entering the system. If turned off, liquid entering the electronics of the TV set poses no danger provided that the water is removed and the components are given time to dry first. As the display is being designed for scenarios where temperature needs to be a considered factor, there are a lot of possible situations where cold components or the environment may suddenly rise or fall in temperature. Early morning commuters are being targeted as some of the main customers, as many walk at certain points to get to work (with 377, 043 Australians recorded walking to get to work in 2014). This requires NewsTruck to be set up early in the morning, which have been recorded to have hit record low temperatures last winter, some towns such as Ipswich recording reaching 0C degrees at 5am in the morning. Between sunrise and 10pm is when the temperature is most likely to rapidly rise, resulting in considerable condensation. This problem can be avoided provided that the TV is both within a protective case, but is also given enough space for heat to leave the unit.

### Dust/Snow/Mud
While dust, snow, mud, rain and other elements can be kept away from the screen by using the preventative measures used to combat the other external threats, they still need to be considered as unique threats. Rain is the most likely threat, and while a shade canvas and a protective cases will both reduce the likelihood of water entering the unit, excessive exposure poses a strong threat, and may require the truck to pack up.
