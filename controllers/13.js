module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('13-grade.html', {
            title: '13/13'
        });
    }
};