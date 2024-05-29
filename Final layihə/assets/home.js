document.addEventListener("DOMContentLoaded", function () {
    const hotelsContainer = document.querySelector(".hotels-types");

   
    fetch('assets/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
         
            data.hotels.forEach(hotel => {
                const hotelDiv = document.createElement("div");
                hotelDiv.classList.add("hotels-type");

                const img = document.createElement("img");
                img.src = hotel.imageUrl;
                img.alt = "Hotel Image";

                const contentDiv = document.createElement("div");

                const h3 = document.createElement("h3");
                h3.textContent = `${hotel.location} ${hotel.price}`;

                const p1 = document.createElement("p");
                p1.textContent = hotel.description;

                const hr = document.createElement("hr");

                const p2 = document.createElement("p");
                const a = document.createElement("a");
                a.href = hotel.bookLink;
                a.textContent = "Book Now";
                p2.appendChild(document.createTextNode(hotel.city));
                p2.appendChild(a);

                contentDiv.appendChild(h3);
                contentDiv.appendChild(p1);
                contentDiv.appendChild(hr);
                contentDiv.appendChild(p2);

                hotelDiv.appendChild(img);
                hotelDiv.appendChild(contentDiv);

                hotelsContainer.appendChild(hotelDiv);
            });
        })
        .catch(error => {
            console.error('Error loading hotels:', error);
            
            hotelsContainer.innerHTML = "<p>Hotels data could not be loaded</p>";
        });
           
           
          $(document).ready(function(){
             $(".input-section").hide(); 
            $("#flightSection").show(); 

             $("#flightBtn").click(function(){
                 $(".input-section").hide();
                 $("#flightSection").show();
                 $(".btn").removeClass("active");
           $(this).addClass("active");
       });

             $("#hotelBtn").click(function(){
                 $(".input-section").hide();
                 $("#hotelSection").show();
                 $(".btn").removeClass("active");
                 $(this).addClass("active");
             });

             $("#carRentBtn").click(function(){
                 $(".input-section").hide();
                 $("#carRentSection").show();
                 $(".btn").removeClass("active");
                 $(this).addClass("active");
             });

             $("#checkIn, #checkOut, #hotelCheckIn, #hotelCheckOut, #carCheckIn, #carCheckOut").datepicker({
                 showOtherMonths: true,
             selectOtherMonths: true,
                 dateFormat: "dd-mm-yy",
                 changeMonth: true,
                 changeYear: true
             });
         }); 
      
    
        $(".btn-group .btn").click(function(){
            $(".btn-group .btn").removeClass("btn-primary").addClass("btn-secondary");
            $(this).removeClass("btn-secondary").addClass("btn-primary"); 
        });
        
        $("#flightBtn").click(function(){
            $(".input-section").hide();
            $("#flightSection").show();
        });
        
        $("#hotelBtn").click(function(){
            $(".input-section").hide();
            $("#hotelSection").show();
        });
        
        $("#carRentBtn").click(function(){
            $(".input-section").hide();
            $("#carRentSection").show();
        });
        
        

    const counters = [
        { id: 'customers', target: 10000 },
        { id: 'places', target: 40000 },
        { id: 'hotels', target: 87000 },
        { id: 'restaurants', target: 56400 }
    ];

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const element = document.getElementById(counter.id);
                    animateCount(element, counter.target, 2000);
                });
                observer.disconnect();
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    const target = document.getElementById('stats');
    observer.observe(target);
});

function animateCount(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 50);

    const updateCount = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.round(start);
            setTimeout(updateCount, 50);
        } else {
            element.textContent = target;
        }
    };

    updateCount();
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/home.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const testimonialsContainer = document.getElementById('testimonials');
            const carouselNav = document.querySelector('.carousel-nav');

            data.forEach((customer, index) => {
            
                const testimonialDiv = document.createElement('div');
                testimonialDiv.className = 'human1';
                if (index === 0) {
                    testimonialDiv.classList.add('active');
                }

                testimonialDiv.innerHTML = `
                    <img src="${customer.image}" alt="Customer Image"><br><br>
                    <span>${customer.quote}</span><br><br>
                    <span class="name">${customer.name}</span><br><br>
                    <span class="specialty">${customer.specialty}</span><br><br>
                `;
                
                testimonialsContainer.appendChild(testimonialDiv);
            });

            
            for (let i = 0; i < 3; i++) {
                const navButton = document.createElement('span');
                navButton.className = 'carousel-btn';
                navButton.setAttribute('data-index', i);
                navButton.innerHTML = '◉';
                if (i === 0) {
                    navButton.classList.add('active');
                }

                navButton.addEventListener('click', () => {
                    showTestimonial(i);
                });

                carouselNav.appendChild(navButton);
            }

            function showTestimonial(index) {
                const testimonials = document.querySelectorAll('.human1');
                const buttons = document.querySelectorAll('.carousel-btn');

                testimonials.forEach((testimonial, i) => {
                    testimonial.classList.toggle('active', i === index);
                });

                buttons.forEach((button, i) => {
                    button.classList.toggle('active', i === index);
                });
            }
        })
        .catch(error => console.error('Error loading the testimonials:', error));
});
