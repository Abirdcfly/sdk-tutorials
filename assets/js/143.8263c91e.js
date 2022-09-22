(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{751:function(e,i,t){"use strict";t.r(i);var a=t(1),o=Object(a.a)({},(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ibc-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ibc-middleware"}},[e._v("#")]),e._v(" IBC Middleware")]),e._v(" "),t("p",[e._v("Middleware is a well-known concept in software engineering. In traditional web development (web 2.0) for example, middleware is a piece of software that is implemented in the HTTP request-response cycle. One or more pieces of middleware stacked on top have access to the request and response object when an HTTP request comes in at a web server. They can execute custom logic for adding authentication, requesting headers, parsing request bodies, error handling, and many other tasks.")]),e._v(" "),t("p",[e._v("The use of middleware enables the composability and reusability of logical building blocks while allowing applications to focus on their application-specific logic. This suits the Cosmos philosophy well, and it is, therefore, no surprise that middleware can also play an important role in Inter-Blokchain Communication Protocol (IBC) applications.")]),e._v(" "),t("HighlightBox",{attrs:{type:"learning"}},[t("p",[e._v("In this section, you will learn how to:")]),e._v(" "),t("ul",[t("li",[e._v("Write your own custom middleware to wrap an IBC application.")]),e._v(" "),t("li",[e._v("Understand how to hook different middlewares to IBC base applications to form different IBC application stacks.")])]),e._v(" "),t("p",[e._v("This document serves as a guide for middleware developers who want to write their own middleware, and for chain developers who want to use IBC middleware on their chains.")])]),e._v(" "),t("h2",{attrs:{id:"when-to-use-middleware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-middleware"}},[e._v("#")]),e._v(" When to use middleware?")]),e._v(" "),t("p",[e._v("IBC applications are designed to be self-contained modules that implement their own application-specific logic through a set of interfaces with the core IBC handlers. This was discussed in the "),t("RouterLink",{attrs:{to:"/hands-on-exercise/4-ibc-adv/6-ibc-app-steps.html"}},[e._v("previous section")]),e._v(".")],1),e._v(" "),t("p",[e._v("These core IBC handlers are designed to enforce the correctness properties of "),t("RouterLink",{attrs:{to:"/academy/3-ibc/1-what-is-ibc.html"}},[e._v("IBC (transport, authentication, ordering)")]),e._v(" while delegating all application-specific handling to the IBC application modules. "),t("strong",[e._v("However, there are cases where some functionality may be desired by many applications, yet not appropriate to place in core IBC")]),e._v("...this is where middleware enters the picture.")],1),e._v(" "),t("p",[e._v("Middleware allows developers to define the extensions to the application and core IBC logic as separate modules that can wrap over the base application. This middleware can perform its custom logic and pass data into the application, which in turn may run its own logic without being aware of the middleware's existence.")]),e._v(" "),t("HighlightBox",{attrs:{type:"info"}},[t("p",[e._v("This design allows both the application and the middleware to implement their own isolated logic while still being able to run as part of a single packet flow.")]),e._v(" "),t("p",[e._v("In addition, as multiple middlewares can be stacked this design enables modularity, where chain developers can build the required business logic using "),t("em",[e._v("plug-and-play")]),e._v(" components consisting of a base IBC application module and a stack of middlewares.")])]),e._v(" "),t("h2",{attrs:{id:"definitions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),t("p",[e._v("Before we continue, it is important to define the semantics:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Middleware")]),e._v(": A self-contained module that sits between core IBC and an underlying IBC application during packet execution. All messages between core IBC and the underlying application must flow through the middleware, which may perform its own custom logic.")]),e._v(" "),t("li",[t("code",[e._v("Underlying Application")]),e._v(": An underlying application is an application that is directly connected to the middleware in question. This underlying application may itself be middleware that is chained to a base application.")]),e._v(" "),t("li",[t("code",[e._v("Base Application")]),e._v(": A base application is an IBC application that does not contain any middleware. It may be nested by 0 or multiple middlewares to form an application stack.")]),e._v(" "),t("li",[t("code",[e._v("Application Stack (or stack)")]),e._v(": A stack is the complete set of application logic (middleware(s) + base application) that is connected to core IBC. A stack may be just a base application, or it may be a series of middlewares that nest a base application.")])]),e._v(" "),t("p",[e._v("The diagram below gives an overview of a middleware stack consisting of two middlewares (one stateless, the other stateful).")]),e._v(" "),t("p",[t("tm-image",{attrs:{src:"/hands-on-exercise/4-ibc-adv/images/middleware-stack.png"}})],1),e._v(" "),t("HighlightBox",{attrs:{type:"note"}},[t("p",[e._v("Keep in mind that:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("The order of the middleware matters")]),e._v(" (more on how to correctly define your stack in the code will follow in the "),t("RouterLink",{attrs:{to:"/hands-on-exercise/4-ibc-adv/10-ibc-mw-integrate.html"}},[e._v("integration section")]),e._v(").")],1),e._v(" "),t("li",[e._v("Depending on the type of message, it will either be passed on from the base application up the middleware stack to core IBC or down the stack in the reverse situation (handshake and packet callbacks).")]),e._v(" "),t("li",[e._v("IBC middleware will wrap over an underlying IBC application and sits between core IBC and the application. It has complete control in modifying any message coming from IBC to the application, and any message coming from the application to core IBC. "),t("strong",[e._v("Middleware must be completely trusted by chain developers who wish to integrate them")]),e._v(", as this gives them complete flexibility in modifying the application(s) they wrap.")]),e._v(" "),t("li",[e._v("Scaffolding middleware modules with Ignite CLI is currently not supported.")])])]),e._v(" "),t("HighlightBox",{attrs:{type:"synopsis"}},[t("p",[e._v("To summarize, this section has explored:")]),e._v(" "),t("ul",[t("li",[e._v("The adoption of "),t("strong",[e._v("middleware")]),e._v(", software implemented in the HTTP request-response cycle to execute custom logic for a wide variety of tasks, from web 2.0.")]),e._v(" "),t("li",[e._v("The applicability of middleware for composing and reusing logical building blocks which free applications to focus on their own specific logic, and the utility of this development philosophy to IBC applications.")]),e._v(" "),t("li",[e._v("How middleware can assist the dynamic between applications and core IBC by allowing developers to add desired functionalities which are not appropriate to place in core IBC.")]),e._v(" "),t("li",[e._v("How the custom logic performed by middleware can pass data to an application which itself operates with no awareness of the middleware's existence, allowing both to run as part of a single packet flow.")]),e._v(" "),t("li",[e._v("How middlewares can be stacked as modular, plug-and-play components providing an app with the logic inputs its developer desires.")])])])],1)}),[],!1,null,null,null);i.default=o.exports}}]);