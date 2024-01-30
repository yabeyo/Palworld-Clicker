let display1 = document.querySelector("#counter");

let display2 = document.querySelector("#woodCounter");

let display3 = document.querySelector("#rockCounter");

let count1 = 0;

let count2 = 0;

let count3 = 0;

if (localStorage.getItem('count1')){
count1=localStorage.getItem('count1');
}

if (localStorage.getItem('count2')){
count2=localStorage.getItem('count2');
}

if (localStorage.getItem('count3')){
count3=localStorage.getItem('count3');
}




let counter = document.querySelector("#image");

let box1 = document.querySelector("#image1");

let box2 = document.querySelector("#image2");

updateDisplay();

counter.addEventListener("click", () => {
  count1++; localStorage.setItem('count1',count1);
  updateImage();
  updateDisplay();
});

box1.addEventListener("click", () => {
  if (count1 >= 20) {
    count1 = count1 - 20;
localStorage.setItem('count1',count1);
    count2++;
localStorage.setItem('count2',count2);
    updateDisplay();
  }
  alert("You bought a log");
  updateImage();
  updateDisplay();
});

box2.addEventListener("click", () => {
  if (count1 >= 40) {
    count1 = count1 - 40;
  localStorage.setItem('count1',count1);
    count3++;
  localStorage.setItem('count3',count3);
  }
  alert("You bought a rock");
  updateImage();
  updateDisplay();
});

function updateDisplay() {
  display1.innerHTML = count1;
  display2.innerHTML = count2;
  display3.innerHTML = count3;
}

function updateImage() {
  if (count1 < 20) {
    if (box1.classList.contains("coverImage1")) {
      box1.classList.remove("coverImage1");
    }
  }
  if (count1 < 40) {
    if (box2.classList.contains("coverImage2")) {
      box2.classList.remove("coverImage2");
    }
  }
   if (count1 >= 20) {
    box1.classList.add("coverImage1");
  }
  if (count1 < 20) {
    if (box1.classList.contains("coverImage1")) {
      box1.classList.remove("coverImage1");
    }
  }
  if (count1 >= 40) {
    box2.classList.add("coverImage2");
  }
  if (count1 < 40) {
    if (box2.classList.contains("coverImage2")) {
      box2.classList.remove("coverImage2");
    }
  }
}
