import{q as g,C as P,D as T,z as O,y as k,r as F,E as H,F as q}from"./index-6c9420c4.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */var B;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(B||(B={}));const U={getEngine(){var e;return((e=g===null||g===void 0?void 0:g.Capacitor)===null||e===void 0?void 0:e.isPluginAvailable("Keyboard"))&&(g===null||g===void 0?void 0:g.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return!e||!e.getResizeMode?Promise.resolve(void 0):e.getResizeMode()}},L=new WeakMap,A=(e,o,t,s=0,i=!1)=>{L.has(e)!==t&&(t?$(e,o,s,i):z(e,o))},Y=e=>e===e.getRootNode().activeElement,$=(e,o,t,s=!1)=>{const i=o.parentNode,a=o.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,s&&(a.disabled=!0),i.appendChild(a),L.set(e,a);const n=e.ownerDocument.dir==="rtl"?9999:-9999;e.style.pointerEvents="none",o.style.transform=`translate3d(${n}px,${t}px,0) scale(0)`},z=(e,o)=>{const t=L.get(e);t&&(L.delete(e),t.remove()),e.style.pointerEvents="",o.style.transform=""},K=50,G=(e,o,t)=>{if(!t||!o)return()=>{};const s=n=>{Y(o)&&A(e,o,n)},i=()=>A(e,o,!1),a=()=>s(!0),d=()=>s(!1);return P(t,"ionScrollStart",a),P(t,"ionScrollEnd",d),o.addEventListener("blur",i),()=>{T(t,"ionScrollStart",a),T(t,"ionScrollEnd",d),o.removeEventListener("blur",i)}},I="input, textarea, [no-blur], [contenteditable]",W=()=>{let e=!0,o=!1;const t=document,s=()=>{o=!0},i=()=>{e=!0},a=d=>{if(o){o=!1;return}const n=t.activeElement;if(!n||n.matches(I))return;const c=d.target;c!==n&&(c.matches(I)||c.closest(I)||(e=!1,setTimeout(()=>{e||n.blur()},50)))};return P(t,"ionScrollStart",s),t.addEventListener("focusin",i,!0),t.addEventListener("touchend",a,!1),()=>{T(t,"ionScrollStart",s,!0),t.removeEventListener("focusin",i,!0),t.removeEventListener("touchend",a,!1)}},j=.3,V=(e,o,t)=>{var s;const i=(s=e.closest("ion-item,[ion-item]"))!==null&&s!==void 0?s:e;return J(i.getBoundingClientRect(),o.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)},J=(e,o,t,s)=>{const i=e.top,a=e.bottom,d=o.top,n=Math.min(o.bottom,s-t),c=d+15,f=n-K-a,u=c-i,v=Math.round(f<0?-f:u>0?-u:0),b=Math.min(v,i-d),D=Math.abs(b)/j,r=Math.min(400,Math.max(150,D));return{scrollAmount:b,scrollDuration:r,scrollPadding:t,inputSafeY:-(i-c)+4}},_="$ionPaddingTimer",p=(e,o,t)=>{const s=e[_];s&&clearTimeout(s),o>0?e.style.setProperty("--keyboard-offset",`${o}px`):e[_]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),t&&t()},120)},x=(e,o,t)=>{const s=()=>{o&&p(o,0,t)};e.addEventListener("focusout",s,{once:!0})};let h=0;const N="data-ionic-skip-scroll-assist",Q=(e,o,t,s,i,a,d,n=!1)=>{const c=a&&(d===void 0||d.mode===B.None),l=async()=>{if(o.hasAttribute(N)){o.removeAttribute(N);return}X(e,o,t,s,i,c,n)};return e.addEventListener("focusin",l,!0),()=>{e.removeEventListener("focusin",l,!0)}},M=e=>{document.activeElement!==e&&(e.setAttribute(N,"true"),e.focus())},X=async(e,o,t,s,i,a,d=!1)=>{if(!t&&!s)return;const n=V(e,t||s,i);if(t&&Math.abs(n.scrollAmount)<4){M(o),a&&t!==null&&(p(t,h),x(o,t,()=>h=0));return}if(A(e,o,!0,n.inputSafeY,d),M(o),F(()=>e.click()),a&&t&&(h=n.scrollPadding,p(t,h)),typeof window<"u"){let c;const l=async()=>{c!==void 0&&clearTimeout(c),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",l),t&&await q(t,0,n.scrollAmount,n.scrollDuration),A(e,o,!1,n.inputSafeY),M(o),a&&x(o,t,()=>h=0)},f=()=>{window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",l)};if(t){const u=await H(t),v=u.scrollHeight-u.clientHeight;if(n.scrollAmount>v-u.scrollTop){o.type==="password"?(n.scrollAmount+=K,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",l),c=setTimeout(l,1e3);return}}l()}},Z=!0,te=async(e,o)=>{const t=document,s=o==="ios",i=o==="android",a=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),n=e.getBoolean("hideCaretOnScroll",s),c=e.getBoolean("inputBlurring",s),l=e.getBoolean("scrollPadding",!0),f=Array.from(t.querySelectorAll("ion-input, ion-textarea")),u=new WeakMap,v=new WeakMap,b=await U.getResizeMode(),C=async r=>{await new Promise(w=>O(r,w));const S=r.shadowRoot||r,y=S.querySelector("input")||S.querySelector("textarea"),m=k(r),R=m?null:r.closest("ion-footer");if(!y)return;if(m&&n&&!u.has(r)){const w=G(r,y,m);u.set(r,w)}if(!(y.type==="date"||y.type==="datetime-local")&&(m||R)&&d&&!v.has(r)){const w=Q(r,y,m,R,a,l,b,i);v.set(r,w)}},D=r=>{if(n){const S=u.get(r);S&&S(),u.delete(r)}if(d){const S=v.get(r);S&&S(),v.delete(r)}};c&&Z&&W();for(const r of f)C(r);t.addEventListener("ionInputDidLoad",r=>{C(r.detail)}),t.addEventListener("ionInputDidUnload",r=>{D(r.detail)})};export{te as startInputShims};
