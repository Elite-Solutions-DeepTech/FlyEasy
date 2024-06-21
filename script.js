document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start-button");
  const startPage = document.getElementById("start-page");
  const homePage = document.getElementById("home-page");
  const login_from = document.getElementById("login-button");

  startButton.addEventListener("click", () => {
    startPage.style.display = "none";
    homePage.style.display = "block";
  });


});



function startBooking() {
  document.getElementById('startPage').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('startPage').classList.add('hidden');
    document.getElementById('startPage').classList.remove('fade-out');
    document.getElementById('homePage').classList.remove('hidden');
    document.getElementById('homePage').classList.add('show');
  }, 1500);
}

const images = document.querySelectorAll('.slider img');
let current = 0;

function showNextImage() {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
}

setInterval(showNextImage, 3000); 

document.addEventListener('DOMContentLoaded', () => {
    
    const bookingOptions = document.querySelectorAll('.booking__nav span');
    bookingOptions.forEach(option => {
      option.addEventListener('click', (e) => {
      
        bookingOptions.forEach(opt => {
          opt.style.backgroundColor = 'var(--extra-light)';
          opt.style.color = 'var(--text-light)';
        });
      
        e.target.style.backgroundColor = 'var(--primary-color)';
        e.target.style.color = 'var(--white)';
  
        updateFormForClass(e.target.innerText);
      });
    });
  
    const planeImage = document.querySelector('.Flight');
    planeImage.style.animation = 'moveDiagonal 5s forwards';
  
    document.querySelector('.booking__container form').addEventListener('submit', (e) => {
      e.preventDefault();
      const boarding = e.target.querySelector('input[placeholder="On-Boarding"]').value;
      const destination = e.target.querySelector('input[placeholder="Destination"]').value;
      const travellers = e.target.querySelector('input[placeholder="Travellers"]').value;
      alert(`Booking from ${boarding} to ${destination} for ${travellers} travellers in ${selectedClass} class`);
    });
  
    let selectedClass = 'Economy';
  
    function updateFormForClass(className) {
      selectedClass = className;
      console.log(`Selected class: ${selectedClass}`);
    }
  });
  

  //
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('flightSearchForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server

    // Fetch input values
    const from = document.getElementById('fromInput').value.trim();
    const to = document.getElementById('toInput').value.trim();
    const date = document.getElementById('dateInput').value.trim();

    // Simulated flight data (replace with actual data or API call)
    const flights = [
      { name: 'IndiGo 101', from: 'Mumbai', to: 'Delhi', date: '2024-06-22', price: 1600, seats: 120 },
      { name: 'Air India 302', from: 'Bangalore', to: 'Chennai', date: '2024-06-21', price: 1400, seats: 80 },
      { name: 'SpiceJet 203', from: 'Hyderabad', to: 'Kolkata', date: '2024-06-23', price: 1550, seats: 100 },
      { name: 'GoAir 404', from: 'Ahmedabad', to: 'Pune', date: '2024-06-24', price: 1450, seats: 90 },
      { name: 'Vistara 505', from: 'Jaipur', to: 'Lucknow', date: '2024-06-25', price: 1500, seats: 110 },
      { name: 'AirAsia 606', from: 'Chandigarh', to: 'Guwahati', date: '2024-06-26', price: 1700, seats: 130 },
      { name: 'GoAir 707', from: 'Patna', to: 'Raipur', date: '2024-06-27', price: 1480, seats: 95 },
      { name: 'IndiGo 808', from: 'Bhubaneswar', to: 'Ranchi', date: '2024-06-28', price: 2520, seats: 105 },
      { name: 'SpiceJet 909', from: 'Vadodara', to: 'Surat', date: '2024-06-29', price: 3420, seats: 85 },
      { name: 'Air India 1010', from: 'Nagpur', to: 'Indore', date: '2024-06-30', price: 2530, seats: 115 },
      { name: 'Vistara 1111', from: 'Visakhapatnam', to: 'Varanasi', date: '2024-07-01', price: 3580, seats: 125 },
      { name: 'AirAsia 1212', from: 'Coimbatore', to: 'Kochi', date: '2024-07-02', price: 2450, seats: 90 },
      { name: 'IndiGo 1313', from: 'Thiruvananthapuram', to: 'Goa', date: '2024-07-03', price: 2510, seats: 110 },
      { name: 'SpiceJet 1414', from: 'Amritsar', to: 'Jammu', date: '2024-07-04', price: 3470, seats: 100 },
      { name: 'GoAir 1515', from: 'Dehradun', to: 'Shimla', date: '2024-07-05', price: 2490, seats: 95 },
      { name: 'Air India 1616', from: 'Srinagar', to: 'Leh', date: '2024-07-06', price: 1520, seats: 105 },
      { name: 'IndiGo 101', from: 'Mumbai', to: 'Delhi', date: '2024-06-22', price: 3600, seats: 120 },
      { name: 'Air India 302', from: 'Mumbai', to: 'Delhi', date: '2024-06-22', price: 3550, seats: 100 },
      { name: 'SpiceJet 203', from: 'Mumbai', to: 'Delhi', date: '2024-06-22', price: 2500, seats: 90 },
      { name: 'GoAir 404', from: 'Mumbai', to: 'Delhi', date: '2024-06-22', price: 2480, seats: 80 },
      { name: 'Vistara 505', from: 'Mumbai', to: 'Delhi', date: '2024-06-22', price: 3650, seats: 110 },
      { name: 'IndiGo 606', from: 'Bangalore', to: 'Chennai', date: '2024-06-23', price: 4400, seats: 80 },
      { name: 'Air India 707', from: 'Bangalore', to: 'Chennai', date: '2024-06-23', price: 2380, seats: 70 },
      { name: 'SpiceJet 808', from: 'Bangalore', to: 'Chennai', date: '2024-06-23', price: 2420, seats: 85 },
      { name: 'GoAir 909', from: 'Bangalore', to: 'Chennai', date: '2024-06-23', price: 2450, seats: 90 },
      { name: 'Vistara 1010', from: 'Bangalore', to: 'Chennai', date: '2024-06-23', price: 1430, seats: 88 },
      { name: 'IndiGo 1111', from: 'Hyderabad', to: 'Kolkata', date: '2024-06-24', price: 3550, seats: 100 },
      { name: 'Air India 1212', from: 'Hyderabad', to: 'Kolkata', date: '2024-06-24', price: 2520, seats: 95 },
      { name: 'SpiceJet 1313', from: 'Hyderabad', to: 'Kolkata', date: '2024-06-24', price: 2500, seats: 90 },
      { name: 'GoAir 1414', from: 'Hyderabad', to: 'Kolkata', date: '2024-06-24', price: 3480, seats: 85 },
      { name: 'Vistara 1515', from: 'Hyderabad', to: 'Kolkata', date: '2024-06-24', price: 5230, seats: 95 },
      { name: 'IndiGo 1616', from: 'Ahmedabad', to: 'Pune', date: '2024-06-25', price: 2450, seats: 90 },
      { name: 'Air India 1717', from: 'Ahmedabad', to: 'Pune', date: '2024-06-25', price: 4300, seats: 85 },
      { name: 'SpiceJet 1818', from: 'Ahmedabad', to: 'Pune', date: '2024-06-25', price: 4020, seats: 80 },
      { name: 'GoAir 1919', from: 'Ahmedabad', to: 'Pune', date: '2024-06-25', price: 4460, seats: 95 },
      { name: 'Vistara 2020', from: 'Ahmedabad', to: 'Pune', date: '2024-06-25', price: 2470, seats: 88 },
      { name: 'IndiGo 2121', from: 'Jaipur', to: 'Lucknow', date: '2024-06-26', price: 5500, seats: 100 },
      { name: 'Air India 2222', from: 'Jaipur', to: 'Lucknow', date: '2024-06-26', price: 2480, seats: 95 },
      { name: 'SpiceJet 2323', from: 'Jaipur', to: 'Lucknow', date: '2024-06-26', price: 460, seats: 90 },
      { name: 'GoAir 2424', from: 'Jaipur', to: 'Lucknow', date: '2024-06-26', price: 490, seats: 98 },
      { name: 'Vistara 2525', from: 'Jaipur', to: 'Lucknow', date: '2024-06-26', price: 510, seats: 105 },
      { name: 'IndiGo 2626', from: 'Chandigarh', to: 'Guwahati', date: '2024-06-27', price: 700, seats: 130 },
      { name: 'Air India 2727', from: 'Chandigarh', to: 'Guwahati', date: '2024-06-27', price: 680, seats: 125 },
      { name: 'SpiceJet 2828', from: 'Chandigarh', to: 'Guwahati', date: '2024-06-27', price: 720, seats: 135 },
      { name: 'GoAir 2929', from: 'Chandigarh', to: 'Guwahati', date: '2024-06-27', price: 690, seats: 132 },
      { name: 'Vistara 3030', from: 'Chandigarh', to: 'Guwahati', date: '2024-06-27', price: 710, seats: 128 },
      { name: 'IndiGo 3131', from: 'Patna', to: 'Raipur', date: '2024-06-28', price: 480, seats: 95 },
      { name: 'Air India 3232', from: 'Patna', to: 'Raipur', date: '2024-06-28', price: 460, seats: 90 },
      { name: 'SpiceJet 3333', from: 'Patna', to: 'Raipur', date: '2024-06-28', price: 440, seats: 85 },
      { name: 'GoAir 3434', from: 'Patna', to: 'Raipur', date: '2024-06-28', price: 470, seats: 88 },
      { name: 'Vistara 3535', from: 'Patna', to: 'Raipur', date: '2024-06-28', price: 450, seats: 86 },
      { name: 'IndiGo 3636', from: 'Bhubaneswar', to: 'Ranchi', date: '2024-06-29', price: 520, seats: 105 },
      { name: 'Air India 3737', from: 'Bhubaneswar', to: 'Ranchi', date: '2024-06-29', price: 500, seats: 100 },
      { name: 'SpiceJet 3838', from: 'Bhubaneswar', to: 'Ranchi', date: '2024-06-29', price: 510, seats: 102 },
      { name: 'GoAir 3939', from: 'Bhubaneswar', to: 'Ranchi', date: '2024-06-29', price: 490, seats: 98 },
      { name: 'Vistara 4040', from: 'Bhubaneswar', to: 'Ranchi', date: '2024-06-29', price: 530, seats: 110 },
      { name: 'IndiGo 4141', from: 'Vadodara', to: 'Surat', date: '2024-06-30', price: 420, seats: 85 },
      { name: 'Air India 4242', from: 'Vadodara', to: 'Surat', date: '2024-06-30', price: 410, seats: 80 },
      { name: 'SpiceJet 4343', from: 'Vadodara', to: 'Surat', date: '2024-06-30', price: 430, seats: 88 },
      { name: 'Vistara 1717', from: 'Chennai', to: 'Mangalore', date: '2024-07-07', price: 440, seats: 88 },
      { name: 'AirAsia 1818', from: 'Puducherry', to: 'Tiruchirappalli', date: '2024-07-08', price: 490, seats: 100 },
      { name: 'IndiGo 1919', from: 'Kolkata', to: 'Durgapur', date: '2024-07-09', price: 510, seats: 110 },
      { name: 'SpiceJet 2020', from: 'Siliguri', to: 'Gangtok', date: '2024-07-10', price: 480, seats: 95 }
    ];

  const maxPrice = 1000;

// Filter flights with price <= 1000
const affordableFlights = flights.filter(flight => flight.price <= maxPrice);

// Categorize seats into classes
const categorizeSeats = (seats) => {
  const classes = ["economy", "business", "first"];
  const seatsPerClass = Math.floor(seats / classes.length);
  const remainingSeats = seats % classes.length;

  return classes.map((cls, index) => {
    return { class: cls, seats: seatsPerClass + (index < remainingSeats ? 1 : 0) };
  });
};

// Map affordable flights with categorized seats
const result = affordableFlights.map(flight => {
  return {
    ...flight,
    seatsByClass: categorizeSeats(flight.seats)
  };
});

console.log(result);

    
    flights.forEach(flight => {
      flight.firstClassPrice = flight.price * 2;
      flight.businessClassPrice = flight.price * 1.5;
      flight.economyClassPrice = flight.price;
    });
    
    console.log(flights);        

    // Filter flights based on form inputs
    const filteredFlights = flights.filter(flight => 
      flight.from.toLowerCase() === from.toLowerCase() &&
      flight.to.toLowerCase() === to.toLowerCase() &&
      flight.date === date
    );

    sessionStorage.setItem('flightResults', JSON.stringify(filteredFlights));

    window.location.href = 'search-results.html';
  });
});


// script.js (search-results.html)

document.addEventListener('DOMContentLoaded', function() {
  const flightsContainer = document.querySelector('.results-container');
  const flightResults = JSON.parse(sessionStorage.getItem('flightResults'));

  if (flightResults && flightResults.length > 0) {
    flightResults.forEach(flight => {
      const flightElement = document.createElement('div');
      flightElement.classList.add('flight-item');
      flightElement.innerHTML = `
        <section class="booking-info">
          <h2>Make a Booking</h2>
          <p>${flight.from} To ${flight.to}</p>
          <p>${flight.date}</p>
        </section>
        <div class="flight-info">
          <h2>${flight.name}</h2>
          <div class="flight-details">
            <h3>${flight.from}</h3>
            <p>Departed</p>
            <p>${flight.date}</p>
          </div>
          <img src="srcImg/line.png" alt="plane">
          <div class="flight-details">
            <h3>${flight.to}</h3>
            <p>Arrived</p>
            <p>${flight.date}</p>
          </div>
        </div>
        <div class="fare-details">
          <div class="fare">
            <h4>Economy</h4>
            <p>INR ${flight.price}<br><span>*includes all tax</span></p>
            <p>Seats Available: ${flight.seats}</p>
            <button class="btn select-btn economy-btn">Select</button>
          </div>
          <div class="fare">
            <h4>Business</h4>
            <p>INR ${flight.businessClassPrice}<br>*includes all tax</p>
            <p>Seats Available: ${flight.seats}</p>
            <button class="btn select-btn business-btn">Select</button>
          </div>
          <div class="fare">
            <h4>First Class</h4>
            <p>${flight.firstClassAvailable ? `INR ${flight.firstClassPrice}` : 'Class Not Available'}</p>
            <p>Seats Available: ${flight.firstClassSeats}</p>
            <button class="btn select-btn first-class-btn" ${!flight.firstClassAvailable ? 'disabled' : ''}>Select</button>
          </div>
        </div>
      `;
      flightsContainer.appendChild(flightElement);

      // Add event listeners to the Select buttons
      flightElement.querySelector('.economy-btn').addEventListener('click', () => selectFlight(flight, 'Economy', flight.price));
      flightElement.querySelector('.business-btn').addEventListener('click', () => selectFlight(flight, 'Business', flight.businessClassPrice));
      flightElement.querySelector('.first-class-btn').addEventListener('click', () => selectFlight(flight, 'First Class', flight.firstClassPrice));
    });
  } else {
    const noFlightsMessage = document.createElement('p');
    noFlightsMessage.textContent = 'No flights available for the selected criteria.';
    flightsContainer.appendChild(noFlightsMessage);
  }
});

function selectFlight(flight, classType, classPrice) {
  const travelers = parseInt(localStorage.getItem('travelers'), 10);
  const totalPrice = travelers * classPrice;
  const bookingDetails = {
    flight: flight.name,
    from: flight.from,
    to: flight.to,
    date: flight.date,
    class: classType,
    price: classPrice,
    travelers: travelers,
    totalPrice: totalPrice
  };

  localStorage.setItem('selectedFlight', JSON.stringify(bookingDetails));
  window.location.href = 'booking.html';
}



document.getElementById('flightSearchForm').addEventListener('submit', function (e) {
  const travelers = document.getElementById('travelersInput').value;
  localStorage.setItem('travelers', travelers);
});


// food_booking

function addToCart(item, price) {
  alert(`${item} has been added to your cart at a price of ₹${price}.`);
}

document.querySelectorAll('.quantity .plus').forEach(button => {
  button.addEventListener('click', () => {
      const input = button.previousElementSibling;
      input.value = parseInt(input.value) + 1;
  });
});

document.querySelectorAll('.quantity .minus').forEach(button => {
  button.addEventListener('click', () => {
      const input = button.nextElementSibling;
      if (parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
      }
  });
});

//animation_ about-us

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-value');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const speed = 200; 
      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});

//payment

document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Collect form data
  const cardNumber = document.getElementById('cardNumber').value;
  const cardHolderName = document.getElementById('cardHolderName').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;
  const billingAddress = document.getElementById('billingAddress').value;

  // Validate and process payment here (this is a placeholder)
  console.log('Processing payment for:', cardHolderName);

  alert('Payment successful!');

  // Redirect to confirmation page or clear the form
  // window.location.href = 'confirmation.html'; // Uncomment this line to redirect
});
