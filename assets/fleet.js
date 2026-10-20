const carData = {
  luxury: {
    BMW: {
      "5 Series": ["5series1.jpg", "5series2.jpg", "5series3.jpg", "5series4.jpg"],
      "M5 Convertible": ["m5conv1.jpg", "m5conv2.jpg", "m5conv3.jpg", "m5conv4.jpg", "m5conv5.jpg", "m5conv6.jpg", "m5conv7.jpg"],
      GT: ["gt1.jpg", "gt2.jpg", "gt3.jpg", "gt4.jpg", "gt5.jpg", "gt6.jpg"],
      "530Li": ["530li1.jpg", "530li2.jpg", "530li3.jpg", "530li4.jpg", "530li5.jpg"],
      M6: ["m6_1.jpg", "m6_2.jpg"]
    },
    Luxus: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"],
    Volvo_S90_Black: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"],
    Volvo_S90_White: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"],
    Rolls_Royce_Ghost: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"],
    Mercedes_Benz_E220_LWB: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"],
    Mercedes_Benz_E250: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"],
    Mercedes_Benz_Sclass: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"],
    jaguarXF: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"],
    Audi_A6_matrix: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg"],
    Porsche: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"]
  },
  suv: {
    THAR: ["image1.jpg", "image2.jpg"],
    Mercedes_Benz_GLS: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg"],
    Defender_Black: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"],
    Defender_White: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"],
    Defender_Blue: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg"],
    Range_Rover_Evoque: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg", "image7.jpeg", "image8.jpeg"],
    Range_Rover_Velar: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"],
    Audi_Q7_Quarto: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg", "image6.jpeg"]
  },
  sedan: {
    HondaCity: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"],
    VolkswagenVirtus: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"]
  },
  vintage: {
    Contessa: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg", "image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg", "image21.jpg", "image22.jpg"],
    Mercedes_Benz_W123: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg"],
    Chevrolet_Impala: ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg"]
  },
  bus: {
    "Bus, Traveller & Urbania": ["Bus.jpg", "Urbania.jpg"]
  }
};

const categoryMeta = {
  luxury: {
    title: "Luxury",
    subtitle: "Premium arrivals for weddings, celebrity drops, and standout moments.",
    image: "images/luxury/Rolls_Royce_Ghost/image1.jpeg"
  },
  suv: {
    title: "SUV",
    subtitle: "Bold, spacious, and ideal for larger wedding entries and family travel.",
    image: "images/suv/Range_Rover_Velar/image1.jpeg"
  },
  sedan: {
    title: "Sedan",
    subtitle: "Comfort-focused picks for elegant local travel and event transfers.",
    image: "images/sedan/VolkswagenVirtus/image1.jpg"
  },
  vintage: {
    title: "Vintage",
    subtitle: "Classic icons that bring timeless character to your big day.",
    image: "images/vintage/Contessa/image1.jpg"
  },
  bus: {
    title: "Bus, Traveller & Urbania",
    subtitle: "Group transport options for guest movement and tour packages.",
    image: "images/bus/Bus, Traveller & Urbania/Bus.jpg"
  }
};

const state = {
  category: null,
  brand: null,
  view: "categories"
};

document.addEventListener("DOMContentLoaded", () => {
  const categoryGrid = document.getElementById("categoryGrid");
  if (!categoryGrid) {
    return;
  }

  renderCategoryCards();
  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  if (requestedCategory && Object.hasOwn(categoryMeta, requestedCategory)) showCategory(requestedCategory);
  document.getElementById("backButton").addEventListener("click", goBack);
});

function formatLabel(value) {
  return value.replaceAll("_", " ");
}

function renderCategoryCards() {
  const categoryGrid = document.getElementById("categoryGrid");
  categoryGrid.innerHTML = Object.entries(categoryMeta)
    .map(([key, meta]) => `
      <article role="button" tabindex="0" aria-label="Explore ${meta.title} vehicles" class="category-card" style="background-image: url('${meta.image}'); background-size: cover; background-position: center;" data-category="${key}">
        <div class="category-card-content">
          <span class="soft-tag">${Object.keys(carData[key]).length} collections</span>
          <h3 class="mt-3 mb-2">${meta.title}</h3>
          <p class="mb-0 text-white-50">${meta.subtitle}</p>
        </div>
      </article>
    `)
    .join("");

  categoryGrid.querySelectorAll("[data-category]").forEach((card) => {
    card.addEventListener("click", () => showCategory(card.dataset.category));
    card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); showCategory(card.dataset.category); } });
  });
}

function showCategory(category) {
  state.category = category;
  state.brand = null;
  state.view = "brands";
  renderBrands(carData[category]);
}

function renderBrands(brands) {
  toggleGallery(true);
  setGalleryTitle("Choose a Brand", categoryMeta[state.category].subtitle);

  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = Object.keys(brands)
    .map((brand) => `
      <article class="gallery-tile">
        <button type="button" data-brand="${escapeHtml(brand)}">${formatLabel(brand)}</button>
      </article>
    `)
    .join("");

  galleryGrid.querySelectorAll("[data-brand]").forEach((button) => {
    button.addEventListener("click", () => showImages(button.dataset.brand));
  });
}

function showImages(brand) {
  state.brand = brand;
  const data = carData[state.category][brand];

  if (Array.isArray(data)) {
    state.view = "images";
    setGalleryTitle(formatLabel(brand), "Browse real vehicles available from this collection.");
    renderImageTiles(data.map((image) => `images/${state.category}/${brand}/${image}`));
    return;
  }

  state.view = "series";
  setGalleryTitle(formatLabel(brand), "Choose a series to open the full gallery.");

  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = Object.keys(data)
    .map((series) => `
      <article class="gallery-tile">
        <button type="button" class="series-button" data-series="${escapeHtml(series)}">${formatLabel(series)}</button>
      </article>
    `)
    .join("");

  galleryGrid.querySelectorAll("[data-series]").forEach((button) => {
    button.addEventListener("click", () => showSeries(button.dataset.series));
  });
}

function showSeries(series) {
  state.view = "series-images";
  setGalleryTitle(formatLabel(series), `Inside ${formatLabel(state.brand)} collection.`);
  renderImageTiles(carData[state.category][state.brand][series].map((image) => `images/${state.category}/${state.brand}/${series}/${image}`));
}

function renderImageTiles(images) {
  const galleryGrid = document.getElementById("galleryGrid");
  galleryGrid.innerHTML = images
    .map((src) => `
      <article class="gallery-tile">
        <img src="${src}" alt="${formatLabel(state.brand || state.category)} — Car Castle vehicle" loading="lazy" tabindex="0" role="button" aria-label="Enlarge vehicle photograph">
      </article>
    `)
    .join("");
}

function setGalleryTitle(title, subtitle) {
  document.getElementById("galleryTitle").textContent = title;
  document.getElementById("gallerySubtitle").textContent = subtitle;
  document.getElementById("galleryTitle").focus({preventScroll: true});
}

function goBack() {
  if (state.view === "series-images") {
    showImages(state.brand);
    return;
  }

  if (state.view === "images" || state.view === "series") {
    renderBrands(carData[state.category]);
    state.brand = null;
    state.view = "brands";
    return;
  }

  toggleGallery(false);
  state.category = null;
  state.brand = null;
  state.view = "categories";
  document.querySelector("[data-category]")?.focus({preventScroll: true});
}

function toggleGallery(show) {
  document.getElementById("gallerySection").classList.toggle("hidden", !show);
  document.getElementById("fleetIntro").classList.toggle("hidden", show);
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
