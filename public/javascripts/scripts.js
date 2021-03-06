$(document).ready( function() {
    //Create maps
    L.mapbox.accessToken = 'pk.eyJ1IjoidmlzdWFsam91cm5hbGlzdCIsImEiOiIwODQxY2VlNDRjNTBkNWY1Mjg2OTk3NWIzMmJjMGJhMSJ9.ZjwAspfFYSc4bijF6XS7hw';



    //Create the map.
    var map = L.mapbox.map('map-rize', 'visualjournalist.mnbadlih', {
        scrollWheelZoom: false
    });


    //Add the pins to the map.
    var myLayer = L.mapbox.featureLayer().addTo(map);
    myLayer.setGeoJSON(geojson);



    function disableZoom(){
        // Disable drag and zoom handlers.
        map.dragging.disable();
        //map.touchZoom.disable();
        //map.doubleClickZoom.disable();
        //map.scrollWheelZoom.disable();

        // Disable tap handler, if present.
        if (map.tap) map.tap.disable();
    }

    function enableZoom(){
        // Disable drag and zoom handlers.
        map.dragging.enable();
        //map.touchZoom.enable();
        //map.doubleClickZoom.enable();
        //map.scrollWheelZoom.enable();

        // Disable tap handler, if present.
        if (map.tap) map.tap.enable();
    }


    //Check the width of the browser.
    //If the browser is wider than X pixels, recenter the map to include Washington DC.
    function centerMap(){
        var w = window.innerWidth;
        if (w>550){
            //Fit the map to the markers.
            map.fitBounds(myLayer.getBounds());
            enableZoom();
        }else if (w>450){
            //Center and zoom the map to west Africa.
            map.setView([8, -5], 4);
            disableZoom()

        }else{
            map.setView([8, -5], 3);
            disableZoom()
        }
    }
    centerMap();



    //Resize YouTube videos proportionately <---Moved outside for global scope
    function resizeIframes(){
        var aspectRatio = $("iframe").width()/$("iframe").height();
        var columnWidth = $("#centerWidth").width();

        $("iframe").width(columnWidth);
        $("iframe").height(columnWidth/aspectRatio);
        $('#dropdown').hide();
    }


    //Resize YouTube videos proportionately
    function resizeStuffOnResize(){
        waitForFinalEvent(function(){
            resizeIframes();
            centerMap();
        }, 500, "some unique string");
    }

    //Wait for the window resize to 'end' before executing a function---------------
    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout (timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    window.addEventListener('resize', function(event){
        resizeStuffOnResize();
    });

    resizeStuffOnResize();


    $('#staff p').scrollTo('#mission');

    //Dropdown navigation
    $( "#menuButton" ).click(function() {
        $( "#dropdown" ).toggle();
    });
    $( ".container" ).click(function() {$('#dropdown').hide();});
    $( "#titleBar h1 a" ).click(function() {$('#dropdown').hide();});
    $( "#dropdown a li" ).click(function() {$('#dropdown').hide();});

});
