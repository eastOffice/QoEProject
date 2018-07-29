module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('7-grade.html', {
            title: '7/13'
        });
    }
};