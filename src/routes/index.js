const {Router} = require('express');
const router = Router();

router.get('/test',( req, res) => {
    const data = {
        "name":'fazt'
        'name':'Faztweb.com'
    }
    res.json(data);
});

module.exports = router;