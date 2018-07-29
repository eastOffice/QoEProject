module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('8.html', {
            title: '8/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('9.html', {
            title: '9/13'
        });
    }
};