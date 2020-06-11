const port = process.env.PORT || 3000;
const app = require('server')

app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});
