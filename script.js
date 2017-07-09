window.addEventListener('DOMContentLoaded', function(){

  var audio = document.getElementById('audio'); // get audio player

  const btns = document.querySelectorAll('.btn'); // get all elements with btn class
  for(const button of btns) { // for every button of btns do the following:
    button.addEventListener('click', function(){ //pay attention when a click is done
      audio.src = 'sounds/' + this.getAttribute('data-url'); // build URL based on this buttons data-url attribute from HTML
      audio.currentTime = 0; // this resets the audio - put it back to the start position
      audio.play(); //play audio
    });
  }

  document.body.addEventListener('keydown', function(event){ //listen for all key presses in the body
    const button = document.querySelector('.btn[data-key="' + event.key + '"]'); // get button that has data-key attribute of the current key
    if (button) { // if there's a button for this key
      button.click(); //trigger the play
    }
  });


});
