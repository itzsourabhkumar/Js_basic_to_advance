function download(url, cb) {
  console.log("Starting downloading the file from", url);
  setTimeout(() => {
    let file = "image.png";
    console.log("Successfully downloaded the file ", file);
    cb(file);
  }, 4000);
}

function compress(filePath, cb) {
  console.log("Starting compressing the file ", filePath);
  setTimeout(() => {
    console.log("Successfully compress the file ", filePath);
    cb("www.upload.com", filePath);
  }, 2000);
}

function upload(url, file) {
  console.log("Started upload of the file ", url);
  setTimeout(() => {
    console.log("Successfully uploaded the file ", file);
  }, 3000);
}

download("www.abc.com", function (filePath) {
  compress(filePath, function (url, file) {
    upload("www.example.com", file);
  });
});
