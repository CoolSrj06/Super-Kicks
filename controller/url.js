const path = require('path'); 
const fs=require('fs')

async function handleCSSRequest(req, res){
    const cssFileName = req.params.cssFileName; 
    res.sendFile(`${cssFileName}.css`, { root: './' });
} 
async function handleHTMLRequest(req, res){
    const htmlFileName = req.params.htmlFileName; 
    res.sendFile(`${htmlFileName}.html`, { root: './' }); // Adjust file path if needed
}
async function handleImagesRequest(req, res){
    const imageName = req.params.imageName;

    // Build the correct path to the image file
    const imagePath = path.join('./img/', imageName); 

    // Check if the image file exists
    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(imagePath);
            res.status(404).send('Image not found');
        } else {
            res.sendFile(imageName, { root: './img' }); 
        }
    });
}

async function handleVedioRequest(req, res){
    const vedioFileName = req.params.vedioFileName; 
    res.sendFile(vedioFileName, { root: './' }); // Adjust file path if needed
}

module.exports={
    handleCSSRequest,
    handleHTMLRequest,
    handleImagesRequest,
    handleVedioRequest,
}