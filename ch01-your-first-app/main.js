
$(document).ready(function(){
    'use strict';
    console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('main-canvas'));

    var c = Shape.Circle(200,200,0);
    c.fillColor = 'green';

    paper.view.draw();
});