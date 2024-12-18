let animal = {
    name: "", 
    kind: "", 
    speak: function(message) {
      console.log(this.name + " the " + this.kind + " says: '" + message + "'");
    }
  };
  
  animal.name = prompt("Enter the animal's name: ");
  animal.kind = prompt("Enter the kind of animal: ");
  let message = prompt("What do you want the animal to say?");
  animal.speak(message);