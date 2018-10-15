/* Star Wars!
- Start with empty battlefield. Once char is selected they will populate playing area 
- Will need random number generator for attack power
- Variables for HP that will subtract value of attack power and display current value
- When attack power is generated, subtract number from HP
- List characters facing one direction as player character and list characters
facing other direction as second list. May be able to add code that, depending
on who player picks, will make second char face other direction.
- Spritely seems pretty straightforward - research how to make sprite move slightly 
forward when they attack. Right now, moving background seems doable
- Possibly have random background with same movement effects! Space, Tattooine, Death Star
- May need to look into delay between pressing attack and charcter movement
- Will also need to look into transparency and z index for playing field. Will possibly need
high z index for player char. 
- Possibly look into transitions for players entering battlefield
- For Bootstrap, will likely need row/div with background, probably half page. As well as div
with title of game, followed by row with 2 columns with char Name and HP and player models, then row with remaining, not-chosen char, 
last row with two columns with attack buttons.


Functions:

Start Game - sets up field of play, displays characters, their HP and a background
Play Game - Lets player choose character and ememy
Fight Game - Attack button functionality, movement of characters in response to attack button 
or random selection of attack power. 