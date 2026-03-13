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

// Bài 2: Danh sách ghi chú
    // Lấy danh sách ghi chú từ localStorage hoặc khởi tọa danh sách rỗng
const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // Hàm hiển thị ghi chú lên giao diện
function displayNotes() {
    // Dùng DOM lấy container (thẻ ul)
    const container = document.getElementById('note-list');
    // Xóa nội dung cũ trong container
    container.innerHTML = '';
    // Duyệt danh sách notes và tạo thẻ <li> cho từng note
    notes.forEach((item, index) => {
        container.innerHTML += `<li>${item}</li>`;
    });
}
displayNotes();
    // Xử lý sự kiện ấn nút "Thêm"
const addBtn = document.getElementById('addNote');
addBtn.onclick = () => {
    let content = document.getElementById('noteInput').value.trim();
    if (content) {
        // Thêm ghi chú mới vào danh sách notes
        notes.push(content);
        // Lưu danh sách notes vào localStorage
        localStorage.setItem('notes', JSON.stringify(notes));
        // Hiển thị lại danh sách ghi chú
        displayNotes();
        // Xóa nội dung trong input sau khi thêm
        document.getElementById('noteInput').value = '';
    }
};