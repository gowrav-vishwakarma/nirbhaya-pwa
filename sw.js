if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let n={};const r=e=>a(e,d),f={module:{uri:d},exports:n,require:r};s[d]=Promise.all(c.map((e=>f[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"SOS: Shoutout"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2936689.png",revision:"17d23c0474c859d18025378b0660ae14"},{url:"Adults-on-Phones.svg",revision:"2c1665d4be9bbb1c125f70fd7aeb3b5c"},{url:"android-chrome-192x192.png",revision:"9c6c59035675aeeb315e67ea61a061b4"},{url:"android-chrome-512x512.png",revision:"a785527e9137565ffedfccad6f0f9935"},{url:"apple-touch-icon.png",revision:"d18aa9838a9f4b7a1ee39eca9aaae9e2"},{url:"assets/AboutUs.78f879aa.css",revision:"e4735f6511b6315e646edcb1aa525ba0"},{url:"assets/AboutUs.a39c5cb9.js",revision:"ea20f238e5ad552053ee0640829bd3d7"},{url:"assets/AccountDetailsPage.2147bc79.js",revision:"682e4e966bd97a3c039c0958bedd03d8"},{url:"assets/AccountDetailsPage.3c2826b8.css",revision:"35f1f8c6085a615ee9a2ab5863c7fd5a"},{url:"assets/auth.511dfe7d.js",revision:"e356a40c16c432ead93539b6963a5508"},{url:"assets/capacitor.706e2e01.js",revision:"963558f676c6d78ca7d324d399426921"},{url:"assets/ClosePopup.773b2e3d.js",revision:"845980ce8c461d0db476c0e3a94f7feb"},{url:"assets/CommunityPage.51e691df.css",revision:"682547a2dc149b5996012c7793b5ba0c"},{url:"assets/CommunityPage.59863b7d.js",revision:"e0569fe5138c5bbfb2f39e91f003b117"},{url:"assets/DashboardPage.0dd586c9.css",revision:"29a0e1790f7db54a626cb588b7893ad6"},{url:"assets/DashboardPage.6095b9c4.js",revision:"24f757a85b270fd6c88934b5db8640d3"},{url:"assets/EmergencyContacts.2ac8f372.css",revision:"92a3a7cc3c889439185628ac4c0b0507"},{url:"assets/EmergencyContacts.60592579.js",revision:"603b3d675b377ac4201799f67c6e110d"},{url:"assets/ErrorNotFound.e257b343.js",revision:"4cae5196a76785ef661944200ea688bc"},{url:"assets/firebase.476f9daa.js",revision:"bdd79a051fff8975a6d5cfdfce1cd814"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage.bdea852b.css",revision:"87dbc08b3530f1071c2f686a38ed477a"},{url:"assets/HelpPage.e326fde3.js",revision:"048836977967fb4d2a3ba656463cd957"},{url:"assets/HomePage.0cc867df.css",revision:"2ce92ec0eb2fe75897171f558930dbab"},{url:"assets/HomePage.cc6bb632.js",revision:"395af09d2ca8254fa0e209700688e465"},{url:"assets/i18n.d169ccad.js",revision:"2fe956196fa6c9eceeee2e9297bb4f01"},{url:"assets/index.0b7480f9.js",revision:"da662eb113f5658f35f19becea32590a"},{url:"assets/index.bddc8419.css",revision:"de0d643dc0880c95011a008e937cef78"},{url:"assets/index.ed7f7374.js",revision:"963350251989c76b6d0727d82cc6ddc0"},{url:"assets/index.esm.d09af717.js",revision:"dc9af2d6cac55b00e7f6f1e72c7946aa"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/LanguageSelector.96034edc.js",revision:"66a73955a4d41fdfad7fa0fee68b42bb"},{url:"assets/LoginPage.063a7fa8.css",revision:"3ecf5cf2b5c6e97f4875426ba673d65d"},{url:"assets/LoginPage.b5e75834.js",revision:"22016cf207bb7716f03f656eb8f56a9c"},{url:"assets/MainLayout.6d6d45e5.js",revision:"878ea06506c84ec8adab529a2a7b5433"},{url:"assets/MainLayout.faea6db2.css",revision:"53c6c643328ab34d989a6f2b76492eb2"},{url:"assets/materialdesignicons-webfont.633d596f.woff2",revision:"66e43f0fe32824d589f7ab86d3603a53"},{url:"assets/materialdesignicons-webfont.7f3afe9b.woff",revision:"c2df65ff2e133f739f847239c72de9ce"},{url:"assets/NearbyVolunteers.2761e1d2.js",revision:"57cce57a4a2cadeb64069ae206ea73fd"},{url:"assets/NearbyVolunteers.2d6347ec.css",revision:"a4c6c95b29c29de72c0500d71e33c948"},{url:"assets/NotificationsPage.aabf2b90.css",revision:"5c48ba2582ef6d1acd45824341ab8868"},{url:"assets/NotificationsPage.b97a9cb7.js",revision:"f0c9a5114b47a93be81e48151403e206"},{url:"assets/push-notifications.944c29c2.js",revision:"bc3ed381a71ab31c2a48a080960a9849"},{url:"assets/pwa-action-sheet.entry.3d53408d.js",revision:"e3ad5275570b0f49334ae06b0782227f"},{url:"assets/pwa-camera-modal-instance.entry.1af0331c.js",revision:"766c12de85e6b27ca32f6a67c567c556"},{url:"assets/pwa-camera-modal.entry.32271bc7.js",revision:"2cb12083437df2a0ae386a65a09e3224"},{url:"assets/pwa-camera.entry.2e0513f9.js",revision:"de7dc47cf30c112419a868ea08e3b23c"},{url:"assets/pwa-toast.entry.0ba26d13.js",revision:"dd996e2081f1678125f42e38e57e201a"},{url:"assets/QBanner.9c5bb1e1.js",revision:"5329d473fe65fbb2501439d17b3fad15"},{url:"assets/QForm.abec3509.js",revision:"1fb58b20c8b50669f022a0371ab08635"},{url:"assets/QList.9b930e2e.js",revision:"6c5f6179f9ac57eb54869cdc12d197fe"},{url:"assets/QSpace.ca582f19.js",revision:"1301194e07323e66a72d2d4a8df28176"},{url:"assets/QTabPanels.bbf74a45.js",revision:"b2a49f06d3a6255d51d6c213a14efd91"},{url:"assets/SOSButtons.00902e57.css",revision:"d1f84c4f3158229403f8550900c09321"},{url:"assets/SOSButtons.d57228e6.js",revision:"93f90c3c2270b0de5fe865471b058e5e"},{url:"assets/SOSModeOnPage.386680c4.css",revision:"1b556791afe783b9d88aa2e2133c8862"},{url:"assets/SOSModeOnPage.b3b69cd8.js",revision:"9d8755a06a5c5135378ea96b4a3fd20a"},{url:"assets/TestPage.bb12d023.js",revision:"a3e41cad3af00f94cde599327b0ed7af"},{url:"assets/use-form.bc61ba13.js",revision:"8e28ca5f14e802d5af7a8d67b454ef85"},{url:"assets/use-user-form.425d6fab.js",revision:"d1ebdce476231ce827e7ad892c93a212"},{url:"assets/useBackgroundNotifications.9231ef59.js",revision:"d540cddc05e8599de349194b2b608d6c"},{url:"assets/web.199cb485.js",revision:"0f02d362ad2384fb072455b26d8bf268"},{url:"assets/web.4ea543f2.js",revision:"9bb260f1b01f5b5ee52a55af4b9e503e"},{url:"assets/web.54b4ba51.js",revision:"19a5f2a09977ebb3f332de6b64addaa0"},{url:"assets/web.932c5bd5.js",revision:"75f37b89869651739efb3d95ae1f40d7"},{url:"assets/WelcomeCard.39bde39f.css",revision:"16bed6d408b31f771cf9236fa1ccdfd2"},{url:"assets/WelcomeCard.b77f60cc.js",revision:"117e0c89d3252c160f2661fe979ae743"},{url:"favicon-16x16.png",revision:"14564343dbb233e5a0713053b3801d6d"},{url:"favicon-32x32.png",revision:"d4b30c718efb67f549af8205eeb598d9"},{url:"favicon.ico",revision:"7f844dad37c113426733d88d5d50fd1b"},{url:"firebase-messaging-sw.js",revision:"ed96fee5f2a98d465104d25c37bf540b"},{url:"icons/android-chrome-192x192.png",revision:"9c6c59035675aeeb315e67ea61a061b4"},{url:"icons/android-chrome-512x512.png",revision:"a785527e9137565ffedfccad6f0f9935"},{url:"icons/apple-icon-120x120.png",revision:"136a1452105d843e8648052f3045a8e7"},{url:"icons/apple-icon-152x152.png",revision:"93ce024a4d5489c32d4e348d01b86dca"},{url:"icons/apple-icon-167x167.png",revision:"d142d943c2164f65628a5191a700ea8a"},{url:"icons/apple-icon-180x180.png",revision:"4b575928e81fc3434bf9a3d2e36d15c1"},{url:"icons/apple-launch-1080x2340.png",revision:"8126f76e6d743e8c9d347df8963beb37"},{url:"icons/apple-launch-1125x2436.png",revision:"e5659bbc1e8efe819c8d9a1ddbbcfe38"},{url:"icons/apple-launch-1170x2532.png",revision:"0888ec9a28b247128e65957d0d8a9129"},{url:"icons/apple-launch-1179x2556.png",revision:"77b2fd9d24b1177babbb36a272416ddf"},{url:"icons/apple-launch-1242x2208.png",revision:"5aec1c3022cd38eace9bea497d8d62b5"},{url:"icons/apple-launch-1242x2688.png",revision:"1eda8aac7ec0322e5ff6f12725e36749"},{url:"icons/apple-launch-1284x2778.png",revision:"b4c107678358f11514ddf502d0e29a12"},{url:"icons/apple-launch-1290x2796.png",revision:"407cb644e5c79e9695146d3c8fb035ee"},{url:"icons/apple-launch-1536x2048.png",revision:"a664bae3d582f5b751869635b4bdb7ed"},{url:"icons/apple-launch-1620x2160.png",revision:"9e2c291a54e8438a3682d71c9bb8e5c4"},{url:"icons/apple-launch-1668x2224.png",revision:"da0a7d9a81f8804b465453b3507f8aa1"},{url:"icons/apple-launch-1668x2388.png",revision:"9a001d7dc29174fd85eab00fa4c4ba8d"},{url:"icons/apple-launch-2048x2732.png",revision:"43b3f752b31b005dfda994e0c9618a68"},{url:"icons/apple-launch-750x1334.png",revision:"761b04566b6a2c5656499035237c91f8"},{url:"icons/apple-launch-828x1792.png",revision:"48de45df8dd0ed89c29358052c3168fc"},{url:"icons/apple-touch-icon.png",revision:"d18aa9838a9f4b7a1ee39eca9aaae9e2"},{url:"icons/favicon-128x128.png",revision:"fe05e2af1b2ac5ac5d1fb22deb539562"},{url:"icons/favicon-16x16.png",revision:"ad5a87381b50c58f91555edcaf2a3fca"},{url:"icons/favicon-32x32.png",revision:"e818409072c5151956a29556db6a0fde"},{url:"icons/favicon-96x96.png",revision:"d8de4b43d5d8edde0da92a0bf80f9dcf"},{url:"icons/icon-128x128.png",revision:"fe05e2af1b2ac5ac5d1fb22deb539562"},{url:"icons/icon-192x192.png",revision:"59d395d0c042f86369891abca54630a1"},{url:"icons/icon-256x256.png",revision:"aa3b14a19fc19a4e4833afadc4f86f1b"},{url:"icons/icon-384x384.png",revision:"cb83d9d157121307ff19600e5d83d47d"},{url:"icons/icon-512x512.png",revision:"a29b420d834389ab9b7dd499bd168511"},{url:"icons/ms-icon-144x144.png",revision:"6bbb2f907849c5d6e36b0d25f1b21831"},{url:"icons/nearby.png",revision:"8d470292afdb5f01bddbba1f29e92f11"},{url:"icons/safari-pinned-tab.svg",revision:"71da0b10af439c3299c715b4d15823d8"},{url:"index.html",revision:"553442e6863d91a18ca1ae10aba30811"},{url:"manifest.json",revision:"d60a7386642a134dba59f5dc8c5fedb0"},{url:"safety.png",revision:"fe9f73c7806100e6f74fc66c78931a1f"},{url:"sosicon.png",revision:"0a7d6a1c6476cbe034143006e043eed0"},{url:"sosLogo_512_512.png",revision:"a785527e9137565ffedfccad6f0f9935"},{url:"volunteers.png",revision:"501acb90b3d92b1d479dff2faf7dc6ba"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
