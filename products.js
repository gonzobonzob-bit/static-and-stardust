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

  var HOLIDAY = [
    ['Merry Christmas Truck Tee','merry-christmas-truck-tee','ninjapod_media_4563524_626295_95_FRONT.jpg?v=1795315660'],
    ['Gnomes Christmas Truck Tee','gnomes-christmas-truck-tee','ninjapod_media_4563979_626314_95_FRONT.jpg?v=1795315707'],
    ['Howdy Christmas Tee','howdy-christmas-tee','ninjapod_media_4565065_626356_95_FRONT.jpg?v=1795315737'],
    ['All Of The Otter Reindeer Tee','all-of-the-otter-reindeer-tee','ninjapod_media_4565818_626395_00_FRONT.jpg?v=1795315762'],
    ['Is This Jolly Enough Christmas Cat Tee','is-this-jolly-enough-christmas-cat-tee','ninjapod_media_4566996_626444_95_FRONT.jpg?v=1795315794'],
    ['Most Wonderful Time Tee','most-wonderful-time-tee','ninjapod_media_4563394_626284_00_FRONT.jpg?v=1795315624'],
    ['Warm Holiday Wishes Tee','warm-holiday-wishes-tee','ninjapod_media_4567741_626162_00_FRONT.jpg?v=1795315473'],
    ['Probably Jingle Tired Tee','probably-jingle-tired-tee','ninjapod_media_4562488_626243_00_FRONT.jpg?v=1795315584'],
    ['Too Hot Ugly Sweater Tee','too-hot-ugly-sweater-tee','ninjapod_media_4561134_626182_00_FRONT.jpg?v=1795315520'],
    ['Carpet All Wet Todd Tee','carpet-all-wet-todd-tee','ninjapod_media_4567680_626134_95_FRONT.jpg?v=1795315446'],
    ['My Christmas Spirit Is Whisky Tee','my-christmas-spirit-is-whisky-tee','ninjapod_media_4559680_626044_51_FRONT.jpg?v=1795315401']
  ];

  var NEWYEAR = [
    ['Gold Bow New Year 2027','gold-bow-new-year-2027','ninjapod_media_4722663_634430_51_FRONT.jpg?v=1795565497'],
    ['Gold Stars New Year 2027','gold-stars-new-year-2027','ninjapod_media_4723009_634464_51_FRONT.jpg?v=1795565918'],
    ['Cheers To The New Year','cheers-to-the-new-year','ninjapod_media_4723748_634544_51_FRONT.jpg?v=1795567322'],
    ['Champagne New Year 2027','champagne-new-year-2027','ninjapod_media_4724145_634576_51_FRONT.jpg?v=1795567755'],
    ['Cowboy New Year 2027','cowboy-new-year-2027','ninjapod_media_4724510_634592_51_FRONT.jpg?v=1795568150'],
    ['Same Hot Mess New Year','same-hot-mess-new-year','ninjapod_media_4724675_634603_51_FRONT.jpg?v=1795568447'],
    ['Delightfully Chaotic New Year','delightfully-chaotic-new','ninjapod_media_4724932_634619_00_FRONT.jpg?v=1795568865'],
    ['Fresh Goals Panic New Year','fresh-goals-panic-new-yea','ninjapod_media_4725440_634654_00_FRONT.jpg?v=1795569299'],
    ['Never Sticks Resolutions','never-sticks-resolutions','ninjapod_media_4726034_634680_00_FRONT.jpg?v=1795570049'],
    ['Raccoon New Year 2027','raccoon-new-year-2027','ninjapod_media_4728645_634853_00_FRONT.jpg?v=1795574388'],
    ['Preppy New Year 2027','preppy-new-year-2027','ninjapod_media_4735730_635177_00_FRONT.jpg?v=1795584569'],
    ['If 2027 Shows Up Early','if-2027-shows-up-early','ninjapod_media_4735974_635197_00_FRONT.jpg?v=1795584946']
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
    var list = kind === 'tees' ? TEES : kind === 'holiday' ? HOLIDAY : kind === 'newyear' ? NEWYEAR : NECKLACES;
    el.innerHTML = list.slice(0,limit).map(kind === 'necklaces' ? necklace : tee).join('');
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
