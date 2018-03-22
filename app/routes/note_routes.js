module.exports = function(app, db) {
  app.post('/notes', (req, res) => {
    //We will create the note here
    const note = { text: req.body.body, title: req.body.title }
    db.collection('notes').insert(note, (err, result) => {
      if(err) {
        res.send( { 'error': 'An error has occcured' });
      } else {
        res.send(result.ops[0])
      }
    })
  })
}