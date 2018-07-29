module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('11-grade.html', {
            title: '11/13'
        });
    }
};