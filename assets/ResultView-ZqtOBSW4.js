import{io as m}from"https://cdn.socket.io/4.7.5/socket.io.esm.min.js";import{_ as f,c as h,a as o,b as u,w as g,g as p,h as w,F as I,r as x,o as _,d as a,p as k,e as y}from"./index-DsGMYobM.js";const D="/DAO_Taiwan_Vue/assets/logo_white-AiIJoPJw.png",b="/DAO_Taiwan_Vue/assets/streetlight-La1yFIpG.png",v="/DAO_Taiwan_Vue/assets/toggle-light-Mn1Hd3bC.png",r=m("https://daotaiwanapi.onrender.com",{withCredentials:!1}),C={data(){return{resultDataReady:!1,resultImageGet:!1,resultData:null,textureCookie:null,textureId:null}},methods:{toggleDarkMode(){const t=document.querySelector(".toggle-switch");t.classList.toggle("active"),document.querySelector(".toggle-light").classList.toggle("active"),console.log(this.textureId),(this.resultImageGet!=null||this.textureId!=null)&&(t.classList.contains("active")?this.lightControllById(this.textureId,this.resultData.category,"light-on"):this.lightControllById(this.textureId,this.resultData.category,"light-off"))},lightControllById(t,e,s){try{r.emit(s,{_id:t,category:e})}catch(c){console.error("開關燈失敗:",c)}},fetchResultImage(t){fetch(`https://daotaiwanapi.onrender.com/results/${t}`,{method:"GET"}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log(e),this.resultData=e.data[0],this.resultImageGet=!0,console.log(this.resultData.url)}).catch(e=>{console.error("Error:",e)})},downloadImage(){if(this.resultData){const t=document.createElement("a");t.href=this.resultData.url,console.log(t.href),t.download="DAO-Taiwan-result-image.png",fetch(t.href,{mode:"cors"}).then(e=>e.blob()).then(e=>{const s=window.URL.createObjectURL(e);t.href=s,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(s)}).catch(e=>{console.error("Error downloading image:",e)})}}},created(){r.on("result-upload",t=>{console.log("伺服器傳送訊息:",t),console.log(this.textureId,t._id),t!=null&&this.textureId===t._id&&(this.fetchResultImage(this.textureId),this.resultData=t)}),r.on("light-on",t=>{console.log("伺服器傳送訊息:",t)}),r.on("light-off",t=>{console.log("伺服器傳送訊息:",t)})},mounted(){const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const s=t[e].trim().split("=");if(s[0]==="textureCookie"){this.textureCookie=JSON.parse(s[1]),this.textureId=this.textureCookie._id,console.log(this.textureId),this.fetchResultImage(this.textureId);break}}}},l=t=>(k("data-v-845344f6"),t=t(),y(),t),L=l(()=>o("h1",{class:"d-none"},"結果頁面",-1)),R={id:"app",class:"position-relative",ref:"appContainer"},V={class:"my-0 mx-auto d-flex justify-content-between align-items-center"},O=l(()=>o("img",{class:"logo_white",src:D,alt:"logo_white"},null,-1)),S={class:"w-25 d-flex"},j=["src"],B=l(()=>o("img",{class:"streetlight",src:b,alt:"streetlight"},null,-1)),E=l(()=>o("img",{src:v,alt:"toggle-light",class:"streetlight toggle-light"},null,-1)),N={class:"d-flex flex-column justify-content-between h-100 pb-5 pt-2 result-content"},T=l(()=>o("div",{class:"toggle-handle"},null,-1)),A=[T],G=l(()=>o("p",{class:"result-text pt-3"},[a("已點亮您的招牌"),o("br"),a("試著在場景中找到他吧！！")],-1)),M={class:"d-flex justify-content-between"};function U(t,e,s,c,F,i){const d=x("router-link");return _(),h(I,null,[L,o("div",R,[o("nav",V,[O,o("div",S,[u(d,{class:"done-button",to:"/home"},{default:g(()=>[a("家")]),_:1})])]),this.resultData?(_(),h("img",{key:0,src:this.resultData.url,class:"result-image",alt:"result-image"},null,8,j)):p("",!0),B,E,o("div",N,[o("div",{class:"toggle-switch mx-auto",onClick:e[0]||(e[0]=(...n)=>i.toggleDarkMode&&i.toggleDarkMode(...n))},A),G,o("div",M,[o("a",{class:"upload-button",href:"#",onClick:e[1]||(e[1]=w((...n)=>i.downloadImage&&i.downloadImage(...n),["prevent"]))},"下載"),u(d,{class:"upload-button",to:"/gallery"},{default:g(()=>[a("大家ㄉ庫")]),_:1})])])],512)],64)}const H=f(C,[["render",U],["__scopeId","data-v-845344f6"]]);export{H as default};
