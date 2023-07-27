let counterValue = 0;
let likeCount= 0;
let timerId = setInterval(increment, 1000);
let isPaused = false;

function updateCounter() {
    document.getElementById('counter').innerText = counterValue;
}

function updateLikeCount() {
    document.getElementById('likeCount').innerText = `Likes: ${likeCount}`;
}

function increment() {
    counterValue++;
    updateCounter()
}

function decrement() {
    counterValue--;
    updateCounter();
}

function like() {
    likeCount++;
    updateCounter();
}


function pauseResume() {
    if (isPaused) {
        timerId = setInterval(increment, 1000);
        document.querySelectorAll('.button:not(:last-child)').forEach(button => button.disabled = false);
        document.getElementById('pause').innerText = "Pause";
      } else {
        clearInterval(timerId);
        document.querySelectorAll('.button:not(:last-child)').forEach(button => button.disabled = true);
        document.getElementById('pause').innerText = "Resume";
      }
      isPaused = !isPaused;
    }

function addComment(e) {
    e.preventDefault();
    const comment = document.getElementById('comment-input').value.trim();
    if (comment !== '') {
      const commentSection = document.createElement('div');
      commentSection.innerText = comment;
      document.getElementById('list').appendChild(commentSection);
      document.getElementById('comment-input').value = '';
    }
  }

  function addLikes(e) {
    const heartlike = document.getElementById('heart')
    const likesmessage = document.createElement('li');
    likesmessage.innerText = counterValue + " has been liked"
    document.getElementsByClassName('likes')[0].appendChild(likesmessage);
  }

document.getElementById('plus').addEventListener('click', increment);
document.getElementById('minus').addEventListener('click', decrement);
document.getElementById('heart').addEventListener('click', addLikes);
document.getElementById('pause').addEventListener('click', pauseResume);
document.getElementById('comment-form').addEventListener('submit', addComment)

