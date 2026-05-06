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



const songs = [

];



let queue = [...songs];





// https://deezer.com/playlist/15246375503       // my play list





const links = [
    "https://www.jiosaavn.com/album/pal-pal-talwiinder-verse/v4aj0bqS9Ow_",
    "https://www.jiosaavn.com/album/pal-pal/CjBcfBNTfgM",
    "https://www.jiosaavn.com/song/majboor-x-pal-pal/IBARSyZ4VEI",
    "https://www.jiosaavn.com/song/kashish/QQoDdjNzelU",
    "https://www.jiosaavn.com/song/arz-kiya-hai-%7c-coke-studio-bharat/EwQCHCQCR0Y",
    "https://www.jiosaavn.com/song/humnava-mere/PAJbazcHews",
    "https://www.jiosaavn.com/song/dil-galti-kar-baitha-hai-feat.-mouni-roy/MywKBk0FVHI",
    "https://www.jiosaavn.com/song/jo-tum-mere-ho/CiYvbiZbcnc",
    "https://www.jiosaavn.com/song/shayad/LxohXBZ7ZGM",
    "https://www.jiosaavn.com/song/apna-bana-le/OC4iXh8HdAA",
    "https://www.jiosaavn.com/song/mann-mera-original-version/JF48Bwx1eFY",
    "https://www.jiosaavn.com/song/husn/KFgRSTx4UUA",
    "https://www.jiosaavn.com/song/let-her-go-x-husn/JzoKCTFcUGY",
    "https://www.jiosaavn.com/song/soulmate/RxECACNjWns",
    "https://www.jiosaavn.com/song/pehle-bhi-main/QQ1bdBoHbms",
    "https://www.jiosaavn.com/song/hua-main/Fl8HXENfU1c",
    "https://www.jiosaavn.com/song/satranga/RAUjZAJ6A0Y",
    "https://www.jiosaavn.com/song/saari-duniya-jalaa-denge/N14ZCEV9UF8",
    "https://www.jiosaavn.com/song/ve-kamleya-from-rocky-aur-rani-kii-prem-kahaani/KQ9YeiVDfkc",
    "https://www.jiosaavn.com/song/labon-ko/BwIKHEFJRFE",
    "https://www.jiosaavn.com/song/phir-bhi-tumko-chaahunga/OQQJQBJ4fGc",
    "https://www.jiosaavn.com/song/heeriye-feat.-arijit-singh/PiECVR10DlQ",
    "https://www.jiosaavn.com/song/tere-ishk-mein/Rxgcdg0dAEQ",
    "https://www.jiosaavn.com/song/dil-ibaadat/HgdfZERjZwM",
    "https://www.jiosaavn.com/song/tu-hi-haqeeqat/JwEndwJYbkM",
    "https://www.jiosaavn.com/song/omeri-laila/ADEeQjNcAnQ",
    "https://www.jiosaavn.com/song/apna-bana-le/ATIfejZ9bWw",
    "https://www.jiosaavn.com/song/millionaire/I1g,BEAGbmA",
    "https://www.jiosaavn.com/song/aaj-ki-raat/IV4HARUADko",
    "https://www.jiosaavn.com/song/shararat/Ozg,SDFFe2A",
    "https://www.jiosaavn.com/song/dil-kaa-jo-haal-hai/KAMufBtkaAs",
    "https://www.jiosaavn.com/song/gali-gali/RDgkVhNqbWw",
    "https://www.jiosaavn.com/song/laal-pari/IR8AaCFec1U",
    "https://www.jiosaavn.com/song/dilbar/Byc-YRsJelA",
    "https://www.jiosaavn.com/song/paisa-hai-toh/NjI7WQRRQXo",
    "https://www.jiosaavn.com/song/payal/AD0zfk0Dc2M",
    "https://www.jiosaavn.com/song/hale-dil/JjIPCRdUcHw",
    "https://www.jiosaavn.com/song/ye-tune-kya-kiya/AzoNaQZ8fgA",
    "https://www.jiosaavn.com/song/zihaal-e-miskin/OQAgUxlXTmM",
    "https://www.jiosaavn.com/song/ishq/GhBZdkd9XV8",
    "https://www.jiosaavn.com/song/o-maahi/BwsYdR1jRHI",
    "https://www.jiosaavn.com/song/sanam-teri-kasam/GB4-dAV4WFs",
    "https://www.jiosaavn.com/song/uska-hi-banana/FwNefRFvc3w",
    "https://www.jiosaavn.com/song/mann-mera/NTc0RBtfekM",
    "https://www.jiosaavn.com/song/akhiyaan-gulaab/CiwRZiVmXFE",
    "https://www.jiosaavn.com/song/kabhi-jo-baadal-barse/R0VTAQFkBVE",
    "https://www.jiosaavn.com/song/ijazat/XRk0aDAAWQU",
    "https://www.jiosaavn.com/song/bol-kaffara-kya-hoga/N1opYBpmDmo",
    "https://www.jiosaavn.com/song/ae-dil-hai-mushkil-title-track/Cg0AdD0DeQU",
    "https://www.jiosaavn.com/song/lo-maan-liya/NVBTaA5lRgQ",
    "https://www.jiosaavn.com/song/ek-din-teri-raahon/XTwnVgBURkQ",
    "https://www.jiosaavn.com/song/barbaad/IV9ZUidnXUI",
    "https://www.jiosaavn.com/song/saiyaara/O18beQR2eX8",
    "https://www.jiosaavn.com/song/tum-ho-toh/IiUFeQ1ABXA",
    "https://www.jiosaavn.com/song/humsafar/AQ9GfhdGegU",
    "https://www.jiosaavn.com/song/dhun/O1AsaTx2Alg",
    "https://www.jiosaavn.com/song/saiyaara-reprise-female/MlosQDFDBVQ",
    "https://www.jiosaavn.com/song/barbaad-reprise-female/RUUvekUEaGU",
    "https://www.jiosaavn.com/song/zaalima/IglSd0FCY3c",
    "https://www.jiosaavn.com/song/sahiba/Bzc5ei0BZHg",
    "https://www.jiosaavn.com/song/paaro/FSQjWhZVUwY",
    "https://www.jiosaavn.com/song/samjho-na/BCVcYD1jVH0",
    "https://www.jiosaavn.com/song/dil-mein-chhupa-loonga/GzBYYTdgXWs",
    "https://www.jiosaavn.com/song/sanam-re/AgElcxJ6BGM",
    "https://www.jiosaavn.com/song/pal/PVsZSyJ1UgY",
    "https://www.jiosaavn.com/song/baarish/GQYBSzMDBWk",
    "https://www.jiosaavn.com/song/humdard/Gg0tcyVybmA",
    "https://www.jiosaavn.com/song/khairiyat/PwAFSRNpAWw",
    "https://www.jiosaavn.com/song/sitaare-from-ikkis/ORwGAR8HVQY",
    "https://www.jiosaavn.com/song/dil-kaa-jo-haal-hai/KAMufBtkaAs",
    "https://www.jiosaavn.com/song/paro/SS1YCQ4DcH0",
    "https://www.jiosaavn.com/song/jaane-na-tu-from-ur-debut/KAAFeRJ1U2k",
    "https://www.jiosaavn.com/song/zara-zara/GQ0Mdz0DAVg",
    "https://www.jiosaavn.com/song/tere-vaaste-akbar-sami-techno-mix/HyUkejZ1UF0",
    "https://www.jiosaavn.com/song/ishq-wala-love/GAxffj9iVGI",
    "https://www.jiosaavn.com/song/baaton-ko-teri/JSUtRiAJemk",
    "https://www.jiosaavn.com/song/chhod-diya/XV0hfiNoAHo",
    "https://www.jiosaavn.com/song/sajde/GzAdWjVmYkQ",
    "https://www.jiosaavn.com/song/chahun-main-ya-naa/FjFZUBwJfAQ",
    "https://www.jiosaavn.com/song/chale-aana/Ox0uQEZxBXY",
    "https://www.jiosaavn.com/song/ehsaas/GF9ZVj0ABlc",
    "https://www.jiosaavn.com/song/zara-sa/JjkbABFoQlQ",
    "https://www.jiosaavn.com/song/ishq-wala-love-from-student-of-the-year/AgcjYCVRAH8",
    "https://www.jiosaavn.com/song/gulabi-aankhen/GQAaQBdgfkI",
    "https://www.jiosaavn.com/song/tum-hi-ho/EToxUyFpcwQ",
    "https://www.jiosaavn.com/song/sawan-aaya-hai/FzwkXTgCQFs",
    "https://www.jiosaavn.com/song/khamoshiyan/BCEFBh1BGmE",
    "https://www.jiosaavn.com/song/kuch-to-hai/HSY7cz1,XXc",
    "https://www.jiosaavn.com/song/bol-do-na-zara/IFsaVQdVQ2I",
    "https://www.jiosaavn.com/song/wajah-tum-ho/El8AWEVJYh4",
    "https://www.jiosaavn.com/song/jaane-na-tu-from-ur-debut/KAAFeRJ1U2k",
    "https://www.jiosaavn.com/song/akhiyaan/OyEAUxNYeVY",
    "https://www.jiosaavn.com/song/maan-meri-jaan/ORouSw5zUVE",
    "https://www.jiosaavn.com/song/sahiba/Bzc5ei0BZHg",
    "https://www.jiosaavn.com/song/sajde/GzAdWjVmYkQ",
    "https://www.jiosaavn.com/song/ishq/GhBZdkd9XV8",
    "https://www.jiosaavn.com/song/ek-raat/B1xbZTgddF4",
    "https://www.jiosaavn.com/song/saanson-ko/HBo0Azl3XUM",
    "https://www.jiosaavn.com/song/victory-anthem/BTAKZx15D14",
    "https://www.jiosaavn.com/song/i-guess/JwcSWRJXB3c",
    "https://www.jiosaavn.com/song/guess/CFwPfzpJfAY",
    "https://www.jiosaavn.com/song/apna-bana-le/ATIfejZ9bWw",
    "https://www.jiosaavn.com/song/tere-vaaste-from-zara-hatke-zara-bachke/AioHRTFCAGs",
    "https://www.jiosaavn.com/song/sad-gaana/KCAtQzB2YgA",
    "https://www.jiosaavn.com/song/kalaastar/IhgadR9bU3A",
    "https://www.jiosaavn.com/song/morni/P140BAZ,QHk",
    "https://www.jiosaavn.com/song/hola-amigo/JC8DdjMJXWM",
    "https://www.jiosaavn.com/song/genda-phool/GQUqRgBDQkk",
    "https://www.jiosaavn.com/song/guli-mata/AA0laRlYUnE",
    "https://www.jiosaavn.com/song/dheere-dheere/QA0gaRUCD2w",
    "https://www.jiosaavn.com/song/maharani/Khg9fjcIfwM",
    "https://www.jiosaavn.com/song/faasle/Hw04QgMGRVw",
    "https://www.jiosaavn.com/song/dhundhala/JVEKXBxCAh4",
    "https://www.jiosaavn.com/song/aankhon-se-batana/ATcldAFlWGk",
    "https://www.jiosaavn.com/song/kaise-hua/Iww,biZyXHA",
    "https://www.jiosaavn.com/song/galat-karam/MVgGa01CQ3g",
    "https://www.jiosaavn.com/song/bom-diggy-diggy/J1lYVB9iVHw",
    "https://www.jiosaavn.com/song/majboor/GlgyfxBxVGk",
    "https://www.jiosaavn.com/song/she-move-it-like/FTJfUiJHYEo",
    "https://www.jiosaavn.com/song/baazigar/Aj0eVSNjTVc",
    "https://www.jiosaavn.com/song/company/Fl0oAgYdZlg",
    "https://www.jiosaavn.com/song/mirchi/JTlYXU0dZQc",
    "https://www.jiosaavn.com/song/blue-eyes/KCofZ1lAeVo",
    "https://www.jiosaavn.com/song/finding-her/IQoFdzdDUlA",
    "https://www.jiosaavn.com/song/malang-sajna/Ji04aEN1QlI",
    "https://www.jiosaavn.com/song/ek-din-pyaar-tadipaar/GQxZViZ2aHs",
    "https://www.jiosaavn.com/search/song/touba%20tauba",
    "https://www.jiosaavn.com/song/astaghfirullah/HVgnZQBxVAE",
    "https://www.jiosaavn.com/song/khnh/SCkRZEd,VmA",
    "https://www.jiosaavn.com/song/lockup-no-4three/CAs4cz5JY2k",
    "https://www.jiosaavn.com/song/daddy-mummy/RgUABh5hDmM",
    "https://www.jiosaavn.com/song/one-two-three-four-get-on-the-dance-floor/JCcbBw1SaFs",
    "https://www.jiosaavn.com/song/kashmir-main-tu-kanyakumari/MgdaaDNdBGw",
    "https://www.jiosaavn.com/song/galat-baat-hai/QQEzcjhdWXQ",
    "https://www.jiosaavn.com/song/hangover/RFg6UxVoD1I",
    "https://www.jiosaavn.com/song/desi-kalakaar/NwoKeBB6Aws",
    "https://www.jiosaavn.com/song/ishq-bawla-%7c-coke-studio-bharat/FgomaUNyUgU",
    "https://www.jiosaavn.com/song/ishq-ka-raja/Kgw0QyFmTx4",
    "https://www.jiosaavn.com/song/har-funn-maula/Kjo7UjVUbQQ",
    "https://www.jiosaavn.com/song/nashe-si-chadh-gayi/CRsDdjZHRGY",
    "https://www.jiosaavn.com/song/badtameez-dil/PiQ9RSsABXs",
    "https://www.jiosaavn.com/song/sun-saathiya/GTwqYCJFekM",
    "https://www.jiosaavn.com/song/naach-meri-jaan/KloHB0BVfUo",
    "https://www.jiosaavn.com/song/tu-aake-dekhle/EQ0JQzgCUUY",
    "https://www.jiosaavn.com/song/ik-lamha/PS8NQ01ITkM",
    "https://www.jiosaavn.com/song/vaaste/Nyc0QDpvf1c",
    "https://www.jiosaavn.com/song/tu-hi-yaar-mera/Rzk7cABnZGk",
    "https://www.jiosaavn.com/song/kalaastar/IhgadR9bU3A",
    "https://www.jiosaavn.com/song/sab-tera/FgUOCUFGZlk",
    "https://www.jiosaavn.com/song/yaad-piya-ki-aane-lagi/JFAZSQBGGlc",
    "https://www.jiosaavn.com/song/dil-diyan-gallan-unplugged/RwlZfkZyA1U",
    "https://www.jiosaavn.com/song/tu-hai-kahaan/JiYPBy0HA1c",
    "https://www.jiosaavn.com/song/o%e2%80%99sajna/BxAOARd0D1Q",
    "https://www.jiosaavn.com/song/dj-waley-babu/KFg9eTEFWUM",
    "https://www.jiosaavn.com/song/chand-sifarish/JwwafAxqAUY",
    "https://www.jiosaavn.com/song/haan-tu-hain/BC0eHEV1D0E",
    "https://www.jiosaavn.com/song/dil-dooba/MlsAYwwdW2w",
    "https://www.jiosaavn.com/song/ada/AB89QkdBXUI",
    "https://www.jiosaavn.com/song/allah-maaf-kare/AAoZR0FoWgA",
    "https://www.jiosaavn.com/song/kabhi-kabhi-aditi/RiYHAT5nfkk",
    "https://www.jiosaavn.com/song/tum-se-hi/CiE7ejcIZ3g",
    "https://www.jiosaavn.com/song/balma/NCAiVQQAdmw",
    "https://www.jiosaavn.com/song/akeli-laila/Qx0bVRdARWo",
    "https://www.jiosaavn.com/song/subha-hone-na-de/OiAmXCUBZ0M",
    "https://www.jiosaavn.com/song/raabta/JwY0VDt,TUY",
    "https://www.jiosaavn.com/song/fevicol-se/FiU7ZAV9ZEA",
    "https://www.jiosaavn.com/song/mast-magan/FEUkBTpXcwU",
    "https://www.jiosaavn.com/song/pee-loon/HAQTXQF-REY",
    "https://www.jiosaavn.com/song/ooh-la-la/SToTYxxFY14",
    "https://www.jiosaavn.com/song/tu-hai-kahan/GQYyQhV-bWE",
    "https://www.jiosaavn.com/song/beete-lamhein/JxEIbjdxZGY",
    "https://www.jiosaavn.com/song/maahi/Ri0hdRxeRgc",
    "https://www.jiosaavn.com/song/paani-paani/Fy8RW01TTUk",
    "https://www.jiosaavn.com/song/jugnu/NB8EawNndHk",
    "https://www.jiosaavn.com/song/uyi-amma/NyAzaC54emY",
    "https://www.jiosaavn.com/song/aankh/RCQ8BlldZV0",
    "https://www.jiosaavn.com/song/payal/AD0zfk0Dc2M",
    "https://www.jiosaavn.com/song/blue-eyes/KCofZ1lAeVo",
    "https://www.jiosaavn.com/song/gf-bf/KiwZYRpzYnk",
    "https://www.jiosaavn.com/song/sahiba-x-samjho-na-remastered-2025/BSVSAhxffGw",
    "https://www.jiosaavn.com/song/besos/GC0Cfy5AXGE",
    "https://www.jiosaavn.com/song/angaaron/BxwdYT59cwc",
    "https://www.jiosaavn.com/song/srivalli/ClAdHFlUfmc",
    "https://www.jiosaavn.com/song/oo-bolega-ya-oo-oo-bolega/EToMdjl8f1E",
    "https://www.jiosaavn.com/song/tu-hain-toh-main-hoon-from-sky-force/IzcjdTdbRl8",
    "https://www.jiosaavn.com/song/deewaniyat-from-ek-deewane-ki-deewaniyat-original-motion-picture-soundtrack/QFgRBSR8A0M",
    "https://www.jiosaavn.com/song/meri-jaan/Pws8Q0BgDgM",
    "https://www.jiosaavn.com/song/oh-mama-tetema/ITgpUkNJdn8",
    "https://www.jiosaavn.com/song/gehra-hua/QQ8jRRlhBEs",
    "https://www.jiosaavn.com/song/bairan/HRoqBycHAnU",
    "https://www.jiosaavn.com/song/sheesha-aakhya-mai-aakh-ghali-jo-bairan/KCUfUgRmDwY",
    "https://www.jiosaavn.com/song/kesariya-from-brahmastra/NQotZhVbc0A",
    "https://www.jiosaavn.com/song/dooron-dooron/Ax1YADxKblw",
    "https://www.jiosaavn.com/song/kar-gayi-chull/LzkjUzVDeGk",
    "https://www.jiosaavn.com/song/bad-boy/PDEnUBcIZAQ",
    "https://www.jiosaavn.com/song/psycho-saiyaan/FSwNUwxABEo",
    "https://www.jiosaavn.com/song/tera-mera-hai-pyar-amar-from-ishq-murshid/KSYxSR5DRH4",
    "https://www.jiosaavn.com/song/main-dhoondne-ko-zamaane-mein/HBwOYjlCRmc",
    "https://www.jiosaavn.com/song/let-me-down-slowly-x-tose-naina/Lyc5fAICRB4",
    "https://www.jiosaavn.com/song/i-wanna-be-yours/Jg4NfidIcmM",
    "https://www.jiosaavn.com/song/ride-it-kya-yehi-pyaar-hai-hindi-version/PBIHUjB1dHk",
    "https://www.jiosaavn.com/song/tennu-le-kejo-na/ICcDWRZHWn0",
    // "",
];

async function getAllPlaylists() {
    try {
        // 1. Map each link to a promise and wait for all of them to finish
        const allResults = await Promise.all(links.map(link => getAlbumAudioUrls(link)));

        // 2. .flat() merges the arrays from each album into one single list of songs
        const finalMasterArray = allResults.flat();

        console.log("--- MASTER ARRAY CREATED ---");
        console.log(finalMasterArray);

        // 3. Save the entire collection to localStorage once
        localStorage.setItem("masterPlaylist", JSON.stringify(finalMasterArray));
        
        return finalMasterArray;
    } catch (error) {
        console.error("Error creating master array:", error);
    }
}

// Update your existing function slightly to RETURN the data correctly
async function getAlbumAudioUrls(albumLink) {
    const isSong = albumLink.includes("/song/");
    const endpoint = isSong ? "songs" : "albums";
    const apiUrl = `https://saavn.sumit.co/api/${endpoint}?link=${encodeURIComponent(albumLink)}`;
    const saveUrl = `https://corsproxy.io/?url=${apiUrl}`;
    try {
        const response = await fetch(saveUrl);
        const json = await response.json();

        if (json.success) {
            const musicArray = isSong ? json.data : json.data.songs;

            if (!musicArray) return [];

            return musicArray.map((song) => {
                return {
                    title: song.name,
                    artists: song.artists.all.map(a => a.name).join(", "),
                    imgUrl: song.image[song.image.length - 1].url,
                    url: song.downloadUrl[song.downloadUrl.length - 1].url
                };
            });
        }
        return []; // Return empty array if album fails
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
}

// Run the master fetcher
getAllPlaylists();















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
    } else {
        currentSongIdx = currentSongIdx <= 0 ? queue.length - 1 : currentSongIdx - 1;
    }

    loadMaybePlay();
};



const loadMaybePlay = (shouldPlay = false) => {
    // shouldPlay => decides should next songs play

    const isPlaying = !audioTag.paused;

    loadSong();
    if (isPlaying || shouldPlay) audioTag.play();
};



const playThisSong = (i) => {
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

    const s = queue.map(({ title, artist }, index) => {
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


shuffleBtn.addEventListener("click", () => shuffleQueue());
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
    if (e.key === "ArrowRight" || (e.shiftKey && e.key.toLocaleLowerCase() === "n")) {
        changeIndex("+");
    }
    if (e.key === "ArrowLeft" || (e.shiftKey && e.key.toLocaleLowerCase() === "n")) {
        changeIndex("-");
    }
});



// renderPlayList();
// loadSong();