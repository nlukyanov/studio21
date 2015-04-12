function router(app) {
	app.get('/admin', function(req, resp) {
		var Admin = require('./admin/admin');

		admin = new Admin(req, resp);

		admin.renderLobby();
	});
}
module.exports = router;
