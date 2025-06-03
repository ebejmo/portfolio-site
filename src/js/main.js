import '../scss/main.scss';

const readMoreBtn = document.getElementById('readMoreBtn');
const aboutText = document.querySelector('.about-text');

readMoreBtn.addEventListener('click', () => {
  const isExpanded = aboutText.classList.toggle('expanded');
  readMoreBtn.textContent = isExpanded ? 'Read less' : 'Read more';
  readMoreBtn.setAttribute('aria-expanded', isExpanded);
});

import { initializeModal } from './components/modal';
import { initializeFormValidation } from './formValidation';

document.addEventListener('DOMContentLoaded', () => {
  initializeModal();
});

initializeFormValidation();
