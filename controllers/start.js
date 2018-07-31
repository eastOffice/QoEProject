// start test:
var getOder = require('../models/random')
var fs = require('fs')
var video_order = getOder(1,13);
var survey = [];
var result = [];
var count = 1;

var post_start = async (ctx, next) => {
    var fs = require('fs');
    var mturkID = ctx.request.body.MTurkID;
    var device = ctx.request.body.device;
    var age = ctx.request.body.age;
    console.log(mturkID, device, age);

    survey.push(mturkID, device, age);

    // var video_src = "../videos/" + video_order[0] + ".mp4";
    //var video_src = "./videos/" + "xuefeng" + ".mp4";
    var video_src = "https://github.com/michaelliao/learn-javascript/raw/master/video/vscode-nodejs.mp4";
    //console.log(video_src);

    ctx.render('video.html', {
        title: '1/13', video_src : video_src
    });
}

var post_grade= async (ctx, next) => {
    var title = count + "/13";
    ctx.render('grade.html', {
        title: title, count: count
    });
}


var post_back2video = async (ctx, next) => {
    //var video_order = require('./start.js').video_order;
    var video_src = "../videos/" + video_orde[count - 1] + ".mp4";
    var title = count +"/13";
    ctx.render('video.html', {
        title: title, video_src: video_src
    });
}
 var post_next = async (ctx, next) => {
    //var video_order = require('./start.js').video_order;
    //var result = require('./start.js').result;
    var grade = ctx.request.body.sentiment;
    result.push(grade);
    if(count < 13) {
        var video_src = "../videos/" + video_order[count] + ".mp4";
        count = count + 1;
        var title = count +"/13";

        ctx.render('video.html', {
            title: title, video_src: video_src
        });
    }
    else {
        console.log(result);
        var filename = "./results/" + survey[0] + ".txt";
        var write_data = [];
        for(var i in video_order) {
            write_data[video_order[i] - 1] = result[i];
        }
        fs.writeFile(filename, survey + '\n' + write_data , function(err) {
            if(err) {
                return console.log(err);
            }
        });
        var return_code = "0lMq2GKqLDSUgYAGc=";
        ctx.render('ending.html', {
            title: 'Thank you', return_code:return_code
        });
    }
}



module.exports = {
    'POST /start' : post_start,
    'POST /grade': post_grade,
    'POST /back2video':post_back2video,
    'POST /next' : post_next

};
