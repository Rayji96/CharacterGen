const alignmentList = [
	'', '', 'Chaotic ', 'Lawful Evil', 'Lawful Evil', 'Neutral Evil', 'Neutral Evil', 'Neutral Evil', 'Pure Neutral', 'Pure Neutral', 
	'Pure Neutral', 'Pure Neutral', 'Neutral Good', 'Neutral Good', 'Neutral Good', 'Lawful ', 'Lawful ', 'Chaotic '
];
const alignmentChoice = [
	'Evil', 'Neutral', 'Good'
];

const combatClass = [
	'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'
];

const race = [
	'Human', 'Human', 'Human', 'Human', 'Human', 'Human', 'Human', 'Human', 'Dwarf', 'Dwarf', 
	'Elf', 'Elf', 'Halfling', 'Halfling', 'Dragonborn', 'Gnome', 'Half-Elf', 'Half-Orc', 'Tieflng'
];

const backgrounds = [
	'an Acolyte', 'a Charlatan', 'a Criminal', 'an Entertainer', 'a Folk Hero', 'a Guild Artisan',
	'a Hermit', 'a Noble', 'an Outlander', 'a Sage', 'a Sailor', 'a Soldier', 'an Urchin'
]

const parents = [
	'You know who your parents are or were. ', 'You do not know who your parents were. '
];

const heParents = [
	'One parent was an elf and the other was a human. ', 'One parent was an elf and the other was a human. ', 'One parent was an elf and the other was a human. ', 'One parent was an elf and the other was a human. ', 
	'One parent was an elf and the other was a human. ', 'One parent was an elf and the other was a half-elf. ', 'One parent was a human and the other was a half-elf. ', 'Both parents were half-elves. '
];

const hoParents = [
	'One parent was an orc and the other was a human. ', 'One parent was an orc and the other was a human. ', 'One parent was an orc and the other was a human. ', 'One parent was an orc and the other was a half-orc. ', 
	'One parent was an orc and the other was a half-orc. ', 'One parent was a human and the other was a half-orc. ', 'One parent was a human and the other was a half-orc. ', 'Both parents were half-orc. '
];

const birthplaces = [
	'at home', 'at the home of a family friend', 'at the home of a healer or midwife', 'in a carriage, cart, or wagon', 'in a barn, shed, or other outbuilding', 'in a cave', 'in a field', 'in a forest', 
	'in a temple', 'on the battlefield', 'in an alleyway or street', 'in a brothel, tavern, or inn', 'in a castle, keep, tower, or palace', 'in a sewer or rubbish heap', 'among people of a different race', 
	'on board a boat or a ship', 'in a prison or in the headquarters of a secret organization', 'in a sage\'s laboratory', 'in the Feywild', 'in the Shadowfell', 'on the Astral Plane or the Ethereal Plane', 
	'on an Inner Plane of your choice', 'on an Outer Plane of your choice'
];

const familyList = [
	'by noone. ', 'in an institution, such as an asylum. ', 'in a temple. ', 'in an orphanage. ', 'by a guardian. ', 'by a paternal or maternal aunt, uncle, or both; or extended family such as a tribe or clan. ', 
	'by paternal or maternal grandparent(s). ', 'by an adoptive family (same or different race). ', 'by a single father or stepfather. ', 'by a single mother or stepmother. ', 'by both your parents. '
]

const parentFate = [
	'was imprisoned, enslaved, or otherwise taken away. ', 'abandonded you. ', 'disappeared to an unknown fate. '
]

const deathFate = [
	'died to unknown circumstance. ', 'was murdered. ', 'was killed in battle. ', 'died in an accident related to class or occupation. ', 'died in an accident unrelated to class or occupation. ', 
	'died due to natural causes, such as disease or old age. ', 'commited suicide. ', 'was torn apart by an animal or a natural disaster. ', 'was consumed by a monster. ', 'was executed for a crime or tortured to death. ',
	'died due to a bizarre event, such as being hit by a meteorite, struck down by an angry god, or killed by a hatching slaad egg. '
]

const lifestyleList = [
	'a wretched lifestyle ', 'a squalid lifestyle ', 'a poor lifestyle ', 'a modest lifestyle ', 'a comfortable lifestyle ', 'a wealthy lifestyle ', 'an aristocratic lifestyle '
]

const homeList = [
	'on the streets. ', 'in a rundown shack. ', 'without a permanent residence; you moved around a lot. ', 'in an encampment or village in the wilderness. ', 'in an apartment in a rundwon neighborhood. ',
	'in a small house. ', 'in a large house. ', 'in a mansion. ', 'in a palace or castle. '
]

const chMemoriesList = [
	'You are still haunted by your childhood, when you were treated badly by your peers.', 'You spend most of your childhood alone, with no close friends.', 'Others saw you as being different or strange, and so you had few companions',
	'You had a few close friends and lived an ordinary childhood.', 'You had several friends, and your childhood was generally a happy one.', 'You always found it easy to make friends, and you loved being around people.',
	'Everyone knew who you were, and you had friends everywhere you went.'
]

const bgList = [
	['you ran away from home at an early age and found refuge in a temple. ', 'your family gave you to a temple, since they were unable or unwilling to care for you. ', 
	'you grew up in a household with strong religious convictions. Entering the service of one or more gods seemed natural.', 'an impassioned sermon struck a chord deep in your soul and moved you to serve the faith. ', 
	'you followed a childhood friend, a repected acquaintance, or someone you loved into religious service. ', 'you encountered a true servant of the gods. You were so insired that you immediately entered the service of a religious group. '],
	['you were left to your own devices, and your knack for manipulating others helped you survive. ', 'you learned early on that people are gullible and easy to exploit. ',
	'you often geot in trouble, but you managed to talk your way out of it every time. ', 'you took up with a con artist, from whom you learned your craft. ',
	'after a charlatan fleeced your family, you decided to learn the trade so you would never be fooled by such deception again. ', 'you were poor or feared becoming poor, so you learned the tricks needed to keep yourself out of poverty. '],
	['you resented authority in your younger days and saw a life of crime as the best way to fight against tyranny and oppression. ', 'necessity forced you to take up the life, since it was the only way you could survive. ',
	'you fell in with a gang of reprobatse and ne\'er-do-wells, and you learned your specialty from them. ', 'a parent or relative taught you your criminal specialty to prepare you for the family business',
	'you left home and found a place in a theives\' guild or some other criminal organization. ', 'you were always bored, so you turned to crime to pass the time and discovered you were quite good at it.'],
	['members of your family made ends meet by performing, so it was fitting for you to follow their example. ', 'you always had a keen insight into other people, enough so that you could make them laugh or cry with your stories or songs. ',
	'you ran away from home to follow a minstrel troupe. ', 'you saw a bard perform once, and you knew from that moment on what you were born to do. ',
	'you earned coin by performing on street corners and eventually made a name for yourself. ', 'a traveling entertainer took you in and taught you the trade'],
	['you learned what was right and wrong from your family. ', 'you were always enamored by tales of heroes and wished you could be something more than ordinary. ',
	'you hated your mundane life, so when it was time for someone to step up and do the right thing, you took your chance. ', 'a parent or one of your relatives was an adventurer, and you were inspired by that person\'s courage. ',
	'a mad old hermit spoke a prophecy when you were born, saying that you would accomplish great things. ', 'you have always stood up for those who are weaker than you are. '],
	['you were apprenticed to a master who taught you the guild\'s business. ', 'you helped a guild artisan keep a secret or complete a task, and in return you were taken on as an apprentice. ',
	'one of yout family members who belonged to the guild made a place for you. ', 'you were always good with your hands, so you took the opportunity to learn a trade. ',
	'you wanted to get away from your home situation and start a new life. ', 'you learned the essentials of your craft from a mentor but had to join the guild to finish your training. '],
	['your enemies ruined your reputation, and you fled to the wilds to avoid further disparagement. ', 'you are comfortable with being isolated, as you seek inner peace. ',
	'you never liked the people you called your friends, so it was easy for you to strike out on your own.', 'you felt compelled to forsake your past, but did so with great reluctance, and sometimes you regret making that decision. ',
	'you lost everying-your home, your family, your friends. Going it alone was all you could do. ', 'society\'s decadence disgusted you, so you decided to leave it behind. '],
	['you come from an old and storied family, and it fell to you to preserve the family name. ', 'your family has been disgraced, and you inteded to clear your family\'s name.',
	'your family recently came by its title, and that elevation thrust you into a new and strange world. ', 'your family has a title, but none of your ancestors have distinguished themselves since you gained it.', 
	'your family is filled with remarkable people. You hope to live up to their example. ', 'you hope to increase your family\'s power and influence. '],
	['you spent a lot of time in the wilderness as a youngster, and you came to love that way of life. ', 'from a young age, you couldn\'t abide the stink of the cities and preferred to spend your time in nature. ',
	'you came to understand the darkness that lurks in the wilds, and you vowed to combat it. ', 'your people lived on the edges of civilization, and you learned the methods of survival from your family. ',
	'after a tragedy you retreated to the wilderness, leaving your old life behind. ', 'your family moved away from civilization, and you learned to adapt to your new environment. '],
	['you were naturally curious, so you packed up and went to a university to learn more about the world. ', 'your mentor\'s teachings opened your mind to new possibilities in that field of study. ',
	'you were always an avid reader, and you learned much about your favorite topics on your own. ', 'you discovered an old library and pored over the texts you found there. That experience awakened a hunger for more knowledge. ',
	'you impressed a wizard who told you that you were squandering your talents and should seek out an education to take advantage of your gifts. ', 'one fo your parents or a relative gave you a basic education that whetted your appetite, and you left home to build on what you had learned. '],
	['you were press-ganged by pirates and forced to serve on their ship until you finally escaped. ', 'you wanted to see the world, so you signed on as a deck-hand for a merchant ship.',
	'one of your relatives was a sailor who took you to sea. ', 'you needed to escape your community quickly, so you stowed away on a ship. When the crew found you, you were forced to work for your passage. ',
	'reavers attacked you community, so you found refuge on a ship until you could seek vengeance. ', 'you had few prospects where you were living, so you left to find your fortune elsewhere.'],
	['you joined the militia to help protect your community from monsters.', 'a relative of yours was a soldier, and you wanted to carry on the family tradition. ',
	'the local lord forced you to enlist in the army. ', 'war ravaged your homeland while you were growing up. Fighting was the only life you ever knew.',
	'you wanted fame and fortune, so you joined a mercenary company, selling your sword to the highest bidder. ', 'invaders attacked your homeland. It was your duty to take up arms in defense of your people.'],
	['wanderlust caused you to leave your family to see the world. You look after yourself.', 'you ran away from a bad situation at home and made your own way in the world.',
	'monsters wiped out your village, and you were the sole survivor. You had to find a way to survive.', 'a notorious thief looked after you and other orphans, and you spied and stole to earn your keep.',
	'one day you woke up on the streets, alone and hungry, with no memory of your early childhood.', 'your parents died, leaving no one to look after you. You raised yourself.']
]

const classList = [
	['your devotion to your people lifted you in battle, making you powerful and dangerous.', 'the spirits of your ancestors called on you to carry out a great task.', 
	'you lost control in battle one day, and it was as if something else was manipulating your body, forcing it to kill every foe you could reach. ', 'you went on a spiritual journey to find yourself and instead found a spirit animal to guide, protect, and inspire you. ',
	'you were struck by lightning and lived. Afterward, you found a new strength within you that let you push beyond your limitations. ', 'your anger needed to be channeled into battle, or you risked becoming an indiscriminate killer. '],
	['you awakened your latent bardic abilities through trial and error. ', 'you were a gifted performer and attracted the attention of a master bard who schooled you in the old techniques.',
	'you joined a loose society of scholars and orators to learn new techniques of performance and magic. ', 'you felt a calling to recount the deeds of champions and heroes, to bring them alive in song and story. ',
	'you joined one of the great colleges to learn old lore, the secrets of magic, and the art of performance. ', 'you picked up a musical instrument one day and instantly discovered that you could play it. '],
	['a supernatural being in service to the gods called you to become a divine agent in the world. ', 'you saw the injustice and horror in the world and felt moved to take a stand against them. ',
	'your god gave you an unmistakable sign. You dropped everything to serve the divine. ', 'although you were always devout, it wasn\'t until you completed a pilgrimage that you knew your true calling. ',
	'you used to serve in your religion\'s bureaucracy but found you needed to work in the world, to bring the message of your faith to the darkest corners of the land. ',  'you realized that your god works through you, and you do as commanded, even though you don’t know why you were chosen to serve. '],
	['you saw too much devastation in the wild places, too much of nature’s splendor ruined by the despoilers. You joined a circle of druids to fight back against the enemies of nature.', 'you found a place among a group of druids after you fled a catastrophe.',
	'you have always had an affinity for animals, so you explored your talent to see how you could best use it.', 'you befriended a druid and was moved by druidic teachings. You decided to follow your friend’s guidance and give something back to the world.',
	'while you were growing up, you saw spirits all around you — entities no one else could perceive. You sought out the druids to help you understand the visions and communicate with these beings.', 'you have always felt disgust for creatures of unnatural origin. For this reason, you immersed myself in the study of the druidic mysteries and became a champion of the natural order.' ],
	['you wanted to hone your combat skills, and so you joined a war college.',
	'you squired for a knight who taught you how to fight, care for a steed, and conduct yourself with honor. You decided to take up that path for yourself.',
	'horrible monsters descended on your community, killing someone you loved. You took up arms to destroy those creatures and others of a similar nature.',
	'you joined the army and learned how to fight as part of a group.',
	'you grew up fighting, and you refined your talents by defending yourself against people who crossed you.',
	'you could always pick up just about any weapon and know how to use it effectively.'
	],
	['you were chosen to study at a secluded monastery. There, you were taught the fundamental techniques required to eventually master a tradition.',
	'you sought instruction to gain a deeper understanding of existence and your place in the world.',
	'you stumbled into a portal to the Shadowfell and took refuge in a strange monastery, where you learned how to defend yourself against the forces of darkness.',
	'you were overwhelmed with grief after losing someone close to you, and you sought the advice of philosophers to help you cope with your loss.',
	'you could feel that a special sort of power lay within you, so you sought out those who could help you call it forth and master it.',
	'you were wild and undisciplined as a youngster, but then you realized the error of your ways. You applied to a monastery and became a monk as a way to live a life of discipline. '
	],
	['a fantastical being appeared before you and called on you to undertake a holy quest.',
	'one of your ancestors left a holy quest unfulfilled, so you intend to finish that work.',
	'the world is a dark and terrible place. You decided to serve as a beacon of light shining out against the gathering shadows.',
	'you served as a paladin’s squire, learning all you needed to swear your own sacred oath.',
	'evil must be opposed on all fronts. You feel compelled to seek out wickedness and purge it from the world.',
	'becoming a paladin was a natural consequence of your unwavering faith. In taking your vows, you became the holy sword of your religion. '
	],
	[ 'you found purpose while you honed your hunting skills by bringing down dangerous animals at the edge of civilization.',
	'you always had a way with animals, able to calm them with a soothing word and a touch.',
	'you suffer from terrible wanderlust, so being a ranger gave you a reason not to remain in one place for too long.',
	'you have seen what happens when the monsters come out from the dark. You took it upon yourself to become the first line of defense against the evils that lie beyond civilization’s borders.',
	'you met a grizzled ranger who taught you woodcraft and the secrets of the wild lands.',
	'you served in an army, learning the precepts of your profession while blazing trails and scouting enemy encampments. '
	],
	['you’ve always been nimble and quick of wit, so you decided to use those talents to help you make your way in the world.',
	'an assassin or a thief wronged you, so you focused your training on mastering the skills of your enemy to better combat foes of that sort.',
	'an experienced rogue saw something in you and taught you several useful tricks.',
	'you decided to turn your natural lucky streak into the basis of a career, though you still realize that improving your skills is essential.',
	'you took up with a group of ruffians who showed you how to get what you want through sneakiness rather than direct confrontation.',
	'you\'re a sucker for a shiny bauble or a sack of coins, as long as you can get your hands on it without risking life and limb. '
	],
	['when you were born, all the water in the house froze solid, the milk spoiled, or all the iron turned to copper. Your family is convinced that this event was a harbinger of stranger things to come for you.',
	'you suffered a terrible emotional or physical strain, which brought forth your latent magical power. You have fought to control it ever since.',
	'your immediate family never spoke of my ancestors, and when you asked, they would change the subject. It wasn’t until you started displaying strange talents that the full truth of your heritage came out.',
	'when a monster threatened one of your friends, you became filled with anxiety. You lashed out instinctively and blasted the wretched thing with a force that came from within you.',
	'sensing something special in you, a stranger taught you how to control your gift.',
	'after you escaped from a magical conflagration, you realized that though you were unharmed, you were not unchanged. You began to exhibit unusual abilities that you are just beginning to understand. '
	],
	['while wandering around in a forbidden place, you encountered an otherworldly being that offered to enter into a pact with you.',
	'you were examining a strange tome you found in an abandoned library when the entity that would become your patron suddenly appeared before you.',
	'you stumbled into the clutches of your patron after you accidentally stepped through a magical doorway.',
	'when you were faced with a terrible crisis, you prayed to any being who would listen, and the creature that answered became your patron.',
	'your future patron visited you in your dreams and offered great power in exchange for your service.',
	'one of your ancestors had a pact with your patron, so that entity was determined to bind you to the same agreement. '
	],
	['an old wizard chose you from among several candidates to serve an apprenticeship. ',
	'when you became lost in a forest, a hedge wizard found you, took you in, and taught you the rudiments of magic.',
	'you grew up listening to tales of great wizards and knew you wanted to follow their path. You strove to be accepted at an academy of magic and succeeded.',
	'one of your relatives was an accomplished wizard who decided you were smart enough to learn the craft.',
	'while exploring an old tomb, library, or temple, you found a spellbook. You were immediately driven to learn all you could about becoming a wizard.',
	'you were a prodigy who demonstrated mastery of the arcane arts at an early age. When you became old enough to set out on your own, you did so to learn more magic and expand your power. '
	]
]

function randomDeath () {
	let r = Math.floor(Math.random() * 12 + 1);
	if (r < 2){
		return deathFate[0];
	}else if(r < 3){
		return deathFate[1];
	}else if(r < 4){
		return deathFate[2];
	}else if(r < 5){
		return deathFate[3];
	}else if(r < 6){
		return deathFate[4];
	}else if(r < 8){
		return deathFate[5];
	}else if(r < 9){
		return deathFate[6];
	}else if(r < 10){
		return deathFate[7];
	}else if(r < 11){
		return deathFate[8];
	}else if(r < 12){
		return deathFate[9];
	}else{
		return deathFate[10];
	}
}

function newCharacter () {
	let character = "You are a ";
	const alignmentNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) - 1;
	const raceNumber = Math.floor(Math.random() * race.length);
	const classNumber = Math.floor(Math.random() * combatClass.length);
	const choice = Math.floor(Math.random() * 2);
	const bgNum = Math.floor(Math.random() * backgrounds.length);
	if (alignmentNumber == 2){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice];
	}else if (alignmentNumber == 15 || alignmentNumber == 16){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice + 1];
	}else if (alignmentNumber == 17){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice + 1];
	}else{
		character = character + alignmentList[alignmentNumber];
	}
	character = character + ' ' + race[raceNumber] +  ' ' + combatClass[classNumber] + '.\nYou have a background as ' + backgrounds[bgNum] + '.';
	document.getElementById('character').innerHTML = character;

	let parent = "";
	const parentNumber = Math.floor(Math.random() * 100 + 1);
	const halfNumber = Math.floor(Math.random() * 8);

	if(parentNumber < 96){
		parent = parents[0];
		if (raceNumber == 16){
			parent = parent + heParents[halfNumber];
		}else if(raceNumber == 17){
			parent = parent + hoParents[halfNumber];
		}
	}else{
		parent = parents[1];
	}
	document.getElementById('parents').innerHTML = parent;

	let birthplace = "You were born ";
	const bpNumber = Math.floor(Math.random() * 100 + 1);

	if(bpNumber < 51){
		birthplace = birthplace + birthplaces[0];
	}else if(bpNumber < 56){
		birthplace = birthplace + birthplaces[1];
	}else if(bpNumber < 64){
		birthplace = birthplace + birthplaces[2];
	}else if(bpNumber < 66){
		birthplace = birthplace + birthplaces[3];
	}else if(bpNumber < 69){
		birthplace = birthplace + birthplaces[4];
	}else if(bpNumber < 71){
		birthplace = birthplace + birthplaces[5];
	}else if(bpNumber < 73){
		birthplace = birthplace + birthplaces[6];
	}else if(bpNumber < 75){
		birthplace = birthplace + birthplaces[7];
	}else if(bpNumber < 78){
		birthplace = birthplace + birthplaces[8];
	}else if(bpNumber < 79){
		birthplace = birthplace + birthplaces[9];
	}else if(bpNumber < 81){
		birthplace = birthplace + birthplaces[10];
	}else if(bpNumber < 83){
		birthplace = birthplace + birthplaces[11];
	}else if(bpNumber < 85){
		birthplace = birthplace + birthplaces[12];
	}else if(bpNumber < 86){
		birthplace = birthplace + birthplaces[13];
	}else if(bpNumber < 89){
		birthplace = birthplace + birthplaces[14];
	}else if(bpNumber < 92){
		birthplace = birthplace + birthplaces[15];
	}else if(bpNumber < 94){
		birthplace = birthplace + birthplaces[16];
	}else if(bpNumber < 96){
		birthplace = birthplace + birthplaces[17];
	}else if(bpNumber < 97){
		birthplace = birthplace + birthplaces[18];
	}else if(bpNumber < 98){
		birthplace = birthplace + birthplaces[19];
	}else if(bpNumber < 99){
		birthplace = birthplace + birthplaces[20];
	}else if(bpNumber < 100){
		birthplace = birthplace + birthplaces[21];
	}else{
		birthplace = birthplace + birthplaces[22];
	}
	document.getElementById('birthplace').innerHTML = birthplace + '.';

	let siblings = 0;
	let siblingString = "";
	let siblingRoll = Math.floor(Math.random() * 10 + 1);
	let sameCount = 0;
	let olderCount = 0;
	let youngerCount = 0;
	if (raceNumber >= 8 && raceNumber <= 11){
		siblingRoll = siblingRoll - 2;
	}
	if (siblingRoll < 3){
		siblings = 0;
	}else if (siblingRoll < 5){
		siblings = Math.floor(Math.random() * 3 + 1);
	}else if (siblingRoll < 7){
		siblings = Math.floor(Math.random() * 4 + 2);
	}else if (siblingRoll < 9){
		siblings = Math.floor(Math.random() * 6 + 3);
	}else if (siblingRoll < 11){
		siblings = Math.floor(Math.random() * 8 + 4);
	}
	for(i = 0; i < siblings; i++){
		let roll = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
		if (roll < 3){
			sameCount++;
		}else if (roll < 8){
			olderCount++;
		}else if (roll < 13){
			youngerCount++;
		}
	}
	if (sameCount > 0){
		siblingString = siblingString + "You have " + sameCount + " sibling(s) born the same time you were. ";
	}
	if (olderCount > 0){
		siblingString = siblingString + "You have " + olderCount + " older sibling(s). ";
	}
	if (youngerCount > 0){
		siblingString = siblingString + "You have " + youngerCount + " younger sibling(s). ";
	}
	if (siblingString == ""){
		siblingString = "You are an only child.";
	}
	document.getElementById('siblings').innerHTML = siblingString;

	let familyString = "You were raised ";
	let deadFather = true;
	let deadMother = true;
	const familyRoll = (parentNumber < 96)? Math.floor(Math.random() * 100 + 1) : Math.floor(Math.random() * 35 + 1);
	if(familyRoll < 2){
		familyString = familyString + familyList[0];
	}else if(familyRoll < 3){
		familyString = familyString + familyList[1];
	}else if(familyRoll < 4){
		familyString = familyString + familyList[2];
	}else if(familyRoll < 6){
		familyString = familyString + familyList[3];
	}else if(familyRoll < 8){
		familyString = familyString + familyList[4];
	}else if(familyRoll < 16){
		familyString = familyString + familyList[5];
	}else if(familyRoll < 26){
		familyString = familyString + familyList[6];
	}else if(familyRoll < 36){
		familyString = familyString + familyList[7];
	}else if(familyRoll < 56){
		familyString = familyString + familyList[8];
		deadFather = false;
	}else if(familyRoll < 76){
		familyString = familyString + familyList[9];
		deadMother = false;
	}else if(familyRoll < 101){
		familyString = familyString + familyList[10];
		deadMother = false;
		deadFather = false;
	}
	if (parentNumber < 96){
		if (deadMother){
			familyString = familyString + "Your mother ";
			let r =  Math.floor(Math.random() * 4 + 1);
			if (r < 2){
				familyString = familyString + randomDeath();
			}else if(r < 3){
				familyString = familyString + parentFate[0];
			}else if(r < 4){
				familyString = familyString + parentFate[1];
			}else{
				familyString = familyString + parentFate[2];
			}
		}
		if (deadFather){
			familyString = familyString + "Your father ";
			let r =  Math.floor(Math.random() * 4 + 1);
			if (r < 2){
				familyString = familyString + randomDeath();
			}else if(r < 3){
				familyString = familyString + parentFate[0];
			}else if(r < 4){
				familyString = familyString + parentFate[1];
			}else{
				familyString = familyString + parentFate[2];
			}
		}
	}
	document.getElementById('family').innerHTML = familyString;

	let lifestyleString = "You lived ";
	let lsMod = 0;
	const lifestyleNum = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
	if (lifestyleNum < 4){
		lifestyleString = lifestyleString + lifestyleList[0];
		lsMod = -40;
	}else if(lifestyleNum < 6){
		lifestyleString = lifestyleString + lifestyleList[1];
		lsMod = -20;
	}else if(lifestyleNum < 9){
		lifestyleString = lifestyleString + lifestyleList[2];
		lsMod = -10;
	}else if(lifestyleNum < 13){
		lifestyleString = lifestyleString + lifestyleList[3];
	}else if(lifestyleNum < 16){
		lifestyleString = lifestyleString + lifestyleList[4];
		lsMod = 10;
	}else if(lifestyleNum < 18){
		lifestyleString = lifestyleString + lifestyleList[5];
		lsMod = 20;
	}else{
		lifestyleString = lifestyleString + lifestyleList[6];
		lsMod = 40;
	}
	const homeNum = Math.floor(Math.random() * 100 + 1) + lsMod;
	if(homeNum < 1){
		lifestyleString = lifestyleString + homeList[0];
	}else if(homeNum < 21){
		lifestyleString = lifestyleString + homeList[1];
	}else if(homeNum < 31){
		lifestyleString = lifestyleString + homeList[2];
	}else if(homeNum < 41){
		lifestyleString = lifestyleString + homeList[3];
	}else if(homeNum < 51){
		lifestyleString = lifestyleString + homeList[4];
	}else if(homeNum < 71){
		lifestyleString = lifestyleString + homeList[5];
	}else if(homeNum < 91){
		lifestyleString = lifestyleString + homeList[6];
	}else if(homeNum < 111){
		lifestyleString = lifestyleString + homeList[7];
	}else{
		lifestyleString = lifestyleString + homeList[8];
	}
	document.getElementById('lifestyle').innerHTML = lifestyleString;

	let chmString = "";
	const chmNum = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
	if(chmNum < 4){
		chmString = chMemoriesList[0];
	}else if(chmNum < 6){
		chmString = chMemoriesList[1];
	}else if(chmNum < 9){
		chmString = chMemoriesList[2];
	}else if(chmNum < 13){
		chmString = chMemoriesList[3];
	}else if(chmNum < 16){
		chmString = chMemoriesList[4];
	}else if(chmNum < 18){
		chmString = chMemoriesList[5];
	}else{
		chmString = chMemoriesList[6];
	}
	document.getElementById('chMemories').innerHTML = chmString;

	const bgChoiceNum = Math.floor(Math.random() * 6);
	document.getElementById('background').innerHTML = "You became " + backgrounds[bgNum] + " because " + bgList[bgNum][bgChoiceNum];

	const classChoiceNum = Math.floor(Math.random() * 6);
	document.getElementById('class').innerHTML = "You became a " + combatClass[classNumber] + " because " + classList[classNumber][classChoiceNum];
}

window.onload = function(){
	newCharacter();
};