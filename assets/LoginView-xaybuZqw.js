import{a as l}from"./axios-nwi5g7Xq.js";import{_ as c,c as m,a as s,g as u,j as i,v as d,o as p}from"./index-mlrpY3LK.js";var _={BASE_URL:"/DAO_Taiwan_Vue/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:f}=_,h={data(){return{user:{username:"",password:""}}},methods:{login(){l.post(`${f}/v2/admin/signin`,this.user).then(o=>{const{token:e,expired:n}=o.data;document.cookie=`hexToken=${e}; expires=${new Date(n)}; path=/;`,this.$router.push("./dashboard")}).catch(o=>{console.dir(o),alert(o.response.data.message)})}}},w={class:"container"},g={class:"row justify-content-center"},v=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),b={class:"col-8"},x={class:"form-floating mb-3"},V=s("label",{for:"username"},"Email address",-1),D={class:"form-floating"},E=s("label",{for:"password"},"Password",-1),k=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",id:"login"}," 登入 ",-1);function y(o,e,n,B,r,a){return p(),m("div",w,[s("div",g,[v,s("div",b,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=u((...t)=>a.login&&a.login(...t),["prevent"]))},[s("div",x,[i(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>r.user.username=t)},null,512),[[d,r.user.username]]),V]),s("div",D,[i(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>r.user.password=t)},null,512),[[d,r.user.password]]),E]),k],32)])])])}const T=c(h,[["render",y]]);export{T as default};
