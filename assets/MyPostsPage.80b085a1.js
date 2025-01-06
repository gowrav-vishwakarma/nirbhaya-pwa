import{z as nt,u as it,A as rt,e as S,r as d,w as De,N as yt,D as r,R as q,S as c,T as n,al as _e,V as u,aM as Ae,ag as Ye,Y as j,ae as We,ax as ut,X as k,an as Qe,$ as A,bw as wt,E as v,au as Z,at as B,ao as Ke,W as oe,af as Fe,aO as _t,bx as bt,aj as je,ai as qe,a0 as x,av as kt,aK as et,aP as Ct,aI as xt,aL as Ut,ap as Xe,aJ as $t,G as ct,F as we,aQ as Lt,aq as St,bm as It,a1 as be,aN as le,H as Pt,B as Oe,v as tt,M as qt,bn as Vt,U as Ve,Z as Dt,ay as st,bt as at,aG as At,a3 as Mt,by as Tt,bz as Nt,bA as ot,am as He,az as zt,bB as Bt,bC as lt}from"./index.168e4218.js";const Et={class:"row items-center q-mb-md"},Rt={class:"q-ml-md"},Qt={class:"text-weight-bold"},Ft={class:"q-mt-sm row q-gutter-xs"},jt={class:"q-mt-md"},Ot={class:"text-caption q-mb-sm"},Ht={class:"row q-mt-lg"},Yt={class:"row items-center"},Wt={key:0,class:"row q-mt-md q-gutter-x-sm"},Xt={class:"absolute-top-right q-pa-xs"},Gt={key:1,class:"row q-mt-md q-gutter-x-sm"},Jt={class:"absolute-top-right q-pa-xs"},Zt={style:{"font-size":"14px","font-weight":"800"}},Kt="https://xavoc-technocrats-pvt-ltd.blr1.cdn.digitaloceanspaces.com/",es=nt({__name:"EditPostDialog",props:{modelValue:{type:Boolean},post:{}},emits:["update:modelValue","post-updated"],setup(Me,{emit:H}){var Se,X;const b=Me,I=H,$=it(),E=rt(),C=S({get:()=>b.modelValue,set:l=>I("update:modelValue",l)}),m=d({title:b.post.title,description:b.post.description,tags:b.post.tags||[],showLocation:b.post.showLocation,location:b.post.location?{type:"Point",coordinates:[b.post.location.x,b.post.location.y]}:null,businessCategory:b.post.businessCategory||null}),D=d(b.post.mediaUrls||[]),de=d([]),K=d(""),V=d([]),P=d([]),Y=d(!1),ae=d(!1),O=d(null),ne=d(!1),ke=d(!1),ie=d(b.post.location?"post-location":null);d([{id:0,name:"Current Location"},...((X=(Se=$.user)==null?void 0:Se.locations)==null?void 0:X.map(l=>({id:Math.random(),name:l.name,location:l.location,isBusinessLocation:l.isBusinessLocation})))||[],...b.post.location?[{id:Math.random(),name:"Post Location",location:{type:"Point",coordinates:[b.post.location.x,b.post.location.y]},isBusinessLocation:b.post.isBusinessPost}]:[],{id:-1,name:"Select on Map"}]);const W=d(b.post.isBusinessPost||!1),Ce=S(()=>m.value.title.length),re=S(()=>m.value.description.length),ue=S(()=>m.value.tags.length<5),me=S(()=>T.value<4),Te=S(()=>{var l,s;return((s=(l=$.user)==null?void 0:l.locations)==null?void 0:s.some(o=>o.isBusinessLocation))||!1}),ce=S(()=>{const l=m.value.title.trim().length>0,s=m.value.description.trim().length>0,o=m.value.title.length<=50&&m.value.description.length<=1e3;return l&&s&&o}),xe=()=>{const l=K.value.trim().toLowerCase();l&&!m.value.tags.includes(l)&&ue.value&&m.value.tags.push(l),K.value=""},M=l=>{m.value.tags=m.value.tags.filter(s=>s!==l)},Ne=()=>{if(Y.value=!0,!O.value){const l=document.createElement("input");l.type="file",l.accept="image/jpeg,image/png,image/gif,image/webp,image/heic,image/heif",l.multiple=!0,l.onchange=async s=>{const o=s.target.files;if(o){const w=4-T.value,h=Array.from(o).slice(0,w);try{for(const g of h){if(!g.type.match(/^image\/(jpeg|png|gif|webp|heic|heif)$/)){E.notify({color:"negative",message:"Only image files are allowed",icon:"error",position:"top-right"});continue}const N=await Ue(g),Q=new File([N],g.name,{type:g.type});V.value.push(Q);const F=URL.createObjectURL(N);P.value.push(F)}}catch(g){console.error("Error processing images:",g),E.notify({color:"negative",message:"Error processing images",icon:"error",position:"top-right"})}}Y.value=!1},l.oncancel=()=>{Y.value=!1},O.value=l}me.value?O.value.click():Y.value=!1},ve=l=>{URL.revokeObjectURL(P.value[l]),V.value.splice(l,1),P.value.splice(l,1)},Ue=l=>new Promise((s,o)=>{const w=new FileReader;w.onload=h=>{var N;const g=new Image;g.onload=()=>{const Q=document.createElement("canvas");let F=g.width,z=g.height;const ge=F/z,G=1048576,te=1920,se=1080;F>te&&(F=te,z=F/ge),z>se&&(z=se,F=z*ge),Q.width=F,Q.height=z,Q.getContext("2d").drawImage(g,0,0,F,z);let Ie=.7;const fe=he=>{Q.toBlob(ye=>{if(!ye){o(new Error("Failed to create blob"));return}ye.size>G&&he>.1?fe(he-.1):s(ye)},"image/jpeg",he)};fe(Ie)},g.src=(N=h.target)==null?void 0:N.result},w.readAsDataURL(l)}),_=S(()=>{if(!m.value.location)return"No location set";if(m.value.location.type==="Point"){const[l,s]=m.value.location.coordinates;return`${s}, ${l}`}return"No location set"}),R=async l=>{m.value.location=l,ne.value=!1;const s=`custom-${Date.now()}`,o={id:s,name:"Custom Location",location:l,isBusinessLocation:!1};ee.value=ee.value.filter(w=>!w.id.toString().startsWith("custom-")),ee.value.push(o),ie.value=s};De(()=>ie.value,async l=>{if(l===-1){ne.value=!0;return}if(l===0)try{const s=await yt.getCurrentPosition();m.value.location={type:"Point",coordinates:[s.coords.longitude,s.coords.latitude]}}catch(s){console.error("Error getting current location:",s),E.notify({color:"negative",message:"Failed to get current location",icon:"error",position:"top-right"})}else{const s=ee.value.find(o=>o.id===l);s!=null&&s.location&&(m.value.location=s.location,s.isBusinessLocation&&(W.value=!0))}});const T=S(()=>D.value.length+V.value.length),$e=l=>{const s=D.value[l];de.value.push(s),D.value.splice(l,1)},ze=async()=>{var l,s,o,w;try{ae.value=!0;const h=new FormData;h.append("postId",b.post.id.toString()),h.append("title",m.value.title),h.append("description",m.value.description),h.append("postType","community"),h.append("status","active"),m.value.location&&h.append("location",JSON.stringify(m.value.location)),h.append("showLocation",String(m.value.showLocation)),h.append("tags",JSON.stringify(m.value.tags)),h.append("userId",String((l=$.user)==null?void 0:l.id)),h.append("userName",W.value?((s=$.user)==null?void 0:s.businessName)||"":((o=$.user)==null?void 0:o.name)||""),h.append("isBusinessPost",String(W.value)),h.append("deletedImages",JSON.stringify(de.value)),W.value&&(h.append("businessCategory",m.value.businessCategory),(w=$.user)!=null&&w.whatsappNumber&&h.append("whatsappNumber",$.user.whatsappNumber)),V.value.forEach((g,N)=>{h.append(`media_${N}`,g)}),await we.post("/posts/post-update",h,{headers:{"Content-Type":"multipart/form-data"}}),C.value=!1,I("post-updated"),E.notify({color:"positive",message:"Post updated successfully",icon:"check",position:"top-right"})}catch(h){console.error("Error updating post:",h),E.notify({color:"negative",message:"Failed to update post",icon:"error",position:"top-right"})}finally{ae.value=!1}},Be=l=>{if(!l||l.length!==2)return"";const[s,o]=l;return`${o}, ${s}`},ee=S(()=>{var l,s;return[{id:0,name:"Current Location"},...((s=(l=$.user)==null?void 0:l.locations)==null?void 0:s.map(o=>({id:Math.random(),name:o.name||"Saved Location",location:o.location,isBusinessLocation:o.isBusinessLocation})))||[],...b.post.location?[{id:"post-location",name:"Post Location",location:{type:"Point",coordinates:[b.post.location.x,b.post.location.y]},isBusinessLocation:b.post.isBusinessPost}]:[],{id:-1,name:"Select on Map"}]}),pe=S(()=>Lt.reduce((s,o,w)=>[...s,{group:o.group,id:`group_${w}`,value:`group_${w}`,label:`group_${w}`},...o.options.map((h,g)=>({...h,groupName:o.group,id:`${w}_${g}`}))],[])),Le=(l,s)=>{if(l===""){s(()=>{});return}s(()=>{const o=l.toLowerCase(),w=pe.value.filter(g=>{var N,Q;return g.group?!0:((N=g.label)==null?void 0:N.toLowerCase().includes(o))||((Q=g.groupName)==null?void 0:Q.toLowerCase().includes(o))}),h=new Set(w.filter(g=>!g.group).map(g=>g.groupName));return w.filter(g=>!g.group||h.has(g.group))})};return(l,s)=>(r(),q($t,{modelValue:C.value,"onUpdate:modelValue":s[8]||(s[8]=o=>C.value=o),maximized:"","transition-show":"slide-up","transition-hide":"slide-down"},{default:c(()=>[n(Xe,{class:"column"},{default:c(()=>[n(_e,{class:"row items-center q-pb-none"},{default:c(()=>[s[9]||(s[9]=u("div",{class:"text-h6"},"Edit Post",-1)),n(Ae),Ye(n(j,{icon:"close",flat:"",round:"",dense:""},null,512),[[St]])]),_:1}),n(We,{class:"q-my-md"}),n(_e,{class:"col q-pt-none scroll"},{default:c(()=>[u("div",Et,[n(ut,{size:"40px"},{default:c(()=>s[10]||(s[10]=[u("img",{src:"/sos_logo_1080_1080.png"},null,-1)])),_:1}),u("div",Rt,[u("div",Qt,k(l.post.userName),1),n(j,{dense:"",flat:"",size:"sm",icon:"fas fa-globe-americas",label:"Public"})])]),n(Qe,{modelValue:m.value.title,"onUpdate:modelValue":s[0]||(s[0]=o=>m.value.title=o),label:"Title",class:"q-mb-md",maxlength:"50",rules:[o=>o.length<=50||"Title cannot exceed 50 characters"]},{hint:c(()=>[A(k(Ce.value)+"/50 characters ",1)]),_:1},8,["modelValue","rules"]),n(Qe,{outlined:"",modelValue:m.value.description,"onUpdate:modelValue":s[1]||(s[1]=o=>m.value.description=o),type:"textarea",label:"Description",placeholder:"What do you want to share?",autogrow:"",class:"description-input q-mb-md","input-style":{minHeight:"150px",fontSize:"16px",lineHeight:"1.5"},rows:6,maxlength:"1000",rules:[o=>o.length<=1e3||"Description cannot exceed 1000 characters"]},{hint:c(()=>[A(k(re.value)+"/1000 characters ",1)]),_:1},8,["modelValue","rules"]),n(Qe,{modelValue:K.value,"onUpdate:modelValue":s[2]||(s[2]=o=>K.value=o),label:"Add tags (press Enter to add)",onKeyup:wt(xe,["enter"]),class:"q-mt-md",disable:!ue.value,hint:ue.value?"Add up to 5 tags":"Maximum tags limit reached"},{append:c(()=>[n(j,{round:"",dense:"",flat:"",icon:"add",onClick:xe,disable:!ue.value},null,8,["disable"])]),_:1},8,["modelValue","disable","hint"]),u("div",Ft,[(r(!0),v(B,null,Z(m.value.tags,o=>(r(),q(It,{key:o,removable:"",onRemove:w=>M(o),color:"primary","text-color":"white"},{default:c(()=>[A(" #"+k(o),1)]),_:2},1032,["onRemove"]))),128))]),u("div",jt,[u("div",Ot," Current Location: "+k(_.value),1),n(Ke,{modelValue:ie.value,"onUpdate:modelValue":s[3]||(s[3]=o=>ie.value=o),options:ee.value,"option-value":"id","option-label":"name",label:"Select New Location","emit-value":"","map-options":"",class:"q-mb-md",loading:ke.value,disable:ke.value},{prepend:c(()=>[n(oe,{name:"location_on"})]),option:c(o=>[n(Fe,_t(bt(o.itemProps)),{default:c(()=>[n(je,null,{default:c(()=>[n(qe,null,{default:c(()=>[A(k(o.opt.name),1)]),_:2},1024),o.opt.location?(r(),q(qe,{key:0,caption:""},{default:c(()=>[A(k(Be(o.opt.location.coordinates)),1)]),_:2},1024)):x("",!0)]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","loading","disable"]),n(kt,{modelValue:ne.value,"onUpdate:modelValue":s[4]||(s[4]=o=>ne.value=o),onLocationSelected:R,"initial-location":m.value.location},null,8,["modelValue","initial-location"]),Te.value?(r(),q(et,{key:0,modelValue:W.value,"onUpdate:modelValue":s[5]||(s[5]=o=>W.value=o),label:"Business Post",class:"q-mb-md"},null,8,["modelValue"])):x("",!0),n(et,{modelValue:m.value.showLocation,"onUpdate:modelValue":s[6]||(s[6]=o=>m.value.showLocation=o),label:"Show location on post",class:"q-mb-md"},null,8,["modelValue"]),W.value?(r(),q(Ke,{key:1,modelValue:m.value.businessCategory,"onUpdate:modelValue":s[7]||(s[7]=o=>m.value.businessCategory=o),options:pe.value,label:"Select Business Category",class:"q-mb-md","emit-value":"","map-options":"",filter:Le,rules:[o=>!!o||"Please select a category"]},{"no-option":c(()=>[n(Fe,null,{default:c(()=>[n(je,{class:"text-grey"},{default:c(()=>s[11]||(s[11]=[A(" No results found ")])),_:1})]),_:1})]),option:c(o=>[o.opt.group?(r(),q(qe,{header:"",class:"text-weight-bold bg-grey-2 q-pa-sm",key:o.opt.id},{default:c(()=>[A(k(o.opt.group),1)]),_:2},1024)):(r(),q(Fe,Ct({key:1},o.itemProps,{key:o.opt.id}),{default:c(()=>[n(je,null,{default:c(()=>[n(qe,null,{default:c(()=>[A(k(o.opt.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040))]),_:1},8,["modelValue","options","rules"])):x("",!0)]),u("div",Ht,[n(j,{flat:"",color:"primary",class:"full-width",onClick:Ne,loading:Y.value,disable:Y.value||!me.value},{default:c(()=>[u("div",Yt,[n(oe,{name:"far fa-image",size:"24px",class:"q-mr-sm"}),A(" "+k(Y.value?"Processing...":`Add Photo (${T.value}/4)`),1)])]),_:1},8,["loading","disable"])]),P.value.length>0?(r(),v("div",Wt,[(r(!0),v(B,null,Z(P.value,(o,w)=>(r(),v("div",{key:w,class:be([{"col-6":P.value.length<=2,"col-4":P.value.length===3,"col-3":P.value.length===4},"relative-position"])},[n(le,{src:o,class:"rounded-borders",style:{"aspect-ratio":"1","object-fit":"cover"}},{default:c(()=>[u("div",Xt,[n(j,{round:"",dense:"",color:"grey-7",icon:"close",size:"sm",onClick:h=>ve(w)},null,8,["onClick"])])]),_:2},1032,["src"])],2))),128))])):x("",!0),D.value.length>0?(r(),v("div",Gt,[(r(!0),v(B,null,Z(D.value,(o,w)=>(r(),v("div",{key:"existing-"+w,class:be([{"col-6":D.value.length<=2,"col-4":D.value.length===3,"col-3":D.value.length===4},"relative-position"])},[n(le,{src:Kt+o,class:"rounded-borders",style:{"aspect-ratio":"1","object-fit":"cover"}},{default:c(()=>[u("div",Jt,[n(j,{round:"",dense:"",color:"grey-7",icon:"close",size:"sm",onClick:h=>$e(w)},null,8,["onClick"])])]),_:2},1032,["src"])],2))),128))])):x("",!0)]),_:1}),n(We),n(xt,{align:"right",class:"q-pa-md"},{default:c(()=>[n(j,{unelevated:"",color:"primary",disable:!ce.value||ae.value,onClick:ze,class:"full-width",loading:ae.value},{loading:c(()=>[n(Ut)]),default:c(()=>[u("span",Zt,k(ae.value?"Updating...":"Update"),1)]),_:1},8,["disable","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}});var ts=ct(es,[["__scopeId","data-v-75906011"]]);const ss={key:0,class:"container q-pa-md"},as={class:"row items-center",style:{"padding-top":"5px","padding-left":"10px"}},os={class:"row items-center justify-between q-pa-md q-pt-none full-width"},ls={class:"col-12"},ns={key:0,class:"text-h5 text-weight-bold q-my-none text-primary full-width"},is={key:0,class:"business-info"},rs={style:{"font-size":"15px"},class:"text-grey-7 q-mt-none q-mb-none"},us={key:0,class:"q-mb-lg",style:{"margin-top":"-15px"}},cs={class:"row items-center no-wrap"},ds={class:"row full-width items-center text-left"},ms={key:1,class:"row justify-center q-pa-md"},vs={key:2,class:"row justify-center q-pa-xl"},ps={class:"text-center"},gs={key:3,class:"row q-col-gutter-y-md",style:{"margin-top":"-30px"}},fs={class:"row items-center"},hs=["src"],ys={class:"q-ml-md"},ws={class:"text-weight-bold text-capitalize",style:{"font-size":"16px"}},_s={class:"text-caption text-grey-7 row items-center"},bs=["onClick"],ks={class:"post-header"},Cs={class:"text-h5 text-weight-bold text-primary q-mb-sm",style:{"font-size":"16px"}},xs={class:"text-body1 post-description"},Us=["innerHTML"],$s={class:"post-actions"},Ls=["onClick"],Ss={key:1,class:"business-category"},Is={key:0,class:"hashtags-container"},Ps=["onClick"],qs={key:0,class:"video-container"},Vs=["src","id"],Ds={key:1,class:"media-section"},As={class:"carousel-dots"},Ms=["onClick"],Ts={class:"carousel-counter"},Ns={key:1,class:"media-collage"},zs={key:1,class:"two-images-grid"},Bs={key:2,class:"multi-images-grid"},Es={class:"main-image-container"},Rs={class:"secondary-images-container"},Qs={key:0,class:"see-all-overlay"},Fs={class:"text-white text-weight-bold"},js={key:0,class:"col-12 flex justify-center q-pa-md"},Os={key:1,class:"col-12 text-center q-pa-md text-grey-7"},Hs={key:1,class:"q-pt-lg q-px-md"},Ys={class:"text-h5 q-pa-sm"},J="https://xavoc-technocrats-pvt-ltd.blr1.cdn.digitaloceanspaces.com/",Ws=nt({__name:"MyPostsPage",props:{id:{}},setup(Me){const H=Me,b=S(()=>H.id);console.log("userId...........",b.value,H.id);const I=d(null),$=it(),E=rt(),C=d([]),m=d({dailyLikeLimit:0,dailyCommentLimit:0,dailyPostLimit:0,usedLikeCount:0,usedCommentCount:0,usedPostCount:0}),D=d({}),de=d({}),K=d(!0),V=d(null),P=d(!1),Y=Pt(),ae=t=>{if(!t)return"Recent";console.log("Input date:",t);try{const e=lt.extractDate(t,"YYYY-MM-DD HH:mm:ss");if(!e||isNaN(e.getTime()))return console.error("Invalid date after parsing:",e),"Invalid date";const p=new Date().getTime()-e.getTime(),y=Math.floor(p/1e3),a=Math.floor(y/60),L=Math.floor(a/60),f=Math.floor(L/24);if(y<60&&y>=0)return"Just now";if(a<60&&a>=0)return`${a} ${a===1?"minute":"minutes"} ago`;if(L<24&&L>=0)return`${L} ${L===1?"hour":"hours"} ago`;if(f<7&&f>=0)return`${f} ${f===1?"day":"days"} ago`;const U={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0};return lt.formatDate(e,"YYYY-MM-DDTHH:mm:ss.SSSZ")}catch(e){return console.error("Error formatting date:",e),"Date error"}},O=async(t=!1)=>{var e,i;if(!(te.value||!t&&!G.value))try{te.value=!0;const p=await we.get("/posts/my-posts",{params:{status:"active",userId:Number(H.id)===((e=$.user)==null?void 0:e.id)?(i=$.user)==null?void 0:i.id:H.id,page:z.value,limit:ge.value}});p.data.user&&(I.value=p.data.user);let y=[];Array.isArray(p.data.posts)?y=p.data.posts:p.data.data.posts&&Array.isArray(p.data.data.posts)&&(y=p.data.data.posts);const a=y.map(L=>({...L,wasLiked:L.wasLiked||L.liked||!1,liked:L.wasLiked||L.liked||!1}));t?C.value=[...C.value,...a]:C.value=a,G.value=a.length===ge.value,G.value&&z.value++}catch(p){console.error("Error loading posts:",p),E.notify({color:"negative",message:"Failed to load posts",icon:"error",position:"top-right"})}finally{te.value=!1,K.value=!1}},ne=(t,e)=>{if(!t)return"";const i=t.split(" ");return i.length<=e?t:i.slice(0,e).join(" ")+"..."},ke=t=>{const e=typeof t=="string"?t:t.toString();D.value[e]=!D.value[e]},ie=t=>{console.log("Tag clicked:",t)},W=t=>{if(!t)return"";if(t.length===11)return`https://www.youtube.com/embed/${t}`;let e="";return t.includes("youtube.com/watch")?e=new URL(t).searchParams.get("v")||"":t.includes("youtu.be/")?e=t.split("youtu.be/")[1]:t.includes("youtube.com/embed/")&&(e=t.split("youtube.com/embed/")[1]),e=e.split("&")[0],`https://www.youtube.com/embed/${e}`},Ce=(t,e)=>`${W(e)}?enablejsapi=1&rel=0&modestbranding=1&mute=1`,re=(t,e)=>{const i=document.getElementById(`video-${t}`);if(i&&i.contentWindow)try{i.contentWindow.postMessage(JSON.stringify({event:"command",func:e==="play"?"playVideo":"pauseVideo",args:[]}),"*")}catch(p){console.error("Error controlling video:",p)}},ue=t=>({handler:e=>{if(!e)return!1;try{const i=e.boundingClientRect,p=window.innerHeight,y=i.top+i.height/2,a=p/2,f=Math.abs(y-a)<100,U=e.isIntersecting;return de.value[t]=U&&f,U&&f?(V.value!==null&&V.value!==t&&(re(V.value,"pause"),de.value[V.value]=!1),re(t,"play"),V.value=t):V.value===t&&(re(t,"pause"),V.value=null),!0}catch(i){return console.error("Error in intersection handler:",i),!1}},cfg:{threshold:[0,.25,.5,.75,1],rootMargin:"-30% 0px"}}),me=t=>{const e=t instanceof Date?t:new Date(t),i=new Date;let p=i.getFullYear()-e.getFullYear();const y=i.getMonth()-e.getMonth();return(y<0||y===0&&i.getDate()<e.getDate())&&p--,p};Oe(async()=>{var e;const t=(e=$.user)==null?void 0:e.dob;t?P.value=me(t)>=13:P.value=!1,await O()}),tt(()=>{V.value!==null&&re(V.value,"pause")});const Te=()=>{if(!!m.value){if(m.value.usedPostCount>=m.value.dailyPostLimit){console.log("1111111111111111"),E.notify({message:`You've reached your daily post limit of ${m.value.dailyPostLimit} posts`,color:"gray",position:"top-right"});return}ce.value=!0}},ce=d(!1),xe=async()=>{z.value=1,G.value=!0,await O(),ce.value=!1,await fe()},M=d(null),Ne=d(0);S(()=>_.value===T.value-1);const ve=(t,e)=>{const i=typeof t=="string"?parseInt(t,10):t;M.value=i.toString(),_.value=e;const p=C.value.find(y=>y.id===i);if(p&&p.mediaUrls){const y={postId:i,startIndex:e+1,totalImages:Array.isArray(p.mediaUrls)?p.mediaUrls.length:1,allImages:Array.isArray(p.mediaUrls)?p.mediaUrls.map((a,L)=>({index:L+1,url:J+a,isActive:L===e})):[{index:1,url:J+p.mediaUrls,isActive:!0}],activeDot:e};console.log("Carousel Opened:",y)}},Ue=()=>{M.value=null,Ne.value=0,_.value=0},_=d(0),R=d(!1),T=S(()=>{const t=C.value.find(e=>e.id.toString()===M.value);return t?Array.isArray(t.mediaUrls)?t.mediaUrls.length:1:0}),$e=S(()=>{const t=C.value.find(e=>e.id.toString()===M.value);return t!=null&&t.mediaUrls?{current:_.value+1,total:Array.isArray(t.mediaUrls)?t.mediaUrls.length:1}:{current:0,total:0}}),ze=S(()=>g.value?g.value-1:_.value),Be=t=>{R.value||(R.value=!0,_.value=t,g.value=t+1,console.log("Go To Slide:",{index:t+1,total:T.value,currentVisible:g.value}),setTimeout(()=>{R.value=!1},300))},ee=()=>{R.value||(R.value=!0,_.value=(_.value-1+T.value)%T.value,g.value=_.value+1,console.log("Previous Slide:",{newIndex:_.value+1,currentVisible:g.value}),setTimeout(()=>{R.value=!1},300))},pe=()=>{R.value||(R.value=!0,_.value=(_.value+1)%T.value,g.value=_.value+1,console.log("Next Slide:",{newIndex:_.value+1,currentVisible:g.value}),setTimeout(()=>{R.value=!1},300))};Oe(()=>{window.addEventListener("keydown",Le)}),tt(()=>{window.removeEventListener("keydown",Le)});const Le=t=>{if(!!M.value)switch(t.key){case"ArrowLeft":ee();break;case"ArrowRight":pe();break;case"Escape":Ue();break}},Se=S(()=>({transform:`translate3d(-${_.value*100}%, 0, 0)`,willChange:"transform"})),X=d(0),l=d(0),s=d(null),o=t=>{X.value=t.touches[0].clientX,s.value&&(s.value.style.transition="none")},w=t=>{if(!X.value||!s.value)return;const e=t.touches[0].clientX,i=X.value-e,p=-(_.value*100)-i/s.value.offsetWidth*100;s.value.style.transform=`translate3d(${p}%, 0, 0)`,l.value=e},h=()=>{if(!X.value||!l.value||!s.value)return;s.value.style.transition="transform 0.3s ease-out";const t=X.value-l.value,e=s.value.offsetWidth*.2;Math.abs(t)>e?t>0&&_.value<T.value-1?pe():t<0&&_.value>0?ee():s.value.style.transform=`translate3d(-${_.value*100}%, 0, 0)`:s.value.style.transform=`translate3d(-${_.value*100}%, 0, 0)`,X.value=0,l.value=0},g=d(null),N=d([]),Q=t=>({handler:e=>{if(!e)return!1;if(e.isIntersecting){const i=C.value.find(y=>y.id.toString()===M.value),p={index:t+1,total:T.value,isIntersecting:e.isIntersecting,intersectionRatio:e.intersectionRatio,currentImage:i!=null&&i.mediaUrls?Array.isArray(i.mediaUrls)?i.mediaUrls[t]:i.mediaUrls:null,activeDot:_.value,postId:M.value};console.log("Image Data:",p),g.value=t+1}return!0},cfg:{threshold:[.5]}});De(_,t=>{const e=C.value.find(i=>i.id.toString()===M.value);console.log("Carousel State:",{currentIndex:t+1,totalImages:T.value,activeDot:t,currentImage:e!=null&&e.mediaUrls?Array.isArray(e.mediaUrls)?e.mediaUrls[t]:e.mediaUrls:null,postId:M.value})});const F=async t=>{const e=C.value.findIndex(i=>i.id===t.id);e!==-1&&(C.value[e]={...t,wasLiked:t.wasLiked||t.liked,liked:t.wasLiked||t.liked},await fe())},z=d(1),ge=d(3),G=d(!0),te=d(!1),se=d(null),Ge=()=>{const t=new IntersectionObserver(async([e])=>{(e==null?void 0:e.isIntersecting)&&G.value&&!te.value&&await O(!0)},{rootMargin:"100px"});return se.value&&t.observe(se.value),()=>{se.value&&t.unobserve(se.value)}};De(()=>C.value,()=>{qt(()=>{Ge()})});const Ie=async()=>{var t;try{const e=await we.get(`/posts/user-interaction/${(t=$.user)==null?void 0:t.id}`);e.data&&(m.value=e.data)}catch(e){console.error("Error fetching user interaction rules:",e)}},fe=async()=>{var t;try{const e=await we.get(`/posts/user-interaction/${(t=$.user)==null?void 0:t.id}`);m.value=e.data}catch(e){console.error("Error updating interaction rules:",e)}};d(!1),d({type:"current",latitude:null,longitude:null,name:"",address:""});const he=t=>{E.dialog({title:"Confirm Delete",message:"Are you sure you want to delete this post?",cancel:!0,persistent:!0}).onOk(async()=>{var e;try{await we.post("/posts/delete-post",{postId:t,userId:(e=$.user)==null?void 0:e.id}),C.value=C.value.filter(i=>i.id!==t),E.notify({color:"black",message:"Post deleted successfully",icon:"check",position:"top-right"})}catch(i){console.error("Error deleting post:",i),E.notify({color:"negative",message:"Failed to delete post",icon:"error",position:"top-right"})}})},ye=Vt();De(()=>H.id,async t=>{t&&(z.value=1,C.value=[],G.value=!0,K.value=!0,await O(),await Ie())},{immediate:!0}),Oe(async()=>{var e;const t=(e=$.user)==null?void 0:e.dob;t?P.value=me(t)>=13:P.value=!1,ye.params.id&&(await O(),await Ie())});const Je=async t=>{var e,i;if(((e=t.location)==null?void 0:e.x)&&((i=t.location)==null?void 0:i.y))try{const p=`https://www.google.com/maps/dir/?api=1&destination=${t.location.y},${t.location.x}&travelmode=driving`;window.open(p,"_blank")}catch(p){const y=`https://www.google.com/maps?q=${t.location.y},${t.location.x}`;window.open(y,"_blank"),console.error("Error getting current location:",p)}else{const p=`https://www.google.com/maps?q=${t.location.y},${t.location.x}`;window.open(p,"_blank")}},dt=t=>t===void 0?"View location":t<1?`${Math.round(t*1e3)}m away`:`${t.toFixed(1)}km away`,mt=(t,e)=>{if(!t)return"";const i=/(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9._-]+\.[a-zA-Z]{2,6}(\/[^\s]*)?)/g;return!e||e==="low"?t:t.replace(i,y=>{let a=y;return y.startsWith("www.")?a="https://"+y:y.startsWith("http")||(a="https://"+y),`<a href="${a}" target="_blank" rel="noopener noreferrer" class="post-link">${y}</a>`})},vt=t=>{var e;if(t.isBusinessPost)return"business-post";switch((e=t.priority)==null?void 0:e.toLowerCase()){case"high":return"high-priority-post";case"medium":return"medium-priority-post";case"regular":return"regular-post";default:return""}},Ze=d(!1),Ee=d(null),pt=async()=>{await O(),Ee.value=null},gt=t=>t?t.replace(/_/g," ").split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1).toLowerCase()).join(" "):"",Pe=d(null),Re=d(!1),ft=t=>{I.value&&(Pe.value={id:t,name:I.value.businessName||I.value.name},Re.value=!0)};return(t,e)=>(r(),v(B,null,[(r(),q(Mt,{class:"bg-grey-1",style:{"padding-top":"env(safe-area-inset-top)"},key:b.value},{default:c(()=>{var i,p,y;return[P.value?(r(),v("div",ss,[u("div",as,[n(j,{size:"sm",flat:"",class:"back-button",onClick:e[0]||(e[0]=a=>Ve(Y).go(-1))},{default:c(()=>e[7]||(e[7]=[u("i",{style:{"font-size":"14px"},class:"fa-solid fa-arrow-left-long"},null,-1)])),_:1})]),u("div",os,[u("div",ls,[I.value?(r(),v("h4",ns,[A(k(I.value.name)+" ",1),(i=I.value)!=null&&i.businessName?(r(),v("div",is,[u("p",rs,[e[9]||(e[9]=u("span",{style:{"font-size":"12px","font-weight":"400"}},"Business Name : ",-1)),A(" "+k(I.value.businessName)+" ",1),n(Ae),I.value.hasCatalog?(r(),q(Dt,{key:0,color:"primary",class:"q-ml-sm catalog-badge cursor-pointer",align:"middle",onClick:e[1]||(e[1]=a=>ft(I.value.id))},{default:c(()=>[n(st,null,{default:c(()=>e[8]||(e[8]=[A("View Catalog")])),_:1}),n(oe,{name:"shopping_cart",size:"18px",class:"q-mr-xs"})]),_:1})):x("",!0)])])):x("",!0)])):x("",!0),e[10]||(e[10]=u("p",{class:"text-grey-7 q-mt-none"}," Stay connected with your community ",-1))])]),((p=Ve($).user)==null?void 0:p.canCreatePost)&&Number(H.id)===Number((y=Ve($).user)==null?void 0:y.id)?(r(),v("div",us,[n(Xe,{class:"create-post-card q-pa-md"},{default:c(()=>[u("div",cs,[n(j,{class:"col post-input-btn",flat:"",color:"grey-7"},{default:c(()=>[u("div",ds,[e[12]||(e[12]=u("span",{class:"text-grey-7",style:{"font-size":"0.8em"}},"What's Post on your mind?",-1)),n(Ae),n(j,{color:"primary",class:"q-ml-sm suggestion-btn",onClick:Te},{default:c(()=>e[11]||(e[11]=[u("span",{style:{"font-size":"20px","font-weight":"800","padding-right":"5px"}}," + ",-1),u("span",{class:"text-capitalize",style:{"font-weight":"800","padding-top":"1px"}}," Create ",-1)])),_:1})])]),_:1})])]),_:1})])):x("",!0),K.value?(r(),v("div",ms,[n(at,{color:"primary",size:"40"})])):C.value.length?(r(),v("div",gs,[(r(!0),v(B,null,Z(C.value,(a,L)=>(r(),v("div",{key:a.id,class:"col-12",ref_for:!0,ref:L===C.value.length-1?f=>{se.value=f}:void 0},[n(Xe,{flat:"",class:be(["post-card",vt(a)])},{default:c(()=>[n(_e,{class:"q-pb-none"},{default:c(()=>{var f;return[u("div",fs,[n(ut,{size:"48px",class:"shadow-2"},{default:c(()=>[u("img",{src:I.value.profileImage?J+I.value.profileImage:"/profile.png",style:{"object-fit":"cover"}},null,8,hs)]),_:1}),u("div",ys,[u("div",ws,k(a.userName=="SOS Bharat Community"?"SOS Bharat Community":a.userName),1),u("div",_s,[n(oe,{name:"schedule",size:"xs",class:"q-mr-xs"}),u("span",null,k(ae(a.createdAt)),1),a.location?(r(),v(B,{key:0},[n(We,{vertical:"",spaced:"sm",class:"q-mx-sm"}),n(oe,{name:"place",size:"xs",class:"q-mr-xs cursor-pointer",onClick:U=>Je(a)},null,8,["onClick"]),u("span",{class:"cursor-pointer",onClick:U=>Je(a)},k(a.distance?dt(a.distance):"View location"),9,bs)],64)):x("",!0)])]),n(Ae),Number((f=Ve($).user)==null?void 0:f.id)==Number(H.id)?(r(),q(j,{key:0,flat:"",round:"",color:"grey-7",icon:"delete",size:"sm",onClick:U=>he(a.id)},{default:c(()=>[n(st,null,{default:c(()=>e[14]||(e[14]=[A("Delete Post")])),_:1})]),_:2},1032,["onClick"])):x("",!0)])]}),_:2},1024),n(_e,{style:{padding:"10px 10px 0px 10px"}},{default:c(()=>[u("div",ks,[u("div",Cs,k(a.title),1)]),u("div",xs,[u("div",{innerHTML:mt(D.value[a.id.toString()]?a.description||"":ne(a.description||"",15),a.priority)},null,8,Us),u("div",$s,[a.description&&a.description.split(" ").length>10?(r(),v("span",{key:0,onClick:f=>ke(a.id),class:"read-more-link"},k(D.value[a.id.toString()]?"Read Less":"Read More"),9,Ls)):x("",!0),a.businessCategory?(r(),v("div",Ss,k(gt(a.businessCategory)),1)):x("",!0)])]),a.tags&&a.tags.length?(r(),v("div",Is,[(r(!0),v(B,null,Z(a.tags,f=>(r(),v("span",{key:f,class:"hashtag",onClick:U=>ie(f)}," #"+k(f),9,Ps))),128))])):x("",!0)]),_:2},1024),a.mediaUrls||a.videoUrl?(r(),q(_e,{key:0,class:"q-pa-none q-mt-md"},{default:c(()=>[a.videoUrl?Ye((r(),v("div",qs,[(r(),v("iframe",{key:Ce(a.id.toString(),a.videoUrl),src:Ce(a.id.toString(),a.videoUrl),id:`video-${a.id}`,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",class:"video-frame"},null,8,Vs))])),[[ot,ue(a.id.toString())]]):a.mediaUrls&&a.mediaUrls.length?(r(),v("div",Ds,[M.value===a.id.toString()?(r(),v(B,{key:0},[u("div",As,[(r(!0),v(B,null,Z($e.value.total,f=>(r(),v("button",{key:f,class:be(["dot",{active:ze.value===f-1}]),onClick:He(U=>Be(f-1),["stop"])},null,10,Ms))),128))]),u("div",Ts,k(g.value)+" / "+k($e.value.total),1),u("button",{class:"carousel-close",onClick:He(Ue,["stop"])},e[15]||(e[15]=[u("i",{class:"material-icons"},"close",-1)])),u("div",{class:"custom-carousel",ref_for:!0,ref_key:"carousel",ref:s,onTouchstart:o,onTouchmove:w,onTouchend:h},[u("div",{class:"carousel-inner",style:zt(Se.value)},[(r(!0),v(B,null,Z(Array.isArray(a.mediaUrls)?a.mediaUrls.map(f=>J+f):[J+a.mediaUrls],(f,U)=>Ye((r(),v("div",{key:U,class:be(["carousel-slide",{active:_.value===U}]),ref_for:!0,ref_key:"carouselImages",ref:N},[n(le,{src:f,alt:`Image ${U+1}`,class:"carousel-image",onClick:e[2]||(e[2]=He(()=>{},["stop"])),fit:"contain"},null,8,["src","alt"])],2)),[[ot,Q(U)]])),128))],4)],544)],64)):(r(),v("div",Ns,[!Array.isArray(a.mediaUrls)||a.mediaUrls.length===1?(r(),q(le,{key:0,src:J+(Array.isArray(a.mediaUrls)?a.mediaUrls[0]:a.mediaUrls),class:"single-image",fit:"contain"},null,8,["src"])):a.mediaUrls.length===2?(r(),v("div",zs,[(r(!0),v(B,null,Z(a.mediaUrls,(f,U)=>(r(),v("div",{key:U,class:"grid-image-container"},[n(le,{src:J+f,class:"grid-image",onClick:ht=>ve(a.id,U)},null,8,["src","onClick"])]))),128))])):(r(),v("div",Bs,[u("div",Es,[n(le,{src:J+a.mediaUrls[0],class:"main-grid-image",onClick:f=>ve(a.id,0)},null,8,["src","onClick"])]),u("div",Rs,[(r(!0),v(B,null,Z(a.mediaUrls.slice(1,3),(f,U)=>(r(),v("div",{key:U,class:"secondary-image-wrapper"},[n(le,{src:J+f,class:"secondary-grid-image",onClick:ht=>ve(a.id,U+1)},{default:c(()=>[U===1&&a.mediaUrls.length>3?(r(),v("div",Qs,[u("span",Fs,"+"+k(a.mediaUrls.length-3),1)])):x("",!0)]),_:2},1032,["src","onClick"])]))),128))])]))]))])):x("",!0),n(Bt,{post:a,userInteractionRules:m.value,"onUpdate:post":e[3]||(e[3]=f=>F(f))},null,8,["post","userInteractionRules"])]),_:2},1024)):x("",!0)]),_:2},1032,["class"])]))),128)),te.value?(r(),v("div",js,[n(at,{color:"primary",size:"40"})])):x("",!0),!G.value&&C.value.length>0?(r(),v("div",Os," No more posts to load ")):x("",!0)])):(r(),v("div",vs,[u("div",ps,[n(oe,{name:"inbox",size:"48px",color:"grey-5"}),e[13]||(e[13]=u("p",{class:"text-grey-7 q-mt-sm"},"No posts available",-1))])]))])):(r(),v("div",Hs,[n(At,{dense:"","inline-actions":"",class:"text-white bg-primary",style:{"border-radius":"10px"}},{default:c(()=>[u("div",Ys,[n(oe,{flat:"",color:"white",name:"warning"}),e[16]||(e[16]=u("span",null," Access Denied: You must be at least 13 years old to view this page. ",-1))])]),_:1})]))]}),_:1})),P.value?(r(),q(Tt,{key:0,modelValue:ce.value,"onUpdate:modelValue":e[4]||(e[4]=i=>ce.value=i),onPostCreated:xe},null,8,["modelValue"])):x("",!0),Ee.value?(r(),q(ts,{key:1,modelValue:Ze.value,"onUpdate:modelValue":e[5]||(e[5]=i=>Ze.value=i),post:Ee.value,onPostUpdated:pt},null,8,["modelValue","post"])):x("",!0),Pe.value?(r(),q(Nt,{key:2,"user-id":Pe.value.id,"user-name":Pe.value.name,"is-open":Re.value,"onUpdate:isOpen":e[6]||(e[6]=i=>Re.value=i)},null,8,["user-id","user-name","is-open"])):x("",!0)],64))}});var Gs=ct(Ws,[["__scopeId","data-v-e58df48c"]]);export{Gs as default};
