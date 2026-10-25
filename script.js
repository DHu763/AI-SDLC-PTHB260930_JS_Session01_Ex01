// Quy tắc: Điểm hợp lệ là số từ 0 - 10 
// Xếp loại: Giỏi (>= 8), Khá (>= 6.5), Trung bình (>= 5), Yếu (< 5).
function classifyScore(score) {
    if (typeof score !== "number" || score < 0 || score > 10) {
        return "Điểm không hợp lệ";
    }
    if (score >= 8) {
        return "Giỏi";
    } else if (score >= 6.5) {
        return "Khá";
    } else if (score >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Quy tắc: Đổi mã trạng thái sang tiếng Việt.
// "not_started" -> "Chưa bắt đầu", "in_progress" -> "Đang học", "completed" -> "Hoàn thành", còn lại -> "Trạng thái không xác định".
function getCourseStatusLabel(status) {
    let label;
    switch (status) {
        case "not_started":
            label = "Chưa bắt đầu";
            break;
        case "in_progress":
            label = "Đang học";
            break;
        case "completed":
            label = "Hoàn thành";
            break;
        default:
            label = "Trạng thái không xác định";
    }
    return label;
}

// Quy tắc: Đạt khóa học khi điểm từ điểm chuẩn trở lên.
// Nếu không đặt điểm chuẩn thì mặc định là 5; điểm chuẩn 0 vẫn hợp lệ.
function isPassed(score, passScore) {
    const required = passScore ?? 5;
    return score >= required;
}

// Quy tắc: Giá hợp lệ phải là số >= 0
// Mã giảm giá bỏ khoảng trắng 2 đầu: WELCOME10 giảm 10%, STUDENT20 giảm 20%.
function getFinalPrice(price, couponCode) {
    if (typeof price !== "number" || price < 0) {
        return null;
    }

    let discountPercent = 0;
    const normalizedCode = typeof couponCode === "string" ? couponCode.trim().toUpperCase() : "";

    switch (normalizedCode) {
        case "WELCOME10":
            discountPercent = 10;
            break;
        case "STUDENT20":
            discountPercent = 20;
            break;
        default:
            discountPercent = 0;
    }
    return price - (price * discountPercent) / 100;
}

// Quy tắc: Tiến độ hợp lệ từ 0-100, điểm trung bình hợp lệ từ 0-10.
// Tiến độ < 80 -> "Chưa đủ tiến độ"; Điểm < 5 -> "Chưa đủ điểm"; Còn lại -> "Đủ điều kiện cấp chứng chỉ".
function getCertificateResult(progress, average) {
    const isValidProgress = typeof progress === "number" && progress >= 0 && progress <= 100;
    const isValidAverage = typeof average === "number" && average >= 0 && average <= 10;

    if (!isValidProgress || !isValidAverage) {
        return "Dữ liệu không hợp lệ";
    }
    if (progress < 80) {
        return "Chưa đủ tiến độ";
    } else if (average < 5) {
        return "Chưa đủ điểm";
    } else {
        return "Đủ điều kiện cấp chứng chỉ";
    }
}