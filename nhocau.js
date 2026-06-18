let currentLang = 'vi';
let savedUserMessage = '';

// DANH SÁCH ẢNH CON MÈO 
const myFallingImages = [
    "./img/1.jpg",
    "./img/2.jpg",
    "./img/2.jpg",
    "./img/4.jpg",
    "./img/5.jpg",
    "./img/6.jpg",
    "./img/7.jpg",
    "./img/8.jpg",
    "./img/9.jpg",
    "./img/10.jpg",
    "./img/11.jpg",
    "./img/12.jpg",
    "./img/13.jpg",
    "./img/14.jpg",
    "./img/15.jpg",
    "./img/16.jpg",
    "./img/17.jpg",
    "./img/18.jpg",
    "./img/19.jpg",
    "./img/20.jpg"
];

const translations = {
    vi: {
        poem: "Mây đẹp mây thuộc về trời<br>Nàng đẹp thuộc về người nàng yêu<br>Anh chỉ biết nhìn từ xa<br>Nhìn nàng hạnh phúc bên người Nàng yêu",
        question: "Em có nhớ anh không?",
        btnYes: "Có nhớ",
        btnNo: "Không nhớ",
        resYes: "Anh cũng rất nhớ em! ❤️",
        resNo: "Buồn quá, nhưng anh vẫn luôn nhớ em! 😢",
        btnRemember: "💌 Gửi lời nhắn cho anh",
        btnBack: "Quay lại",
        
        msgTitle: "Gửi lời nhắn",
        msgPlaceholder: "Viết gì đó cho anh nhé...",
        btnSend: "Tiếp tục",
        btnBackMsg: "Quay lại",
        
        dateTitle: "Em có muốn có một buổi gặp mặt với anh không? 🥰",
        genderLabel: "Giới tính của em:",
        genders: ["Nữ", "Nam", "Lựa chọn khác"],
        outfitLabel: "Em sẽ mặc gì nhỉ:",
        outfits: ["Váy xinh xắn", "Quần áo thoải mái", "Trang phục thanh lịch", "Bất ngờ nhé!"],
        locationLabel: "Mình sẽ đi đâu:",
        locations: ["Đi xem phim", "Đi ăn đồ ngon", "Đi uống cà phê", "Đi dạo chơi", "Nhà hát", "Để anh chọn!"],
        btnSubmitDate: "Chốt kèo luôn! 💕",
        btnSkipDate: "Bỏ qua hẹn hò",
        dateHeader: "--- THÔNG TIN CUỘC HẸN ---",
        
        sendSuccess: "Đang mở ứng dụng gửi thư. Cảm ơn em!",
        adminSubject: "Lời nhắn và Cuộc hẹn từ Website",
        btnHome: "Về trang chủ"
    },
    en: {
        poem: "Beautiful clouds belong to the sky,<br>A beautiful girl belongs to the one she loves.<br>I can only watch from afar,<br>Seeing her happy with the one she loves.",
        question: "Do you miss me?",
        btnYes: "Yes, I do",
        btnNo: "No, I don't",
        resYes: "I miss you too! ❤️",
        resNo: "So sad, but I still miss you! 😢",
        btnRemember: "💌 Send me a message",
        btnBack: "Back",
        
        msgTitle: "Send a Message",
        msgPlaceholder: "Write something to me...",
        btnSend: "Continue",
        btnBackMsg: "Back",

        dateTitle: "Would you like to meet up with me? 🥰",
        genderLabel: "Your gender:",
        genders: ["Female", "Male", "Other"],
        outfitLabel: "What will you wear:",
        outfits: ["A cute dress", "Casual clothes", "Elegant outfit", "Surprise me!"],
        locationLabel: "Where should we go:",
        locations: ["Watch a movie", "Go get food", "Drink coffee", "Hang out", "Theater", "You decide!"],
        btnSubmitDate: "Let's do it! 💕",
        btnSkipDate: "Skip date",
        dateHeader: "--- DATE PREFERENCES ---",

        sendSuccess: "Opening mail client. Thank you!",
        adminSubject: "Message and Date Request from Website",
        btnHome: "Home"
    },
    zh: {
        poem: "美丽的云朵属于天空<br>美丽的女孩属于她爱的人<br>我只能在远处默默注视<br>看着你和你爱的人幸福相伴",
        question: "你想我吗？",
        btnYes: "想",
        btnNo: "不想",
        resYes: "我也很想你！ ❤️",
        resNo: "好伤心，但我还是会一直想你！ 😢",
        btnRemember: "💌 给我留言",
        btnBack: "返回",
        
        msgTitle: "给我留言",
        msgPlaceholder: "在这里写下你想说的话...",
        btnSend: "继续",
        btnBackMsg: "返回",

        dateTitle: "你想和我见一面吗？ 🥰",
        genderLabel: "你的性别：",
        genders: ["女", "男", "其他"],
        outfitLabel: "你想穿什么：",
        outfits: ["漂亮的裙子", "休闲装", "优雅的衣服", "保密！"],
        locationLabel: "我们去哪里：",
        locations: ["看电影", "去吃好吃的", "喝咖啡", "出去玩", "去剧院", "你来定！"],
        btnSubmitDate: "就这么定了！ 💕",
        btnSkipDate: "跳过约会",
        dateHeader: "--- 约会偏好 ---",

        sendSuccess: "正在打开邮件客户端。谢谢你！",
        adminSubject: "来自网站的留言和约会请求",
        btnHome: "回首页"
    }
};

const languageAudioTracks = { 
    vi: './audio/vi.mp3', 
    en: './audio/en.mp3', 
    zh: './audio/zh.mp3' 
};
const adminEmail = 'any683104@gmail.com';
const pageIds = ['language-page', 'content-page', 'message-page', 'date-page', 'thanks-page'];

function showPage(pageId) {
    pageIds.forEach((id) => {
        const page = document.getElementById(id);
        if (page) {
            page.style.display = id === pageId ? 'inline-block' : 'none';
        }
    });
}

function populateSelect(selectId, optionsArray) {
    const select = document.getElementById(selectId);
    if (!select) return;
    select.innerHTML = '';
    optionsArray.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt;
        option.innerText = opt;
        select.appendChild(option);
    });
}

// HÀM TẠO ẢNH RƠI TỰ ĐỘNG
function createFallingImages() {
    const fallingContainer = document.getElementById('falling-container');
    if (!fallingContainer || myFallingImages.length === 0) return;

    const totalImages = 25; // Số lượng ảnh muốn xuất hiện

    for (let i = 0; i < totalImages; i++) {
        const img = document.createElement('img');
        const randomImageSrc = myFallingImages[Math.floor(Math.random() * myFallingImages.length)];
        
        img.src = randomImageSrc;
        img.className = 'falling-img'; 
        
        img.style.left = (Math.random() * 95) + 'vw';
        
        const randomSize = Math.random() * 40 + 40;
        img.style.width = randomSize + 'px';
        img.style.height = randomSize + 'px';
        
        img.style.animationDuration = (Math.random() * 8 + 6) + 's';
        img.style.animationDelay = (Math.random() * 10) + 's';
        
        fallingContainer.appendChild(img);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let currentAudio = null;

    function stopCurrentAudio() {
        if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    }
    
    function playLanguageAudio(lang) {
        const audioSrc = languageAudioTracks[lang];
        if (!audioSrc) return;
        stopCurrentAudio();
        currentAudio = new Audio(audioSrc);
        currentAudio.preload = 'auto';
        const playPromise = currentAudio.play();
        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch((error) => console.warn('Could not play audio:', error));
        }
    }
    
    window.playLanguageAudio = playLanguageAudio;

    // GỌI HÀM TẠO ẢNH RƠI NGAY KHI TRANG TẢI XONG
    createFallingImages();
});

function setLanguage(lang) {
    currentLang = lang; 
    if (typeof window.playLanguageAudio === 'function') {
        window.playLanguageAudio(lang);
    }

    const t = translations[lang];

    document.getElementById('poem').innerHTML = t.poem;
    document.getElementById('question').innerText = t.question;
    document.getElementById('btn-yes').innerText = t.btnYes;
    document.getElementById('btn-no').innerText = t.btnNo;
    document.getElementById('remember-btn').innerText = t.btnRemember;
    document.getElementById('back-btn').innerText = t.btnBack;
    
    document.getElementById('msg-title').innerText = t.msgTitle;
    document.getElementById('admin-message').placeholder = t.msgPlaceholder;
    document.getElementById('btn-send').innerText = t.btnSend;
    document.getElementById('btn-back-msg').innerText = t.btnBackMsg;

    document.getElementById('date-title').innerText = t.dateTitle;
    document.getElementById('label-gender').innerText = t.genderLabel;
    document.getElementById('label-outfit').innerText = t.outfitLabel;
    document.getElementById('label-location').innerText = t.locationLabel;
    document.getElementById('btn-submit-date').innerText = t.btnSubmitDate;
    document.getElementById('btn-skip-date').innerText = t.btnSkipDate;
    
    populateSelect('date-gender', t.genders);
    populateSelect('date-outfit', t.outfits);
    populateSelect('date-location', t.locations);

    document.getElementById('thanks-msg').innerText = t.sendSuccess;
    document.getElementById('btn-home').innerText = t.btnHome;

    document.getElementById('response-msg').innerText = "";
    document.getElementById('back-btn').classList.add('hidden-until-answer');
    document.getElementById('remember-btn').classList.add('hidden-until-answer');

    showPage('content-page');
}

function reply(isYes) {
    const msgElement = document.getElementById('response-msg');
    const backButton = document.getElementById('back-btn');
    const rememberButton = document.getElementById('remember-btn');
    if (isYes) {
        msgElement.innerText = translations[currentLang].resYes;
        msgElement.style.color = "#28a745"; 
    } else {
        msgElement.innerText = translations[currentLang].resNo;
        msgElement.style.color = "#d9534f"; 
    }
    if (backButton) backButton.classList.remove('hidden-until-answer');
    if (rememberButton) rememberButton.classList.remove('hidden-until-answer');
}

function goBack() {
    document.getElementById('response-msg').innerText = ""; 
    document.getElementById('back-btn').classList.add('hidden-until-answer');
    document.getElementById('remember-btn').classList.add('hidden-until-answer');
    showPage('language-page');
}

function openRememberPage() {
    showPage('message-page');
}

function goBackFromMessage() {
    showPage('content-page');
}

function goToDatePage() {
    const messageBox = document.getElementById('admin-message');
    savedUserMessage = (messageBox.value || '').trim();

    if (!savedUserMessage) {
        messageBox.focus(); 
        return;
    }
    showPage('date-page');
}

function sendFinalEmail(includeDateInfo) {
    let finalBody = savedUserMessage;

    if (includeDateInfo) {
        const gender = document.getElementById('date-gender').value;
        const outfit = document.getElementById('date-outfit').value;
        const location = document.getElementById('date-location').value;
        const dateHeader = translations[currentLang].dateHeader;

        finalBody += `\n\n${dateHeader}\n- Giới tính: ${gender}\n- Trang phục: ${outfit}\n- Điểm hẹn: ${location}`;
    }

    const subject = encodeURIComponent(translations[currentLang].adminSubject);
    const body = encodeURIComponent(finalBody);
    const mailtoUrl = `mailto:${adminEmail}?subject=${subject}&body=${body}`;

    showPage('thanks-page');
    window.setTimeout(() => {
        window.open(mailtoUrl, '_blank', 'noopener');
    }, 50);
}

function returnToStart() {
    document.getElementById('admin-message').value = ''; 
    savedUserMessage = '';
    showPage('language-page');
}