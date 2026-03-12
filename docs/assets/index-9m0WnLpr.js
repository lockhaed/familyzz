(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const t=[{name:"Classic Cheese",description:"Buns boulanger, viande hachée, cheddar, salade, tomates, pickles, sauce ketchup & moutarde douce",priceSingle:"9€",priceMenu:"12.90€"},{name:"Smash",description:"Buns boulanger, viande hachée smashée, cheddar x2, oignons caramélisés, sauce maison",priceSingle:"9€",priceMenu:"12.90€"},{name:"Classic Pané",description:"Buns boulanger, poulet mariné pané, cheddar, salade, sauce ranch",priceSingle:"9€",priceMenu:"12.90€"},{name:"Smash Poulet",description:"Buns boulanger, poulet mariné haché et smashé, cheddar x2, oignons frits, sauce tasty",priceSingle:"9€",priceMenu:"12.90€"},{name:"Seguin",description:"Buns boulanger, poulet mariné pané, fromage de chèvre, salade, oignon rouge, tomate, sauce miel",priceSingle:"10€",priceMenu:"13.90€"},{name:"BBQ",description:"Buns boulanger, viande hachée, cheddar, bacon, salade, tomates, oignons rouges, pickles, sauce BBQ fumée",priceSingle:"10€",priceMenu:"13.90€"},{name:"L'Auvergnat",description:"Buns boulanger, viande hachée, Saint-Nectaire, salade, oignons caramélisés, sauce ranch",priceSingle:"11€",priceMenu:"14.50€"},{name:"Briard",description:"Buns boulanger, viande hachée, Brie, salade, tomates, oignons rouges, sauce au poivre",priceSingle:"11€",priceMenu:"14.50€"},{name:"L'Enchanteur",description:"Buns boulanger, poulet mariné pané, cheddar, coleslaw, pickles, oignons caramélisés, sauce miel épicée",priceSingle:"11€",priceMenu:"14.50€"},{name:"Veggie",description:"Buns boulanger, steak de soja, caviar d'aubergine, pickles, oignons rouges",priceSingle:"11€",priceMenu:"14.50€"},{name:"Campana",description:"Buns boulanger, mozzarella di Bufala panée, salade roquette, crème balsamique, tomate, oignons rouges, sauce pesto",priceSingle:"12€",priceMenu:"15.50€"},{name:"Family'ZZ",description:"Buns boulanger, viande hachée, poulet mariné pané, emmental, salade, tomates, oignons caramélisés, pickles, sauce maison",priceSingle:"13.50€",priceMenu:"17.90€"}],l=[{id:"burgers",title:"Burgers",icon:"🍔",subtitle:"MENU = 1 burger + 1 accompagnement + 1 boisson",items:t},{id:"chicken",title:"Chicken",icon:"🍗",subtitle:"Viande hachée et poulet pané à la minute",items:[{name:"Tenders x5",description:"Poulet mariné pané, sauce tasty",priceSingle:"6.50€",priceMenu:"10€"}]},{id:"salades",title:"Salades",icon:"🥗",subtitle:"+ petit pain sur demande",items:[{name:"César",description:"Salade, tomates, poulet mariné pané, oignons frits, copeaux de parmesan, croûtons, sauce césar",price:"12€"},{name:"Campana",description:"Salade roquette, tomates, oignons rouges, mozzarella di Bufala, crème balsamique, sauce pesto",price:"13€"}]},{id:"enfant",title:"Menu Enfant",icon:"⭐",items:[{name:"Mini Smash / Poulet",description:"Buns boulanger, viande hachée smashée, cheddar, sauce ketchup — frites + boisson capri-sun + compote",priceSingle:"4.50€",priceMenu:"8€"},{name:"Jus de pomme BIO",description:"En supplément",price:"+1.50€"}]}],i={accompagnements:["Frites de pomme de terre maison","Frites de patate douce","Salade verte"],supplements:[{name:"Viande",price:"3.50€"},{name:"Fromage",price:"1.50€"},{name:"Bacon",price:"1.50€"},{name:"Œuf",price:"1.50€"},{name:"Piment",price:"1€"}],sauces:["Sauce maison","Sauce Ranch maison","Sauce tasty maison","Miel épicé","Sauce pesto","Mayonnaise","BBQ fumée","Ketchup","Sauce au poivre","Moutarde douce"],boissons:[{name:"Capri-sun",price:"1€"},{name:"Coca Cola, zéro, cherry, Fuze Tea, Oasis, Fanta",price:"2€"},{name:"Dodo drink (mango, lemon, fraise, pêche, melon, cerise, litchis)",price:"2€"},{name:"San Pellegrino 50cl",price:"2€"},{name:"Vittel 50cl",price:"1.50€"},{name:"Red bull (hors menu)",price:"3€"},{name:"Bière locale (hors menu)",price:"5€"},{name:"Briquette de jus de pommes BIO",price:"2.50€"}],desserts:["Cookies","Tiramisu maison","Mousse au chocolat d'Odette","Dessert de la semaine"]};function p(e){return e.price?`<span class="price">${e.price}</span>`:`
    <div class="price-group">
      <span class="price-single">Seul <strong>${e.priceSingle}</strong></span>
      <span class="price-menu">Menu <strong>${e.priceMenu}</strong></span>
    </div>
  `}function u(e){return`
    <div class="menu-item">
      <div class="menu-item-info">
        <h3 class="menu-item-name">${e.name}</h3>
        <p class="menu-item-desc">${e.description}</p>
      </div>
      ${p(e)}
    </div>
  `}function d(e){return`
    <section id="${e.id}" class="menu-section">
      <div class="section-header">
        <h2>${e.icon??""} ${e.title}</h2>
        ${e.subtitle?`<p class="section-subtitle">${e.subtitle}</p>`:""}
      </div>
      <div class="items-grid">
        ${e.items.map(u).join("")}
      </div>
    </section>
  `}function m(){return`
    <section id="extras" class="extras-section">
      <div class="extras-grid">

        <div class="extra-block">
          <h2>🍟 Accompagnements</h2>
          <p class="section-subtitle">1 portion — <strong>3.50€</strong></p>
          <ul>
            ${i.accompagnements.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>

        <div class="extra-block">
          <h2>➕ Suppléments</h2>
          <ul>
            ${i.supplements.map(e=>`<li><span>${e.name}</span><span class="price-inline">${e.price}</span></li>`).join("")}
          </ul>
        </div>

        <div class="extra-block">
          <h2>🧴 Sauces</h2>
          <p class="section-subtitle">Pot : Petit <strong>0.50€</strong> / Gros <strong>2€</strong></p>
          <ul class="sauces-list">
            ${i.sauces.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>

        <div class="extra-block">
          <h2>🍹 Boissons</h2>
          <ul>
            ${i.boissons.map(e=>`<li><span>${e.name}</span><span class="price-inline">${e.price}</span></li>`).join("")}
          </ul>
        </div>

        <div class="extra-block">
          <h2>🍪 Desserts</h2>
          <p class="section-subtitle"><strong>3.50€</strong> la pièce</p>
          <ul>
            ${i.desserts.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>

      </div>
    </section>
  `}function h(){const e=document.getElementById("app");e&&(e.innerHTML=`
    <header class="hero">
      <div class="hero-inner">
        <div class="hero-crown">👑</div>
        <h1 class="hero-title">Family<span class="accent">'ZZ</span></h1>
        <p class="hero-location">Sucy-en-Brie</p>
        <p class="hero-tagline">HomeMade Burgers — Viande hachée &amp; poulet pané à la minute</p>
        <p class="hero-quality">Pain frais du boulanger chaque jour</p>
        <div class="hero-promo">☕ 1 café offert le midi pour un menu sur place</div>
      </div>
    </header>

    <nav class="menu-nav">
      <a href="#burgers">Burgers</a>
      <a href="#chicken">Chicken</a>
      <a href="#salades">Salades</a>
      <a href="#enfant">Menu Enfant</a>
      <a href="#extras">Extras</a>
    </nav>

    <main>
      ${l.map(d).join("")}
      ${m()}
    </main>

    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-block">
          <h3>Horaires</h3>
          <p>Lun – Jeu : 11h30–14h &amp; 18h30–22h</p>
          <p>Ven – Sam : 11h30–14h &amp; 18h30–23h</p>
          <p class="closed">Fermé le dimanche</p>
        </div>
        <div class="footer-block">
          <h3>Nous trouver</h3>
          <p>21, place Ste Bernadette</p>
          <p>94370 Sucy-en-Brie</p>
          <p><a href="tel:0145907624">01 45 90 76 24</a></p>
        </div>
        <div class="footer-block">
          <h3>Livraison</h3>
          <p>Offerte jusqu'à 3 km</p>
          <p>Aussi disponible sur <strong>Uber Eats</strong></p>
          <p class="social">@familyzz94</p>
        </div>
      </div>
      <p class="footer-copy">&copy; ${new Date().getFullYear()} Family'ZZ — Tous droits réservés</p>
    </footer>
  `)}h();
