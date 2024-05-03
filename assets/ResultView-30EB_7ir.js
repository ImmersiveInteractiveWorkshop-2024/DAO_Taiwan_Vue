import{io as p}from"https://cdn.socket.io/4.7.5/socket.io.esm.min.js";import{_ as f,c,a as o,b as h,w as _,f as m,g as w,F as I,r as x,o as d,d as n,p as k,i as b}from"./index-uXgwHKsE.js";const y="/DAO_Taiwan_Vue/assets/logo_white-AiIJoPJw.png",v="/DAO_Taiwan_Vue/assets/default_image-kP3-it4h.png",C="/DAO_Taiwan_Vue/assets/streetlight-La1yFIpG.png",D="/DAO_Taiwan_Vue/assets/toggle-light-Mn1Hd3bC.png",a=p("https://daotaiwanapi.onrender.com",{withCredentials:!1}),L={data(){return{resultDataReady:!1,resultImageGet:!1,resultData:null,textureCookie:null,textureId:null}},methods:{toggleDarkMode(){const t=document.querySelector(".toggle-switch");t.classList.toggle("active"),document.querySelector(".toggle-light").classList.toggle("active"),console.log(this.textureId),(this.resultImageGet!=null||this.textureId!=null)&&(t.classList.contains("active")?this.lightControllById(this.textureId,"conbon_c","light-on"):this.lightControllById(this.textureId,"conbon_c","light-off"))},lightControllById(t,e,s){try{a.emit(s,{_id:t,category:e})}catch(u){console.error("開關燈失敗:",u)}},fetchResultImage(t){fetch(`https://daotaiwanapi.onrender.com/results/${t}`,{method:"GET"}).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{console.log(e),this.resultData=e.data[0],this.resultImageGet=!0,console.log(this.resultData.url)}).catch(e=>{console.error("Error:",e)})},downloadImage(){if(this.resultData){const t=document.createElement("a");t.href=`https://storage.googleapis.com/result-image/${this.textureId}`,t.download="DAO-Taiwan-result-image.png",fetch(t.href,{mode:"cors"}).then(e=>e.blob()).then(e=>{const s=window.URL.createObjectURL(e);t.href=s,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(s)}).catch(e=>{console.error("Error downloading image:",e)})}}},created(){a.on("result-upload",t=>{console.log("伺服器傳送訊息:",t),console.log(this.textureId,t._id),t!=null&&this.textureId===t._id&&(this.fetchResultImage(this.textureId),this.resultData=t)}),a.on("light-on",t=>{console.log("伺服器傳送訊息:",t)}),a.on("light-off",t=>{console.log("伺服器傳送訊息:",t)})},mounted(){const t=document.cookie.split(";");for(let e=0;e<t.length;e++){const s=t[e].trim().split("=");if(s[0]==="textureCookie"){this.textureCookie=JSON.parse(s[1]),this.textureId=this.textureCookie._id,console.log(this.textureId),this.fetchResultImage(this.textureId);break}}}},l=t=>(k("data-v-b4bac558"),t=t(),b(),t),R=l(()=>o("h1",{class:"d-none"},"結果頁面",-1)),V={id:"app",class:"position-relative",ref:"appContainer"},O={class:"my-0 mx-auto d-flex justify-content-between align-items-center"},S=l(()=>o("img",{class:"logo_white",src:y,alt:"logo_white"},null,-1)),T={class:"w-25 d-flex"},j={key:0,src:v,class:"result-image",alt:"result-image"},A=["src"],B=l(()=>o("img",{class:"streetlight",src:C,alt:"streetlight"},null,-1)),E=l(()=>o("img",{src:D,alt:"toggle-light",class:"streetlight toggle-light"},null,-1)),G={class:"d-flex flex-column justify-content-between h-100 pb-5 pt-2 result-content"},N=l(()=>o("div",{class:"toggle-handle"},null,-1)),M=[N],U=l(()=>o("p",{class:"result-text pt-3"},[n("已點亮您的招牌"),o("br"),n("試著在場景中找到他吧！！")],-1)),F={class:"d-flex justify-content-between"};function J(t,e,s,u,q,i){const g=x("router-link");return d(),c(I,null,[R,o("div",V,[o("nav",O,[S,o("div",T,[h(g,{class:"done-button",to:"/home"},{default:_(()=>[n("家")]),_:1})])]),this.resultImageGet?m("",!0):(d(),c("img",j)),this.resultData?(d(),c("img",{key:1,src:this.resultData.url,class:"result-image",alt:"result-image"},null,8,A)):m("",!0),B,E,o("div",G,[o("div",{class:"toggle-switch mx-auto",onClick:e[0]||(e[0]=(...r)=>i.toggleDarkMode&&i.toggleDarkMode(...r))},M),U,o("div",F,[o("a",{class:"upload-button",href:"#",onClick:e[1]||(e[1]=w((...r)=>i.downloadImage&&i.downloadImage(...r),["prevent"]))},"下載"),h(g,{class:"upload-button",to:"/gallery"},{default:_(()=>[n("家")]),_:1})])])],512)],64)}const H=f(L,[["render",J],["__scopeId","data-v-b4bac558"]]);export{H as default};
