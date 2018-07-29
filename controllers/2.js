module.exports = {
    'POST /grade': async (ctx, next) => {
        ctx.render('2-grade.html', {
            title: '2/13'
        });
    }
};