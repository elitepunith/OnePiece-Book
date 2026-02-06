/* =============================================
   OnePiece-Book — Main Script v3.0
   Author: elitepunith
   ============================================= */

// ---- CHARACTER DATABASE ----
var characters = [
    // === STRAW HAT PIRATES ===
    {
        id: "luffy",
        name: "Monkey D. Luffy",
        jp: "モンキー・D・ルフィ",
        color: "#d93a3a",
        group: "Straw Hat Pirates",
        quote: "I'm gonna be King of the Pirates!",
        intro: "The Captain who dreams of becoming King of the Pirates.",
        desc: "Luffy refuses to let anything stand in the way of his belief that being Pirate King means having the most freedom in the world. After awakening the true power of his devil fruit on the rooftop of Onigashima, Luffy became one of the Four Emperors.",
        ability: "<strong>Hito Hito no Mi, Model: Nika</strong><br>Gives him a rubber body and the legendary power of the Sun God — turning imagination into reality. His Gear 5 form is the peak of ridiculous freedom.",
        origin: "East Blue — Foosha Village",
        role: "Captain",
        age: "19",
        height: "174cm",
        debut: "Chapter 1",
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
        quote: "Nothing happened.",
        intro: "The 'Pirate Hunter' and master of the Three-Sword Style.",
        desc: "Zoro aims to become the World's Greatest Swordsman. As the crew's unofficial vice-captain, his loyalty to Luffy is absolute. He tamed the legendary sword Enma in Wano and unlocked Conqueror's Haki coating.",
        ability: "<strong>Santoryu (Three-Sword Style)</strong><br>Wields the Wado Ichimonji, Sandai Kitetsu, and Enma. His King of Hell technique channels Conqueror's Haki through all three blades.",
        origin: "East Blue — Shimotsuki Village",
        role: "Combatant / First Mate",
        age: "21",
        height: "181cm",
        debut: "Chapter 3",
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
        quote: "Happiness Punch!",
        intro: "The crew's expert navigator and cartographer.",
        desc: "Nami guides the ship through the treacherous Grand Line with supernatural skill. Her dream is to draw a complete map of the entire world. She has grown from a thief into one of the bravest pirates sailing the seas.",
        ability: "<strong>Sorcery Clima-Tact</strong><br>Enhanced by Zeus (Big Mom's homie), she can manipulate weather to create devastating thunderstorms, mirages, and freezing blasts.",
        origin: "East Blue — Cocoyama Village",
        role: "Navigator",
        age: "20",
        height: "170cm",
        debut: "Chapter 8",
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
        quote: "I am the great Captain Usopp!",
        intro: "The creative sniper who aspires to be a brave warrior of the sea.",
        desc: "The son of Yasopp. Though often fearful, Usopp faces the most terrifying enemies to protect his friends. His lies have a mysterious habit of becoming truth. He unlocked Observation Haki during the battle at Dressrosa.",
        ability: "<strong>Kuro Kabuto</strong><br>Uses Pop Greens (carnivorous plants), impact dials, and incredible long-range accuracy to control the battlefield from a distance.",
        origin: "East Blue — Syrup Village",
        role: "Sniper",
        age: "19",
        height: "176cm",
        debut: "Chapter 23",
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
        quote: "A real man forgives a woman for her lies.",
        intro: "The amorous chef who uses the 'Black Leg' fighting style.",
        desc: "Sanji searches for the legendary All Blue. He adheres to a strict code of chivalry and fights only with his legs to protect his hands for cooking. His Germa modifications awakened during Whole Cake Island and Wano.",
        ability: "<strong>Ifrit Jambe</strong><br>Combines genetically enhanced exoskeleton with friction-based fire to create blue flames hot enough to rival magma. His speed becomes invisible.",
        origin: "North Blue — Germa Kingdom",
        role: "Cook",
        age: "21",
        height: "180cm",
        debut: "Chapter 43",
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
        quote: "Shut up! That doesn't make me happy at all, you jerk!",
        intro: "A reindeer-doctor who ate the Human-Human Fruit.",
        desc: "Chopper dreams of becoming a doctor who can cure any disease. He uses Rumble Balls to unlock multiple transformation points. Despite his tiny bounty, he is invaluable to the crew.",
        ability: "<strong>Hito Hito no Mi</strong><br>Allows transformation into seven forms including Heavy Point, Horn Point, and the devastating Monster Point.",
        origin: "Grand Line — Drum Island",
        role: "Doctor",
        age: "17",
        height: "90cm",
        debut: "Chapter 134",
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
        quote: "I want to live!",
        intro: "The archaeologist searching for the world's true history.",
        desc: "The sole survivor of Ohara and the only person alive who can read the Poneglyphs. Robin seeks the Rio Poneglyph to uncover the lost Void Century. She mastered a demonic transformation in Wano.",
        ability: "<strong>Hana Hana no Mi</strong><br>Can sprout body parts on any surface. Her Demonio Fleur creates a giant demon form that can clutch and break enemies.",
        origin: "West Blue — Ohara",
        role: "Archaeologist",
        age: "30",
        height: "188cm",
        debut: "Chapter 114",
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
        quote: "SUPER!",
        intro: "The cyborg shipwright who built the Thousand Sunny.",
        desc: "A funky cyborg powered by cola who maintains the crew's ship and fights with an arsenal of hidden weapons. He built the Thousand Sunny using Adam Wood — the finest ship-building material in the world.",
        ability: "<strong>Cyborg Body</strong><br>Equipped with Radical Beams, Weapons Left, and the General Franky — a giant mech battle suit powered by cola fuel.",
        origin: "South Blue — Water 7",
        role: "Shipwright",
        age: "36",
        height: "240cm",
        debut: "Chapter 329",
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
        quote: "May I see your panties?",
        intro: "The humming swordsman who returned from the underworld.",
        desc: "A living skeleton who keeps a 50-year promise to a whale named Laboon at Reverse Mountain. He became a world-famous rock star 'Soul King' during the two-year timeskip. He fights with the chill of the underworld.",
        ability: "<strong>Yomi Yomi no Mi</strong><br>Grants him a second life. His soul can leave his body, freeze enemies with the chill of the underworld, and his music can affect the souls of others.",
        origin: "West Blue",
        role: "Musician / Swordsman",
        age: "90",
        height: "277cm",
        debut: "Chapter 442",
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
        quote: "It's not about whether you can or you can't. Some things you just do!",
        intro: "The Knight of the Sea and helmsman of the Straw Hats.",
        desc: "A former Warlord of the Sea and captain of the Sun Pirates. Jinbe officially joined the Straw Hats in Wano. His mastery of Fish-Man Karate and incredible resolve make him one of the crew's strongest fighters.",
        ability: "<strong>Fish-Man Karate</strong><br>Manipulates water molecules in the air and in living bodies to deliver devastating strikes. His Vagabond Drill can send shockwaves through entire ships.",
        origin: "Grand Line — Fish-Man Island",
        role: "Helmsman",
        age: "46",
        height: "301cm",
        debut: "Chapter 528",
        bounty: "1,100,000,000",
        img: "images/jinbe.jpg",
        power: { strength: 90, speed: 65, haki: 80, devilFruit: 0, endurance: 92 }
    },
    // === LEGENDS ===
    {
        id: "shanks",
        name: "Red-Haired Shanks",
        jp: "シャンクス",
        color: "#8b0000",
        group: "Red Hair Pirates",
        quote: "I bet my arm on the new era.",
        intro: "The Emperor who inspired Luffy to become a pirate.",
        desc: "He sacrificed his left arm to save a young Luffy from a Sea King. Shanks possesses the most powerful Haki in the world — he once stopped an Admiral with just his presence. He is the captain of the Red Hair Pirates.",
        ability: "<strong>Supreme King's Haki</strong><br>Master of all three forms of Haki. His Conqueror's Haki alone can neutralize admirals and shatter the willpower of thousands.",
        origin: "West Blue",
        role: "Emperor / Captain",
        age: "39",
        height: "199cm",
        debut: "Chapter 1",
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
        quote: "If it's one-on-one, Kaido will win.",
        intro: "The 'Strongest Creature' in the world.",
        desc: "A former Emperor who ruled Wano with an iron fist for 20 years. Kaido sought to start the greatest war the world has ever seen. He was defeated by Luffy's Gear 5 on the rooftop of Onigashima.",
        ability: "<strong>Uo Uo no Mi, Model: Seiryu</strong><br>Transforms into a massive Azure Dragon capable of destroying islands with Blast Breath. Combined with supreme Haki, he was nearly invincible.",
        origin: "Grand Line — Vodka Kingdom",
        role: "Former Emperor",
        age: "59",
        height: "710cm",
        debut: "Chapter 795",
        bounty: "4,611,100,000",
        img: "images/kaido.jpg",
        power: { strength: 100, speed: 70, haki: 95, devilFruit: 98, endurance: 100 }
    },
    {
        id: "blackbeard",
        name: "Marshall D. Teach",
        jp: "マーシャル・D・ティーチ",
        color: "#1a1a2e",
        group: "Blackbeard Pirates",
        quote: "People's dreams never end!",
        intro: "The man who holds two Devil Fruit powers.",
        desc: "Blackbeard is the only person known to wield two Devil Fruits simultaneously. He betrayed the Whitebeard Pirates, killed Thatch, and orchestrated the Paramount War. He now rules as one of the Four Emperors.",
        ability: "<strong>Yami Yami no Mi + Gura Gura no Mi</strong><br>The Darkness fruit nullifies other Devil Fruits, while the Quake fruit can crack the air and create tsunamis. Together they make him catastrophically dangerous.",
        origin: "Unknown",
        role: "Emperor / Captain",
        age: "40",
        height: "344cm",
        debut: "Chapter 223",
        bounty: "3,996,000,000",
        img: "images/blackbeard.jpg",
        power: { strength: 92, speed: 55, haki: 78, devilFruit: 100, endurance: 90 }
    },
    {
        id: "law",
        name: "Trafalgar D. Law",
        jp: "トラファルガー・D・ロー",
        color: "#f0c040",
        group: "Heart Pirates",
        quote: "Weaklings can't choose how they die.",
        intro: "The Surgeon of Death and captain of the Heart Pirates.",
        desc: "A member of the Worst Generation and former Warlord. Law formed a crucial alliance with Luffy to take down the Emperors. His strategic mind and Devil Fruit make him one of the most dangerous pirates alive.",
        ability: "<strong>Ope Ope no Mi</strong><br>Creates a spherical space called 'Room' where he controls everything — teleporting, dismembering, and even swapping souls. The ultimate fruit can grant eternal youth.",
        origin: "North Blue — Flevance",
        role: "Captain / Doctor",
        age: "26",
        height: "191cm",
        debut: "Chapter 498",
        bounty: "3,000,000,000",
        img: "images/law.jpg",
        power: { strength: 75, speed: 80, haki: 72, devilFruit: 95, endurance: 78 }
    },
    {
        id: "hancock",
        name: "Boa Hancock",
        jp: "ボア・ハンコック",
        color: "#e91e8c",
        group: "Kuja Pirates",
        quote: "I am beautiful. So I am forgiven.",
        intro: "The Pirate Empress and 'Most Beautiful Woman in the World.'",
        desc: "The Snake Princess of Amazon Lily and a former Warlord of the Sea. She fell in love with Luffy during the Impel Down arc. Her beauty is so overwhelming it can literally turn people to stone — even without her Devil Fruit.",
        ability: "<strong>Mero Mero no Mi</strong><br>Turns anyone who feels attraction toward her into stone. Combined with all three types of Haki and devastating kicking techniques, she is nearly unbeatable.",
        origin: "Grand Line — Amazon Lily",
        role: "Empress / Captain",
        age: "31",
        height: "191cm",
        debut: "Chapter 516",
        bounty: "1,659,000,000",
        img: "images/hancock.jpg",
        power: { strength: 80, speed: 82, haki: 85, devilFruit: 88, endurance: 75 }
    },
    {
        id: "mihawk",
        name: "Dracule Mihawk",
        jp: "ジュラキュール・ミホーク",
        color: "#b8860b",
        group: "Cross Guild",
        quote: "There is no need for words. My sword speaks for itself.",
        intro: "The World's Greatest Swordsman.",
        desc: "Known as 'Hawk Eyes,' Mihawk holds the title of the strongest swordsman alive. He wields Yoru, one of the 12 Supreme Grade swords. After the Warlord system was abolished he joined the Cross Guild with Crocodile and Buggy.",
        ability: "<strong>Yoru — Black Blade</strong><br>A Supreme Grade sword that can slice through entire fleets and icebergs with casual swings. His Observation Haki and precision are unmatched by any living swordsman.",
        origin: "Grand Line",
        role: "Greatest Swordsman",
        age: "43",
        height: "198cm",
        debut: "Chapter 49",
        bounty: "3,590,000,000",
        img: "images/mihawk.jpg",
        power: { strength: 90, speed: 88, haki: 95, devilFruit: 0, endurance: 85 }
    },
    {
        id: "ace",
        name: "Portgas D. Ace",
        jp: "ポートガス・D・エース",
        color: "#ff4500",
        group: "Whitebeard Pirates",
        quote: "Thank you for loving me.",
        intro: "The Fire Fist — Luffy's beloved older brother.",
        desc: "The son of Pirate King Gol D. Roger. Ace was the 2nd Division Commander of the Whitebeard Pirates. He died at Marineford protecting Luffy from Admiral Akainu — a moment that changed the world forever.",
        ability: "<strong>Mera Mera no Mi</strong><br>Transforms his body into fire itself. His signature Fire Fist attack can punch through battleships. After his death the fruit was eaten by Sabo.",
        origin: "South Blue — Baterilla",
        role: "2nd Division Commander",
        age: "20 (deceased)",
        height: "185cm",
        debut: "Chapter 154",
        bounty: "550,000,000",
        img: "images/ace.jpg",
        power: { strength: 85, speed: 82, haki: 75, devilFruit: 90, endurance: 80 }
    },
    
    {
        id: "whitebeard",
        name: "Edward Newgate",
        jp: "エドワード・ニューゲート",
        color: "#daa520",
        group: "Whitebeard Pirates",
        quote: "One Piece does exist!",
        intro: "The 'Strongest Man in the World' and a former Emperor.",
        desc: "Whitebeard was the closest pirate to the One Piece after Roger's death. He treated his crew as family. He died standing at Marineford, never turning his back to an enemy, with over 267 sword wounds, 152 gunshots, and 46 cannon blasts.",
        ability: "<strong>Gura Gura no Mi</strong><br>The most destructive Paramecia — creates earthquakes and tsunamis that can tilt the ocean itself. His quakes can crack the air and destroy entire islands.",
        origin: "Grand Line — Sphinx",
        role: "Former Emperor / Captain",
        age: "72 (deceased)",
        height: "666cm",
        debut: "Chapter 154",
        bounty: "5,046,000,000",
        img: "images/whitebeard.jpg",
        power: { strength: 100, speed: 60, haki: 92, devilFruit: 100, endurance: 100 }
    }
];

// ---- STATE ----
var currentIndex = 0;
var currentFilter = 'all';
var elements = {};

// ---- CACHE DOM ELEMENTS (called after DOM is ready) ----
function cacheElements() {
    elements.charList = document.getElementById('char-list');
    elements.charName = document.getElementById('char-name');
    elements.charJpName = document.getElementById('char-jp-name');
    elements.charGroup = document.getElementById('char-group');
    elements.charIntro = document.getElementById('char-intro');
    elements.charDesc = document.getElementById('char-desc');
    elements.charAbility = document.getElementById('char-ability');
    elements.charOrigin = document.getElementById('char-origin');
    elements.charRole = document.getElementById('char-role');
    elements.charAge = document.getElementById('char-age');
    elements.charHeight = document.getElementById('char-height');
    elements.charDebut = document.getElementById('char-debut');
    elements.charQuote = document.getElementById('char-quote');
    elements.posterName = document.getElementById('poster-name');
    elements.charBounty = document.getElementById('char-bounty');
    elements.posterImg = document.getElementById('poster-img');
    elements.heroBg = document.getElementById('hero-bg');
    elements.posterCard = document.getElementById('poster-card');
    elements.posterShine = document.querySelector('.poster-shine');
    elements.charHeader = document.getElementById('char-header');
    elements.menuBtn = document.getElementById('menu-btn');
    elements.sidebar = document.getElementById('sidebar');
    elements.searchInput = document.getElementById('search-input');
    elements.charCounter = document.getElementById('char-counter');
    elements.powerBars = document.getElementById('power-bars');
    elements.loader = document.getElementById('loader');
    elements.backToTop = document.getElementById('back-to-top');
    elements.contentArea = document.getElementById('content-area');
    elements.randomBtn = document.getElementById('random-btn');
    elements.filterTags = document.getElementById('filter-tags');
}

// ---- INITIALIZATION ----
document.addEventListener('DOMContentLoaded', function() {
    cacheElements();
    buildSidebar();
    loadCharacter(0);
    setupTabs();
    setup3DTilt();
    setupMobileMenu();
    setupKeyboardNav();
    setupSearch();
    setupBackToTop();
    setupRandomBtn();
    setupFilterTags();
    setupSwipeNav();
    hideLoader();
});

// ---- LOADING SCREEN ----
function hideLoader() {
    setTimeout(function() {
        if (elements.loader) {
            elements.loader.classList.add('hidden');
        }
    }, 800);
}

// ---- BUILD SIDEBAR ----
function buildSidebar() {
    var list = elements.charList;
    if (!list) return;

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < characters.length; i++) {
        var char = characters[i];
        var li = document.createElement('li');
        var btn = document.createElement('button');

        btn.className = 'char-btn';
        btn.setAttribute('role', 'option');
        btn.id = 'btn-' + i;

        var nameText = document.createTextNode(char.name);
        btn.appendChild(nameText);

        var groupTag = document.createElement('span');
        groupTag.className = 'char-group-tag';
        groupTag.textContent = char.group;
        btn.appendChild(groupTag);

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
    if (activeBtn) {
        activeBtn.classList.add('active');
        activeBtn.setAttribute('aria-selected', 'true');
        activeBtn.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    // Dynamic accent color
    document.documentElement.style.setProperty('--accent', data.color);
    document.documentElement.style.setProperty('--accent-glow', data.color + '66');

    // Update text content
    if (elements.charName) elements.charName.textContent = data.name;
    if (elements.charJpName) elements.charJpName.textContent = data.jp;
    if (elements.charGroup) elements.charGroup.textContent = data.group;
    if (elements.charIntro) elements.charIntro.innerHTML = data.intro;
    if (elements.charDesc) elements.charDesc.innerHTML = data.desc;
    if (elements.charAbility) elements.charAbility.innerHTML = data.ability;
    if (elements.charOrigin) elements.charOrigin.textContent = data.origin;
    if (elements.charRole) elements.charRole.textContent = data.role;
    if (elements.charAge) elements.charAge.textContent = data.age;
    if (elements.charHeight) elements.charHeight.textContent = data.height;
    if (elements.charDebut) elements.charDebut.textContent = data.debut;
    if (elements.charQuote) elements.charQuote.textContent = '"' + data.quote + '"';

    // Poster updates
    if (elements.posterName) elements.posterName.textContent = data.name.toUpperCase();
    if (elements.charBounty) elements.charBounty.textContent = data.bounty;

    // Counter
    if (elements.charCounter) elements.charCounter.textContent = (index + 1) + ' / ' + characters.length;

    // Image loading with fallback
    loadCharacterImage(data);

    // Power bars
    renderPowerBars(data.power);

    // Switch to Story tab
    switchTab('story');

    // Replay header animation
    replayAnimation(elements.charHeader, 'slideDown 0.6s ease');

    // Update poster alt text
    if (elements.posterImg) elements.posterImg.alt = 'Wanted poster of ' + data.name;
}

// ---- IMAGE LOADER ----
function loadCharacterImage(data) {
    var img = elements.posterImg;
    var hero = elements.heroBg;
    if (!img || !hero) return;

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
    if (!container) return;

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

    card.addEventListener('touchstart', function() {
        card.style.transform = 'rotate(2deg)';
    }, { passive: true });
}

// ---- KEYBOARD NAVIGATION ----
function setupKeyboardNav() {
    document.addEventListener('keydown', function(e) {
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
            if (!btn) continue;

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

// ---- FILTER TAGS ----
function setupFilterTags() {
    if (!elements.filterTags) return;

    var filterButtons = elements.filterTags.querySelectorAll('.filter-btn');

    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('click', function() {
            var filter = this.getAttribute('data-filter');
            currentFilter = filter;

            // Update active filter button
            for (var j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove('active');
            }
            this.classList.add('active');

            // Filter sidebar characters
            var charButtons = document.querySelectorAll('.char-btn');
            var legendGroups = ['Red Hair Pirates', 'Beast Pirates', 'Blackbeard Pirates', 'Heart Pirates', 'Kuja Pirates', 'Cross Guild', 'Whitebeard Pirates'];

            for (var k = 0; k < characters.length; k++) {
                var char = characters[k];
                var btn = charButtons[k];
                if (!btn) continue;

                var show = false;

                if (filter === 'all') {
                    show = true;
                } else if (filter === 'legends') {
                    show = legendGroups.indexOf(char.group) !== -1;
                } else if (filter === 'Marines') {
                    show = char.group === 'Marines';
                } else {
                    show = char.group === filter;
                }

                if (show) {
                    btn.classList.remove('hidden');
                } else {
                    btn.classList.add('hidden');
                }
            }

            // Clear search when filtering
            if (elements.searchInput) {
                elements.searchInput.value = '';
            }
        });
    }
}

// ---- RANDOM PIRATE BUTTON ----
function setupRandomBtn() {
    if (!elements.randomBtn) return;

    elements.randomBtn.addEventListener('click', function() {
        var randomIndex = Math.floor(Math.random() * characters.length);

        // Make sure we don't get the same character
        if (characters.length > 1) {
            while (randomIndex === currentIndex) {
                randomIndex = Math.floor(Math.random() * characters.length);
            }
        }

        loadCharacter(randomIndex);
        closeMobileMenu();
    });
}

// ---- SWIPE NAVIGATION (mobile) ----
function setupSwipeNav() {
    var contentArea = elements.contentArea;
    if (!contentArea) return;

    var touchStartX = 0;
    var touchEndX = 0;
    var minSwipeDistance = 80;

    contentArea.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    contentArea.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;

        if (Math.abs(diff) < minSwipeDistance) return;

        if (diff > 0) {
            // Swiped left — next character
            var next = currentIndex + 1;
            if (next >= characters.length) next = 0;
            loadCharacter(next);
        } else {
            // Swiped right — previous character
            var prev = currentIndex - 1;
            if (prev < 0) prev = characters.length - 1;
            loadCharacter(prev);
        }
    }, { passive: true });
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