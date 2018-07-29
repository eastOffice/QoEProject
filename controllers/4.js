module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('4-grade.html', {
            title: '4/13'
        });
    }
};