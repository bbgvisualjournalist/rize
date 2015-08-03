var express = require('express');
var router = express.Router();

/* Splits data into separate paragraphs*/
function splitParagraphs(source){
    var splitGraphs = '';

    var paragraphs = source;
    paragraphs = paragraphs.split('\n')

    for (var i = 0; i<paragraphs.length; i++){
        splitGraphs += '<p>' + paragraphs[i] + '</p>';
    }
    return splitGraphs
}

function createIntro(source, image){
    var photo = '<img src="' + image + '" style="float: left;">';
    var paragraph = '<p>' + photo + source + '</p>';
    return paragraph;
}

/*Used for blog*/
function splitFirstParagraphs(source){
    var splitGraphs = '';

    var paragraphs = source;
    paragraphs = paragraphs.split('\n')

    for (var i = 0; i<2; i++){
        splitGraphs += '<p>' + paragraphs[i] + '</p>';
    }
    return splitGraphs
}

/*Used for metaDescription on projects*/
function firstParagraph(source){
    var paragraphs = source;
    paragraphs = paragraphs.split('\n')
    return paragraphs[0]
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/* GET home page. */
router.get('/', function(req, res, next) {
    var data = global.site.sitewide;
    var staffData = global.staff.sitewide;
    var socialData = global.social.sitewide;
    var mapData = global.map.sitewide;


    var url = data[0].url;
    var mission = splitParagraphs(data[0].mission);
    var map =  splitParagraphs(data[0].map);
    var strategy = splitParagraphs(data[0].strategy);

    //description: splitParagraphs(data[0].biography)

    res.render('index', {
        data: data,
        staffData: staffData,
        socialData: socialData,
        mapData: mapData,
        pageTitle: data[0].tagline,
        metaImage: data[0].metaimage,
        url: url,
        description: mission,
        map: map,
        strategy: strategy
    });
});

module.exports = router;
