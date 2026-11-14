/* Shared site chrome: announcement bar, nav, floating Shop button, footer.
   Edit here once and every page updates. Pages give <body data-page="home|shop|about|info|contact">. */
(function(){
  var ETSY='https://staticandstardust.etsy.com', SHOPIFY='https://staticandstardust.myshopify.com';
  var page=document.body.getAttribute('data-page')||'';
  function cur(p){return p===page?' aria-current="page" class="on"':'';}
  var top=
  '<div class="bar"><span data-i18n="bar.msg">🛍️ Our shop is open!</span> <a href="'+ETSY+'" rel="noopener">Etsy</a> · <a href="'+SHOPIFY+'" rel="noopener">Shopify</a> <a class="bar-more" href="shop.html" data-i18n="bar.all">See everything →</a></div>'+
  '<div class="wrap"><header class="top">'+
    '<a class="brand" href="index.html"><img src="assets/logo-badge.png" alt=""><span>Static &amp; Stardust</span></a>'+
    '<nav class="nav" aria-label="Main"><a href="index.html"'+cur('home')+' data-i18n="nav.home">Home</a>'+
      '<a href="about.html"'+cur('about')+' data-i18n="nav.about">Our Story</a>'+
      '<a href="info.html"'+cur('info')+' data-i18n="nav.info">Info</a>'+
      '<a href="contact.html"'+cur('contact')+' data-i18n="nav.contact">Contact</a>'+
      '<a class="nav-shop" href="shop.html" data-i18n="nav.shop">Shop</a></nav>'+
    '<button class="lang" id="langToggle" type="button" aria-label="Español" lang="es">ES</button>'+
  '</header></div>';
  var bottom=
  '<a class="float-shop" href="shop.html" data-i18n="float.shop">🛍️ Shop</a>'+
  '<footer><div class="wrap"><p><a href="shop.html" data-i18n="nav.shop">Shop</a> · <a href="about.html" data-i18n="nav.about">Our Story</a> · <a href="info.html" data-i18n="nav.info">Info</a> · <a href="contact.html" data-i18n="nav.contact">Contact</a></p>'+
  '<p>© <span id="year">2026</span> Static &amp; Stardust · El Paso, TX</p></div></footer>';
  var t=document.getElementById('chrome-top'), b=document.getElementById('chrome-bottom');
  if(t) t.innerHTML=top; if(b) b.innerHTML=bottom;
  window.SAS_SHARED_ES={
    'bar.msg':'🛍️ ¡Nuestra tienda está abierta!','bar.all':'Ver todo →',
    'nav.home':'Inicio','nav.about':'Nuestra historia','nav.info':'Info','nav.contact':'Contacto','nav.shop':'Tienda',
    'float.shop':'🛍️ Tienda'
  };
})();
