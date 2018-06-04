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
	'You had a few close friends and lived an ordinary childhood.', 'You had several friends, and you childhood was generally a happy one.', 'You always found it easy to make friends, and you loved being around people.',
	'Everyone knew who you were, and you had friends everywhere you went.'
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
	if (alignmentNumber == 2){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice];
	}else if (alignmentNumber == 15 || alignmentNumber == 16){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice + 1];
	}else if (alignmentNumber == 17){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice + 1];
	}else{
		character = character + alignmentList[alignmentNumber];
	}
	character = character + ' ' + race[raceNumber] +  ' ' + combatClass[classNumber] + '.';
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
}

window.onload = function(){
	newCharacter();
};