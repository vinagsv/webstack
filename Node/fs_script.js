// // const { writeFile } = require("fs");
// // let fsV2 = require("fs/promises");

// // fsV2
// //   .writeFile("./hello.txt", "hello traveller")
// //   .then(() => fsV2.copyFile("./hello.txt", "./backup.txt"))
// //   .then(() => console.log("Write operation completed"))
// //   .catch((e) => console.log(e));

// // function writeFileWithPromise(filePath, data) {
// //   return new Promise((resolve, reject) => {
// //     writeFile(filePath, data, (error) => {
// //       if (error) {
// //         reject(error);
// //       } else {
// //         resolve("Write operation successfull");
// //       }
// //     });
// //   });
// // }
// const { writeFile, unlink } = require("fs");

// function writeFileSystem(filePath, data) {
//   return new Promise((resolve, reject) => {
//     writeFile(filePath, data, (error) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve("Write operation successful");
//       }
//     });
//   });
// }

// function unlinkFileSystem(filePath) {
//   return new Promise((resolve, reject) => {
//     unlink(filePath, (error) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve("File deleted successfully");
//       }
//     });
//   });
// }

// writeFileSystem("./hello.txt", "Hello, World4")
//   .then((res) => {
//     console.log(res);
//     return unlinkFileSystem("./hello.txt");
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

const { writeFile, unlink, copyFile } = require("fs");

function writeFileSystem(filePath, data) {
  return new Promise((resolve, reject) => {
    writeFile(filePath, data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("Write operation successful");
      }
    });
  });
}

function copyFileSystem(src, dest) {
  return new Promise((resolve, reject) => {
    copyFile(src, dest, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("File copied successfully");
      }
    });
  });
}

function unlinkFileSystem(filePath) {
  return new Promise((resolve, reject) => {
    unlink(filePath, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve("File deleted successfully");
      }
    });
  });
}

const sourceFile = "./hello.txt";
const copiedFile = "./copied_hello.txt";

writeFileSystem(sourceFile, "hello world(write content)")
  .then((res) => {
    console.log(res);
    return copyFileSystem(sourceFile, copiedFile);
  })
  .then((res) => {
    console.log(res);
    return unlinkFileSystem(sourceFile);
  })
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
