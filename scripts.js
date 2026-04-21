// VetConnect LA - Ressources for Homeless Veterans
// Data: array of objects, each object is one ressrouce

// VetConnect LA - Resources for Homeless Veterans
// Data: array of objects, each object is one resource

const resources = [
  {
    name: "VA Greater Los Angeles Healthcare System",
    category: "Medical",
    area: "West LA",
    address: "11301 Wilshire Blvd, Los Angeles, CA 90073",
    phone: "(310) 478-3711",
    hours: "Mon-Fri 8am-4:30pm",
    description: "Full medical and mental health services for veterans."
  },
  {
    name: "New Directions for Veterans",
    category: "Shelter",
    area: "West LA",
    address: "11303 Wilshire Blvd, Los Angeles, CA 90073",
    phone: "(310) 914-4152",
    hours: "24/7",
    description: "Transitional housing and rehabilitation for homeless veterans."
  },
  {
    name: "St. Joseph Center",
    category: "Food",
    area: "Santa Monica",
    address: "204 Hampton Dr, Venice, CA 90291",
    phone: "(310) 396-6468",
    hours: "Mon-Fri 9am-5pm",
    description: "Meals, case management, and support services."
  },
  {
    name: "Volunteers of America - Veterans",
    category: "Employment",
    area: "Los Angeles",
    address: "3600 S. Broadway, Los Angeles, CA 90007",
    phone: "(213) 389-1500",
    hours: "Mon-Fri 8am-5pm",
    description: "Job training and employment support for veterans."
  },
  {
    name: "Didi Hirsch Mental Health Services",
    category: "Mental Health",
    area: "Culver City",
    address: "4760 S. Sepulveda Blvd, Culver City, CA 90230",
    phone: "(800) 854-7771",
    hours: "24/7 Crisis Line",
    description: "Mental health crisis support and counseling for veterans."
  },
  {
    name: "Safe Haven - VA Domiciliary",
    category: "Shelter",
    area: "West LA",
    address: "11301 Wilshire Blvd, Los Angeles, CA 90073",
    phone: "(310) 268-3494",
    hours: "24/7",
    description: "Residential rehabilitation for homeless veterans."
  },
  {
    name: "American Legion Post 283",
    category: "Legal Aid",
    area: "Santa Monica",
    address: "1816 Lincoln Blvd, Santa Monica, CA 90404",
    phone: "(310) 394-9518",
    hours: "Mon-Sat 10am-6pm",
    description: "Legal assistance and benefits claims support for veterans."
  },
  {
    name: "PATH (People Assisting The Homeless)",
    category: "Shelter",
    area: "Hollywood",
    address: "340 N. Madison Ave, Los Angeles, CA 90004",
    phone: "(323) 644-2200",
    hours: "24/7",
    description: "Emergency shelter and housing navigation for veterans."
  },
  {
    name: "Weingart Center",
    category: "Food",
    area: "Downtown LA",
    address: "566 S. San Pedro St, Los Angeles, CA 90013",
    phone: "(213) 627-9000",
    hours: "Daily 7am-7pm",
    description: "Meals, shelter, and comprehensive services for homeless veterans."
  },
  {
    name: "Veterans Legal Services",
    category: "Legal Aid",
    area: "West LA",
    address: "1251 S. Barrington Ave, Los Angeles, CA 90025",
    phone: "(310) 914-4152",
    hours: "Mon-Fri 9am-5pm",
    description: "Free legal help with benefits, housing, and discharge upgrades."
  }
];

// This function creates and displays cards for each resource
function showCards(data) {
  const cardContainer = document.getElementById("card-container");
  const emptyState = document.getElementById("empty-state");
  const counter = document.getElementById("results-counter");

  cardContainer.innerHTML = "";

  if (data.length === 0) {
    cardContainer.style.display = "none";
    emptyState.classList.remove("hidden");
    counter.textContent = "Showing 0 resources";
    return;
  }

  cardContainer.style.display = "grid";
  emptyState.classList.add("hidden");
  counter.textContent = `Showing ${data.length} resource${data.length === 1 ? "" : "s"}`;

  data.forEach(function(resource) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.category = resource.category;

    card.innerHTML = `
      <h2>${resource.name}</h2>
      <p><strong>Category:</strong> ${resource.category}</p>
      <p><strong>Area:</strong> ${resource.area}</p>
      <p><strong>Address:</strong> ${resource.address}</p>
      <p><strong>Phone:</strong> ${resource.phone}</p>
      <p><strong>Hours:</strong> ${resource.hours}</p>
      <p>${resource.description}</p>
    `;

    cardContainer.appendChild(card);
  });
}

// Feature 1 - Filter by category
function filterByCategory(category) {
  if (category === "all") {
    showCards(resources);
  } else {
    const filtered = resources.filter(function(resource) {
      return resource.category === category;
    });
    showCards(filtered);
  }
}

// Feature 2 - Search by name or area
function searchResources(query) {
  const filtered = resources.filter(function(resource) {
    return resource.name.toLowerCase().includes(query.toLowerCase()) ||
           resource.area.toLowerCase().includes(query.toLowerCase());
  });
  showCards(filtered);
}

// Show all cards when page loads
document.addEventListener("DOMContentLoaded", function() {
  showCards(resources);
  
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", function() {
    searchResources(searchInput.value);
  });
});