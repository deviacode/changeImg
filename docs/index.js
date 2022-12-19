const img = document.querySelector("img");

img.addEventListener("click", e => {
  const src = img.getAttribute("src");
  if (src === "/docs/images/img01.webp") {
    img.setAttribute("src", "/docs/images/img02.webp");
  } else if (src === "/docs/images/img02.webp") {
    img.setAttribute("src", "/docs/images/img03.webp");
  } else {
    img.setAttribute("src", "/docs/images/img01.webp");
  }
});

// img.onclick = function () {
//   const imgSrc = img.getAttribute("src");
//   if (imgSrc === "/images/img01.webp") {
//     img.setAttribute("src", "/images/img02.webp");
//   } else if (imgSrc === "/images/img02.webp") {
//     img.setAttribute("src", "/images/img03.webp");
//   } else {
//     img.setAttribute("src", "/images/img01.webp");
//   }
// };
