
document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("background-music");
  
    // Wait for the audio to be loaded
    audioElement.addEventListener("loadedmetadata", function() {
      // Check if audio duration is at least 20 seconds
      if (audioElement.duration >= 20) {
        // Set the starting time to 21 seconds
        audioElement.currentTime = 20;
        // Play the audio
        audioElement.play();
      }
    });
  });
  

  