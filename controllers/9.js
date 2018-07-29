module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('9-grade.html', {
            title: '9/13'
        });
    }
};