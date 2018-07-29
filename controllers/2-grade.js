module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('2.html', {
            title: '2/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('3.html', {
            title: '3/13'
        });
    }
};