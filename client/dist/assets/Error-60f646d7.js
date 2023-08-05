import{s as t,u as n,j as r,L as i}from"./index-e9983564.js";const o=t.main`
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
`,a="/assets/error-404-37aec6ea.png",c=()=>{const e=n();return console.log(e),e.status===404?r.jsx(o,{children:r.jsxs("div",{children:[r.jsx("img",{src:a,alt:"not found"}),r.jsx("h3",{children:"Page not found"}),r.jsx("p",{children:"We can not seem to find the page you are looking for"}),r.jsx(i,{to:"/dashboard",children:"back home"})]})}):r.jsx(o,{children:r.jsx("div",{children:r.jsx("h3",{children:"Something went wrong"})})})};export{c as default};
