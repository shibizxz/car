document.addEventListener('DOMContentLoaded',()=>{
 document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===document.body.dataset.page){a.classList.add('active');a.setAttribute('aria-current','page')}});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const menu=document.querySelector('.menu-toggle');
 const drawer=document.getElementById('mobile-menu');
 function closeMenu(){if(drawer?.open)drawer.close()}
 menu?.addEventListener('click',()=>{if(!drawer)return;drawer.showModal();document.body.classList.add('menu-open');menu.setAttribute('aria-expanded','true');menu.setAttribute('aria-label','Close navigation');drawer.querySelector('.drawer-close')?.focus()});
 drawer?.querySelector('.drawer-close')?.addEventListener('click',closeMenu);
 drawer?.addEventListener('click',event=>{if(event.target===drawer){const box=drawer.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)closeMenu()}});
 drawer?.addEventListener('close',()=>{document.body.classList.remove('menu-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');menu?.focus({preventScroll:true})});
 window.matchMedia('(min-width: 901px)').addEventListener('change',event=>{if(event.matches)closeMenu()});
 document.querySelectorAll('[data-prompt]').forEach(b=>b.addEventListener('click',()=>{const field=document.getElementById('trip');field.value=b.dataset.prompt;field.focus()}));
 document.querySelector('.trip-form')?.addEventListener('submit',e=>{e.preventDefault();const message=document.getElementById('trip').value.trim();if(message)window.open('https://wa.me/919747330992?text='+encodeURIComponent('Hello Car Castle Chengannur! '+message),'_blank','noopener,noreferrer')});
 const dialog=document.createElement('dialog');dialog.className='lightbox';dialog.innerHTML='<button type="button" aria-label="Close image viewer">Close ×</button><img alt="Vehicle gallery preview">';document.body.append(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
 document.getElementById('galleryGrid')?.addEventListener('keydown',e=>{if(e.target.tagName==='IMG'&&(e.key==='Enter'||e.key===' ')){e.preventDefault();e.target.click()}});
 document.getElementById('galleryGrid')?.addEventListener('click',e=>{if(e.target.tagName==='IMG'){dialog.querySelector('img').src=e.target.src;dialog.querySelector('img').alt=e.target.alt;dialog.showModal()}});
});
// Progressive motion: content stays visible when scripting or observers are unavailable.
document.addEventListener('DOMContentLoaded',()=>{
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 const header=document.querySelector('.topbar');
 const progress=document.querySelector('.scroll-progress');
 const topButton=document.querySelector('.back-to-top');
 let ticking=false;
 function updateScroll(){
  const y=window.scrollY;
  header?.classList.toggle('scrolled',y>24);
  topButton?.classList.toggle('visible',y>650);
  const length=document.documentElement.scrollHeight-window.innerHeight;
  if(progress)progress.style.transform=`scaleX(${length>0?Math.min(1,y/length):0})`;
  ticking=false;
 }
 window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true}},{passive:true});
 updateScroll();
 topButton?.addEventListener('click',()=>{window.scrollTo({top:0,behavior:reduced.matches?'instant':'smooth'});document.querySelector('.brand')?.focus({preventScroll:true})});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelector('.nav-links')?.classList.remove('open');document.querySelector('.menu-toggle')?.setAttribute('aria-expanded','false');document.querySelector('.menu-toggle')?.setAttribute('aria-label','Open navigation')}});
 if(!reduced.matches&&'IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08});
  const mark=(node)=>{if(node.dataset.revealReady)return;node.dataset.revealReady='true';const index=Array.from(node.parentElement.children).indexOf(node);node.style.setProperty('--reveal-delay',`${Math.min(index%3,2)*80}ms`);node.classList.add('reveal-pending');observer.observe(node)};
  document.querySelectorAll('.section-top,.collection-card,.booking-intro,.booking-composer,.experience-section>div,.detail-story>div,.closing>h2,.service-card,.contact-layout>div,.contact-panel,.review-panel,.page-heading h1,.category-card').forEach(mark);
  const fleet=document.getElementById('categoryGrid');
  if(fleet){fleet.querySelectorAll('.category-card').forEach(mark);new MutationObserver(()=>fleet.querySelectorAll('.category-card').forEach(mark)).observe(fleet,{childList:true})}
  reduced.addEventListener('change',()=>{if(reduced.matches){document.querySelectorAll('.reveal-pending').forEach(el=>el.classList.add('is-visible'));observer.disconnect()}});
 }
});
