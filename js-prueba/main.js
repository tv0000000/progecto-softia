// función para cambier color del nav
window.addEventListener("scroll", function() {
  let nav = document.getElementById("header");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Terminar de verificar función
function startCounter(target, start, end) {
    let current = start;
    const element = document.getElementById(target);
  
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const interval = setInterval(() => {
          if (current <= end) {
            element.textContent = current;
            current++;
          } else {
            clearInterval(interval);
          }
        }, 10); // Ajusta el intervalo de actualización del contador aquí
      }
    });
  
    observer.observe(element);
  }
  
  startCounter("counter1", 1, 350);
  startCounter("counter2", 1, 250);
  startCounter("counter3", 1, 300);
  

