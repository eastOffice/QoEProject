// start test:

module.exports = {
    'POST /start': async (ctx, next) => {
        ctx.render('1.html', {
            title: '1/13'
        });
    }
};
