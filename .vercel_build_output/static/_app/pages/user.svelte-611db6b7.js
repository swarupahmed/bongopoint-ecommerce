import{S as Y,i as Z,s as tt,a2 as C,a3 as L,e as O,j as U,k as x,t as q,c as I,a as j,m as E,n as D,g as J,d as g,b as W,f as N,o as T,E as h,F as et,a1 as P,x as v,u as k,v as A,X as wt,J as nt,W as yt,h as Ut,r as pt,w as mt,A as xt,l as _t}from"../chunks/vendor-aa600824.js";import{T as R,c as ct,g as dt,A as Et}from"../chunks/AddressForm-3952b37d.js";import{a as F}from"../chunks/auth-08e36b14.js";function Dt(r){let t,n,e,s,l,o,d,p,_,$,m,u,f,i,b,S,X,y,G,H,B,K,V,Q,st;function $t(a){r[5](a)}let at={type:"email",label:"Email"};r[0]!==void 0&&(at.val=r[0]),n=new R({props:at}),C.push(()=>L(n,"val",$t));function vt(a){r[6](a)}let rt={type:"password",label:"Password"};r[1]!==void 0&&(rt.val=r[1]),l=new R({props:rt}),C.push(()=>L(l,"val",vt));function bt(a){r[7](a)}let lt={label:"Full Name"};r[2]!==void 0&&(lt.val=r[2]),u=new R({props:lt}),C.push(()=>L(u,"val",bt));function ht(a){r[8](a)}let ut={type:"email",label:"Email"};r[0]!==void 0&&(ut.val=r[0]),b=new R({props:ut}),C.push(()=>L(b,"val",ht));function kt(a){r[9](a)}let it={type:"password",label:"Password"};return r[1]!==void 0&&(it.val=r[1]),y=new R({props:it}),C.push(()=>L(y,"val",kt)),{c(){t=O("form"),U(n.$$.fragment),s=x(),U(l.$$.fragment),d=x(),p=O("button"),_=q("Log In"),$=x(),m=O("form"),U(u.$$.fragment),i=x(),U(b.$$.fragment),X=x(),U(y.$$.fragment),H=x(),B=O("button"),K=q("Sign Up"),this.h()},l(a){t=I(a,"FORM",{class:!0});var c=j(t);E(n.$$.fragment,c),s=D(c),E(l.$$.fragment,c),d=D(c),p=I(c,"BUTTON",{type:!0});var M=j(p);_=J(M,"Log In"),M.forEach(g),c.forEach(g),$=D(a),m=I(a,"FORM",{class:!0});var w=j(m);E(u.$$.fragment,w),i=D(w),E(b.$$.fragment,w),X=D(w),E(y.$$.fragment,w),H=D(w),B=I(w,"BUTTON",{type:!0});var z=j(B);K=J(z,"Sign Up"),z.forEach(g),w.forEach(g),this.h()},h(){W(p,"type","submit"),W(t,"class","login form svelte-1u1szgj"),W(B,"type","submit"),W(m,"class","signup form svelte-1u1szgj")},m(a,c){N(a,t,c),T(n,t,null),h(t,s),T(l,t,null),h(t,d),h(t,p),h(p,_),N(a,$,c),N(a,m,c),T(u,m,null),h(m,i),T(b,m,null),h(m,X),T(y,m,null),h(m,H),h(m,B),h(B,K),V=!0,Q||(st=[et(t,"submit",r[3]),et(m,"submit",r[4])],Q=!0)},p(a,[c]){const M={};!e&&c&1&&(e=!0,M.val=a[0],P(()=>e=!1)),n.$set(M);const w={};!o&&c&2&&(o=!0,w.val=a[1],P(()=>o=!1)),l.$set(w);const z={};!f&&c&4&&(f=!0,z.val=a[2],P(()=>f=!1)),u.$set(z);const ot={};!S&&c&1&&(S=!0,ot.val=a[0],P(()=>S=!1)),b.$set(ot);const ft={};!G&&c&2&&(G=!0,ft.val=a[1],P(()=>G=!1)),y.$set(ft)},i(a){V||(v(n.$$.fragment,a),v(l.$$.fragment,a),v(u.$$.fragment,a),v(b.$$.fragment,a),v(y.$$.fragment,a),V=!0)},o(a){k(n.$$.fragment,a),k(l.$$.fragment,a),k(u.$$.fragment,a),k(b.$$.fragment,a),k(y.$$.fragment,a),V=!1},d(a){a&&g(t),A(n),A(l),a&&g($),a&&g(m),A(u),A(b),A(y),Q=!1,wt(st)}}}function Nt(r,t,n){let e;nt(r,F,i=>n(10,e=i));let s="mockuser@gmail.com",l="mockpass",o="";async function d(i){i.preventDefault(),await F.logIn(s,l),console.log("user-",e.user)}async function p(i){o.length>=3&&l.length>=6?(i.preventDefault(),await F.signUp(s,l),console.log("user-",e.user),await F.updateUserData({displayName:o}),console.log("after creating",e.user.displayName),await ct(e.user)):alert("name should be more than 3 & password 6")}function _(i){s=i,n(0,s)}function $(i){l=i,n(1,l)}function m(i){o=i,n(2,o)}function u(i){s=i,n(0,s)}function f(i){l=i,n(1,l)}return[s,l,o,d,p,_,$,m,u,f]}class Tt extends Y{constructor(t){super();Z(this,t,Nt,Dt,tt,{})}}function gt(r){let t,n;return t=new Et({props:{address:r[0].deliveryAddress}}),{c(){U(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},p(e,s){const l={};s&1&&(l.address=e[0].deliveryAddress),t.$set(l)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function At(r){let t,n=r[1].user.email+"",e,s,l,o,d,p,_,$,m,u=r[0]&&gt(r);return{c(){t=O("div"),e=q(n),s=x(),u&&u.c(),l=x(),o=O("div"),d=O("button"),p=q("logOut"),this.h()},l(f){t=I(f,"DIV",{});var i=j(t);e=J(i,n),i.forEach(g),s=D(f),u&&u.l(f),l=D(f),o=I(f,"DIV",{style:!0});var b=j(o);d=I(b,"BUTTON",{});var S=j(d);p=J(S,"logOut"),S.forEach(g),b.forEach(g),this.h()},h(){yt(o,"padding-top","40px")},m(f,i){N(f,t,i),h(t,e),N(f,s,i),u&&u.m(f,i),N(f,l,i),N(f,o,i),h(o,d),h(d,p),_=!0,$||(m=et(d,"click",r[2]),$=!0)},p(f,[i]){(!_||i&2)&&n!==(n=f[1].user.email+"")&&Ut(e,n),f[0]?u?(u.p(f,i),i&1&&v(u,1)):(u=gt(f),u.c(),v(u,1),u.m(l.parentNode,l)):u&&(pt(),k(u,1,1,()=>{u=null}),mt())},i(f){_||(v(u),_=!0)},o(f){k(u),_=!1},d(f){f&&g(t),f&&g(s),u&&u.d(f),f&&g(l),f&&g(o),$=!1,m()}}}function Ot(r,t,n){let e;nt(r,F,o=>n(1,e=o));let s;return console.log(e.user),xt(async()=>{n(0,s=await dt(e.user.uid)),console.log(s),s===null&&setTimeout(async()=>{if(n(0,s=await dt(e.user.uid)),s===null&&e.user.displayName){let o=await ct(e.user);o.result.acknowledged===!0&&n(0,s=o.userData)}},2e3)}),[s,e,()=>F.logOut()]}class It extends Y{constructor(t){super();Z(this,t,Ot,At,tt,{})}}function jt(r){let t,n;return t=new Tt({}),{c(){U(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function Ft(r){let t,n;return t=new It({}),{c(){U(t.$$.fragment)},l(e){E(t.$$.fragment,e)},m(e,s){T(t,e,s),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){k(t.$$.fragment,e),n=!1},d(e){A(t,e)}}}function St(r){let t,n,e,s;const l=[Ft,jt],o=[];function d(p,_){return p[0].user?0:1}return t=d(r),n=o[t]=l[t](r),{c(){n.c(),e=_t()},l(p){n.l(p),e=_t()},m(p,_){o[t].m(p,_),N(p,e,_),s=!0},p(p,[_]){let $=t;t=d(p),t!==$&&(pt(),k(o[$],1,1,()=>{o[$]=null}),mt(),n=o[t],n||(n=o[t]=l[t](p),n.c()),v(n,1),n.m(e.parentNode,e))},i(p){s||(v(n),s=!0)},o(p){k(n),s=!1},d(p){o[t].d(p),p&&g(e)}}}function Bt(r,t,n){let e;return nt(r,F,s=>n(0,e=s)),[e]}class Lt extends Y{constructor(t){super();Z(this,t,Bt,St,tt,{})}}export{Lt as default};