(function(){
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const main=document.querySelector('main');
if(!main||reduce)return;
main.classList.add('page-fade-enter');
const selectors=['.rc-section-head','.rc-product-card','.rc-about-copy','.rc-review-card','.rc-tech-grid','.rc-lab-card','.rc-shop-product','.rca-statement','.rca-copy','.rca-value-grid article','.rca-closing-copy','.rc-lab-item','.rc-detail-layout','.rc-detail-info','.rc-qna-head','.rc-contact-section-head'];
const nodes=[...main.querySelectorAll(selectors.join(','))].filter(el=>!el.closest('.rc-review-scroll'));
if(!('IntersectionObserver' in window))return;
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px 60px 0px'});
nodes.forEach((el,i)=>{el.classList.add('motion-reveal');if(i%3===1)el.classList.add('motion-delay-1');if(i%3===2)el.classList.add('motion-delay-2');observer.observe(el)});
document.documentElement.classList.add('motion-ready');
})();
