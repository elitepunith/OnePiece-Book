// --- HIGH-END DATA ---
const db = [
    {
        id: "luffy",
        name: "Monkey D. Luffy",
        jp: "モンキー・D・ルフィ",
        color: "#d93a3a", // Luffy Red
        group: "Straw Hat Pirates",
        intro: "The man who will become the Pirate King. A rubber-human who fights with absolute freedom.",
        desc: "Luffy is the captain of the Straw Hat Pirates. After eating the Hito Hito no Mi, Model: Nika, he gained the power of the Sun God. He sails the Grand Line driven by a pure desire for adventure and the promise of the One Piece.",
        ability: "<strong>Hito Hito no Mi, Model: Nika</strong><br>Allows the user to transform into the Sun God Nika, gaining a rubber body and the power to turn imagination into reality.",
        origin: "East Blue (Dawn Island)",
        role: "Captain / Emperor",
        age: "19",
        bounty: "3,000,000,000",
        img: "One Piece Reveals Just How Similar Luffy and Kid Are.jpg"
    },
    {
        id: "zoro",
        name: "Roronoa Zoro",
        jp: "ロロノア・ゾロ",
        color: "#1c6b2d", // Zoro Green
        group: "Straw Hat Pirates",
        intro: "The King of Hell. A master swordsman who aims to be the world's strongest.",
        desc: "The first member to join Luffy. Zoro practices the unique Santoryu (Three Sword Style). His loyalty to his captain is absolute, often acting as the crew's disciplinarian and vice-captain figure.",
        ability: "<strong>Santoryu (Three Sword Style)</strong><br>Wields Wado Ichimonji, Sandai Kitetsu, and Enma. Master of Armament and Conqueror's Haki.",
        origin: "East Blue (Shimotsuki)",
        role: "Combatant",
        age: "21",
        bounty: "1,111,000,000",
        img: "zoro.webp"
    },
    {
        id: "sanji",
        name: "Vinsmoke Sanji",
        jp: "ヴィンスモーク・サンジ",
        color: "#0056b3", // Sanji Blue
        group: "Straw Hat Pirates",
        intro: "Black Leg Sanji. A warrior chef who fights with flaming kicks.",
        desc: "The crew's cook who dreams of finding the All Blue. He strictly adheres to a code of chivalry, refusing to use his hands for fighting or to ever harm a woman.",
        ability: "<strong>Ifrit Jambe</strong><br>Combines his genetic enhancements with high-speed friction to create blue flames hotter than magma.",
        origin: "North Blue (Germa)",
        role: "Cook",
        age: "21",
        bounty: "1,032,000,000",
        img: "sanji.jpg"
    },
    {
        id: "nami",
        name: "Nami",
        jp: "ナミ",
        color: "#e69138", // Nami Orange
        group: "Straw Hat Pirates",
        intro: "The Cat Burglar. A navigator who commands the weather itself.",
        desc: "An expert cartographer and meteorologist. Using her Clima-Tact and the thundercloud Zeus, she can manipulate the weather to strike down powerful foes with lightning.",
        ability: "<strong>Sorcery Clima-Tact</strong><br>Weaponized weather manipulation augmented by the soul of Zeus.",
        origin: "East Blue (Cocoyasi)",
        role: "Navigator",
        age: "20",
        bounty: "366,000,000",
        img: "nami.jpg"
    },
    {
        id: "ussop",
        name: "God Usopp",
        jp: "ウソップ",
        color: "#c5a059", // Usopp Yellow
        group: "Straw Hat Pirates",
        intro: "A brave warrior of the sea. The sniper with a thousand lies and a golden heart.",
        desc: "Though cowardly by nature, Usopp faces his fears to protect his friends. He is a master sniper and engineer who uses Pop Greens—plant-based explosives—to control the battlefield.",
        ability: "<strong>Kuro Kabuto</strong><br>A giant slingshot that fires Pop Greens, versatile plant seeds with various combat effects.",
        origin: "East Blue (Syrup)",
        role: "Sniper",
        age: "19",
        bounty: "500,000,000",
        img: "ussop.webp"
    }
];

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    loadChar('luffy'); // Default
});

// --- RENDER SIDEBAR ---
function renderSidebar() {
    const list = document.getElementById('char-list');
    db.forEach(char => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'char-btn';
        btn.textContent = char.name;
        btn.onclick = () => loadChar(char.id);
        btn.id = `btn-${char.id}`;
        li.appendChild(btn);
        list.appendChild(li);
    });
}

// --- LOAD CHARACTER (The magic happens here) ---
function loadChar(id) {
    const data = db.find(c => c.id === id);
    if (!data) return;

    // 1. Update Active State in Sidebar
    document.querySelectorAll('.char-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${id}`).classList.add('active');

    // 2. Dynamic Theme Colors (CSS Variables)
    document.documentElement.style.setProperty('--accent', data.color);

    // 3. Update Text Content
    document.getElementById('char-name').textContent = data.name;
    document.getElementById('char-jp-name').textContent = data.jp;
    document.getElementById('char-group').textContent = data.group;
    
    document.getElementById('char-intro').innerHTML = data.intro;
    document.getElementById('char-desc').innerHTML = data.desc;
    document.getElementById('char-ability').innerHTML = data.ability;

    document.getElementById('char-origin').textContent = data.origin;
    document.getElementById('char-role').textContent = data.role;
    document.getElementById('char-age').textContent = data.age;

    // 4. Update Poster
    document.getElementById('poster-name').textContent = data.name;
    document.getElementById('char-bounty').textContent = data.bounty;
    document.getElementById('poster-img').src = data.img;

    // 5. Update Background (Using the character image blurred as BG)
    const hero = document.getElementById('hero-bg');
    hero.style.backgroundImage = `url('${data.img}')`;
    
    // Reset Tabs
    openTab('story');
}

// --- TABS ---
window.openTab = function(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    const btns = document.querySelectorAll('.tab-btn');

    contents.forEach(c => c.classList.remove('active'));
    btns.forEach(b => b.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    // Find button that triggered this (simple check based on text for now)
    Array.from(btns).find(b => b.getAttribute('onclick').includes(tabName)).classList.add('active');
}