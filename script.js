// Animasi Bounce untuk "Hello Everyone!!"
const helloText = document.getElementById("helloText");

function bounceHello() {
  helloText.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-20px)" },
      { transform: "translateY(0)" }
    ],
    {
      duration: 1000,        // 1 detik
      iterations: Infinity,  // looping terus
      easing: "ease-in-out"
    }
  );
}

window.addEventListener("load", bounceHello);

// Typing Effect untuk Nama
const text = "Nurraflina Novianti Syafitri";
let index = 0;
const speed = 120;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typingName").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(() => {
      document.getElementById("typingName").innerHTML = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}

window.onload = typeEffect;

// Animasi Fade In + Slide dari kiri untuk Foto Profil
const profileImg = document.getElementById("profileImg");

window.addEventListener("load", () => {
  profileImg.animate(
    [
      { opacity: 0 }, // awal transparan
      { opacity: 1 }, // muncul penuh
      { opacity: 1 }  // tahan di posisi akhir
    ],
    {
      duration: 7000,        // total 4 detik (fade in 1.2s + stay 2.8s)
      iterations: Infinity,  // looping
      easing: "ease-in-out"
    }
  );
});

// Animasi Bounce untuk judul "Find Me on Social Media"
const socialTitle = document.getElementById("socialTitle");

function bounceSocialTitle() {
  socialTitle.animate(
    [
      { transform: "translateY(0)" },     // posisi normal
      { transform: "translateY(-15px)" }, // naik
      { transform: "translateY(0)" }      // turun lagi
    ],
    {
      duration: 1000,        // 1 detik
      iterations: Infinity,  // looping terus
      easing: "ease-in-out"
    }
  );
}

window.addEventListener("load", bounceSocialTitle);
