gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".revealUp").forEach(function (elem) {
    ScrollTrigger.create({
        trigger: elem,
        start: "top 85%",
        end: "bottom 15%",
        markers: false,
        onEnter: function () {
            gsap.fromTo(
                elem,
                { y: 100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeave: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: function () {
            gsap.fromTo(
                elem,
                { y: -100, autoAlpha: 0 },
                {
                    duration: 1.25,
                    y: 0,
                    autoAlpha: 1,
                    ease: "back",
                    overwrite: "auto"
                }
            );
        },
        onLeaveBack: function () {
            gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
        }
    });
});

function detecDevice() {
    let device = false;

    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i))
    {
        window.location.replace("err.html");
        device = true;
    } else {
        device = false;
    }
}

detecDevice();

var audio = document.getElementById("aud");
let isplaying = false;
function blow() {
    if (isplaying) return;
    isplaying = true;
    audio.play();
    document.getElementById("p1").style.opacity = 1;
    document.getElementById("p2").style.opacity = 1;
    document.getElementById("p3").style.opacity = 1;
    document.getElementById("p4").style.opacity = 1;
    document.getElementById("fl").style.opacity = 0;
}

audioElement.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);
