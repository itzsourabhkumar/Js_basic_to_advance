function download(url) {
  console.log("Starting downloading the file from", url);
  setTimeout(() => {
    let file = "image.png";
    console.log("Successfully downloaded the file ", file);
  }, 4000);
}

function compress(filePath) {
  console.log("Starting compressing the file ", filePath);
  setTimeout(() => {
    console.log("Successfully compress the file ", filePath);
  }, 2000);
}

function upload(url, file) {
  console.log("Started upload of the file ", file);
  setTimeout(() => {
    console.log("Successfully uploaded the file ", file);
  }, 3000);
}

download("www.abc.com");
compress("image.png");
upload("www.upload.com", "image.png");
