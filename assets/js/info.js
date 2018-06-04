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

function newCharacter () {
	let character = "You are a "
	let alignmentNumber = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1) - 1;
	let raceNumber = Math.floor(Math.random() * race.length)
	let classNumber = Math.floor(Math.random() * combatClass.length)
	let choice = Math.floor(Math.random() * 2);
	if (alignmentNumber == 2){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice];
	}else if (alignmentNumber == 15 || alignmentNumber == 16){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice + 1];
	}else if (alignmentNumber == 17){
		character = character + alignmentList[alignmentNumber] + alignmentChoice[choice + 1];
	}else{
		character = character + alignmentList[alignmentNumber];
	}
	character = character + ' ' + race[raceNumber] +  ' ' + combatClass[classNumber] + '.'
	document.getElementById('character').innerHTML = character;
}

window.onload = function(){
	newCharacter();
};