import{G as j,z as G,H as K,r as h,e as w,bC as z,B as L,w as M,A as R,bU as H,D as n,E as i,V as o,T as v,S as m,U as O,Y as X,bt as C,bT as J,ag as W,at as f,au as k,a0 as d,F as Z,R as N,aN as ee,X as c,$ as _,ay as Y,az as U,ax as B}from"./index.168e4218.js";const te={class:"notifications-container",style:{"padding-top":"env(safe-area-inset-top)"}},se={class:"row items-center",style:{"padding-top":"5px","padding-left":"10px"}},ae={key:0,class:"loading"},ne={key:1,class:"no-notifications"},oe={key:2},ie={class:"notification-list",offset:250},re=["onClick"],le={class:"row no-wrap full-height"},ce={class:"col-4 image-wrapper"},de={key:1,class:"post-title-fallback"},ue={class:"col-8 q-pa-sm"},pe={class:"notification-section"},ve={class:"text-caption text-grey-8"},me={class:"text-weight-medium"},fe={class:"avatars-container"},ge=["src"],he={key:0,class:"overlapping-avatar more-count",style:`left: ${5*14}px`},_e={class:"notification-section q-mt-md"},ye={class:"text-caption text-grey-8"},xe={class:"text-weight-medium"},$e={class:"avatars-container"},we=["src"],ke={key:0,class:"overlapping-avatar more-count",style:`left: ${5*14}px`},Ne={key:0,class:"text-center q-pa-md"},Ie={key:1,style:{"background-color":"#eef2f6"},class:"text-center q-pa-sm text-grey-6"},I="https://xavoc-technocrats-pvt-ltd.blr1.cdn.digitaloceanspaces.com/",P=10,be=G({__name:"PostNotification",props:{postId:{},postImage:{}},setup(T){const b=K(),D=T,r=h([]),y=h(1),u=h(!1),g=h(!0),E=w(()=>{const t={};return r.value.forEach(e=>{e.likes.forEach(a=>{const s=z.formatDate(a.createdAt,"YYYY-MM-DD");t[s]||(t[s]={likes:[],comments:[]}),t[s].likes.push({...a,mediaUrls:e.mediaUrls,title:e.title,user:a.user||{id:a.userId,name:e.userName,email:null,profileImage:null}})}),e.comments.forEach(a=>{const s=z.formatDate(a.createdAt,"YYYY-MM-DD");t[s]||(t[s]={likes:[],comments:[]}),t[s].comments.push({...a,mediaUrls:e.mediaUrls,title:e.title,user:a.user||{id:a.userId,name:e.userName,email:null,profileImage:null}})})}),Object.keys(t).sort((e,a)=>new Date(a).getTime()-new Date(e).getTime()).reduce((e,a)=>(e[a]=t[a],e),{})}),Q=t=>{if(t.length===0)return"";const e=a=>a.split(" ")[0];return t.length===1?e(t[0].user.name):t.length===2?`${e(t[0].user.name)} and ${e(t[1].user.name)}`:t.length===3?`${e(t[0].user.name)}, ${e(t[1].user.name)} and ${e(t[2].user.name)}`:`${e(t[0].user.name)}, ${e(t[1].user.name)} and ${t.length-2} others`},S=t=>{if(t.length===0)return"";const e=a=>a.split(" ")[0];return t.length===1?e(t[0].user.name):t.length===2?`${e(t[0].user.name)} and ${e(t[1].user.name)}`:t.length===3?`${e(t[0].user.name)}, ${e(t[1].user.name)} and ${e(t[2].user.name)}`:`${e(t[0].user.name)}, ${e(t[1].user.name)} and ${t.length-2} others`},x=async t=>{try{u.value=!0;const e=await Z.get("/posts/post-notifications",{params:{page:t,limit:P,postId:D.postId}});t===1?r.value=e.data.posts:r.value=[...r.value,...e.data.posts],g.value=e.data.posts.length===P}catch(e){console.error("Error fetching notifications:",e),F.notify({type:"negative",message:"Failed to load notifications"})}finally{u.value=!1}},V=async()=>{!u.value&&g.value&&(y.value++,await x(y.value))};L(()=>{x(1)}),M(()=>D.postId,()=>{y.value=1,g.value=!0,r.value=[],x(1)}),M(r,t=>{console.log("Notifications updated:",t),console.log("Grouped notifications:",E.value)},{deep:!0}),w(()=>r.value.flatMap(t=>t.likes)),w(()=>r.value.flatMap(t=>t.comments));const F=R(),A=t=>{b.push(`/sos-bharat-community-post/${t}`)};return(t,e)=>{const a=H("infinite-scroll");return n(),i("div",te,[o("div",se,[v(X,{size:"sm",flat:"",class:"back-button",onClick:e[0]||(e[0]=s=>O(b).go(-1))},{default:m(()=>e[1]||(e[1]=[o("i",{style:{"font-size":"14px"},class:"fa-solid fa-arrow-left-long"},null,-1)])),_:1})]),e[5]||(e[5]=o("div",{class:"q-pa-sm q-pt-sm q-mb-sm"},[o("h4",{class:"q-ma-none text-primary",style:{"font-size":"20px","font-weight":"900"}}," Post Notifications ")],-1)),u.value&&!r.value.length?(n(),i("div",ae,[v(C,{color:"primary",size:"40px"})])):r.value.length===0?(n(),i("div",ne,e[2]||(e[2]=[J('<div class="text-primary" data-v-632e1889><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-632e1889><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" data-v-632e1889></path><path d="M13.73 21a2 2 0 0 1-3.46 0" data-v-632e1889></path></svg></div><div class="text-grey-6 q-mt-sm" data-v-632e1889>No notifications yet</div>',2)]))):(n(),i("div",oe,[W((n(),i("div",ie,[(n(!0),i(f,null,k(r.value,s=>{var q;return n(),i("div",{key:s.id,class:"notification-card cursor-pointer",onClick:l=>A(s.id)},[o("div",le,[o("div",ce,[((q=s.mediaUrls)==null?void 0:q.length)>0?(n(),N(ee,{key:0,src:I+s.mediaUrls[0],class:"post-thumbnail"},null,8,["src"])):(n(),i("div",de,c(s.title),1))]),o("div",ue,[o("div",pe,[o("span",ve,[s.likes.length>0?(n(),i(f,{key:0},[o("span",me,c(Q(s.likes)),1),e[3]||(e[3]=_(" liked your post "))],64)):d("",!0)])]),o("div",fe,[(n(!0),i(f,null,k(s.likes.slice(0,5),(l,$)=>(n(),N(B,{key:l.id,size:"24px",class:"overlapping-avatar",style:U(`left: ${$*14}px`)},{default:m(()=>{var p;return[v(Y,null,{default:m(()=>[_(c(l.user.name),1)]),_:2},1024),o("img",{src:(p=l.user)!=null&&p.profileImage?I+l.user.profileImage:"https://cdn.quasar.dev/img/avatar.png"},null,8,ge)]}),_:2},1032,["style"]))),128)),s.likes.length>5?(n(),i("div",he," +"+c(s.likes.length-5),1)):d("",!0)]),o("div",_e,[o("div",ye,[s.comments.length>0?(n(),i(f,{key:0},[o("span",xe,c(S(s.comments)),1),e[4]||(e[4]=_(" commented on your post "))],64)):d("",!0)]),o("div",$e,[(n(!0),i(f,null,k(s.comments.slice(0,5),(l,$)=>(n(),N(B,{key:l.id,size:"24px",class:"overlapping-avatar",style:U(`left: ${$*14}px`)},{default:m(()=>{var p;return[v(Y,null,{default:m(()=>[_(c(l.user.name),1)]),_:2},1024),o("img",{src:I+((p=l.user)==null?void 0:p.profileImage)||"https://cdn.quasar.dev/img/avatar.png"},null,8,we)]}),_:2},1032,["style"]))),128)),s.comments.length>5?(n(),i("div",ke," +"+c(s.comments.length-5),1)):d("",!0)])])])])],8,re)}),128))])),[[a,V]]),u.value?(n(),i("div",Ne,[v(C,{color:"primary",size:"24px"})])):d("",!0),!g.value&&r.value.length>0?(n(),i("div",Ie," No more notifications ")):d("",!0)]))])}}});var qe=j(be,[["__scopeId","data-v-632e1889"]]);export{qe as default};
