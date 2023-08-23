import{s as n,u as s,j as r,L as o}from"./index-f6e60f02.js";const t=n.main`
  background-color: var(--color-grey-100);
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    height: 50rem;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
    text-transform: none;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--color-grey-600);
    text-transform: none;
  }
  a {
    color: var(--color-brand-500);
    text-transform: capitalize;
  }
`,a="/assets/error-a0f3884b.svg",c=()=>{const e=s();return console.log(e),e.status===404?r.jsx(t,{children:r.jsxs("div",{children:[r.jsx("img",{src:a,alt:"not found"}),r.jsx("h3",{children:"Page not found"}),r.jsx("p",{children:"We can not seem to find the page you are looking for"}),r.jsx(o,{to:"/dashboard",children:"back home"})]})}):r.jsx(t,{children:r.jsxs("div",{children:[r.jsx("h3",{children:"Something went wrong"}),r.jsx("p",{children:e.message}),r.jsx(o,{to:"/dashboard",children:"back home"})]})})};export{c as default};
