/*aj video start*/
var aj_video = document.getElementById("aj_video");
var play_button = document.getElementById("video_playing_button");
var pause_button = document.getElementById("video_pausing_button");

function video_playing_function() {
    if (aj_video.paused) {
        aj_video.play();
        play_button.style.display = "none";
    }
}

function video_pausing_function() {
    if (aj_video) {
        aj_video.pause();
        pause_button.style.display = "none";
    }
}

var videoPausingButtons = document.querySelectorAll(".video_pausing_button");
var videoPlayingButtons = document.querySelectorAll(".video_playing_button");

videoPausingButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        videoPlayingButtons.forEach(function(playButton) {
            playButton.style.display = "block";
        });
    });
});

videoPlayingButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        videoPausingButtons.forEach(function(pauseButton) {
            pauseButton.style.display = "block";
        });
    });
});

/*aj video end*/
/*container 3 start*/
// Function to handle hover behavior for a container
function handleContainerHoverIn(containerSelector, h4Selector, pSelector, verticalLineSelector) {
    var containerH4 = document.querySelector(containerSelector + ' ' + h4Selector);
    var pElements = document.querySelectorAll(containerSelector + ' ' + pSelector);
    var verticalLine = document.querySelector(containerSelector + ' ' + verticalLineSelector);
    
    containerH4.style.display = 'inline-block';
    
    pElements.forEach(function(p) {
        p.style.display = 'none';
    });
    
    if (verticalLine) {
        verticalLine.style.display = 'none';
    }
}

function handleContainerHoverOut(containerSelector, h4Selector, pSelector, verticalLineSelector) {
    var containerH4 = document.querySelector(containerSelector + ' ' + h4Selector);
    var pElements = document.querySelectorAll(containerSelector + ' ' + pSelector);
    var verticalLine = document.querySelector(containerSelector + ' ' + verticalLineSelector);
    
    containerH4.style.display = 'none';
    
    pElements.forEach(function(p) {
        p.style.display = 'block';
    });
    
    if (verticalLine) {
        verticalLine.style.display = 'block';
    }
}

// Attach hover event listeners to each container
var pOneContainer = document.querySelector('.p_one_container_three');
pOneContainer.addEventListener('mouseenter', function() {
    handleContainerHoverIn('.p_one_container_three', '.container_three_h4_one', 'p', '.vertical_line_container_three');
});
pOneContainer.addEventListener('mouseleave', function() {
    handleContainerHoverOut('.p_one_container_three', '.container_three_h4_one', 'p', '.vertical_line_container_three');
});

var pTwoContainer = document.querySelector('.p_two_container_three');
pTwoContainer.addEventListener('mouseenter', function() {
    handleContainerHoverIn('.p_two_container_three', '.container_three_h4_two', 'p', '.vertical_line_container_three');
});
pTwoContainer.addEventListener('mouseleave', function() {
    handleContainerHoverOut('.p_two_container_three', '.container_three_h4_two', 'p', '.vertical_line_container_three');
});

var pThreeContainer = document.querySelector('.p_three_container_three');
pThreeContainer.addEventListener('mouseenter', function() {
    handleContainerHoverIn('.p_three_container_three', '.container_three_h4_three', 'p', '.vertical_line_container_three');
});
pThreeContainer.addEventListener('mouseleave', function() {
    handleContainerHoverOut('.p_three_container_three', '.container_three_h4_three', 'p', '.vertical_line_container_three');
});
/*container 3 end*/

/*container 8 start*/
document.addEventListener("DOMContentLoaded", function() {
    var actionElements = document.querySelectorAll(".action");
    actionElements.forEach(function(actionElement) {
        actionElement.addEventListener("click", function(e) {
            e.preventDefault();
            var slideElements = document.querySelectorAll(".slide");
            slideElements.forEach(function(slideElement) {
                slideElement.classList.remove("opened_li_container_eight");
            });
            var slide = this.closest(".slide");
            slide.classList.add("opened_li_container_eight");
        });
    });
    var checkWidth = function() {
        var windowsize = window.innerWidth;
        if (windowsize > 480) {
            var opened_li_container_eightSlide = document.querySelector(".slide.opened_li_container_eight");
            var slideContent = opened_li_container_eightSlide.querySelector(".slide_content");
            var slideWidth = opened_li_container_eightSlide.offsetWidth;
            slideContent.style.width = slideWidth + "px";
        }
    };
    window.addEventListener("resize", function() {
        checkWidth();
        clearTimeout(window.resizedFinished);
        window.resizedFinished = setTimeout(checkWidth, 500);
    });
    checkWidth();
});
/*container 8 end*/



