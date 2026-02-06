/* =============================================
   OnePiece-Book — Main Script v2.0
   Author: elitepunith
   ============================================= */

// ---- CHARACTER DATABASE ----
const characters = [
    // === STRAW HAT PIRATES ===
    {
        id: "luffy",
        name: "Monkey D. Luffy",
        jp: "モンキー・D・ルフィ",
        color: "#d93a3a",
        group: "Straw Hat Pirates",
        intro: "The Captain who dreams of becoming King of the Pirates.",
        desc: "Luffy refuses to let anything stand in the way of his belief that being Pirate King means having the most freedom in the world. After awakening the true power of his devil fruit on the rooftop of Onigashima, Luffy became one of the Four Emperors.",
        ability: "<strong>Hito Hito no Mi, Model: Nika</strong><br>Gives him a rubber body and the legendary power of the Sun God — turning imagination into reality. His Gear 5 form is the peak of ridiculous freedom.",
        origin: "East Blue — Foosha Village",
        role: "Captain",
        age: "19",
        height: "174cm",
        bounty: "3,000,000,000",
        img: "images/luffy.jpg",
        power: { strength: 95, speed: 90, haki: 98, devilFruit: 100, endurance: 97 }
    },
    {
        id: "zoro",
        name: "Roronoa Zoro",
        jp: "ロロノア・ゾロ",
        color: "#1c6b2d",
        group: "Straw Hat Pirates",
        intro: "The 'Pirate Hunter' and master of the Three-Sword Style.",
        desc: "Zoro aims to become the World's Greatest Swordsman. As the crew's unofficial vice-captain, his loyalty to Luffy is absolute. He tamed the legendary sword Enma in Wano and unlocked Conqueror's Haki coating.",
        ability: "<strong>Santoryu (Three-Sword Style)</strong><br>Wields the Wado Ichimonji, Sandai Kitetsu, and Enma. His King of Hell technique channels Conqueror's Haki through all three blades.",
        origin: "East Blue — Shimotsuki Village",
        role: "Combatant / First Mate",
        age: "21",
        height: "181cm",
        bounty: "1,111,000,000",
        img: "images/zoro.jpg",
        power: { strength: 96, speed: 88, haki: 92, devilFruit: 0, endurance: 95 }
    },
    {
        id: "nami",
        name: "Nami",
        jp: "ナミ",
        color: "#e69138",
        group: "Straw Hat Pirates",
        intro: "The crew's expert navigator and cartographer.",
        desc: "Nami guides the ship through the treacherous Grand Line with supernatural skill. Her dream is to draw a complete map of the entire world. She has grown from a thief into one of the bravest pirates sailing the seas.",
        ability: "<strong>Sorcery Clima-Tact</strong><br>Enhanced by Zeus (Big Mom's homie), she can manipulate weather to create devastating thunderstorms, mirages, and freezing blasts.",
        origin: "East Blue — Cocoyama Village",
        role: "Navigator",
        age: "20",
        height: "170cm",
        bounty: "366,000,000",
        img: "images/nami.jpg",
        power: { strength: 30, speed: 50, haki: 10, devilFruit: 0, endurance: 55 }
    },
    {
        id: "ussop",
        name: "God Usopp",
        jp: "ウソップ",
        color: "#c5a059",
        group: "Straw Hat Pirates",
        intro: "The creative sniper who aspires to be a brave warrior of the sea.",
        desc: "The son of Yasopp. Though often fearful, Usopp faces the most terrifying enemies to protect his friends. His lies have a mysterious habit of becoming truth. He unlocked Observation Haki during the battle at Dressrosa.",
        ability: "<strong>Kuro Kabuto</strong><br>Uses Pop Greens (carnivorous plants), impact dials, and incredible long-range accuracy to control the battlefield from a distance.",
        origin: "East Blue — Syrup Village",
        role: "Sniper",
        age: "19",
        height: "176cm",
        bounty: "500,000,000",
        img: "images/ussop.jpg",
        power: { strength: 25, speed: 45, haki: 35, devilFruit: 0, endurance: 50 }
    },
    {
        id: "sanji",
        name: "Vinsmoke Sanji",
        jp: "ヴィンスモーク・サンジ",
        color: "#0056b3",
        group: "Straw Hat Pirates",
        intro: "The amorous chef who uses the 'Black Leg' fighting style.",
        desc: "Sanji searches for the legendary All Blue. He adheres to a strict code of chivalry and fights only with his legs to protect his hands for cooking. His Germa modifications awakened during Whole Cake Island and Wano.",
        ability: "<strong>Ifrit Jambe</strong><br>Combines genetically enhanced exoskeleton with friction-based fire to create blue flames hot enough to rival magma. His speed becomes invisible.",
        origin: "North Blue — Germa Kingdom",
        role: "Cook",
        age: "21",
        height: "180cm",
        bounty: "1,032,000,000",
        img: "images/sanji.jpg",
        power: { strength: 88, speed: 95, haki: 75, devilFruit: 0, endurance: 85 }
    },
    {
        id: "chopper",
        name: "Tony Tony Chopper",
        jp: "トニートニー・チョッパー",
        color: "#ff69b4",
        group: "Straw Hat Pirates",
        intro: "A reindeer-doctor who ate the Human-Human Fruit.",
        desc: "Chopper dreams of becoming a doctor who can cure any disease. He uses Rumble Balls to unlock multiple transformation points. Despite his tiny bounty, he is invaluable to the crew.",
        ability: "<strong>Hito Hito no Mi</strong><br>Allows transformation into seven forms including Heavy Point, Horn Point, and the devastating Monster Point.",
        origin: "Grand Line — Drum Island",
        role: "Doctor",
        age: "17",
        height: "90cm",
        bounty: "1,000",
        img: "images/chopper.jpg",
        power: { strength: 60, speed: 50, haki: 5, devilFruit: 70, endurance: 65 }
    },
    {
        id: "robin",
        name: "Nico Robin",
        jp: "ニコ・ロビン",
        color: "#800080",
        group: "Straw Hat Pirates",
        intro: "The archaeologist searching for the world's true history.",
        desc: "The sole survivor of Ohara and the only person alive who can read the Poneglyphs. Robin seeks the Rio Poneglyph to uncover the lost Void Century. She mastered a demonic transformation in Wano.",
        ability: "<strong>Hana Hana no Mi</strong><br>Can sprout body parts on any surface. Her Demonio Fleur creates a giant demon form that can clutch and break enemies.",
        origin: "West Blue — Ohara",
        role: "Archaeologist",
        age: "30",
        height: "188cm",
        bounty: "930,000,000",
        img: "images/robin.jpg",
        power: { strength: 72, speed: 55, haki: 20, devilFruit: 85, endurance: 60 }
    },
    {
        id: "franky",
        name: "Franky",
        jp: "フランキー",
        color: "#00aae4",
        group: "Straw Hat Pirates",
        intro: "The cyborg shipwright who built the Thousand Sunny.",
        desc: "A funky cyborg powered by cola who maintains the crew's ship and fights with an arsenal of hidden weapons. He built the Thousand Sunny using Adam Wood — the finest ship-building material in the world.",
        ability: "<strong>Cyborg Body</strong><br>Equipped with Radical Beams, Weapons Left, and the General Franky — a giant mech battle suit powered by cola fuel.",
        origin: "South Blue — Water 7",
        role: "Shipwright",
        age: "36",
        height: "240cm",
        bounty: "394,000,000",
        img: "images/franky.jpg",
        power: { strength: 82, speed: 45, haki: 0, devilFruit: 0, endurance: 88 }
    },
    {
        id: "brook",
        name: "Soul King Brook",
        jp: "ブルック",
        color: "#a6a6a6",
        group: "Straw Hat Pirates",
        intro: "The humming swordsman who returned from the underworld.",
        desc: "A living skeleton who keeps a 50-year promise to a whale named Laboon at Reverse Mountain. He became a world-famous rock star 'Soul King' during the two-year timeskip. He fights with the chill of the underworld.",
        ability: "<strong>Yomi Yomi no Mi</strong><br>Grants him a second life. His soul can leave his body, freeze enemies with the chill of the underworld, and his music can affect the souls of others.",
        origin: "West Blue",
        role: "Musician / Swordsman",
        age: "90",
        height: "277cm",
        bounty: "383,000,000",
        img: "images/brook.jpg",
        power: { strength: 55, speed: 78, haki: 15, devilFruit: 75, endurance: 70 }
    },
    {
        id: "jinbe",
        name: "Jinbe",
        jp: "ジンベエ",
        color: "#1a5276",
        group: "Straw Hat Pirates",
        intro: "The Knight of the Sea and helmsman of the Straw Hats.",
        desc: "A former Warlord of the Sea and captain of the Sun Pirates. Jinbe officially joined the Straw Hats in Wano. His mastery of Fish-Man Karate and incredible resolve make him one of the crew's strongest fighters.",
        ability: "<strong>Fish-Man Karate</strong><br>Manipulates water molecules in the air and in living bodies to deliver devastating strikes. His Vagabond Drill can send shockwaves through entire ships.",
        origin: "Grand Line — Fish-Man Island",
        role: "Helmsman",
        age: "46",
        height: "301cm",
        bounty: "1,100,000,000",
        img: "images/jinbe.jpg",
        power: { strength: 90, speed: 65, haki: 80, devilFruit: 0, endurance: 92 }
    },
    // === OTHER LEGENDS ===
    {
        id: "shanks",
        name: "Red-Haired Shanks",
        jp: "シャンクス",
        color: "#8b0000",
        group: "Red Hair Pirates",
        intro: "The Emperor who inspired Luffy to become a pirate.",
        desc: "He sacrificed his left arm to save a young Luffy from a Sea King. Shanks possesses the most powerful Haki in the world — he once stopped an Admiral with just his presence. He is the captain of the Red Hair Pirates.",
        ability: "<strong>Supreme King's Haki</strong><br>Master of all three forms of Haki. His Conqueror's Haki alone can neutralize admirals and shatter the willpower of thousands.",
        origin: "West Blue",
        role: "Emperor / Captain",
        age: "39",
        height: "199cm",
        bounty: "4,048,900,000",
        img: "images/shanks.jpg",
        power: { strength: 92, speed: 90, haki: 100, devilFruit: 0, endurance: 88 }
    },
    {
        id: "kaido",
        name: "Kaido of the Beasts",
        jp: "カイドウ",
        color: "#594d75",
        group: "Beast Pirates",
        intro: "The 'Strongest Creature' in the world.",
        desc: "A former Emperor who ruled Wano with an iron fist for 20 years. Kaido sought to start the greatest war the world has ever seen. He was defeated by Luffy's Gear 5 on the rooftop of Onigashima.",
        ability: "<strong>Uo Uo no Mi, Model: Seiryu</strong><br>Transforms into a massive Azure Dragon capable of destroying islands with Blast Breath. Combined with supreme Haki, he was nearly invincible.",
        origin: "Grand Line — Vodka Kingdom",
        role: "Former Emperor",
        age: "59",
        height: "710cm",
        bounty: "4,611,100,000",
        img: "images/kaido.jpg",
        power: { strength: 100, speed: 70, haki: 95, devilFruit: 98, endurance: 100 }
    }
];

// ---- STATE ----
let currentIndex = 0;

// ---- CACHE DOM ELEMENTS ----
const elements = {
    charList: document.getElementById('char-list'),
    charName: document.getElementById('char-name'),
    charJpName: document.getElementById('char-jp-name'),
    charGroup: document.getElementById('char-group'),
    charIntro: document.getElementById('char-intro'),
    charDesc: document.getElementById('char-desc'),
    charAbility: document.getElementById('char-ability'),
    charOrigin: document.getElementById('char-origin'),
    charRole: document.getElementById('char-role'),
    charAge: document.getElementById('char-age'),
    charHeight: document.getElementById('char-height'),
    posterName: document.getElementById('poster-name'),
    charBounty: document.getElementById('char-bounty'),
    posterImg: document.getElementById('poster-img'),
    heroBg: document.getElementById('hero-bg'),
    posterCard: document.getElementById('poster-card'),
    posterShine: document.querySelector('.poster-shine'),
    charHeader: document.getElementById('char-header'),
    menuBtn: document.getElementById('menu-btn'),
    sidebar: document.getElementById('sidebar'),
    searchInput: document.getElementById('search-input'),
    charCounter: document.getElementById('char-counter'),
    powerBars: document.getElementById('power-bars'),
    loader: document.getElementById('loader'),
    backToTop: document.getElementById('back-to-top'),
    contentArea: document.getElementById('content-area')
};

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', function() {
    buildSidebar();
    loadCharacter(0);
    setupTabs();
    setup3DTilt();
    setupMobileMenu();
    setupKeyboardNav();
    setupSearch();
    setupBackToTop();
    hideLoader();
});

// ---- LOADING SCREEN ----
function hideLoader() {
    setTimeout(function() {
        elements.loader.classList.add('hidden');
    }, 800);
}

// ---- BUILD SIDEBAR ----
function buildSidebar() {
    var list = elements.charList;
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        var li = document.createElement('li');
        var btn = document.createElement('button');

        btn.className = 'char-btn';
        btn.setAttribute('role', 'option');
        btn.id = 'btn-' + i;

        // Character name
        var nameText = document.createTextNode(char.name);
        btn.appendChild(nameText);

        // Group tag
        var groupTag = document.createElement('span');
        groupTag.className = 'char-group-tag';
        groupTag.textContent = char.group;
        btn.appendChild(groupTag);

        // Click handler using closure
        btn.addEventListener('click', (function(index) {
            return function() {
                loadCharacter(index);
                closeMobileMenu();
            };
        })(i));

        li.appendChild(btn);
        fragment.appendChild(li);
    }

    list.appendChild(fragment);
}

// ---- LOAD CHARACTER ----
function loadCharacter(index) {
    if (index < 0 || index >= characters.length) return;

    currentIndex = index;
    var data = characters[index];

    // Update active button in sidebar
    var allButtons = document.querySelectorAll('.char-btn');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
        allButtons[i].setAttribute('aria-selected', 'false');
    }
    var activeBtn = document.getElementById('btn-' + index);
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-selected', 'true');

    // Scroll active button into view in sidebar
    activeBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

    // Dynamic accent color
    document.documentElement.style.setProperty('--accent', data.color);
    document.documentElement.style.setProperty('--accent-glow', data.color + '66');

    // Update text content
    elements.charName.textContent = data.name;
    elements.charJpName.textContent = data.jp;
    elements.charGroup.textContent = data.group;
    elements.charIntro.innerHTML = data.intro;
    elements.charDesc.innerHTML = data.desc;
    elements.charAbility.innerHTML = data.ability;
    elements.charOrigin.textContent = data.origin;
    elements.charRole.textContent = data.role;
    elements.charAge.textContent = data.age;
    elements.charHeight.textContent = data.height;

    // Poster updates
    elements.posterName.textContent = data.name.toUpperCase();
    elements.charBounty.textContent = data.bounty;

    // Counter
    elements.charCounter.textContent = (index + 1) + ' / ' + characters.length;

    // Image loading with fallback
    loadCharacterImage(data);

    // Power bars
    renderPowerBars(data.power);

    // Switch to Story tab
    switchTab('story');

    // Replay header animation
    replayAnimation(elements.charHeader, 'slideDown 0.6s ease');

    // Update poster alt text
    elements.posterImg.alt = 'Wanted poster of ' + data.name;
}

// ---- IMAGE LOADER ----
function loadCharacterImage(data) {
    var img = elements.posterImg;
    var hero = elements.heroBg;

    img.style.opacity = '0';

    var tempImg = new Image();
    tempImg.src = data.img;

    tempImg.onload = function() {
        img.src = data.img;
        hero.style.backgroundImage = "url('" + data.img + "')";
        img.style.opacity = '1';
    };

    tempImg.onerror = function() {
        console.warn('Image missing for ' + data.name + '. Using fallback.');
        img.src = 'images/logo.jpg';
        hero.style.backgroundImage = "url('images/logo.jpg')";
        img.style.opacity = '1';
    };
}

// ---- POWER BARS ----
function renderPowerBars(power) {
    var container = elements.powerBars;
    container.innerHTML = '';

    var stats = [
        { label: 'Strength', value: power.strength },
        { label: 'Speed', value: power.speed },
        { label: 'Haki', value: power.haki },
        { label: 'Devil Fruit', value: power.devilFruit },
        { label: 'Endurance', value: power.endurance }
    ];

    for (var i = 0; i < stats.length; i++) {
        var stat = stats[i];

        var item = document.createElement('div');
        item.className = 'power-bar-item';

        var label = document.createElement('div');
        label.className = 'power-bar-label';
        label.innerHTML = '<span>' + stat.label + '</span><span>' + stat.value + '/100</span>';

        var track = document.createElement('div');
        track.className = 'power-bar-track';

        var fill = document.createElement('div');
        fill.className = 'power-bar-fill';

        track.appendChild(fill);
        item.appendChild(label);
        item.appendChild(track);
        container.appendChild(item);

        // Animate after a tiny delay so the browser registers width: 0 first
        (function(fillEl, val) {
            setTimeout(function() {
                fillEl.style.width = val + '%';
            }, 50 + (i * 80));
        })(fill, stat.value);
    }
}

// ---- TABS ----
function setupTabs() {
    var tabButtons = document.querySelectorAll('.tab-btn[data-tab]');

    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function() {
            var tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    }
}

function switchTab(tabName) {
    var contents = document.querySelectorAll('.tab-content');
    var buttons = document.querySelectorAll('.tab-btn[data-tab]');

    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    for (var j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
        buttons[j].setAttribute('aria-selected', 'false');
    }

    var targetContent = document.getElementById(tabName);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    var targetBtn = document.querySelector('.tab-btn[data-tab="' + tabName + '"]');
    if (targetBtn) {
        targetBtn.classList.add('active');
        targetBtn.setAttribute('aria-selected', 'true');
    }
}

// Make switchTab available globally for any edge cases
window.switchTab = switchTab;

// ---- 3D TILT EFFECT ----
function setup3DTilt() {
    var card = elements.posterCard;
    var shine = elements.posterShine;
    if (!card || !shine) return;

    card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;

        var rotateX = ((y - centerY) / centerY) * -12;
        var rotateY = ((x - centerX) / centerX) * 12;

        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.05)';

        var shineX = (x / rect.width) * 100;
        var shineY = (y / rect.height) * 100;
        shine.style.background = 'radial-gradient(circle at ' + shineX + '% ' + shineY + '%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)';
        shine.style.opacity = '1';
    });

    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) rotateZ(2deg) scale(1)';
        shine.style.opacity = '0';
    });

    // Disable tilt on touch devices (it doesn't work well)
    card.addEventListener('touchstart', function() {
        card.style.transform = 'rotate(2deg)';
    }, { passive: true });
}

// ---- KEYBOARD NAVIGATION ----
function setupKeyboardNav() {
    document.addEventListener('keydown', function(e) {
        // Don't navigate when typing in search
        if (document.activeElement === elements.searchInput) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            var next = currentIndex + 1;
            if (next >= characters.length) next = 0;
            loadCharacter(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            var prev = currentIndex - 1;
            if (prev < 0) prev = characters.length - 1;
            loadCharacter(prev);
        } else if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
}

// ---- MOBILE MENU ----
function setupMobileMenu() {
    if (!elements.menuBtn || !elements.sidebar) return;

    elements.menuBtn.addEventListener('click', function() {
        elements.menuBtn.classList.toggle('open');
        elements.sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth > 900) return;

        var clickedInsideSidebar = elements.sidebar.contains(e.target);
        var clickedMenuBtn = elements.menuBtn.contains(e.target);

        if (!clickedInsideSidebar && !clickedMenuBtn && elements.sidebar.classList.contains('open')) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    if (elements.menuBtn) elements.menuBtn.classList.remove('open');
    if (elements.sidebar) elements.sidebar.classList.remove('open');
}

// ---- SEARCH ----
function setupSearch() {
    if (!elements.searchInput) return;

    elements.searchInput.addEventListener('input', function() {
        var query = this.value.toLowerCase().trim();
        var buttons = document.querySelectorAll('.char-btn');

        for (var i = 0; i < characters.length; i++) {
            var char = characters[i];
            var btn = buttons[i];
            var matchesName = char.name.toLowerCase().indexOf(query) !== -1;
            var matchesGroup = char.group.toLowerCase().indexOf(query) !== -1;
            var matchesRole = char.role.toLowerCase().indexOf(query) !== -1;

            if (matchesName || matchesGroup || matchesRole) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }
        }
    });
}

// ---- BACK TO TOP ----
function setupBackToTop() {
    if (!elements.backToTop || !elements.contentArea) return;

    elements.contentArea.addEventListener('scroll', function() {
        if (this.scrollTop > 300) {
            elements.backToTop.classList.add('visible');
        } else {
            elements.backToTop.classList.remove('visible');
        }
    });

    elements.backToTop.addEventListener('click', function() {
        elements.contentArea.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ---- UTILITY: REPLAY ANIMATION ----
function replayAnimation(element, animationValue) {
    if (!element) return;
    element.style.animation = 'none';
    element.offsetHeight; // Force reflow
    element.style.animation = animationValue;
}