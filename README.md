# README

## Description

These are source codes for a web-based test on QoE of Internet.

This is a localhost version.

## Setup

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

## Problems(solved)

1. Only one tester can proceed the test at the same time. This is because I used some variables to control the order of the webpages, videos, etc.
   If another tester visits the webpage, he will be asked to wait first. One big problem is that if one tester quits before finishing, then the server will keep waiting.
   I wonder if this problem can be solved by multi-process methods(each tester has a pid).

    An idea just came across my mind: can I use `ctx` to transfer these global variables? eg.
    ```
    ctx.video_order = video_order;
    ctx.count = count;
    ctx.result = result;
    ```
    This problem is fixed: the idea is using cookie, bind all the global variables to the cookie by using:
    ```
    ctx.cookies.set('name');
    ctx.cookies.get('name');
    ```
    Also need to add
    ```
    app.use(async (ctx, next) => {
    ctx.state.user = parseUser(ctx.cookies.get('name') || '');
    await next();
    });
    ```
    in `app.js` . 

## About data

1. The raw data collected from the website are .txt files, containing info about grades, order of videos, watching and decision time of each grade, and the content of the survey. I will up load them to `./raw_data/`, you can load these data into npy files with `process_data.py`, which has already been done and the npy files are in `./data` folder, so you may not need to deal with raw data. I have rejected unqualified results on MTurk, so all the results in the npy file are valid.

2. In the `./data` folder, you can see all the npy files and plotting codes. Sorry for the confusing names of the npy files:
    - amazon: 001, 002, 003, 004
    - cnn: cnn, cnn_new
    - google: google, google_new
    - youtube: youtube, youtube_new
3. To plot a single curve for a website, eg. amazon, just run `plot_amazon.py`. To plot all the curves combined in one picture, run `plot_combine.py`. `plot_diff.py` plots the differential of the curves on every 2 points(you can modify to every 1 point). All the plotted results are in the `./figs` folder.