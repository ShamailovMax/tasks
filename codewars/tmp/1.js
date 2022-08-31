// Like, Dislike, Nothing come from Preloaded

function likeOrDislike(buttons) {
  //   like => like enabled
  //   like + like => like disabled
  //   like + dislike => like disabled && dislike enabled

  counter = 0;
  for (const action of buttons) {
    if (
      buttons[counter] === "Like" &&
      buttons[counter + 1] !== "Dislike" &&
      buttons[counter + 1] !== "Like"
    ) {
      console.log("Like enabled");
    } else {
      console.log("Like disabled");
    }
  }

  // counter++;
}

let buttons = ["Like", "Dislike", "Like"];

likeOrDislike(buttons);
