import{S,i as q,s as J,j as K,m as L,o as M,x as g,u as I,v as Z,l as C,f as A,r as V,w as B,d as h,J as z,A as Y,e as N,t as w,k as O,c as T,a as j,g as y,n as U,E as k,h as G,F as H,Z as x,K as $}from"./vendor-aa600824.js";import{g as ee,A as te}from"./AddressForm-3952b37d.js";import{a as Q}from"./auth-08e36b14.js";import{g as re}from"./navigation-51f4a605.js";function R(n){let t,s;return t=new te({props:{bind:n[0]}}),{c(){K(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const l={};o&1&&(l.bind=e[0]),t.$set(l)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){Z(t,e)}}}function se(n){let t,s,e=n[1]&&R(n);return{c(){e&&e.c(),t=C()},l(o){e&&e.l(o),t=C()},m(o,l){e&&e.m(o,l),A(o,t,l),s=!0},p(o,[l]){o[1]?e?(e.p(o,l),l&2&&g(e,1)):(e=R(o),e.c(),g(e,1),e.m(t.parentNode,t)):e&&(V(),I(e,1,1,()=>{e=null}),B())},i(o){s||(g(e),s=!0)},o(o){I(e),s=!1},d(o){e&&e.d(o),o&&h(t)}}}function oe(n,t,s){let e;z(n,Q,d=>s(3,e=d));let{user:o}=t,{address:l}=t,c;return console.log(e.user),Y(async()=>{s(1,c=await ee(o.uid)),s(0,l=c.deliveryAddress),console.log(c)}),n.$$set=d=>{"user"in d&&s(2,o=d.user),"address"in d&&s(0,l=d.address)},[l,c,o]}class le extends S{constructor(t){super();q(this,t,oe,se,J,{user:2,address:0})}}function W(n,t,s){const e=n.slice();return e[5]=t[s],e}function ne(n){let t,s,e,o;return{c(){t=N("button"),s=w("sign In first")},l(l){t=T(l,"BUTTON",{});var c=j(t);s=y(c,"sign In first"),c.forEach(h)},m(l,c){A(l,t,c),k(t,s),e||(o=H(t,"click",n[4]),e=!0)},p:$,i:$,o:$,d(l){l&&h(t),e=!1,o()}}}function ae(n){let t,s;return t=new le({props:{user:n[1].user,bind:n[2]}}),{c(){K(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const l={};o&2&&(l.user=e[1].user),t.$set(l)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){I(t.$$.fragment,e),s=!1},d(e){Z(t,e)}}}function X(n){let t,s,e=n[5].title+"",o,l,c,d,_=n[5].price+"",b,i,p,r,u,a;const v=[ae,ne],E=[];function P(f,m){return f[1].user?0:1}return p=P(n),r=E[p]=v[p](n),{c(){t=N("div"),s=N("div"),o=w(e),l=O(),c=N("div"),d=w("Tk. "),b=w(_),i=O(),r.c(),u=C()},l(f){t=T(f,"DIV",{});var m=j(t);s=T(m,"DIV",{});var D=j(s);o=y(D,e),D.forEach(h),l=U(m),c=T(m,"DIV",{});var F=j(c);d=y(F,"Tk. "),b=y(F,_),F.forEach(h),m.forEach(h),i=U(f),r.l(f),u=C()},m(f,m){A(f,t,m),k(t,s),k(s,o),k(t,l),k(t,c),k(c,d),k(c,b),A(f,i,m),E[p].m(f,m),A(f,u,m),a=!0},p(f,m){(!a||m&1)&&e!==(e=f[5].title+"")&&G(o,e),(!a||m&1)&&_!==(_=f[5].price+"")&&G(b,_);let D=p;p=P(f),p===D?E[p].p(f,m):(V(),I(E[D],1,1,()=>{E[D]=null}),B(),r=E[p],r?r.p(f,m):(r=E[p]=v[p](f),r.c()),g(r,1),r.m(u.parentNode,u))},i(f){a||(g(r),a=!0)},o(f){I(r),a=!1},d(f){f&&h(t),f&&h(i),E[p].d(f),f&&h(u)}}}function ie(n){let t,s,e,o,l,c,d,_,b=n[0],i=[];for(let r=0;r<b.length;r+=1)i[r]=X(W(n,b,r));const p=r=>I(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();t=O(),s=N("div"),e=N("button"),o=w("Confirm Purchase"),this.h()},l(r){for(let v=0;v<i.length;v+=1)i[v].l(r);t=U(r),s=T(r,"DIV",{});var u=j(s);e=T(u,"BUTTON",{});var a=j(e);o=y(a,"Confirm Purchase"),a.forEach(h),u.forEach(h),this.h()},h(){e.disabled=l=!n[1].user&&!n[2]},m(r,u){for(let a=0;a<i.length;a+=1)i[a].m(r,u);A(r,t,u),A(r,s,u),k(s,e),k(e,o),c=!0,d||(_=H(e,"click",n[3]),d=!0)},p(r,[u]){if(u&7){b=r[0];let a;for(a=0;a<b.length;a+=1){const v=W(r,b,a);i[a]?(i[a].p(v,u),g(i[a],1)):(i[a]=X(v),i[a].c(),g(i[a],1),i[a].m(t.parentNode,t))}for(V(),a=b.length;a<i.length;a+=1)p(a);B()}(!c||u&2&&l!==(l=!r[1].user&&!r[2]))&&(e.disabled=l)},i(r){if(!c){for(let u=0;u<b.length;u+=1)g(i[u]);c=!0}},o(r){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)I(i[u]);c=!1},d(r){x(i,r),r&&h(t),r&&h(s),d=!1,_()}}}function ue(n,t,s){let e;z(n,Q,_=>s(1,e=_));let{products:o}=t,l;function c(){let _={products:o,status:"pending",userId,address:l};console.log("order",_),createOrder(_)}const d=()=>re("/user");return n.$$set=_=>{"products"in _&&s(0,o=_.products)},[o,e,l,c,d]}class me extends S{constructor(t){super();q(this,t,ue,ie,J,{products:0})}}export{me as C};
