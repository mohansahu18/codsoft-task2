/*****************************************************************************
!!!!!!!!!!!!!!!!!!        addind smooth scroll      !!!!!!!!!!!!!!!!!!!!!!!!!!!
*******************************************************************************/
var navMenuAnchorTag = document.querySelectorAll(".nav-menu a")
// console.log(navMenuAnchorTag)
for (var i = 0; i < navMenuAnchorTag.length; i++) {
    navMenuAnchorTag[i].addEventListener("click", function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        // console.log(targetSectionID)
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        // console.log(targetSectionCoordinates)
        var interval = setInterval(function () {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if (targetSectionCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    })
}
/*****************************************************************************
!!!!!!!!!!!!!!!!!!        skill bar animation      !!!!!!!!!!!!!!!!!!!!!!!!!!!
*******************************************************************************/
var progressBars = document.querySelectorAll(".skills-progress > div");
function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 10);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top < (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}

window.addEventListener("scroll", checkScroll);








