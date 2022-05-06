let currentFontsize = 2;

const setFont = () => {
   document.querySelector('.content').style.fontSize = `${currentFontsize}em`; //backtick is next to 1 
   document.querySelector('h1').style.fontSize = `${currentFontsize + 0.5}em`;
}

const makeBigger = (ev) => {

   currentFontsize += 0.2;
   setFont();
};

const makeSmaller = (ev) => {
   currentFontsize -= 0.2;
   setFont();
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

