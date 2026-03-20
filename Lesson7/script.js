    // Khai báo localStorage key
const STORAGE_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

    // Dùng DOM lấy các phần tử
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const registerMessage = document.getElementById("register-message");
const loginMessage = document.getElementById("login-message");
const userPanelTitle = document.getElementById("user-panel-title");
const userPanelDetails = document.getElementById("user-panel-details");
const logoutButton = document.getElementById("logout-button");

// Hiện message
function showMessage(messageElement, text, type = "info") {
    messageElement.textContent = text;
    messageElement.className = "message";
    // Chỉnh màu sắc dựa trên type
    if (type === "error" || type === "success") {
        messageElement.classList.add(type);
    }
}

// Hash password (đơn giản, chỉ để demo)
function hashPassword(password) {
    // Sử dụng thuật toán hash đơn giản (djb2) để tạo hash từ password
    let hash = 5381;
    // Duyệt qua từng ký tự của password và cập nhật hash
    for (const character of password) {
        hash = (hash * 33) ^ character.charCodeAt(0);
    }
    // Trả về hash dưới dạng chuỗi hex, đảm bảo là một chuỗi hợp lệ bằng cách sử dụng toán tử >>> 0 để chuyển sang số dương
    return `${(hash >>> 0).toString(16)}`;
}

// Validate email và số điện thoại bằng regex (regular expression)
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone) {
    return /^(0|\+84)\d{9,10}$/.test(phone);
}

// Tính tuổi bằng ngày sinh
function getAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
    }

    return age;
}