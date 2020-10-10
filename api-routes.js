// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API is working',
    message: 'Welcome to RESTHub!'
  });
});

// Import contact controller
var diaryController = require('./diaryController');

// Contact routes
router.route('/diary')
  .get(diaryController.index)
  .post(diaryController.new);

router.route('/diary/:entry_id')
  .get(diaryController.view)
  .patch(diaryController.update)
  .put(diaryController.update)
  .delete(diaryController.delete);

// Export API routes
module.exports = router;
