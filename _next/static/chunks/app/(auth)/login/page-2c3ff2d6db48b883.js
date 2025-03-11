(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72],{320:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var a=r(5155),n=r(3391),s=r(9606),i=r(3415),o=r(5060),l=r(2529),d=r(2950),c=r(3307);let u=async(e,t)=>await (0,c.A)("POST","api/User/auth-login/",{UserName:e,PassWord:t});var m=r(1494),h=r(1658),f=r(8254),p=r(3312),x=r(2115),g=r(2317),v=r(1567),b=r(6195);function y(e){let{className:t,...r}=e;return(0,a.jsx)(b.b,{"data-slot":"label",className:(0,v.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",t),...r})}let _=s.Op,j=x.createContext({}),w=e=>{let{...t}=e;return(0,a.jsx)(j.Provider,{value:{name:t.name},children:(0,a.jsx)(s.xI,{...t})})},S=()=>{let e=x.useContext(j),t=x.useContext(N),{getFieldState:r}=(0,s.xW)(),a=(0,s.lN)({name:e.name}),n=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},N=x.createContext({});function k(e){let{className:t,...r}=e,n=x.useId();return(0,a.jsx)(N.Provider,{value:{id:n},children:(0,a.jsx)("div",{"data-slot":"form-item",className:(0,v.cn)("grid gap-2",t),...r})})}function T(e){let{className:t,...r}=e,{error:n,formItemId:s}=S();return(0,a.jsx)(y,{"data-slot":"form-label","data-error":!!n,className:(0,v.cn)("data-[error=true]:text-destructive-foreground",t),htmlFor:s,...r})}function A(e){let{...t}=e,{error:r,formItemId:n,formDescriptionId:s,formMessageId:i}=S();return(0,a.jsx)(g.DX,{"data-slot":"form-control",id:n,"aria-describedby":r?"".concat(s," ").concat(i):"".concat(s),"aria-invalid":!!r,...t})}function E(e){var t;let{className:r,...n}=e,{error:s,formMessageId:i}=S(),o=s?String(null!==(t=null==s?void 0:s.message)&&void 0!==t?t:""):n.children;return o?(0,a.jsx)("p",{"data-slot":"form-message",id:i,className:(0,v.cn)("text-destructive-foreground text-sm",r),...n,children:o}):null}function F(e){let{className:t,type:r,...n}=e;return(0,a.jsx)("input",{type:r,"data-slot":"input",className:(0,v.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...n})}let C=()=>{let e=(0,n.wA)(),t=i.z.object({username:i.z.string().min(4).max(50),password:i.z.string().min(6).max(100)}),r=(0,s.mN)({resolver:(0,o.u)(t),defaultValues:{username:"",password:""}}),c=async t=>{let[r,a]=await u(t.username,t.password);if(e((0,h.w$)()),200===r){if(0===a.status){e((0,h.MO)("Sai th\xf4ng tin đăng nhập"));return}e((0,h._v)({username:a.data.username,fullname:a.data.fullname,accessToken:a.data.access_token,refreshToken:a.data.refresh_token})),e((0,f.AL)(!m.A.getState().device.isDeviceFetching))}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(_,{...r,children:(0,a.jsxs)("form",{method:"POST",className:"grid gap-4 mt-4",onSubmit:r.handleSubmit(c),children:[(0,a.jsx)(w,{control:r.control,name:"username",render:e=>{let{field:t}=e;return(0,a.jsxs)(k,{children:[(0,a.jsx)(T,{htmlFor:"username",children:"Username"}),(0,a.jsx)(A,{children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(d.S1f,{className:"absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600"}),(0,a.jsx)(F,{type:"text",...t,required:!0,className:"pl-8"})]})}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(w,{control:r.control,name:"password",render:e=>{let{field:t}=e;return(0,a.jsxs)(k,{children:[(0,a.jsx)(T,{htmlFor:"password",children:"Password"}),(0,a.jsx)(A,{children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(l.ixi,{className:"absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600"}),(0,a.jsx)(F,{type:"password",...t,required:!0,className:"pl-8"})]})}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(p.$,{type:"submit",className:"mt-4 w-full",children:"Đăng Nhập"})]})})})};function O(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"card",className:(0,v.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",t),...r})}function D(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"card-header",className:(0,v.cn)("flex flex-col gap-1.5 px-6",t),...r})}function I(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"card-title",className:(0,v.cn)("leading-none font-semibold",t),...r})}function z(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"card-description",className:(0,v.cn)("text-muted-foreground text-sm",t),...r})}function P(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"card-content",className:(0,v.cn)("px-6",t),...r})}let U=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("title",{children:"Login"}),(0,a.jsxs)(O,{className:"min-w-[400px]",children:[(0,a.jsxs)(D,{children:[(0,a.jsx)(I,{className:"text-2xl",children:"Đăng Nhập"}),(0,a.jsx)(z,{children:"Điền th\xf4ng tin để đăng nhập v\xe0o hệ thống"})]}),(0,a.jsx)(P,{children:(0,a.jsx)(C,{})})]})]})},1494:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var a=r(8943);let n=(0,a.Z0)({name:"app",initialState:{isSimDataFetching:!1},reducers:{SET_FETCHING:(e,t)=>{e.isSimDataFetching=t.payload}}}),{SET_FETCHING:s}=n.actions,i=n.reducer;var o=r(1658),l=r(8254);let d=(0,a.U1)({reducer:{app:i,auth:o.Ay,device:l.Ay}})},1567:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var a=r(3463),n=r(9795);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,a.$)(t))}},1658:(e,t,r)=>{"use strict";r.d(t,{Ay:()=>m,MO:()=>c,T_:()=>d,_v:()=>l,w$:()=>u});var a=r(8943),n=r(9208);let s=n.A.get("access_token"),i=n.A.get("refresh_token"),o=(0,a.Z0)({name:"auth",initialState:{username:"",fullname:"",accessToken:s||"",refreshToken:i||"",error:""},reducers:{SET_TOKENS:(e,t)=>{let{username:r,fullname:a,accessToken:s,refreshToken:i}=t.payload;e.username=r,e.fullname=a,e.accessToken=s,e.refreshToken=i,n.A.set("access_token",s,{expires:7}),n.A.set("refresh_token",i,{expires:7})},LOGOUT:e=>{e.username="",e.fullname="",e.accessToken="",e.refreshToken="",n.A.remove("access_token"),n.A.remove("refresh_token")},SET_ERROR:(e,t)=>{e.error=t.payload},REMOVE_ERROR:e=>{e.error=""}}}),{SET_TOKENS:l,LOGOUT:d,SET_ERROR:c,REMOVE_ERROR:u}=o.actions,m=o.reducer},3307:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var a=r(2651),n=r(1658),s=r(1494);let i="https://cmsiot.saigoniot.vn:444",o=async(e,t,r)=>{let l=s.A.getState().auth.accessToken,d=s.A.getState().auth.refreshToken,[c,u]=await (0,a.A)({method:e,url:"".concat(i,"/").concat(t),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(l)},withCredentials:!1,data:r}).then(e=>[e.status,e.data]).catch(e=>[e.response.status,e.response.error]);if(200===c||201===c)return[c,u];if(401===c){let[l,c]=await (0,a.A)({method:"POST",url:"".concat(i,"/api/User/auth-refresh"),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d)},withCredentials:!0}).then(e=>[e.status,e.data]).catch(e=>(s.A.dispatch((0,n.T_)()),[e.response.status,e.response.error]));if(200===l||201===l){let{access_token:a,refresh_token:i}=c;return s.A.dispatch((0,n._v)({accessToken:a,refreshToken:i})),o(e,t,r)}}return[500,{error:"Internal server error"}]},l=o},3312:(e,t,r)=>{"use strict";r.d(t,{$:()=>l});var a=r(5155);r(2115);var n=r(2317),s=r(1027),i=r(1567);let o=(0,s.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:t,variant:r,size:s,asChild:l=!1,...d}=e,c=l?n.DX:"button";return(0,a.jsx)(c,{"data-slot":"button",className:(0,i.cn)(o({variant:r,size:s,className:t})),...d})}},4706:(e,t,r)=>{Promise.resolve().then(r.bind(r,320))},8254:(e,t,r)=>{"use strict";r.d(t,{AL:()=>i,Ay:()=>o,Sy:()=>s,r_:()=>n});let a=(0,r(8943).Z0)({name:"device",initialState:{isDeviceFetching:!0,devices_list:[],count_all:0,count_offline:0,count_error:0,count_warning:0,count_online:0,count_alarm:0},reducers:{SET_DEVICES:(e,t)=>{e.devices_list=t.payload,e.count_all=t.payload.length,e.count_offline=t.payload.filter(e=>-2===e.deviceStatus).length,e.count_error=t.payload.filter(e=>-1===e.deviceStatus).length,e.count_warning=t.payload.filter(e=>0===e.deviceStatus).length,e.count_online=t.payload.filter(e=>1===e.deviceStatus).length,e.count_alarm=t.payload.filter(e=>2===e.deviceStatus).length},SET_SIM_DATA_USAGE:(e,t)=>{let{phone:r,simDataUsage:a}=t.payload,n=e.devices_list.find(e=>e.phone===r);n&&(n.simDataUsage=a)},SET_DEVICES_FETCHING:(e,t)=>{e.isDeviceFetching=t.payload}}}),{SET_DEVICES:n,SET_SIM_DATA_USAGE:s,SET_DEVICES_FETCHING:i}=a.actions,o=a.reducer}},e=>{var t=t=>e(e.s=t);e.O(0,[150,603,264,891,704,518,441,587,358],()=>t(4706)),_N_E=e.O()}]);