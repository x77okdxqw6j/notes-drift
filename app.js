const el = document.getElementById('status');
document.getElementById('ping').addEventListener('click', () => {
  el.textContent = 'ok ' + new Date().toLocaleTimeString();
});
