// Bài 1: Dark mode - Light mode
    // Dùng DOM lấy nút đổi Theme
const themeBtn = document.getElementById('themeBtn');
    // Xử lý sự kiện khi ấn nút
themeBtn.onclick = () => {
    // Thêm hoặc xóa class 'dark' cho body
    document.body.classList.toggle('dark');
    // Lưu trạng thái theme vào localStorage
    if (document.body.classList.contains('dark')) {
        // Lưu trạng thái dark vào localStorage
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
};
    // Load theme từ localStorage khi reload trang
        // Lấy theme đã lưu từ localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    // Nếu theme là dark, thêm class 'dark' cho body
    document.body.classList.add('dark');
}
