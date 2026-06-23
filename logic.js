let userch;
let compch;

const options = ["rock", "paper", "czr"];

document.getElementById("rock").addEventListener("click", () => {
  userch = "rock";
  playgame(userch);
});

document.getElementById("paper").addEventListener("click", () => {
  userch = "paper";
  playgame(userch);
});

document.getElementById("czr").addEventListener("click", () => {
  userch = "czr";
  playgame(userch);
});

const gencompchoice = () => {
  let i = Math.floor(Math.random() * 3);
  compch = options[i];
};

const playgame = (userch) => {
  console.log("user choice = ", userch);
  gencompchoice();
  console.log("comp choice = ", compch);

  if (userch === compch) {
    console.log("game draw");
    draw();
  } else {
    if (userch === "rock" && compch === "paper") {
      console.log("computer win");
      compwon();
    } else if (userch === "rock" && compch === "czr") {
      console.log("user win");
      userwon();
    }

    if (userch === "paper" && compch === "rock") {
      console.log("user win");
      userwon();
    } else if (userch === "paper" && compch === "czr") {
      console.log("computer win");
      compwon();
    }

    if (userch === "czr" && compch === "rock") {
      console.log("computer win");
      compwon();
    } else if (userch === "czr" && compch === "paper") {
      console.log("user win");
      userwon();
    }
  }
};

let a = 0;
let b = 0;

const userwon = () => {
  a++;
  document.getElementById("user-score").innerText = a;
  document.getElementById("result").innerText = "You won the game!";
  document.getElementById("result").style.background = "green";
  document.getElementById("result").style.color = "black";
};

const compwon = () => {
  b++;
  document.getElementById("comp-score").innerText = b;
  document.getElementById("result").innerText = "You Lost the game";
  document.getElementById("result").style.background = "red";
  document.getElementById("result").style.color = "black";
};

const draw = () => {
  document.getElementById("result").innerText = "Game draw..try again";
  document.getElementById("result").style.background = "yellow";
  document.getElementById("result").style.color = "black";
};
