document.querySelectorAll('.size-card').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.size-card').forEach(c=>c.classList.remove('active'));
    card.classList.add('active');
  });
});
document.querySelectorAll('.mode').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.mode').forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
  });
});
document.querySelectorAll('.advisor-options button').forEach(button=>{
  button.addEventListener('click',()=>{
    document.getElementById('advisorResult').textContent =
      `Als erste Orientierung empfehlen wir ${button.dataset.advice}. Im finalen Buchungssystem werden konkrete Räume und Verfügbarkeiten angezeigt.`;
  });
});

// V4 premium interaction layer
const nav = document.querySelector('.nav');
const progress = document.querySelector('.scroll-progress i');
const heroBg = document.querySelector('.hero-bg');

function onScroll(){
  const y = window.scrollY || 0;
  nav?.classList.toggle('compact', y > 24);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if(progress) progress.style.width = `${max > 0 ? Math.min(100, y / max * 100) : 0}%`;
  if(heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    heroBg.style.transform = `scale(1.045) translateY(${Math.min(26, y * .035)}px)`;
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

document.querySelectorAll('section, .quick, .promise-grid, .size-grid, .space-advisor').forEach((el,i)=>{
  el.classList.add('reveal');
  if(i % 4) el.classList.add(`reveal-delay-${Math.min(3,i%4)}`);
});
const io = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -50px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

document.querySelectorAll('.size-card').forEach(card=>{
  card.addEventListener('pointermove',e=>{
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx',`${((e.clientX-r.left)/r.width)*100}%`);
    card.style.setProperty('--my',`${((e.clientY-r.top)/r.height)*100}%`);
  });
});


// V7 responsive hamburger navigation
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const mainNav = document.getElementById('mainNav');

function closeMenu(){
  siteNav?.classList.remove('menu-open');
  menuToggle?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded','false');
  menuToggle?.setAttribute('aria-label','Menü öffnen');
}

menuToggle?.addEventListener('click',()=>{
  const open = !siteNav.classList.contains('menu-open');
  siteNav.classList.toggle('menu-open',open);
  menuToggle.classList.toggle('is-open',open);
  menuToggle.setAttribute('aria-expanded',String(open));
  menuToggle.setAttribute('aria-label',open ? 'Menü schließen' : 'Menü öffnen');
});

mainNav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
window.addEventListener('resize',()=>{ if(window.innerWidth>980) closeMenu(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeMenu(); });
document.addEventListener('click',e=>{
  if(siteNav?.classList.contains('menu-open') && !siteNav.contains(e.target)) closeMenu();
});
