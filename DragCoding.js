var dragObject = {
  drag1: {
    name: "Bianca Del Rio", 
	charisma: 10, 
	uniqueness: 10, 
	nerve: 10, 
	talent: 10
    },
	
  drag2: {
    name: "Courtney Act",
	charisma: 9,
	uniqueness: 9,
	nerve: 10,
	talent: 10,
  	},
  
  drag3: {
    name: "Katya",
	charisma: 10,
	uniqueness: 10,
	nerve: 8,
	talent: 10
  	},
  
  drag4: {
    name: "Jinkx Monsoon",
	charisma: 10,
	uniqueness: 10,
	nerve: 8,
	talent: 10
  	},
  
};

dragObject.prototype = {
	
	cuntnessLevel: function(this.name) {
    var cuntness = this.charisma + this.uniqueness + this.nerve + this.talent;
    alert("Gurrrl, you level of CUNTness is " + cuntness + "!");
  };
  
  noTeeNoShade: function(nameA, nameB) {
    if (nameA.cuntness > nameB.cuntsness) {
      alert("Bitch, " + nameA + " tottaly slays " + nambeB + "!");
    } else {
        alert("Bitch, " + nameB + " is so much more sickning than " + nambeA + "!");
    };
  };
}





