// script.js
const exercises = [
    { name: "تمرين ضغط", duration: 60, image: "https://files1.elsport.com/imagine/pictures_730_400/4458228_1483794577.jpg" },   // 1 دقيقة
    { name: "تمرين سكوات", duration: 90, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },   // 1.5 دقيقة
    { name: "تمرين بلانك", duration: 120, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },  // 2 دقيقة
    { name: "تمرين سحب", duration: 75, image: "https://arabic.sport360.com/wp-content/uploads/2016/12/Behind-The-Neck-Cable-Pulldown.jpg" },     // 1.25 دقيقة
    { name: "تمرين كرنش", duration: 60, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },    // 1 دقيقة
    { name: "تمرين اندفاع", duration: 90, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },  // 1.5 دقيقة
    { name: "تمرين رفع أثقال", duration: 120, image: "https://arabic.sport360.com/wp-content/uploads/2016/12/Behind-The-Neck-Cable-Pulldown.jpg" }, // 2 دقيقة
    { name: "تمرين قفز الحبل", duration: 150, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" }, // 2.5 دقيقة
    { name: "تمرين دراجة", duration: 180, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },  // 3 دقيقة
    { name: "تمرين يوجا", duration: 300, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },    // 5 دقيقة
    { name: "تمرين مشي", duration: 120, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" },     // 2 دقيقة
    { name: "تمرين شد عضلي", duration: 150, image: "https://static.webteb.net/images/content/slideshowslide_sss_10214_5906357cedb-473a-4ba8-87f4-c311dc4b9f54.jpg" }  // 2.5 دقيقة
    // مجموع الوقت 17 دقيقة + 1.5 ساعة (أكثر من ساعتين)
];

let currentExerciseIndex = 0;
let timerInterval;

document.getElementById('start-workout').addEventListener('click', function() {
    document.getElementById('exercise-container').classList.remove('hidden');
    startExercise();
});

document.getElementById('start-exercise').addEventListener('click', function() {
    startTimer();
});

document.getElementById('next-exercise').addEventListener('click', function() {
    clearInterval(timerInterval);
    currentExerciseIndex++;
    if (currentExerciseIndex < exercises.length) {
        startExercise();
    } else {
        document.getElementById('exercise-info').innerHTML = '<p>انتهى تمرين اليوم!</p>';
    }
});

document.getElementById('finish-exercise').addEventListener('click', function() {
    clearInterval(timerInterval);
    document.getElementById('exercise-info').innerHTML = '<p>تمارينك انتهت بنجاح!</p>';
});

function startExercise() {
    const exercise = exercises[currentExerciseIndex];
    document.getElementById('exercise-name-text').textContent = `${currentExerciseIndex + 1}. ${exercise.name}`;
    document.getElementById('exercise-image').src = exercise.image;
    document.getElementById('exercise-image').alt = exercise.name;
    document.getElementById('start-exercise').classList.remove('hidden');
    document.getElementById('next-exercise').classList.add('hidden');
    document.getElementById('finish-exercise').classList.add('hidden');
}

function startTimer() {
    const exercise = exercises[currentExerciseIndex];
    let timeLeft = 15 * 60; // 15 دقيقة
    updateTimer(timeLeft);
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('next-exercise').classList.remove('hidden');
        }
    }, 1000);
}

function updateTimer(timeLeft) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

