module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('6-grade.html', {
            title: '6/13'
        });
    }
};