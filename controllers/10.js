module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('10-grade.html', {
            title: '10/13'
        });
    }
};