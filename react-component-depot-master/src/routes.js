import React from "react";

 
const ReCaptcha = React.lazy(() => import("pages/ReCaptcha"));
 

const routes = [
   
  {
    enabled: true,
    path: "/recaptcha",
    component: ReCaptcha,
    navbar: "ReCaptcha",
    child: null,
  } 
];

export default routes.filter((route) => route.enabled);
