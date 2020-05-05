const express = require('express');
const app = express();

app.use(express.static(__dirname));

const server = app.listen(8000, () => {
    
    const host = server.address().address;
    const port = server.address().port;

    console.log('App listen at localhost:%s', port);
    
});