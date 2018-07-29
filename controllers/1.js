module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('1-grade.html', {
            title: '1/13'
        });
    }
};