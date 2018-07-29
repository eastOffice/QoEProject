module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('12-grade.html', {
            title: '12/13'
        });
    }
};