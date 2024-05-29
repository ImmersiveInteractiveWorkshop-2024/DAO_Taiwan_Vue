import{io as _}from"https://cdn.socket.io/4.7.5/socket.io.esm.min.js";import{_ as p,c as h,a as o,b as u,w as g,f,h as w,F as x,r as I,o as m,d as n,p as k,e as b}from"./index-cQtfu_wP.js";const y="/assets/logo_white-AiIJoPJw.png",v="/assets/streetlight-La1yFIpG.png",C="/assets/toggle-light-Mn1Hd3bC.png",i=_("https://daotaiwanapi.onrender.com",{withCredentials:!1}),D={data(){return{resultDataReady:!1,resultImageGet:!1,resultData:null,textureCookie:null,textureId:null}},methods:{toggleDarkMode(){const t=document.querySelector(".toggle-switch");t.classList.toggle("active"),document.querySelector(".toggle-light").classList.toggle("active"),console.log(this.textureId),(this.resultImageGet!=null||this.textureId!=null)&&(t.classList.contains("active")?this.lightControllById(this.textureId,this.resultData.category,"light-on"):this.lightControllById(this.textureId,this.resultData.category,"light-off"))},lightControllById(t,e,s){try{i.emit(s,{_id:t,category:e})}catch(c){console.error("開關燈失敗:",c)}},fetchResultImage(t){fetch(`https://daotaiwanapi.onrender.com/results/${t}`,{method:"GET"}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log(e),this.resultData=e.data[0],this.resultImageGet=!0,console.log(this.resultData.url)}).catch(e=>{console.error("Error:",e)})},downloadImage(){if(this.resultData){const t=document.createElement("a");t.href=this.resultData.url,console.log(t.href),t.download="DAO-Taiwan-result-image.png",fetch(t.href,{mode:"cors"}).then(e=>e.blob()).then(e=>{const s=window.URL.createObjectURL(e);t.href=s,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(s)}).catch(e=>{console.error("Error downloading image:",e)})}}},created(){i.on("result-upload",t=>{console.log("伺服器傳送訊息:",t),console.log(this.textureId,t._id),t!=null&&this.textureId===t._id&&(this.fetchResultImage(this.textureId),this.resultData=t)}),i.on("light-on",t=>{console.log("伺服器傳送訊息:",t)}),i.on("light-off",t=>{console.log("伺服器傳送訊息:",t)})},mounted(){const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const s=t[e].trim().split("=");if(s[0]==="textureCookie"){this.textureCookie=JSON.parse(s[1]),this.textureId=this.textureCookie._id,console.log(this.textureId),this.fetchResultImage(this.textureId);break}}}},l=t=>(k("data-v-566bbe71"),t=t(),b(),t),L=l(()=>o("h1",{class:"d-none"},"結果頁面",-1)),R={id:"app",class:"position-relative",ref:"appContainer"},S={class:"my-0 mx-auto d-flex justify-content-between align-items-center"},j=l(()=>o("img",{class:"logo_white mx-auto pt-3",src:y,alt:"logo_white"},null,-1)),B={class:"w-25 d-flex d-none"},E=["src"],N=l(()=>o("img",{class:"streetlight",src:v,alt:"streetlight"},null,-1)),G=l(()=>o("img",{src:C,alt:"toggle-light",class:"streetlight toggle-light"},null,-1)),M={class:"d-flex flex-column justify-content-between h-100 pb-5 pt-2 result-content"},V=l(()=>o("div",{class:"toggle-handle"},null,-1)),O=[V],U=l(()=>o("p",{class:"result-text pt-3"},[n("點選按鈕照亮您的招牌"),o("br"),n("試著在場景中找到他吧！！")],-1)),F={class:"d-flex justify-content-between"};function J(t,e,s,c,T,r){const d=I("router-link");return m(),h(x,null,[L,o("div",R,[o("nav",S,[j,o("div",B,[u(d,{class:"done-button",to:"/home"},{default:g(()=>[n("家")]),_:1})])]),this.resultData?(m(),h("img",{key:0,src:this.resultData.url,class:"result-image",alt:"result-image"},null,8,E)):f("",!0),N,G,o("div",M,[o("div",{class:"toggle-switch mx-auto",onClick:e[0]||(e[0]=(...a)=>r.toggleDarkMode&&r.toggleDarkMode(...a))},O),U,o("div",F,[o("a",{class:"upload-button",href:"#",onClick:e[1]||(e[1]=w((...a)=>r.downloadImage&&r.downloadImage(...a),["prevent"]))},"下載"),u(d,{class:"upload-button",to:"/gallery"},{default:g(()=>[n("大家ㄉ庫")]),_:1})])])],512)],64)}const H=p(D,[["render",J],["__scopeId","data-v-566bbe71"]]);export{H as default};