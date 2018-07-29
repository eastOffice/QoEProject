module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('7.html', {
            title: '7/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('8.html', {
            title: '8/13'
        });
    }
};