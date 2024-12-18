function tellStory(inputs) {
    let [name, mood, activity] = inputs;
    let story = "This is " + name + ". " + name + " is a nice person. Today she is " + mood + ". She is " + activity + " all day. ";
    return story;
}
let storyInputs = ["Sanja", "focused", "coding"];
let story = tellStory(storyInputs);

console.log(story);