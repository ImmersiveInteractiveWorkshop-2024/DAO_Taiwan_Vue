import{io as P}from"https://cdn.socket.io/4.7.5/socket.io.esm.min.js";import{_ as E,c as f,a as r,h as u,g as y,t as F,n as m,i as S,F as _,f as W,o as v,p as U,e as T}from"./index-Be98cQJU.js";import{_ as R}from"./logo_small-jffi31SL.js";var b=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I={exports:{}};(function(e,t){(function(i,h){h()})(b,function(){function i(a,c){return typeof c>"u"?c={autoBom:!1}:typeof c!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function h(a,c,g){var l=new XMLHttpRequest;l.open("GET",a),l.responseType="blob",l.onload=function(){C(l.response,c,g)},l.onerror=function(){console.error("could not download file")},l.send()}function n(a){var c=new XMLHttpRequest;c.open("HEAD",a,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function o(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(c)}}var s=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof b=="object"&&b.global===b?b:void 0,A=s.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),C=s.saveAs||(typeof window!="object"||window!==s?function(){}:"download"in HTMLAnchorElement.prototype&&!A?function(a,c,g){var l=s.URL||s.webkitURL,d=document.createElement("a");c=c||a.name||"download",d.download=c,d.rel="noopener",typeof a=="string"?(d.href=a,d.origin===location.origin?o(d):n(d.href)?h(a,c,g):o(d,d.target="_blank")):(d.href=l.createObjectURL(a),setTimeout(function(){l.revokeObjectURL(d.href)},4e4),setTimeout(function(){o(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,c,g){if(c=c||a.name||"download",typeof a!="string")navigator.msSaveOrOpenBlob(i(a,g),c);else if(n(a))h(a,c,g);else{var l=document.createElement("a");l.href=a,l.target="_blank",setTimeout(function(){o(l)})}}:function(a,c,g,l){if(l=l||open("","_blank"),l&&(l.document.title=l.document.body.innerText="downloading..."),typeof a=="string")return h(a,c,g);var d=a.type==="application/octet-stream",B=/constructor/i.test(s.HTMLElement)||s.safari,D=/CriOS\/[\d]+/.test(navigator.userAgent);if((D||d&&B||A)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var w=k.result;w=D?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=w:location=w,l=null},k.readAsDataURL(a)}else{var L=s.URL||s.webkitURL,x=L.createObjectURL(a);l?l.location=x:location.href=x,l=null,setTimeout(function(){L.revokeObjectURL(x)},4e4)}});s.saveAs=C.saveAs=C,e.exports=C})})(I);var O=I.exports;const H="/false/assets/stroke-bar-JHactPn7.png",J="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAkCAYAAAD/yagrAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAKLSURBVFhH1ZhNTsJAFMcpbDCayAkUTyAcwAS2bFqBA8AJhBOIJxBOAOwBy9KV6AWsJxBPIIluAf+PDM3M0OlHGEuZxIUt782P//uYNxipI1nGkXCmtIJallUwDOPc78uv1+sP27YXUQXSBlqr1d6xeSECgI3P2uPxeBjGRgsoKZnJZAg08oLCc0ShDWACVy5doHmAfkam5AwA3J1MJm2VDy2g5LxarTagjIUNcz7AOXzmWvUetgPANr3eawONoma9Xi8ByoLNnWyH5w+A7cjPDwK6hUABEuwAf0KngOrl0Wg042EPCkogKETKb0eCnaG4yokCZfndgoqPPNhyuSyi39IX2KyDK8qlAbUnc/u/nKuJAUXX6EDVew70FUVVSpyirBO8cOF3kKfFxIGiqHIoqm8+TwHqRjx06JmjJ+QOnedthIXairYlK4p9vrBHPpKiDJLC4g4dqMorVOVcFylyVKh8gEbLUS/ITbvwaMr7QKP5d2HPn1Q9hL4VSlEVJIyHcNLYB4y3VUxft/xEpczRuCAJWJ5l5fzcRNBLlbgg2T59MNCZ7y6ANuVi3QGNC5IGEgD1kevCWCgXkWeOViqVy2w2+wbjC0lpBw58J/CQ+UrzaIFanAxI9nSfWq1WJa87laAoWsQPHJyF3FTrxxikpWp5Ligbt4TrBIypDWkFUjjroS93/G6nsqK/ADuVEvs/YacM0B3nVKoIoKZp3uC8fQbsCW+AvHHwbKpJ2kU6nXbkCT7It1fV09V3BkPheuB38QraRMd7VR9NHKzfyZQoWN+SZmfwThoglMLAoCO0QT4Ce48KVveYtzcoOfCCTSQog82jrdj0kww6AE34ND/GtgJDHxtJwEZHA/oHlng8NI7UMm4AAAAASUVORK5CYII=",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJ/SURBVFhHzZdLTsJAGMdbOIDcQDyBeACjnsAWWLkRboAL1xTXJugJZOcGaCUcoCTuUS8gNxCWJDz8j2mbdmg705kR2oQQ6Pf4fY+Z+UbXcv7oOefThABN07xgBWbb9oQlw/OeC7Ber19uNptbGLzUdb3MY3i73c6hc+U4zgePfJJMKqBhGJVisdglYCJOANkZDoeWiK6vkwhYrVYbEOoiYyVRBwBsArAnqk/0YgEJHMBeUgwv4JxVOgcl7qHEc6WAXlmntFEAfQLaWq/XrqzTLMCRDAKuVCgUpvRCUNFLWaDCshFAlNYCXJsyZg4GA0fUgaweDfhDLYo3wBmyTmT0A8CY3lug38r77Le4QAJAurzouwm2CKH9TyZjtG4iIASfUd6WSmcitgLAWq1GFsK1bwQZvEMGn0SMqtRJK7H0MUWDkj7HNmaT//Hd7Pf7LiuYtBIrX8Hocxe7RDAJ8RyF4RKT7eQvOvJAeYYSn7AizPIegDMAHod1WJCRfRB9uKWUlZYZ9iNJCCUjcaigAXtQInNf8GAvPJOd6cL2kgaRpEzSZ3EZ8983lcUZphLzUJA74xYibKFPyJAaeRChhZ7sZOm5NFneTMbOg+iVnVKHnLlkAeE3+cg+FSRj56xHxe5xp3kkxhMnagakLFigj2A1QNLV0lar1eloNPpKvZN45bagfaSMiNMQsviKLN4wb3VkiMXCsRCpQe9hnL5SxeIySBSWy+X5eDx+ZwKGrXtHVQX/lRXBkaMvOP99m8heG9l7SO1BFQD/torzAneQDPLuf36SMvWgbGalz2JZAJa+9DTDciD7XmoelHXOo+/dHF1PtsFz395rD/IEQcvkHvAX8ndONHfmN6AAAAAASUVORK5CYII=",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIbSURBVFhHzZj9UQIxEMUNFCB0AB1oBWAF3gD/ix3QgViB0gEF8HEdiBWAFYgdYAGALww4uVxy2SzJwc0wN0M2e7/b9/JxETeMK0mSu2q1upRd9/v982w2GzPSkLoIUpQSBLhapVJZCiEap79jQnoDdrvdOcAS/cViQXoBdjqdASr3Zqt6DEgyoOq7IluEhiQBmnxXFiQJ0Oa7MiCdgC7fxYYsBKT6LiakFdDXd7EgrYAc38WANAKe47vQkDnAEL4LCZkBDOm7UJAZwNC+CwH5DxjLdwXr9gbbtLprN3UAjO07EwTW7E8Atp2AZflOAxlNp9OBC062C/hujPsTJThAzC9y9AGXUnMJeG+BPV6L2oEbB0m/drtdkqbp2ieHrKB8m0efToxYsqR6bgEPNvABtELDLePBri7ekuYAlVG8CAnJldQIGAGSLakVMBDk2ZIWAp4DyZG01+u1MbJb+I0wujcmQxu3W8eVxceT3pJKOLzUxxFqhbnxngzoUUm2pJh/v7XTiVcsfUOnxGpAUSU5kp5yA24IuBf1Wci3gdRNXWrnV50F0ltSFUav3qkNkLkqOgGPcssDo8PijvtiMplIf7IurFzyXEee7+QuAK4hc1NtIAGySCydTPKqodvttq7KfHWAGM0ZptIBteklU2dI/AOJGxeVWD7ctoPCyH7Q/V16BZWppg+gBFWr4b6C995Ne8WLAVIH3tUD/gGr1U028S9yRQAAAABJRU5ErkJggg==",V=P("https://daotaiwanapi.onrender.com",{withCredentials:!1});V.on("message",function(e){console.log("伺服器傳送訊息:",e)});const Q={data(){return{activeButton:null,buttons:[{label:"painting",active:!1},{label:"undo",active:!1},{label:"redo",active:!1},{label:"fill",active:!1},{label:"erase",active:!1},{label:"clear",active:!1}],canvasLeft:"50%",canvasTop:"50%",clipPath:null,selectedProduct:null,message:" ",painting:!1,canvas:null,ctx:null,colors:["#C73232","#E27200","#EAC252","#E8DF00","#88D04D","#2E8100","#04CBF0","#4234E9","#9400F2","#D526C7","#FFFFFF","#000000"],currentColor:"#C73232",backgroundColor:"#FFFFFF",appWidth:0,lastX:0,lastY:0,showColorPicker:!0,canvasEnabled:!0,isLandscape:!1,rotateButton:null,history:[],redoHistory:[],strokeDragging:!1,startX:0,startY:0,offsetX:0,offsetY:0,currentLineWidth:15,productInfo:{conbon_c:{width:.8,height:.8,left:"43.85%",top:"49.5%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240509/conbon_c-201802413-new_conbon_c.png",clipPath:"circle(47% at 50% 50%)"},conbon_v:{width:1,height:1,left:"50%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240508/conbon_v-072814348-masks_conbon_v.png",clipPath:"inset(1.5% 34.5% 1.5% 34.5%)"},conbon_h:{width:.55,height:.55,left:"49.5%",top:"29%",orientation:"landscape",overlayImg:"https://storage.googleapis.com/texture-image/20240510/conbon_h-002815715-new_conbon_h.png",clipPath:"inset(28.2% 2% 24.1% 2%)"},poster_vu:{width:.82,height:.82,left:"44%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_vu-080911471-masks_poster_vu.png",clipPath:"inset(6.5% 25% 1% 40.5%)"},poster_h:{width:.46,height:.46,left:"50%",top:"35%",orientation:"landscape",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_h-081819072-models_poster_h.png",clipPath:"inset(27.5% 8.5% 24% 9%)"},poster_vs:{width:.46,height:.46,left:"50%",top:"35%",orientation:"landscape",overlayImg:"https://storage.googleapis.com/texture-image/20240509/poster_vs-180239779-models_poster_vs.png",clipPath:"inset(24.2% 9% 20% 9%)"},conbon_hl:{width:.85,height:.85,left:"46%",top:"39%",orientation:"landscape",overlayImg:"https://storage.googleapis.com/texture-image/20240510/conbon_hl-040108228-models_conbon_hl.png",clipPath:"inset(41.9% 0% 41.1% 0%)"},poster_hs:{width:.32,height:.32,left:"50%",top:"34%",orientation:"landscape",overlayImg:"https://storage.googleapis.com/texture-image/20240509/poster_hs-181336719-models_poster_hs.png",clipPath:"inset(8% 1.2% 8% 1.2%)"},poster_v:{width:.75,height:.75,left:"50%",top:"55%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240508/poster_v-082633244-models_poster_v.png",clipPath:"inset(0% 18.5% 6% 19.5%)"},conbon_u:{width:.7,height:.7,left:"48%",top:"42%",orientation:"portrait",overlayImg:"https://storage.googleapis.com/texture-image/20240509/conbon_u-181347300-models_conbon_u.png",clipPath:"inset(4% 14% 5% 16.8%)"}},orientation:"portrait",buttonDisabled:!1,buttonText:"確認上傳"}},computed:{canvasWidthtest(){return this.appWidth*.9},canvasHeighttest(){return this.appWidth*.9},canvasWidth(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].width:this.appWidth*.9},canvasHeight(){return this.selectedProduct&&this.productInfo[this.selectedProduct]?this.appWidth*this.productInfo[this.selectedProduct].height:this.appWidth*.9}},methods:{fullScreen(){this.enterFullscreen(),this.hideOverlay()},overlayImgSrc(e){console.log("更新遮罩：",e);const t=this.productInfo[e];if(t)return this.canvasLeft=t.left,this.canvasTop=t.top,this.orientation=t.orientation,this.clipPath=t.clipPath,t.overlayImg},white(){this.ctx.strokeStyle="#FFF",this.currentColor="#FFF"},checkOrientation(){const t=window.matchMedia("(orientation: landscape)").matches;if(this.selectedProduct){console.log("方向確認",this.selectedProduct);const i=this.productInfo[this.selectedProduct].orientation;i==="landscape"&&!t||i==="portrait"&&t?i==="landscape"?(this.message="請旋轉手機至橫向",this.showOverlay("請旋轉手機至橫向")):(this.message="請旋轉手機至直向",this.showOverlay("請旋轉手機至直向")):(i==="landscape"&&this.showColorPicker!==!1&&(document.querySelector(".app").style.maxWidth="100%",document.querySelector(".nav").style.maxWidth="100%",document.querySelector(".canvas-container").style.paddingTop="35%",document.querySelector(".tools-container").classList.add("landscape"),document.querySelector(".color-picker").classList.add("landscape"),document.querySelector(".tool-list").classList.add("landscape"),document.querySelector(".stroke-container").classList.add("landscape"),document.querySelector(".stroke-width").classList.add("landscape"),document.querySelector(".color-box").classList.add("landscape")),this.hideOverlay(),this.message="")}},showOverlay(e){if(document.querySelector(".app")){const i=document.createElement("div");i.id="overlay",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.background="rgba(255, 255, 255, 1)",i.style.color="#E13237",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.style.fontSize="24px",i.style.zIndex="10",i.innerHTML=e,i.touvhAction="none",document.querySelector(".app").appendChild(i)}},hideOverlay(){const e=document.getElementById("overlay");e&&(e.parentNode.removeChild(e),this.ctx.strokeStyle=this.colors[0],this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height))},updateOverlayImgSrc(){this.selectedProduct&&this.productInfo[this.selectedProduct]?this.overlayImgSrc=this.productInfo[this.selectedProduct].overlayImg:(this.overlayImgSrc=this.productInfo.conbon_c.overlayImg,console.log("沒有找到其他招牌"))},toggleActive(e){console.log("yess"),this.activeButton=e,console.log(this.activeButton),this.buttons.forEach((t,i)=>{i!==e&&(t.active=!1)})},backwardButton(){this.$router.push("/models")},updateAppWidth(){this.appWidth=this.$refs.appContainer.offsetWidth,this.ctx.strokeStyle=this.currentColor},changeColor(e){this.ctx.strokeStyle=e,this.currentColor=e,this.eraser(!1)},clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.backgroundColor="#FFFFFF",this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.eraser(!1)},fillCanvas(){this.history.push(this.canvas.toDataURL()),this.ctx.fillStyle=this.currentColor,this.backgroundColor=this.currentColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.history.push(this.canvas.toDataURL())},startPainting(e){this.painting=!0,e.touches&&e.touches.length>0?(this.history.push(this.canvas.toDataURL()),this.startTouching(e.touches[0])):(this.history.push(this.canvas.toDataURL()),this.draw(e))},draw(e){if(!this.painting||!this.canvasEnabled)return;const t=e.offsetX||e.touches[0].clientX-this.$refs.canvas.offsetLeft,i=e.offsetY||e.touches[0].clientY-this.$refs.canvas.offsetTop;this.ctx.lineWidth=this.currentLineWidth,this.ctx.lineCap="round",this.ctx.lineTo(t,i),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(t,i)},undo(){this.history.length>0&&(this.redoHistory.push(this.history.pop()),this.restoreCanvas(this.history[this.history.length-1]),this.redoHistory.push(this.history.pop()))},redo(){if(this.redoHistory.length>0){for(let e=0;e<2;e++)if(this.redoHistory.length>0){const t=this.redoHistory.pop();this.history.push(t),this.restoreCanvas(t)}}},restoreCanvas(e){const t=new Image;t.onload=()=>{this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(t,0,0)},t.src=e},paintingSelect(){this.ctx.strokeStyle=this.currentColor},finishedPainting(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},startTouching(e){e.preventDefault(),this.painting=!0,this.history.push(this.canvas.toDataURL()),this.ctx.lineWidth=10,this.ctx.lineCap="round";const t=this.canvas.getBoundingClientRect(),i=e.touches[0].clientX-t.left,h=e.touches[0].clientY-t.top;this.lastX=i,this.lastY=h},dragging(e){e.preventDefault();const t=this.canvas.getBoundingClientRect(),i=e.touches[0].clientX-t.left,h=e.touches[0].clientY-t.top;!this.painting||!this.canvasEnabled||(this.ctx.lineWidth=this.currentLineWidth,this.ctx.beginPath(),this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(i,h),this.ctx.stroke(),this.lastX=i,this.lastY=h)},finishDragging(){this.painting=!1,this.ctx.beginPath(),this.history.push(this.canvas.toDataURL())},eraserAndToggleActive(){this.toggleActive(4),this.ctx.strokeStyle="#FFFFFF"},eraser(e){e?(this.ctx.strokeStyle="#FFFFFF",console.log("11111")):this.ctx.strokeStyle=this.currentColor},saveCanvas(){const e=document.createElement("canvas"),t=e.getContext("2d"),i=1024,h=1024;e.width=i,e.height=h,t.drawImage(this.canvas,0,0,i,h),e.toBlob(n=>{O.saveAs(n,"canvas_image.png")},"image/png")},uploadImage(){this.buttonDisabled=!0,this.buttonText="街景生產中 ⋯ ";const e=document.createElement("canvas"),t=e.getContext("2d");e.width=1024,e.height=1024,t.drawImage(this.canvas,0,0,1024,1024),e.toBlob(i=>{const h=new FormData;h.append("image",i,"canvas_image.png"),h.append("type",this.selectedProduct),fetch("https://daotaiwanapi.onrender.com/upload",{method:"POST",body:h}).then(n=>n.json()).then(n=>{console.log(n),document.cookie=`textureCookie=${JSON.stringify(n.data)}; expires=${new Date(Date.now()+3600*1e3).toUTCString()}; path=/`,alert(JSON.stringify(n.message)),this.buttonText="確認上傳",this.buttonDisabled=!1,this.$router.push("/result")}).catch(n=>{this.buttonText="確認上傳",this.buttonDisabled=!1,console.error("Error:",n),alert("圖片上傳錯誤")})},"image/png")},doneDrawing(){window.matchMedia("(orientation: landscape)").removeEventListener("change",()=>this.checkOrientation()),this.canvasEnabled=!1,this.showColorPicker=!1},startDragging(e){this.strokeDragging=!0},handleDragging(e){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),i=t.top,h=t.bottom;let n=e.pageY-this.offsetY;n=Math.max(i,Math.min(n,h));const o=this.$refs.strokeWidth.parentElement.offsetHeight,s=(n-i)/o*100;this.$refs.strokeWidth.style.top=`${s}%`;const A=5+(100-s)/100*25;this.currentLineWidth=A,console.log(this.currentLineWidth)}},handleTouchDragging(e){if(this.strokeDragging){const t=this.$refs.strokeContainer.getBoundingClientRect(),i=t.top,h=t.bottom;let n=e.touches[0].clientY-this.offsetY;n=Math.max(i,Math.min(n,h));const o=this.$refs.strokeWidth.parentElement.offsetHeight,s=(n-i)/o*100;this.$refs.strokeWidth.style.top=`${s}%`;const A=5+(100-s)/100*25;this.currentLineWidth=A,console.log(this.currentLineWidth)}},stopDragging(){this.strokeDragging=!1},enterFullscreen(){const e=this.$refs.appContainer;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}},mounted(){this.canvas=document.getElementById("canvas"),this.ctx=this.canvas.getContext("2d"),this.updateAppWidth(),window.addEventListener("resize",this.updateAppWidth),this.canvas.height=450*.9,this.canvas.width=450*.9,this.$nextTick(()=>{this.ctx.strokeStyle=this.colors[0],this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)});const e=JSON.parse(localStorage.getItem("selectedProduct"));e&&(this.selectedProduct=e,this.overlayImgSrc(this.selectedProduct)),this.checkOrientation(),document.addEventListener("mousemove",this.handleDragging),document.addEventListener("mouseup",this.stopDragging),document.addEventListener("touchstart",this.startStrokeDragging),document.addEventListener("touchmove",this.handleTouchDragging),document.addEventListener("touchend",this.stopDragging),this.ctx.strokeStyle=this.colors[0],this.ctx.fillStyle="#ffffff",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},beforeUnmount(){window.removeEventListener("resize",this.updateAppWidth),document.removeEventListener("mousemove",this.handleDragging),document.removeEventListener("mouseup",this.stopDragging),document.removeEventListener("touchmove",this.handleTouchDragging),document.removeEventListener("touchend",this.stopDragging),window.matchMedia("(orientation: landscape)").removeEventListener("change",()=>this.checkOrientation())},updated(){this.checkOrientation(),this.updateAppWidth()}},p=e=>(U("data-v-33c5bdfc"),e=e(),T(),e),Y={key:0,class:"nav my-0 mx-auto d-flex justify-content-between align-items-center"},X={class:"w-25"},K=p(()=>r("ion-icon",{name:"chevron-back-outline"},null,-1)),q=[K],j=p(()=>r("img",{class:"logo_sm d-none",src:R,alt:"logo_sm"},null,-1)),G={class:"w-25 d-flex"},Z={key:1,class:"landscape-upload-button d-flex justify-content-center mb-5 pb-5 position-fixed"},z=["disabled"],$={class:"canvas-container"},tt=["src"],et=["width","height"],st={key:0,class:"stroke-container",ref:"strokeContainer"},ot=p(()=>r("img",{src:H,class:"stroke-bar",alt:"stroke-bar"},null,-1)),it={class:"tools-container"},nt={key:0,class:"tool-list d-flex"},at=p(()=>r("i",{class:"fas fa-paint-brush"},null,-1)),rt=[at],ct=p(()=>r("img",{src:J,alt:""},null,-1)),lt=[ct],ht=p(()=>r("img",{src:M,alt:""},null,-1)),dt=[ht],gt=p(()=>r("img",{src:N,alt:""},null,-1)),ut=[gt],pt=p(()=>r("i",{class:"fas fa-eraser"},null,-1)),ft=[pt],vt=p(()=>r("i",{class:"fas fa-trash"},null,-1)),mt=[vt],At=p(()=>r("i",{class:"fas fa-save"},null,-1)),yt=[At],wt={key:1,class:"color-picker"},bt=["onClick"],Ct={key:2,class:"d-flex justify-content-center mb-5 pb-5"};function kt(e,t,i,h,n,o){return v(),f("div",null,[r("div",{id:"app",class:"app position-relative",ref:"appContainer",onClick:t[23]||(t[23]=(...s)=>o.fullScreen&&o.fullScreen(...s))},[n.showColorPicker?(v(),f("nav",Y,[r("div",X,[r("a",{href:"#",class:"button-circle",onClick:t[0]||(t[0]=u((...s)=>o.backwardButton&&o.backwardButton(...s),["prevent"]))},q)]),j,r("div",G,[r("a",{class:"done-button",href:"#",onClick:t[1]||(t[1]=u((...s)=>o.doneDrawing&&o.doneDrawing(...s),["prevent"]))},"完成")])])):y("",!0),!n.showColorPicker&&!n.isLandscape?(v(),f("div",Z,[r("button",{disabled:n.buttonDisabled,onClick:t[2]||(t[2]=(...s)=>o.uploadImage&&o.uploadImage(...s)),class:"upload-button"},F(n.buttonText),9,z)])):y("",!0),r("div",$,[r("img",{src:o.overlayImgSrc(this.selectedProduct),class:m(["overlay-img",this.selectedProduct]),alt:"conbon_c"},null,10,tt),r("canvas",{id:"canvas",onMousedown:t[3]||(t[3]=(...s)=>o.startPainting&&o.startPainting(...s)),onMouseup:t[4]||(t[4]=(...s)=>o.finishedPainting&&o.finishedPainting(...s)),onMousemove:t[5]||(t[5]=(...s)=>o.draw&&o.draw(...s)),onTouchstart:t[6]||(t[6]=(...s)=>o.startTouching&&o.startTouching(...s)),onTouchmove:t[7]||(t[7]=(...s)=>o.dragging&&o.dragging(...s)),onTouchend:t[8]||(t[8]=(...s)=>o.finishDragging&&o.finishDragging(...s)),width:o.canvasWidth,height:o.canvasHeight,style:S({left:n.canvasLeft,top:n.canvasTop,clipPath:n.clipPath})},null,44,et),n.showColorPicker?(v(),f("div",st,[r("div",{class:"stroke-width",draggable:"true",ref:"strokeWidth",onMousedown:t[9]||(t[9]=(...s)=>o.startDragging&&o.startDragging(...s)),onTouchstart:t[10]||(t[10]=(...s)=>o.startDragging&&o.startDragging(...s)),onMousemove:t[11]||(t[11]=(...s)=>o.handleDragging&&o.handleDragging(...s)),onTouchmove:t[12]||(t[12]=(...s)=>o.handleTouchDragging&&o.handleTouchDragging(...s)),onMouseup:t[13]||(t[13]=(...s)=>o.stopDragging&&o.stopDragging(...s)),onTouchend:t[14]||(t[14]=(...s)=>o.stopDragging&&o.stopDragging(...s))},null,544),ot],512)):y("",!0)]),r("div",it,[n.showColorPicker?(v(),f("div",nt,[r("a",{class:m(["painting-button",{active:n.activeButton==0}]),onClick:t[15]||(t[15]=u(s=>{o.paintingSelect(),o.toggleActive(0)},["prevent"]))},rt,2),r("a",{class:m(["clear-button",{active:n.activeButton==1}]),onClick:t[16]||(t[16]=u(s=>{o.undo(),o.toggleActive(1)},["prevent"]))},lt,2),r("a",{class:m(["save-button",{active:n.activeButton==2}]),onClick:t[17]||(t[17]=u(s=>{o.redo(),o.toggleActive(2)},["prevent"]))},dt,2),r("a",{class:m(["fill-button",{active:n.activeButton==3}]),onClick:t[18]||(t[18]=u(s=>{o.fillCanvas(),o.toggleActive(3)},["prevent"]))},ut,2),r("a",{class:m(["eraser-button",{active:n.activeButton==4}]),onClick:t[19]||(t[19]=u(s=>{o.toggleActive(4),o.white()},["prevent"]))},ft,2),r("a",{class:m(["clear-button",{active:n.activeButton==5}]),onClick:t[20]||(t[20]=u(s=>{o.clearCanvas(),o.toggleActive(5)},["prevent"]))},mt,2),r("a",{class:"save-button d-none",onClick:t[21]||(t[21]=u((...s)=>o.saveCanvas&&o.saveCanvas(...s),["prevent"]))},yt)])):y("",!0),n.showColorPicker?(v(),f("div",wt,[(v(!0),f(_,null,W(n.colors,s=>(v(),f("div",{key:s},[r("div",{class:m(["color-box",{currentColor:s===this.currentColor}]),style:S({backgroundColor:s,outlineColor:s}),onClick:A=>{o.changeColor(s),o.toggleActive(0)}},null,14,bt)]))),128))])):y("",!0),!n.showColorPicker&&n.isLandscape?(v(),f("div",Ct,[r("a",{class:"upload-button",href:"#",onClick:t[22]||(t[22]=u((...s)=>o.uploadImage&&o.uploadImage(...s),["prevent"]))},"確認上傳")])):y("",!0)])],512)])}const St=E(Q,[["render",kt],["__scopeId","data-v-33c5bdfc"]]);export{St as default};
