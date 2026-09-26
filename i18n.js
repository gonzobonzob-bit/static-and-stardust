/* ---- i18n: English lives in the markup; each page passes its Spanish dictionary ----
   SASi18n(ES, onApply)
     ES      — { key: spanishHTML } for every [data-i18n] / [data-i18n-content] key on the page
     onApply — optional fn(lang) called after every language switch (for JS-rendered content) */
(function(){
  var KEY = 'sas-lang';

  window.SASi18n = function(ES, onApply){
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    var nodes = document.querySelectorAll('[data-i18n]');
    var metaDesc = document.querySelector('[data-i18n-content]');
    var toggle = document.getElementById('langToggle');

    // Snapshot the English markup so switching back needs no second dictionary.
    var EN = {};
    nodes.forEach(function(el){ EN[el.getAttribute('data-i18n')] = el.innerHTML; });
    if (metaDesc) EN[metaDesc.getAttribute('data-i18n-content')] = metaDesc.getAttribute('content');

    function browserLang(){
      var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
      for (var i = 0; i < list.length; i++){
        var code = String(list[i]).toLowerCase().slice(0, 2);
        if (code === 'es' || code === 'en') return code;
      }
      return 'en';
    }
    function savedLang(){
      try { var v = localStorage.getItem(KEY); return v === 'es' || v === 'en' ? v : null; } catch (e) { return null; }
    }

    function apply(lang){
      var dict = lang === 'es' ? ES : EN;
      nodes.forEach(function(el){
        var k = el.getAttribute('data-i18n');
        if (dict[k] != null) el.innerHTML = dict[k];
      });
      if (metaDesc){
        var mk = metaDesc.getAttribute('data-i18n-content');
        if (dict[mk] != null) metaDesc.setAttribute('content', dict[mk]);
      }
      document.documentElement.lang = lang;
      var other = lang === 'es' ? 'en' : 'es';
      toggle.textContent = other.toUpperCase();
      toggle.setAttribute('lang', other);
      toggle.setAttribute('aria-label', other === 'es' ? 'Español' : 'English');
      if (onApply) onApply(lang);
    }

    var current = savedLang() || browserLang();
    apply(current);

    toggle.addEventListener('click', function(){
      current = current === 'es' ? 'en' : 'es';
      try { localStorage.setItem(KEY, current); } catch (e) {}
      apply(current);
    });

    // Follow browser language changes live, unless the visitor picked one manually.
    window.addEventListener('languagechange', function(){
      if (!savedLang()){ current = browserLang(); apply(current); }
    });
  };
})();
