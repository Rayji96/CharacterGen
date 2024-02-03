function randomAdventure () {
	let r = Math.floor(Math.random() * 100 + 1);
	if (r < 11){
		return adventureFate[0] + Math.floor(Math.random() * 3 + 1) + ' fingers, or ' + Math.floor(Math.random() * 4 + 1) + ' toes. ';
	}else if(r < 21){
		return adventureFate[1];
	}else if(r < 31){
		return adventureFate[2];
	}else if(r < 41){
		return adventureFate[3];
	}else if(r < 51){
		return adventureFate[4];
	}else if(r < 61){
		return adventureFate[5];
	}else if(r < 71){
		return adventureFate[6];
	}else if(r < 81){
		return adventureFate[7];
	}else if(r < 91){
		return adventureFate[8] + (Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1)) +' gp left from your share of it. ';
	}else if(r < 100){
		return adventureFate[9] + Math.floor(Math.random() * 20 + 50) +' gp left from your share of it. ';
	}else{
		return adventureFate[10];
	}
}

function randomMagic (){
	return magicalFate[Math.floor(Math.random() * 10)];
}


function randomBoon (){
	const r = Math.floor(Math.random() * 10);
	if(r == 3){
		return boonFate[3] + Math.floor(Math.random() * 20 + 1) + ' gp in addition to your regular starting funds. ';
	}else if(r == 9){
		return boonFate[9] + Math.floor(Math.random() * 20 + 1) + ' years. If you choose to live at a higher lifestyle, you reduce the price of the lifestyle by 2 gp during that time period. ';
	}else{
		return boonFate[r];
	}
}

function randomCrime (){
	return crimeFate[Math.floor(Math.random() * 8)];
}

function randomPunish (){
	const r = Math.floor(Math.random() * 12 + 1);
	if(r < 4){
		return punishFate[0];
	}else if(r < 7){
		return punishFate[1];
	}else if(r < 9){
		return punishFate[2];
	}else{
		return punishFate[3] +  Math.floor(Math.random() * 4 + 1) + ' years or succeeded in escaping after that much time. ';
	}
}

function randomSupernatural () {
	let r = Math.floor(Math.random() * 100 + 1);
	if (r < 6){
		return supernaturalFate[0] + Math.floor(Math.random() * 6 + 1) + ' years before you escaped. ';
	}else if(r < 11){
		return supernaturalFate[1];
	}else if(r < 16){
		return supernaturalFate[2] + Math.floor(Math.random() * 20 + 51) + ' gp. ';
	}else if(r < 21){
		return supernaturalFate[3];
	}else if(r < 31){
		return supernaturalFate[4];
	}else if(r < 41){
		return supernaturalFate[5];
	}else if(r < 51){
		return supernaturalFate[6];
	}else if(r < 61){
		return supernaturalFate[7];
	}else if(r < 71){
		return supernaturalFate[8];
	}else if(r < 76){
		return supernaturalFate[9] + creatureType[Math.floor(Math.random() * 6)] + '. ';
	}else if(r < 81){
		return supernaturalFate[10];
	}else if(r < 86){
		return supernaturalFate[11];
	}else if(r < 91){
		return supernaturalFate[12];
	}else if(r < 96){
		return supernaturalFate[13];
	}else{
		return supernaturalFate[14];
	}
}

function randomTragedy (){
	const r = Math.floor(Math.random() * 12 - 1);
	if(r <= 0){
		return tragedyFate[0] + randomDeath();
	}else if(r == 3){
		return tragedyFate[3] + Math.floor(Math.random() * 6 + 1) + ' years at hard labor, in jail, or shackled to an oar in a slave galley. ';
	}else if(r == 9){
		return tragedyFate[9] + (Math.floor(Math.random() * 2) ? ' with bad feelings. ' : ' amicably. ');
	}else if(r == 10){
		let fate = randomDeath();
		if(fate == 'was murdered. '){
			r2 = Math.floor(Math.random() * 12 + 1);
			if (r2 == 1){
				fate = fate + "You were responsible, whether directly or indirectly. ";
			}
		}
		return tragedyFate[10] + fate;
	}else{
		return tragedyFate[r];
	}
}

function randomWar (){
	return warFate[Math.floor(Math.random() * 12)];
}

function randomWeird (){
	const r = Math.floor(Math.random() * 12);
	if(r == 0){
		return weirdFate[0] + Math.floor(Math.random() * 4 + 1) + ' weeks. ';
	}else if(r == 2){
		return weirdFate[2] + Math.floor(Math.random() * 6 + 1) + ' years. ';
	}else if(r == 3){
		return weirdFate[3] + Math.floor(Math.random() * 4 + 1) + ' months until adventurers killed it. ';
	}else if(r == 6){
		return weirdFate[6] + Math.floor(Math.random() * 6 + 1) + ' years and recently regained your sanity. A tic or some other bit of odd behavior might linger. ';
	}else{
		return weirdFate[r];
	}
}

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

let totalBackstory = ""

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
	character = character + ' ' + race[raceNumber] +  ' ' + combatClass[classNumber] + ". </br> You have a background as " + backgrounds[bgNum] + '.';
	document.getElementById('character').innerHTML = character;

	totalBackstory = character

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

	totalBackstory = totalBackstory + "\n" + parent

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

	birthplace = birthplace + '.'

	document.getElementById('birthplace').innerHTML = birthplace;

	totalBackstory = totalBackstory + "\n" + birthplace

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

	totalBackstory = totalBackstory + "\n" + siblingString

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

	totalBackstory = totalBackstory + "\n" + familyString

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

	totalBackstory = totalBackstory + "\n" + lifestyleString

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

	totalBackstory = totalBackstory + "\n" + chmString

	const bgChoiceNum = Math.floor(Math.random() * 6);
	let bgChoice = "You became " + backgrounds[bgNum] + " because " + bgList[bgNum][bgChoiceNum];
	document.getElementById('background').innerHTML = bgChoice

	totalBackstory = totalBackstory + "\n" + bgChoice

	const classChoiceNum = Math.floor(Math.random() * 6);
	let classCoice = "You became a " + combatClass[classNumber] + " because " + classList[classNumber][classChoiceNum];
	document.getElementById('class').innerHTML = classCoice

	totalBackstory = totalBackstory + "\n" + classCoice

	const ageNum = Math.floor(Math.random() * 100);
	let ageString = "You are now ";
	let eventsNum = 0;

	if (ageNum < 21){
		ageString = ageString + '20 years old or younger (relative to your race). ';
		eventsNum = 1;
	}else if(ageNum < 60){
		ageString = ageString + '21-30 years old (relative to your race). ';
		eventsNum =  Math.floor(Math.random() * 4 + 1);
	}else if(ageNum < 70){
		ageString = ageString + '31-40 years old (relative to your race). ';
		eventsNum =  Math.floor(Math.random() * 6 + 1);
	}else if(ageNum < 90){
		ageString = ageString + '41-50 years old (relative to your race). ';
		eventsNum =  Math.floor(Math.random() * 8 + 1);
	}else if(ageNum <100){
		ageString = ageString + '51-60 years old (relative to your race). ';
		eventsNum =  Math.floor(Math.random() * 10 + 1);
	}else{
		ageString = ageString + '61 years old or older (relative to your race). ';
		eventsNum =  Math.floor(Math.random() * 12 + 1);
	}

	document.getElementById('age').innerHTML = ageString;

	totalBackstory = totalBackstory + "\n" + ageString

	let eventString = "";
	let love = false;
	for (let i = 0; i < eventsNum; i++){
		const eventNum = Math.floor(Math.random() * 100 + 1);

		if(eventNum < 11){
			eventString = eventString + eventList[0] + randomTragedy() + "</br>";
		}else if(eventNum < 21){
			eventString = eventString + eventList[1] + randomBoon() + "</br>";
		}else if(eventNum < 31){
			if (love){
				eventString = eventString + "You had a child. " + "</br>";
			}else{
				love = true;
				eventString = eventString + "You fell in love or got married. " + "</br>";
			}
		}else if(eventNum < 41){
			eventString = eventString + eventList[3] + (Math.floor(Math.random() * 2)? "You are to blame for the rift. " : "You are blameless for the rift. ") + "</br>";
		}else if(eventNum < 51){
			eventString = eventString + eventList[4] + "</br>";
		}else if(eventNum < 71){
			eventString = eventString + eventList[5] + (Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1)) + " gp. " + "</br>";
		}else if(eventNum < 76){
			eventString = eventString + eventList[6] + "</br>";
		}else if(eventNum < 81){
			eventString = eventString + eventList[7] + randomAdventure() + "</br>";
		}else if(eventNum < 86){
			eventString = eventString + eventList[8] + randomSupernatural() + "</br>";
		}else if(eventNum < 91){
			eventString = eventString + eventList[9] + randomWar() + "</br>";
		}else if(eventNum < 96){
			eventString = eventString + eventList[10] + randomCrime() + randomPunish() + "</br>";
		}else if(eventNum < 100){
			eventString = eventString + eventList[11] + randomMagic() + "</br>";
		}else{
			eventString = eventString + eventList[12] + randomWeird() + "</br>";
		}
	}

	document.getElementById('events').innerHTML = eventString;

	totalBackstory = totalBackstory + "\n" + eventString
	totalBackstory = totalBackstory.replaceAll("</br>","");
}

window.onload = function(){
	newCharacter();
	console.log(totalBackstory)
};