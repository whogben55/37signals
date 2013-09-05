
$(document).ready(function() {
    $('#basecamp').on('mouseenter', function(){
        $('#banner').addClass('mouseover');
        $('#banner').find('h1').html("<span id='blue'>Basecamp</span> is the project management tool you <br/> wish you had on your last project.");
        $('#banner').find('h4').html("<p>Are you still managing projects with email? Are you still using Excel for your to-do lists? It's time to upgrade to<br/> Basecamp. Manage projects and collaborate with your team and clients the modern way.</p>");
    });
    $('#basecamp').on('mouseleave', function(){
        originalHeader();
    });
    $('#highrise').on('mouseenter', function(){
        $('#banner').addClass('mouseover');
        $('#banner').find('h1').html("<span id='blue'>Highrise</span> remembers the important things <br/> about people you'd normally forget.");
        $('#banner').find('h4').html('<p>Keep a permanent record of people you do business with. Know who you talked to, when you talked to them,<br/>what was said, and when to follow up next. Over 20,000,000 contacts are tracked using Highrise.</p>');
    });
    $('#highrise').on('mouseleave', function(){
        originalHeader();
    });
    $('#campfire').on('mouseenter', function(){
        $('#banner').addClass('mouseover');
        $('#banner').find('h1').html("From near or far, <span id='blue'>Campfire</span>  helps teams work together<br/>over the web in real-time.");
        $('#banner').find('h4').html("<p>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time<br/>private chat room. It's game changing. We couldn't run our own business without Campfire.</p>");
    });
    $('#campfire').on('mouseleave', function(){
        originalHeader();
    });
});

function originalHeader(){
    $('#banner').removeClass('mouseover');
    $('#banner').find('h1').html('Making collaboration productive and<br> enjoyable for people every day.');
    $('#banner').find('h4').html('Frustration-free web-based apps for collaboration, sharing information, and making decisions.');
};