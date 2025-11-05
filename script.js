// main.js - small UX interactions and sample data for feeds & explore
document.addEventListener('DOMContentLoaded', ()=>{

  // mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  navToggle?.addEventListener('click', ()=>{
    const nav = document.querySelector('.main-nav');
    if(nav.style.display === 'flex') nav.style.display = '';
    else nav.style.display = 'flex';
  });

  // sample feed cards
  const feed = [
    {title:'Ziro Music & Rice Terraces', img:'https://source.unsplash.com/800x600/?ziro,arunachal', text:'A peaceful valley of music and paddy.'},
    {title:'Tea Trails of Assam', img:'https://source.unsplash.com/800x600/?tea-garden,assam', text:'A slow walk through green tea estates.'},
    {title:'Spiti — Cold Desert', img:'https://source.unsplash.com/800x600/?spiti,valley', text:'Remote high-altitude villages & blue skies.'},
    {title:'Kerala Backwaters', img:'https://source.unsplash.com/800x600/?kerala,backwaters', text:'Houseboats and slow mornings.'},
    {title:'Rajasthan Sand Dunes', img:'https://source.unsplash.com/800x600/?rajasthan,desert', text:'Sunset camels and long horizons.'},
    {title:'Mussoorie Sunset', img:'https://source.unsplash.com/800x600/?mussoorie,hills', text:'Misty lanes and British-era charm.'}
  ];

  // render initial feed (home page)
  const feedEl = document.getElementById('instaFeed');
  function renderFeed(limit=3){
    if(!feedEl) return;
    feedEl.innerHTML = '';
    feed.slice(0,limit).forEach(item=>{
      const div = document.createElement('div');
      div.className = 'feed-card';
      div.innerHTML = `<img src="${item.img}" alt=""><div class="feed-body"><h4>${item.title}</h4><p>${item.text}</p></div>`;
      feedEl.appendChild(div);
    });
  }
  renderFeed(3);

  document.getElementById('loadMore')?.addEventListener('click', ()=>{
    const currently = feedEl.children.length;
    renderFeed(Math.min(feed.length, currently + 3));
  });

  // explore page: sample data and render
  const destinations = [
    {id:'assam', title:'Assam', cat:'Nature', img:'https://source.unsplash.com/800x600/?assam,tea-garden', desc:'Tea gardens, wildlife and river towns.'},
    {id:'ladakh', title:'Ladakh', cat:'Adventure', img:'https://source.unsplash.com/800x600/?ladakh,mountain', desc:'High passes & cold deserts.'},
    {id:'meghalaya', title:'Meghalaya', cat:'Nature', img:'https://source.unsplash.com/800x600/?meghalaya,waterfall', desc:'Caves, falls and root bridges.'},
    {id:'kashmir', title:'Kashmir', cat:'Nature', img:'https://source.unsplash.com/800x600/?kashmir,dal-lake', desc:'Valleys, lakes & houseboats.'},
    {id:'himachal', title:'Himachal Pradesh', cat:'Adventure', img:'https://source.unsplash.com/800x600/?himachal,manali', desc:'Himalayan trails & cafes.'}
  ];

  function renderDestinations(list){
    const destList = document.getElementById('destList');
    if(!destList) return;
    destList.innerHTML = '';
    list.forEach(d=>{
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `<img src="${d.img}" alt="${d.title}" /><div class="card-body"><h3>${d.title}</h3><p>${d.desc}</p><a href="about.html" class="btn ghost">Learn more</a></div>`;
      destList.appendChild(el);
    });
  }
  renderDestinations(destinations);

  // search handler (mini & explore)
  document.getElementById('miniSearch')?.addEventListener('click', ()=>{
    const q = document.getElementById('miniQuery').value.trim().toLowerCase();
    alert('Search (prototype): ' + (q || 'all results') + '\nThis demo shows static results — integrate backend or map API to make live.');
  });

  document.getElementById('exploreBtn')?.addEventListener('click', ()=>{
    const q = document.getElementById('exploreSearch').value.trim().toLowerCase();
    const cat = document.getElementById('exploreCategory').value;
    const filtered = destinations.filter(d => (d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q)) && (cat === '' || d.cat === cat));
    renderDestinations(filtered.length ? filtered : destinations);
  });

  // contact form (prototype)
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks — message saved (prototype). In production this will send to backend.');
    contactForm.reset();
  });

});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
