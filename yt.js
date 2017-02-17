  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  function onYouTubeIframeAPIReady(click) {
    player = new YT.Player('player', {
      playerVars: { 
      listType:'playlist',
      list: 'PLrEnWoR732-BHrPp_Pm8_VleD68f9s14-',
      index: parseInt(0),
      startSeconds:60,
      endSeconds:600},
      height: '390',
      width: '568',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }

  function onPlayerReady(click) {
     event.target.playVideo();
  }
  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
   setTimeout(pauseVideo, 60000);
      done = true;
    }
  }
  function pauseVideo() {
    player.pauseVideo();
  }
