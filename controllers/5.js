module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('5-grade.html', {
            title: '5/13'
        });
    }
};