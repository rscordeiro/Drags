var dragArray = [
  {
    name: "Bianca Del Rio",
    charisma: 10,
    uniqueness: 10,
    nerve: 10,
    talent: 10
  },

  {
    name: "Courtney Act",
    charisma: 9,
    uniqueness: 9,
    nerve: 10,
    talent: 10
 },

  {
    name: "Katya",
    charisma: 10,
    uniqueness: 10,
    nerve: 8,
    talent: 10
 },

  {
    name: "Jinkx Monsoon",
    charisma: 10,
    uniqueness: 10,
    nerve: 8,
    talent: 10
 }

];

var cuntnessLevel = function(dragName) {
  var cuntness;
  for(var i = 0; i < dragArray.length; i++) {
    if(dragName === dragArray[i].name) {
    cuntness = dragArray[i].charisma + dragArray[i].uniqueness + dragArray[i].nerve + dragArray[i].talent;
    alert("Gurrrl, " + dragArray[i].name + "'s CUNTness level is " + cuntness + "!");
  }
 }
 return cuntness;
}

var noTeeNoShade = function(drag1, drag2) {
  var dragName1 = drag1;
  var dragName2 = drag2;
  var cunt1 = cuntnessLevel(dragName1);
  var cunt2 = cuntnessLevel(dragName2);
    if (cunt1 > cunt2) {
      alert("Guurrrrl, " + dragName1 + " slays " + dragName2 + "!");
     } else if (cunt2 > cunt1) {
     alert ("Guurrrrl, " + dragName2 + " slays " + dragName1 + "!");
     } else if (cunt1 === cunt2) {
     alert ("Gurl, these queens are the same shit");
     }
   }

/*dragArray.prototype.newDrag = function(name, charisma, uniqueness, nerve, talent) {
  {
    this.name = name,
    this.charisma = charisma,
    this.uniqueness = uniqueness,
    this.nerve = nerve,
    this.talent = talent
  }
}

newDrag("Violet Chachki", 9, 10, 10, 10);*/
noTeeNoShade("Bianca Del Rio","Courtney Act");
cuntnessLevel("Katya");
