const toggleBtn = document.getElementById('toggleMode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    const icon = toggleBtn.querySelector('i');
    if (body.classList.contains('dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    }
});
