import{u as s,r as c,B as u,v as f,F as d}from"./index.168e4218.js";const a=s();function g(){const e=c(0);let o=null;const n=async()=>{if(!!a.isLoggedIn)try{const t=await d.get("/notifications/unread-count");e.value=t.data}catch(t){console.error("Error fetching unread notification count:",t)}},r=(t=6e4)=>{n(),o=window.setInterval(n,t)},i=()=>{o&&window.clearInterval(o)};return u(()=>{a.user&&r()}),f(()=>{i()}),{unreadNotificationCount:e,fetchUnreadNotificationCount:n,startNotificationCountRefresh:r,stopNotificationCountRefresh:i}}export{g as u};
