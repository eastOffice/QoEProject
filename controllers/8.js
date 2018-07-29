module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('8-grade.html', {
            title: '8/13'
        });
    }
};