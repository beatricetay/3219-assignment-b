// Import contact model
DiaryEntry = require('./diaryModel');

// Handle index actions (get)
exports.index = function(req, res) {
  DiaryEntry.get(function(err, diaryEntries) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Entries retrieved successfully",
      data: diaryEntries
    });
  });
};

// Handle create new diary entry action (post)
exports.new = function (req, res) {
  var diaryEntry = new DiaryEntry();
  diaryEntry.message = req.body.message ? req.body.message : diaryEntry.message;
  diaryEntry.weather = req.body.weather;
  diaryEntry.location = req.body.location;

  // save the contact and check for errors
  diaryEntry.save(function(err) {
    if (err)
        res.json(err);
    
    res.json({
      message: 'New entry created!',
      data: diaryEntry
    });
  });
};

// Handle view entry info (get)
exports.view = function(req, res) {
  DiaryEntry.findById(req.params.entry_id, function(err, entry) {
    if (err)
      res.send(err);
    else
      res.json({
      message: 'Entry details loading..',
      data: entry
    });
  });
};

// Handle update entry info (patch, put)
exports.update = function(req, res) {
  DiaryEntry.findById(req.params.entry_id, function (err, entry) {
    if (err)
      res.send(err);
    entry.message = req.body.message ? req.body.message : entry.message;
    entry.weather = req.body.weather;
    entry.location = req.body.location;

    // save the entry and check for errors
    entry.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Entry Info updated',
        data: entry
      });
    });
  });
};

// Handle delete entry
exports.delete = function(req, res) {
  DiaryEntry.remove({ _id: req.params.entry_id }, function (err, contact) {
    if (err)
      res.send(err);
    res.json({
      status: 'success',
      message: 'Entry deleted'
    });
  });
};
