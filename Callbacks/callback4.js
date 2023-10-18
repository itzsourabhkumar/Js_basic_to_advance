function downolad(url, cb) {
  console.log("Starting downloading the file ", url);
  setTimeout(() => {
    let file = "badmash.mp3";
    console.log("Successfully Download the file ", file);
    cb("Desktop/Music/Song/badmash.mp3", file);
  }, 4000);
}

function openfile(filepath, filename) {
  console.log("Opening the file", filepath);
  setTimeout(() => {
    console.log("Play song ", filename);
  }, 2000);
}

downolad("www.pagalworld.com", function (filepath, file) { 
  setTimeout(() => {
    openfile(filepath, file);
  }, 3000);
});
