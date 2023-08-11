const races = document.getElementById('player-Race')
const classes = document.getElementById('player-Class')
const stats = document.getElementById('player-Stats')
const Str = document.getElementById('Str')
const Dex = document.getElementById('Dex')
const Con = document.getElementById('Con')
const Int = document.getElementById('Int')
const Wis = document.getElementById('Wis')
const Cha = document.getElementById('Cha')
let playerRace
let playerClass
function onInputR() {
    var val = document.getElementById("race").value;
    var opts = document.getElementById('races').childNodes;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        playerRace = document.getElementById("player-Race")
        playerRace.innerHTML = (opts[i].value)
        playerRace = playerRace.innerHTML
        break;
      }
    }
  }
  function onInputC() {
    var val = document.getElementById("class").value;
    var opts = document.getElementById('classes').childNodes;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        playerClass = document.getElementById("player-Class")
        playerClass.innerHTML = (opts[i].value)
        playerClass = playerClass.innerHTML
        generateStats()
        break;
      }
    }
  }
function compareNumbers(a, b) {
    return a - b;
}


function generateStats(playerRace) {
    var dieOne1 = Math.floor(Math.random() * 6) +1
    var dieTwo1 = Math.floor(Math.random() * 6) +1
    var dieThree1 = Math.floor(Math.random() * 6) +1
    var dieFour1 = Math.floor(Math.random() * 6) +1
    const rollOneIN = [dieOne1, dieTwo1, dieThree1, dieFour1]
    rollOneIN.sort();
    rollOneIN.reverse();
    const rollOneOUT = (rollOneIN[0] + rollOneIN[1] + rollOneIN[2])


    var dieOne2 = Math.floor(Math.random() * 6) +1
    var dieTwo2 = Math.floor(Math.random() * 6) +1
    var dieThree2 = Math.floor(Math.random() * 6) +1
    var dieFour2 = Math.floor(Math.random() * 6) +1
    const rollTwoIN = [dieOne2, dieTwo2, dieThree2, dieFour2]
    rollTwoIN.sort();
    rollTwoIN.reverse();
    const rollTwoOUT = (rollTwoIN[0] + rollTwoIN[1] + rollTwoIN[2])


    var dieOne3 = Math.floor(Math.random() * 6) +1
    var dieTwo3 = Math.floor(Math.random() * 6) +1
    var dieThree3 = Math.floor(Math.random() * 6) +1
    var dieFour3 = Math.floor(Math.random() * 6) +1
    const roll3IN = [dieOne3, dieTwo3, dieThree3, dieFour3]
    roll3IN.sort();
    roll3IN.reverse();
    const roll3OUT = (roll3IN[0] + roll3IN[1] + roll3IN[2])


    var dieOne4 = Math.floor(Math.random() * 6) +1
    var dieTwo4 = Math.floor(Math.random() * 6) +1
    var dieThree4 = Math.floor(Math.random() * 6) +1
    var dieFour4 = Math.floor(Math.random() * 6) +1
    const roll4IN = [dieOne4, dieTwo4, dieThree4, dieFour4]
    roll4IN.sort();
    roll4IN.reverse();
    const roll4OUT = (roll4IN[0] + roll4IN[1] + roll4IN[2])



    var dieOne5 = Math.floor(Math.random() * 6) +1
    var dieTwo5 = Math.floor(Math.random() * 6) +1
    var dieThree5 = Math.floor(Math.random() * 6) +1
    var dieFour5 = Math.floor(Math.random() * 6) +1
    const roll5IN = [dieOne5, dieTwo5, dieThree5, dieFour5]
    roll5IN.sort();
    roll5IN.reverse();
    const roll5OUT = (roll5IN[0] + roll5IN[1] + roll5IN[2])


    var dieOne6 = Math.floor(Math.random() * 6) +1
    var dieTwo6 = Math.floor(Math.random() * 6) +1
    var dieThree6 = Math.floor(Math.random() * 6) +1
    var dieFour6 = Math.floor(Math.random() * 6) +1
    const roll6IN = [dieOne6, dieTwo6, dieThree6, dieFour6]
    roll6IN.sort();
    roll6IN.reverse();
    const roll6OUT = (roll6IN[0] + roll6IN[1] + roll6IN[2])

    let playerStatsNumbers = [rollOneOUT, rollTwoOUT, roll3OUT, roll4OUT, roll5OUT, roll6OUT]
    playerStatsNumbers.sort(compareNumbers);
    playerStatsNumbers.reverse();
    
    playerRace = document.getElementById("player-Race")
    playerRace = playerRace.innerHTML
    if (playerClass === "Artificer"){
        if (playerRace === "Aarakocra") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2] + 2;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Aasimar") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0] + 1;
            Wis.innerHTML = playerStatsNumbers[2] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Autognome") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1] - 1;
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[0] + 2;
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Bugbear") {
            Str.innerHTML = playerStatsNumbers[5] + 2;
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Centaur") {
            Str.innerHTML = playerStatsNumbers[5] + 1;
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2] + 2;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Changeling") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Deep Gnome") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Dragonborn") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2] + 2;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Duergar") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3] + 3;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Dwarf") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[0] + 1;
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Elf") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0] + 2;
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Fairy") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1] + 1;
            Con.innerHTML = playerStatsNumbers[3] - 1;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Firbolg") {
            Str.innerHTML = playerStatsNumbers[5] + 2;
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2] + 1;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Genasi") {
            Str.innerHTML = playerStatsNumbers[5] + 1;
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Giff") {
            Str.innerHTML = playerStatsNumbers[5] + 1;
            Dex.innerHTML = playerStatsNumbers[1] + 1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Githyanki") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2] + 2;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Githzerai") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2] + 2;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Gnome") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0] + 1;
            Wis.innerHTML = playerStatsNumbers[2] + 1;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Goblin") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0] - 1;
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Goliath") {
            Str.innerHTML = playerStatsNumbers[5] + 1;
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Hadozee") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1] + 2;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace ==="Half-Elf") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Half-Orc") {
            Str.innerHTML = playerStatsNumbers[5] + 1;
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4] + 2;
        } else if (playerRace === "Halfling") {
            Str.innerHTML = playerStatsNumbers[5];
            Dex.innerHTML = playerStatsNumbers[1];
            Con.innerHTML = playerStatsNumbers[3] + 3;
            Int.innerHTML = playerStatsNumbers[0];
            Wis.innerHTML = playerStatsNumbers[2];
            Cha.innerHTML = playerStatsNumbers[4];

        } else if (playerRace === "Harengon") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 2;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Hobgoblin") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5]+ 3;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Human") {
            Str.innerHTML = playerStatsNumbers[1] +1;
            Dex.innerHTML = playerStatsNumbers[2] +1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Kalashtar") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 3;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Kender") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 2;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Kenku") {
            Str.innerHTML = playerStatsNumbers[1] - 2;
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 4;
        } else if (playerRace === "Kobold") {
            Str.innerHTML = playerStatsNumbers[1] - 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 3;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Lizardfolk") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Loxodon") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Minotaur") {
            Str.innerHTML = playerStatsNumbers[1] + 3;
            Dex.innerHTML = playerStatsNumbers[2] - 2;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 2;
        } else if (playerRace === "Orc") {
            Str.innerHTML = playerStatsNumbers[1] + 3;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Owlin") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 2;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Plasmoid") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 3;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] - 1;
        } else if (playerRace === "Satyr") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Shifter") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 3;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Simic Hybrid") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] - 1;
        } else if (playerRace === "Tabaxi") {
            Str.innerHTML = playerStatsNumbers[1] - 1;
            Dex.innerHTML = playerStatsNumbers[2] + 4;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Thi-Kreen") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Tiefling") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 2;
        } else if (playerRace === "Tortle") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Triton") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] - 1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Warforged") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3]+ 3;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Yuan-Ti") {
            Str.innerHTML = playerStatsNumbers[1] +1;
            Dex.innerHTML = playerStatsNumbers[2] +1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        }
    }
    if (playerClass === "Barbarian"){
        Str.innerHTML = playerStatsNumbers[0];
        Dex.innerHTML = playerStatsNumbers[2];
        Con.innerHTML = playerStatsNumbers[1];
        Int.innerHTML = playerStatsNumbers[5];
        Wis.innerHTML = playerStatsNumbers[4];
        Cha.innerHTML = playerStatsNumbers[3];
    }
    if (playerClass === "Bard"){
        Str.innerHTML = playerStatsNumbers[2];
        Dex.innerHTML = playerStatsNumbers[1];
        Con.innerHTML = playerStatsNumbers[3];
        Int.innerHTML = playerStatsNumbers[5];
        Wis.innerHTML = playerStatsNumbers[4];
        Cha.innerHTML = playerStatsNumbers[0];
    }
    if (playerClass === "Blood Hunter"){
        Str.innerHTML = playerStatsNumbers[0];
        Dex.innerHTML = playerStatsNumbers[1];
        Con.innerHTML = playerStatsNumbers[4];
        Int.innerHTML = playerStatsNumbers[2];
        Wis.innerHTML = playerStatsNumbers[3];
        Cha.innerHTML = playerStatsNumbers[5];
    }
    if (playerClass === "Cleric"){
        Str.innerHTML = playerStatsNumbers[1];
        Dex.innerHTML = playerStatsNumbers[5];
        Con.innerHTML = playerStatsNumbers[2];
        Int.innerHTML = playerStatsNumbers[4];
        Wis.innerHTML = playerStatsNumbers[0];
        Cha.innerHTML = playerStatsNumbers[3];
    }
    if (playerClass === "Druid"){
        if (playerRace === "Aarakocra") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 2;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Aasimar") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Autognome") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] - 1;
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[5] + 2;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Bugbear") {
            Str.innerHTML = playerStatsNumbers[1] + 2;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Centaur") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 2;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Changeling") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Deep Gnome") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Dragonborn") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 2;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Duergar") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 3;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Dwarf") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Elf") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 2;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Fairy") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3] - 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Firbolg") {
            Str.innerHTML = playerStatsNumbers[1] + 2;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Genasi") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Giff") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Githyanki") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 2;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Githzerai") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 2;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Gnome") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Goblin") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] - 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Goliath") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Hadozee") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 2;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace ==="Half-Elf") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Half-Orc") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 2;
        } else if (playerRace === "Halfling") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 3;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Harengon") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 2;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Hobgoblin") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5]+ 3;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Human") {
            Str.innerHTML = playerStatsNumbers[1] +1;
            Dex.innerHTML = playerStatsNumbers[2] +1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Kalashtar") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 3;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Kender") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 2;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Kenku") {
            Str.innerHTML = playerStatsNumbers[1] - 2;
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 4;
        } else if (playerRace === "Kobold") {
            Str.innerHTML = playerStatsNumbers[1] - 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 3;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Lizardfolk") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Loxodon") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Minotaur") {
            Str.innerHTML = playerStatsNumbers[1] + 3;
            Dex.innerHTML = playerStatsNumbers[2] - 2;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 2;
        } else if (playerRace === "Orc") {
            Str.innerHTML = playerStatsNumbers[1] + 3;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Owlin") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 2;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Plasmoid") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] + 3;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] - 1;
        } else if (playerRace === "Satyr") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Shifter") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 3;
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Simic Hybrid") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2] + 1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] - 1;
        } else if (playerRace === "Tabaxi") {
            Str.innerHTML = playerStatsNumbers[1] - 1;
            Dex.innerHTML = playerStatsNumbers[2] + 4;
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Thi-Kreen") {
            Str.innerHTML = playerStatsNumbers[1] + 1;
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 2;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Tiefling") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3];
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 2;
        } else if (playerRace === "Tortle") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        } else if (playerRace === "Triton") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2] - 1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4] + 3;
        } else if (playerRace === "Warforged") {
            Str.innerHTML = playerStatsNumbers[1];
            Dex.innerHTML = playerStatsNumbers[2];
            Con.innerHTML = playerStatsNumbers[3]+ 3;
            Int.innerHTML = playerStatsNumbers[5];
            Wis.innerHTML = playerStatsNumbers[0];
            Cha.innerHTML = playerStatsNumbers[4];
        } else if (playerRace === "Yuan-Ti") {
            Str.innerHTML = playerStatsNumbers[1] +1;
            Dex.innerHTML = playerStatsNumbers[2] +1;
            Con.innerHTML = playerStatsNumbers[3] + 1;
            Int.innerHTML = playerStatsNumbers[5] + 1;
            Wis.innerHTML = playerStatsNumbers[0] + 1;
            Cha.innerHTML = playerStatsNumbers[4] + 1;
        }
    }
    if (playerClass === "Fighter"){
        Str.innerHTML = playerStatsNumbers[0];
        Dex.innerHTML = playerStatsNumbers[1];
        Con.innerHTML = playerStatsNumbers[2];
        Int.innerHTML = playerStatsNumbers[3];
        Wis.innerHTML = playerStatsNumbers[4];
        Cha.innerHTML = playerStatsNumbers[5];
    }
    if (playerClass === "Monk"){
        Str.innerHTML = playerStatsNumbers[5];
        Dex.innerHTML = playerStatsNumbers[0];
        Con.innerHTML = playerStatsNumbers[2];
        Int.innerHTML = playerStatsNumbers[3];
        Wis.innerHTML = playerStatsNumbers[1];
        Cha.innerHTML = playerStatsNumbers[4];
    }
    if (playerClass === "Paladin"){
        Str.innerHTML = playerStatsNumbers[1];
        Dex.innerHTML = playerStatsNumbers[4];
        Con.innerHTML = playerStatsNumbers[2];
        Int.innerHTML = playerStatsNumbers[5];
        Wis.innerHTML = playerStatsNumbers[3];
        Cha.innerHTML = playerStatsNumbers[0];
}
    if (playerClass === "Ranger"){
        Str.innerHTML = playerStatsNumbers[0];
        Dex.innerHTML = playerStatsNumbers[2];
        Con.innerHTML = playerStatsNumbers[4];
        Int.innerHTML = playerStatsNumbers[1];
        Wis.innerHTML = playerStatsNumbers[3];
        Cha.innerHTML = playerStatsNumbers[5];
    }
    if (playerClass === "Rogue"){
        Str.innerHTML = playerStatsNumbers[1];
        Dex.innerHTML = playerStatsNumbers[2];
        Con.innerHTML = playerStatsNumbers[5];
        Int.innerHTML = playerStatsNumbers[3];
        Wis.innerHTML = playerStatsNumbers[4];
        Cha.innerHTML = playerStatsNumbers[0];
    }
    if (playerClass === "Sorcerer"){
        Str.innerHTML = playerStatsNumbers[5];
        Dex.innerHTML = playerStatsNumbers[2];
        Con.innerHTML = playerStatsNumbers[3];
        Int.innerHTML = playerStatsNumbers[4];
        Wis.innerHTML = playerStatsNumbers[1];
        Cha.innerHTML = playerStatsNumbers[0];
    }
    if (playerClass === "Warlock"){
        Str.innerHTML = playerStatsNumbers[2];
        Dex.innerHTML = playerStatsNumbers[3];
        Con.innerHTML = playerStatsNumbers[1];
        Int.innerHTML = playerStatsNumbers[5];
        Wis.innerHTML = playerStatsNumbers[4];
        Cha.innerHTML = playerStatsNumbers[0];
    }
    if (playerClass === "Wizard"){
        Str.innerHTML = playerStatsNumbers[5];
        Dex.innerHTML = playerStatsNumbers[1];
        Con.innerHTML = playerStatsNumbers[2];
        Int.innerHTML = playerStatsNumbers[0];
        Wis.innerHTML = playerStatsNumbers[4];
        Cha.innerHTML = playerStatsNumbers[3];
    }
}
