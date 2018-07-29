module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('1.html', {
            title: '1/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('2.html', {
            title: '2/13'
        });
    }
};