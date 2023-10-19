const download = (url) => {
  console.log("Starting downloading the file from", url);
  let err = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        let file = "image.png";
        console.log("Successfully downloaded the file ", file);
        resolve(file);
      } else {
        console.log("Cannot download");
        reject(new Error("Something went wrong"));
      }
    }, 4000);
  });
};

const compress = (filePath) => {
  console.log("Starting compressing the file ", filePath);
  let err = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        console.log("Successfully compress the file ");
        resolve(filePath);
      } else {
        console.log("Cannot compress");
        reject(new Error("Something went wrong"));
      }
    }, 2000);
  });
};

const upload = (url, file) => {
  console.log("Started upload of the file ", url);
  let err = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        console.log("Successfully uploaded the file ");
      } else {
        console.log("Cannot compress");
        reject(new Error("Something went wrong"));
      }
    }, 3000);
  });
};

download("www.abc.com")
  .then((data) => {
    console.log("Details of the file downloaded", data);
    return data;
  })
  .then((data) => {
    return compress(data);
  })
  .then((data) => {
    upload("www.xyz.com", data);
  });
