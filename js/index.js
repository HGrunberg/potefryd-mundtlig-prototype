// styling the sticky header when scrolling
// made with https://www.youtube.com/watch?v=V-CBdlfCPic&t=89s&ab_channel=KevinPowell

const primaryHeader = document.querySelector('[data-primaryHeader]')
const scrollWatcher = document.createElement('div')

scrollWatcher.setAttribute('data-scoll-watcher', '')

primaryHeader.before(scrollWatcher)

const navObserver = new IntersectionObserver((entries) => {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
})

navObserver.observe(scrollWatcher)


// animations by combining animista.net and https://www.youtube.com/watch?v=VplDlwLTR50

window.addEventListener('scroll', reveal)

function reveal() {
    var customScrollInRight = document.querySelectorAll('.customScrollInRight')
    var customScrollInLeft = document.querySelectorAll('.customScrollInLeft')

    for (var i = 0; i < customScrollInRight.length; i++) {
        var windowHeight = window.innerHeight
        var revealTop = customScrollInRight[i].getBoundingClientRect().top
        var revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
            customScrollInRight[i].classList.add('active')
        }
    }

    for (var i = 0; i < customScrollInLeft.length; i++) {
        var windowHeight = window.innerHeight
        var revealTop = customScrollInLeft[i].getBoundingClientRect().top
        var revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
            customScrollInLeft[i].classList.add('active')
        }
    }
}


// open close footer

const footerButton = document.querySelector('[data-open-close-footer-button]')

if (footerButton) {
    const footerContainer = document.querySelector('[data-footer-container]')

    window.addEventListener('scroll', e => {
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';

        var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;

        if (percent > 95) {
            footerContainer.style.opacity = "1"
            footerButton.style.animationPlayState = "paused"
            footerButton.style.opacity = "1"
            footerButton.style.right = "12.3rem"
            footerButton.style.bottom = "8.5rem"
        } else {
            footerContainer.style.opacity = "0"
            footerButton.style.animationPlayState = "running"
            footerButton.style.opacity = "0.4"
            footerButton.style.right = "0rem"
            footerButton.style.bottom = "0rem"
        }

    })

    footerButton.addEventListener('click', e => {
        if (!footerContainer.style.opacity || footerContainer.style.opacity == "0") {
            footerContainer.style.opacity = "1"
            footerButton.style.animationPlayState = "paused"
            footerButton.style.opacity = "1"
            footerButton.style.right = "12.3rem"
            footerButton.style.bottom = "8.5rem"
        } else {
            footerContainer.style.opacity = "0"
            footerButton.style.animationPlayState = "running"
            footerButton.style.opacity = "0.4"
            footerButton.style.right = "0rem"
            footerButton.style.bottom = "0rem"
        }
    })
}

// if(footerButton) {
//     const footerContainer = document.querySelector('[data-footer-container]')
//     footerButton.addEventListener('click', e => {
//          if(footerContainer.style.display == "block") {
//             footerContainer.style.display = "none"
//         } else {
//             footerContainer.style.display = "block"
//         }
//     })
// }



// overlay Brombær
const readMoreBrombaer = document.querySelector('[data-read-more-brombaer]')
const closePopUpOVerlay = document.querySelector('[data-close-pop-up-overlay]')
const newModal = document.querySelector('[data-modal]')

if (readMoreBrombaer) {
    readMoreBrombaer.addEventListener('click', e => {
        newModal.showModal()
    })
}

if (closePopUpOVerlay) {
    closePopUpOVerlay.addEventListener('click', e => {
        newModal.close()
    })
}

if (newModal) {
    newModal.addEventListener('click', e => {
        const dialogDimensions = newModal.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            newModal.close()
        }
    })
}


// dog barking

const dogBarkingButton = document.querySelector('[data-button-play-dog-barking-sound]')
const dogBarkingSound = document.querySelector('[data-audio-dog-barking-sound]')

if (dogBarkingButton) {
    dogBarkingButton.addEventListener('mouseover', e => {
        dogBarkingSound.play()
    })
    dogBarkingButton.addEventListener('mouseleave', e => {
        dogBarkingSound.pause()
        dogBarkingSound.currentTime = 0;
    })
}