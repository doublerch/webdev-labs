const makeBigger = () => {
   // alert('make bigger!');
   content = document.querySelector(".content");
   contentFont = parseFloat(
      getComputedStyle(content).getPropertyValue('font-size')
   )
   content.style.fontSize =  contentFont + 4 + "px"


   header = document.querySelector("h1");
   headerFont = parseFloat(
      getComputedStyle(header).getPropertyValue('font-size')
   )
   header.style.fontSize =  headerFont + 4 + "px"

};

const makeSmaller = () => {
   // alert('make smaller!');
   content = document.querySelector(".content");
   contentFont = parseFloat(
      getComputedStyle(content).getPropertyValue('font-size')
   )
   content.style.fontSize =  contentFont - 4 + "px"


   header = document.querySelector("h1");
   headerFont = parseFloat(
      getComputedStyle(header).getPropertyValue('font-size')
   )
   header.style.fontSize =  headerFont - 4 + "px"
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
