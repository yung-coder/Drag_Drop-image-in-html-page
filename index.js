console.log('drag');
const imgBox = document.querySelector('.imgbox');
const whiteBoxes = document.getElementsByClassName('whitebox');

imgBox.addEventListener('dragstart', (e) => {
    console.log('drag started');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
});
imgBox.addEventListener('dragend', (e) => {
    console.log('drag end');
    e.target.className = 'imgbox';
})

for (whitebox of whiteBoxes) {
    whitebox.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log('drag over');

    })
    whitebox.addEventListener('dragenter', (e) => {
        console.log('drag enter');
        e.target.className += ' dashed';
    })
    whitebox.addEventListener('dragleave', (e) => {
        console.log('drag leave');
        e.target.className = 'whitebox';
    })
    whitebox.addEventListener('drop', (e) => {
        console.log('drag drop');
        e.target.append(imgBox);
    })
}