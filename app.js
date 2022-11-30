
let imageElement = document.querySelector(".slide");

setInterval(() => {
  let src = imageElement.getAttribute("src");
  if (
    src === "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
  ) {
    imageElement.setAttribute(
      "src",
      "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
    );
    imageElement.style.width = "30%";
    imageElement.style.marginLeft = "33%";
    document.body.style.backgroundColor = "blue";
  }
  if (src === "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg") {
    imageElement.setAttribute(
      "src",
      "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
    );
    document.body.style.backgroundColor = "green";
  }
}, 2000);

console.log();