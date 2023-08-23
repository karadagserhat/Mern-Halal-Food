import{s as r,j as i,L as a}from"./index-f6e60f02.js";const e=r.section`
  background-color: var(--color-grey-100);

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    /* margin-top: -3rem; */
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--color-brand-600);
    }
    margin-bottom: 1.5rem;
  }

  p {
    line-height: 2;
    color: var(--color-grey-600);
    margin-bottom: 2.5rem;
    max-width: 35em;
    text-transform: none;
  }

  .register-link {
    margin-right: 1rem;
  }

  .main-img {
    display: none;
  }

  .btn {
    /* padding: 0.75rem 1rem; */
  }

  .logo {
    width: 10%;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      /* margin-top: -6rem; */
      width: 50%;
    }
  }
`,n="/assets/main-d4254065.svg",s=()=>i.jsxs(e,{children:[i.jsx("nav",{children:i.jsx("div",{})}),i.jsxs("div",{className:"container page",children:[i.jsxs("div",{className:"info",children:[i.jsxs("h1",{children:["Halal Food ",i.jsx("span",{children:"tracking"})," app"]}),i.jsx("p",{children:"Which brands get to certificate for halal food? Track it."}),i.jsx(a,{to:"/register",className:"btn register-link",children:"Register"}),i.jsx(a,{to:"/login",className:"btn",children:"Login / Demo User"})]}),i.jsx("img",{src:n,alt:"halal-food-track",className:"img main-img"})]})]});export{s as default};
