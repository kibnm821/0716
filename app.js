const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/views/Park/Grid_Presentaion.html'));
//__dirname : It will resolve to your project folder.
});

app.use('/', router);