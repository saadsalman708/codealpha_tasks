const imgsUrl = [
    "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
    "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    "https://img.freepik.com/free-photo/beautiful-lake-mountains_395237-44.jpg?semt=ais_hybrid&w=740&q=80",
    "https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg",
    "https://img.freepik.com/free-photo/lavender-field-sunset-near-valensole_268835-3910.jpg?semt=ais_hybrid&w=740&q=80",
    "https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg",
    "https://img.freepik.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80",
    "https://bkacontent.com/wp-content/uploads/2016/06/Depositphotos_31146757_l-2015.jpg",
    "https://www.shutterstock.com/image-photo/sun-sets-behind-mountain-ranges-600nw-2479236003.jpg",
    "https://img.freepik.com/free-photo/animal-eye-staring-close-up-watch-nature-generative-ai_188544-15471.jpg?semt=ais_hybrid&w=740&q=80",
];

let currentIndex = 0;





const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const cardsCont = document.querySelector("#cards-cont");
const closeBtn = document.querySelector("#closeBtn");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");





const displayImgCards = () => {

   cardsCont.innerHTML = imgsUrl.map( (url , index) => {
      return `
             <div class="cards" onclick="openModal(${index})">
                <div>
                   <img src=${url}>
               </div>
               <div>
                  <span class="title"></span>
                </div>
            </div>
          `
   }).join(" ");

};




function openModal(i) {
    lightbox.style.display = "flex";
    lightboxImg.src = imgsUrl[i];
    currentIndex = i;
}





closeBtn.addEventListener("click", ()=> {
    lightbox.style.display = "none";
    currentIndex = null;
});





prevBtn.addEventListener("click" , ()=> {
    currentIndex <= 0 ? currentIndex = imgsUrl.length -1 : --currentIndex;
    lightboxImg.src = imgsUrl[currentIndex];
});





nextBtn.addEventListener("click" , ()=> {
    currentIndex >= imgsUrl.length -1 ? currentIndex = 0 : ++currentIndex;
    lightboxImg.src = imgsUrl[currentIndex];
});





displayImgCards();