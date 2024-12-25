let score = 0;
let currentStep = 0;

const textElement = document.getElementById('text');
const imageElement = document.getElementById('image');
const nextButton = document.getElementById('nextButton');

// 定义每一项的选项内容
const steps = [
    { text: "蕭：謝謝啦，呂！還有ET，遠距離應該沒辦法了，就好聚好散吧！", image: "https://photo.travelking.com.tw/scenery/A13E0D24-C211-4DA6-A092-00679E7C4A54_d.jpg" },
    { text: "你在加拿大拉麵店找到了工作，結交到了一群豬朋狗友（他們都比不上呂）。", image: "https://lh3.googleusercontent.com/p/AF1QipMGIGawlg0grwDrOJrmHwA530_Z5Tbr6nIN9kIN=s680-w680-h510" },
    { text: "你碰到讓你怦然心動的女孩，她是？", image: "https://lh3.googleusercontent.com/d/1L0lsL_EyMXtDDU9cvznr-kkt5DGAReTx=w500", options: ["哈魯（左）", "AOI（右）"] },
    { text: "你們交往不順利，最後還是分手了。", image: "https://premium-cdn.parenting.com.tw/files/upload/article-images/5086696-01JD2RGTF00K7TPBHRX5WRFEG6.jpg" },
    { text: "你換到了台灣餐廳工作，有兩個女同事看起來很閒，你要跟誰搭話？", image: "https://lh3.googleusercontent.com/d/1Sta2iGDDktMgCeHVkjGRQdWhfJjuhYBi=w500", options: ["maggie（中）", "lynn（右二）"] },
    { text: "你跟Maggie情投意合，再三考慮後還是在一起了。", image: "https://i0.wp.com/godiscovertoday.com/wp-content/uploads/2021/07/IMG-1012-r.jpg" },
    { text: "你覺得維持關係很累，似乎什麼事都做不好，所以你開始逃避，每天晚上你都…", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f1/a1/51/bar.jpg?w=600&h=400&s=1", options: ["喝酒", "喝爆幹多酒"] },
    { text: "聖誕節你去了加拿大宜蘭，留下美好回憶。", image: "https://lh3.googleusercontent.com/d/1jBsUpkL-GBcJdKlEC0cCEkIK56P6J1Vg=w500" },
    { text: "回台灣的時刻到了！下飛機之後你看到的第一個認識的人是？", image: "https://imgs.gvm.com.tw/upload/gallery/20230114/129582.jpg" },
    { text: "要公布結局啦", image: "https://i0.wp.com/godiscovertoday.com/wp-content/uploads/2021/07/IMG-1012-r.jpg" }
];

function displayStep() {
    const step = steps[currentStep];
    textElement.innerText = step.text;
    imageElement.src = step.image || "";

    if (step.options) {
        showOptions(step.options);
    } else {
        hideOptions();
    }
}

function chooseOption(choice) {
    if (choice === "B") score++;
    currentStep++;
    displayStep();
}

function showOptions(options) {
    const buttons = document.querySelectorAll('.options button');
    buttons[0].innerText = options[0];
    buttons[1].innerText = options[1];
    document.querySelector('.options').style.display = 'flex';
    nextButton.style.display = 'none';
}

function hideOptions() {
    document.querySelector('.options').style.display = 'none';
    nextButton.style.display = 'block';
}

function displayEnding() {
    const endingText = score === 3
        ? "結局 10-1：竟然是江！「好久不見，兄弟，我早就聽說你在加拿大的抬「頭」挺胸的事蹟囉，快跟我說吧。」"
        : score >= 1
        ? "結局 10-2：你搞砸了一切! 但好險有呂，他不發一聲的知道你回程班機時間跑來等你，你真的很感謝他，並且發誓之後每個月要飯也要給他五千。"
        : "結局 10-3：是Maggie！你認真對待感情，她決定提早跟你一起回來共同生活。";
    textElement.innerText = endingText;
    imageElement.style.display = "none";
    nextButton.style.display = "none";
}

nextButton.addEventListener('click', () => {
    currentStep++;
    if (currentStep < steps.length) {
        displayStep();
    } else {
        displayEnding();
    }
});

window.onload = displayStep;
