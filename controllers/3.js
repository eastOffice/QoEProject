module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('3-grade.html', {
            title: '3/13'
        });
    }
};