
const inputs = document.querySelectorAll(".input");

function checkpoint1() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function checkpoint2() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", checkpoint1);
  input.addEventListener("blur", checkpoint2);
});

