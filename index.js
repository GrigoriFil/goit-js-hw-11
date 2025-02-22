import{a as m,S as f,i}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p="49000091-3868361750e1c7c48df9380e6",y="https://pixabay.com/api/";async function g(o){if(!o.trim())throw new Error("Search query is empty!");const t={key:p,q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:!0};console.log("Fetching images with params:",t);try{const r=await m.get(y,{params:t});return console.log("API Response:",r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r.response&&console.error("Response data:",r.response.data),r}}function h(o){const t=document.querySelector(".gallery");t.innerHTML="";const r=o.map(({webformatURL:a,largeImageURL:e,tags:s,likes:n,views:l,comments:d,downloads:u})=>`
        <div class="image-item">
            <a href="${e}" class="gallery-item">
                <img src="${a}" alt="${s}" />
            </a>
            <div class="metadata">
                <span>Likes: ${n}</span>
                <span>Views: ${l}</span>
                <span>Comments: ${d}</span>
                <span>Downloads: ${u}</span>
            </div>
        </div>
    `).join("");t.insertAdjacentHTML("beforeend",r),new f(".gallery a").refresh()}function L(o){const t=document.querySelector(".error-message");t.textContent=o,t.style.display="block"}function S(){const o=document.querySelector("#loader");o.style.display="block"}function c(){const o=document.querySelector("#loader");o.style.display="none"}const q=document.querySelector("#search-form"),w=document.querySelector("#search"),E=document.querySelector("#error-message");q.addEventListener("submit",async o=>{o.preventDefault();const t=w.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query!"});return}S(),E.style.display="none";try{const r=await g(t);c(),r.length===0?L("Sorry, there are no images matching your search query. Please try again!"):h(r)}catch(r){c(),console.error("Error fetching images:",r),i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}});
//# sourceMappingURL=index.js.map
