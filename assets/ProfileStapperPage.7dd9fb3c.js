import{z as ne,A as le,I as ie,u as de,r as $,e as M,w as ue,B as me,D as x,E as B,V as o,T as l,S as b,X as _,U as a,an as j,W as te,ag as Ve,Y as q,ao as ae,R,aK as _e,at as pe,af as ge,aj as he,$ as H,ai as ye,aO as $e,aP as qe,a0 as D,av as we,am as Le,bt as ve,F as Q,M as Be,aQ as Pe,aq as Ue,G as fe,au as xe,ae as ke,al as Ne,ax as Se,ay as Ce,ap as ce,H as Ie,bn as De,t as Ee,a1 as K,az as Ae}from"./index.168e4218.js";import{Q as Fe,a as Re,S as Te}from"./SearchCity.8f76d389.js";import{Q as Ge}from"./QForm.5b8ff544.js";import{u as Me}from"./use-form.7267c9e0.js";const Qe={class:"profile-details-step"},Oe={class:"scrollable-inputs q-px-md"},je={class:"custom-input"},We={class:"custom-input"},ze={class:"custom-input"},Ye={class:"row items-center justify-end"},Ke={class:"custom-input"},He={class:"custom-input"},Je={class:"custom-input"},Xe={class:"custom-input"},Ze={class:"custom-input"},eo={class:"custom-input"},oo={class:"custom-input"},so={class:"custom-input"},ao={class:"custom-input"},to={class:"custom-input"},no={key:0,class:"location-display"},lo={class:"q-px-md q-px-md q-py-sm text-center",style:{border:"none !important"}},io=ne({__name:"ProfileDetailsStep",emits:["update-profile","next-step"],setup(se,{emit:Z}){const c=le(),{t:n}=ie(),N=de(),d=Z,u=["Andhra Pradesh","Arunachal Pradesh","Telangana","Assam","Bihar","Uttar Pradesh","Gujarat","Goa","Haryana","Himachal Pradesh","Jammu and Kashmir","Madhya Pradesh","Karnataka","Kerala","Maharashtra","Chattisgarh","Delhi","Daman and Diu","Dadra and Nagar Hav.","Manipur","Megalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura","Jharkhand","Uttarakhand","BIJAPUR(KAR)","Lakshadweep","Chandigarh","Pondicherry","Andaman and Nico.In.","West Bengal"],h=$([...u]),L=["Girl/Woman (18-35)","Woman (35+)","Senior Woman (60+)","Boy/Man (18-35)","Man (35+)","Senior Man (60+)","Child (Under 18)","Prefer not to say"],f=[{label:n("common.hospital"),value:"hospital"},{label:n("common.doctorGeneral"),value:"doctorGeneral"},{label:n("common.doctorEmergency"),value:"doctorEmergency"},{label:n("common.mechanic2Wheeler"),value:"mechanic2Wheeler"},{label:n("common.mechanic4Wheeler"),value:"mechanic4Wheeler"},{label:n("common.mechanicBoth"),value:"mechanicBoth"},{label:n("common.nurse"),value:"nurse"},{label:n("common.tech"),value:"tech"},{label:n("common.student"),value:"student"},{label:n("common.freelancer"),value:"freelancer"},{label:n("common.onlineSeller"),value:"onlineSeller"},{label:n("common.handicraftMaker"),value:"handicraftMaker"},{label:n("common.tailor"),value:"tailor"},{label:n("common.beautician"),value:"beautician"},{label:n("common.foodSeller"),value:"foodSeller"},{label:n("common.artsMediaDesigner"),value:"artsMediaDesigner"},{label:n("common.skilledTradesWorker"),value:"skilledTradesWorker"},{label:n("common.shopOwner"),value:"shopOwner"},{label:n("common.techITProfessional"),value:"techITProfessional"},{label:n("common.healthcareMedicalWorker"),value:"healthcareMedicalWorker"},{label:n("common.socialWorker"),value:"socialWorker"},{label:n("common.privateSectorEmployee"),value:"privateSectorEmployee"},{label:n("common.governmentEmployee"),value:"governmentEmployee"},{label:n("common.businessOwner"),value:"businessOwner"},{label:n("common.housewife"),value:"housewife"},{label:n("common.retired"),value:"retired"},{label:n("common.unemployed"),value:"unemployed"},{label:n("common.other"),value:"other"}],I=M(()=>!!N.user.referredBy),{values:e,errors:p,isLoading:P,validateAndSubmit:J,callbacks:T}=Me(Q,"user/user-profile-update",{name:"",phoneNumber:"",city:null,state:"",dob:"",userType:"",profession:"",pincode:"",emergencyContacts:[],startAudioVideoRecordOnSos:!1,streamAudioVideoOnSos:!1,broadcastAudioOnSos:!1,referredBy:"",showBusinessInfo:!1,businessInfo:null}),W=M(()=>{const s=!!e.value.name&&!!e.value.phoneNumber&&!!e.value.dob&&!!e.value.state&&!!e.value.city&&!!e.value.userType&&!!e.value.profession&&Object.keys(p.value).length===0;return e.value.showBusinessInfo&&e.value.businessInfo?s&&!!e.value.businessInfo.businessName&&!!e.value.businessInfo.whatsappNumber&&String(e.value.businessInfo.whatsappNumber).length===10&&!!e.value.businessInfo.locationName&&!!e.value.businessInfo.latitude&&!!e.value.businessInfo.longitude&&!!e.value.businessInfo.businessCategory:s});T.beforeSubmit=s=>{var y;const t={...s,dob:s.dob||"",state:s.state||"",pincode:s.pincode||""};if(s.city&&typeof s.city=="object"){const k=s.city;t.state=k.statename,t.pincode=k.pincode,t.city=k.officename}return s.showBusinessInfo&&s.businessInfo&&"longitude"in s.businessInfo&&(t.businessName=s.businessInfo.businessName,t.whatsappNumber=s.businessInfo.whatsappNumber.toString(),t.locations=[...(((y=N.user)==null?void 0:y.locations)||[]).filter(k=>!k.isBusinessLocation)]),t};const A=async()=>{var s;if(W.value)try{if(e.value.showBusinessInfo&&e.value.businessInfo){await Q.post("/user/add-business-information",{...e.value.businessInfo,businessCategory:e.value.businessInfo.businessCategory});const t={name:e.value.businessInfo.locationName,location:{type:"Point",coordinates:[e.value.businessInfo.longitude,e.value.businessInfo.latitude]},isBusinessLocation:!0},y=[...(((s=N.user)==null?void 0:s.locations)||[]).filter(k=>!k.isBusinessLocation),t];N.updateUser({...N.user,businessName:e.value.businessInfo.businessName,whatsappNumber:e.value.businessInfo.whatsappNumber.toString(),businessCategory:e.value.businessInfo.businessCategory,locations:y})}await J(!1),c.notify({color:"black",message:n("common.profileUpdateSuccess"),icon:"check",position:"top-right"}),d("update-profile",{...e.value}),d("next-step")}catch(t){console.error("Error in form submission:",t),c.notify({color:"negative",message:n("common.profileUpdateError"),icon:"error",position:"top-right"})}else c.notify({color:"negative",message:n("common.pleaseFixErrors"),icon:"error",position:"top-right"})};T.onSuccess=s=>{var k,Y;const t=((k=N.user)==null?void 0:k.locations)||[],y={...N.user,...s.user,name:e.value.name,phoneNumber:e.value.phoneNumber,dob:e.value.dob,state:e.value.state,city:((Y=e.value.city)==null?void 0:Y.officename)||"",pincode:e.value.pincode,userType:e.value.userType,profession:e.value.profession,referredBy:e.value.referredBy,locations:t};N.updateUser(y)},T.onError=s=>(console.error("Error updating profile details:",s),c.notify({color:"negative",message:n("common.profileUpdateError"),icon:"error",position:"top-right"}),s);const g=(s,t)=>{if(s===""){t(()=>{h.value=u});return}t(()=>{const y=s.toLowerCase();h.value=u.filter(k=>k.toLowerCase().indexOf(y)>-1)})},U=s=>{s?(e.value.state=s,e.value.city=null,e.value.pincode="",delete p.value.state,p.value.city=["City Required"],Be(()=>{e.value.city=null})):(e.value.state="",e.value.city=null,e.value.pincode="",p.value.state=["State Required"],p.value.city=["City Required"])},X=s=>{s?(e.value.state=s.statename,e.value.pincode=s.pincode,e.value.city=s,delete p.value.city):(e.value.city=null,e.value.pincode="",p.value.city=["City Required"])},C=$(""),m=((s,t)=>{let y;return(...k)=>{clearTimeout(y),y=setTimeout(()=>s(...k),t)}})(async s=>{if(!s||s.length<3){delete p.value.referredBy;return}try{P.value=!0,(await Q.get(`/user/validate-referral/${s}`)).data.exists?(delete p.value.referredBy,C.value=s):p.value.referredBy=[n("common.referralIdNotFound")]}catch(t){console.error("Error validating referral ID:",t),p.value.referredBy=[n("common.referralIdValidationFailed")]}finally{P.value=!1}},500);ue(()=>e.value.referredBy,s=>{s?m(s):delete p.value.referredBy});const G=async()=>{var t;const s=N.user;if(s&&(e.value={...s},s.city&&s.state&&s.pincode&&(e.value.city={officename:s.city,statename:s.state,pincode:s.pincode}),C.value=e.value.referredBy,s.businessName)){e.value.showBusinessInfo=!0,e.value.businessInfo={businessName:s.businessName,whatsappNumber:s.whatsappNumber||"",locationName:"",latitude:0,longitude:0,businessCategory:s.businessCategory||null};const y=(t=s.locations)==null?void 0:t.find(k=>k.isBusinessLocation);y&&(e.value.businessInfo.locationName=y.name,e.value.businessInfo.longitude=y.location.coordinates[0],e.value.businessInfo.latitude=y.location.coordinates[1])}};$(!1),ue(()=>e.value.showBusinessInfo,s=>{s&&(e.value.businessInfo||(e.value.businessInfo={businessName:"",whatsappNumber:"",locationName:"",latitude:0,longitude:0,businessCategory:null}))});const O=$(!1),re=s=>{if(e.value.businessInfo){e.value.businessInfo.latitude=s.coordinates[1],e.value.businessInfo.longitude=s.coordinates[0];const t=e.value.businessInfo.locationName||"Business Location";e.value.businessInfo.locationName=t}O.value=!1},w=M(()=>e.value.businessInfo?!!(e.value.businessInfo.latitude&&e.value.businessInfo.longitude&&e.value.businessInfo.locationName):!1),v=M(()=>{if(!e.value.businessInfo)return"";const{latitude:s,longitude:t}=e.value.businessInfo;return!s||!t?"":`${s.toFixed(6)}, ${t.toFixed(6)}`}),V=M(()=>{const s=new Date;s.setFullYear(s.getFullYear()-150);const t=s.getFullYear(),y=String(s.getMonth()+1).padStart(2,"0");return`${t}/${y}`}),S=M(()=>{const s=new Date;s.setFullYear(s.getFullYear()-13);const t=s.getFullYear(),y=String(s.getMonth()+1).padStart(2,"0");return`${t}/${y}`}),F=M(()=>Pe.reduce((t,y,k)=>[...t,{group:y.group,id:`group_${k}`,value:`group_${k}`},...y.options.map((Y,E)=>({...Y,groupName:y.group,id:`${k}_${E}`}))],[])),z=(s,t)=>{if(s===""){t(()=>{});return}t(()=>{const y=s.toLowerCase(),k=F.value.filter(E=>{var ee,oe;return E.group?!0:((ee=E.label)==null?void 0:ee.toLowerCase().includes(y))||((oe=E.groupName)==null?void 0:oe.toLowerCase().includes(y))}),Y=new Set(k.filter(E=>!E.group).map(E=>E.groupName));return k.filter(E=>!E.group||Y.has(E.group))})};return me(()=>{var s;G(),(s=e.value)!=null&&s.dob&&(e.value.dob=new Date(e.value.dob).toISOString().split("T")[0])}),(s,t)=>(x(),B("div",Qe,[o("div",Oe,[l(Ge,{onSubmit:Le(A,["prevent"]),class:"q-gutter-md"},{default:b(()=>{var y,k,Y,E,ee,oe,be;return[o("div",je,[o("label",null,_(a(n)("common.name")),1),l(j,{modelValue:a(e).name,"onUpdate:modelValue":t[0]||(t[0]=r=>a(e).name=r),rules:[r=>!!r||a(n)("common.nameRequired")],error:!!a(p).name,"error-message":(y=a(p).name)==null?void 0:y.join("; "),filled:"",class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":""},null,8,["modelValue","rules","error","error-message"])]),o("div",We,[o("label",null,_(a(n)("common.mobileNumber")),1),l(j,{modelValue:a(e).phoneNumber,"onUpdate:modelValue":t[1]||(t[1]=r=>a(e).phoneNumber=r),filled:"",class:"custom-radius","bg-color":"pink-1",dense:"",disable:"",readonly:"","hide-bottom-space":""},null,8,["modelValue"])]),o("div",ze,[o("label",null,_(a(n)("common.dob")),1),l(j,{filled:"",modelValue:a(e).dob,"onUpdate:modelValue":t[3]||(t[3]=r=>a(e).dob=r),mask:"date",error:!!a(p).dob,"error-message":(k=a(p).dob)==null?void 0:k.join("; "),class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":"",rules:[r=>!!r||"Date of birth is required"],"fill-mask":!0,"input-class":"text-left",readonly:""},{append:b(()=>[l(te,{name:"event",class:"cursor-pointer"},{default:b(()=>[l(Fe,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:b(()=>[l(Re,{modelValue:a(e).dob,"onUpdate:modelValue":t[2]||(t[2]=r=>a(e).dob=r),"navigation-min-year-month":V.value,"navigation-max-year-month":S.value,"default-year-month":S.value},{default:b(()=>[o("div",Ye,[Ve(l(q,{label:"ok",color:"primary",flat:""},null,512),[[Ue]])])]),_:1},8,["modelValue","navigation-min-year-month","navigation-max-year-month","default-year-month"])]),_:1})]),_:1})]),_:1},8,["modelValue","error","error-message","rules"])]),o("div",Ke,[o("label",null,_(a(n)("common.state")),1),l(ae,{modelValue:a(e).state,"onUpdate:modelValue":[t[4]||(t[4]=r=>a(e).state=r),U],options:h.value,filled:"",class:"custom-radius","bg-color":"pink-1",dense:"",clearable:"","use-input":"","input-debounce":"0",onFilter:g,error:!!a(p).state,"error-message":(Y=a(p).state)==null?void 0:Y.join("; "),"hide-bottom-space":"",behavior:"menu"},null,8,["modelValue","options","error","error-message"])]),o("div",He,[o("label",null,_(a(n)("common.city")),1),(x(),R(Te,{modelValue:a(e).city,"onUpdate:modelValue":[t[5]||(t[5]=r=>a(e).city=r),X],error:(E=a(p).city)==null?void 0:E.join("; "),"selected-state":a(e).state||"",disabled:!a(e).state,key:a(e).state,"hide-bottom-space":""},null,8,["modelValue","error","selected-state","disabled"]))]),o("div",Je,[o("label",null,_(a(n)("common.userType")),1),l(ae,{modelValue:a(e).userType,"onUpdate:modelValue":t[6]||(t[6]=r=>a(e).userType=r),options:L,filled:"",class:"custom-radius","bg-color":"pink-1",dense:"",error:!!a(p).userType,"error-message":(ee=a(p).userType)==null?void 0:ee.join("; "),"hide-bottom-space":""},null,8,["modelValue","error","error-message"])]),o("div",Xe,[o("label",null,_(a(n)("common.profession")),1),l(ae,{modelValue:a(e).profession,"onUpdate:modelValue":t[7]||(t[7]=r=>a(e).profession=r),options:f,filled:"",class:"custom-radius","bg-color":"pink-1",dense:"",error:!!a(p).profession,"error-message":(oe=a(p).profession)==null?void 0:oe.join("; "),"map-options":"","emit-value":"","option-value":"value","option-label":"label","hide-bottom-space":""},null,8,["modelValue","error","error-message"])]),o("div",Ze,[o("label",null,_(a(n)("common.referredBy")),1),l(j,{modelValue:a(e).referredBy,"onUpdate:modelValue":t[8]||(t[8]=r=>a(e).referredBy=r),filled:"",class:"custom-radius","bg-color":"pink-1",dense:"",error:!!a(p).referredBy,"error-message":(be=a(p).referredBy)==null?void 0:be.join("; "),loading:a(P),"hide-bottom-space":"",clearable:"",disable:I.value},null,8,["modelValue","error","error-message","loading","disable"])]),o("div",eo,[l(_e,{modelValue:a(e).showBusinessInfo,"onUpdate:modelValue":t[9]||(t[9]=r=>a(e).showBusinessInfo=r),label:a(n)("common.addBusinessInfo")},null,8,["modelValue","label"])]),a(e).showBusinessInfo&&a(e).businessInfo?(x(),B(pe,{key:0},[o("div",oo,[o("label",null,_(a(n)("common.businessName")),1),l(j,{modelValue:a(e).businessInfo.businessName,"onUpdate:modelValue":t[10]||(t[10]=r=>a(e).businessInfo.businessName=r),rules:[r=>!!r||a(n)("common.businessNameRequired")],filled:"",class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":""},null,8,["modelValue","rules"])]),o("div",so,[o("label",null,_(a(n)("common.whatsappNumber")),1),l(j,{modelValue:a(e).businessInfo.whatsappNumber,"onUpdate:modelValue":t[11]||(t[11]=r=>a(e).businessInfo.whatsappNumber=r),type:"number",rules:[r=>!!r||a(n)("common.whatsappRequired"),r=>String(r).length===10||a(n)("common.phoneLength")],filled:"",class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":"",prefix:"+91",onKeydown:t[12]||(t[12]=r=>{a(e).businessInfo.whatsappNumber&&a(e).businessInfo.whatsappNumber.toString().length>=10&&r.key!=="Backspace"&&r.key!=="Delete"&&r.preventDefault()}),maxlength:"10"},null,8,["modelValue","rules"])]),o("div",ao,[o("label",null,_(a(n)("common.businessCategory")),1),l(ae,{modelValue:a(e).businessInfo.businessCategory,"onUpdate:modelValue":t[13]||(t[13]=r=>a(e).businessInfo.businessCategory=r),options:F.value,filled:"",class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":"","option-value":"value","option-label":"label","map-options":"",filter:z,rules:[r=>!!r||"Business category is required"],"emit-value":""},{"no-option":b(()=>[l(ge,null,{default:b(()=>[l(he,{class:"text-grey"},{default:b(()=>t[17]||(t[17]=[H(" No results found ")])),_:1})]),_:1})]),option:b(r=>[r.opt.group?(x(),R(ye,{key:0,header:"",class:"text-weight-bold bg-grey-2 q-pa-sm"},{default:b(()=>[H(_(r.opt.group),1)]),_:2},1024)):(x(),R(ge,$e(qe({key:1},r.itemProps)),{default:b(()=>[l(he,null,{default:b(()=>[l(ye,null,{default:b(()=>[H(_(r.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040))]),_:1},8,["modelValue","options","rules"])]),o("div",to,[o("label",null,_(a(n)("common.businessLocation")),1),l(j,{modelValue:a(e).businessInfo.locationName,"onUpdate:modelValue":t[14]||(t[14]=r=>a(e).businessInfo.locationName=r),rules:[r=>!!r||a(n)("common.locationRequired")],filled:"",class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":"",placeholder:"e.g., Shop No. 123, Building Name"},null,8,["modelValue","rules"]),l(q,{icon:"my_location",color:w.value?"grey":"primary",class:"full-width q-mt-md",onClick:t[15]||(t[15]=r=>O.value=!0)},{default:b(()=>[H(_(w.value?a(n)("common.updateLocation"):a(n)("common.setLocation")),1)]),_:1},8,["color"]),w.value?(x(),B("div",no,[l(te,{name:"place",size:"xs",class:"q-mr-xs"}),H(" "+_(v.value),1)])):D("",!0)]),l(we,{modelValue:O.value,"onUpdate:modelValue":t[16]||(t[16]=r=>O.value=r),onLocationSelected:re},null,8,["modelValue"])],64)):D("",!0)]}),_:1})]),o("div",lo,[l(q,{label:a(n)("common.next"),type:"submit",color:"primary",class:"next-button q-mt-xs",disable:!W.value,loading:a(P),onClick:A,style:{"border-radius":"10px !important",height:"40px"}},{loading:b(()=>[l(ve)]),default:b(()=>[t[18]||(t[18]=o("i",{class:"fa-solid fa-arrow-right-long q-ml-sm"},null,-1))]),_:1},8,["label","disable","loading"])])]))}});var ro=fe(io,[["__scopeId","data-v-95c8377c"]]);const uo={class:"emergency-contacts-step"},co={class:"scrollable-inputs q-px-md"},mo={key:0,class:"input-fields"},po={class:"custom-input"},vo={class:"custom-input"},fo={class:"custom-input"},bo={class:"row q-col-gutter-sm"},go={class:"col-6"},ho={class:"col-6"},yo={key:2,class:"contact-cards q-mt-md"},_o={class:"col-auto"},wo={class:"col"},xo={class:"text-subtitle2 row items-center"},ko={class:"text-caption"},No={class:"row items-center"},So={class:"col-auto q-ml-auto"},Co={key:3,class:"text-negative q-mt-sm"},Io={class:"q-px-md button-container"},Vo={class:"row full-width q-col-gutter-sm"},$o={class:"col-6"},qo={class:"col-6"},Lo=ne({__name:"EmergencyContactsStep",props:{contacts:{}},emits:["update-contacts","previous-step","submit","next-step"],setup(se,{emit:Z}){const{t:c}=ie(),n=se,N=Z,d=le(),u=de(),h=$(n.contacts.length?[...n.contacts]:[]),L=$(!1),f=$({name:"",phone:"",relationship:void 0,avatar:"",is_primary:!1}),I=$(!1),e=$(""),p=async()=>{f.value.phone&&await P(f.value.phone)},P=async C=>{try{return C===u.user.phoneNumber?(e.value=c("common.cantAddOwnNumber"),d.notify({color:"negative",message:c("common.cantAddOwnNumber"),icon:"error",position:"top-right"}),!1):(await Q.post("auth/validate-phone",{phoneNumber:C})).data.isValid?(e.value="",!0):(e.value=c("common.userNotRegisteredInApp"),d.notify({color:"negative",message:c("common.userNotRegisteredInApp"),icon:"error",position:"top-right"}),!1)}catch(i){return console.error("Error validating phone number:",i),e.value=c("common.phoneValidationError"),!1}},J=async()=>{if(f.value.name&&f.value.phone){if(h.value.some(m=>m.phone===f.value.phone)){e.value=c("common.phoneNumberAlreadyExists"),d.notify({color:"negative",message:c("common.phoneNumberAlreadyExists"),icon:"error",position:"top-right"});return}if(!await P(f.value.phone))return;try{await Q.post("user/emergency-contacts-add",{emergencyContacts:[{contactName:f.value.name,contactPhone:f.value.phone,relationship:f.value.relationship,isAppUser:!0,priority:0,consentGiven:!1,is_primary:f.value.is_primary}]}),h.value.push({name:f.value.name,phone:f.value.phone,relationship:f.value.relationship,avatar:f.value.avatar,consentGiven:!1,is_primary:f.value.is_primary}),u.updateUser({...u.user,emergencyContacts:h.value.map(m=>({contactName:m.name,contactPhone:m.phone,relationship:m.relationship,isAppUser:!0,priority:0,consentGiven:m.consentGiven||!1,is_primary:m.is_primary||!1}))}),e.value="",T()}catch(m){console.error("Error adding emergency contact:",m),e.value=c("common.errorAddingContact"),d.notify({color:"negative",message:c("common.errorAddingContact"),icon:"error",position:"top-right"})}}else d.notify({color:"negative",message:c("common.fillRequiredFields"),icon:"error",position:"top-right"})},T=()=>{f.value={name:"",phone:"",relationship:void 0,avatar:"",is_primary:!1},e.value="",I.value=!1},W=async C=>{try{const i=h.value[C];await Q.post("/user/emergency-contact",{userId:u.user.id,contactPhone:i.phone}),h.value.splice(C,1),u.updateUser({...u.user,emergencyContacts:h.value.map(m=>({contactName:m.name,contactPhone:m.phone,relationship:m.relationship,isAppUser:!0,priority:0,consentGiven:m.consentGiven||!1,is_primary:m.is_primary||!1}))}),d.notify({color:"black",message:c("common.contactDeletedSuccessfully"),icon:"check",position:"top-right"}),await U()}catch(i){console.error("Error deleting emergency contact:",i),d.notify({color:"negative",message:c("common.errorDeletingContact"),icon:"error",position:"top-right"})}},A=async()=>{try{if(L.value=!0,!h.value.every(i=>i.name&&i.phone)){d.notify({color:"negative",message:c("common.fillRequiredFields"),icon:"error",position:"top-right"});return}await Q.post("user/emergency-contacts-add",{emergencyContacts:h.value.map(i=>({contactName:i.name,contactPhone:i.phone,relationship:i.relationship||void 0,isAppUser:!0,priority:0,consentGiven:i.consentGiven||!1,is_primary:i.is_primary||!1}))}),u.updateUser({...u.user,emergencyContacts:h.value.map(i=>({contactName:i.name,contactPhone:i.phone,relationship:i.relationship||void 0,isAppUser:!0,priority:0,consentGiven:i.consentGiven||!1,is_primary:i.is_primary||!1}))}),N("update-contacts",h.value),N("submit"),N("next-step")}catch(C){console.error("Error updating emergency contacts:",C),d.notify({color:"negative",message:c("common.emergencyContactsUpdateError"),icon:"error"})}finally{L.value=!1}},g=()=>{const C=u.user.emergencyContacts||[];h.value=C.map(i=>({name:i.contactName,phone:i.contactPhone,relationship:i.relationship,consentGiven:i.consentGiven,is_primary:i.is_primary}))},U=async()=>{try{g();const i=(await Q.get("/user/emergency-contacts-status")).data;h.value=h.value.map(m=>{const G=i.find(O=>O.contactPhone===m.phone);return{...m,consentGiven:G?G.consentGiven:!1,is_primary:G?G.is_primary:!1}})}catch(C){console.error("Error loading contacts data:",C)}};me(async()=>{await U()});const X=M(()=>h.value.length>0);return(C,i)=>(x(),B("div",uo,[i[8]||(i[8]=o("h5",{class:"text-h6 q-mb-sm q-px-md q-mt-md q-ma-none"}," Emergency Contacts ",-1)),i[9]||(i[9]=o("p",{class:"q-px-md q-ma-none q-mb-sm"},"Add Your emergency contacts below.",-1)),o("div",co,[l(q,{icon:"add",color:"primary",class:"full-width custom-radius q-mb-md",onClick:i[0]||(i[0]=m=>I.value=!I.value),label:a(c)("common.addEmergencyContact"),style:{"border-radius":"10px !important"}},null,8,["label"]),I.value?(x(),B("div",mo,[o("div",po,[o("label",null,_(a(c)("common.name")),1),l(j,{modelValue:f.value.name,"onUpdate:modelValue":i[1]||(i[1]=m=>f.value.name=m),rules:[m=>!!m||a(c)("common.nameRequired")],filled:"",class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":""},null,8,["modelValue","rules"])]),o("div",vo,[o("label",null,_(a(c)("common.mobileNumber")),1),l(j,{modelValue:f.value.phone,"onUpdate:modelValue":i[2]||(i[2]=m=>f.value.phone=m),rules:[m=>!!m||a(c)("common.phoneRequired"),m=>m.length===10||a(c)("common.invalidPhoneNumberLength")],error:!!e.value,"error-message":e.value,filled:"",class:"custom-radius","bg-color":"pink-1",dense:"",type:"tel",mask:"##########","hide-bottom-space":"",onBlur:p},null,8,["modelValue","rules","error","error-message"])]),o("div",fo,[l(_e,{modelValue:f.value.is_primary,"onUpdate:modelValue":i[3]||(i[3]=m=>f.value.is_primary=m),label:"Set as primary contact"},null,8,["modelValue"])]),o("div",bo,[o("div",go,[l(q,{label:"Cancel",color:"black",style:{"border-radius":"10px !important"},class:"full-width custom-radius",onClick:T})]),o("div",ho,[l(q,{label:"Add",color:"primary",style:{"border-radius":"10px !important"},class:"full-width custom-radius",onClick:J})])])])):D("",!0),I.value?(x(),R(ke,{key:1,class:"q-mt-md"})):D("",!0),X.value?(x(),B("div",yo,[(x(!0),B(pe,null,xe(h.value,(m,G)=>(x(),R(ce,{key:G,flat:"",bordered:"",class:"contact-card q-mb-sm"},{default:b(()=>[l(Ne,{class:"row items-center",style:{width:"100%"}},{default:b(()=>[o("div",_o,[l(Se,null,{default:b(()=>i[5]||(i[5]=[o("img",{src:"/profile.png",alt:"/profile.png"},null,-1)])),_:1})]),o("div",wo,[o("div",xo,[H(_(m.name)+" ",1),m.is_primary?(x(),R(te,{key:0,name:"check_circle",color:"positive",size:"xs",class:"q-ml-sm"},{default:b(()=>[l(Ce,null,{default:b(()=>i[6]||(i[6]=[H("Primary Contact")])),_:1})]),_:1})):D("",!0)]),o("div",ko,_(m.phone),1),o("div",No,[o("div",null," Approval Status: ("+_(m.consentGiven?"Approve":"Pending")+") ",1)])]),o("div",So,[l(q,{class:"remove-btn",flat:"",label:"Remove",style:{"border-radius":"10px !important"},onClick:O=>W(G)},null,8,["onClick"])])]),_:2},1024)]),_:2},1024))),128))])):(x(),B("p",Co,_(a(c)("common.noEmergencyContacts")),1))]),o("div",Io,[o("div",Vo,[o("div",$o,[l(q,{label:"Previous",color:"grey",flat:"",class:"full-width custom-radius",onClick:i[4]||(i[4]=m=>C.$emit("previous-step")),style:{"border-radius":"10px !important"}})]),o("div",qo,[l(q,{label:"Next",color:"primary",class:"full-width custom-radius",loading:L.value,onClick:A,style:{"border-radius":"10px !important",height:"40px"}},{loading:b(()=>[l(ve)]),default:b(()=>[i[7]||(i[7]=o("i",{class:"fa-solid fa-arrow-right-long q-ml-sm"},null,-1))]),_:1},8,["loading"])])])])]))}});var Bo=fe(Lo,[["__scopeId","data-v-7caeefa4"]]);const Po={class:"emergency-contacts-step"},Uo={class:"text-h6 q-mb-sm q-px-md q-mt-md q-ma-none"},Do={class:"q-px-md q-ma-none q-mb-sm"},Eo={class:"scrollable-inputs q-px-md"},Ao={key:1,class:"input-fields"},Fo={class:"custom-input"},Ro={class:"custom-input"},To={key:0,class:"text-caption q-mt-sm"},Go={class:"row q-col-gutter-sm"},Mo={class:"col-6"},Qo={class:"col-6"},Oo={key:3,class:"contact-cards q-mt-md"},jo={class:"col-auto"},Wo={class:"col q-pl-sm"},zo={class:"text-subtitle2"},Yo={key:0,class:"text-caption"},Ko={class:"col-auto"},Ho={class:"text-center"},Jo={key:4,class:"text-negative q-mt-sm"},Xo={class:"q-px-md button-container"},Zo={class:"row full-width q-col-gutter-sm"},es={class:"col-6"},os={class:"col-6"},ss=ne({__name:"VolnteerLocationStep",emits:["prev-step","next-step","location-updated"],setup(se,{emit:Z}){const{t:c}=ie(),n=le(),N=de(),d=Ie(),u=$([]),h=$([]),L=$(!1),f=$(!1),I=$({name:"",location:{type:"Point",coordinates:[null,null]}}),e=$(!1),p=$(!1),P=$(!1),J=M(()=>u.value.length>0),T=M(()=>u.value.every(A)),W=M(()=>I.value.name.trim()!==""&&I.value.location.coordinates[0]!==null&&I.value.location.coordinates[1]!==null),A=w=>{const[v,V]=w.location.coordinates;return V!==null&&v!==null&&w.name.trim()!==""},g=w=>{const[v,V]=w.location.coordinates;return V&&v?`${c("common.coordinates")}: ${V.toFixed(6)}, ${v.toFixed(6)}`:""},U=async w=>{var v,V;try{const S=((V=(v=N.user)==null?void 0:v.locations)==null?void 0:V.filter(t=>t.isBusinessLocation))||[],F=[...u.value];F.splice(w,1);const z=[...S,...F],s=await Q.post("user/user-profile-update",{locations:z});u.value.splice(w,1),h.value.splice(w,1),N.updateUser(s.data.user)}catch(S){console.error("Error removing location:",S),n.notify({color:"negative",message:c("common.errorRemovingLocation"),icon:"error",position:"top-right"})}},X=w=>{if(w[0]===null||w[1]===null)return;const[v,V]=w,S=`https://www.google.com/maps/search/?api=1&query=${V},${v}`;window.open(S,"_blank")},C=async()=>{var w,v;if(!T.value){n.notify({color:"negative",message:c("common.pleaseSelectAllLocations"),icon:"error",position:"top-right"});return}try{f.value=!0;const S=[...((v=(w=N.user)==null?void 0:w.locations)==null?void 0:v.filter(z=>z.isBusinessLocation))||[],...u.value.filter(A)],F=await Q.post("user/user-profile-update",{...N.user,locations:S});N.updateUser(F.data.user),f.value=!1,d.push("/account")}catch(V){console.error("Error saving locations:",V),n.notify({color:"negative",message:c("common.errorSavingLocations"),icon:"error",position:"top-right"})}},i=()=>{var v;const w=((v=N.user)==null?void 0:v.locations)||[];u.value=JSON.parse(JSON.stringify(w.filter(V=>!V.isBusinessLocation))),h.value=new Array(u.value.length).fill(!1)},m=()=>{P.value=!0},G=w=>{I.value.location={type:"Point",coordinates:[w.coordinates[0],w.coordinates[1]]},P.value=!1},O=()=>{I.value={name:"",location:{type:"Point",coordinates:[null,null]}},L.value=!1},re=async()=>{var w,v;if(!W.value){n.notify({color:"negative",message:c("common.pleaseSelectLocation"),icon:"error",position:"top-right"});return}p.value=!0;try{const S=[...((v=(w=N.user)==null?void 0:w.locations)==null?void 0:v.filter(z=>z.isBusinessLocation))||[],...u.value,{...I.value,isBusinessLocation:!1}],F=await Q.post("user/user-profile-update",{locations:S});u.value.push({...I.value,isBusinessLocation:!1}),h.value.push(!1),N.updateUser(F.data.user),O(),n.notify({color:"black",message:c("common.locationUpdated"),icon:"check",position:"top-right"})}catch(V){console.error("Error adding location:",V),n.notify({color:"negative",message:c("common.errorAddingLocation"),icon:"error"})}finally{p.value=!1}};return i(),(w,v)=>{var V;return x(),B("div",Po,[o("h5",Uo,_(a(c)("common.volunteeringSettings")),1),o("p",Do,_(a(c)("common.notificationLocationsHelp")),1),l(ce,{flat:"",bordered:"",class:"q-mb-md"}),o("div",Eo,[u.value.length<10?(x(),R(q,{key:0,icon:"add",color:"primary",class:"full-width custom-radius q-mb-md",onClick:v[0]||(v[0]=S=>(L.value=!L.value,P.value=L.value)),label:a(c)("common.addLocation"),style:{"border-radius":"10px !important"}},null,8,["label"])):D("",!0),L.value?(x(),B("div",Ao,[o("div",Fo,[o("label",null,_(a(c)("common.locationName")),1),l(j,{modelValue:I.value.name,"onUpdate:modelValue":v[1]||(v[1]=S=>I.value.name=S),filled:"",class:"custom-radius","bg-color":"pink-1",dense:"","hide-bottom-space":""},null,8,["modelValue"])]),o("div",Ro,[l(q,{flat:"",color:"white",style:{"border-radius":"10px !important"},icon:"my_location",class:"full-width custom-radius bg-primary",onClick:m,loading:e.value},{default:b(()=>[H(_(a(c)("common.selectFromMapLocation")),1)]),_:1},8,["loading"]),(V=I.value.location)!=null&&V.coordinates[0]?(x(),B("div",To,_(g(I.value)),1)):D("",!0)]),o("div",Go,[o("div",Mo,[l(q,{label:"Cancel",color:"black",style:{"border-radius":"10px !important"},class:"full-width custom-radius",onClick:O})]),o("div",Qo,[l(q,{label:"Add",color:"primary",style:{"border-radius":"10px !important"},class:"full-width custom-radius",onClick:re,disabled:!W.value,loading:p.value},null,8,["disabled","loading"])])])])):D("",!0),L.value?(x(),R(ke,{key:2,class:"q-mt-md"})):D("",!0),J.value?(x(),B("div",Oo,[(x(!0),B(pe,null,xe(u.value,(S,F)=>(x(),R(ce,{key:F,flat:"",bordered:"",class:"contact-card q-mb-sm"},{default:b(()=>[l(Ne,{class:"row items-center",style:{width:"100%"}},{default:b(()=>[o("div",jo,[l(Se,null,{default:b(()=>v[4]||(v[4]=[o("img",{src:"https://static.vecteezy.com/system/resources/thumbnails/051/222/604/small/3d-pink-location-pin-on-map-icon-png.png",alt:"/profile.png"},null,-1)])),_:1})]),o("div",Wo,[o("div",zo,_(S.name),1),A(S)?(x(),B("div",Yo,_(g(S)),1)):D("",!0)]),o("div",Ko,[o("div",Ho,[l(q,{flat:"",dense:"",round:"",class:"q-mb-0 text-blue q-mb-sm",icon:"mdi-directions",disable:!A(S),onClick:z=>X(S.location.coordinates)},{default:b(()=>[l(Ce,null,{default:b(()=>[H(_(a(c)("common.viewOnMap")),1)]),_:1})]),_:2},1032,["disable","onClick"])]),o("div",null,[l(q,{class:"remove-btn",flat:"",label:"Remove",style:{"border-radius":"10px !important"},onClick:z=>U(F)},null,8,["onClick"])])])]),_:2},1024)]),_:2},1024))),128))])):D("",!0),J.value?D("",!0):(x(),B("p",Jo," No location Added "))]),o("div",Xo,[o("div",Zo,[o("div",es,[l(q,{label:"Previous",color:"grey",flat:"",class:"full-width custom-radius",onClick:v[2]||(v[2]=S=>w.$emit("prev-step")),style:{"border-radius":"10px !important"}})]),o("div",os,[l(q,{label:"Next",color:"primary",class:"full-width custom-radius",disabled:!T.value,loading:f.value,onClick:C,style:{"border-radius":"10px !important",height:"40px"}},{loading:b(()=>[l(ve)]),default:b(()=>[v[5]||(v[5]=o("i",{class:"fa-solid fa-arrow-right-long q-ml-sm"},null,-1))]),_:1},8,["disabled","loading"])])])]),l(we,{modelValue:P.value,"onUpdate:modelValue":v[3]||(v[3]=S=>P.value=S),onLocationSelected:G},null,8,["modelValue"])])}}});var as=fe(ss,[["__scopeId","data-v-ffd2ca9e"]]);const ts={class:"profile-stepper",style:{"padding-top":"env(safe-area-inset-top)","padding-bottom":"env(safe-area-inset-bottom)"}},ns={key:0,class:"q-ma-none q-pa-none"},ls={class:"stepper-header q-px-sm",style:{margin:"0px",padding:"0px"}},is={class:"bottom-dialog",style:{"border-radius":"20px 20px 0 0 !important"}},ms=ne({__name:"ProfileStapperPage",setup(se){const Z=le(),{t:c}=ie(),n=Ie(),N=De(),d=$(1),u=$([]),h=Ee({fullName:"",email:"",phone:"",address:"",bloodGroup:""}),L=$([]),f=$({name:"",latitude:null,longitude:null}),I=g=>g?g.replace(/\//g,"-"):null,e=g=>{g.dob&&(g.dob=I(g.dob)),Object.assign(h,g)},p=()=>{d.value===1?(u.value.includes(1)||u.value.push(1),d.value=2):d.value===2?(u.value.includes(2)||u.value.push(2),d.value=3):d.value===3&&(u.value.includes(3)||u.value.push(3),n.push("/volunteer"))},P=()=>{d.value===2?d.value=1:d.value===3&&(d.value=2)},J=g=>{L.value=g},T=g=>{f.value=g},W=async()=>{try{const g={profile:{...h,dob:h.dob?I(h.dob):null},emergencyContacts:L.value,volunteerLocation:f.value};console.log("Submitting data:",g),Z.notify({color:"black",message:c("common.profileCompleted"),icon:"check",position:"top-right"}),n.push("/dashboard")}catch(g){console.error("Error submitting data:",g),Z.notify({color:"negative",message:c("common.errorSavingProfile"),icon:"error",position:"top-right"})}};ue([h,L,f],([g,U,X])=>{Object.values(g).every(C=>!!C)&&(u.value.includes(1)||u.value.push(1)),U.length>0&&(u.value.includes(2)||u.value.push(2)),X.latitude&&X.longitude&&(u.value.includes(3)||u.value.push(3))});const A=$(!1);return me(()=>{const g=Number(N.query.stap);if(console.log("stepFromQuery....",N.query),g&&g>=1&&g<=3){A.value=!0,d.value=g;for(let U=1;U<g;U++)u.value.includes(U)||u.value.push(U)}}),(g,U)=>(x(),B("div",ts,[A.value?(x(),B("div",ns,[l(q,{flat:"",color:"primary",style:{"border-radius":"20px"},to:"/"},{default:b(()=>[l(te,{name:"mdi-keyboard-backspace"})]),_:1})])):D("",!0),o("div",{style:Ae({padding:"20px",height:"20v",marginTop:A.value?"-20px":"0px"})},[U[0]||(U[0]=o("h6",{style:{margin:"0px","font-weight":"800"},class:"q-mx-sm text-primary"}," Profile Details ",-1)),o("div",ls,[o("div",{class:K(["step-item",{active:d.value===1}])},[o("div",{class:K(["step-label",{"active-label":d.value===1,"completed-label":u.value.includes(1),"inactive-label":d.value!==1&&!u.value.includes(1)}])}," Profile Details ",2),o("div",{class:K(["step-label",{active:d.value===1,completed:u.value.includes(1),inactive:d.value!==1&&!u.value.includes(1)}]),style:{width:"100px",height:"4px",margin:"auto","border-radius":"20px","margin-top":"3px"}},null,2)],2),o("div",{class:K(["step-item",{active:d.value===2}])},[o("div",{class:K(["step-label",{"active-label":d.value===2,"completed-label":u.value.includes(2),"inactive-label":d.value!==2&&!u.value.includes(2)}])}," Emergency Cont. ",2),o("div",{class:K(["step-label",{active:d.value===2,completed:u.value.includes(2),inactive:d.value!==2&&!u.value.includes(2)}]),style:{width:"100px",height:"4px",margin:"auto","border-radius":"20px","margin-top":"3px"}},null,2)],2),o("div",{class:K(["step-item",{active:d.value===3}])},[o("div",{class:K(["step-label",{"active-label":d.value===3,"completed-label":u.value.includes(3),"inactive-label":d.value!==3&&!u.value.includes(3)}])}," Volunteer ",2),o("div",{class:K(["step-label",{active:d.value===3,completed:u.value.includes(3),inactive:d.value!==3&&!u.value.includes(3)}]),style:{width:"100px",height:"4px",margin:"auto","border-radius":"20px","margin-top":"3px"}},null,2)],2)])],4),o("div",is,[d.value===1?(x(),R(ro,{key:0,userData:h,onUpdateProfile:e,onNextStep:p},null,8,["userData"])):D("",!0),d.value===2?(x(),R(Bo,{key:1,contacts:L.value,onUpdateContacts:J,onPreviousStep:P,onNextStep:p},null,8,["contacts"])):D("",!0),d.value===3?(x(),R(as,{key:2,onLocationUpdated:T,onPrevStep:P,onNextStep:W})):D("",!0)])]))}});export{ms as default};