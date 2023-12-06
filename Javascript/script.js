//GALLERY HOME PAGE

const images = ["./Images/gallery1.png", "./Images/gallery2.png", "./Images/gallery3.png",  "./Images/gallery4.png"];
let currentIndex = 0;

function showImage(index) {
    const mainImage = document.getElementById("mainImage");
    currentIndex = (index + images.length) % images.length;
    mainImage.src = images[currentIndex];
}

function changeImage(step) {
    showImage(currentIndex + step);
}

//GALLERY PAGE
const imagesGallery = ["../Images/gallery1.png", "../Images/gallery2.png", "../Images/gallery3.png",  "../Images/gallery4.png"];
let currentIndexGallery = 0;

function showImageGallery(indexGallery) {
    const mainImageGallery = document.getElementById("mainImageGallery");
    currentIndexGallery = (indexGallery + imagesGallery.length) % imagesGallery.length;
    mainImageGallery.src = imagesGallery[currentIndexGallery];
}

function changeImageGallery(step) {
    showImageGallery(currentIndexGallery + step);
}

 // CHANGE HEADER BG COLOR WHEN USER SCROLLS THE PAGE
 window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.style.backgroundColor = "#BFC2B4";
        // header.style.height = "100px";
        header.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)"; // Increased shadow effect
    } else {
        header.style.backgroundColor = "#EAF1F7"; // Revert to default color
        header.style.boxShadow = "none"; // Remove the shadow
        // header.style.height = "150px";
    }
});
document.addEventListener("scroll", function() {
    var activePage = document.getElementById("active-page");
    var scrollPosition = window.scrollY;

    // Define a threshold value for when to change the background color
    var threshold = 50;

    if (scrollPosition > threshold) {
        // Change the background color and border radius of the active page
        activePage.style.backgroundColor = "#EAF1F7";
        activePage.style.borderRadius = "16px";
        activePage.style.border = "4px solid #EAF1F7";
    } else {
        // Revert to the default background color and border radius
        activePage.style.backgroundColor = "#EAF1F7";
        activePage.style.borderRadius = "0px 0 0px 0px";
        activePage.style.border = "4px solid #EAF1F7";
        
    }
});






// HIDDEN CONTENT FUNCTION
 document.addEventListener('DOMContentLoaded', function() {
    var loadMoreBtn = document.getElementById('load-more-btn');
    var hiddenContainer = document.getElementById('hidden-container');
    var attractionsContainer = document.getElementById('attractions-container');

    loadMoreBtn.addEventListener('click', function(event) {
      // Prevent the default behavior of the anchor element
      event.preventDefault();

      // Move entire cards from hidden container to attractions container
      while (hiddenContainer.firstChild) {
        attractionsContainer.appendChild(hiddenContainer.firstChild);
      }

      // Hide the "Load More" button if there are no more hidden items
      if (hiddenContainer.children.length === 0) {
        loadMoreBtn.style.display = 'none';
      }
    });
  });

//TITLE SMOOTLHY APPEARS
document.addEventListener("DOMContentLoaded", function () {
    // Wait for the DOM content to be fully loaded
  
    // Get the title and button elements
    var imgTitle = document.getElementById("img-title");
    var imgButton = document.getElementById("img-button");
  
    // Add a delay for a better visual effect
    setTimeout(function () {
      // Clear the existing text content
      imgTitle.textContent = "";
  
      // Show the title with a typing effect
      typeText(imgTitle, "The Mother Nature Camping");
      imgTitle.classList.remove("hidden");
      imgTitle.style.opacity = 1;
  
      // Show the button with a fade-in effect after a longer delay (e.g., 500 milliseconds)
      setTimeout(function () {
        imgButton.classList.remove("hidden");
        imgButton.style.opacity = 1;
      }, 2500);
    }, 300);
  
    function typeText(element, text) {
      var index = 0;
      var typingSpeed = 100; // Adjust typing speed in milliseconds
  
      function typeCharacter() {
        element.textContent += text[index];
        index++;
  
        if (index < text.length) {
          setTimeout(typeCharacter, typingSpeed);
        }
      }
  
      typeCharacter();
    }
  });
  
  // Add a media query for mobile styles
  if (window.matchMedia("(max-width: 768px)").matches) {
    var imgTitle = document.getElementById("img-title");
    var imgButton = document.getElementById("img-button");
  
    imgTitle.style.fontSize = "26px"; // Adjust the font size for mobile screens
    imgButton.style.fontSize = "14px"; // Adjust the font size for the button on mobile screens
    imgButton.style.height = "15px";
    imgButton.style.width = "240px";
    imgButton.style.color = "#1F311F";

}
  
  

// CONTENT LOAD
document.addEventListener("DOMContentLoaded", function() {
    var aboutSection = document.querySelector(".about-section");

    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            aboutSection.classList.add("appear");
        }
    }, { threshold: 0.5 }); // Adjust the threshold based on your preference

    observer.observe(aboutSection);
});
document.addEventListener("DOMContentLoaded", function() {
    
    var structureSection = document.querySelector(".structure");
    var attractionsSection = document.querySelector(".attractions");
    var gallerySection = document.querySelector(".gallery");
    var reserveSection = document.querySelector(".bg");

    var observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            structureSection.classList.add("appear");
        }
    }, { threshold: 0.5 });

    var observer2 = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            attractionsSection.classList.add("appear");
        }
    }, { threshold: 0.5 });

    var observer3 = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            gallerySection.classList.add("appear");
        }
    }, { threshold: 0.5 });

    var observer4 = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            reserveSection.classList.add("appear");
        }
    }, { threshold: 0.5 });

    observer.observe(structureSection);
    observer2.observe(attractionsSection);
    observer3.observe(gallerySection);
    observer4.observe(reserveSection);
});

// CONTENT LOAD ATTRACTIONS
document.addEventListener("DOMContentLoaded", function() {
    var cardElements = document.querySelectorAll('.card-page');
    const isDesktop = window.innerWidth > 768; // Set your desired threshold

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    function cardIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    if (isDesktop) {
        var cardObserver = new IntersectionObserver(cardIntersection, options);

        cardElements.forEach(card => {
            cardObserver.observe(card);
        });
    }
});
//CONTENT FADE IN ABOUT PAGE
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const isDesktop = window.innerWidth > 768; // Set your desired threshold

    function checkVisibility() {
        if (!isDesktop) {
            // If not desktop, don't apply the effect
            return;
        }

        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect();

            if (position.top < window.innerHeight * 0.75) {
                element.classList.add("visible");
            }
        });
    }

    if (isDesktop) {
        window.addEventListener("scroll", checkVisibility);
        // Initial check on page load
        checkVisibility();
    }
});
// BURGUER MENU
function toggleMenu() {
    const headerMenu = document.querySelector('.header-menu');
    headerMenu.classList.toggle('show');

    // Change the logo URL for mobile
    const logo = document.getElementById('logo-img');
    if (headerMenu.classList.contains('show')) {
        logo.src = "./Images/logomobile.svg"; // Replace with the desired mobile logo URL
    } else {
        logo.src = "./Images/Logo.svg"; // Replace with the original logo URL
    }

    // Toggle a class on the burger menu
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.classList.toggle('active');
}

//SHOW ANSWERS
function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}