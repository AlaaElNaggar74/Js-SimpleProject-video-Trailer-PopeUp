let butt = document.getElementById("butt");
let imgandpic = document.getElementById("imgandpic");
let videoplay = document.getElementById("viddiv");
let iconn = document.getElementById("iconn");
let buttbac = document.getElementById("buttbac");

let video = document.getElementById("videoplay");

let veidoSorce = document.getElementById("veidoSorce");
let veidoSorce2 = document.getElementById("veidoSorc2");

videoplay.style.display = "none";

butt.addEventListener("click", () => {

  
  imgandpic.style.display = "none";
  videoplay.style.display = "flex";

});

buttbac.addEventListener("click", () => {
  imgandpic.style.display = "block";
  videoplay.style.display = "none";

  video.pause();
});

iconn.addEventListener("click", () => {
  imgandpic.style.display = "block";
  videoplay.style.display = "none";

  video.pause();
});
