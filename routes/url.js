const express=require('express');

const router=express.Router();
const{handleImagesRequest, handleCSSRequest, handleHTMLRequest, handleVedioRequest} = require('../controller/url');

router.get('/', (req, res) => {
    res.sendFile('login.html', { root: './' }); 
});

router.get('/:htmlFileName.html', handleHTMLRequest);
router.get('/:cssFileName.css', handleCSSRequest);
router.get('/img/:imageName',handleImagesRequest)
router.get('/:vedioFileName',handleVedioRequest);

module.exports=router;