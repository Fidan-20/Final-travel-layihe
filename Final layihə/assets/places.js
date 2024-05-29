
document.addEventListener('DOMContentLoaded', function() {
    fetch('assets/places.json')
        .then(response => response.json())
        .then(data => {
            const citiesContainer = document.querySelector('.cities');
            citiesContainer.innerHTML = '';  

            data.forEach(place => {
                const placeElement = document.createElement('div');
                let stars = '';

                
                const rating = 8;

                for (let i = 0; i < 5; i++) {
                    if (i < rating) {
                        stars += '<i class="fas fa-star"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                }

                placeElement.innerHTML = `
                    <img src="${place.image}" alt="${place.title}">
                    <span>
                        <h3>${place.title}</h3> ${place.price}
                    </span>
                    <p>${place.description}<br>${place.duration}</p>
                    <hr>
                    <span>${place.location}
                        <div class="rating">${stars} ${rating} Rating</div>
                        <button><a href="#">Discover</a></button>
                    </span>
                `;
                citiesContainer.appendChild(placeElement);
            });
        })
         
});

