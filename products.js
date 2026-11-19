/* Product showcase: tees from Shopify, charm necklaces from Etsy.
   Edit the lists below to change what shows on the Home and Shop pages.
   Any element with data-products="tees" or data-products="necklaces" gets filled in.
   Optional data-limit="8" shows only the first N items. */
(function(){
  var SHOPIFY = 'https://staticandstardust.myshopify.com';
  var CDN = 'https://cdn.shopify.com/s/files/1/0777/9188/7412/files/';
  var NECKLACE_LISTING = 'https://www.etsy.com/listing/4602127791/variety-of-charm-necklaces-check-them';

  // [title, Shopify product handle, image file on the Shopify CDN]
  var TEES = [
    ['Retro UFO Believe Tee','retro-ufo-believe-tee-1','ninjapod_media_4183699_609242_51_FRONT.jpg?v=1794701747'],
    ['Legends Were Born in 1982 Bigfoot Tee','legends-were-born-in-1982-bigfoot-tee','ninjapod_media_4377434_616502_51_FRONT.jpg?v=1794958257'],
    ['Ew, People Alien Tee','ew-people-alien-tee','ninjapod_media_4374476_616355_51_FRONT.jpg?v=1794953154'],
    ['Just a Girl Who Loves Bigfoot Tee','just-a-girl-who-loves-bigfoot-tee','ninjapod_media_4377195_616490_51_FRONT.jpg?v=1794957979'],
    ['Alien Cow Abduction Tee','alien-cow-abduction-tee','ninjapod_media_4373921_616330_51_FRONT.jpg?v=1794952516'],
    ['Hide and Seek World Champ Bigfoot Tee','hide-and-seek-world-champ-bigfoot-tee','ninjapod_media_4376433_616475_51_FRONT.jpg?v=1794957486'],
    ['Get In, Loser Alien Tee','get-in-loser-alien-tee','ninjapod_media_4375868_616445_51_FRONT.jpg?v=1794956743'],
    ['Best Papa Squatch Ever Tee','best-papa-squatch-ever-tee','ninjapod_media_4396975_617408_51_FRONT.jpg?v=1794976526'],
    ['Alien Faces Retro Panel Tee','alien-faces-retro-panel-tee','ninjapod_media_4374294_616348_51_FRONT.jpg?v=1794952997'],
    ['Rabbit Abduction Tee','rabbit-abduction-tee','ninjapod_media_4376027_616452_51_FRONT.jpg?v=1794956963'],
    ['Sunset Footprints Bigfoot Tee','papa-squatch-bigfoot-tee','ninjapod_media_4376337_616468_51_FRONT.jpg?v=1794957319'],
    ['Retro Silhouette Bigfoot Tee','retro-silhouette-bigfoot-tee','ninjapod_media_4397390_617441_51_FRONT.jpg?v=1794977258']
  ];

  // [charm name, i18n key for the Spanish name, local photo]
  var NECKLACES = [
    ['Gold Rose','n.rose','assets/necklace-rose.jpg'],
    ['Blue Saturn','n.saturn','assets/necklace-saturn.jpg'],
    ['Silver Cat','n.cat','assets/necklace-cat.jpg'],
    ['Gold Reindeer','n.reindeer','assets/necklace-reindeer.jpg']
  ];

  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}

  function tee(t){
    return '<a class="prod" href="'+SHOPIFY+'/products/'+t[1]+'" rel="noopener">'+
      '<div class="prod-pic tee"><img src="'+CDN+t[2]+'&width=600" alt="'+esc(t[0])+'" loading="lazy" width="600" height="600"></div>'+
      '<div class="prod-txt"><b>'+esc(t[0])+'</b><small data-i18n="p.onshopify">View on Shopify →</small></div></a>';
  }
  function necklace(n){
    return '<a class="prod" href="'+NECKLACE_LISTING+'" rel="noopener">'+
      '<div class="prod-pic neck"><img src="'+n[2]+'" alt="'+esc(n[0])+' charm necklace with its moon and star gift bag" loading="lazy" width="640" height="800"></div>'+
      '<div class="prod-txt"><b data-i18n="'+n[1]+'">'+esc(n[0])+' charm necklace</b><small data-i18n="p.onetsy">View on Etsy →</small></div></a>';
  }

  document.querySelectorAll('[data-products]').forEach(function(el){
    var kind = el.getAttribute('data-products');
    var limit = parseInt(el.getAttribute('data-limit'),10) || 999;
    var list = kind === 'tees' ? TEES : NECKLACES;
    el.innerHTML = list.slice(0,limit).map(kind === 'tees' ? tee : necklace).join('');
  });

  // Hero collage pictures (Home page only)
  var hc = document.getElementById('heroTee');
  if (hc) hc.src = CDN + TEES[0][2] + '&width=500';

  var ES = window.SAS_SHARED_ES || (window.SAS_SHARED_ES = {});
  ES['p.onshopify'] = 'Ver en Shopify →';
  ES['p.onetsy'] = 'Ver en Etsy →';
  ES['n.rose'] = 'Collar con dije de rosa dorada';
  ES['n.saturn'] = 'Collar con dije de Saturno azul';
  ES['n.cat'] = 'Collar con dije de gato plateado';
  ES['n.reindeer'] = 'Collar con dije de reno dorado';
})();
