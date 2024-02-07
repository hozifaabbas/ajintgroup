// /*aj video start*/
let aj_video = document.getElementById("aj_video");
let play_button = document.getElementById("video_playing_button");
aj_video.addEventListener('click', function() {
    if (!aj_video.paused) {
        aj_video.pause();
        play_button.style.display = "inline-block";
        document.addEventListener('keydown', function(event) {
            if (event.key === 'j' || event.key === 'J') {
                play_button.style.display = "inline-block";
                aj_video.pause();
            }
        });
    } else {
        aj_video.play();
        play_button.style.display = "none";
        document.addEventListener('keydown', function(event) {
            if (event.key === 'k' || event.key === 'K') {
                play_button.style.display = "none";
                aj_video.play();
            }
        });
    }
});

 /*aj video end*/
 // container 2 start
let pio = document.getElementById("pio");
let sio = document.getElementById("sio");
let eio = document.getElementById("eio");
let pioneers = document.getElementById("pioneers");
let sioneers = document.getElementById("sioneers");
let eioneers = document.getElementById("eioneers");

pio.addEventListener("click", () => {
    pioneers.style.display = "block";
    sioneers.style.display = "none";
    eioneers.style.display = "none";
    pio.style.border = "0.2777777vw solid #FEFAE0";
    pio.style.borderRadius = "100px"
    sio.style.border = "0px";
    eio.style.border = "0px";
});

sio.addEventListener("click", () => {
    pioneers.style.display = "none";
    sioneers.style.display = "block";
    eioneers.style.display = "none";
    sio.style.border = "0.2777777vw solid #FEFAE0";
    sio.style.borderRadius = "100px"
    pio.style.border = "0px";
    eio.style.border = "0px";
});

eio.addEventListener("click", () => {
    pioneers.style.display = "none";
    sioneers.style.display = "none";
    eioneers.style.display = "block";
    eio.style.border = "0.2777777vw solid #FEFAE0";
    eio.style.borderRadius = "100px"
    pio.style.border = "0px";
    sio.style.border = "0px";
});


function openTab(tabIndex) {
    const tabs = document.querySelectorAll('.tab');
    const tabButtons = document.querySelectorAll('.tab-button');

    tabs.forEach((tab, index) => {
        if (index === tabIndex) {
            tab.classList.remove('hidden');
            tab.classList.add('block', 'animate-shake', 'animate-duration-[1800ms]');
            tabButtons[index].classList.add('bg-primary', 'text-white', 'ring-offset-4', 'py-[2vw]');
        } else {
            tab.classList.add('hidden');
            tab.classList.remove('block');
            tabButtons[index].classList.remove('bg-primary', 'text-white', 'ring-offset-4', 'py-[2vw]');
        }
    });
}

openTab(0);


// container 2 end
 /*container 3 start*/
let hover_div_one = document.getElementById('hover_div_one');
let hover_content_one = document.getElementById('hover_content_one');
let hidden_div_one = document.getElementById('hidden_div_one');
let hidden_p_one = document.getElementById('hidden_p_one');
hover_div_one.addEventListener('mouseover', function handleMouseOver() {
    hover_content_one.style.display = 'block';
    hidden_div_one.style.display = 'none';
    hidden_p_one.style.display = 'none';
});
hover_div_one.addEventListener('mouseout', function handleMouseOut() {
    hover_content_one.style.display = 'none';
    hidden_div_one.style.display = 'block';
    hidden_p_one.style.display = 'block';
});

let hover_div_two = document.getElementById('hover_div_two');
let hover_content_two = document.getElementById('hover_content_two');
let hidden_div_two = document.getElementById('hidden_div_two');
let hidden_p_two = document.getElementById('hidden_p_two');
hover_div_two.addEventListener('mouseover', function handleMouseOver() {
    hover_content_two.style.display = 'block';
    hidden_div_two.style.display = 'none';
    hidden_p_two.style.display = 'none';
});
hover_div_two.addEventListener('mouseout', function handleMouseOut() {
    hover_content_two.style.display = 'none';
    hidden_div_two.style.display = 'block';
    hidden_p_two.style.display = 'block';
});

let hover_div_three = document.getElementById('hover_div_three');
let hover_content_three = document.getElementById('hover_content_three');
let hidden_div_three = document.getElementById('hidden_div_three');
let hidden_p_three = document.getElementById('hidden_p_three');
hover_div_three.addEventListener('mouseover', function handleMouseOver() {
    hover_content_three.style.display = 'block';
    hidden_div_three.style.display = 'none';
    hidden_p_three.style.display = 'none';
});
hover_div_three.addEventListener('mouseout', function handleMouseOut() {
    hover_content_three.style.display = 'none';
    hidden_div_three.style.display = 'block';
    hidden_p_three.style.display = 'block';
});
/*container 3 end*/
/*container 5 start*/
let onclick_element_1 = document.getElementById("onclick_element_1");
let onclick_element_2 = document.getElementById("onclick_element_2");
let onclick_element_3 = document.getElementById("onclick_element_3");
const onclick_elements_group = [onclick_element_1, onclick_element_2, onclick_element_3];
onclick_elements_group.forEach((element) => {
    element.addEventListener("click", () => {
        const currentOpacity = parseFloat(getComputedStyle(element).opacity);
        if (currentOpacity === 1) {
            element.style.opacity = "0.4";
        } else {
            element.style.opacity = "1";
        }
    });
});
/*container 5 end*/
/*container 8 start*/
let slides = document.querySelectorAll('.slide');
document.addEventListener("DOMContentLoaded", function() {
    let actionElements = document.querySelectorAll(".action");
    actionElements.forEach(function(actionElement) {
        actionElement.addEventListener("click", function(e) {
            e.preventDefault();
            let slideElements = document.querySelectorAll(".slide");
            slideElements.forEach(function(slideElement) {
                slideElement.classList.remove("opened_li_container_eight");
            });
            let slide = this.closest(".slide");
            slide.classList.add("opened_li_container_eight");
        });
    });
});


// shop start
function open_the_menu() {
    document.getElementById('classifying').style.display = 'block';
    document.getElementById('hiddenclothes').style.display = 'none';
    document.getElementById('thebigcontainer').style.position = 'fixed';
    document.getElementById('thebigcontainer').style.width = '100%';
    document.getElementById('thebigcontainer').style.height = '100%';

}
function close_the_menu() {
    document.getElementById('classifying').style.display = 'none';
    document.getElementById('hiddenclothes').style.display = 'grid';
    document.getElementById('thebigcontainer').style.position = 'static';
    document.getElementById('thebigcontainer').style.width = 'auto';
    document.getElementById('thebigcontainer').style.height = 'auto';
}
// shop end

