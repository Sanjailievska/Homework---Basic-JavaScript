let book = {
    title: prompt("Enter the book title:"),
    author: prompt("Enter the book author:"),
    readingStatus: "",
    getReadingStatus: function() {
      while (true) {
        this.readingStatus = prompt("Have you read this book? (yes or no):");
        if (this.readingStatus === "yes") {
          return "Already read '" + this.title + "' by " + this.author + ".";
        } else if (this.readingStatus === "no") {
          return "You still need to read '" + this.title + "' by " + this.author + ".";
        } else {
          alert("Please enter 'yes' or 'no'.");
        }
     }
   }
};
  
console.log(book.getReadingStatus()); 