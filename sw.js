if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let b={};const r=e=>a(e,f),d={module:{uri:f},exports:b,require:r};s[f]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),b)))}}define(["./workbox-e8110d74"],(function(e){"use strict";e.setCacheNameDetails({prefix:"SOS Bharat"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2936689.png",revision:"17d23c0474c859d18025378b0660ae14"},{url:"Adults-on-Phones.svg",revision:"2c1665d4be9bbb1c125f70fd7aeb3b5c"},{url:"assets/AboutUs.78f879aa.css",revision:"e4735f6511b6315e646edcb1aa525ba0"},{url:"assets/AboutUs.8effd3ec.js",revision:"983af71bd01723f8b25b2a5069ce0bbe"},{url:"assets/AstroAIPage.4051ac32.css",revision:"67106c032c000d9141d9d18606ba3ba6"},{url:"assets/AstroAIPage.f5b42c33.js",revision:"87c4dd3d253ce2131556903c6d03eecc"},{url:"assets/astroaxios.3db8d7c1.js",revision:"e6a22e498e5b1f1167cb1139cf3b0124"},{url:"assets/auth.5c07c91b.js",revision:"5a02083abf429a2b81ed22c870cbc71a"},{url:"assets/bundler.c7d5908c.js",revision:"4c07ad33da05f9e4fcc4cd57671598f1"},{url:"assets/capacitor.b9011195.js",revision:"9691f9450e009cd601a154befd3e4de9"},{url:"assets/CommunityFeedCrud.3cb0a733.js",revision:"8ae0f378b867ed26f2ff9905374c64c5"},{url:"assets/CommunityFeedCrud.dcd59a17.css",revision:"e9fdf76d35826fe19876d43bc60bc168"},{url:"assets/CommunityPage.140e3ada.css",revision:"da8f7a7ba57d0192b32f01eedd6ed558"},{url:"assets/CommunityPage.5c789ee7.js",revision:"36aa4372050305b16b1551017fe63157"},{url:"assets/CommunityPostOpenRoute.5eb2f8a0.js",revision:"e1f20e550f2bab8db03a12ec5e5ce443"},{url:"assets/CommunityPostOpenRoute.6ea0fdce.css",revision:"92c3b6e0725dfbf7fc2e8c95b34ea07a"},{url:"assets/DashboardPage.a6780831.css",revision:"9316803137916eaad2508cff4faca5bd"},{url:"assets/DashboardPage.df72d650.js",revision:"56222e8e9ad5f257e8b2ecbad85e178c"},{url:"assets/EmergencyContacts.84a8e834.js",revision:"d0c2b2c244e8527121b526da01e97d77"},{url:"assets/EmergencyContacts.b6e5c7e6.css",revision:"89bf600cf687dcceb893b6465aab8ce5"},{url:"assets/ErrorNotFound.a0435f92.js",revision:"9e24577bc5d07406aacdefd90a87bda5"},{url:"assets/firebase.bfc3b82f.js",revision:"d1b64e9bc048e42cc24b3282a4394e02"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/HelpPage.855612d0.css",revision:"ef9e152520ea231a4eb3372e03bff421"},{url:"assets/HelpPage.b53161e2.js",revision:"55279120342c3de5effd51fdc5b46d95"},{url:"assets/HomePage.0cc867df.css",revision:"2ce92ec0eb2fe75897171f558930dbab"},{url:"assets/HomePage.d9d6b180.js",revision:"562c00b9b748fdbb7ce56df5738d8e97"},{url:"assets/i18n.76dda217.js",revision:"f2e7202d16ed145f81f01fe3c096e83b"},{url:"assets/index.168e4218.js",revision:"3bbd10fe90cb7cba8a103c467ef1bcc7"},{url:"assets/index.85b279a3.css",revision:"a6db27b6f645a09fa6eeb51f0ffa4aa9"},{url:"assets/index.esm.fbd29729.js",revision:"7b33f7c117ccfbefe6ef20096f24d5a7"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.d240a9ae.woff",revision:"d93054bf1c6d3002897ac09e0e7b9a6f"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.6ba203eb.woff",revision:"30ef7351c99d2cd25159e6fc71e6c6fc"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.80684728.woff",revision:"5001486802025ac686973542fdeeea60"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.2df244f6.woff",revision:"064a5568b49ac29f2e9ea88a1f25fbc3"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.742ce02b.woff",revision:"c2818baea5d2506dd4c2843836b9bff6"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f00fa16d.woff",revision:"1ac185dda7da331babe18e8d84ec6984"},{url:"assets/LanguageSelector.45b6e4ae.js",revision:"3f7f8a4400bacca31684f004fcc94a76"},{url:"assets/LoginPage.8b892ae2.js",revision:"1e36f33329120a2fe1aab6b244ddf1b5"},{url:"assets/LoginPage.c7754cc8.css",revision:"ea219cc39e1ac8a13a6c8c8a02225b8b"},{url:"assets/MainLayout.3c3a702b.css",revision:"6415e50dc327f2b9f7bc383aaebcca73"},{url:"assets/MainLayout.3ca32aaf.js",revision:"f4733dff6d152257ef8bc3f040161962"},{url:"assets/materialdesignicons-webfont.633d596f.woff2",revision:"66e43f0fe32824d589f7ab86d3603a53"},{url:"assets/materialdesignicons-webfont.7f3afe9b.woff",revision:"c2df65ff2e133f739f847239c72de9ce"},{url:"assets/MyPostsPage.80b085a1.js",revision:"ae1d42b98dbb4f01b4edc71f3c4329e6"},{url:"assets/MyPostsPage.a62c295b.css",revision:"34cf10cf32f5a80fc3336c2eb25c534f"},{url:"assets/NewsArticlePage.2a8a6e1e.js",revision:"7ccbddf4bf35209bcb3a9cbf980b80a7"},{url:"assets/NewsArticlePage.96abc809.css",revision:"f23568d50a1bf385494d26b6e434d397"},{url:"assets/NewsListPage.22b14864.js",revision:"6ad02ccd35ecc6fe4a180186a5d7b497"},{url:"assets/NewsListPage.d21ca1ab.css",revision:"e7923535b25d0edd070a637c9d03a857"},{url:"assets/NewsManagement.776c6545.js",revision:"91ad39b8aad4c356da086d718da2ce4a"},{url:"assets/NotificationsPage.04b10284.js",revision:"78b77446eec00112dd2655d93300fbfb"},{url:"assets/NotificationsPage.0a82985b.css",revision:"dbbe53bb5a2f724525371cc33acae88c"},{url:"assets/package.a4721cbb.js",revision:"d13130429a5a3e018d49d7bef77bbac7"},{url:"assets/PostNotification.3174c73b.css",revision:"e6e393658325c9977a63989f9692fa74"},{url:"assets/PostNotification.f33b8c82.js",revision:"48d470952867c894cce485c7334577c7"},{url:"assets/ProfileStapperPage.0b51c050.css",revision:"abd50a4c8fe59e42115440c724cdd699"},{url:"assets/ProfileStapperPage.7dd9fb3c.js",revision:"968c2255fbc83f1c1978f8eb5856be05"},{url:"assets/ProfileTabs.283e2d57.css",revision:"ff328290e11f5890a8ec34a479435a40"},{url:"assets/ProfileTabs.86ac3e35.js",revision:"4e73338aa3a0573d4251b7771f4cbc0f"},{url:"assets/PromotingAppInstall.919d85ec.js",revision:"514d6b8b993e2e62ff5ce17a75beaabb"},{url:"assets/PromotingAppInstall.b9deea54.css",revision:"4074637b7192ec868bde5f88a828bb41"},{url:"assets/push-notifications.921035fc.js",revision:"88db23eb647cf758a5566728b79d4c08"},{url:"assets/pwa-action-sheet.entry.bbe8e8c3.js",revision:"463058c2c4c83537994a8186736b5dcd"},{url:"assets/pwa-camera-modal-instance.entry.e95cc20d.js",revision:"fcd9bf482b191ef006dcfd4fa08e748d"},{url:"assets/pwa-camera-modal.entry.1f38eb82.js",revision:"82c06211e17b9b486cf203cc99bb59eb"},{url:"assets/pwa-camera.entry.180c7bb5.js",revision:"047352e164c15c6ca0c7d15767ea28bc"},{url:"assets/pwa-toast.entry.3a2b230a.js",revision:"414517509b112f9c8c01ed1889d78164"},{url:"assets/QFile.d1cd6fbd.js",revision:"a985159a8534cbd132eb55911a5b67c8"},{url:"assets/QForm.5b8ff544.js",revision:"834c8e52dad6970715ca0737eae08477"},{url:"assets/QTable.54c001c1.js",revision:"86eba37ba696fe740189c84237bc42ff"},{url:"assets/SearchCity.8f76d389.js",revision:"07c93b3fdb6e55e03f1c3bb06896860c"},{url:"assets/SearchCity.f23d9ac6.css",revision:"8b32dd595c60997f99710293a98483ad"},{url:"assets/ShortsPageCurd.25c4bcbc.js",revision:"ef56546e5fa2b7171f4e9a22e30ed630"},{url:"assets/socket.04092846.js",revision:"1e46c35f6aefad91769ede672ab611fb"},{url:"assets/SOSButtons.f4a4b13e.css",revision:"021f56654ff02906d8a7cf0d523e5e34"},{url:"assets/SOSButtons.f825d6c6.js",revision:"95b382935563ea938cef924b9267eb02"},{url:"assets/SOSModeOnPage.7bc52172.js",revision:"58178cc5d722f3f7a44ce6c763599681"},{url:"assets/SOSModeOnPage.7d08e94c.css",revision:"78e9f6d42c236475efcbfb6977d487d7"},{url:"assets/TestPage.2496a85b.js",revision:"94649b0d0db57599bc4f6df205aaebc8"},{url:"assets/TncPage.e51bbc11.js",revision:"56e0ccb2c20580972894ceb300c8c69b"},{url:"assets/TncPage.f9e752cd.css",revision:"97b80ec88cefb984d9e0cb417e9cf39e"},{url:"assets/TrustStatsCard.bbd6af63.js",revision:"16b0d246749c2a3c6e3924d3a2ca74ce"},{url:"assets/TrustStatsCard.e7a56fa9.css",revision:"5d137468054c8c42c8abb5feaae2b481"},{url:"assets/use-form.7267c9e0.js",revision:"26642cb0c0e4a3e6e247910cba28399f"},{url:"assets/use-user-form.aba52028.js",revision:"f8310ac2ebeab5a88435b75da38d27b9"},{url:"assets/useBackgroundNotifications.732cae92.js",revision:"432f92f5ff32559910df1f13241e0a6f"},{url:"assets/web.02879fa4.js",revision:"cc282cd6a627f3102a809158b69793ae"},{url:"assets/web.8bb01065.js",revision:"612d5104d2887fd0fff85463d2897f72"},{url:"assets/web.93a66b4d.js",revision:"ed3ca85f5abdd180cbf1555f58fa1af4"},{url:"assets/web.9b0f5d1b.js",revision:"8f19eb3b745263f57de2b0cf9c303ffd"},{url:"assets/web.ddfdf04c.js",revision:"7e04335715bd8caf9df74a5721b57548"},{url:"assets/WelcomeCard.0a952095.css",revision:"b440ee902e39becf98b2cd2d28f9e60c"},{url:"assets/WelcomeCard.b20d8a8c.js",revision:"80fb67228df1a62359feed1ebb680136"},{url:"favicon-16x16.png",revision:"aaaa0a1b84b60871a8721d0610421310"},{url:"favicon-32x32.png",revision:"8b922607f6d72161dbf9bd8a6527ddd8"},{url:"favicon.ico",revision:"72ee9ca004725c1aaff49a940689fad6"},{url:"firebase-messaging-sw.js",revision:"ed96fee5f2a98d465104d25c37bf540b"},{url:"icons/apple-icon-120x120.png",revision:"d754d90f5839b9bf980669ccd37abe02"},{url:"icons/apple-icon-152x152.png",revision:"1d520ea984838ff3b06ec405854dec27"},{url:"icons/apple-icon-167x167.png",revision:"e603acf5fb6b28ac5eb502edbf45c296"},{url:"icons/apple-icon-180x180.png",revision:"058bc974d30d2022661c6ef918dbfa68"},{url:"icons/apple-launch-1080x2340.png",revision:"2f3a05b0e357a4a7ae358725da64d5a6"},{url:"icons/apple-launch-1125x2436.png",revision:"1f3e234708213b1fddba74018b250ce3"},{url:"icons/apple-launch-1170x2532.png",revision:"fc7e0fac57c4729f9fc0653f211c2821"},{url:"icons/apple-launch-1179x2556.png",revision:"172a566e57d349e3d315c4a6974c6e66"},{url:"icons/apple-launch-1242x2208.png",revision:"41504f5a8440b7a85d583fe67c2a6e30"},{url:"icons/apple-launch-1242x2688.png",revision:"9e16ac9a5a96017e615f206201fbfe73"},{url:"icons/apple-launch-1284x2778.png",revision:"6eff1ea882fed24ceccd58241b13a346"},{url:"icons/apple-launch-1290x2796.png",revision:"99c75f3aaa8993da5178cb581adc01e1"},{url:"icons/apple-launch-1536x2048.png",revision:"82f308e2638ccf8df92581fedae2f768"},{url:"icons/apple-launch-1620x2160.png",revision:"d326932168d88d79eae76086bc85a88d"},{url:"icons/apple-launch-1668x2224.png",revision:"edb6b656dbe9c2bca5ac5087213886cb"},{url:"icons/apple-launch-1668x2388.png",revision:"4fc631cd39aadec5c00a3df8b865085d"},{url:"icons/apple-launch-2048x2732.png",revision:"dd819f2c12bd9a7010ec30c0d3bf4b14"},{url:"icons/apple-launch-750x1334.png",revision:"c739cfb59f3f608cb2eb181e83e0d937"},{url:"icons/apple-launch-828x1792.png",revision:"4a69b8402bd43955e902580927b9a06b"},{url:"icons/apple-touch-icon.png",revision:"8994951d5c5d978f72e8f30c36572058"},{url:"icons/favicon-128x128.png",revision:"679764f5c48e9f9e08bfe93094d0060b"},{url:"icons/favicon-16x16.png",revision:"a992fd250cf731b88eee143cca38860a"},{url:"icons/favicon-32x32.png",revision:"2f2788312f6c4a62012dc1704604b9cb"},{url:"icons/favicon-96x96.png",revision:"884e375120c5e7f5fc3d8d3a11e18ef2"},{url:"icons/icon-128x128.png",revision:"679764f5c48e9f9e08bfe93094d0060b"},{url:"icons/icon-192x192.png",revision:"931cedab884d8dc72b52fb540bc6be4f"},{url:"icons/icon-256x256.png",revision:"3db610336c0c8db238a737842603efc1"},{url:"icons/icon-384x384.png",revision:"5a2dabcc1dfbdcb8da62fafdae72510b"},{url:"icons/icon-512x512.png",revision:"6d87cb197f66f3a86f2ef113a0ad8a25"},{url:"icons/ms-icon-144x144.png",revision:"ef41cc9fdba13aa07b52d6d486978ed1"},{url:"icons/nearby.png",revision:"8d470292afdb5f01bddbba1f29e92f11"},{url:"icons/safari-pinned-tab.svg",revision:"314fe9285f746ad460b27db8881bc50d"},{url:"index.html",revision:"9b2524d5d7fd2d53b79eaa57f018b62f"},{url:"locationIcon.png",revision:"38fc25b767c7f0b18459322b2cbcf5a9"},{url:"manifest.json",revision:"9129b28280fe571b6b760c57e75c24f1"},{url:"my-business.png",revision:"2c28c02e0eecebb71bb2f60bc77dad3e"},{url:"profile.png",revision:"35fb794ea78dae7d655b6411a061483b"},{url:"safety.png",revision:"fe9f73c7806100e6f74fc66c78931a1f"},{url:"sos_logo_1080_1080.png",revision:"0e64950c11d4e023c1debb191a307d65"},{url:"Sos-Bharat-Cartificate.jpg",revision:"e232ff5478891690ad81fd502381fadc"},{url:"sosicon.png",revision:"0a7d6a1c6476cbe034143006e043eed0"},{url:"soslogo_1080.png",revision:"7d8fac677e6ed41a5619c35812ae42cc"},{url:"sosLogo_512_512.png",revision:"b4fadb596636e64ace036c337936a712"},{url:"volunteers.png",revision:"501acb90b3d92b1d479dff2faf7dc6ba"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));