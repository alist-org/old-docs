import{d as N,ay as z,o as d,F as f,w as r,a as o,u as t,e as s,N as g,I as v,au as R,b5 as q,b6 as I,b as p,_ as C,r as P,c as S}from"./app-8967e7f1.js";import{N as _}from"./Button-437fd84f.js";import{N as u}from"./Input-77898342.js";import{N as U}from"./Card-951641a0.js";import{N as w}from"./text-9312c721.js";import"./browser-dc4cac82.js";const m=l=>(q("data-v-69097093"),l=l(),I(),l),B=m(()=>p("h4",null,"client_id",-1)),V=m(()=>p("h4",null,"client_secret",-1)),$=m(()=>p("h4",null,"redirect_uri",-1)),y="https://alist.nn.ci/tool/google/callback",D=N({__name:"Request",setup(l){function h(){window.open("https://console.developers.google.com/","_blank")}const i={client_id:"202264815644.apps.googleusercontent.com",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_secret:"X4Z3ca8xfWDb1Voo-F9a7ZxJ",redirect_uri:"http://127.0.0.1:53682/"},e=z({client_id:"",client_secret:"",redirect_uri:""});function k(){e.client_id=i.client_id,e.client_secret=i.client_secret,e.redirect_uri=i.redirect_uri}function x(){e.client_id="",e.client_secret="",e.redirect_uri=y}function b(){const a=new URL("https://accounts.google.com/o/oauth2/auth");a.searchParams.set("client_id",e.client_id),a.searchParams.set("response_type","code"),a.searchParams.set("redirect_uri",e.redirect_uri),a.searchParams.set("scope","openid profile https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/photoslibrary"),a.searchParams.set("access_type","offline"),a.searchParams.set("prompt","consent"),a.searchParams.set("state",btoa(`${e.client_id}::${e.client_secret}::${e.redirect_uri}`)),window.open(a.toString(),"_blank")}return(a,c)=>(d(),f(t(g),{vertical:"",size:"large"},{default:r(()=>[o(t(g),{justify:"center"},{default:r(()=>[o(t(_),{size:"large",secondary:"",onClick:h},{default:r(()=>[s("Create client")]),_:1}),o(t(_),{size:"large",type:"primary",onClick:k},{default:r(()=>[s("Use RClone client")]),_:1}),o(t(_),{size:"large",type:"info",onClick:x},{default:r(()=>[s("Use own client")]),_:1})]),_:1}),B,o(t(u),{size:"large",value:e.client_id,"onUpdate:value":c[0]||(c[0]=n=>e.client_id=n)},null,8,["value"]),V,o(t(u),{size:"large",value:e.client_secret,"onUpdate:value":c[1]||(c[1]=n=>e.client_secret=n)},null,8,["value"]),$,o(t(u),{size:"large",value:e.redirect_uri,"onUpdate:value":c[2]||(c[2]=n=>e.redirect_uri=n)},null,8,["value"]),o(t(_),{size:"large",type:"primary",block:"",onClick:b},{default:r(()=>[s("Go get")]),_:1}),e.client_id===i.client_id?(d(),f(t(U),{key:0,title:"If you use rclone client"},{default:r(()=>[s(" Replace "),o(t(w),{code:""},{default:r(()=>[s(v(i.redirect_uri),1)]),_:1}),s(" with "),o(t(w),{code:""},{default:r(()=>[s(v(y))]),_:1}),s(" after oauth. ")]),_:1})):R("v-if",!0)]),_:1}))}});const F=C(D,[["__scopeId","data-v-69097093"],["__file","Request.vue"]]),G=N({__name:"request.html",setup(l){return(h,i)=>{const e=P("NaiveClient");return d(),S("div",null,[o(e,null,{default:r(()=>[o(t(F))]),_:1})])}}}),O=C(G,[["__file","request.html.vue"]]);export{O as default};
