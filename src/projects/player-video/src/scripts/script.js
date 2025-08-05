let listVideos = document.querySelectorAll(".video-list .vid");
let mainVideo = document.querySelector(".main-video video");
let title = document.querySelector(".main-video .title");

listVideos.forEach(video => {

    video.onclick = () => {

        listVideos.forEach(vid => vid.classList.remove("active"));

        video.classList.add("active");

        if (video.classList.contains("active")) {

            let src = video.children[1].getAttribute('src');
            mainVideo.src = src;

            let text = video.children[2].innerText;
            title.innerHTML = text;
        }

    }
})