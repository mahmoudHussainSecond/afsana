/* ==========================================================================
   DATA CONFIGURATION
   ========================================================================== */

// All media files live inside the "my girl" folder
const BASE = 'my girl/';

const STORY_DATA = [

    // #1 — she causully taking my feelings
    {
        chapter: 'Chapter 1: The Beginning',
        title: 'She Casually Taking My Feelings',
        desc: "Like it's nothing. She doesn't even know. she told me she wants to ride on top of that, like a baby!!",
        type: 'video', src: BASE + '1.she causully taking my feelings.mp4'
    },

    // #2 + #3 — fighting with her (grouped)
    {
        chapter: 'Chapter 1', title: 'Our Fighting Faces 😂',
        desc: 'Even our fights are cute. I remember she push me down and i just started laughing. we eventually started fighting like kids.',
        type: 'carousel',
        items: [
            { type: 'image', src: BASE + '2.fighting with her 2.jpeg' },
            { type: 'image', src: BASE + '3.fighting with her.webp' }
        ]
    },

    // #4 — chill day with her at uni
    {
        chapter: 'Chapter 1', title: 'Chill Day With Her at Uni',
        desc: 'It started to become habit of meeting her at uni. A day without her felt empty.',
        type: 'image', src: BASE + '4.chill day with her at uni.jpeg'
    },

    // #5 — massaging her leg
    {
        chapter: 'Chapter 1', title: 'Massaging Her Leg',
        desc: 'Taking care of you is my favourite thing. The moment you gave your leg forward, a part of me wanted to care you more like a baby.',
        type: 'image', src: BASE + '5.massaging her leg.jpeg'
    },

    // #6 — first time seeing her run towards butterfly
    {
        chapter: 'Chapter 1', title: 'First Time Seeing Her Run Towards Butterflies',
        desc: 'That was the first time I felt like if I wanted to do anything for anyone, it should be her alwaysssssss',
        type: 'video', src: BASE + '6.first time seeing her run towards butterfly.mp4'
    },

    // #7 — a day buying snack in unimart on a rainy day
    {
        chapter: 'Chapter 1', title: 'A Rainy Day Buying Snacks at Unimart',
        desc: 'It was rainning and I remember she was trying to take me to unimart for something, I never knew that was the first time I will be with her while rainning',
        type: 'image', src: BASE + '7.a day buying snack in unimart on a rainy dayt.jpg'
    },

    // #8 — first time she lay her head on me
    {
        chapter: 'Chapter 1', title: 'First Time She Lay Her Head On Me',
        desc: 'As a guy I started having butterflies like it was normal. I cannot ever forget that moment.',
        type: 'video', src: BASE + '8.first time she lay her head on me.mp4'
    },

    // #9 — first date
    {
        chapter: 'Chapter 2: Falling In Love', title: 'Our Un-official First Date',
        desc: 'I still remember I was trying to impress you but you were just standing and watching like. That day I realized how cute you are. I had to take you out somewhere',
        type: 'image', src: BASE + '9.first date.jpeg', ratio: '16/9',
        achievement: '❤️ First Date Unlocked'
    },

    // #10 — first selfie of us
    {
        chapter: 'Chapter 2', title: 'Our First Selfie',
        desc: 'The very first selfie I took with you, I felt so shy but feeling the best feeling ever',
        type: 'image', src: BASE + '10.first selfie of us.jpeg', ratio: '16/9'
    },

    // #11 — first couple pic
    {
        chapter: 'Chapter 2', title: 'Our First Couple Picture',
        desc: 'The moment we became us.',
        type: 'image', src: BASE + '12.first couple pic.jpeg'
    },
   
    // #13.1 + #13.2 — our dances (grouped)
    {
        chapter: 'Chapter 2', title: 'Our Dances',
        desc: 'A cinematic moment just for us.',
        type: 'carousel',
        items: [
            { type: 'video', src: BASE + '13.1.first dance under the street light.mp4' },
            { type: 'video', src: BASE + '13.2.mp4' }
        ],
        achievement: '🌸 First Dance Unlocked'
    },
     // #12 — a normal day at our second home
    {
        chapter: 'Chapter 2', title: 'A Normal Day at Our Second Home',
        desc: 'It was a normal day but with you... it was always special at chefs table.',
        type: 'image', src: BASE + '11.a normal day at our second home.jpeg'
    },


    // #15 — three files grouped (celebrating bday + first date + second home)
    {
        chapter: 'Chapter 2', title: 'First birthday of yours celebrating with you',
        desc: 'I was so nervous, but I just knew you are the one',
        type: 'image', src: BASE + '15.celebrating her first bday at her home.jpeg' 
    },

    // #16 + #17 + #18 — first time at toggi (in numeric order)
    {
        chapter: 'Chapter 3: Adventures Together', title: 'First Time at Toggi',
        desc: '',
        type: 'carousel',
        items: [
            { type: 'video', src: BASE + '16.first time at toggi with her 2.mp4' },
            { type: 'video', src: BASE + '17.first time at toggi with her.mp4' },
            { type: 'image', src: BASE + '18.first time at toggi with her 3.jpeg' }
        ]
    },

    {
        chapter: 'Chapter 3: Adventures Together', title: 'First Time at Toggi',
        desc: '',
        type: 'carousel',
        items: [
            { type: 'video', src: BASE + '15one of the very first date.mp4' },
            { type: 'image', src: BASE + '15second home causual date.jpeg' }
        ]
    },

    // #19 — first time watching a movie at the theatre
    {
        chapter: 'Chapter 3', title: 'First Time Watching a Movie at the Theatre',
        desc: 'It was a horror movie, but I remember we were the only ones laughing',
        type: 'image', src: BASE + '19.first time watching a movie a theatre.jpg'
    },

    // #20 — first wallpaper
    {
        chapter: 'Chapter 3', title: 'My First Wallpaper of our hands',
        desc: 'This was one of the cutest thing I can image of...',
        type: 'image', src: BASE + '20.first wallpaper.jpeg'
    },

    // #21 — first picture of first fast together
    {
        chapter: 'Chapter 3', title: "We Didn't Know It Yet",
        desc: 'Neither of us knew this would become the best decision of our lives.',
        type: 'image', src: BASE + '21.first picture of first fast together.jpeg',
        ratio: '16/9', rotate: 90
    },

    // #22 — head kiss 1–5 (all grouped)
    {
        chapter: 'Chapter 4: Becoming Comfortable', title: 'Head Kiss Collection',
        desc: 'Every single one felt like a whole world.',
        type: 'carousel',
        items: [
            { type: 'video', src: BASE + '22.head kiss 1.mp4' },
            { type: 'video', src: BASE + '22.head kiss 2.mp4' },
            { type: 'video', src: BASE + '22.head kiss 3.mp4' },
            { type: 'image', src: BASE + '22.head kiss 4.jpeg' },
            { type: 'video', src: BASE + '22.head kiss 5.mp4' }
        ]
    },

    // #23 — fav head kiss + her fav picture + fav picture of her 2 (grouped)
    {
        chapter: 'Chapter 4', title: 'Her and My Favourite Pictures',
        desc: '',
        type: 'carousel',
        items: [
            { type: 'image', src: BASE + '23..jpeg'},
            { type: 'image', src: BASE + '23.her fav picture.jpeg', ratio: '16/9', rotate: -90},
            { type: 'image', src: BASE + '23.jpeg', ratio: '16/9', rotate: -90 },
            { type: 'image', src: BASE + "30she shy and I'm lost in her.jpeg" }
        ]
    },

    // #24 — hugging + kissing her shoulder + laying my head (grouped)
    {
        chapter: 'Chapter 4', title: 'Close Moments',
        desc: 'I miss you every moment. you are so special',
        type: 'carousel',
        items: [
            { type: 'video', src: BASE + '24..mp4' },
            { type: 'video', src: BASE + '24.kissing her shoulder.mp4' },
            { type: 'image', src: BASE + '24.laying my head on those beautiful shoulder.jpeg' }
        ]
    },

    // #25 — playing hide and seek while blindfold
    {
        chapter: 'Chapter 4', title: 'Playing Hide and Seek Blindfolded',
        desc: 'The kind of silly fun only we can have.',
        type: 'video', src: BASE + '25.mp4',
        achievement: '🎮 Silliness Champion!'
    },

    // #26 — waiting for her bus
    {
        chapter: 'Chapter 4', title: 'Waiting for Her Bus',
        desc: 'Even waiting for her was special.',
        type: 'video', src: BASE + '26..mp4'
    },

    // #27 — treating her
    {
        chapter: 'Chapter 4', title: 'Treating Her Because She Was Too Sad About Her Course',
        desc: "I'll always be your reason to smile.",
        type: 'image', src: BASE + '27.jpeg', ratio: '16/9'
    },

    // #28 — we cool couple
    {
        chapter: 'Chapter 5: Together', title: 'We Cool Couple, Everyone Knows It',
        desc: '',
        type: 'image', src: BASE + '28we cool couple everyone knows about.jpeg'
    },

    // #29 — shadow of us
    {
        chapter: 'Chapter 5', title: 'Shadow of Us',
        desc: '',
        type: 'image', src: BASE + '29shadow of us.jpeg'
    },

    // #30 — she talking + she shy (grouped)
    {
        chapter: 'Chapter 5', title: 'Her Beautiful Side',
        desc: '',
        type: 'carousel',
        items: [
            { type: 'video', src: BASE + '30.mp4' },
    
        ]
    },

    // #31 — sudden day at northend
    {
        chapter: 'Chapter 5', title: 'A Sudden Day at Northend',
        desc: '',
        type: 'image', src: BASE + '31suddent day at northend.jpeg'
    },

    // #32 — fit check + all snaps + she recovering (grouped)
    {
        chapter: 'Chapter 5', title: 'Beautiful Snaps & Moments',
        desc: 'Little gifts from her, one snap at a time.',
        type: 'carousel',
        items: [
            { type: 'video', src: BASE + '32fit check.mp4' },
            { type: 'video', src: BASE + '32sending me beautiful snaps.mp4' },
            { type: 'video', src: BASE + '32sending me beautiful snap 2.mp4' },
            { type: 'video', src: BASE + '32sending me beautiful snap 3.mp4' },
            { type: 'video', src: BASE + '32sending me beautiful snaps 4.mp4' },
            { type: 'video', src: BASE + '32sending me beautiful snaps 5.mp4' },
            { type: 'video', src: BASE + '32she recovering and sending me the first snap.mp4' }
        ]
    },

    // #33 — attending class after recovering
    {
        chapter: 'Chapter 6: Being There', title: 'Attending Class After Recovering From Sickness',
        desc: 'She showed up even when it was hard.',
        type: 'video', src: BASE + '33attending class after recovering from sickness.mp4'
    },

    // #34 — baby slept + normal day at uni (grouped)
    {
        chapter: 'Chapter 6', title: 'University Days',
        desc: '',
        type: 'carousel',
        items: [
            { type: 'image', src: BASE + '34.webp' },
            { type: 'video', src: BASE + '34normal day at uni.mp4' }
        ]
    },

    // #35 — one of my fav course with her
    {
        chapter: 'Chapter 6', title: 'One of My Fav Courses With Her',
        desc: '',
        type: 'image', src: BASE + '35one of my fav course with her.jpeg'
    },

    // #36 — birthday carousel (3 items grouped)
    {
        chapter: 'Chapter 7: Birthday Memories', title: 'A Beautiful Birthday Celebrated With Her',
        desc: 'Every year gets better. She gifted mee so muchhhhhhh it was the second birthday you celebrated with me baby',
        type: 'carousel',
        items: [
            { type: 'image', src: BASE + '36a beautiful birthday celebrated of mine with her.jpeg', ratio: '16/9', rotate: 90 },
            { type: 'image', src: BASE + '36a beautiful birthday celebrated of mine with her 2.jpeg' },
            { type: 'video', src: BASE + '36a beautiful birthday celebrated of mine with her 3.mp4' }
        ],
        achievement: '🎂 Birthday Memory!'
    },

    // #37 — meeting her on a sudden plan
    {
        chapter: 'Chapter 8: Today & Forever', title: 'Meeting Her on a Sudden Plan',
        desc: '',
        type: 'video', src: BASE + '37 meeting her on a sudden plan.mp4'
    },

    // #38 — our recent eid together
    {
        chapter: 'Chapter 8', title: 'Our Recent Eid Together',
        desc: 'Building traditions, one year at a time.',
        type: 'image', src: BASE + '38our recent eid togther.webp'
    }
];

const ENDING_TEXT = [
    'My Dearest Afsu,',
    'From that very first day,',
    'I never imagined someone could become my safest place.',
    "You've been my happiness,",
    'my peace,',
    'my best friend,',
    'and my home.',
    "Every picture in this story reminds me that my favourite place has never been somewhere...",
    "It's always been beside you.",
    'Thank you for every laugh,',
    'every hug,',
    'every dance,',
    'every little moment that became unforgettable.',
    'If life gave me another chance...',
    "I'd still choose you.",
    'Again.',
    'And again.',
    'Happy Birthday ❤️',
    'Forever Yours,',
    'Mahmoud'
];

/* ==========================================================================
   STATE
   ========================================================================== */
let currentIndex    = 0;
let isAnimating     = false;
const totalMemories = STORY_DATA.length;
const achievementsGiven = new Set();

/* ==========================================================================
   DOM REFERENCES
   ========================================================================== */
const audioEl      = document.getElementById('bg-music');
const screens      = {
    landing : document.getElementById('landing'),
    intro   : document.getElementById('intro-sequence'),
    journey : document.getElementById('journey'),
    ending  : document.getElementById('ending')
};
const cardContainer = document.getElementById('card-container');
const prevBtn       = document.getElementById('prev-btn');
const nextBtn       = document.getElementById('next-btn');
const progressText  = document.getElementById('progress-text');
const progressBar   = document.getElementById('progress-bar');
const modal         = document.getElementById('media-modal');
const modalBody     = document.getElementById('modal-body');

/* ==========================================================================
   PETALS — ambient background effect
   ========================================================================== */
function createPetals() {
    const colors = ['#F6B6C8', '#FFD9E3', '#ffffff'];
    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.classList.add('floating-petal');
        petal.style.left             = Math.random() * 100 + 'vw';
        petal.style.width            = (Math.random() * 10 + 5) + 'px';
        petal.style.height           = petal.style.width;
        petal.style.backgroundColor  = colors[Math.floor(Math.random() * colors.length)];
        petal.style.animationDuration = (Math.random() * 10 + 10) + 's';
        petal.style.animationDelay   = (Math.random() * 10) + 's';
        document.body.appendChild(petal);
    }
}
createPetals();

/* ==========================================================================
   MEDIA HTML BUILDERS
   ========================================================================== */

/** Returns the inner HTML for a single polaroid (image or video) */
function buildPolaroid(type, src, title = '', rotate = null) {
    const isVideo = type === 'video';
    const cls = isVideo ? 'polaroid video-thumb' : 'polaroid';

    let mediaStyle = '';
    if (rotate) {
        mediaStyle = ` style="transform: rotate(${rotate}deg);"`;
    }

    // Dynamic rotation and ratio handling via onload/onloadedmetadata
    const onLoadScript = `
        this.style.opacity=1;
        let w = this.naturalWidth || this.videoWidth;
        let h = this.naturalHeight || this.videoHeight;
        let isLandscape = w > h;
        if (${rotate} === 90 || ${rotate} === -90) {
            isLandscape = !isLandscape;
            this.style.scale = (Math.max(w, h) / Math.min(w, h)).toString();
        }
        const polaroid = this.closest('.polaroid');
        if (isLandscape) {
            polaroid.classList.add('landscape');
        } else {
            polaroid.classList.remove('landscape');
        }
    `.replace(/\s+/g, ' ');

    const media = isVideo
        ? `<video src="${src}" preload="metadata" muted playsinline autoplay loop
                  onerror="this.style.display='none'"
                  onloadedmetadata="${onLoadScript}"${mediaStyle}></video>`
        : `<img src="${src}" alt="${title}"
                onerror="this.style.display='none'"
                onload="${onLoadScript}"${mediaStyle}>`;

    return `
        <div class="${cls}" onclick="openModal('${type}', '${src.replace(/'/g, "\\'")}', ${rotate || 0})">
            <div class="media-frame">${media}</div>
        </div>`;
}

/** Builds carousel HTML from an array of items */
function buildCarousel(items) {
    const inner = items.map(item => buildPolaroid(item.type, item.src, item.title, item.rotate)).join('');
    return `<div class="carousel-container">${inner}</div>`;
}

/** Returns the full media-area HTML for a given story entry */
function buildMediaHTML(data) {
    if (data.type === 'image' || data.type === 'video') {
        return buildPolaroid(data.type, data.src, data.title, data.rotate);
    }
    if (data.type === 'carousel') {
        return buildCarousel(data.items);
    }
    return '';
}

/* ==========================================================================
   RENDER MEMORY CARD
   ========================================================================== */
function renderMemory(index, direction = 'next') {
    if (isAnimating) return;
    isAnimating = true;

    const data = STORY_DATA[index];
    const card = document.createElement('div');
    card.classList.add('memory-card');

    card.innerHTML = `
        <div class="chapter-title">${data.chapter}</div>
        <h2 class="memory-title">${data.title}</h2>
        ${data.desc ? `<p class="memory-desc">${data.desc}</p>` : ''}
        <div class="media-area">${buildMediaHTML(data)}</div>
    `;

    cardContainer.appendChild(card);

    // Progress
    progressText.innerText  = `Memory ${index + 1} of ${totalMemories}`;
    progressBar.style.width = `${((index + 1) / totalMemories) * 100}%`;

    // Achievement
    if (data.achievement && !achievementsGiven.has(data.achievement)) {
        achievementsGiven.add(data.achievement);
        showAchievement(data.achievement);
    }

    // Preload next image
    if (index + 1 < totalMemories) {
        const next = STORY_DATA[index + 1];
        if (next.type === 'image') { new Image().src = next.src; }
    }

    // Animate out old card
    const oldCard = cardContainer.querySelector('.memory-card.active');
    if (oldCard) {
        gsap.to(oldCard, {
            x: direction === 'next' ? -120 : 120,
            opacity: 0,
            rotationY: direction === 'next' ? -12 : 12,
            duration: 0.55,
            ease: 'power2.in',
            onComplete: () => oldCard.remove()
        });
    }

    // Animate in new card
    gsap.fromTo(card,
        { x: direction === 'next' ? 120 : -120, opacity: 0, rotationY: direction === 'next' ? 12 : -12 },
        {
            x: 0, opacity: 1, rotationY: 0,
            duration: 0.75, ease: 'power3.out',
            onComplete: () => {
                card.classList.add('active');
                isAnimating = false;
            }
        }
    );

    prevBtn.disabled = index === 0;
}

/* ==========================================================================
   NAVIGATION
   ========================================================================== */
nextBtn.addEventListener('click', () => {
    if (currentIndex < totalMemories - 1) {
        currentIndex++;
        renderMemory(currentIndex, 'next');
    } else {
        triggerEnding();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderMemory(currentIndex, 'prev');
    }
});

// Keyboard arrow navigation
document.addEventListener('keydown', e => {
    if (!screens.journey.classList.contains('active')) return;
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'ArrowLeft')  prevBtn.click();
});

/* ==========================================================================
   START BUTTON — plays music immediately on click
   ========================================================================== */
document.getElementById('start-btn').addEventListener('click', () => {
    audioEl.volume = 0.4;
    audioEl.play().catch(() => {});

    gsap.to(screens.landing, {
        opacity: 0, duration: 1,
        onComplete: () => {
            screens.landing.classList.remove('active');
            screens.intro.classList.add('active');
            playIntroSequence();
        }
    });
});

/* ==========================================================================
   INTRO SEQUENCE
   ========================================================================== */
function playIntroSequence() {
    const tl = gsap.timeline({
        onComplete: () => {
            gsap.to(screens.intro, {
                opacity: 0, duration: 1,
                onComplete: () => {
                    screens.intro.classList.remove('active');
                    screens.journey.classList.add('active');
                    gsap.to(screens.journey, { opacity: 1, duration: 1 });
                    renderMemory(0);
                }
            });
        }
    });

    tl.to('#intro-date',  { opacity: 1, duration: 2,   y: -20, ease: 'power2.out' })
      .to('#intro-date',  { opacity: 0, duration: 1 }, '+=1.5')
      .to('#intro-met',   { opacity: 1, duration: 1.5, ease: 'power2.out' })
      .to('#intro-met',   { opacity: 0, duration: 1 }, '+=1')
      .to('#intro-began', { opacity: 1, duration: 2,   ease: 'power2.out' })
      .to('#intro-began', { opacity: 0, duration: 1 }, '+=1.5');
}

/* ==========================================================================
   MODAL — cinematic full-screen viewer
   ========================================================================== */
function openModal(type, src, rotate = 0) {
    modal.classList.add('active');

    let mediaStyle = '';
    if (rotate) {
        mediaStyle = ` style="transform: rotate(${rotate}deg);"`;
    }

    if (type === 'video') {
        audioEl.pause();
        modalBody.innerHTML = `<video src="${src}" controls autoplay playsinline${mediaStyle}></video>`;
    } else {
        modalBody.innerHTML = `<img src="${src}" alt="Memory"${mediaStyle}>`;
    }

    gsap.fromTo(modalBody.firstChild,
        { scale: 0.85, opacity: 0 },
        { scale: 1,    opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
    );
}

function closeModal() {
    const vid = modalBody.querySelector('video');
    if (vid) vid.pause();
    audioEl.play().catch(() => {});

    gsap.to(modalBody.firstChild, {
        scale: 0.85, opacity: 0, duration: 0.3,
        onComplete: () => {
            modal.classList.remove('active');
            modalBody.innerHTML = '';
        }
    });
}

document.getElementById('close-modal').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

/* ==========================================================================
   ENDING — love letter
   ========================================================================== */
function triggerEnding() {
    gsap.to(screens.journey, {
        opacity: 0, duration: 2,
        onComplete: () => {
            screens.journey.classList.remove('active');
            screens.ending.classList.add('active');

            if (!achievementsGiven.has('100%')) {
                showAchievement('💕 100% Journey Completed');
                achievementsGiven.add('100%');
            }

            const container = document.getElementById('letter-content');
            container.innerHTML =
                ENDING_TEXT.map(line => `<div class="letter-line">${line}</div>`).join('') +
                '<div class="letter-line letter-heart">❤️</div>' +
                '<div class="letter-line" style="text-align:center;font-size:1.2rem;margin-top:20px;font-family:var(--font-main);">The Beginning…</div>';

            gsap.to(screens.ending, { opacity: 1, duration: 2 });
            
            const tl = gsap.timeline({ delay: 1 });
            const lines = document.querySelectorAll('.letter-line');
            
            lines.forEach((line, i) => {
                const isLast = (i === lines.length - 1);
                tl.to(line, { opacity: 1, y: -20, duration: 2, ease: 'power2.out' });
                if (!isLast) {
                    tl.to(line, { opacity: 0, duration: 1 }, '+=1.5');
                }
            });
        }
    });
}

/* ==========================================================================
   ACHIEVEMENTS
   ========================================================================== */
function showAchievement(text) {
    const toast = document.getElementById('achievement');
    document.getElementById('ach-title').innerText = text;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

/* ==========================================================================
   EASTER EGGS
   ========================================================================== */

// Panda click — burst of hearts
document.getElementById('panda').addEventListener('click', e => {
    showAchievement('🐼 Found the Panda!');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        Object.assign(heart.style, {
            position: 'fixed',
            left: (e.clientX - 10) + 'px',
            top:  (e.clientY - 10) + 'px',
            pointerEvents: 'none',
            zIndex: 9000,
            fontSize: '1.5rem'
        });
        document.body.appendChild(heart);
        gsap.to(heart, {
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 1)   * 200,
            opacity: 0,
            rotation: Math.random() * 360,
            duration: 1.5, ease: 'power3.out',
            onComplete: () => heart.remove()
        });
    }
});

// Double-click — cherry blossoms
document.addEventListener('dblclick', e => {
    if (e.target.closest('.nav-btn')) return;
    for (let i = 0; i < 8; i++) {
        const petal = document.createElement('div');
        petal.classList.add('floating-petal');
        Object.assign(petal.style, {
            left:   e.clientX + 'px',
            top:    e.clientY + 'px',
            width:  '12px',
            height: '12px',
            zIndex: 50
        });
        document.body.appendChild(petal);
        gsap.to(petal, {
            x: (Math.random() - 0.5) * 300,
            y: Math.random() * 300 + 100,
            opacity: 0,
            rotation: Math.random() * 720,
            duration: 2 + Math.random() * 2,
            ease: 'power1.out',
            onComplete: () => petal.remove()
        });
    }
});

// Night mode toggle
document.getElementById('moon-toggle').addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
    if (document.body.classList.contains('night-mode')) {
        showAchievement('✨ Starlight Mode Activated');
    }
});

// Press 'H' — hidden love note
document.addEventListener('keydown', e => {
    if (e.key.toLowerCase() === 'h') {
        const note = document.getElementById('hidden-note');
        note.classList.add('show');
        setTimeout(() => note.classList.remove('show'), 3000);
    }
});
