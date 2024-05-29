


document.addEventListener('DOMContentLoaded', function() {
    
    fetch('assets/hotels.json')
        .then(response => response.json())
        .then(data => {
            const hotelsContainer = document.querySelector('.hotels-container');
            hotelsContainer.innerHTML = ''; 

            data.forEach(hotel => {
                const hotelElement = document.createElement('div');
                hotelElement.classList.add('hotel');
                let stars = '';

               
                const rating = 4;

              
                for (let i = 0; i < 5; i++) {
                    if (i < rating) {
                        stars += '<i class="fas fa-star"></i>';
                    } else {
                        stars += '<i class="far fa-star"></i>';
                    }
                  }

                hotelElement.innerHTML = `
                    <img src="${hotel.image}" alt="${hotel.title}">
                    <div class="details">
                        <h3>${hotel.title}</h3>
                        <p>${hotel.price}</p>
                        <p>${hotel.description}</p>
                        <p>${hotel.duration}</p>
                        <p>${hotel.location}</p>
                        <div class="rating">${stars}</div>
                        <button><a href="#">Discover</a></button>
                    </div>
              `;
                hotelsContainer.appendChild(hotelElement);
            });
        })
        .catch(error => console.error('Error fetching hotel data:', error));
});

 function addHotelInput() {
   const hotelInputs = document.getElementById('hotelInputs');
   const newInput = document.createElement('input');
     newInput.type = 'text';
     newInput.name = 'hotelName';
     newInput.className = 'hotel';
     newInput.placeholder = 'Otel adi';
     hotelInputs.appendChild(newInput);
     hotelInputs.appendChild(document.createElement('br'));
 }

 function sortHotels() {
    const hotelForm = document.getElementById('hotelForm');
    const hotelNames = Array.from(hotelForm.querySelectorAll('input[name="hotelName"]')).map(input => input.value.trim().toLowerCase());

    fetch('./assets/hotels.json')
        .then(response => response.json())
         .then(hotels => {
            const filteredHotels = hotels.filter(hotel => hotelNames.includes(hotel.title.trim().toLowerCase()));

            filteredHotels.sort((a, b) => parseInt(a.price.replace('$', '').replace(' night', '')) - parseInt(b.price.replace('$', '').replace(' night', '')));

          const sortedHotelsList = document.getElementById('sortedHotels');
           sortedHotelsList.innerHTML = '';
            filteredHotels.forEach(hotel => {
                 const li = document.createElement('li');
                 li.textContent = `${hotel.title} - ${hotel.price}`;
                 sortedHotelsList.appendChild(li);
             });
         })
         .catch(error => console.error('Sorting hotels error:', error));
 }

 document.addEventListener('DOMContentLoaded', () => {
     const addHotelButton = document.getElementById('addHotelButton');
     const sortButton = document.getElementById('sortButton');

     addHotelButton.addEventListener('click', addHotelInput);
    sortButton.addEventListener('click', sortHotels);
 });
