import{d as $,b_ as x,h as B,f as I,b$ as L,a7 as U,c0 as E,a9 as G,c1 as N,e as O,c2 as R,k as A,G as X,z as j,bn as z,A as F,I as J,r as u,bo as W,B as Y,D as w,R as K,S as n,V as i,T as a,ap as P,al as p,X as f,bX as Z,bW as ee,ae,E as q,at as oe,au as se,U as le,Y as b,aJ as y,aM as C,ag as V,aq as Q,a3 as ne,C as te}from"./index.168e4218.js";var ie=$({name:"QTabPanel",props:x,setup(v,{slots:m}){return()=>B("div",{class:"q-tab-panel",role:"tabpanel"},I(m.default))}}),re=$({name:"QTabPanels",props:{...L,...U},emits:E,setup(v,{slots:m}){const h=A(),o=G(v,h.proxy.$q),{updatePanelsList:r,getPanelContent:_,panelDirectives:g}=N(),d=O(()=>"q-tab-panels q-panel-parent"+(o.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(m),R("div",{class:d.value},_(),"pan",v.swipeable,()=>g.value))}});const ce={class:"help-content"},me={class:"text-h5 text-weight-bold q-mb-md"},de=["id"],ue={class:"row q-col-gutter-sm q-mt-sm"},pe={class:"col-12 col-sm-6"},fe={class:"col-12 col-sm-6"},ve={class:"text-h6"},he={class:"video-container"},_e=["src"],be={class:"text-h6"},ge=["innerHTML"],we=j({__name:"HelpPage",setup(v){const m=z(),h=F(),{t:o}=J(),r=u("permissions"),_=u(!1),g=u(""),d=u(!1),H=u(""),{permissions:T,checkPermissions:k,requestPermission:D}=W(),S=async s=>{await D(s)?h.notify({color:"black",message:o("common.permissionGranted",{permission:o(s)}),icon:"check",position:"top-right"}):h.notify({color:"negative",message:o("common.permissionDenied",{permission:o(s)}),icon:"error",position:"top-right"}),await k()},M=s=>{const l=te.getPlatform(),e=l==="ios",c=l==="android";let t="";switch(s){case"common.location":e?t=o("common.iosLocationHelp"):c?t=o("common.androidLocationHelp"):t=o("common.pwaLocationHelp");break;case"common.camera":e?t=o("common.iosCameraHelp"):c?t=o("common.androidCameraHelp"):t=o("common.pwaCameraHelp");break;case"common.microphone":e?t=o("common.iosMicrophoneHelp"):c?t=o("common.androidMicrophoneHelp"):t=o("common.pwaMicrophoneHelp");break;case"common.notifications":e?t=o("common.iosNotificationsHelp"):c?t=o("common.androidNotificationsHelp"):t=o("common.pwaNotificationsHelp");break}H.value=t,d.value=!0};return Y(async()=>{await k();const s=m.query.section;if(s){const l=document.getElementById(s);l&&l.scrollIntoView({behavior:"smooth"})}}),(s,l)=>(w(),K(ne,{class:"help-page q-pa-md"},{default:n(()=>[i("div",ce,[a(P,{class:"help-card q-mb-md"},{default:n(()=>[a(p,null,{default:n(()=>[i("div",me,f(s.$t("common.help")),1),a(Z,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),dense:"",class:"text-grey","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:n(()=>[a(ee,{name:"permissions",label:s.$t("common.permissionsHelp")},null,8,["label"])]),_:1},8,["modelValue"]),a(ae),a(re,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=e=>r.value=e),animated:""},{default:n(()=>[a(ie,{name:"permissions"},{default:n(()=>[(w(!0),q(oe,null,se(le(T),e=>(w(),q("div",{key:e.name,class:"q-mb-lg"},[i("h2",{id:e.name,class:"text-h6 q-mb-sm"},f(s.$t(e.name)),9,de),i("p",null,f(s.$t(e.name+"PermissionHelp")),1),i("div",ue,[i("div",pe,[a(b,{label:e.granted?s.$t("common.permissionGranted"):s.$t("common.requestPermission"),color:e.granted?"positive":"primary",onClick:c=>S(e.name),class:"full-width",disable:e.granted},null,8,["label","color","onClick","disable"])]),i("div",fe,[a(b,{label:s.$t("common.howToEnable"),color:"secondary",outline:"",onClick:c=>M(e.name),class:"full-width"},null,8,["label","onClick"])])])]))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),a(y,{modelValue:_.value,"onUpdate:modelValue":l[2]||(l[2]=e=>_.value=e)},{default:n(()=>[a(P,{style:{width:"700px","max-width":"80vw"}},{default:n(()=>[a(p,{class:"row items-center q-pb-none"},{default:n(()=>[i("div",ve,f(s.$t("common.helpVideo")),1),a(C),V(a(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[Q]])]),_:1}),a(p,null,{default:n(()=>[i("div",he,[i("iframe",{src:g.value,frameborder:"0",allowfullscreen:""},null,8,_e)])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(y,{modelValue:d.value,"onUpdate:modelValue":l[3]||(l[3]=e=>d.value=e)},{default:n(()=>[a(P,{style:{width:"700px","max-width":"80vw"}},{default:n(()=>[a(p,{class:"row items-center q-pb-none"},{default:n(()=>[i("div",be,f(s.$t("common.platformSpecificHelp")),1),a(C),V(a(b,{icon:"close",flat:"",round:"",dense:""},null,512),[[Q]])]),_:1}),a(p,null,{default:n(()=>[i("div",{innerHTML:H.value},null,8,ge)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});var He=X(we,[["__scopeId","data-v-5a3a0460"]]);export{He as default};