import{a as y,S as f,i}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p="49000091-3868361750e1c7c48df9380e6",g="https://pixabay.com/api/";async function h(o){if(!o.trim())throw new Error("Search query is empty!");const t={key:p,q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:!0};console.log("Fetching images with params:",t);try{const r=await y.get(g,{params:t});return console.log("API Response:",r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r.response&&console.error("Response data:",r.response.data),r}}function q(o){const t=document.querySelector(".gallery");t.innerHTML="";const r=o.map(({webformatURL:n,largeImageURL:e,tags:s,likes:a,views:u,comments:d,downloads:m})=>`
        <div class="image-item">
            <a href="${e}" class="gallery-item">
                <img src="${n}" alt="${s}" />
            </a>
            <div class="metadata">
                <span>Likes: ${a}</span>
                <span>Views: ${u}</span>
                <span>Comments: ${d}</span>
                <span>Downloads: ${m}</span>
            </div>
        </div>
    `).join("");t.insertAdjacentHTML("beforeend",r),new f(".gallery a").refresh()}function c(o){const t=document.querySelector(".error-message");t.textContent=o,t.style.display="block"}function L(){const o=document.querySelector("#loader");o.style.display="block"}function l(){const o=document.querySelector("#loader");o.style.display="none"}const S=document.querySelector("#search-form"),w=document.querySelector("#search"),E=document.querySelector(".gallery"),P=document.querySelector("#error-message");S.addEventListener("submit",async o=>{o.preventDefault();const t=w.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query!"});return}E.innerHTML="",P.style.display="none",L();try{const r=await h(t);l(),r.length===0?c("Sorry, there are no images matching your search query. Please try again!"):q(r)}catch(r){l(),console.error("Error fetching images:",r),c("Failed to fetch images. Please check your request or try again later."),i.error({title:"Error",message:"Failed to fetch images. Please try again later."})}});
//# sourceMappingURL=index.js.map
