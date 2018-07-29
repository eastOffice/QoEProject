module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('10.html', {
            title: '10/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('11.html', {
            title: '11/13'
        });
    }
};