var imageSources = [
    "data/images/banner-shared/banner4.png",
    "data/images/banner-shared/banner4.jpg"
  ];
  
  var currentIndex = 0;
  var sliderImage = document.getElementById("sliderImage");
  
  function showSlide(index) {
    sliderImage.src = imageSources[index];
  }
  
  function nextSlide() {
    currentIndex++;
    if (currentIndex >= imageSources.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }
  
  // Thay đổi ảnh sau mỗi 3 giây
  setInterval(nextSlide, 3000);
  
  // Khởi tạo slider với ảnh đầu tiên
  showSlide(currentIndex);