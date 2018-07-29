module.exports = {
    'POST /back2video': async (ctx, next) => {
        ctx.render('13.html', {
            title: '13/13'
        });
    },
    'POST /next': async (ctx, next) => {
        ctx.render('survey.html', {
            title: 'survey'
        });
    }
};