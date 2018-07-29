module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('4.html', {
            title: '4/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('5.html', {
            title: '5/13'
        });
    }
};