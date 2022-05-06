/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexia_mode = () => {
  let body = document.querySelector("body");

  if (body.className) {
    body.removeAttribute("class");
  } else {
    body.className = 'dyslexia-mode';
  }
}

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexia_mode);