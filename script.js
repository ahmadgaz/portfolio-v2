const dynamicityCanvas = document.getElementById("dynamicity");
const speedCanvas = document.getElementById("speed");
const adaptabilityCanvas = document.getElementById("adaptability");

const dynamicityCtx = dynamicityCanvas.getContext("2d");
const speedCtx = speedCanvas.getContext("2d");
const adaptabilityCtx = adaptabilityCanvas.getContext("2d");

const dynamicityFrameCount = 91;
const speedFrameCount = 61;
const adaptabilityFrameCount = 91;

const serverURL = ".";
const dynamicityImages = [];
const speedImages = [];
const adaptabilityImages = [];
for (let i = 1; i <= dynamicityFrameCount; i++) {
  const img = new Image();
  img.src = `${serverURL}/dynamicity/${i}.jpg`;
  dynamicityImages.push(img);
}
for (let i = 1; i <= speedFrameCount; i++) {
  const img = new Image();
  img.src = `${serverURL}/speed/${i}.jpg`;
  speedImages.push(img);
}
for (let i = 1; i <= adaptabilityFrameCount; i++) {
  const img = new Image();
  img.src = `${serverURL}/adaptability/${i}.jpg`;
  adaptabilityImages.push(img);
}
dynamicityImages[0].onload = () => {
  dynamicityCanvas.height =
    dynamicityCanvas.width *
    (dynamicityImages[0].height / dynamicityImages[0].width);
};
speedImages[0].onload = () => {
  speedCanvas.height =
    speedCanvas.width * (speedImages[0].height / speedImages[0].width);
};
adaptabilityImages[0].onload = () => {
  adaptabilityCanvas.height =
    adaptabilityCanvas.width *
    (adaptabilityImages[0].height / adaptabilityImages[0].width);
};

const updateDynamicityCanvas = (index) => {
  const img = dynamicityImages[index];
  if (img.complete) {
    dynamicityCtx.clearRect(
      0,
      0,
      dynamicityCanvas.width,
      dynamicityCanvas.height,
    );
    dynamicityCtx.drawImage(
      img,
      0,
      0,
      dynamicityCanvas.width,
      dynamicityCanvas.width * (img.height / img.width),
    );
  }
};
const updateSpeedCanvas = (index) => {
  const img = speedImages[index];
  if (img.complete) {
    speedCtx.clearRect(0, 0, speedCanvas.width, speedCanvas.height);
    speedCtx.drawImage(
      img,
      0,
      0,
      speedCanvas.width,
      speedCanvas.width * (img.height / img.width),
    );
  }
};
const updateAdaptabilityCanvas = (index) => {
  const img = adaptabilityImages[index];
  if (img.complete) {
    adaptabilityCtx.clearRect(
      0,
      0,
      adaptabilityCanvas.width,
      adaptabilityCanvas.height,
    );
    adaptabilityCtx.drawImage(
      img,
      0,
      0,
      adaptabilityCanvas.width,
      adaptabilityCanvas.width * (img.height / img.width),
    );
  }
};

const updateImage = (
  index,
  frameCount,
  lastTime,
  currentTime,
  updateCanvas,
) => {
  const delta = currentTime - lastTime;
  if (delta < 1000 / 30) {
    requestAnimationFrame(() =>
      updateImage(
        index,
        frameCount,
        lastTime,
        new Date().getTime(),
        updateCanvas,
      ),
    );
    return;
  }
  updateCanvas(index);
  if (index < frameCount - 1) {
    requestAnimationFrame(() =>
      updateImage(
        index + 1,
        frameCount,
        new Date().getTime(),
        new Date().getTime(),
        updateCanvas,
      ),
    );
  } else {
    requestAnimationFrame(() =>
      updateImage(
        0,
        frameCount,
        new Date().getTime(),
        new Date().getTime(),
        updateCanvas,
      ),
    );
  }
};

const startAnimation = () => {
  updateImage(
    0,
    dynamicityFrameCount,
    new Date().getTime(),
    new Date().getTime(),
    updateDynamicityCanvas,
  );
  updateImage(
    0,
    speedFrameCount,
    new Date().getTime(),
    new Date().getTime(),
    updateSpeedCanvas,
  );
  updateImage(
    0,
    adaptabilityFrameCount,
    new Date().getTime(),
    new Date().getTime(),
    updateAdaptabilityCanvas,
  );
};
startAnimation();
