// start test:
var getOder = require('../models/random')

var video_order = getOder(1,13);
var result = [];
var count = 1;

var post_start = async (ctx, next) => {
    var fs = require('fs');
    var mturkID = ctx.request.body.MTurkID;
    var device = ctx.request.body.device;
    var age = ctx.request.body.age;
    console.log(mturkID, device, age);

    result.push(mturkID, device, age);

    var video_src = "../videos/" + video_order[0] + ".mp4";
    console.log(video_src);

    ctx.render('video.html', {
        title: '1/13', video_src : video_src
    });
}





var post_grade= async (ctx, next) => {
    var title = count + "/13";
    ctx.render('grade.html', {
        title: title
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
        ctx.render('ending.html', {
            title: 'Thank you'
        });
    }
}



module.exports = {
    'POST /start' : post_start,
    'POST /grade': post_grade,
    'POST /back2video':post_back2video,
    'POST /next' : post_next

};
