import { projects } from '../data/projects';

export function initializeModal() {
  const modalOverlay = document.querySelector('[data-modal-overlay]');
  const closeBtn = document.querySelector('.modal-close');
  const modalImage = document.querySelector('.project-modal-image');
  const modalTitle = document.querySelector('.project-modal-title');
  const modalDescription = document.querySelector('.project-modal-description');
  const modalTools = document.querySelector('.project-modal-tools');
  const modalLink = document.querySelector('.project-modal-link');
  const allProjects = document.querySelectorAll('[data-project-id]');

  if (!modalOverlay) {
    console.error('Modal overlay not found!');
    return;
  }

  function openModal(project) {
    modalImage.src = project.image;
    modalImage.alt = project.imageAlt;
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    modalTools.innerHTML = '';
    project.tools.forEach((tool) => {
      const li = document.createElement('li');
      li.textContent = tool;
      modalTools.appendChild(li);
    });

    modalLink.href = project.liveUrl;

    modalOverlay.removeAttribute('hidden');
    requestAnimationFrame(() => {
      modalOverlay.classList.add('active');
    });
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    setTimeout(() => {
      modalOverlay.setAttribute('hidden', '');
    }, 300);
  }

  function handleCloseTrigger(e) {
    const isOverlayClick = e.target === modalOverlay;
    const isCloseButtonClick = e.target === closeBtn;
    const isEscapeKey = e.type === 'keydown' && e.key === 'Escape';

    if (isOverlayClick || isCloseButtonClick || isEscapeKey) {
      closeModal();
    }
  }

  allProjects.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectId = btn.dataset.projectId;
      const project = projects.find((p) => p.id === projectId);

      if (!project) return;
      openModal(project);
    });
  });

  modalOverlay.addEventListener('click', handleCloseTrigger);
  document.addEventListener('keydown', handleCloseTrigger);
}
