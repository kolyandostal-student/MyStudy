// Массив с путями к изображениям
const slides = [
  "SLider\1.jpg",
  "SLider\2.jpg",
  "SLider\3.jpg",
  "SLider\4.jpg",
  "SLider\5.jpg",
  "SLider\6.jpg",
]

let currentIndex = 0

// Получаем элементы
const sliderContent = document.getElementById("slider-content")
const currentCounter = document.getElementById("current")
const totalCounter = document.getElementById("total")
const paginationContainer = document.getElementById("slider-pagination")

// Функция обновления слайда
function updateSlide() {
  sliderContent.src = slides[currentIndex]
  currentCounter.textContent = currentIndex + 1
  totalCounter.textContent = slides.length

  // Обновляем активную точку
  const dots = document.querySelectorAll(".slider-pagination button")
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex)
  })
}

// Создаём точки навигации
function createPagination() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button")
    dot.addEventListener("click", () => {
      currentIndex = index
      updateSlide()
    })
    if (index === currentIndex) dot.classList.add("active")
    paginationContainer.appendChild(dot)
  })
}

// Логика кнопок
document.getElementById("prev").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--
    updateSlide()
  }
})

document.getElementById("next").addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++
    updateSlide()
  }
})

// Автопрокрутка каждые 3 секунды
function startAutoPlay() {
  return setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length
    updateSlide()
  }, 3000) // 3 секунды
}

// Запуск при загрузке
window.addEventListener("DOMContentLoaded", () => {
  createPagination()
  updateSlide()
  startAutoPlay() // Можно убрать, если не нужна автопрокрутка
})
