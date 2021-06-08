function printFriendsNames() {
    let friendNames = ["Ray", "Oscar", "Gwen", "Bob", "Marie"]

    shuffleArray(friendNames)

    for (let name of friendNames) {

        let tag = document.createElement("p");
        let span = document.createElement("span");
        let text = document.createTextNode("Hello ");
        tag.appendChild(text);
        let spanText = document.createTextNode(name);
        span.appendChild(spanText);
        span.classList.add(name.toLowerCase());
        tag.appendChild(span);
         
        let element = document.getElementById("main");
        element.appendChild(tag);

    }

    
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

window.onload = function() {
    printFriendsNames();
  };