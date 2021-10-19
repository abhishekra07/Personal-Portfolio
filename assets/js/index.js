let skillTitles = document.querySelectorAll('.skill-title');
// skillTitles.forEach(element => {
//     element.addEventListner('click', () => {
//         console.log('click')
//         element.toggleClass('display-toggle');
//     })
// });
Array.prototype.forEach.call(skillTitles, element => {
    element.addEventListener('click', () => {
        console.log('click ',element.parentNode.nextElementSibling)
        element.parentNode.nextElementSibling.classList.toggle('display-toggle');
    })
});