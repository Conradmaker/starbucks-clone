const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  //id = player찾는다
  new YT.Player("player", {
    videoId: "TzyjI4WQPJs",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "TzyjI4WQPJs",
    },
    events: {
      onReady: (event) => {
        event.target.mute();
      },
    },
  });
}
