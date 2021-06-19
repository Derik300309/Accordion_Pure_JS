document.querySelectorAll('.textBox').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('open')) {
            parent.classList.remove('open')
        } else {
            document
                .querySelectorAll('.card')
                .forEach((child) => child.classList.remove('open'))

            parent.classList.toggle('open');
        }
    })
)