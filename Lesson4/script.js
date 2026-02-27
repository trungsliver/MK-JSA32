// Bài 1: Form đăng ký
    // Dùng DOM để lấy các thẻ từ file HTML
const form = document.getElementById('signUpForm');
const message = document.getElementById('message');

    // Thêm sự kiện submit cho form (khi ấn nút đăng ký)
form.addEventListener('submit', function(event) {
    // Không reload trang
    event.preventDefault();

    // Lấy dữ liệu từ form
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();

    // Kiểm tra dữ liệu
        // Kiểm tra nhập đủ thông tin
    if (!username || !email || !password) {
        message.textContent = 'Vui lòng nhập đầy đủ thông tin.';
        message.style.color = 'red';
        return;
    }

        // Kiểm tra độ dài password
    if (password.length < 6) {
        message.textContent = 'Mật khẩu phải có ít nhất 6 ký tự.';
        message.style.color = 'red';
        return;
    }

    // Hiển thị thông báo thành công
    message.textContent = 'Đăng ký thành công!';
    message.style.color = 'green';
});

// Bài 2: Lấy data từ file để hiển thị website
    // Lấy dữ liệu từ file JSON
fetch('./data.json')
    // Chuyển đổi dữ liệu thành đối tượng JavaScript
    .then(response => response.json())
    // Xử lý dữ liệu sau khi đã chuyển đổi
    .then(data => {
        // Dùng DOM lấy container (thẻ div chứa sản phẩm)
        const container = document.getElementById('productList');

        // Duyệt danh sách sảm phẩm trong data
        for (let item of data) {
            // Tạo thẻ div có class="product-card" cho từng sản phẩm
            const card = document.createElement('div');
            card.className = 'product-card';

            // Lấy dữ liệu img
            const img = document.createElement('img');
            img.src = item.image;

            // Lấy dữ liệu name (tên sản phẩm)
            const name = document.createElement('h3');
            name.textContent = item.name;

            // Lấy dữ liệu price (giá sản phẩm)
            const price = document.createElement('p');
            price.textContent = `Giá: $${item.price}`;

            // Thêm img, name, price vào thẻ div (card)
            card.appendChild(img);
            card.appendChild(name);
            card.appendChild(price);

            // Thêm thẻ div (card) vào container
            container.appendChild(card);
        }
    });


// Bài 3: Hiển thị dữ liệu từu file data.js
function renderStudents(){
    // Dùng DOM lấy container
    const container = document.getElementById('studentList');

    // Duyệt danh sách students
    students.forEach(student => {
        // Tạo thẻ li cho từng student
        const li = document.createElement('li');
        li.textContent = `${student.name} - ${student.age} tuổi`;
        // Thêm thẻ li vào container
        container.appendChild(li);
    });
}
    // Gọi hàm thực hiện
renderStudents()