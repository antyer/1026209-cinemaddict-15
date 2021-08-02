import {createMenuTemplate} from './views/menu.js';
import {createProfileRatingTemplate} from './views/profile-rating.js';
import {createSortTemplate} from './views/sort.js';
import {createFilmsTemplate} from './views/films.js';
import {createFilmCardTemplate} from './views/film-card.js';
import {createShowMoreButton} from './views/show-more.js';
import {createFilmDetailsPopup} from './views/film-details-popup.js';
import {createFilmsStatisticTemplate} from './views/films-statistic.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const header = document.querySelector('.header');
render(header, createProfileRatingTemplate(), 'beforeend');

const main = document.querySelector('.main');
render(main, createMenuTemplate(), 'afterbegin');
render(main, createSortTemplate(), 'beforeend');
render(main, createFilmsTemplate(), 'beforeend');

const filmsList = document.querySelector('.films .films-list__container');
render(filmsList, createFilmCardTemplate(), 'beforeend');
render(filmsList, createFilmCardTemplate(), 'beforeend');
render(filmsList, createFilmCardTemplate(), 'beforeend');
render(filmsList, createFilmCardTemplate(), 'beforeend');
render(filmsList, createFilmCardTemplate(), 'beforeend');
render(filmsList, createShowMoreButton(), 'afterend');

const filmsTopRated = document.querySelector('.top-rated');
render(filmsTopRated, createFilmCardTemplate(), 'beforeend');
render(filmsTopRated, createFilmCardTemplate(), 'beforeend');

const filmsMostCommented = document.querySelector('.most-commented');
render(filmsMostCommented, createFilmCardTemplate(), 'beforeend');
render(filmsMostCommented, createFilmCardTemplate(), 'beforeend');

const filmStatistic = document.querySelector('.footer__statistics');
render(filmStatistic, createFilmsStatisticTemplate(), 'beforeend');

const footer = document.querySelector('.footer');
render(footer, createFilmDetailsPopup(), 'afterend');

