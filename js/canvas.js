var cloudCanvas = document.getElementById("cloudCanvas");
var ctx = cloudCanvas.getContext("2d");

cloudCanvas.height = innerHeight - innerHeight * 0.2;
cloudCanvas.width = innerWidth;

let cloudPosX = [
  innerWidth * Math.random(),
  innerWidth * Math.random(),
  innerWidth * Math.random(),
  innerWidth * Math.random(),
];
let cloudPosY = [
  innerHeight * (Math.random() * 0.95),
  innerHeight * (Math.random() * 0.95),
  innerHeight * (Math.random() * 0.95),
  innerHeight * (Math.random() * 0.95),
];
let cloudMultipliers = [0.5, 0.2, 0.4, 0.6];

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
  cloudPosX[0] += e.deltaY * cloudMultipliers[0];
  cloudPosX[1] += e.deltaY * cloudMultipliers[1];
  cloudPosX[2] += e.deltaY * cloudMultipliers[2];
  cloudPosX[3] += e.deltaY * cloudMultipliers[3];
  console.log(window.scrollY);

  cloudPosX.forEach((pos, i) => {
    if (pos > cloudCanvas.width) {
      cloudPosX[i] = 0;
      cloudPosY[i] = cloudCanvas.height * (Math.random() * 0.95);
    } else if (pos < 0) {
      cloudPosX[i] = cloudCanvas.width;
      cloudPosY[i] = cloudCanvas.height * (Math.random() * 0.95);
    }
  });

  animate();
});

// function animate() {
//   ctx.clearRect(0, 0, cloudCanvas.width, cloudCanvas.height);
//   ctx.drawImage(img, cloudPosX[0], cloudPosY[0]);
//   ctx.drawImage(img, cloudPosX[1], cloudPosY[1]);
//   ctx.drawImage(img, cloudPosX[2], cloudPosY[2]);
//   ctx.drawImage(img, cloudPosX[3], cloudPosY[3]);
// }

function animate() {
  ctx.clearRect(0, 0, cloudCanvas.width, cloudCanvas.height);

  const cloudHeight = 50; // Fixed cloud height in pixels
  const aspectRatio = img.width / img.height; // Get the aspect ratio of the cloud image
  const cloudWidth = cloudHeight * aspectRatio; // Calculate the width based on the aspect ratio

  ctx.drawImage(img, cloudPosX[0], cloudPosY[0], cloudWidth, cloudHeight);
  ctx.drawImage(img, cloudPosX[1], cloudPosY[1], cloudWidth, cloudHeight);
  ctx.drawImage(img, cloudPosX[2], cloudPosY[2], cloudWidth, cloudHeight);
  ctx.drawImage(img, cloudPosX[3], cloudPosY[3], cloudWidth, cloudHeight);
}
