const comments = [
    "You are stronger than you think.",
    "Believe in yourself and all that you are.",
    "Every day is a new beginning.",
    "You can achieve anything you set your mind to.",
    "Your potential is limitless.",
    "Keep pushing forward.",
    "You are doing great.",
    "You are capable of amazing things.",
    "Don't give up.",
    "Great things take time.",
    "Your hard work will pay off.",
    "You are enough just as you are.",
    "Embrace the challenges.",
    "They make you stronger.",
    "You have the power to create change.",
    "Every step you take is progress.",
    "You are worthy of love and respect.",
    "Mistakes are proof that you are trying.",
    "Stay positive.",
    "Good things are coming.",
    "You are not alone in this journey.",
    "Your dreams are valid; chase them.",
    "^.^",
    "Believe in the magic of new beginnings.",
    "You have the strength to overcome any obstacle.",
    "Keep smiling; the best is yet to come.",
    "What makes you feel most alive?",
    "0_o",
    "How can you turn your dreams into reality?",
    "What challenges have you already overcome?",
    "What is one thing you are grateful for today?",
    "How can you make today better than yesterday?",
    ";P",
    "What inspires you to keep going?",
    "What are three things you love about yourself?",
    "How can you spread positivity to others?",
    "What is your next big goal?",
    "(UwU)",
    "What small step can you take right now?", 
    "Stay comfortable.", 
    "Welcome to my site!", 
    "How are you?", 
    "Be happy.", 
    "Don't be sad.", 
    "Joy!", 
    "Creative.", 
    "The most important day - Today!", 
    "Nobody can stop you!", 
    "What do you do all day?",
    ":)",
    ":-)",
    ":-D",
    "B-)",
    ":-P",
    "<3",
    "(^_^)",
    "(•_•)",
    "(•̀ᴗ•́)",
    "(¬‿¬)",
    "(✿◠‿◠)",
    "(づ｡◕‿‿◕｡)づ",
    "(╯°□°）╯︵ ┻━┻",
    "( ͡° ͜ʖ ͡°)",
    "(≧▽≦)",
    "(✧ω✧)",
    "(｡♥‿♥｡)",
    "(ノ^_^)ノ",
    "(╯✧▽✧)╯",
    "(´｡• ᵕ •｡`)",
    "(￣︿￣)",
    "(✧ω✧)",
    "(づ￣ ³￣)づ",
    "(¬‿¬)",
    "(｡•̀ᴗ-)✧",
    "(╯✧▽✧)╯",
    "(￣▽￣)ノ",
    "(¬‿¬)",
    "(✿◠‿◠)",
    "(•̀ᴗ•́)",
    "ʕ•́ᴥ•̀ʔっ",
    "ʕ•ᴥ•ʔ",
    "╰(°▽°)╯",
    "(*≧ω≦)",
    "(*^▽^*)",
    "(*´▽｀*)",
    "╮(￣▽￣)╭",
    "（｡>﹏<｡）",
    "（＾ｖ＾）",
    "⊂(◉‿◉)つ",
    "(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    "(*￣▽￣)ノ",
    "☆*:.｡.o(≧▽≦)o.｡.:*☆",
    "（●＾o＾●）",
    "╰(￣ω￣ｃ)",
    "(*≧▽≦)",
    "(⌒▽⌒)",
    "(＾▽＾)",
    "(๑˃̵ᴗ˂̵)و",
    "(•̀ᴗ•́)و ̑̑",
    "(´･ω･`)",
    "(´∩｡• ᵕ •｡∩`)",
    "(｡•̀ᴗ-)✧",
    "☆*:.｡.o(≧▽≦)o.｡.:*☆",
    "You are destined for success)",
    "Keep your head up and smile)",
    "Your dreams are within reach)",
    "You have the courage to face anything)",
    "Every challenge is an opportunity)",
    "You are a beacon of light)",
    "Your journey is unique and beautiful)",
    "You can inspire others with your story)",
    "Your heart is full of kindness)",
    "You are a source of positivity)",
    "Your efforts will lead to great rewards)",
    "You are a shining star)",
    "Your voice matters in this world)",
    "You have the ability to make a difference)",
    "Your happiness is contagious)",
    "You are a wonderful person)",
    "Your smile brightens the day)",
    "You have the strength to rise above)",
    "Your passion fuels your success)",
    "You are loved more than you realize)",
    "Your potential is waiting to be unleashed)",
    "You are capable of achieving your goals)",
    "Your spirit is unbreakable)",
    "You bring joy to those around you)",
    "You are a gift to this world)",
    "Your kindness makes the world better)",
    "You are a warrior in disguise)",
    "Your heart is full of dreams)",
    "You are capable of great things)",
    "Your journey is just beginning)",
    "You are a masterpiece in progress)",
    "Your laughter is music to the soul)",
    "You are a ray of sunshine)",
    "Your uniqueness is your strength)",
    "You are capable of overcoming any obstacle)",
    "Your determination will lead you to greatness)",
    "You are a treasure to those who know you)",
    "Your future is bright)",
    "You are stronger than any challenge)",
    "Your dreams are worth fighting for)",
    "You are a spark of inspiration)",
    "Your kindness creates ripples of joy)",
    "You are a force of nature)",
    "Your heart is full of love)",
    "You are capable of making a change)",
    "Your journey is filled with possibilities)",
    "You are a light in the darkness)",
    "Your dreams are your wings)",
    "You are a beautiful soul)",
    "Your courage will take you far)",
    "You are an inspiration to many)",
    "Your potential knows no bounds)",
    "You are a work of art)",
    "Your presence makes a difference)"
];

var audio = new Audio('LoFi.mp3');
audio.play();

function OnClick() {
    const fadeTextElement = document.getElementById("fadeText"); 
    
    // Задержка перед изменением текста
        const random = Math.floor(Math.random() * comments.length);
        fadeTextElement.textContent = comments[random];
        setOpacity();  // Вызываем setOpacity сразу после установки текста

}

function setOpacity() {
    var el = document.getElementsByClassName("creative")[0];
    var op = 0;
    while (op <= 1) {
        (function(_op) {
            setTimeout(function() { el.style.opacity = _op; }, 60 + op * 600);
        })(op);
        op += 0.1;
    }
}

document.addEventListener("DOMContentLoaded", setOpacity);
document.getElementById("Mybutt").addEventListener("click", OnClick);
