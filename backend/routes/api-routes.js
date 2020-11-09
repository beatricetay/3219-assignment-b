// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API started successfully',
        message: 'Welcome to your diary!'
    });
});

// Import contact controller
var diaryController = require('../controllers/diaryController');

// Diary routes
router.route('/diary')
    .get(diaryController.getAll)
    .post(diaryController.new);

// Diary entry routes
router.route('/diary/:entry_id')
    .patch(diaryController.update)
    .put(diaryController.update)
    .delete(diaryController.delete);

module.exports = router;
