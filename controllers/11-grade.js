module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('11.html', {
            title: '11/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('12.html', {
            title: '12/13'
        });
    }
};