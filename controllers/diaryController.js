// Import contact model
DiaryEntry = require('./diaryModel');

// Handle index actions (get all entries)
exports.getAll = function (req, res) {
  DiaryEntry.get(function (err, diaryEntries) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } else {
      res.json({
        status: "success",
        message: "entries retrieved successfully",
        data: diaryEntries
      });
    }
  });
};

// Handle create new diary entry action (post)
exports.new = function (req, res) {
  var diaryEntry = new DiaryEntry();
  diaryEntry.message = req.body.message;
  diaryEntry.weather = req.body.weather;
  diaryEntry.location = req.body.location ? req.body.location : diaryEntry.location;

  // save the entry and check for errors
  diaryEntry.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } else {
      res.json({
        status: 'success',
        message: 'new entry created!',
        data: diaryEntry
      });
    }
  });
};

// Handle update entry info (patch, put)
exports.update = function (req, res) {
  DiaryEntry.findById(req.params.entry_id, function (err, entry) {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    } else if (!req.body.message && !req.body.weather && !req.body.location) {
      res.json({
        status: "error",
        message: "at least one field needs to be changed"
      });
    } else {
      entry.message = req.body.message ? req.body.message : entry.message;
      entry.weather = req.body.weather ? req.body.weather : entry.weather;
      entry.location = req.body.location ? req.body.location : entry.location;

      // save the entry and check for errors
      entry.save(function (err) {
        if (err) {
          res.json({
            status: "error",
            message: err,
          });
        } else {
          res.json({
            status: 'success',
            data: entry
          });
        }
      });
    }
  });
};

// Handle delete dairy entry (delete)
exports.delete = function (req, res) {
  DiaryEntry.remove({ _id: req.params.entry_id }, function (err) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } else {
      res.json({
        status: 'success',
        message: 'entry deleted'
      });
    }
  });
};
