/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div,video_id) {
  var video = document.getElementById("video").src;
  document.getElementById("video").src = video+'&autoplay=1'; // adding autoplay to the URL
  document.getElementById("video").style.display = 'block';
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div,video_id) {
  var video = document.getElementById("video").src;
  var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
  document.getElementById("video").src = cleaned;
  document.getElementById("video").style.display = 'none';
}
