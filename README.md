# README

## Description

These are source codes for a web-based test on QoE of Internet.

This is a localhost version.

##Setup

1. Install `node.js` from its [official website](https://nodejs.org/en/download/)

   if you are using Windows, make sure to click 'add to path' when installing.

   To test if the installation is successful, you can input 

   ```shell
   node -v
   ```

   in your command line.

2. Download the zip file and unzip  it. Locate to the folder:

   ```shell
   cd QoEProject
   ```

3. (Optional) Install all the dependencies:

   This is an optional step for those without `node-modules` folder. If you have downloaded the complete file, all the modules are already in the `node-modules` folder.

   ```shell
   npm install
   ```

4. Start the server on localhost:

   ```shell
   npm start
   or
   node app.js
   ```

5. Visit `localhost:3000` on your website, you should see the instruction page.

   After finishing the test, the results will be stored in `./results/`, the file name will be the MTurk ID.