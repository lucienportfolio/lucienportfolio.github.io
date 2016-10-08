var controller = new ScrollMagic.Controller();

//var tween = new TimelineMax()
//    .add(TweenMax.to("#resume-back", 1, {className: "+=resume-back-education"}));

new ScrollMagic.Scene({triggerElement:"#education", offset:-20})
    //.setTween(tween)
    .setClassToggle("#resume-back", "resume-back-education")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement:"#working", offset:-50})
    .setClassToggle("#resume-back", "resume-back-working")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement:"#project", offset:-50})
    .setClassToggle("#resume-back", "resume-back-project")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement:"#skills", offset:-50})
    .setClassToggle("#resume-back", "resume-back-skills")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement:"#activities", offset:-50})
    .setClassToggle("#resume-back", "resume-back-activities")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#ps", offset:-200})
    .setClassToggle("#ps", "ps-1")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#htcs", offset:-200})
    .setClassToggle("#htcs", "htcs")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#cc", offset:-200})
    .setClassToggle("#cc", "cc")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#ard", offset:-200})
    .setClassToggle("#ard", "ard")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#jsjq", offset:-200})
    .setClassToggle("#jsjq", "jsjq")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#proc", offset:-200})
    .setClassToggle("#proc", "proc")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#java", offset:-200})
    .setClassToggle("#java", "java")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#sql", offset:-200})
    .setClassToggle("#sql", "sql")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#ai", offset:-200})
    .setClassToggle("#ai", "ai")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#pr", offset:-200})
    .setClassToggle("#pr", "pr")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#ae", offset:-200})
    .setClassToggle("#ae", "ae")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#my", offset:-200})
    .setClassToggle("#my", "my")
    .addTo(controller);

new ScrollMagic.Scene({triggerElement: "#unity", offset:-200})
    .setClassToggle("#unity", "unity")
    .addTo(controller);

console.log(controller);

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

/**
 * Created by Lucien on 10/7/2016.
 */
