document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view')}),{threshold:.12});
document.querySelectorAll('.work-card,.demo-card,.timeline-item,.section-intro').forEach(el=>{el.style.transition='opacity .7s ease, transform .7s ease';el.style.opacity='0';el.style.transform='translateY(18px)';observer.observe(el)});
document.addEventListener('DOMContentLoaded',()=>document.querySelectorAll('.in-view').forEach(el=>{el.style.opacity='1';el.style.transform='none'}));
observer.takeRecords;
setInterval(()=>document.querySelectorAll('.in-view').forEach(el=>{el.style.opacity='1';el.style.transform='none'}),120);
const heatmap=document.querySelector('.heatmap'); if(heatmap){for(let i=0;i<182;i++){const cell=document.createElement('i'); heatmap.appendChild(cell)}}
