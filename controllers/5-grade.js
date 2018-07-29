module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('5.html', {
            title: '5/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('6.html', {
            title: '6/13'
        });
    }
};