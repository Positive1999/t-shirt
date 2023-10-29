    // Lấy phần tử cần thao tác
    const loadingElement = document.getElementById('loading');
    // Mảng chứa các chấm
    const dotsArray = [".", "..", "..."];

    // Biến đếm vị trí chấm hiện tại
    let dotIndex = 0;

    // Hàm thay đổi chấm hiện tại và cập nhật nội dung
    function changeDot() {
        loadingElement.innerHTML = `${dotsArray[dotIndex]}`;

        // Di chuyển tới chấm tiếp theo trong mảng
        dotIndex = (dotIndex + 1) % dotsArray.length;
    }

    // Thực hiện hàm changeDot mỗi 1 giây
    setInterval(changeDot, 1000);