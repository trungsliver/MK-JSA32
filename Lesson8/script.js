// Lấy data từ file json
fetch('./data.json')
    // Chuyển đổi dữ liệu thành đối tượng JavaScript
    .then(response => response.json())
    // Xử lý dữ liệu và hiển thị
    .then(data => {
        // Dùng DOM lấy container
        const container = document.getElementById('product-list');

        // Duyệt data
        data.forEach(product => {
            // Tạo card cho từng sản phẩm
            const card = document.createElement('div');
            card.classList.add('product-card');

            // Thêm nội dung vào card
            card.innerHTML = `
                <img src="${product.image}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${product.price.toLocaleString()} VND</p>
                    <p class="product-description">${product.description}</p>
                    <button class="buy-button">Mua ngay</button>
                </div>
            `;

            // Thêm card vào container
            container.appendChild(card);
        });
    })

