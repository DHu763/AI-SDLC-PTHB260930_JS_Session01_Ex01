function normalizeName(rawName) {
    // Lỗi cũ: không xóa khoảng trắng thừa ở hai đầu chuỗi tên
    return rawName.trim().toUpperCase();
}

function isValidScore(scoreText) {
    const score = scoreText.trim();
    // Lỗi cũ: Dùng parseInt() tự rút gọn phần thập phân; và không chặn chuỗi rỗng
    if (score === "") {
        return false;
    }
    const scoreValue = Number(score);
    return scoreValue >= 0 && scoreValue <= 10;
}

function calcAverage(quizText, examText) {
    // Lỗi cũ: Cộng trực tiếp hai chuỗi làm phép '+' thực hiện nối chuỗi rồi mới chia 2
    const quizScore = Number(quizText);
    const examScore = Number(examText);
    return (quizScore + examScore) / 2;
}

function canGetCertificate(progressText, average) {
    // Lỗi cũ: Chưa ép kiểu progressText sang số và dùng sai toán tử '||' 
    const progressValue = Number(progressText);
    return progressValue >= 80 && average >= 5;
}

function buildScoreMessage(rawName, average) {
    // Lỗi cũ: Nối chuỗi bằng dấu '+' và trả về giá trị rawName chưa qua hàm chuẩn hóa normalizeName
    const studentName = normalizeName(rawName);
    return `Học viên ${studentName}: ${average} điểm`;
}