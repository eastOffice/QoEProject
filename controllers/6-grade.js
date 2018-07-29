module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('6.html', {
            title: '6/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('7.html', {
            title: '7/13'
        });
    }
};