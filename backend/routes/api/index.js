const router = require('express').Router();

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

// used in browser console
// fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `cQ1oeTuq-WuKGO8x8_fjquhho5cFKCX-gs0Y`
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));

module.exports = router;
