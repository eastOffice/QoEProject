module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('12.html', {
            title: '12/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('13.html', {
            title: '13/13'
        });
    }
};