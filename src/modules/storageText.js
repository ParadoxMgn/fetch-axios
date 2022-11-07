export const storageText = () => {
  const textArea = document.getElementById('textarea');
  const form = document.querySelector('.form');

  textArea.value = localStorage.getItem('text') || '';

  form.addEventListener('submit', e => {
    e.preventDefault();

    textArea.value = '';
    localStorage.setItem('text', textArea.value);
  });

  textArea.addEventListener('input', e => {
    localStorage.setItem('text', e.target.value);
  })
}