export function initializeFormValidation() {
  const form = document.querySelector('.contact-form');
  const successMessage = document.getElementById('form-success');

  if (!form) return;

  const fields = [
    {
      input: form.querySelector('#name'),
      error: form.querySelector('#name-error'),
      validate: (val) => val.trim().length >= 2,
      message: 'Please enter a name with at least 2 characters.',
    },
    {
      input: form.querySelector('#email'),
      error: form.querySelector('#email-error'),
      validate: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()),
      message: 'Please enter a valid email address',
    },
    {
      input: form.querySelector('#message'),
      error: form.querySelector('#message-error'),
      validate: (val) => val.trim().length >= 10,
      message: 'Message must be at least 10 characters.',
    },
  ];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let formIsValid = true;

    fields.forEach(({ input, error, validate, message }) => {
      const value = input.value;
      if (!validate(value)) {
        error.textContent = message;
        input.setAttribute('aria-invalid', 'true');
        formIsValid = false;
      } else {
        error.textContent = '';
        input.setAttribute('aria-invalid', 'false');
      }
    });

    if (formIsValid) {
      form.setAttribute('hidden', '');
      successMessage.removeAttribute('hidden');
    }

    console.log('Form submitted - validation coming soon');
  });
}
