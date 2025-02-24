import{a as f,S as p,i}from"./assets/vendor-tnUJPedx.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const g="49000091-3868361750e1c7c48df9380e6",h="https://pixabay.com/api/";async function q(t){if(!t.trim())throw new Error("Search query is empty!");const r={key:g,q:encodeURIComponent(t),image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await f.get(h,{params:r})).data.hits}catch(s){throw s}}let c;function L(t){const r=document.querySelector(".gallery");r.innerHTML="";const s=t.map(({webformatURL:n,largeImageURL:e,tags:o,likes:a,views:d,comments:m,downloads:y})=>`
        <div class="image-item">
            <a href="${e}" class="gallery-item">
                <img src="${n}" alt="${o}" />
            </a>
            <div class="metadata">
                <span>Likes: ${a}</span>
                <span>Views: ${d}</span>
                <span>Comments: ${m}</span>
                <span>Downloads: ${y}</span>
            </div>
        </div>
    `).join("");r.insertAdjacentHTML("beforeend",s),c||(c=new p(".gallery a")),c.refresh()}function l(t){const r=document.querySelector(".error-message");r.textContent=t,r.style.display="block"}function S(){const t=document.querySelector("#loader");t.style.display="block"}function u(){const t=document.querySelector("#loader");t.style.display="none"}const w=document.querySelector("#search-form"),b=document.querySelector("#search"),E=document.querySelector(".gallery"),v=document.querySelector("#error-message");w.addEventListener("submit",async t=>{t.preventDefault();const r=b.value.trim();if(!r){i.error({title:"Error",message:"Please enter a search query!"});return}E.innerHTML="",v.style.display="none",S();try{const s=await q(r);u(),s.length===0?(l("Sorry, there are no images matching your search query. Please try again!"),i.error({title:"Error",message:"No images found for your query!"})):L(s)}catch(s){u(),console.error("Error fetching images:",s),l("Failed to fetch images. Please check your request or try again later."),i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}});
//# sourceMappingURL=index.js.map
