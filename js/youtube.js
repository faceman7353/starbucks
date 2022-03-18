// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'oJzTCS2fHNs', //최초 재생할 유튜브영상 ID
    playerVars:{
        autoplay:true, // 자동재생유무
        loop:true,  //반복재생유무
        playlist: 'oJzTCS2fHNs'    //반복재생할 유튜브 영상 ID목록
    },
    events:{
        onReady:function(event){
            event.target.mute() //음소거
        }
    }
    });
}



// new YT.Player('player' - 여기서 Player는 index.html에서 작성한 youtube안에 player 선택자를 의미