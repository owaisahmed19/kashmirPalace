/* ==========================================================================
   KASHMIR PALACE - Interactive Application Script
   Handles: Navigation, Dish Filters & Live Search, Image Lightbox,
   Booking Form Submissions & Confirmation Modal, Toast Notifications
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Menu Dataset
  const dishes = [
    // Entrées (Beignets & Salades)
    { id: 1, name: "Assortiments de Beignets", price: "15,00 €", category: "entrees", desc: "Pour 2 personnes. Assortiment généreux de beignets variés.", tags: ["veg"] },
    { id: 2, name: "Shammi Kebab", price: "7,00 €", category: "entrees", desc: "Roquettes de viande hachée parfumées à la cardamome et épices fines.", tags: [] },
    { id: 3, name: "Mixed Pakora", price: "6,00 €", category: "entrees", desc: "Beignets croquants de différents légumes de saison.", tags: ["veg"] },
    { id: 4, name: "Onion Bajia", price: "5,00 €", category: "entrees", desc: "Beignets traditionnels d'oignons émincés aux épices indiennes.", tags: ["veg"] },
    { id: 5, name: "Vegetable Samossa", price: "5,50 €", category: "entrees", desc: "Chaussons dorés et croustillants farcis aux légumes épicés.", tags: ["veg"] },
    { id: 6, name: "Salade Mixte", price: "6,00 €", category: "entrees", desc: "Salade verte fraîchement préparée à la façon indienne.", tags: ["veg"] },
    { id: 7, name: "Baingan Pakora", price: "5,00 €", category: "entrees", desc: "Beignets d'aubergine dorés au four tandoor.", tags: ["veg"] },
    { id: 8, name: "Aloo Pakora", price: "5,00 €", category: "entrees", desc: "Beignets de pommes de terre délicatement assaisonnés.", tags: ["veg"] },
    { id: 9, name: "Raïta", price: "4,50 €", category: "entrees", desc: "Yaourt frais au concombre croquant parfumé au cumin grillé.", tags: ["veg"] },

    // Tandoori & Grillades
    { id: 10, name: "Assortiment de Tandooris", price: "27,00 €", category: "tandoori", desc: "Pour 2 personnes. Gambas, brochettes de poulet, agneau et poisson grillés au tandoor.", tags: ["signature"] },
    { id: 11, name: "Mix Pendjab", price: "16,00 €", category: "tandoori", desc: "Pour 1 personne. Gambas, brochettes de poulet, agneau et poisson.", tags: ["signature"] },
    { id: 12, name: "Poulet Tandoori", price: "7,00 €", category: "tandoori", desc: "Cuisse de poulet marinée au yaourt et aux épices tandoori.", tags: [] },
    { id: 13, name: "Poulet Tikka", price: "7,50 €", category: "tandoori", desc: "Dés de poulet mariné au yaourt et aux épices parfumées.", tags: [] },
    { id: 14, name: "Agneau Tikka", price: "8,00 €", category: "tandoori", desc: "Morceaux d'agneau tendres marinés au yaourt et aux épices.", tags: [] },
    { id: 15, name: "Seekh Kebab", price: "7,50 €", category: "tandoori", desc: "Brochette d'agneau haché relevé aux épices parfumées.", tags: ["spicy"] },
    { id: 16, name: "Poisson Tikka", price: "8,00 €", category: "tandoori", desc: "Brochette de poisson mariné aux épices du Palais.", tags: [] },
    { id: 17, name: "Gambas Tandoori", price: "21,00 €", category: "tandoori", desc: "Gambas royales marinées aux épices parfumées puis grillées.", tags: [] },
    { id: 18, name: "Brochette de Poulet", price: "15,90 €", category: "tandoori", desc: "Brochette de poulet tendre cuite au tandoor, servie fumante.", tags: [] },
    { id: 19, name: "Brochette d'Agneau", price: "17,90 €", category: "tandoori", desc: "Brochette d'agneau juteuse mariné aux herbes royales.", tags: [] },
    { id: 20, name: "La Grillade Mixte", price: "19,90 €", category: "tandoori", desc: "Agneau, poulet, Seekh Kebab et merguez aux braises du tandoor.", tags: ["signature"] },

    // Plats Principaux (Poulet, Agneau, Beef)
    { id: 21, name: "Poulet Tikka Massala", price: "13,00 €", category: "plats", desc: "Brochettes de poulet en sauce onctueuse aux épices parfumées.", tags: ["signature"] },
    { id: 22, name: "Poulet Moghalai", price: "13,00 €", category: "plats", desc: "Poulet en sauce riches aux amandes, raisins secs, noix de cajou, œuf et épices.", tags: [] },
    { id: 23, name: "Butter Chicken", price: "13,00 €", category: "plats", desc: "Poulet tandoori désossé mijoté aux tomates, noix de cajou et crème fraîche.", tags: ["signature"] },
    { id: 24, name: "Poulet Korma", price: "12,50 €", category: "plats", desc: "Poulet doux en sauce veloutée aux noix de cajou, raisins et crème.", tags: [] },
    { id: 25, name: "Poulet Curry", price: "11,00 €", category: "plats", desc: "Poulet mijoté dans une sauce curry traditionnelle faite maison.", tags: [] },
    { id: 26, name: "Poulet Madras", price: "13,00 €", category: "plats", desc: "Curry de poulet relevé avec piments et épices du sud.", tags: ["spicy"] },
    { id: 27, name: "Poulet Palak", price: "12,50 €", category: "plats", desc: "Désossé de poulet mijoté avec des épinards frais et épices.", tags: [] },
    { id: 28, name: "Poulet Jalfrezi", price: "12,50 €", category: "plats", desc: "Poulet en sauce croquante aux poivrons, oignons et cumin.", tags: [] },
    { id: 29, name: "Chicken Mongue", price: "12,00 €", category: "plats", desc: "Curry de poulet sublimé par un chutney de mangue douce et poivrons.", tags: [] },
    
    { id: 30, name: "Agneau Tikka Massala", price: "14,50 €", category: "plats", desc: "Brochettes d'agneau grillées puis mijotées dans une sauce massala.", tags: [] },
    { id: 31, name: "Agneau Moghalai", price: "13,50 €", category: "plats", desc: "Morceaux d'agneau royaux en sauce aux amandes, cajou et fruits secs.", tags: [] },
    { id: 32, name: "Agneau Vindaloo", price: "13,50 €", category: "plats", desc: "Agneau très relevé avec pommes de terre, coriandre, gingembre et oignons.", tags: ["spicy"] },
    { id: 33, name: "Agneau Hyderabadi", price: "14,50 €", category: "plats", desc: "Spécialité d'Hyderabad : sauce menthe fraîche, noix de coco et épices.", tags: [] },
    { id: 34, name: "Agneau Curry", price: "13,00 €", category: "plats", desc: "Curry d'agneau traditionnel mijoté doucement.", tags: [] },
    { id: 35, name: "Agneau Sagwala", price: "13,50 €", category: "plats", desc: "Agneau tendre cuit avec des épinards hachés et épices du Pendjab.", tags: [] },
    { id: 36, name: "Agneau Madras", price: "13,50 €", category: "plats", desc: "Curry d'agneau corsé et relevé.", tags: ["spicy"] },
    { id: 37, name: "Agneau Dal", price: "13,50 €", category: "plats", desc: "Agneau mijoté avec un mélange de lentilles indiennes parfumées.", tags: [] },
    { id: 38, name: "Agneau Shahi Korma", price: "14,50 €", category: "plats", desc: "Viande en dés, noix de cajou, pistaches, amandes et crème fraîche.", tags: ["signature"] },

    { id: 39, name: "Beef Curry", price: "14,00 €", category: "plats", desc: "Curry de bœuf savoureux mijoté avec coriandre et épices.", tags: [] },
    { id: 40, name: "Beef Korma", price: "14,00 €", category: "plats", desc: "Curry de bœuf creamy aux cajous, amandes et raisins secs.", tags: [] },
    { id: 41, name: "Beef Madras", price: "15,00 €", category: "plats", desc: "Curry de bœuf vigoureux et très épicé.", tags: ["spicy"] },
    { id: 42, name: "Beef Vindaloo", price: "15,00 €", category: "plats", desc: "Curry de bœuf épicé servi avec pommes de terre fondantes.", tags: ["spicy"] },

    // Crevettes & Poissons
    { id: 43, name: "Crevettes Curry", price: "13,50 €", category: "mer", desc: "Curry de crevettes aux herbes fraîches et épices douces.", tags: [] },
    { id: 44, name: "Crevettes Madras", price: "15,00 €", category: "mer", desc: "Curry de crevettes relevé pour amateurs d'épices fortes.", tags: ["spicy"] },
    { id: 45, name: "Crevettes Jalfrez", price: "15,00 €", category: "mer", desc: "Crevettes sautées vivement aux oignons, poivrons et tomates.", tags: [] },
    { id: 46, name: "Crevettes Kamasutra", price: "15,50 €", category: "mer", desc: "Crevettes en sauce divine avec tomates, noix de coco et menthe.", tags: ["signature"] },
    { id: 47, name: "Crevettes Honeymoon", price: "14,50 €", category: "mer", desc: "Crevettes poêlées avec épinards frais assaisonnés.", tags: [] },
    { id: 48, name: "Saumon Massala", price: "15,00 €", category: "mer", desc: "Pavé de saumon cuit dans une sauce massala citronnée aux tomates.", tags: [] },
    { id: 49, name: "Saumon Goa Curry", price: "15,50 €", category: "mer", desc: "Saumon mijoté dans du lait de coco parfumé et jus de citron vert.", tags: [] },
    { id: 50, name: "Saumon Hyderabadi", price: "15,50 €", category: "mer", desc: "Saumon en sauce parfumée à la menthe, noix de coco et épices.", tags: [] },

    // Légumes (Végétarien)
    { id: 51, name: "Aloo Gobhi", price: "8,50 €", category: "legumes", desc: "Chou-fleur et pommes de terre rissolés avec tomates et cumin.", tags: ["veg"] },
    { id: 52, name: "Aloo Paneer", price: "8,50 €", category: "legumes", desc: "Pommes de terre cuites avec le fromage indien maison (paneer).", tags: ["veg"] },
    { id: 53, name: "Matar Panir", price: "9,00 €", category: "legumes", desc: "Petits pois tendres et paneer maison en sauce tomate oignon.", tags: ["veg"] },
    { id: 54, name: "Sag Aloo", price: "8,50 €", category: "legumes", desc: "Pommes de terre mijotées aux épinards frais parfumés.", tags: ["veg"] },
    { id: 55, name: "Baigan Bharta", price: "9,00 €", category: "legumes", desc: "Caviar d'aubergines fumées au tandoor façon Punjab.", tags: ["veg"] },
    { id: 56, name: "Légumes Korma", price: "9,00 €", category: "legumes", desc: "Méli-mélo de légumes et paneer maison en sauce douce aux cajous.", tags: ["veg"] },
    { id: 57, name: "Champignons Massala", price: "8,50 €", category: "legumes", desc: "Curry de champignons de paris sautés aux épices indiennes.", tags: ["veg"] },
    { id: 58, name: "Mixte Dal", price: "8,50 €", category: "legumes", desc: "Dahl traditionnel de lentilles jaunes assaisonnées d'ail et cumin.", tags: ["veg"] },
    { id: 59, name: "Palak Panir", price: "8,50 €", category: "legumes", desc: "Épinards crémeux aux dés de fromage fait maison.", tags: ["veg"] },
    { id: 60, name: "Dal Palak", price: "9,00 €", category: "legumes", desc: "Mélange réconfortant de lentilles et d'épinards au cumin.", tags: ["veg"] },

    // Biryanis & Riz
    { id: 61, name: "Agneau Biryani", price: "15,00 €", category: "biryani", desc: "Mijoté royal d'agneau et de riz basmati vieilli aux épices.", tags: ["signature"] },
    { id: 62, name: "Poulet Biryani", price: "13,00 €", category: "biryani", desc: "Riz basmati perfumé cuit étouffé avec morceaux de poulet mariné.", tags: [] },
    { id: 63, name: "Vegetable Biryani", price: "12,00 €", category: "biryani", desc: "Riz basmati aromatique et mélange de légumes aux épices d'Orient.", tags: ["veg"] },
    { id: 64, name: "Crevettes Biryani", price: "17,00 €", category: "biryani", desc: "Biryani raffiné aux crevettes juteuses et cardamome.", tags: [] },
    { id: 65, name: "Biryani Mixte Pendjab", price: "19,00 €", category: "biryani", desc: "Grand Biryani festif : poulet, agneau, crevettes et légumes.", tags: ["signature"] },
    { id: 66, name: "Riz Nature Basmati", price: "4,00 €", category: "biryani", desc: "Riz basmati long grain cuit à la vapeur.", tags: ["veg"] },
    { id: 67, name: "Kashmiri Pulao", price: "5,00 €", category: "biryani", desc: "Riz basmati doux agrémenté d'amandes effilées et raisins secs.", tags: ["veg"] },
    { id: 68, name: "Riz Safran", price: "5,00 €", category: "biryani", desc: "Riz basmati délicatement teinté et parfumé au vrai safran.", tags: ["veg"] },
    { id: 69, name: "Matar Pulao", price: "5,00 €", category: "biryani", desc: "Riz basmati aux petits pois tendres.", tags: ["veg"] },

    // Pains au Tandoor (Naans)
    { id: 70, name: "Nan Nature", price: "2,00 €", category: "naans", desc: "Galette de farine levée cuite sur les parois du four en terre.", tags: ["veg"] },
    { id: 71, name: "Nan Nutella", price: "3,00 €", category: "naans", desc: "Naan gourmand généreusement fourré au Nutella fondant.", tags: ["veg"] },
    { id: 72, name: "Nan Fromage", price: "4,00 €", category: "naans", desc: "Fourré avec une quantité généreuse de fromage fondant.", tags: ["veg"] },
    { id: 73, name: "Garlic Nan", price: "3,50 €", category: "naans", desc: "Naan chaud brossé au beurre d'ail frais et coriandre.", tags: ["veg"] },
    { id: 74, name: "Cheese Nan Garlic", price: "4,00 €", category: "naans", desc: "Le roi des naans : fromage fondant à l'intérieur, beurre d'ail dessus.", tags: ["signature", "veg"] },
    { id: 75, name: "Naan Stuff", price: "4,00 €", category: "naans", desc: "Naan farci d'un mélange savoureux de légumes épicés.", tags: ["veg"] },
    { id: 76, name: "Kashmiri Nan", price: "4,00 €", category: "naans", desc: "Naan sucré fourré aux pistaches et amandes moulues.", tags: ["veg"] },
    { id: 77, name: "Keema Nan", price: "4,50 €", category: "naans", desc: "Pain au tandoor farci de viande d'agneau hachée aux épices.", tags: [] },

    // Desserts & Boissons
    { id: 78, name: "Pistache Kulfi", price: "7,00 €", category: "desserts", desc: "Glace indienne artisanale à la pistache, amandes et cardamome.", tags: ["signature", "veg"] },
    { id: 79, name: "Gulab Jamun", price: "5,00 €", category: "desserts", desc: "Beignets moelleux au lait trempés dans un sirop de rose et cardamome.", tags: ["veg"] },
    { id: 80, name: "Gâteau Maison Semoule", price: "4,50 €", category: "desserts", desc: "Gâteau traditionnel de semoule dorée aux fruits secs.", tags: ["veg"] },
    { id: 81, name: "Glace Pendjab", price: "6,50 €", category: "desserts", desc: "Glace vanille veloutée avec son nappe de coulis de mangue.", tags: ["veg"] },
    { id: 82, name: "Assiette Pendjab Dessert", price: "8,00 €", category: "desserts", desc: "Assortiment complet : glace vanille, mangue, gulab jamun, gâteau et fruits.", tags: ["veg"] },
    { id: 83, name: "Lassi Mangue / Banane", price: "5,00 €", category: "desserts", desc: "Boisson traditionnelle au yaourt brassé à la mangue ou banane fraîche.", tags: ["veg"] },
    { id: 84, name: "Thé Massala Maison", price: "3,50 €", category: "desserts", desc: "Thé noir indien mijoté au lait, gingembre, cardamome et épices.", tags: ["signature"] }
  ];

  // Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Category Metadata definitions for separated sections
  const categoryMeta = {
    entrees: {
      title: "Entrées & Beignets",
      icon: "fa-bowl-food",
      subtitle: "Chaussons dorés, pakoras aux légumes & mariages d'épices douces"
    },
    tandoori: {
      title: "Tandoori & Grillades Kashmir",
      icon: "fa-fire",
      subtitle: "Saisis à 400°C aux braises dans notre authentique four d'argile"
    },
    plats: {
      title: "Plats Principaux (Poulet, Agneau, Bœuf)",
      icon: "fa-drumstick-bite",
      subtitle: "Sauces crémeuses, mijotés aux amandes, noix de cajou, massala & curry"
    },
    mer: {
      title: "Crevettes & Poissons",
      icon: "fa-fish",
      subtitle: "Saveurs maritimes mijotées au lait de coco, menthe fraîche et citron vert"
    },
    legumes: {
      title: "Légumes & Cuisine Végétarienne",
      icon: "fa-leaf",
      subtitle: "Fromage maison (Paneer), lentilles dahl et caviars d'aubergine fumée"
    },
    biryani: {
      title: "Biryanis & Riz Basmati",
      icon: "fa-wheat-awn",
      subtitle: "Plats royaux au riz basmati safrané vieilli et aromates d'Orient"
    },
    naans: {
      title: "Pains au Tandoor (Naans)",
      icon: "fa-bread-slice",
      subtitle: "Naans chauds préparés et cuits à la minute sur les parois du four"
    },
    desserts: {
      title: "Desserts & Boissances Artisanales",
      icon: "fa-ice-cream",
      subtitle: "Douceurs à la pistache, beignets au sirop de rose et lassi fraicheur"
    }
  };

  // Render Dishes Function (Separated Categories)
  const dishesGrid = document.getElementById('dishesGrid');
  const searchInput = document.getElementById('carteSearch');
  const tabBtns = document.querySelectorAll('.tab-btn');

  let currentCategory = 'all';
  let searchQuery = '';

  function renderDishes() {
    if (!dishesGrid) return;

    // Filter dishes by search input
    const searchFiltered = dishes.filter(dish => {
      return dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
             dish.desc.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (searchFiltered.length === 0) {
      dishesGrid.innerHTML = `
        <div class="no-results-box">
          <i class="fa-solid fa-utensils"></i>
          <h3>Aucun plat trouvé pour "${searchQuery}"</h3>
          <p>Essayez un autre mot-clé (ex: Butter Chicken, Garlic Naan, Biryani, Korma...)</p>
        </div>
      `;
      return;
    }

    // Determine categories to show based on selected filter tab
    let categoriesToRender = [];
    if (currentCategory === 'all') {
      categoriesToRender = Object.keys(categoryMeta);
    } else if (currentCategory === 'mer_legumes') {
      categoriesToRender = ['mer', 'legumes'];
    } else if (currentCategory === 'biryani_naans') {
      categoriesToRender = ['biryani', 'naans'];
    } else {
      categoriesToRender = [currentCategory];
    }

    let htmlBuffer = '';

    categoriesToRender.forEach(catKey => {
      const catDishes = searchFiltered.filter(dish => dish.category === catKey);
      if (catDishes.length === 0) return; // Skip empty categories during search

      const meta = categoryMeta[catKey];

      const cardsHtml = catDishes.map(dish => {
        let tagHtml = '';
        if (dish.tags.includes('signature')) tagHtml += `<span class="tag tag-signature">★ Signature</span>`;
        if (dish.tags.includes('veg')) tagHtml += `<span class="tag tag-veg">🌱 Végétarien</span>`;
        if (dish.tags.includes('spicy')) tagHtml += `<span class="tag tag-spicy">🔥 Épicé</span>`;

        return `
          <div class="dish-card">
            <div>
              <div class="dish-header">
                <h4 class="dish-title">${dish.name}</h4>
                <span class="dish-price">${dish.price}</span>
              </div>
              <p class="dish-desc">${dish.desc}</p>
            </div>
            <div class="dish-tags">
              ${tagHtml}
            </div>
          </div>
        `;
      }).join('');

      htmlBuffer += `
        <div class="category-block" id="category-${catKey}">
          <div class="category-block-header">
            <div class="category-title-group">
              <div class="category-icon-badge">
                <i class="fa-solid ${meta.icon}"></i>
              </div>
              <div>
                <h3 class="category-block-title">${meta.title}</h3>
                <p class="category-block-sub">${meta.subtitle}</p>
              </div>
            </div>
            <span class="category-count-badge">${catDishes.length} spécialités</span>
          </div>
          <div class="dishes-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    });

    dishesGrid.innerHTML = htmlBuffer;
  }

  // Initial render
  renderDishes();

  // Tab Filtering & Smooth Scrolling
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.category;
      renderDishes();

      // Scroll category tabs nicely into center view if on mobile
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  // Search Filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderDishes();
    });
  }

  // Reservation Modal & Toast Handling
  const modal = document.getElementById('bookingModal');
  const modalClose = document.getElementById('modalClose');
  const modalContent = document.getElementById('modalDetails');
  const bookingForm = document.getElementById('bookingForm');

  function openModal(html) {
    if (modal && modalContent) {
      modalContent.innerHTML = html;
      modal.classList.add('open');
    }
  }

  function closeModal() {
    if (modal) modal.classList.remove('open');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Toast Function
  window.showToast = function(msg) {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold-primary);"></i> <span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  };

  // Form Submit Handler
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(bookingForm);
      const name = formData.get('name') || 'Cher Client';
      const phone = formData.get('phone');
      const date = formData.get('date');
      const time = formData.get('time');
      const guests = formData.get('guests');
      const service = formData.get('service');

      const summaryHtml = `
        <div style="text-align: center;">
          <div style="width: 60px; height: 60px; background: rgba(212, 175, 55, 0.2); border: 1px solid var(--gold-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.2rem auto; font-size: 1.8rem; color: var(--gold-light);">
            <i class="fa-solid fa-crown"></i>
          </div>
          <h2 style="font-family: var(--font-royal); color: var(--gold-light); font-size: 1.6rem; margin-bottom: 0.5rem;">Demande Reçue !</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">Merci <strong>${name}</strong>. Notre équipe du Kashmir Palace vous contactera au <strong>${phone}</strong> sous peu pour confirmer votre réservation.</p>
          
          <div style="background: rgba(255,255,255,0.03); border: 1px dashed var(--border-gold); padding: 1.2rem; border-radius: 10px; text-align: left; margin-bottom: 1.5rem; font-size: 0.9rem;">
            <p><strong>Service :</strong> ${service}</p>
            <p><strong>Date & Heure :</strong> ${date} à ${time}</p>
            <p><strong>Nombre de convives :</strong> ${guests}</p>
            <p><strong>Lieu :</strong> 59 Rue de Besançon, 90000 Belfort</p>
          </div>

          <button class="btn btn-primary" onclick="document.getElementById('bookingModal').classList.remove('open')" style="width: 100%;">Parfait, Merci !</button>
        </div>
      `;

      openModal(summaryHtml);
      showToast('Votre demande de réservation a été envoyée avec succès !');
      bookingForm.reset();
    });
  }

  // Gallery Lightbox Simulator
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || 'Plat Kashmir Palace';
      if (img) {
        openModal(`
          <div style="text-align: center;">
            <img src="${img.src}" alt="${title}" style="width: 100%; height: 320px; object-fit: cover; border-radius: 12px; margin-bottom: 1rem; border: 1px solid var(--border-gold);">
            <h3 style="font-family: var(--font-royal); color: var(--gold-light); font-size: 1.4rem;">${title}</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.4rem;">Préparé avec authenticité par nos chefs cuisiniers au Kashmir Palace.</p>
          </div>
        `);
      }
    });
  });
});
