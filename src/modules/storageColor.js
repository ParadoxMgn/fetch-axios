export const storageColor = () => {
  const block = document.querySelector('.block');
  const select = document.getElementById('select');

  block.style.background = localStorage.getItem('color') || 'none';
  select.value = localStorage.getItem('color') || '';

  select.addEventListener('change', e => {

    block.style.background = e.target.value;
    localStorage.setItem('color', e.target.value);
  });
}