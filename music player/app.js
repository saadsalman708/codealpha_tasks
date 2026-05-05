const artistInput = document.querySelector("#artist");
const audioTag = document.querySelector("#audioTag");
const currentDurationInput = document.querySelector("#currentDuration");
const durationInput = document.querySelector("#duration");
const nextBtn = document.querySelector("#nextBtn");
const pervBtn = document.querySelector("#pervBtn");
const progressBar = document.querySelector("#progressBar");
const progressBarContainer = document.querySelector("#progressBarContainer");
const playListBox = document.querySelector("#playListBox");
const playStopBtn = document.querySelector("#playStopBtn");
const shuffleBtn = document.querySelector("#shuffleBtn");
const titleInput = document.querySelector("#title");
const replayBtn = document.querySelector("#replayBtn");
const volumnBar = document.querySelector("#volumnBar");
const volumnBarContainer = document.querySelector("#volumnBarContainer");

let currentSongIdx = 0;


// const songs = [
//     {
//         title: "Majboor",
//         artist: "Sheheryar Rehan and Zoha Waseem",
//         duration: "0:47",
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/8001131.mp3?m=FREE&mp3=.mp3&startTime=1777814888&endTime=1777831088&token=BlO4yw40k32j6_Z3dDOhyaH9iDWjK0evawXuNxmkK0A="
//     },
//     {
//         title: "Gal Sun",
//         artist: "Rackstar and Sabat Batin",
//         duration: 0,
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/8006218.mp3?m=FREE&mp3=.mp3&startTime=1777815488&endTime=1777831688&token=9AtoVwZ1fxLZspgjO0wKszmwRhH1K6R3BLnybHqvfuc="
//     },
//     {
//         title: "Wishes",
//         artist: "Hasan Raheem, Talwiinder, and Umair",
//         duration: "03:34",
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/7970875.mp3?m=FREE&mp3=.mp3&startTime=1777811672&endTime=1777827872&token=5CggW56vtMGJMPVTaY8bJkigYzOnf_RWLPqbT6YbToI="
//     },
//     {
//         title: "Jhol",
//         artist: "Annural Khalid and Maanu",
//         duration: 0,
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/7951246.mp3?m=0&mp3=.mp3&startTime=1777811742&endTime=1777827942&token=svWyUufhT5ibhtDs_SsXHqvGvm0NPydMx7ZFzu4fmKU="
//     },
//     {
//         title: "BlockBuster",
//         artist: "Lp",
//         duration: 0,
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/7949440.mp3?m=0&mp3=.mp3&startTime=1777816102&endTime=1777832302&token=CWLiTANgIQyV6i1LOXiACuwkv9uCfe885BdnsIJ-3K0="
//     },
//     {
//         title: "Meri Zindagi Hai Tu",
//         artist: "Asim Azhar and Sabri Sisters",
//         duration: "0:47",
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/8006670.mp3?m=FREE&mp3=.mp3&startTime=1777811111&endTime=1777827311&token=nIDTIb6JJ2HFinDwtPmBa5fsT4jmYbvvH4M82Gc7FYM="
//     },
//     {
//         title: "Par Ab Jo Aayegi Tu",
//         artist: "Lp",
//         duration: "03:04",
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/7971168.mp3?m=FREE&mp3=.mp3&startTime=1777814182&endTime=1777830382&token=vR1uNUEuwiaI6acIoBCVswOtQqZI00NYpZtatApR5t0="
//     },
//     {
//         title: "Pal Pal",
//         artist: "pp",
//         duration: "02:27",
//         path: "https://audiofoc.bajao.pk/bajaostrm/320/7966953.mp3?m=0&mp3=.mp3&startTime=1777811525&endTime=1777827725&token=WquF1gDkqhKBEifAsNfUYLN-_Lne8IiRRpOfvFhNkKc="
//     },
//     {
//         title: "m",
//         artist: "m",
//         duration: 0,
//         path: "./assets/m.mp3"
//     },
//     {
//         title: "nn",
//         artist: "nn",
//         duration: 0,
//         path: "./assets/nn.mp3"
//     },
//     {
//         title: "s",
//         artist: "s",
//         duration: 0,
//         path: "./assets/s.mp3"
//     },
//     {
//         title: "T",
//         artist: "T",
//         duration: 0,
//         path: "./assets/T.mp3"
//     },
//     {
//         title: "y&i",
//         artist: "y&i",
//         duration: 0,
//         path: "./assets/y&i.mp3"
//     },
// ];





const songs = [
    {
        title: "23",
        artist: "23",
        duration: 0,
        path: "./assets/23.mp3"
    },
    {
        title: "LLg",
        artist: "LLg",
        duration: 0,
        path: "./assets/LLg.mp3"
    },
    {
        title: "d",
        artist: "d",
        duration: 0,
        path: "./assets/d.mp3"
    },
    {
        title: "Lp",
        artist: "Lp",
        duration: 0,
        path: "./assets/Lp.mp3"
    },
    {
        title: "guilty",
        artist: "guilty",
        duration: 0,
        path: "./assets/guilty.mp3"
    },
    {
        title: "pp",
        artist: "pp",
        duration: 0,
        path: "./assets/pp.mp3"
    },
    {
        title: "m",
        artist: "m",
        duration: 0,
        path: "./assets/m.mp3"
    },
    {
        title: "nn",
        artist: "nn",
        duration: 0,
        path: "./assets/nn.mp3"
    },
    {
        title: "s",
        artist: "s",
        duration: 0,
        path: "./assets/s.mp3"
    },
    {
        title: "T",
        artist: "T",
        duration: 0,
        path: "./assets/T.mp3"
    },
    {
        title: "y&i",
        artist: "y&i",
        duration: 0,
        path: "./assets/y&i.mp3"
    },
];

let queue = [...songs];






// https://developers.deezer.com/api                 // website for api
// https://api.deezer.com/user/2529/playlists
// https://api.deezer.com/playlist/15246375503



// const getSongs = async () => {
//     // const res = await fetch("https://api.deezer.com/playlist/15246375503");
//     // const res = await fetch("https://api.deezer.com/user/54321/playlists");
//     const res = await fetch("https://api.allorigins.win/raw?url=https://api.deezer.com/playlist/15246375503");
//     const data = await res.json;
//     // console.log( JSON.parse(data) );
//         console.log(data);
//         console.log(await res.json);
//         console.log(await res.json());
    
// }

// getSongs()








const getSongs = async () => {
    const res = await fetch(
        "https://saavn.dev/api/search/songs?query=eminem"
    );

    const data = await res.json();

    console.log(data.data.results);

    const songs = data.data.results.map(song => ({
        title: song.name,
        artist: song.primaryArtists,
        image: song.image[2]?.link,
        url: song.downloadUrl?.[4]?.link // high quality stream URL (sometimes works)
    }));

    console.log(songs);
};

getSongs();








// const fetchSongs = async () => {
// const url = encodeURIComponent("https://api.deezer.com/playlist/15246375503");

// // fetch(`https://thingproxy.freeboard.io/fetch/${url}`)

//     // const res = await fetch(`https://thingproxy.freeboard.io/fetch/${url}`);
//     // const res = await fetch(`https://api.allorigins.win/get?url=${url}`);
//     const data = await res.json();    

//     const parsed = JSON.parse(data.contents);

//     const tracks = parsed.tracks.data.map(track => ({
//         title: track.title,
//         artist: track.artist.name,
//         preview: track.preview,
//         duration: track.duration
//     }));

//     queue = tracks;

//     renderPlayList();
//     loadSong();
// };

// fetchSongs();














const shuffleQueue = () => {
    const currentSong = queue[currentSongIdx];

    let rest = queue.filter((_, i) => i !== currentSongIdx);

    for (let i = rest.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [rest[i], rest[j]] = [rest[j], rest[i]];
    }

    queue = [currentSong, ...rest];
    currentSongIdx = 0;
    renderPlayList();
    const currentSongFromPlayList = document.getElementById(currentSongIdx);
    currentSongFromPlayList.classList.add("highlight");
    // playListBox.children[currentSongIdx].classList.add("highlight");
};


const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
};



const loadSong = (i = currentSongIdx) => {
    const { title, artist, path, duration } = queue[i];
    titleInput.innerHTML = title;
    artistInput.innerHTML = artist;
    audioTag.src = path;
    audioTag.onloadedmetadata = () => {
        durationInput.innerHTML = formatTime(audioTag.duration);
    };

    const currentActive = document.querySelector(".highlight");
    if (currentActive) {
        currentActive.classList.remove("highlight");
    };
    // playListBox.children[i].classList.add("highlight");    
    const currentSongFromPlayList = document.getElementById(i);
    currentSongFromPlayList.classList.add("highlight");

    progressBar.style.width = "0%";
    currentDurationInput.innerHTML = "00:00";
};



const changeIndex = (direction) => {
    if (direction === "+") {
        currentSongIdx = currentSongIdx >= queue.length - 1 ? 0 : currentSongIdx + 1;
    } else  {
        currentSongIdx = currentSongIdx <= 0 ? queue.length - 1 : currentSongIdx - 1;
    }

    loadMaybePlay();
};



const loadMaybePlay = (shouldPlay = false)=> {
    // shouldPlay => decides should next songs play

    const isPlaying = !audioTag.paused;

    loadSong();
    if (isPlaying || shouldPlay) audioTag.play();
};



const playThisSong = (i)=> {
    currentSongIdx = i;
    loadMaybePlay(true);
};



const calculateProgressRatio = (e) => {
    const rect = progressBarContainer.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width;
    const progress = Math.max(0, Math.min(1, relativeX));
    return Math.floor(progress * 100);
};



const renderPlayList = () => {

    const s = queue.map(({ title, artist } , index) => {
        return `
                <div id="${index}" onclick="playThisSong(${index})">
                    <div>imaag</div>
                    <div>
                        <span>${title}</span>
                        <br />
                        <span>${artist}</span>
                    </div>
                </div>
                `;
    }).join("");

    playListBox.innerHTML = s;
};




audioTag.addEventListener("timeupdate", () => {
    const percentage = (audioTag.currentTime / audioTag.duration) * 100;
    progressBar.style.width = `${percentage}%`;
    currentDurationInput.innerHTML = formatTime(audioTag.currentTime);
});



audioTag.addEventListener("play", () => {
    playStopBtn.textContent = "Pause";
});



audioTag.addEventListener("pause", () => {
    playStopBtn.textContent = "Play";
});



audioTag.addEventListener("ended", () => {
    changeIndex("+");
    loadMaybePlay(true);   // true = should play next song
});



progressBarContainer.addEventListener("click", (e) => {
    const progress = calculateProgressRatio(e);
    progressBar.style.width = `${progress}%`;
    audioTag.currentTime = progress / 100 * audioTag.duration;
    currentDurationInput.innerHTML = formatTime(audioTag.currentTime);
});



volumnBarContainer.addEventListener("click", (e) => {
    const progress = calculateProgressRatio(e);
    volumnBar.style.width = `${progress}%`;
    audioTag.volume = progress / 100;
});



const togglePlay = () => {
    if (audioTag.paused) {
        audioTag.play();
    } else {
        audioTag.pause();
    }
};


shuffleBtn.addEventListener("click" , () => shuffleQueue());
playStopBtn.addEventListener("click", () => togglePlay());
pervBtn.addEventListener("click", () => changeIndex("-"));
nextBtn.addEventListener("click", () => changeIndex("+"));
replayBtn.addEventListener("click", () => {
    audioTag.currentTime = 0;
    audioTag.play();
});


addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.key.toLocaleLowerCase() === "f" || e.key.toLocaleLowerCase() === "p") {
        togglePlay();
    };
    if (e.key === "ArrowRight" || (e.shiftKey && e.key.toLocaleLowerCase() === "n") ) {
        changeIndex("+");
    }
    if (e.key === "ArrowLeft" || (e.shiftKey && e.key.toLocaleLowerCase() === "n") ) {
        changeIndex("-");
    }
});



renderPlayList();
loadSong();