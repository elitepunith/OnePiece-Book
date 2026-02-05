// --- DATABASE ---
const db = [
    // === STRAW HAT PIRATES ===
    {
        id: "luffy",
        name: "Monkey D. Luffy",
        jp: "モンキー・D・ルフィ",
        color: "#d93a3a",
        group: "Straw Hat Pirates",
        intro: "The Captain who dreams of becoming King of the Pirates.",
        desc: "Luffy refuses to let anything stand in the way of his belief that being Pirate King means having the most freedom in the world.",
        ability: "<strong>Hito Hito no Mi, Model: Nika</strong><br>Gives him a rubber body and the power to turn imagination into reality.",
        origin: "East Blue",
        role: "Captain",
        age: "19",
        bounty: "3,000,000,000",
        // SUGGESTION: Rename your image file to 'luffy.jpg'
        img: "luffy.jpg" 
    },
    {
        id: "zoro",
        name: "Roronoa Zoro",
        jp: "ロロノア・ゾロ",
        color: "#1c6b2d",
        group: "Straw Hat Pirates",
        intro: "The 'Pirate Hunter' and master of the Three-Sword Style.",
        desc: "Zoro aims to become the World's Greatest Swordsman. He is the crew's vice-captain figure.",
        ability: "<strong>Santoryu</strong><br>Wields the Wado Ichimonji, Sandai Kitetsu, and Enma.",
        origin: "East Blue",
        role: "Combatant",
        age: "21",
        bounty: "1,111,000,000",
        img: "zoro.jpg" // Updated to .jpg
    },
    {
        id: "nami",
        name: "Nami",
        jp: "ナミ",
        color: "#e69138",
        group: "Straw Hat Pirates",
        intro: "The crew's expert navigator and cartographer.",
        desc: "Nami guides the ship through the treacherous Grand Line. Her dream is to draw a map of the entire world.",
        ability: "<strong>Sorcery Clima-Tact</strong><br>Manipulates the weather to create mirages and thunderclouds.",
        origin: "East Blue",
        role: "Navigator",
        age: "20",
        bounty: "366,000,000",
        img: "nami.jpg"
    },
    {
        id: "ussop",
        name: "God Usopp",
        jp: "ウソップ",
        color: "#c5a059",
        group: "Straw Hat Pirates",
        intro: "The creative sniper who aspires to be a brave warrior.",
        desc: "The son of Yasopp. Though often fearful, Usopp faces the most terrifying enemies to protect his friends.",
        ability: "<strong>Kuro Kabuto</strong><br>Uses Pop Greens (carnivorous plants) to control the battlefield.",
        origin: "East Blue",
        role: "Sniper",
        age: "19",
        bounty: "500,000,000",
        img: "ussop.jpg" // Updated to .jpg
    },
    {
        id: "sanji",
        name: "Vinsmoke Sanji",
        jp: "ヴィンスモーク・サンジ",
        color: "#0056b3",
        group: "Straw Hat Pirates",
        intro: "The amorous chef who uses the 'Black Leg' fighting style.",
        desc: "Sanji searches for the All Blue. He adheres to a strict code of chivalry and fights only with his legs.",
        ability: "<strong>Ifrit Jambe</strong><br>Combines genetic enhancements with friction to create blue flames.",
        origin: "North Blue",
        role: "Cook",
        age: "21",
        bounty: "1,032,000,000",
        img: "sanji.jpg"
    },
    {
        id: "chopper",
        name: "Tony Tony Chopper",
        jp: "トニートニー・チョッパー",
        color: "#ff69b4",
        group: "Straw Hat Pirates",
        intro: "A reindeer-doctor who ate the Human-Human Fruit.",
        desc: "Chopper dreams of becoming a doctor who can cure any disease. He uses Rumble Balls to transform.",
        ability: "<strong>Hito Hito no Mi</strong><br>Allows transformation into multiple forms, including Monster Point.",
        origin: "Grand Line",
        role: "Doctor",
        age: "17",
        bounty: "1,000",
        img: "chopper.jpg"
    },
    {
        id: "robin",
        name: "Nico Robin",
        jp: "ニコ・ロビン",
        color: "#800080",
        group: "Straw Hat Pirates",
        intro: "The archaeologist searching for the world's true history.",
        desc: "The sole survivor of Ohara. Robin seeks the Rio Poneglyph to uncover the Void Century.",
        ability: "<strong>Hana Hana no Mi</strong><br>Can sprout body parts on any surface to clutch enemies.",
        origin: "West Blue",
        role: "Archaeologist",
        age: "30",
        bounty: "930,000,000",
        img: "robin.jpg"
    },
    {
        id: "franky",
        name: "Franky",
        jp: "フランキー",
        color: "#00aae4",
        group: "Straw Hat Pirates",
        intro: "The cyborg shipwright who built the Thousand Sunny.",
        desc: "A funky cyborg who maintains the ship and fights with an arsenal of hidden weapons.",
        ability: "<strong>Cyborg Body</strong><br>Equipped with Radical Beams and the General Franky mech.",
        origin: "South Blue",
        role: "Shipwright",
        age: "36",
        bounty: "394,000,000",
        img: "franky.jpg"
    },
    {
        id: "brook",
        name: "Soul King Brook",
        jp: "ブルック",
        color: "#a6a6a6",
        group: "Straw Hat Pirates",
        intro: "The humming swordsman who returned from the underworld.",
        desc: "A living skeleton who keeps a promise to a whale named Laboon. He fights with the chill of the grave.",
        ability: "<strong>Yomi Yomi no Mi</strong><br>Allows his soul to leave his body and freeze enemies.",
        origin: "West Blue",
        role: "Musician",
        age: "90",
        bounty: "383,000,000",
        img: "brook.jpg"
    },
    {
        id: "shanks",
        name: "Red-Haired Shanks",
        jp: "シャンクス",
        color: "#8b0000",
        group: "Red Hair Pirates",
        intro: "The Emperor who inspired Luffy to become a pirate.",
        desc: "He sacrificed his left arm to save Luffy. His Haki is the strongest in the world.",
        ability: "<strong>Supreme Haki</strong><br>Master of all three forms of Haki.",
        origin: "West Blue",
        role: "Emperor",
        age: "39",
        bounty: "4,048,900,000",
        img: "shanks.jpg"
    },
    {
        id: "kaido",
        name: "Kaido",
        jp: "カイドウ",
        color: "#594d75",
        group: "Beast Pirates",
        intro: "The 'Strongest Creature' in the world.",
        desc: "A former Emperor who ruled Wano. He seeks to start the greatest war the world has ever seen.",
        ability: "<strong>Uo Uo no Mi</strong><br>Transforms into a massive Azure Dragon.",
        origin: "Grand Line",
        role: "Emperor",
        age: "59",
        bounty: "4,611,100,000",
        img: "kaido.jpg" // Ensure you have this file!
    }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    loadChar(0); 
    init3DTilt();
    initMobileMenu();
    initKeyboardNav();
});

function renderSidebar() {
    const list = document.getElementById('char-list');
    db.forEach((char, index) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'char-btn';
        btn.textContent = char.name;
        btn.onclick = () => { loadChar(index); closeMobileMenu(); };
        btn.id = `btn-${index}`;
        li.appendChild(btn);
        list.appendChild(li);
    });
}

function loadChar(index) {
    if (index < 0 || index >= db.length) return;
    currentIndex = index;
    const data = db[index];

    // UI Updates
    document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${index}`).classList.add('active');
    document.documentElement.style.setProperty('--accent', data.color);

    document.getElementById('char-name').textContent = data.name;
    document.getElementById('char-jp-name').textContent = data.jp;
    document.getElementById('char-group').textContent = data.group;
    document.getElementById('char-intro').innerHTML = data.intro;
    document.getElementById('char-desc').innerHTML = data.desc;
    document.getElementById('char-ability').innerHTML = data.ability;
    document.getElementById('char-origin').textContent = data.origin;
    document.getElementById('char-role').textContent = data.role;
    document.getElementById('char-age').textContent = data.age;

    // Poster Updates
    document.getElementById('poster-name').textContent = data.name;
    document.getElementById('char-bounty').textContent = data.bounty;

    // --- SMART IMAGE LOADER (THE FIX) ---
    const img = document.getElementById('poster-img');
    const hero = document.getElementById('hero-bg');

    // Reset to transparent/loading state first
    img.style.opacity = '0'; 
    
    // Try to load the character image
    const tempImg = new Image();
    tempImg.src = data.img;
    
    tempImg.onload = () => {
        img.src = data.img;
        hero.style.backgroundImage = `url('${data.img}')`;
        img.style.opacity = '1'; // Fade in when ready
    };

    // IF IT FAILS: Use the logo instead
    tempImg.onerror = () => {
        console.log(`Missing image for ${data.name}. Using fallback.`);
        img.src = "logo.jpg"; 
        hero.style.backgroundImage = `url('logo.jpg')`;
        img.style.opacity = '1';
    };

    openTab('story');
    
    // Header Animation Replay
    const header = document.querySelector('.char-header');
    header.style.animation = 'none';
    header.offsetHeight; 
    header.style.animation = 'slideDown 0.6s ease';
}

window.openTab = function(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const btns = document.querySelectorAll('.tab-btn');
    contents.forEach(c => c.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    const activeBtn = Array.from(btns).find(b => b.getAttribute('onclick').includes(tabName));
    if(activeBtn) activeBtn.classList.add('active');
}

function init3DTilt() {
    const card = document.getElementById('poster-card');
    const shine = document.querySelector('.poster-shine');
    if(!card) return;

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        const shineX = ((x / rect.width) * 100);
        const shineY = ((y / rect.height) * 100);
        shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 80%)`;
        shine.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) rotateZ(2deg) scale(1)`;
        shine.style.opacity = '0';
    });
}

function initKeyboardNav() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            let next = currentIndex + 1;
            if (next >= db.length) next = 0;
            loadChar(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            let prev = currentIndex - 1;
            if (prev < 0) prev = db.length - 1; 
            loadChar(prev);
        }
    });
}

function initMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    if(btn && sidebar) {
        btn.addEventListener('click', () => {
            btn.classList.toggle('open');
            sidebar.classList.toggle('open');
        });
    }
}

function closeMobileMenu() {
    const btn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    if(btn) btn.classList.remove('open');
    if(sidebar) sidebar.classList.remove('open');
}