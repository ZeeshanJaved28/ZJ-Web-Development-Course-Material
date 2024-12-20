console.log("Let's write JavaScript");

let currentSurah = new Audio();
let surahs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
  if (isNaN(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSurah(folder) {
  currFolder = folder;
  let a = await fetch(`http://127.0.0.1:3000/${folder}/`);
  let response = await a.text();
  // console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  // let surahs = [];
  surahs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      surahs.push(element.href.split(`/${folder}/`)[1]);
    }
  }
  // Show all the surahs in the playlist
  let surahUL = document
    .querySelector(".surahList")
    .getElementsByTagName("ul")[0];
  surahUL.innerHTML = ""; //New changes here...
  for (const surah of surahs) {
    surahUL.innerHTML =
      surahUL.innerHTML +
      `<li><img class="invert" src="./images/music.svg" alt="Music" />
                <div class="info">
                  <div>${surah.replaceAll("%20", " ")}</div>
                  <div>${folder.split("quran/").slice(1)}</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                  <img class="invert" src="./images/play.svg" alt="Play" />
                </div> 
              </li> `;
  }
  // Attach an event listener to each surah
  Array.from(
    document.querySelector(".surahList").getElementsByTagName("li")
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      // console.log(e.querySelector(".info").firstElementChild.innerHTML);
      playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
    });
  });
  return surahs;
}

const playMusic = (track, pause = false) => {
  // let audio = new Audio("/quran/" + track);
  // audio.play();
  currentSurah.src = `/${currFolder}/` + track;
  if (!pause) {
    currentSurah.play();
    play.src = "./images/pause.svg";
  }
  document.querySelector(".surahinfo").innerHTML = decodeURI(track);
  document.querySelector(".surahtime").innerHTML = "00:00 / 00:00";
};

async function displayAlbums() {
  let a = await fetch(`http://127.0.0.1:3000/quran/`);
  let response = await a.text();
  let div = document.createElement("div");
  div.innerHTML = response;
  let anchors = div.getElementsByTagName("a");
  let cardContainer = document.querySelector(".cardContainer");
  let array = Array.from(anchors);
  for (let index = 0; index < array.length; index++) {
    const e = array[index];

    if (e.href.includes("/quran")) {
      let folder = e.href.split("/").slice(-2)[0];
      //Get the metadata of the folder
      let a = await fetch(`http://127.0.0.1:3000/quran/${folder}/info.json`);
      let response = await a.json();
      // console.log(response);
      cardContainer.innerHTML =
        cardContainer.innerHTML +
        `<div data-folder="${folder}" class="card">
              <div class="play">
              <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 20V4L19 12L5 20Z"
                    stroke="#141B34"
                    stroke-width="1.5"
                    fill="#000"
                    stroke-linejoin="round"
                  />
                </svg>

              </div>
              <img
                src="/quran/${folder}/cover.jpg"
                alt=""
              />
              <h2>${response.title}</h2>
              <p>${response.description}</p>
            </div>`;
    }
  }

  // Load the playlist whenever card is clicked
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    // console.log(e);
    e.addEventListener("click", async (item) => {
      // console.log(item, item.currentTarget.dataset);
      surahs = await getSurah(`quran/${item.currentTarget.dataset.folder}`);
      playMusic(surahs[0]);
    });
  });
}

async function main() {
  // Get the list of all the Surahs
  // surahs = await getSurah("quran/Abdul_Rahman_Al_Sudais");
  await getSurah("quran/Abdul-Rahman-Al-Sudais");
  // await getSurah("quran/Sheikh_Abdallah_Kamel")
  // console.log(surahs);
  playMusic(surahs[0], true);

  // Display all the albums on the page
  displayAlbums();

  // // Show all the surahs in the playlist
  // let surahUL = document
  //   .querySelector(".surahList")
  //   .getElementsByTagName("ul")[0];
  // for (const surah of surahs) {
  //   surahUL.innerHTML =
  //     surahUL.innerHTML +
  //     `<li><img class="invert" src="./images/music.svg" alt="Music" />
  //               <div class="info">
  //                 <div>${surah.replaceAll("%20", " ")}</div>
  //                 <div>Abdul Rahman Al-Sudais</div>
  //               </div>
  //               <div class="playnow">
  //                 <span>Play Now</span>
  //                 <img class="invert" src="./images/play.svg" alt="Play" />
  //               </div>
  //             </li> `;
  // }

  // Play the first Surah of Quran
  // var audio = new Audio(surahs[0]);
  //   audio.play();

  // audio.addEventListener("loadeddata", () => {
  //   console.log(audio.duration, audio.currentSrc, audio.currentTime);
  //   // The duration variable now holds the duration (in seconds) of the audio clip
  // });

  // // Attach an event listener to each surah
  // Array.from(
  //   document.querySelector(".surahList").getElementsByTagName("li")
  // ).forEach((e) => {
  //   e.addEventListener("click", (element) => {
  //     // console.log(e.querySelector(".info").firstElementChild.innerHTML);
  //     playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
  //   });
  // });

  // Attach an event listener to play, next and previous
  play.addEventListener("click", () => {
    if (currentSurah.paused) {
      currentSurah.play();
      play.src = "./images/pause.svg";
    } else {
      currentSurah.pause();
      play.src = "./images/play.svg";
    }
  });

  // Listen for timeupdate event
  currentSurah.addEventListener("timeupdate", () => {
    // console.log(currentSurah.currentTime, currentSurah.duration);
    document.querySelector(".surahtime").innerHTML = `${secondsToMinutesSeconds(
      currentSurah.currentTime
    )} / ${secondsToMinutesSeconds(currentSurah.duration)}`;
    document.querySelector(".circle").style.left =
      (currentSurah.currentTime / currentSurah.duration) * 100 + "%";
  });

  // Add an event listener to seekbar
  document.querySelector(".seekbar").addEventListener("click", (e) => {
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSurah.currentTime = (currentSurah.duration * percent) / 100;
  });

  // Add an event listener for hamburger
  document.querySelector(".hamburger").addEventListener("click", (e) => {
    document.querySelector(".left").style.left = "0";
  });

  // Add an event listener for close button
  document.querySelector(".close").addEventListener("click", (e) => {
    document.querySelector(".left").style.left = "-120%";
  });

  // Add an event listener to previous
  previous.addEventListener("click", () => {
    console.log("Previous clicked");
    // console.log(currentSurah);
    let index = surahs.indexOf(currentSurah.src.split("/").slice(-1)[0]);
    if (index - 1 >= 0) {
      playMusic(surahs[index - 1]);
    }
  });

  // Add an event listener to next
  next.addEventListener("click", () => {
    currentSurah.pause();
    console.log("Next clicked");
    let index = surahs.indexOf(currentSurah.src.split("/").slice(-1)[0]);
    // console.log(currentSurah.src.split("/").slice(-1)[0]);
    // console.log(surahs, index);
    if (index + 1 < surahs.length) {
      playMusic(surahs[index + 1]);
    }
  });

  // Add an event to volume
  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      //  console.log(e, e.target, e.target.value);
      console.log("Setting volume to", e.target.value, "/ 100");
      currentSurah.volume = parseInt(e.target.value) / 100;
      if (currentSurah.volume > 0) {
        document.querySelector(".volume>img").src = document
          .querySelector(".volume>img")
          .src.replace("mute.svg", "volume.svg");
      }
    });

  // // Load the playlist whenever card is clicked
  // Array.from(document.getElementsByClassName("card")).forEach((e) => {
  //   // console.log(e);
  //   e.addEventListener("click", async (item) => {
  //     // console.log(item, item.currentTarget.dataset);
  //     surahs = await getSurah(`quran/${item.currentTarget.dataset.folder}`);
  //   });
  // });

  // Add an event listener to mute the track
  document.querySelector(".volume>img").addEventListener("click", (e) => {
    // console.log(e.target);
    // console.log("changing", e.target.src);
    if (e.target.src.includes("volume.svg")) {
      e.target.src = e.target.src.replace("volume.svg", "mute.svg");
      currentSurah.volume = 0;
      document
        .querySelector(".range")
        .getElementsByTagName("input")[0].value = 0;
    } else {
      e.target.src = e.target.src.replace("mute.svg", "volume.svg");
      currentSurah.volume = 0.1;
      document
        .querySelector(".range")
        .getElementsByTagName("input")[0].value = 10;
    }
  });
}
main();
