let heart = document.getElementById("heart");
let num_likes = document.getElementById("likes");

heart.addEventListener("click", () => {
    if(num_likes.textContent == 1){
        num_likes.textContent = 0;
        heart.classList.add('far'); 
        heart.classList.remove('fas');
    }
    else if(num_likes.textContent == 0){
        num_likes.textContent = 1;
        heart.classList.add('fas');
        heart.classList.remove('far');
    }
});