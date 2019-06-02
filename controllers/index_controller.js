module.exports.home = function (request, response) {
    context = {
        title: 'To-Do Application'
    };
    return response.render('home', context);
}