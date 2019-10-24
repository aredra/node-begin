const app = require('../index');
const syncDb = require('./sync-db');

syncDb().then(_ => {
    console.log('Sync database!');
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
})

