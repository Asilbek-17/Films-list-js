const elFilmsList = document.querySelector(".js-list");
// const elFilmsTamp = document.querySelector(".films-temp").content;
const elFilmsFragment = document.createDocumentFragment();


for (const kino of kinolar) {
    // const filmsTempClone = elFilmsTamp.cloneNode(true);
    const filmsTempClone = document.querySelector(".films-temp").content.cloneNode(true);
    
    filmsTempClone.querySelector(".films-title").textContent = kino.title;
    filmsTempClone.querySelector(".films-year").textContent = kino.year + "-year.";
    filmsTempClone.querySelector(".films-genres").textContent = kino.genres.join(", ") + ".";
    filmsTempClone.querySelector(".child-text").textContent = kino.cast.splice(0, 5).join(", ") + ".";
    
    elFilmsFragment.appendChild(filmsTempClone);
};

elFilmsList.appendChild(elFilmsFragment);