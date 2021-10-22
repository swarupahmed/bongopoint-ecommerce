function re(){}function Vr(t,e){for(const n in e)t[n]=e[n];return t}function vn(t){return t()}function _n(){return Object.create(null)}function Ie(t){t.forEach(vn)}function jr(t){return typeof t=="function"}function zr(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ve;function rl(t,e){return Ve||(Ve=document.createElement("a")),Ve.href=e,t===Ve.href}function Hr(t){return Object.keys(t).length===0}function Gr(t,...e){if(t==null)return re;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function il(t,e,n){t.$$.on_destroy.push(Gr(e,n))}function sl(t,e,n,r){if(t){const i=In(t,e,n,r);return t[0](i)}}function In(t,e,n,r){return t[1]&&r?Vr(n.ctx.slice(),t[1](r(e))):n.ctx}function ol(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function al(t,e,n,r,i,s){if(i){const o=In(e,n,r,s);t.p(o,i)}}function cl(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ll(t,e,n){return t.set(n),e}let je=!1;function qr(){je=!0}function Kr(){je=!1}function Jr(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function Yr(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(i>0&&e[n[i]].claim_order<=c?i+1:Jr(1,i,d=>e[n[d]].claim_order,c))-1;r[l]=n[u]+1;const f=u+1;n[f]=l,i=Math.max(f,i)}const s=[],o=[];let a=e.length-1;for(let l=n[i]+1;l!=0;l=r[l-1]){for(s.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const u=c<s.length?s[c]:null;t.insertBefore(o[l],u)}}function Qr(t,e){if(je){for(Yr(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ul(t,e,n){je&&!n?Qr(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Xr(t){t.parentNode.removeChild(t)}function fl(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Zr(t){return document.createElement(t)}function _t(t){return document.createTextNode(t)}function dl(){return _t(" ")}function hl(){return _t("")}function pl(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function yl(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ei(t){return Array.from(t.childNodes)}function ti(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function wn(t,e,n,r,i=!1){ti(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,i||(t.claim_info.last_index=o),a}}for(let o=t.claim_info.last_index-1;o>=0;o--){const a=t[o];if(e(a)){const l=n(a);return l===void 0?t.splice(o,1):t[o]=l,i?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,a}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function ni(t,e,n,r){return wn(t,i=>i.nodeName===e,i=>{const s=[];for(let o=0;o<i.attributes.length;o++){const a=i.attributes[o];n[a.name]||s.push(a.name)}s.forEach(o=>i.removeAttribute(o))},()=>r(e))}function ml(t,e,n){return ni(t,e,n,Zr)}function ri(t,e){return wn(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>_t(e),!0)}function gl(t){return ri(t," ")}function vl(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _l(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function Il(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e){r.selected=!0;return}}t.selectedIndex=-1}function wl(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let ze;function He(t){ze=t}function It(){if(!ze)throw new Error("Function called outside component initialization");return ze}function bl(t){It().$$.on_mount.push(t)}function Sl(t){It().$$.after_update.push(t)}function El(t,e){It().$$.context.set(t,e)}const we=[],bn=[],Ge=[],wt=[],ii=Promise.resolve();let bt=!1;function si(){bt||(bt=!0,ii.then(Sn))}function St(t){Ge.push(t)}function Tl(t){wt.push(t)}let Et=!1;const Tt=new Set;function Sn(){if(!Et){Et=!0;do{for(let t=0;t<we.length;t+=1){const e=we[t];He(e),oi(e.$$)}for(He(null),we.length=0;bn.length;)bn.pop()();for(let t=0;t<Ge.length;t+=1){const e=Ge[t];Tt.has(e)||(Tt.add(e),e())}Ge.length=0}while(we.length);for(;wt.length;)wt.pop()();bt=!1,Et=!1,Tt.clear()}}function oi(t){if(t.fragment!==null){t.update(),Ie(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(St)}}const qe=new Set;let K;function Ol(){K={r:0,c:[],p:K}}function Al(){K.r||Ie(K.c),K=K.p}function ai(t,e){t&&t.i&&(qe.delete(t),t.i(e))}function Rl(t,e,n,r){if(t&&t.o){if(qe.has(t))return;qe.add(t),K.c.push(()=>{qe.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function kl(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const l in o)l in a||(r[l]=1);for(const l in a)i[l]||(n[l]=a[l],i[l]=1);t[s]=a}else for(const l in o)i[l]=1}for(const o in r)o in n||(n[o]=void 0);return n}function Pl(t){return typeof t=="object"&&t!==null?t:{}}function Cl(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Nl(t){t&&t.c()}function Dl(t,e){t&&t.l(e)}function ci(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),r||St(()=>{const l=s.map(vn).filter(jr);o?o.push(...l):Ie(l),t.$$.on_mount=[]}),a.forEach(St)}function li(t,e){const n=t.$$;n.fragment!==null&&(Ie(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ui(t,e){t.$$.dirty[0]===-1&&(we.push(t),si(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ml(t,e,n,r,i,s,o,a=[-1]){const l=ze;He(t);const c=t.$$={fragment:null,ctx:null,props:s,update:re,not_equal:i,bound:_n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:_n(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...p)=>{const y=p.length?p[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=y)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](y),u&&ui(t,f)),d}):[],c.update(),u=!0,Ie(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){qr();const f=ei(e.target);c.fragment&&c.fragment.l(f),f.forEach(Xr)}else c.fragment&&c.fragment.c();e.intro&&ai(t.$$.fragment),ci(t,e.target,e.anchor,e.customElement),Kr(),Sn()}He(l)}class Ll{$destroy(){li(this,1),this.$destroy=re}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Hr(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ie=[];function Ul(t,e=re){let n;const r=new Set;function i(a){if(zr(t,a)&&(t=a,n)){const l=!ie.length;for(const c of r)c[1](),ie.push(c,t);if(l){for(let c=0;c<ie.length;c+=2)ie[c][0](ie[c+1]);ie.length=0}}}function s(a){i(a(t))}function o(a,l=re){const c=[a,l];return r.add(c),r.size===1&&(n=e(i)||re),a(t),()=>{r.delete(c),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}var fi={};(function(t){t.defaults={},t.set=function(e,n,r){var i=r||{},s=t.defaults,o=i.expires||s.expires,a=i.domain||s.domain,l=i.path!==void 0?i.path:s.path!==void 0?s.path:"/",c=i.secure!==void 0?i.secure:s.secure,u=i.httponly!==void 0?i.httponly:s.httponly,f=i.samesite!==void 0?i.samesite:s.samesite,d=o?new Date(typeof o=="number"?new Date().getTime()+o*864e5:o):0;document.cookie=e.replace(/[^+#$&^`|]/g,encodeURIComponent).replace("(","%28").replace(")","%29")+"="+n.replace(/[^+#$&/:<-\[\]-}]/g,encodeURIComponent)+(d&&d.getTime()>=0?";expires="+d.toUTCString():"")+(a?";domain="+a:"")+(l?";path="+l:"")+(c?";secure":"")+(u?";httponly":"")+(f?";samesite="+f:"")},t.get=function(e){for(var n=document.cookie.split(";");n.length;){var r=n.pop(),i=r.indexOf("=");i=i<0?r.length:i;var s=decodeURIComponent(r.slice(0,i).replace(/^\s+/,""));if(s===e)return decodeURIComponent(r.slice(i+1))}return null},t.erase=function(e,n){t.set(e,"",{expires:-1,domain:n&&n.domain,path:n&&n.path,secure:0,httponly:0})},t.all=function(){for(var e={},n=document.cookie.split(";");n.length;){var r=n.pop(),i=r.indexOf("=");i=i<0?r.length:i;var s=decodeURIComponent(r.slice(0,i).replace(/^\s+/,""));e[s]=decodeURIComponent(r.slice(i+1))}return e}})(fi);function xl(t,e,n){const r=e.getValue(n);return r!==null&&t.set(r),e.addListener&&e.addListener(n,i=>{t.set(i)}),t.subscribe(i=>{e.setValue(n,i)}),Object.assign(Object.assign({},t),{delete(){e.deleteValue(n)}})}function di(t,e=!1){const n=[],r=o=>{const a=o.key;o.storageArea===t&&n.filter(({key:l})=>l===a).forEach(({listener:l})=>{let c=o.newValue;try{c=JSON.parse(o.newValue)}catch{}l(c)})},i=()=>{e&&typeof window!="undefined"&&(window==null?void 0:window.addEventListener)&&window.addEventListener("storage",r)},s=()=>{e&&typeof window!="undefined"&&(window==null?void 0:window.removeEventListener)&&window.removeEventListener("storage",r)};return{addListener(o,a){n.push({key:o,listener:a}),n.length===1&&i()},removeListener(o,a){const l=n.indexOf({key:o,listener:a});l!==-1&&n.splice(l,1),n.length===0&&s()},getValue(o){let a=t.getItem(o);if(a!=null)try{a=JSON.parse(a)}catch{}return a},deleteValue(o){t.removeItem(o)},setValue(o,a){t.setItem(o,JSON.stringify(a))}}}function Fl(t=!1){return typeof window!="undefined"&&(window==null?void 0:window.localStorage)?di(window.localStorage,t):(console.warn("Unable to find the localStorage. No data will be persisted."),hi())}function hi(){return{getValue(){return null},deleteValue(){},setValue(){}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yi=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),r.push(n[u],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw Error();const d=s<<2|a>>4;if(r.push(d),c!==64){const p=a<<4&240|c>>2;if(r.push(p),f!==64){const y=c<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},gi=function(t){try{return mi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _i(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(w())}function Ii(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bi(){const t=w();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="FirebaseError";class se extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Si,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,be.prototype.create)}}class be{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ei(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new se(i,a,r)}}function Ei(t,e){return t.replace(Ti,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ti=/\{\$([^}]+)}/g;function Oi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ke(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(En(s)&&En(o)){if(!Ke(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function En(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ee(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Te(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ai(t,e){const n=new Ri(t,e);return n.subscribe.bind(n)}class Ri{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ki(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ot),i.error===void 0&&(i.error=Ot),i.complete===void 0&&(i.complete=Ot);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ki(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ot(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return t&&t._delegate?t._delegate:t}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function At(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Pi(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(u){try{c(r.next(u))}catch(f){o(f)}}function l(u){try{c(r.throw(u))}catch(f){o(f)}}function c(u){u.done?s(u.value):i(u.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function Ci(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=c[0]&2?i.return:c[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,c[1])).done)return s;switch(i=0,s&&(c=[c[0]&2,s.value]),c[0]){case 0:case 1:s=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!s||c[1]>s[0]&&c[1]<s[3])){n.label=c[1];break}if(c[0]===6&&n.label<s[1]){n.label=s[1],s=c;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(c);break}s[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=s=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Rt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Je(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),i,s=[],o;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)s.push(i.value)}catch(a){o={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return s}function Tn(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Oe=function(){function t(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},t.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},t.prototype.setServiceProps=function(e){return this.serviceProps=e,this},t.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},t}();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ni=function(){function t(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(e){var n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){var r=new vi;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise},t.prototype.getImmediate=function(e){var n,r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error("Service "+this.name+" is not available")}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(e){var n,r;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,!!this.shouldAutoInitialize()){if(Mi(e))try{this.getOrInitializeService({instanceIdentifier:J})}catch{}try{for(var i=Rt(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Je(s.value,2),a=o[0],l=o[1],c=this.normalizeInstanceIdentifier(a);try{var u=this.getOrInitializeService({instanceIdentifier:c});l.resolve(u)}catch{}}}catch(f){n={error:f}}finally{try{s&&!s.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}},t.prototype.clearInstance=function(e){e===void 0&&(e=J),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},t.prototype.delete=function(){return Pi(this,void 0,void 0,function(){var e;return Ci(this,function(n){switch(n.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Tn(Tn([],Je(e.filter(function(r){return"INTERNAL"in r}).map(function(r){return r.INTERNAL.delete()}))),Je(e.filter(function(r){return"_delete"in r}).map(function(r){return r._delete()}))))];case 1:return n.sent(),[2]}})})},t.prototype.isComponentSet=function(){return this.component!=null},t.prototype.isInitialized=function(e){return e===void 0&&(e=J),this.instances.has(e)},t.prototype.getOptions=function(e){return e===void 0&&(e=J),this.instancesOptions.get(e)||{}},t.prototype.initialize=function(e){var n,r;e===void 0&&(e={});var i=e.options,s=i===void 0?{}:i,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var l=Rt(this.instancesDeferred.entries()),c=l.next();!c.done;c=l.next()){var u=Je(c.value,2),f=u[0],d=u[1],p=this.normalizeInstanceIdentifier(f);o===p&&d.resolve(a)}}catch(y){n={error:y}}finally{try{c&&!c.done&&(r=l.return)&&r.call(l)}finally{if(n)throw n.error}}return a},t.prototype.onInit=function(e,n){var r,i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);var o=this.instances.get(i);return o&&e(o,i),function(){s.delete(e)}},t.prototype.invokeOnInitCallbacks=function(e,n){var r,i,s=this.onInitCallbacks.get(n);if(!!s)try{for(var o=Rt(s),a=o.next();!a.done;a=o.next()){var l=a.value;try{l(e,n)}catch{}}}catch(c){r={error:c}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}},t.prototype.getOrInitializeService=function(e){var n=e.instanceIdentifier,r=e.options,i=r===void 0?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Di(n),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch{}return s||null},t.prototype.normalizeInstanceIdentifier=function(e){return e===void 0&&(e=J),this.component?this.component.multipleInstances?e:J:e},t.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},t}();function Di(t){return t===J?void 0:t}function Mi(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li=function(){function t(e){this.name=e,this.providers=new Map}return t.prototype.addComponent=function(e){var n=this.getProvider(e.name);if(n.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);n.setComponent(e)},t.prototype.addOrOverwriteComponent=function(e){var n=this.getProvider(e.name);n.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},t.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var n=new Ni(e,this);return this.providers.set(e,n),n},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(v||(v={}));const Ui={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},xi=v.INFO,Fi={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},$i=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Fi[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class On{constructor(e){this.name=e,this._logLevel=xi,this._logHandler=$i,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in v))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ui[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...e),this._logHandler(this,v.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...e),this._logHandler(this,v.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,v.INFO,...e),this._logHandler(this,v.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,v.WARN,...e),this._logHandler(this,v.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...e),this._logHandler(this,v.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wi(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wi(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kt="@firebase/app",An="0.7.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new On("@firebase/app"),Vi="@firebase/app-compat",ji="@firebase/analytics-compat",zi="@firebase/analytics",Hi="@firebase/app-check-compat",Gi="@firebase/app-check",qi="@firebase/auth",Ki="@firebase/auth-compat",Ji="@firebase/database",Yi="@firebase/database-compat",Qi="@firebase/functions",Xi="@firebase/functions-compat",Zi="@firebase/installations",es="@firebase/installations-compat",ts="@firebase/messaging",ns="@firebase/messaging-compat",rs="@firebase/performance",is="@firebase/performance-compat",ss="@firebase/remote-config",os="@firebase/remote-config-compat",as="@firebase/storage",cs="@firebase/storage-compat",ls="@firebase/firestore",us="@firebase/firestore-compat",fs="firebase",ds="9.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn="[DEFAULT]",hs={[kt]:"fire-core",[Vi]:"fire-core-compat",[zi]:"fire-analytics",[ji]:"fire-analytics-compat",[Gi]:"fire-app-check",[Hi]:"fire-app-check-compat",[qi]:"fire-auth",[Ki]:"fire-auth-compat",[Ji]:"fire-rtdb",[Yi]:"fire-rtdb-compat",[Qi]:"fire-fn",[Xi]:"fire-fn-compat",[Zi]:"fire-iid",[es]:"fire-iid-compat",[ts]:"fire-fcm",[ns]:"fire-fcm-compat",[rs]:"fire-perf",[is]:"fire-perf-compat",[ss]:"fire-rc",[os]:"fire-rc-compat",[as]:"fire-gcs",[cs]:"fire-gcs-compat",[ls]:"fire-fst",[us]:"fire-fst-compat","fire-js":"fire-js",[fs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new Map,Ct=new Map;function ps(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qe(t){const e=t.name;if(Ct.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;Ct.set(e,t);for(const n of Ye.values())ps(n,t);return!0}function kn(t,e){return t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},Xe=new be("app","Firebase",ys);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=ds;function $l(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:Rn,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Xe.create("bad-app-name",{appName:String(r)});const i=Ye.get(r);if(i){if(Ke(t,i.options)&&Ke(n,i.config))return i;throw Xe.create("duplicate-app",{appName:r})}const s=new Li(r);for(const a of Ct.values())s.addComponent(a);const o=new ms(t,n,s);return Ye.set(r,o),o}function gs(t=Rn){const e=Ye.get(t);if(!e)throw Xe.create("no-app",{appName:t});return e}function oe(t,e,n){var r;let i=(r=hs[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(a.join(" "));return}Qe(new Oe(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){Qe(new Oe("platform-logger",e=>new Bi(e),"PRIVATE")),oe(kt,An,t),oe(kt,An,"esm2017"),oe("fire-js","")}vs("");function Pn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _s=Pn,Cn=new be("auth","Firebase",Pn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new On("@firebase/auth");function et(t,...e){Nn.logLevel<=v.ERROR&&Nn.error(`Auth (${Ze}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,...e){throw Nt(t,...e)}function R(t,...e){return Nt(t,...e)}function Is(t,e,n){const r=Object.assign(Object.assign({},_s()),{[e]:n});return new be("auth","Firebase",r).create(e,{appName:t.name})}function Nt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Cn.create(t,...e)}function h(t,e,...n){if(!t)throw Nt(e,...n)}function L(t){const e="INTERNAL ASSERTION FAILED: "+t;throw et(e),new Error(e)}function U(t,e){t||L(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Map;function x(t){U(t instanceof Function,"Expected a class definition");let e=Dn.get(t);return e?(U(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Dn.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e){const n=kn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ke(s,e!=null?e:{}))return i;A(i,"already-initialized")}return n.initialize({options:e})}function bs(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(x);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ss(){return Mn()==="http:"||Mn()==="https:"}function Mn(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ss()||Ii()||"connection"in navigator)?navigator.onLine:!0}function Ts(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.shortDelay=e,this.longDelay=n,U(n>e,"Short delay should be less than long delay!"),this.isMobile=_i()||wi()}get(){return Es()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,e){U(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new Ae(3e4,6e4);function Re(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ae(t,e,n,r,i={}){return Ln(t,i,()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Se(Object.assign({key:t.config.apiKey},o)).slice(1),l=new(Lt.headers());return l.set("Content-Type","application/json"),l.set("X-Client-Version",t._getSdkClientVersion()),t.languageCode&&l.set("X-Firebase-Locale",t.languageCode),Lt.fetch()(Un(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ln(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Os),e);try{const i=new Rs(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ut(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ut(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ut(t,"email-already-in-use",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Is(t,u,c);A(t,u)}}catch(i){if(i instanceof se)throw i;A(t,"network-request-failed")}}async function ke(t,e,n,r,i={}){const s=await ae(t,e,n,r,i);return"mfaPendingCredential"in s&&A(t,"multi-factor-auth-required",{serverResponse:s}),s}function Un(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mt(t.config,i):`${t.config.apiScheme}://${i}`}class Rs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(R(this.auth,"timeout")),As.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ut(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=R(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return ae(t,"POST","/v1/accounts:delete",e)}async function Ps(t,e){return ae(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cs(t,e=!1){const n=$(t),r=await n.getIdToken(e),i=Ft(r);h(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pe(xt(i.auth_time)),issuedAtTime:Pe(xt(i.iat)),expirationTime:Pe(xt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xt(t){return Number(t)*1e3}function Ft(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return et("JWT malformed, contained fewer than 3 sections"),null;try{const i=gi(n);return i?JSON.parse(i):(et("Failed to decode base64 JWT payload"),null)}catch(i){return et("Caught error parsing JWT payload as JSON",i),null}}function Ns(t){const e=Ft(t);return h(e,"internal-error"),h(typeof e.exp!="undefined","internal-error"),h(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof se&&Ds(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ds({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pe(this.lastLoginAt),this.creationTime=Pe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ce(t,Ps(n,{idToken:r}));h(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?xs(s.providerUserInfo):[],a=Us(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xn(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Ls(t){const e=$(t);await tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Us(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function xs(t){return t.map(e=>{var{providerId:n}=e,r=At(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fs(t,e){const n=await Ln(t,{},()=>{const r=Se({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Un(t,i,"/v1/token",`key=${s}`);return Lt.fetch()(o,{method:"POST",headers:{"X-Client-Version":t._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){h(e.idToken,"internal-error"),h(typeof e.idToken!="undefined","internal-error"),h(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Ns(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return h(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Fs(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ce;return r&&(h(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(h(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(h(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ce,this.toJSON())}_performRefresh(){return L("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e){h(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Y{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=At(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ms(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new xn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ce(this,this.stsTokenManager.getToken(this.auth,e));return h(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cs(this,e)}reload(){return Ls(this)}_assign(e){this!==e&&(h(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Y(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){h(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ce(this,ks(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,q=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:N,isAnonymous:D,providerData:E,stsTokenManager:F}=n;h(T&&F,e,"internal-error");const _e=Ce.fromJSON(this.name,F);h(typeof T=="string",e,"internal-error"),B(f,e.name),B(d,e.name),h(typeof N=="boolean",e,"internal-error"),h(typeof D=="boolean",e,"internal-error"),B(p,e.name),B(y,e.name),B(I,e.name),B(g,e.name),B(q,e.name),B(C,e.name);const M=new Y({uid:T,auth:e,email:d,emailVerified:N,displayName:f,isAnonymous:D,photoURL:y,phoneNumber:p,tenantId:I,stsTokenManager:_e,createdAt:q,lastLoginAt:C});return E&&Array.isArray(E)&&(M.providerData=E.map(O=>Object.assign({},O))),g&&(M._redirectEventId=g),M}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ce;i.updateFromServerResponse(n);const s=new Y({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tt(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fn.type="NONE";const $n=Fn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e,n){return`firebase:${t}:${e}:${n}`}class le{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=nt(this.userKey,i.apiKey,s),this.fullPersistenceKey=nt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Y._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new le(x($n),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||x($n);const o=nt(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Y._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new le(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new le(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jn(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wn(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hn(e))return"Blackberry";if(Gn(e))return"Webos";if($t(e))return"Safari";if((e.includes("chrome/")||Vn(e))&&!e.includes("edge/"))return"Chrome";if(zn(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wn(t=w()){return/firefox\//i.test(t)}function $t(t=w()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vn(t=w()){return/crios\//i.test(t)}function jn(t=w()){return/iemobile/i.test(t)}function zn(t=w()){return/android/i.test(t)}function Hn(t=w()){return/blackberry/i.test(t)}function Gn(t=w()){return/webos/i.test(t)}function rt(t=w()){return/iphone|ipad|ipod/i.test(t)}function $s(t=w()){var e;return rt(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function Bs(){return bi()&&document.documentMode===10}function qn(t=w()){return rt(t)||zn(t)||Gn(t)||Hn(t)||/windows phone/i.test(t)||jn(t)}function Ws(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e=[]){let n;switch(t){case"Browser":n=Bn(w());break;case"Worker":n=`${Bn(w())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ze}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jn(this),this.idTokenSubscription=new Jn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=x(n)),this._initializationPromise=this.queue(async()=>{var r;this._deleted||(this.persistenceManager=await le.create(this,e),!this._deleted&&(((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(n),!this._deleted&&(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(h(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tt(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ts()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$(e):null;return n&&h(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&h(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(x(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new be("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&x(e)||this._popupRedirectResolver;h(n,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[x(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return h(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return h(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function it(t){return $(t)}class Jn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ai(n=>this.observer=n)}get next(){return h(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return L("not implemented")}_getIdTokenResponse(e){return L("not implemented")}_linkToIdToken(e,n){return L("not implemented")}_getReauthenticationResolver(e){return L("not implemented")}}async function js(t,e){return ae(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return ke(t,"POST","/v1/accounts:signInWithPassword",Re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return ke(t,"POST","/v1/accounts:signInWithEmailLink",Re(t,e))}async function Gs(t,e){return ke(t,"POST","/v1/accounts:signInWithEmailLink",Re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Bt{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ne(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ne(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zs(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hs(e,{email:this._email,oobCode:this._password});default:A(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return js(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gs(e,{idToken:n,email:this._email,oobCode:this._password});default:A(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ue(t,e){return ke(t,"POST","/v1/accounts:signInWithIdp",Re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="http://localhost";class Q extends Bt{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new Q(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):A("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=At(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Q(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ue(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ue(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ue(e,n)}buildRequest(){const e={requestUri:qs,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Se(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Js(t){const e=Ee(Te(t)).link,n=e?Ee(Te(e)).deep_link_id:null,r=Ee(Te(t)).deep_link_id;return(r?Ee(Te(r)).link:null)||r||n||e||t}class Wt{constructor(e){var n,r,i,s,o,a;const l=Ee(Te(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Ks((i=l.mode)!==null&&i!==void 0?i:null);h(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Js(e);try{return new Wt(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.providerId=fe.PROVIDER_ID}static credential(e,n){return Ne._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wt.parseLink(n);return h(r,"argument-error"),Ne._fromEmailAndCode(e,r.code,r.tenantId)}}fe.PROVIDER_ID="password";fe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";fe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Yn{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W extends De{constructor(){super("facebook.com")}static credential(e){return Q._fromParams({providerId:W.PROVIDER_ID,signInMethod:W.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return W.credentialFromTaggedObject(e)}static credentialFromError(e){return W.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return W.credential(e.oauthAccessToken)}catch{return null}}}W.FACEBOOK_SIGN_IN_METHOD="facebook.com";W.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V extends De{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return Q._fromParams({providerId:V.PROVIDER_ID,signInMethod:V.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return V.credentialFromTaggedObject(e)}static credentialFromError(e){return V.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return V.credential(n,r)}catch{return null}}}V.GOOGLE_SIGN_IN_METHOD="google.com";V.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j extends De{constructor(){super("github.com")}static credential(e){return Q._fromParams({providerId:j.PROVIDER_ID,signInMethod:j.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return j.credentialFromTaggedObject(e)}static credentialFromError(e){return j.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return j.credential(e.oauthAccessToken)}catch{return null}}}j.GITHUB_SIGN_IN_METHOD="github.com";j.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z extends De{constructor(){super("twitter.com")}static credential(e,n){return Q._fromParams({providerId:z.PROVIDER_ID,signInMethod:z.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return z.credentialFromTaggedObject(e)}static credentialFromError(e){return z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return z.credential(n,r)}catch{return null}}}z.TWITTER_SIGN_IN_METHOD="twitter.com";z.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e){return ke(t,"POST","/v1/accounts:signUp",Re(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Y._fromIdTokenResponse(e,r,i),o=Qn(r);return new X({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Qn(r);return new X({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Qn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends se{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,this.name="FirebaseError",Object.setPrototypeOf(this,st.prototype),this.appName=e.name,this.code=n.code,this.tenantId=(s=e.tenantId)!==null&&s!==void 0?s:void 0,this.serverResponse=n.customData.serverResponse}static _fromErrorAndOperation(e,n,r,i){return new st(e,n,r,i)}}function Xn(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?st._fromErrorAndOperation(t,s,e,r):s})}async function Qs(t,e,n=!1){const r=await ce(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return X._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ce(t,Xn(r,i,e,t),n);h(s.idToken,r,"internal-error");const o=Ft(s.idToken);h(o,r,"internal-error");const{sub:a}=o;return h(t.uid===a,r,"user-mismatch"),X._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&A(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){const r="signIn",i=await Xn(t,r,e),s=await X._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Zs(t,e){return Zn(it(t),e)}async function Bl(t,e,n){const r=it(t),i=await Ys(r,{returnSecureToken:!0,email:e,password:n}),s=await X._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Wl(t,e,n){return Zs($(t),fe.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e){return ae(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=$(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ce(r,eo(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function jl(t,e,n,r){return $(t).onAuthStateChanged(e,n,r)}function zl(t){return $(t).signOut()}const ot="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this.storage=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ot,"1"),this.storage.removeItem(ot),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){const t=w();return $t(t)||rt(t)}const no=1e3,ro=10;class tr extends er{constructor(){super(window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=to()&&Ws(),this.fallbackToPolling=qn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Bs()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,ro):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},no)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tr.type="LOCAL";const io=tr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends er{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nr.type="SESSION";const rr=nr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new at(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await so(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}at.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Vt("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return window}function ao(t){k().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return typeof k().WorkerGlobalScope!="undefined"&&typeof k().importScripts=="function"}async function co(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lo(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function uo(){return ir()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="firebaseLocalStorageDb",fo=1,ct="firebaseLocalStorage",or="fbase_key";class Me{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lt(t,e){return t.transaction([ct],e?"readwrite":"readonly").objectStore(ct)}function ho(){const t=indexedDB.deleteDatabase(sr);return new Me(t).toPromise()}function jt(){const t=indexedDB.open(sr,fo);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ct,{keyPath:or})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ct)?e(r):(r.close(),await ho(),e(await jt()))})})}async function ar(t,e,n){const r=lt(t,!0).put({[or]:e,value:n});return new Me(r).toPromise()}async function po(t,e){const n=lt(t,!1).get(e),r=await new Me(n).toPromise();return r===void 0?null:r.value}function cr(t,e){const n=lt(t,!0).delete(e);return new Me(n).toPromise()}const yo=800,mo=3;class lr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jt(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mo)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ir()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=at._getInstance(uo()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await co(),!this.activeServiceWorker)return;this.sender=new oo(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jt();return await ar(e,ot,"1"),await cr(e,ot),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ar(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>po(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>cr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=lt(i,!1).getAll();return new Me(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lr.type="LOCAL";const go=lr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function _o(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=R("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",vo().appendChild(r)})}function Io(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Ae(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t,e){return e?x(e):(h(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Bt{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return ue(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ue(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ue(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bo(t){return Zn(t.auth,new zt(t),t.bypassAuthState)}function So(t){const{auth:e,user:n}=t;return h(n,e,"internal-error"),Xs(n,new zt(t),t.bypassAuthState)}async function Eo(t){const{auth:e,user:n}=t;return h(n,e,"internal-error"),Qs(n,new zt(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bo;case"linkViaPopup":case"linkViaRedirect":return Eo;case"reauthViaPopup":case"reauthViaRedirect":return So;default:A(this.auth,"internal-error")}}resolve(e){U(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){U(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Ae(2e3,1e4);class de extends ur{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,de.currentPopupAction&&de.currentPopupAction.cancel(),de.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return h(e,this.auth,"internal-error"),e}async onExecution(){U(this.filter.length===1,"Popup operations only handle one event");const e=Vt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(R(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(R(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,de.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(R(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,To.get())};e()}}de.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="pendingRedirect",fr=new Map;class Ao extends ur{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=fr.get(this.auth._key());if(!e){try{const r=await Ro(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fr.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ro(t,e){const n=ko(e),r=await dr(t)._get(n)==="true";return await dr(t)._remove(n),r}function dr(t){return x(t._redirectPersistence)}function ko(t){return nt(Oo,t.config.apiKey,t.name)}async function Po(t,e,n=!1){const r=it(t),i=wo(r,e),o=await new Ao(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=10*60*1e3;class No{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Do(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(R(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Co&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(e))}saveEventToCache(e){this.cachedEventUids.add(hr(e)),this.lastProcessedEventTime=Date.now()}}function hr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Do(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pr(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mo(t,e={}){return ae(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uo=/^https?/;async function xo(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mo(t);for(const n of e)try{if(Fo(n))return}catch{}A(t,"unauthorized-domain")}function Fo(t){const e=Dt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Uo.test(n))return!1;if(Lo.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new Ae(3e4,6e4);function yr(){const t=k().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bo(t){return new Promise((e,n)=>{var r,i,s;function o(){yr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yr(),n(R(t,"network-request-failed"))},timeout:$o.get()})}if((i=(r=k().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=k().gapi)===null||s===void 0?void 0:s.load)o();else{const a=Io("iframefcb");return k()[a]=()=>{gapi.load?o():n(R(t,"network-request-failed"))},_o(`https://apis.google.com/js/api.js?onload=${a}`)}}).catch(e=>{throw ut=null,e})}let ut=null;function Wo(t){return ut=ut||Bo(t),ut}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Ae(5e3,15e3),jo="__/auth/iframe",zo="emulator/auth/iframe",Ho={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Go=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qo(t){const e=t.config;h(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mt(e,zo):`https://${t.config.authDomain}/${jo}`,r={apiKey:e.apiKey,appName:t.name,v:Ze},i=Go.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Se(r).slice(1)}`}async function Ko(t){const e=await Wo(t),n=k().gapi;return h(n,t,"internal-error"),e.open({where:document.body,url:qo(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ho,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=R(t,"network-request-failed"),a=k().setTimeout(()=>{s(o)},Vo.get());function l(){k().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yo=500,Qo=600,Xo="_blank",Zo="http://localhost";class mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ea(t,e,n,r=Yo,i=Qo){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Jo),{width:r.toString(),height:i.toString(),top:s,left:o}),c=w().toLowerCase();n&&(a=Vn(c)?Xo:n),Wn(c)&&(e=e||Zo,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if($s(c)&&a!=="_self")return ta(e||"",a),new mr(null);const f=window.open(e||"",a,u);h(f,t,"popup-blocked");try{f.focus()}catch{}return new mr(f)}function ta(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="__/auth/handler",ra="emulator/auth/handler";function gr(t,e,n,r,i,s){h(t.config.authDomain,t,"auth-domain-config-required"),h(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ze,eventId:i};if(e instanceof Yn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Oi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))o[l]=c}if(e instanceof De){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${ia(t)}?${Se(a).slice(1)}`}function ia({config:t}){return t.emulator?Mt(t,ra):`https://${t.authDomain}/${na}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="webStorageSupport";class sa{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rr,this._completeRedirectFn=Po}async _openPopup(e,n,r,i){var s;U((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=gr(e,n,r,Dt(),i);return ea(e,o,Vt())}async _openRedirect(e,n,r,i){return await this._originValidation(e),ao(gr(e,n,r,Dt(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(U(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r}async initAndGetManager(e){const n=await Ko(e),r=new No(e);return n.register("authEvent",i=>(h(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ht,{type:Ht},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ht];o!==void 0&&n(!!o),A(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xo(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qn()||$t()||rt()}}const oa=sa;var vr="@firebase/auth",_r="0.18.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){h(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function la(t){Qe(new Oe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{h(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),h(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kn(t)},l=new Vs(o,a);return bs(l,n),l})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Qe(new Oe("auth-internal",e=>{const n=it(e.getProvider("auth").getImmediate());return(r=>new aa(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),oe(vr,_r,ca(t)),oe(vr,_r,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(t=gs()){const e=kn(t,"auth");return e.isInitialized()?e.getImmediate():ws(t,{popupRedirectResolver:oa,persistence:[go,io,rr]})}la("Browser");var ua="firebase",fa="9.1.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe(ua,fa,"app");function da(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),e}var ha=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var i=42;e[n]=i;for(n in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var s=Object.getOwnPropertySymbols(e);if(s.length!==1||s[0]!==n||!Object.prototype.propertyIsEnumerable.call(e,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var o=Object.getOwnPropertyDescriptor(e,n);if(o.value!==i||o.enumerable!==!0)return!1}return!0},Ir=typeof Symbol!="undefined"&&Symbol,pa=ha,ya=function(){return typeof Ir!="function"||typeof Symbol!="function"||typeof Ir("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:pa()},ma="Function.prototype.bind called on incompatible ",Gt=Array.prototype.slice,ga=Object.prototype.toString,va="[object Function]",_a=function(e){var n=this;if(typeof n!="function"||ga.call(n)!==va)throw new TypeError(ma+n);for(var r=Gt.call(arguments,1),i,s=function(){if(this instanceof i){var u=n.apply(this,r.concat(Gt.call(arguments)));return Object(u)===u?u:this}else return n.apply(e,r.concat(Gt.call(arguments)))},o=Math.max(0,n.length-r.length),a=[],l=0;l<o;l++)a.push("$"+l);if(i=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(s),n.prototype){var c=function(){};c.prototype=n.prototype,i.prototype=new c,c.prototype=null}return i},Ia=_a,qt=Function.prototype.bind||Ia,wa=qt,ba=wa.call(Function.call,Object.prototype.hasOwnProperty),m,Le=SyntaxError,wr=Function,he=TypeError,Kt=function(t){try{return wr('"use strict"; return ('+t+").constructor;")()}catch{}},Z=Object.getOwnPropertyDescriptor;if(Z)try{Z({},"")}catch{Z=null}var Jt=function(){throw new he},Sa=Z?function(){try{return arguments.callee,Jt}catch{try{return Z(arguments,"callee").get}catch{return Jt}}}():Jt,pe=ya(),H=Object.getPrototypeOf||function(t){return t.__proto__},ye={},Ea=typeof Uint8Array=="undefined"?m:H(Uint8Array),me={"%AggregateError%":typeof AggregateError=="undefined"?m:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?m:ArrayBuffer,"%ArrayIteratorPrototype%":pe?H([][Symbol.iterator]()):m,"%AsyncFromSyncIteratorPrototype%":m,"%AsyncFunction%":ye,"%AsyncGenerator%":ye,"%AsyncGeneratorFunction%":ye,"%AsyncIteratorPrototype%":ye,"%Atomics%":typeof Atomics=="undefined"?m:Atomics,"%BigInt%":typeof BigInt=="undefined"?m:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?m:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?m:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?m:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?m:FinalizationRegistry,"%Function%":wr,"%GeneratorFunction%":ye,"%Int8Array%":typeof Int8Array=="undefined"?m:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?m:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?m:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":pe?H(H([][Symbol.iterator]())):m,"%JSON%":typeof JSON=="object"?JSON:m,"%Map%":typeof Map=="undefined"?m:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!pe?m:H(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?m:Promise,"%Proxy%":typeof Proxy=="undefined"?m:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?m:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?m:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!pe?m:H(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?m:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":pe?H(""[Symbol.iterator]()):m,"%Symbol%":pe?Symbol:m,"%SyntaxError%":Le,"%ThrowTypeError%":Sa,"%TypedArray%":Ea,"%TypeError%":he,"%Uint8Array%":typeof Uint8Array=="undefined"?m:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?m:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?m:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?m:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?m:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?m:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?m:WeakSet},Ta=function t(e){var n;if(e==="%AsyncFunction%")n=Kt("async function () {}");else if(e==="%GeneratorFunction%")n=Kt("function* () {}");else if(e==="%AsyncGeneratorFunction%")n=Kt("async function* () {}");else if(e==="%AsyncGenerator%"){var r=t("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(e==="%AsyncIteratorPrototype%"){var i=t("%AsyncGenerator%");i&&(n=H(i.prototype))}return me[e]=n,n},br={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},ft=qt,dt=ba,Oa=ft.call(Function.call,Array.prototype.concat),Aa=ft.call(Function.apply,Array.prototype.splice),Sr=ft.call(Function.call,String.prototype.replace),ht=ft.call(Function.call,String.prototype.slice),Ra=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,ka=/\\(\\)?/g,Pa=function(e){var n=ht(e,0,1),r=ht(e,-1);if(n==="%"&&r!=="%")throw new Le("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new Le("invalid intrinsic syntax, expected opening `%`");var i=[];return Sr(e,Ra,function(s,o,a,l){i[i.length]=a?Sr(l,ka,"$1"):o||s}),i},Ca=function(e,n){var r=e,i;if(dt(br,r)&&(i=br[r],r="%"+i[0]+"%"),dt(me,r)){var s=me[r];if(s===ye&&(s=Ta(r)),typeof s=="undefined"&&!n)throw new he("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:i,name:r,value:s}}throw new Le("intrinsic "+e+" does not exist!")},Yt=function(e,n){if(typeof e!="string"||e.length===0)throw new he("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new he('"allowMissing" argument must be a boolean');var r=Pa(e),i=r.length>0?r[0]:"",s=Ca("%"+i+"%",n),o=s.name,a=s.value,l=!1,c=s.alias;c&&(i=c[0],Aa(r,Oa([0,1],c)));for(var u=1,f=!0;u<r.length;u+=1){var d=r[u],p=ht(d,0,1),y=ht(d,-1);if((p==='"'||p==="'"||p==="`"||y==='"'||y==="'"||y==="`")&&p!==y)throw new Le("property names with quotes must have matching quotes");if((d==="constructor"||!f)&&(l=!0),i+="."+d,o="%"+i+"%",dt(me,o))a=me[o];else if(a!=null){if(!(d in a)){if(!n)throw new he("base intrinsic for "+e+" exists, but the property is not available.");return}if(Z&&u+1>=r.length){var I=Z(a,d);f=!!I,f&&"get"in I&&!("originalValue"in I.get)?a=I.get:a=a[d]}else f=dt(a,d),a=a[d];f&&!l&&(me[o]=a)}}return a},Er={exports:{}};(function(t){var e=qt,n=Yt,r=n("%Function.prototype.apply%"),i=n("%Function.prototype.call%"),s=n("%Reflect.apply%",!0)||e.call(i,r),o=n("%Object.getOwnPropertyDescriptor%",!0),a=n("%Object.defineProperty%",!0),l=n("%Math.max%");if(a)try{a({},"a",{value:1})}catch{a=null}t.exports=function(f){var d=s(e,i,arguments);if(o&&a){var p=o(d,"length");p.configurable&&a(d,"length",{value:1+l(0,f.length-(arguments.length-1))})}return d};var c=function(){return s(e,r,arguments)};a?a(t.exports,"apply",{value:c}):t.exports.apply=c})(Er);var Tr=Yt,Or=Er.exports,Na=Or(Tr("String.prototype.indexOf")),Da=function(e,n){var r=Tr(e,!!n);return typeof r=="function"&&Na(e,".prototype.")>-1?Or(r):r},Ma={},La=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ma}),Ua=da(La),Qt=typeof Map=="function"&&Map.prototype,Xt=Object.getOwnPropertyDescriptor&&Qt?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,pt=Qt&&Xt&&typeof Xt.get=="function"?Xt.get:null,xa=Qt&&Map.prototype.forEach,Zt=typeof Set=="function"&&Set.prototype,en=Object.getOwnPropertyDescriptor&&Zt?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,yt=Zt&&en&&typeof en.get=="function"?en.get:null,Fa=Zt&&Set.prototype.forEach,$a=typeof WeakMap=="function"&&WeakMap.prototype,Ue=$a?WeakMap.prototype.has:null,Ba=typeof WeakSet=="function"&&WeakSet.prototype,xe=Ba?WeakSet.prototype.has:null,Wa=typeof WeakRef=="function"&&WeakRef.prototype,Ar=Wa?WeakRef.prototype.deref:null,Va=Boolean.prototype.valueOf,ja=Object.prototype.toString,za=Function.prototype.toString,Ha=String.prototype.match,tn=typeof BigInt=="function"?BigInt.prototype.valueOf:null,nn=Object.getOwnPropertySymbols,rn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="object",Ga=Object.prototype.propertyIsEnumerable,Rr=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null),sn=Ua.custom,on=sn&&Pr(sn)?sn:null,b=typeof Symbol=="function"&&typeof Symbol.toStringTag!="undefined"?Symbol.toStringTag:null,qa=function t(e,n,r,i){var s=n||{};if(ee(s,"quoteStyle")&&s.quoteStyle!=="single"&&s.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ee(s,"maxStringLength")&&(typeof s.maxStringLength=="number"?s.maxStringLength<0&&s.maxStringLength!==1/0:s.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var o=ee(s,"customInspect")?s.customInspect:!0;if(typeof o!="boolean"&&o!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ee(s,"indent")&&s.indent!==null&&s.indent!=="	"&&!(parseInt(s.indent,10)===s.indent&&s.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(typeof e=="undefined")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Nr(e,s);if(typeof e=="number")return e===0?1/0/e>0?"0":"-0":String(e);if(typeof e=="bigint")return String(e)+"n";var a=typeof s.depth=="undefined"?5:s.depth;if(typeof r=="undefined"&&(r=0),r>=a&&a>0&&typeof e=="object")return an(e)?"[Array]":"[Object]";var l=dc(s,r);if(typeof i=="undefined")i=[];else if(Cr(i,e)>=0)return"[Circular]";function c(O,We,Wr){if(We&&(i=i.slice(),i.push(We)),Wr){var gn={depth:s.depth};return ee(s,"quoteStyle")&&(gn.quoteStyle=s.quoteStyle),t(O,gn,r+1,i)}return t(O,s,r+1,i)}if(typeof e=="function"){var u=rc(e),f=mt(e,c);return"[Function"+(u?": "+u:" (anonymous)")+"]"+(f.length>0?" { "+f.join(", ")+" }":"")}if(Pr(e)){var d=Fe?String(e).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):rn.call(e);return typeof e=="object"&&!Fe?$e(d):d}if(lc(e)){for(var p="<"+String(e.nodeName).toLowerCase(),y=e.attributes||[],I=0;I<y.length;I++)p+=" "+y[I].name+"="+kr(Ka(y[I].value),"double",s);return p+=">",e.childNodes&&e.childNodes.length&&(p+="..."),p+="</"+String(e.nodeName).toLowerCase()+">",p}if(an(e)){if(e.length===0)return"[]";var g=mt(e,c);return l&&!fc(g)?"["+ln(g,l)+"]":"[ "+g.join(", ")+" ]"}if(Qa(e)){var q=mt(e,c);return q.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+q.join(", ")+" }"}if(typeof e=="object"&&o){if(on&&typeof e[on]=="function")return e[on]();if(o!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(ic(e)){var C=[];return xa.call(e,function(O,We){C.push(c(We,e,!0)+" => "+c(O,e))}),Dr("Map",pt.call(e),C,l)}if(ac(e)){var T=[];return Fa.call(e,function(O){T.push(c(O,e))}),Dr("Set",yt.call(e),T,l)}if(sc(e))return cn("WeakMap");if(cc(e))return cn("WeakSet");if(oc(e))return cn("WeakRef");if(Za(e))return $e(c(Number(e)));if(tc(e))return $e(c(tn.call(e)));if(ec(e))return $e(Va.call(e));if(Xa(e))return $e(c(String(e)));if(!Ja(e)&&!Ya(e)){var N=mt(e,c),D=Rr?Rr(e)===Object.prototype:e instanceof Object||e.constructor===Object,E=e instanceof Object?"":"null prototype",F=!D&&b&&Object(e)===e&&b in e?G(e).slice(8,-1):E?"Object":"",_e=D||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",M=_e+(F||E?"["+[].concat(F||[],E||[]).join(": ")+"] ":"");return N.length===0?M+"{}":l?M+"{"+ln(N,l)+"}":M+"{ "+N.join(", ")+" }"}return String(e)};function kr(t,e,n){var r=(n.quoteStyle||e)==="double"?'"':"'";return r+t+r}function Ka(t){return String(t).replace(/"/g,"&quot;")}function an(t){return G(t)==="[object Array]"&&(!b||!(typeof t=="object"&&b in t))}function Ja(t){return G(t)==="[object Date]"&&(!b||!(typeof t=="object"&&b in t))}function Ya(t){return G(t)==="[object RegExp]"&&(!b||!(typeof t=="object"&&b in t))}function Qa(t){return G(t)==="[object Error]"&&(!b||!(typeof t=="object"&&b in t))}function Xa(t){return G(t)==="[object String]"&&(!b||!(typeof t=="object"&&b in t))}function Za(t){return G(t)==="[object Number]"&&(!b||!(typeof t=="object"&&b in t))}function ec(t){return G(t)==="[object Boolean]"&&(!b||!(typeof t=="object"&&b in t))}function Pr(t){if(Fe)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!rn)return!1;try{return rn.call(t),!0}catch{}return!1}function tc(t){if(!t||typeof t!="object"||!tn)return!1;try{return tn.call(t),!0}catch{}return!1}var nc=Object.prototype.hasOwnProperty||function(t){return t in this};function ee(t,e){return nc.call(t,e)}function G(t){return ja.call(t)}function rc(t){if(t.name)return t.name;var e=Ha.call(za.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function Cr(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}function ic(t){if(!pt||!t||typeof t!="object")return!1;try{pt.call(t);try{yt.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function sc(t){if(!Ue||!t||typeof t!="object")return!1;try{Ue.call(t,Ue);try{xe.call(t,xe)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function oc(t){if(!Ar||!t||typeof t!="object")return!1;try{return Ar.call(t),!0}catch{}return!1}function ac(t){if(!yt||!t||typeof t!="object")return!1;try{yt.call(t);try{pt.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function cc(t){if(!xe||!t||typeof t!="object")return!1;try{xe.call(t,xe);try{Ue.call(t,Ue)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function lc(t){return!t||typeof t!="object"?!1:typeof HTMLElement!="undefined"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function Nr(t,e){if(t.length>e.maxStringLength){var n=t.length-e.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return Nr(t.slice(0,e.maxStringLength),e)+r}var i=t.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,uc);return kr(i,"single",e)}function uc(t){var e=t.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return n?"\\"+n:"\\x"+(e<16?"0":"")+e.toString(16).toUpperCase()}function $e(t){return"Object("+t+")"}function cn(t){return t+" { ? }"}function Dr(t,e,n,r){var i=r?ln(n,r):n.join(", ");return t+" ("+e+") {"+i+"}"}function fc(t){for(var e=0;e<t.length;e++)if(Cr(t[e],`
`)>=0)return!1;return!0}function dc(t,e){var n;if(t.indent==="	")n="	";else if(typeof t.indent=="number"&&t.indent>0)n=Array(t.indent+1).join(" ");else return null;return{base:n,prev:Array(e+1).join(n)}}function ln(t,e){if(t.length===0)return"";var n=`
`+e.prev+e.base;return n+t.join(","+n)+`
`+e.prev}function mt(t,e){var n=an(t),r=[];if(n){r.length=t.length;for(var i=0;i<t.length;i++)r[i]=ee(t,i)?e(t[i],t):""}var s=typeof nn=="function"?nn(t):[],o;if(Fe){o={};for(var a=0;a<s.length;a++)o["$"+s[a]]=s[a]}for(var l in t)!ee(t,l)||n&&String(Number(l))===l&&l<t.length||Fe&&o["$"+l]instanceof Symbol||(/[^\w$]/.test(l)?r.push(e(l,t)+": "+e(t[l],t)):r.push(l+": "+e(t[l],t)));if(typeof nn=="function")for(var c=0;c<s.length;c++)Ga.call(t,s[c])&&r.push("["+e(s[c])+"]: "+e(t[s[c]],t));return r}var un=Yt,ge=Da,hc=qa,pc=un("%TypeError%"),gt=un("%WeakMap%",!0),vt=un("%Map%",!0),yc=ge("WeakMap.prototype.get",!0),mc=ge("WeakMap.prototype.set",!0),gc=ge("WeakMap.prototype.has",!0),vc=ge("Map.prototype.get",!0),_c=ge("Map.prototype.set",!0),Ic=ge("Map.prototype.has",!0),fn=function(t,e){for(var n=t,r;(r=n.next)!==null;n=r)if(r.key===e)return n.next=r.next,r.next=t.next,t.next=r,r},wc=function(t,e){var n=fn(t,e);return n&&n.value},bc=function(t,e,n){var r=fn(t,e);r?r.value=n:t.next={key:e,next:t.next,value:n}},Sc=function(t,e){return!!fn(t,e)},Ec=function(){var e,n,r,i={assert:function(s){if(!i.has(s))throw new pc("Side channel does not contain "+hc(s))},get:function(s){if(gt&&s&&(typeof s=="object"||typeof s=="function")){if(e)return yc(e,s)}else if(vt){if(n)return vc(n,s)}else if(r)return wc(r,s)},has:function(s){if(gt&&s&&(typeof s=="object"||typeof s=="function")){if(e)return gc(e,s)}else if(vt){if(n)return Ic(n,s)}else if(r)return Sc(r,s);return!1},set:function(s,o){gt&&s&&(typeof s=="object"||typeof s=="function")?(e||(e=new gt),mc(e,s,o)):vt?(n||(n=new vt),_c(n,s,o)):(r||(r={key:{},next:null}),bc(r,s,o))}};return i},Tc=String.prototype.replace,Oc=/%20/g,dn={RFC1738:"RFC1738",RFC3986:"RFC3986"},hn={default:dn.RFC3986,formatters:{RFC1738:function(t){return Tc.call(t,Oc,"+")},RFC3986:function(t){return String(t)}},RFC1738:dn.RFC1738,RFC3986:dn.RFC3986},Ac=hn,pn=Object.prototype.hasOwnProperty,te=Array.isArray,P=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),Rc=function(e){for(;e.length>1;){var n=e.pop(),r=n.obj[n.prop];if(te(r)){for(var i=[],s=0;s<r.length;++s)typeof r[s]!="undefined"&&i.push(r[s]);n.obj[n.prop]=i}}},Mr=function(e,n){for(var r=n&&n.plainObjects?Object.create(null):{},i=0;i<e.length;++i)typeof e[i]!="undefined"&&(r[i]=e[i]);return r},kc=function t(e,n,r){if(!n)return e;if(typeof n!="object"){if(te(e))e.push(n);else if(e&&typeof e=="object")(r&&(r.plainObjects||r.allowPrototypes)||!pn.call(Object.prototype,n))&&(e[n]=!0);else return[e,n];return e}if(!e||typeof e!="object")return[e].concat(n);var i=e;return te(e)&&!te(n)&&(i=Mr(e,r)),te(e)&&te(n)?(n.forEach(function(s,o){if(pn.call(e,o)){var a=e[o];a&&typeof a=="object"&&s&&typeof s=="object"?e[o]=t(a,s,r):e.push(s)}else e[o]=s}),e):Object.keys(n).reduce(function(s,o){var a=n[o];return pn.call(s,o)?s[o]=t(s[o],a,r):s[o]=a,s},i)},Pc=function(e,n){return Object.keys(n).reduce(function(r,i){return r[i]=n[i],r},e)},Cc=function(t,e,n){var r=t.replace(/\+/g," ");if(n==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch{return r}},Nc=function(e,n,r,i,s){if(e.length===0)return e;var o=e;if(typeof e=="symbol"?o=Symbol.prototype.toString.call(e):typeof e!="string"&&(o=String(e)),r==="iso-8859-1")return escape(o).replace(/%u[0-9a-f]{4}/gi,function(u){return"%26%23"+parseInt(u.slice(2),16)+"%3B"});for(var a="",l=0;l<o.length;++l){var c=o.charCodeAt(l);if(c===45||c===46||c===95||c===126||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||s===Ac.RFC1738&&(c===40||c===41)){a+=o.charAt(l);continue}if(c<128){a=a+P[c];continue}if(c<2048){a=a+(P[192|c>>6]+P[128|c&63]);continue}if(c<55296||c>=57344){a=a+(P[224|c>>12]+P[128|c>>6&63]+P[128|c&63]);continue}l+=1,c=65536+((c&1023)<<10|o.charCodeAt(l)&1023),a+=P[240|c>>18]+P[128|c>>12&63]+P[128|c>>6&63]+P[128|c&63]}return a},Dc=function(e){for(var n=[{obj:{o:e},prop:"o"}],r=[],i=0;i<n.length;++i)for(var s=n[i],o=s.obj[s.prop],a=Object.keys(o),l=0;l<a.length;++l){var c=a[l],u=o[c];typeof u=="object"&&u!==null&&r.indexOf(u)===-1&&(n.push({obj:o,prop:c}),r.push(u))}return Rc(n),e},Mc=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Lc=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Uc=function(e,n){return[].concat(e,n)},xc=function(e,n){if(te(e)){for(var r=[],i=0;i<e.length;i+=1)r.push(n(e[i]));return r}return n(e)},Lr={arrayToObject:Mr,assign:Pc,combine:Uc,compact:Dc,decode:Cc,encode:Nc,isBuffer:Lc,isRegExp:Mc,maybeMap:xc,merge:kc},Ur=Ec,yn=Lr,Be=hn,Fc=Object.prototype.hasOwnProperty,xr={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,n){return e+"["+n+"]"},repeat:function(e){return e}},ne=Array.isArray,$c=Array.prototype.push,Fr=function(t,e){$c.apply(t,ne(e)?e:[e])},Bc=Date.prototype.toISOString,$r=Be.default,S={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:yn.encode,encodeValuesOnly:!1,format:$r,formatter:Be.formatters[$r],indices:!1,serializeDate:function(e){return Bc.call(e)},skipNulls:!1,strictNullHandling:!1},Wc=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},Vc=function t(e,n,r,i,s,o,a,l,c,u,f,d,p,y,I){var g=e;if(I.has(e))throw new RangeError("Cyclic object value");if(typeof a=="function"?g=a(n,g):g instanceof Date?g=u(g):r==="comma"&&ne(g)&&(g=yn.maybeMap(g,function(O){return O instanceof Date?u(O):O})),g===null){if(i)return o&&!p?o(n,S.encoder,y,"key",f):n;g=""}if(Wc(g)||yn.isBuffer(g)){if(o){var q=p?n:o(n,S.encoder,y,"key",f);return[d(q)+"="+d(o(g,S.encoder,y,"value",f))]}return[d(n)+"="+d(String(g))]}var C=[];if(typeof g=="undefined")return C;var T;if(r==="comma"&&ne(g))T=[{value:g.length>0?g.join(",")||null:void 0}];else if(ne(a))T=a;else{var N=Object.keys(g);T=l?N.sort(l):N}for(var D=0;D<T.length;++D){var E=T[D],F=typeof E=="object"&&E.value!==void 0?E.value:g[E];if(!(s&&F===null)){var _e=ne(g)?typeof r=="function"?r(n,E):n:n+(c?"."+E:"["+E+"]");I.set(e,!0);var M=Ur();Fr(C,t(F,_e,r,i,s,o,a,l,c,u,f,d,p,y,M))}}return C},jc=function(e){if(!e)return S;if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var n=e.charset||S.charset;if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=Be.default;if(typeof e.format!="undefined"){if(!Fc.call(Be.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var i=Be.formatters[r],s=S.filter;return(typeof e.filter=="function"||ne(e.filter))&&(s=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:S.addQueryPrefix,allowDots:typeof e.allowDots=="undefined"?S.allowDots:!!e.allowDots,charset:n,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:S.charsetSentinel,delimiter:typeof e.delimiter=="undefined"?S.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:S.encode,encoder:typeof e.encoder=="function"?e.encoder:S.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:S.encodeValuesOnly,filter:s,format:r,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:S.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:S.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:S.strictNullHandling}},zc=function(t,e){var n=t,r=jc(e),i,s;typeof r.filter=="function"?(s=r.filter,n=s("",n)):ne(r.filter)&&(s=r.filter,i=s);var o=[];if(typeof n!="object"||n===null)return"";var a;e&&e.arrayFormat in xr?a=e.arrayFormat:e&&"indices"in e?a=e.indices?"indices":"repeat":a="indices";var l=xr[a];i||(i=Object.keys(n)),r.sort&&i.sort(r.sort);for(var c=Ur(),u=0;u<i.length;++u){var f=i[u];r.skipNulls&&n[f]===null||Fr(o,Vc(n[f],f,l,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,c))}var d=o.join(r.delimiter),p=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),d.length>0?p+d:""},ve=Lr,mn=Object.prototype.hasOwnProperty,Hc=Array.isArray,_={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:ve.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Gc=function(t){return t.replace(/&#(\d+);/g,function(e,n){return String.fromCharCode(parseInt(n,10))})},Br=function(t,e){return t&&typeof t=="string"&&e.comma&&t.indexOf(",")>-1?t.split(","):t},qc="utf8=%26%2310003%3B",Kc="utf8=%E2%9C%93",Jc=function(e,n){var r={},i=n.ignoreQueryPrefix?e.replace(/^\?/,""):e,s=n.parameterLimit===1/0?void 0:n.parameterLimit,o=i.split(n.delimiter,s),a=-1,l,c=n.charset;if(n.charsetSentinel)for(l=0;l<o.length;++l)o[l].indexOf("utf8=")===0&&(o[l]===Kc?c="utf-8":o[l]===qc&&(c="iso-8859-1"),a=l,l=o.length);for(l=0;l<o.length;++l)if(l!==a){var u=o[l],f=u.indexOf("]="),d=f===-1?u.indexOf("="):f+1,p,y;d===-1?(p=n.decoder(u,_.decoder,c,"key"),y=n.strictNullHandling?null:""):(p=n.decoder(u.slice(0,d),_.decoder,c,"key"),y=ve.maybeMap(Br(u.slice(d+1),n),function(I){return n.decoder(I,_.decoder,c,"value")})),y&&n.interpretNumericEntities&&c==="iso-8859-1"&&(y=Gc(y)),u.indexOf("[]=")>-1&&(y=Hc(y)?[y]:y),mn.call(r,p)?r[p]=ve.combine(r[p],y):r[p]=y}return r},Yc=function(t,e,n,r){for(var i=r?e:Br(e,n),s=t.length-1;s>=0;--s){var o,a=t[s];if(a==="[]"&&n.parseArrays)o=[].concat(i);else{o=n.plainObjects?Object.create(null):{};var l=a.charAt(0)==="["&&a.charAt(a.length-1)==="]"?a.slice(1,-1):a,c=parseInt(l,10);!n.parseArrays&&l===""?o={0:i}:!isNaN(c)&&a!==l&&String(c)===l&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(o=[],o[c]=i):o[l]=i}i=o}return i},Qc=function(e,n,r,i){if(!!e){var s=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,o=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,l=r.depth>0&&o.exec(s),c=l?s.slice(0,l.index):s,u=[];if(c){if(!r.plainObjects&&mn.call(Object.prototype,c)&&!r.allowPrototypes)return;u.push(c)}for(var f=0;r.depth>0&&(l=a.exec(s))!==null&&f<r.depth;){if(f+=1,!r.plainObjects&&mn.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(l[1])}return l&&u.push("["+s.slice(l.index)+"]"),Yc(u,n,r,i)}},Xc=function(e){if(!e)return _;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset!="undefined"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=typeof e.charset=="undefined"?_.charset:e.charset;return{allowDots:typeof e.allowDots=="undefined"?_.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:_.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:_.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:_.arrayLimit,charset:n,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:_.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:_.comma,decoder:typeof e.decoder=="function"?e.decoder:_.decoder,delimiter:typeof e.delimiter=="string"||ve.isRegExp(e.delimiter)?e.delimiter:_.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:_.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:_.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:_.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:_.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:_.strictNullHandling}},Zc=function(t,e){var n=Xc(e);if(t===""||t===null||typeof t=="undefined")return n.plainObjects?Object.create(null):{};for(var r=typeof t=="string"?Jc(t,n):t,i=n.plainObjects?Object.create(null):{},s=Object.keys(r),o=0;o<s.length;++o){var a=s[o],l=Qc(a,r[a],n,typeof t=="string");i=ve.merge(i,l,n)}return n.allowSparse===!0?i:ve.compact(i)},el=zc,tl=Zc,nl=hn,Gl={formats:nl,parse:tl,stringify:el};export{St as $,bl as A,Vr as B,Ul as C,sl as D,Qr as E,pl as F,al as G,cl as H,ol as I,il as J,re as K,xl as L,Fl as M,$l as N,Hl as O,Wl as P,Bl as Q,Vl as R,Ll as S,zl as T,jl as U,rl as V,_l as W,Ie as X,ll as Y,fl as Z,Gl as _,ei as a,Il as a0,Tl as a1,bn as a2,Cl as a3,wl as a4,yl as b,ml as c,Xr as d,Zr as e,ul as f,ri as g,vl as h,Ml as i,Nl as j,dl as k,hl as l,Dl as m,gl as n,ci as o,kl as p,Pl as q,Ol as r,zr as s,_t as t,Rl as u,li as v,Al as w,ai as x,El as y,Sl as z};
