const { defineConfig } = require("cypress");
require('dotenv').config()
const fs = require("fs");
const { removeDirectory } = require('cypress-delete-downloads-folder');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
       on("task", {
        // downloadFile,
        // verifyDownloadTasks,
        removeDirectory ,
        readdir(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err);
              }
              resolve(files);
            });
          });
        },
        isFileExist( filePath ) {
         return new Promise((resolve, reject) => {
           try {
             let isExists = fs.existsSync(filePath)
             resolve(isExists);
           } catch (e) {
             reject(e);
           }
         });
       }
     });
   //to remove directory
   }
    },
    env: {
      globalUrl:process.env.GLOBAL_URL

    },
    })
