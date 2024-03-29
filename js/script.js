let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
const blob = document.getElementById("blob");
const coords = { x: 0, y: 0 };
var timeout;


// ________________MOUSE MOVE ANIMATION________________


window.addEventListener("mousemove", e => {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

const animate = () => {
  let x = coords.x;
  let y = coords.y;
  setTimeout(() => {
    blob.style.left = x + 'px';
    blob.style.top = y + 'px';
  }, 300); 
  requestAnimationFrame(animate);
};

animate();

document.addEventListener("mousemove", (e) => {
  let x = e.pageX
  let y = e.pageY
  cursor.style.left = x + "px"
  cursor.style.top = y + "px"
  cursor.style.display = "block"
 function mouseStopped(){
    cursor.style.display = "none"
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none"
});


// _______________LETTER HYPIXELED________________

document.querySelectorAll(".logo").forEach(element => {
    element.onmouseover = event => {
      let iteration = 0;
    
      clearInterval(interval);
    
      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * letters.length)]
          })
          .join("");
      
        if(iteration >= event.target.dataset.value.length){ 
          clearInterval(interval);
        }
      
        iteration += 1 / 3; 
      }, 30);
    }
  });

  // _______________Navbar Active Links_______________
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
});
