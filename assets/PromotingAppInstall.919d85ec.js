import{G as q,z as B,aH as E,A as O,r as l,I as N,u as R,e as V,B as Y,D as a,R as g,S as n,T as p,ap as $,az as z,al as L,V as e,X as w,aN as G,U as m,E as _,$ as i,aI as J,Y as S,a0 as k,ag as X,aq as j,am as F,aJ as K}from"./index.168e4218.js";const W={class:"text-h5 q-mt-sm q-mb-xs"},Z={class:"row items-center"},ee={class:"col-3",style:{height:"80px"}},te={class:"col-9 q-pl-md text-body1"},oe={class:"q-ma-none",style:{"font-weight":"600"}},se={key:0,class:"text-subtitle2"},le={key:1,class:"text-subtitle2"},ae={key:2},ne={style:{"font-weight":"700"}},A=100,ie=B({__name:"PromotingAppInstall",setup(re,{expose:C}){const{dialogRef:u,onDialogHide:x}=E(),r=O(),c=l(!1),s=l(null),d=l(!1);N();const P=R(),h=l(0),v=l(0),f=l(0),y=V(()=>{var o;return"2,24,25,30,31".split(",").includes(((o=P.user)==null?void 0:o.uid)||"")}),T=t=>{h.value=t.touches[0].clientY},D=t=>{t.preventDefault(),v.value=t.touches[0].clientY;const o=Math.min(Math.max((v.value-h.value)/A,0),1);f.value=o},I=()=>{v.value-h.value>A&&u.value&&u.value.hide(),f.value=0},b=t=>{t.stopPropagation()},H=()=>{x()},M=()=>{const t=/iPad|iPhone|iPod/.test(window.navigator.userAgent)&&!("standalone"in window.navigator),o=r.platform.is.desktop;d.value=window.matchMedia("(display-mode: standalone)").matches||t||o&&window.matchMedia("(display-mode: standalone)").matches},Q=()=>{c.value=!1,s.value=null},U=async()=>{s.value&&(s.value.prompt(),(await s.value.userChoice).outcome==="accepted"?(console.log("User accepted the A2HS prompt"),c.value=!1):console.log("User dismissed the A2HS prompt"),s.value=null)};return Y(()=>{M(),window.addEventListener("beforeinstallprompt",t=>{console.log("before install prompt",t),t.preventDefault(),s.value=t,d.value||(c.value=!0)}),window.addEventListener("appinstalled",()=>{s.value=null,c.value=!1,d.value=!0,console.log("app installed")})}),C({checkAndShowPrompt:()=>{s.value&&!d.value&&y.value&&(c.value=!0)},dialogRef:u}),(t,o)=>d.value?k("",!0):(a(),g(K,{key:0,ref_key:"dialogRef",ref:u,position:"bottom",onHide:H,onClick:b,onTouchstart:T,onTouchmove:F(D,["prevent"]),onTouchend:I,persistent:"",maximized:!1,"transition-show":"slide-up","transition-hide":"slide-down"},{default:n(()=>[p($,{class:"dialog-card",style:z({"--swipe-progress":f.value})},{default:n(()=>[p(L,null,{default:n(()=>[e("div",W,w(t.$t("common.installApp")),1),e("div",Z,[e("div",ee,[p(G,{src:"/sosLogo_512_512.png",style:{height:"80px",width:"80px"}})]),e("div",te,[e("p",oe,w(t.$t("common.addToHomeScreen")),1)])]),m(r).platform.is.safari||m(r).platform.is.mac?(a(),_("div",se,o[0]||(o[0]=[e("ol",null,[e("li",null,"Open your app in Safari."),e("li",null," Tap the Share button at the bottom of the screen (a box with an arrow pointing up). "),e("li",null,'Scroll down and select "Add to Home Screen".'),e("li",null,'Confirm by tapping "Add" in the top-right corner.')],-1)]))):m(r).platform.is.chrome||m(r).platform.is.android?(a(),_("div",le,o[1]||(o[1]=[e("ul",null,[e("li",null,"Open your app in Chrome."),e("li",null,"Tap the three-dot menu in the top-right corner."),e("li",null,'Select "Add to Home screen". Confirm by tapping "Add".')],-1)]))):(a(),_("div",ae,o[2]||(o[2]=[e("ol",null,[e("li",null,[i(" - On Android: Tap "),e("strong",null,"Menu"),i(" and select "),e("strong",null,"Add to Home screen"),i(". ")]),e("li",null,[i(" - On iOS: Tap "),e("strong",null,"Share"),i(" and select "),e("strong",null,"Add to Home Screen"),i(". ")])],-1)])))]),_:1}),p(J,{class:"custom-scroll"},{default:n(()=>[y.value?(a(),g(S,{key:0,color:"primary",class:"col",onClick:U},{default:n(()=>[e("span",ne,w(t.$t("common.install")),1)]),_:1})):k("",!0),X((a(),g(S,{color:"grey",flat:"",class:"col",onClick:Q},{default:n(()=>o[3]||(o[3]=[e("span",{style:{"font-weight":"700"}}," Skip ",-1)])),_:1})),[[j]])]),_:1})]),_:1},8,["style"])]),_:1},512))}});var ue=q(ie,[["__scopeId","data-v-58c4fe9a"]]);export{ue as default};