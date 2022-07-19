var cloudCanvas = document.getElementById("cloudCanvas");
var ctx = cloudCanvas.getContext("2d");

cloudCanvas.height = innerHeight - 20;
cloudCanvas.width = innerWidth;

let carPosX = [
  innerWidth * Math.random(),
  innerWidth * Math.random(),
  innerWidth * Math.random(),
  innerWidth * Math.random(),
];
let carPosY = [
  innerHeight * (Math.random() * 0.95),
  innerHeight * (Math.random() * 0.95),
  innerHeight * (Math.random() * 0.95),
  innerHeight * (Math.random() * 0.95),
];
let carMultipliers = [0.5, 0.2, 0.4, 0.6];

addEventListener("resize", () => {
  cloudCanvas.height = innerHeight - 20;
  cloudCanvas.width = innerWidth;
  animate();
});

var img = new Image(); // Create new img element
img.alt = "unfortunate";
img.src = "../imgs/smallCloud.png"; // Set source path
img.onload = () => {
  console.log(img);
  animate();
};

document.addEventListener("wheel", (e) => {
  carPosX[0] += e.deltaY * carMultipliers[0];
  carPosX[1] += e.deltaY * carMultipliers[1];
  carPosX[2] += e.deltaY * carMultipliers[2];
  carPosX[3] += e.deltaY * carMultipliers[3];
  console.log(window.scrollY);

  carPosX.forEach((pos, i) => {
    if (pos > cloudCanvas.width) {
      carPosX[i] = 0;
      carPosY[i] = cloudCanvas.height * (Math.random() * 0.95);
    } else if (pos < 0) {
      carPosX[i] = cloudCanvas.width;
      carPosY[i] = cloudCanvas.height * (Math.random() * 0.95);
    }
  });

  animate();
});

function animate() {
  ctx.clearRect(0, 0, cloudCanvas.width, cloudCanvas.height);
  ctx.drawImage(img, carPosX[0], carPosY[0]);
  ctx.drawImage(img, carPosX[1], carPosY[1]);
  ctx.drawImage(img, carPosX[2], carPosY[2]);
  ctx.drawImage(img, carPosX[3], carPosY[3]);
}
