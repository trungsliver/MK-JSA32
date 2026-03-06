// Lấy dữ liệu từ API
fetch('https://jsonplaceholder.typicode.com/todos')
    // Chuyển đổi dữ liệu thành đối tượng JavaScript (dạng json)
    .then(response => response.json())
    // Xử lý dữ liệu sau khi chuyển đổi
    .then(data => {
        // Dùng DOM lấy container (thẻ div chứa danh sách todo)
        const container = document.getElementById('todo-list');

        // Duyệt danh sách todo (data đã lấy về)
        for (let i=0; i<20; i++){
            const item = data[i];
            // Tạo thẻ p cho từng todo
            const p = document.createElement('p');
            // Lấy dữ liệu và gán vào nội dung thẻ p
            p.textContent = `ID: ${item.id} - Title: ${item.title}`;
            // Thêm thẻ p vào container
            container.appendChild(p);
        }
    })

fetch('https://jsonplaceholder.typicode.com/posts')
    // Chuyển đổi dữ liệu thành đối tượng JavaScript (dạng json)
    .then(response => response.json())
    // Xử lý dữ liệu sau khi chuyển đổi
    .then(data => {
        // Dùng DOM lấy container (thẻ div chứa danh sách post)
        const container = document.getElementById('post-list');

        // Duyệt danh sách post (data đã lấy về)
        for (let i=0; i<20; i++){
            const item = data[i];
            // Tạo thẻ card cho từng post
            const card = document.createElement('div');
            card.className = 'post-card';
            
            // Lấy dữ liệu title và gán vào thẻ h3
            const title = document.createElement('h3');
            title.textContent = item.title;
            // Lấy dữ liệu body và gán vào thẻ p
            const body = document.createElement('p');
            body.textContent = item.body;

            //Thêm h3 và p vào thẻ card
            card.appendChild(title);
            card.appendChild(body);
            // Thêm thẻ card vào container
            container.appendChild(card);
        }
    })