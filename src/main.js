import {createMenuTemplate} from './views/menu.js';
import {createProfileRatingTemplate} from './views/profile-rating.js';
import {createSortTemplate} from './views/sort.js';
import {createFilmsTemplate} from './views/films.js';
import {createFilmCardTemplate} from './views/film-card.js';
import {createShowMoreButton} from './views/show-more.js';
import {createFilmDetailsPopup} from './views/film-details-popup.js';
import {createFilmsStatisticTemplate} from './views/films-statistic.js';

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector('.header');
render(header, createProfileRatingTemplate());

const main = document.querySelector('.main');
render(main, createMenuTemplate(), 'afterbegin');
render(main, createSortTemplate());
render(main, createFilmsTemplate());

const filmsList = document.querySelector('.films .films-list__container');
render(filmsList, createFilmCardTemplate());
render(filmsList, createFilmCardTemplate());
render(filmsList, createFilmCardTemplate());
render(filmsList, createFilmCardTemplate());
render(filmsList, createFilmCardTemplate());
render(filmsList, createShowMoreButton(), 'afterend');

const filmsTopRated = document.querySelector('.top-rated');
render(filmsTopRated, createFilmCardTemplate());
render(filmsTopRated, createFilmCardTemplate());

const filmsMostCommented = document.querySelector('.most-commented');
render(filmsMostCommented, createFilmCardTemplate());
render(filmsMostCommented, createFilmCardTemplate());

const filmStatistic = document.querySelector('.footer__statistics');
render(filmStatistic, createFilmsStatisticTemplate());

const footer = document.querySelector('.footer');
render(footer, createFilmDetailsPopup(), 'afterend');

