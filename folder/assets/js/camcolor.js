document.getElementById('tema').addEventListener('click', function() {
    const body = document.body;
    body.classList.contains('wrapper') ?
        body.classList.replace('wrapper', 'wrapper2') :
        body.classList.replace('wrapper2', 'wrapper');
});
