var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'abstract';

	// Load the galleries by sortOrder
	view.query('images', keystone.list('Abstract').model.find().sort('sortOrder'));

	// Render the view
	view.render('abstract');

};
