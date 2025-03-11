(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{1567:(e,r,s)=>{"use strict";s.d(r,{cn:()=>a});var n=s(3463),t=s(9795);function a(){for(var e=arguments.length,r=Array(e),s=0;s<e;s++)r[s]=arguments[s];return(0,t.QP)((0,n.$)(r))}},1658:(e,r,s)=>{"use strict";s.d(r,{Ay:()=>h,MO:()=>l,T_:()=>d,_v:()=>c,w$:()=>u});var n=s(8943),t=s(9208);let a=t.A.get("access_token"),i=t.A.get("refresh_token"),o=(0,n.Z0)({name:"auth",initialState:{username:"",fullname:"",accessToken:a||"",refreshToken:i||"",error:""},reducers:{SET_TOKENS:(e,r)=>{let{username:s,fullname:n,accessToken:a,refreshToken:i}=r.payload;e.username=s,e.fullname=n,e.accessToken=a,e.refreshToken=i,t.A.set("access_token",a,{expires:7}),t.A.set("refresh_token",i,{expires:7})},LOGOUT:e=>{e.username="",e.fullname="",e.accessToken="",e.refreshToken="",t.A.remove("access_token"),t.A.remove("refresh_token")},SET_ERROR:(e,r)=>{e.error=r.payload},REMOVE_ERROR:e=>{e.error=""}}}),{SET_TOKENS:c,LOGOUT:d,SET_ERROR:l,REMOVE_ERROR:u}=o.actions,h=o.reducer},1974:(e,r,s)=>{Promise.resolve().then(s.bind(s,6572))},3312:(e,r,s)=>{"use strict";s.d(r,{$:()=>c});var n=s(5155);s(2115);var t=s(2317),a=s(1027),i=s(1567);let o=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function c(e){let{className:r,variant:s,size:a,asChild:c=!1,...d}=e,l=c?t.DX:"button";return(0,n.jsx)(l,{"data-slot":"button",className:(0,i.cn)(o({variant:s,size:a,className:r})),...d})}},6046:(e,r,s)=>{"use strict";var n=s(6658);s.o(n,"redirect")&&s.d(r,{redirect:function(){return n.redirect}})},6572:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>v});var n=s(5155),t=s(2115),a=s(3391),i=s(6046),o=s(6084),c=s(8173),d=s.n(c),l=s(1658),u=s(3312);let h=()=>{let e=(0,a.wA)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("nav",{className:" h-[3.6rem] w-full shadow-[3px_3px_3px_1px] md:shadow-primary/40 ring-2 ring-primary/60",children:(0,n.jsxs)("div",{className:"flex justify-between items-center h-full px-4",children:[(0,n.jsx)(d(),{href:"",children:(0,n.jsx)("img",{src:"/logo/SCTV.svg",alt:"",className:"h-[2.4rem]"})}),(0,n.jsxs)(u.$,{onClick:()=>{e((0,l.T_)())},className:"flex items-center",children:[(0,n.jsx)(o.AMx,{className:"-ml-0.5"}),(0,n.jsx)("span",{className:"md:block hidden",children:"Đăng xuất"})]})]})})})},v=e=>{let[r,s]=t.useState(!0),o=(0,a.d4)(e=>e.auth.refreshToken);return(t.useEffect(()=>{let e=setTimeout(()=>{s(!1)},1e3);return()=>clearTimeout(e)},[]),o)?r?(0,n.jsx)(n.Fragment,{children:"Loading..."}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{}),(0,n.jsxs)("div",{className:"grid md:grid-cols-12 grid-cols-1 gap-4 p-4",children:[(0,n.jsx)("div",{className:"md:col-span-2 col-span-1"}),(0,n.jsx)("div",{className:"md:col-span-8 col-span-1",children:e.children}),(0,n.jsx)("div",{className:"md:col-span-2 col-span-1"})]})]}):(0,i.redirect)("/login")}}},e=>{var r=r=>e(e.s=r);e.O(0,[873,264,891,441,587,358],()=>r(1974)),_N_E=e.O()}]);