document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    // Toggle dropdown menu when the three-dot button is clicked
    menuButton.addEventListener('click', function() {
      dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
  
    // Handle menu item scroll to specific section
    dropdownMenu.querySelectorAll('li').forEach(function(item) {
        item.addEventListener('click', function() {
          const sectionId = item.getAttribute('data-scroll-to');
          const section = document.getElementById(sectionId);
          
          // Get the height of the fixed header
          const headerHeight = document.querySelector('header').offsetHeight;
      
          // Optional buffer to prevent content from being cut off (increase/decrease as needed)
          const buffer = 30;  // Add extra 10px buffer for safety
      
          // Scroll the page to the section, minus the header height and buffer
          window.scrollTo({
            top: section.offsetTop - headerHeight - buffer,  // Adjust for header height + buffer
            behavior: 'smooth'
          });
        });
      });
      document.getElementById('booknow').addEventListener('click', function() {
        // Redirect to the booking page
        window.location.href = 'booknow.html';
    });
      
        // Hide the dropdown after selecting an option
        //dropdownMenu.style.display = 'none';
      
    
  
    // Intective map functionality
    function showFamousPlaces(district) {
        const famousPlaces = {
          'Thiruvananthapuram': [
            { name: 'Padmanabhaswamy Temple', img: 'https://example.com/padmanabhaswamy-temple.jpg' },
            { name: 'Kovalam Beach', img: 'https://example.com/kovalam-beach.jpg' },
            { name: 'Ponmudi Hills', img: 'https://example.com/ponmudi-hills.jpg' }
          ],
          'Kozhikode': [
            { name: 'Kappad Beach', img: 'https://example.com/kappad-beach.jpg' },
            { name: 'Beypore Port', img: 'https://example.com/beypore-port.jpg' },
            { name: 'Mananchira Square', img: 'https://example.com/mananchira-square.jpg' }
          ],
          'Ernakulam': [
            { name: 'Fort Kochi', img: 'https://example.com/fort-kochi.jpg' },
            { name: 'Marine Drive', img: 'https://example.com/marine-drive.jpg' },
            { name: 'Mattancherry Palace', img: 'https://example.com/mattancherry-palace.jpg' }
          ]
          // Add more districts and their famous places with images
        };
  
        const placesList = document.getElementById('placesList');
        placesList.innerHTML = ''; // Clear previous list
  
        if (famousPlaces[district]) {
          famousPlaces[district].forEach(place => {
            const listItem = document.createElement('li');
            const placeImage = document.createElement('img');
            placeImage.src = place.img;
            placeImage.alt = place.name;
  
            const placeName = document.createElement('span');
            placeName.textContent = place.name;
  
            listItem.appendChild(placeImage);
            listItem.appendChild(placeName);
            placesList.appendChild(listItem);
          });
  
          document.getElementById('districtInfo').style.display = 'block'; // Show the famous places section
        }
      }
  });
  