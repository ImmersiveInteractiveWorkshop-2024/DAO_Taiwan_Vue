import{io as B}from"https://cdn.socket.io/4.7.5/socket.io.esm.min.js";import{_ as P,c as f,a,t as b,h as A,i as u,n as L,j as S,F as W,g as U,o as m,p as F,e as T}from"./index-0_lqNRoG.js";import{_ as R}from"./logo_small-nh19fpU0.js";var C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_={exports:{}};(function(e,t){(function(n,h){h()})(C,function(){function n(r,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\uFEFF",r],{type:r.type}):r}function h(r,c,p){var l=new XMLHttpRequest;l.open("GET",r),l.responseType="blob",l.onload=function(){w(l.response,c,p)},l.onerror=function(){console.error("could not download file")},l.send()}function i(r){var c=new XMLHttpRequest;c.open("HEAD",r,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function s(r){try{r.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(c)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof C=="object"&&C.global===C?C:void 0,v=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),w=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!v?function(r,c,p){var l=o.URL||o.webkitURL,d=document.createElement("a");c=c||r.name||"download",d.download=c,d.rel="noopener",typeof r=="string"?(d.href=r,d.origin===location.origin?s(d):i(d.href)?h(r,c,p):s(d,d.target="_blank")):(d.href=l.createObjectURL(r),setTimeout(function(){l.revokeObjectURL(d.href)},4e4),setTimeout(function(){s(d)},0))}:"msSaveOrOpenBlob"in navigator?function(r,c,p){if(c=c||r.name||"download",typeof r!="string")navigator.msSaveOrOpenBlob(n(r,p),c);else if(i(r))h(r,c,p);else{var l=document.createElement("a");l.href=r,l.target="_blank",setTimeout(function(){s(l)})}}:function(r,c,p,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof r=="string")return h(r,c,p);var d=r.type==="application/octet-stream",E=/constructor/i.test(o.HTMLElement)||o.safari,D=/CriOS\/[\d]+/.test(navigator.userAgent);if((D||d&&E||v)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var y=k.result;y=D?y:y.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=y:location=y,l=null},k.readAsDataURL(r)}else{var I=o.URL||o.webkitURL,x=I.createObjectURL(r);l?l.location=x:location.href=x,l=null,setTimeout(function(){I.revokeObjectURL(x)},4e4)}});o.saveAs=w.saveAs=w,e.exports=w})})(_);var O=_.exports;const H="/DAO_Taiwan_Vue/assets/stroke-bar-JHactPn7.png",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKLSURBVFhH1ZhNTsJAFMcpbDCayAkUTyAcwAS2bFqBA8AJhBOIJxBOAOwBy9KV6AWsJxBPIIluAf+PDM3M0OlHGEuZxIUt782P//uYNxipI1nGkXCmtIJallUwDOPc78uv1+sP27YXUQXSBlqr1d6xeSECgI3P2uPxeBjGRgsoKZnJZAg08oLCc0ShDWACVy5doHmAfkam5AwA3J1MJm2VDy2g5LxarTagjIUNcz7AOXzmWvUetgPANr3eawONoma9Xi8ByoLNnWyH5w+A7cjPDwK6hUABEuwAf0KngOrl0Wg042EPCkogKETKb0eCnaG4yokCZfndgoqPPNhyuSyi39IX2KyDK8qlAbUnc/u/nKuJAUXX6EDVew70FUVVSpyirBO8cOF3kKfFxIGiqHIoqm8+TwHqRjx06JmjJ+QOnedthIXairYlK4p9vrBHPpKiDJLC4g4dqMorVOVcFylyVKh8gEbLUS/ITbvwaMr7QKP5d2HPn1Q9hL4VSlEVJIyHcNLYB4y3VUxft/xEpczRuCAJWJ5l5fzcRNBLlbgg2T59MNCZ7y6ANuVi3QGNC5IGEgD1kevCWCgXkWeOViqVy2w2+wbjC0lpBw58J/CQ+UrzaIFanAxI9nSfWq1WJa87laAoWsQPHJyF3FTrxxikpWp5Ligbt4TrBIypDWkFUjjroS93/G6nsqK/ADuVEvs/YacM0B3nVKoIoKZp3uC8fQbsCW+AvHHwbKpJ2kU6nXbkCT7It1fV09V3BkPheuB38QraRMd7VR9NHKzfyZQoWN+SZmfwThoglMLAoCO0QT4Ce48KVveYtzcoOfCCTSQog82jrdj0kww6AE34ND/GtgJDHxtJwEZHA/oHlng8NI7UMm4AAAAASUVORK5CYII=",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJ/SURBVFhHzZdLTsJAGMdbOIDcQDyBeACjnsAWWLkRboAL1xTXJugJZOcGaCUcoCTuUS8gNxCWJDz8j2mbdmg705kR2oQQ6Pf4fY+Z+UbXcv7oOefThABN07xgBWbb9oQlw/OeC7Ber19uNptbGLzUdb3MY3i73c6hc+U4zgePfJJMKqBhGJVisdglYCJOANkZDoeWiK6vkwhYrVYbEOoiYyVRBwBsArAnqk/0YgEJHMBeUgwv4JxVOgcl7qHEc6WAXlmntFEAfQLaWq/XrqzTLMCRDAKuVCgUpvRCUNFLWaDCshFAlNYCXJsyZg4GA0fUgaweDfhDLYo3wBmyTmT0A8CY3lug38r77Le4QAJAurzouwm2CKH9TyZjtG4iIASfUd6WSmcitgLAWq1GFsK1bwQZvEMGn0SMqtRJK7H0MUWDkj7HNmaT//Hd7Pf7LiuYtBIrX8Hocxe7RDAJ8RyF4RKT7eQvOvJAeYYSn7AizPIegDMAHod1WJCRfRB9uKWUlZYZ9iNJCCUjcaigAXtQInNf8GAvPJOd6cL2kgaRpEzSZ3EZ8983lcUZphLzUJA74xYibKFPyJAaeRChhZ7sZOm5NFneTMbOg+iVnVKHnLlkAeE3+cg+FSRj56xHxe5xp3kkxhMnagakLFigj2A1QNLV0lar1eloNPpKvZN45bagfaSMiNMQsviKLN4wb3VkiMXCsRCpQe9hnL5SxeIySBSWy+X5eDx+ZwKGrXtHVQX/lRXBkaMvOP99m8heG9l7SO1BFQD/torzAneQDPLuf36SMvWgbGalz2JZAJa+9DTDciD7XmoelHXOo+/dHF1PtsFz395rD/IEQcvkHvAX8ndONHfmN6AAAAAASUVORK5CYII=",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIbSURBVFhHzZj9UQIxEMUNFCB0AB1oBWAF3gD/ix3QgViB0gEF8HEdiBWAFYgdYAGALww4uVxy2SzJwc0wN0M2e7/b9/JxETeMK0mSu2q1upRd9/v982w2GzPSkLoIUpQSBLhapVJZCiEap79jQnoDdrvdOcAS/cViQXoBdjqdASr3Zqt6DEgyoOq7IluEhiQBmnxXFiQJ0Oa7MiCdgC7fxYYsBKT6LiakFdDXd7EgrYAc38WANAKe47vQkDnAEL4LCZkBDOm7UJAZwNC+CwH5DxjLdwXr9gbbtLprN3UAjO07EwTW7E8Atp2AZflOAxlNp9OBC062C/hujPsTJThAzC9y9AGXUnMJeG+BPV6L2oEbB0m/drtdkqbp2ieHrKB8m0efToxYsqR6bgEPNvABtELDLePBri7ekuYAlVG8CAnJldQIGAGSLakVMBDk2ZIWAp4DyZG01+u1MbJb+I0wujcmQxu3W8eVxceT3pJKOLzUxxFqhbnxngzoUUm2pJh/v7XTiVcsfUOnxGpAUSU5kp5yA24IuBf1Wci3gdRNXWrnV50F0ltSFUav3qkNkLkqOgGPcssDo8PijvtiMplIf7IurFzyXEee7+QuAK4hc1NtIAGySCydTPKqodvttq7KfHWAGM0ZptIBteklU2dI/AOJGxeVWD7ctoPCyH7Q/V16BZWppg+gBFWr4b6C995Ne8WLAVIH3tUD/gGr1U028S9yRQAAAABJRU5ErkJggg==",V=B("https://daotaiwanapi.onrender.com",{withCredentials:!1});V.on("message",function(e){console.log("伺服器傳送訊息:",e)});const Q={data(){return{canvasLeft:"50%",canvasTop:"50%",selectedProduct:null,message:" ",painting:!1,canvas:null,ctx:null,colors:["#C73232","#E27200","#EAC252","#E8DF00","#88D04D","#2E8100","#04CBF0","#4234E9","#9400F2","#D526C7","#FFFFFF","#000000"],currentColor:"#C73232",backgroundColor:"#FFFFFF",appWidth:0,lastX:0,lastY:0,showColorPicker:!0,canvasEnabled:!0,isLandscape:!1,rotateButton:null,history:[],redoHistory:[],strokeDragging:!1,startX:0,startY:0,offsetX:0,offsetY:0,currentLineWidth:15,productInfo:{conbon_c:{width:.8,height:.8,left:"44%",top:"50%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240509/conbon_c-201802413-new_conbon_c.png"},conbon_v:{width:1,height:1,left:"50%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240508/conbon_v-072814348-masks_conbon_v.png"},conbon_h:{width:.55,height:.55,left:"49.5%",top:"40%",orientation:"landscape",overlayImg:"https://storage.googleapis.com/texture-image/20240510/conbon_h-002815715-new_conbon_h.png"},poster_vu:{width:.82,height:.82,left:"44%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_vu-080911471-masks_poster_vu.png"},poster_h:{width:.82,height:.82,left:"44%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_h-081819072-models_poster_h.png"},poster_vs:{width:.82,height:.82,left:"44%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240509/poster_vs-180239779-models_poster_vs.png"},conbon_hl:{width:.85,height:.85,left:"46%",top:"39%",orientation:"landscape",overlayImg:"https://storage.googleapis.com/texture-image/20240510/conbon_hl-040108228-models_conbon_hl.png"},poster_hs:{width:.82,height:.82,left:"44%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240509/poster_hs-181336719-models_poster_hs.png"},poster_v:{width:.82,height:.82,left:"44%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_v-082633244-models_poster_v.png"},conbon_u:{width:.82,height:.82,left:"44%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240509/conbon_u-181347300-models_conbon_u.png"}},reloadCount:0,orientation:"portrait"}},computed:{canvasWidthtest(){return this.appWidth*.9},canvasHeighttest(){return this.appWidth*.9},canvasWidth(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].width:this.appWidth*.9},canvasHeight(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].height:this.appWidth*.9}},methods:{overlayImgSrc(e){console.log("更新遮罩：",e);const t=this.productInfo[e];if(t)return this.canvasLeft=t.left,this.canvasTop=t.top,this.orientation=t.orientation,t.overlayImg},checkOrientation(){const t=window.matchMedia("(orientation: landscape)").matches;if(this.selectedProduct){console.log("方向確認",this.selectedProduct);const n=this.productInfo[this.selectedProduct].orientation;n==="landscape"&&!t||n==="portrait"&&t?n==="landscape"?(this.message="請旋轉手機至橫向",this.showOverlay("請旋轉手機至橫向")):(this.message="請旋轉手機至直向",this.showOverlay("請旋轉手機至直向")):(n==="landscape"&&this.showColorPicker!==!1&&(document.querySelector(".app").style.maxWidth="100%",document.querySelector(".nav").style.maxWidth="100%",document.querySelector(".canvas-container").style.paddingTop="35%",document.querySelector(".tools-container").style.display="flex",document.querySelector(".tools-container").style.position="fixed",document.querySelector(".tools-container").style.bottom="0",document.querySelector(".tools-container").style.zIndex="10",document.querySelector(".tools-container").classList.add("landscape"),document.querySelector(".color-picker").classList.add("landscape"),document.querySelector(".tool-list").classList.add("landscape"),document.querySelector(".stroke-container").classList.add("landscape"),document.querySelector(".stroke-width").classList.add("landscape")),this.hideOverlay(),this.message="")}},showOverlay(e){if(document.querySelector(".app")){const n=document.createElement("div");n.id="overlay",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.width="100%",n.style.height="100%",n.style.background="rgba(1, 1, 1, 1)",n.style.color="#fff",n.style.display="flex",n.style.alignItems="center",n.style.justifyContent="center",n.style.fontSize="24px",n.style.zIndex="10",n.innerHTML=e,document.querySelector(".app").appendChild(n)}},hideOverlay(){const e=document.getElementById("overlay");e&&e.parentNode.removeChild(e)},updateOverlayImgSrc(){this.selectedProduct&&this.productInfo[this.selectedProduct]?this.overlayImgSrc=this.productInfo[this.selectedProduct].overlayImg:(this.overlayImgSrc=this.productInfo.conbon_c.overlayImg,console.log("沒有找到其他招牌"))},backwardButton(){this.$router.push("/models")},updateAppWidth(){this.appWidth=this.$refs.appContainer.offsetWidth,this.ctx.strokeStyle=this.currentColor},changeColor(e){this.ctx.strokeStyle=e,this.currentColor=e,this.eraser(!1)},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.backgroundColor="#FFFFFF",this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.eraser(!1)},fillCanvas(){this.history.push(this.canvas.toDataURL()),this.ctx.fillStyle=this.currentColor,this.backgroundColor=this.currentColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.history.push(this.canvas.toDataURL())},startPainting(e){this.painting=!0,e.touches&&e.touches.length>0?(this.history.push(this.canvas.toDataURL()),this.startTouching(e.touches[0])):(this.history.push(this.canvas.toDataURL()),this.draw(e))},draw(e){if(!this.painting||!this.canvasEnabled)return;const t=e.offsetX||e.touches[0].clientX-this.$refs.canvas.offsetLeft,n=e.offsetY||e.touches[0].clientY-this.$refs.canvas.offsetTop;this.ctx.lineWidth=this.currentLineWidth,this.ctx.lineCap="round",this.ctx.lineTo(t,n),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t,n)},undo(){this.history.length>0&&(this.redoHistory.push(this.history.pop()),this.restoreCanvas(this.history[this.history.length-1]),this.redoHistory.push(this.history.pop()))},redo(){if(this.redoHistory.length>0){for(let e=0;e<2;e++)if(this.redoHistory.length>0){const t=this.redoHistory.pop();this.history.push(t),this.restoreCanvas(t)}}},restoreCanvas(e){const t=new Image;t.onload=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(t,0,0)},t.src=e},paintingSelect(){this.ctx.strokeStyle=this.currentColor},finishedPainting(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},startTouching(e){e.preventDefault(),this.painting=!0,this.history.push(this.canvas.toDataURL()),this.ctx.lineWidth=10,this.ctx.lineCap="round";const t=this.canvas.getBoundingClientRect(),n=e.touches[0].clientX-t.left,h=e.touches[0].clientY-t.top;this.lastX=n,this.lastY=h},dragging(e){e.preventDefault();const t=this.canvas.getBoundingClientRect(),n=e.touches[0].clientX-t.left,h=e.touches[0].clientY-t.top;!this.painting||!this.canvasEnabled||(this.ctx.lineWidth=this.currentLineWidth,this.ctx.beginPath(),this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(n,h),this.ctx.stroke(),this.lastX=n,this.lastY=h)},finishDragging(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},eraser(e){e?this.ctx.strokeStyle="#FFFFFF":this.ctx.strokeStyle=this.currentColor},saveCanvas(){const e=document.createElement("canvas"),t=e.getContext("2d"),n=1024,h=1024;e.width=n,e.height=h,t.drawImage(this.canvas,0,0,n,h),e.toBlob(i=>{O.saveAs(i,"canvas_image.png")},"image/png")},uploadImage(){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=1024,e.height=1024,t.drawImage(this.canvas,0,0,1024,1024),e.toBlob(n=>{const h=new FormData;h.append("image",n,"canvas_image.png"),h.append("type",this.selectedProduct),fetch("https://daotaiwanapi.onrender.com/upload",{method:"POST",body:h}).then(i=>i.json()).then(i=>{console.log(i),document.cookie=`textureCookie=${JSON.stringify(i.data)}; expires=${new Date(Date.now()+3600*1e3).toUTCString()}; path=/`,alert(JSON.stringify(i.message)),this.$router.push("/result")}).catch(i=>{console.error("Error:",i),alert("Failed to upload image")})},"image/png")},doneDrawing(){window.matchMedia("(orientation: landscape)").removeEventListener("change",()=>this.checkOrientation()),this.canvasEnabled=!1,this.showColorPicker=!1},startDragging(e){this.strokeDragging=!0},handleDragging(e){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),n=t.top,h=t.bottom;let i=e.pageY-this.offsetY;i=Math.max(n,Math.min(i,h));const s=this.$refs.strokeWidth.parentElement.offsetHeight,o=(i-n)/s*100;this.$refs.strokeWidth.style.top=`${o}%`;const v=5+(100-o)/100*25;this.currentLineWidth=v,console.log(this.currentLineWidth)}},handleTouchDragging(e){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),n=t.top,h=t.bottom;let i=e.touches[0].clientY-this.offsetY;i=Math.max(n,Math.min(i,h));const s=this.$refs.strokeWidth.parentElement.offsetHeight,o=(i-n)/s*100;this.$refs.strokeWidth.style.top=`${o}%`;const v=5+(100-o)/100*25;this.currentLineWidth=v,console.log(this.currentLineWidth)}},stopDragging(){this.strokeDragging=!1},reloadComponent(){if(this.reloadCount<3){console.log(this.reloadCount),this.reloadCount++,this.$forceUpdate();const e=document.querySelector(".overlay-img");e?(e.style.zIndex="3",console.log("Reloading...")):console.log("Stopped reloading.")}}},mounted(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.updateAppWidth(),window.addEventListener("resize",this.updateAppWidth),this.canvas.height=450*.9,this.canvas.width=450*.9,this.$nextTick(()=>{this.ctx.strokeStyle=this.colors[0],this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)});const e=JSON.parse(localStorage.getItem("selectedProduct"));e&&(this.selectedProduct=e,this.overlayImgSrc(this.selectedProduct)),this.checkOrientation(),document.addEventListener("mousemove",this.handleDragging),document.addEventListener("mouseup",this.stopDragging),document.addEventListener("touchstart",this.startStrokeDragging),document.addEventListener("touchmove",this.handleTouchDragging),document.addEventListener("touchend",this.stopDragging),this.reloadComponent(),this.reloadComponent(),this.reloadComponent(),this.reloadComponent()},beforeUnmount(){window.removeEventListener("resize",this.updateAppWidth),document.removeEventListener("mousemove",this.handleDragging),document.removeEventListener("mouseup",this.stopDragging),document.removeEventListener("touchmove",this.handleTouchDragging),document.removeEventListener("touchend",this.stopDragging),window.matchMedia("(orientation: landscape)").removeEventListener("change",()=>this.checkOrientation())},updated(){this.checkOrientation(),this.updateAppWidth()}},g=e=>(F("data-v-e98c8c16"),e=e(),T(),e),Y=g(()=>a("h1",{class:"d-none"},"繪製貼圖",-1)),X={key:0,class:"d-none"},K={id:"app",class:"app position-relative",ref:"appContainer"},q={key:0,class:"nav my-0 mx-auto d-flex justify-content-between align-items-center"},j={class:"w-25"},G=g(()=>a("ion-icon",{name:"chevron-back-outline"},null,-1)),Z=[G],z=g(()=>a("img",{class:"logo_sm d-none",src:R,alt:"logo_sm"},null,-1)),$={class:"w-25 d-flex"},tt=g(()=>a("button",{type:"button",class:"d-none",id:"rotateButton"},"rotate",-1)),et={class:"fs-6 d-none"},ot={key:1,class:"landscape-upload-button d-flex justify-content-center mb-5 pb-5 position-fixed"},st={class:"canvas-container"},nt=["src"],it=["width","height"],at={key:0,class:"stroke-container",ref:"strokeContainer"},rt=g(()=>a("img",{src:H,class:"stroke-bar",alt:"stroke-bar"},null,-1)),ct={class:"tools-container"},lt={key:0,class:"tool-list d-flex"},ht=g(()=>a("i",{class:"fas fa-paint-brush"},null,-1)),dt=[ht],gt=g(()=>a("img",{src:J,alt:""},null,-1)),ut=[gt],pt=g(()=>a("img",{src:M,alt:""},null,-1)),ft=[pt],mt=g(()=>a("img",{src:N,alt:""},null,-1)),vt=[mt],At=g(()=>a("i",{class:"fas fa-eraser"},null,-1)),yt=[At],Ct=g(()=>a("i",{class:"fas fa-trash"},null,-1)),wt=[Ct],kt=g(()=>a("i",{class:"fas fa-save"},null,-1)),xt=[kt],bt={key:1,class:"color-picker"},Dt=["onClick"],It={key:2,class:"d-flex justify-content-center mb-5 pb-5"};function Lt(e,t,n,h,i,s){return m(),f("div",null,[Y,i.selectedProduct?(m(),f("div",X,[a("h2",null,"選中的物件: "+b(i.selectedProduct.name),1),a("p",null,"物件描述: "+b(i.selectedProduct.description),1)])):A("",!0),a("div",K,[i.showColorPicker?(m(),f("nav",q,[a("div",j,[a("a",{href:"#",class:"button-circle",onClick:t[0]||(t[0]=u((...o)=>s.backwardButton&&s.backwardButton(...o),["prevent"]))},Z)]),z,a("div",$,[a("a",{class:"done-button",href:"#",onClick:t[1]||(t[1]=u((...o)=>s.doneDrawing&&s.doneDrawing(...o),["prevent"]))},"完成")])])):A("",!0),tt,a("h2",et,b(i.message),1),!i.showColorPicker&&!i.isLandscape?(m(),f("div",ot,[a("a",{class:"upload-button",href:"#",onClick:t[2]||(t[2]=u((...o)=>s.uploadImage&&s.uploadImage(...o),["prevent"]))},"確認上傳")])):A("",!0),a("div",st,[a("img",{src:s.overlayImgSrc(this.selectedProduct),class:L(["overlay-img",this.selectedProduct]),alt:"conbon_c"},null,10,nt),a("canvas",{id:"canvas",onMousedown:t[3]||(t[3]=(...o)=>s.startPainting&&s.startPainting(...o)),onMouseup:t[4]||(t[4]=(...o)=>s.finishedPainting&&s.finishedPainting(...o)),onMousemove:t[5]||(t[5]=(...o)=>s.draw&&s.draw(...o)),onTouchstart:t[6]||(t[6]=(...o)=>s.startTouching&&s.startTouching(...o)),onTouchmove:t[7]||(t[7]=(...o)=>s.dragging&&s.dragging(...o)),onTouchend:t[8]||(t[8]=(...o)=>s.finishDragging&&s.finishDragging(...o)),width:s.canvasWidth,height:s.canvasHeight,style:S({left:i.canvasLeft,top:i.canvasTop})},null,44,it),i.showColorPicker?(m(),f("div",at,[a("div",{class:"stroke-width",draggable:"true",ref:"strokeWidth",onMousedown:t[9]||(t[9]=(...o)=>s.startDragging&&s.startDragging(...o)),onTouchstart:t[10]||(t[10]=(...o)=>s.startDragging&&s.startDragging(...o)),onMousemove:t[11]||(t[11]=(...o)=>s.handleDragging&&s.handleDragging(...o)),onTouchmove:t[12]||(t[12]=(...o)=>s.handleTouchDragging&&s.handleTouchDragging(...o)),onMouseup:t[13]||(t[13]=(...o)=>s.stopDragging&&s.stopDragging(...o)),onTouchend:t[14]||(t[14]=(...o)=>s.stopDragging&&s.stopDragging(...o))},null,544),rt],512)):A("",!0)]),a("div",ct,[i.showColorPicker?(m(),f("div",lt,[a("a",{class:"painting-button",onClick:t[15]||(t[15]=u((...o)=>s.paintingSelect&&s.paintingSelect(...o),["prevent"]))},dt),a("a",{class:"clear-button",onClick:t[16]||(t[16]=u((...o)=>s.undo&&s.undo(...o),["prevent"]))},ut),a("a",{class:"save-button",onClick:t[17]||(t[17]=u((...o)=>s.redo&&s.redo(...o),["prevent"]))},ft),a("a",{class:"fill-button",onClick:t[18]||(t[18]=u((...o)=>s.fillCanvas&&s.fillCanvas(...o),["prevent"]))},vt),a("a",{class:"eraser-button",onClick:t[19]||(t[19]=u(o=>s.eraser(!0),["prevent"]))},yt),a("a",{class:"clear-button",onClick:t[20]||(t[20]=u((...o)=>s.clearCanvas&&s.clearCanvas(...o),["prevent"]))},wt),a("a",{class:"save-button d-none",onClick:t[21]||(t[21]=u((...o)=>s.saveCanvas&&s.saveCanvas(...o),["prevent"]))},xt)])):A("",!0),i.showColorPicker?(m(),f("div",bt,[(m(!0),f(W,null,U(i.colors,o=>(m(),f("div",{key:o},[a("div",{class:L(["color-box",{currentColor:o===this.currentColor}]),style:S({backgroundColor:o,outlineColor:o}),onClick:v=>s.changeColor(o)},null,14,Dt)]))),128))])):A("",!0),!i.showColorPicker&&i.isLandscape?(m(),f("div",It,[a("a",{class:"upload-button",href:"#",onClick:t[22]||(t[22]=u((...o)=>s.uploadImage&&s.uploadImage(...o),["prevent"]))},"確認上傳")])):A("",!0)])],512)])}const Bt=P(Q,[["render",Lt],["__scopeId","data-v-e98c8c16"]]);export{Bt as default};
