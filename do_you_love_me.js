const questionContainer = document.querySelector(".question-container");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Change the position of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight); // Use offsetHeight for vertical movement
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality - NOW REDIRECTS
yesBtn.addEventListener("click", () => {
  // Redirect to the birthday cake page
  window.location.href = 'birthday-cake.html';
});