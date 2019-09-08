var browserWidth = window.innerWidth;

if (browserWidth > 650) {
    var heart = document.getElementById("heart");
    var numLikes = document.getElementById("likes");
} else {
    var heart = document.getElementById("heart_phone");
    var numLikes = document.getElementById("likes_phone");
}

heart.addEventListener("click", () => {
    if (numLikes.textContent == 1) {
        numLikes.textContent = 0;
        heart.classList.add('far');
        heart.classList.remove('fas');
    } else if (numLikes.textContent == 0) {
        numLikes.textContent = 1;
        heart.classList.add('fas');
        heart.classList.remove('far');
    }
});
