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
 },

];

  var cuntnessLevel = function(dragName) {
    var cuntness;
    for(var i = 0; i < dragArray.length; i++) {
    if(dragName == dragArray[i].name) {
    cuntness = dragArray[i].charisma + dragArray[i].uniqueness + dragArray[i].nerve + dragArray[i].talent;
    alert("Gurrrl, your CUNTness level is " + cuntness + "!");
    }
  }
 }


  //not working yet
  /*var noTeeNoShade = function(drag1, drag2) {
  var dragName1 = drag1;
  var dragName2 = drag2;
  var cunt1 = cuntnessLevel(dragName1);
  var cunt2 = cuntnessLevel(dragName2);


  for(var j = 0; j < dragArray.length; j++) {

    if (dragName1 == dragArray[j].name && dragName2 == dragArray[j].name) {
      if (cunt1 > cunt2) {
        alert("Guurrrrl, " + dragName1 + " slays " + dragName2 + "!");
      } else if (cunt2 > cunt1) {
        alert("Guurrrrl, " + dragName2 + " slays " + dragName1 + "!");
      } else if (cunt1 == cunt2) {
        alert("Gurl, these queens are the same shit");
      }
    } else if (dragName1 != dragArray[j].name && drag2 != dragArray[j].name) {
    alert("Bitch, I don't know these queens.");
    } else if (drag1 != dragArray[j].name || drag2 != dragArray[j].name){
    alert("Bitch, I don't know one of these queens.");
    }
  }*/
}

//noTeeNoShade("Katya","Courtney Act");
cuntnessLevel("Bianca Del Rio");
