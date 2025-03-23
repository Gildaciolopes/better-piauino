window.onload = function () {
  const img = document.getElementById("robot-arm");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  ctx.drawImage(img, 0, 0);

  ctx.globalCompositeOperation = "source-in";

  ctx.fillStyle = "#007bff"; // Azul

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  img.src = canvas.toDataURL();
};
