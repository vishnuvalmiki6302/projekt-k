let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


// Get all "Join Now" buttons
const joinButtons = document.querySelectorAll('.join-btn');

// Get the modal
const modal = document.createElement('div');
modal.classList.add('modal');

// Create the modal content
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');

// Create the close button
const closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = '&times;';

// Add event listener to close the modal when clicked outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Add click event listener to each "Join Now" button
joinButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Clear previous modal content
        modalContent.innerHTML = '';

        // Add the community details to the modal
        const communityName = event.target.closest('.community-card').querySelector('h3').textContent;
        const communityDescription = event.target.closest('.community-card').querySelector('p').textContent;
        modalContent.innerHTML = `
            <h2>${communityName}</h2>
            <p>${communityDescription}</p>
            <p>Join this community to connect with like-minded individuals and explore new opportunities.</p>
        `;

        // Add the close button to the modal content
        modalContent.appendChild(closeBtn);

        // Add the modal content to the modal
        modal.appendChild(modalContent);

        // Add the modal to the document body
        document.body.appendChild(modal);

        // Display the modal
        modal.style.display = 'block';

        // Add event listener to close the modal when the close button is clicked
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    });
});