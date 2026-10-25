// Trả về điểm cao nhất trong mảng, null nếu mảng rỗng
function findHighestScore(scores) {
    if (!scores || scores.length === 0) {
        return null;
    }
    let maxScore = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
    }
    return maxScore;
}

// Trả về số điểm >= ngưỡng threshold
function countAtLeast(scores, threshold) {
    let count = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= threshold) {
            count++;
        }
    }
    return count;
}

// Trả về điểm trung bình, null nếu không có điểm hợp lệ
function averageValidScores(scores) {
    let sum = 0;
    let validCount = 0;

    for (let i = 0; i < scores.length; i++) {
        const currentScore = scores[i];
        if (
            typeof currentScore !== "number" ||
            currentScore !== currentScore ||
            currentScore < 0 ||
            currentScore > 10
        ) continue;
        sum += currentScore;
        validCount++;
    }

    if (validCount === 0) return null;
    return sum / validCount;
}

// Trả về vị trí của điểm đầu tiên thấp hơn điểm passScore, nếu không có trả về -1
function findFirstBelow(scores, passScore) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < passScore) {
            return i;
        }
    }
    return -1;
}

// Trả về số tuần cần thiết để học hết số bài học trong tuần
function weeksToFinish(totalLessons, lessonsPerWeek) {
    if (
        typeof totalLessons !== "number" ||
        totalLessons !== totalLessons ||
        totalLessons < 0 ||
        typeof lessonsPerWeek !== "number" ||
        lessonsPerWeek !== lessonsPerWeek ||
        lessonsPerWeek <= 0
    ) return null;

    if (totalLessons === 0) return 0;

    let weeks = 0;
    let remainingLessons = totalLessons;
    while (remainingLessons > 0) {
        remainingLessons -= lessonsPerWeek;
        weeks++;
    }
    return weeks;
}

// Trả về tổng số bài học đã hoàn thành trong các khóa học
function countCompletedLessons(courses) {
    let completedCount = 0;
    for (let i = 0; i < courses.length; i++) {
        const course = courses[i];
        for (let j = 0; j < course.length; j++) {
            if (course[j] === true) {
                completedCount++;
            }
        }
    }
    return completedCount;
}

// Trả về chuỗi thanh tiến độ tương ứng với phần trăm 
function buildProgressBar(percent) {
    if (
        typeof percent !== "number" ||
        percent !== percent ||
        percent < 0 ||
        percent > 100
    ) return "";
    let filledSlots = 0;
    let currentPercent = percent;
    while (currentPercent >= 10) {
        filledSlots++;
        currentPercent -= 10;
    }

    let content = "";
    for (let i = 0; i < 10; i++) {
        if (i < filledSlots) {
            content += "#";
        } else {
            content += "-";
        }
    }

    return "[" + content + "] " + percent + "%";
}