(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{789:function(c,l,e){"use strict";e.r(l);var d=e(1),t=Object(d.a)({},(function(){var c=this,l=c.$createElement,e=c._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[e("h1",{attrs:{id:"nameservice-module-rest-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nameservice-module-rest-interface"}},[c._v("#")]),c._v(" NameService Module Rest Interface")]),c._v(" "),e("p",[c._v("Your module can also expose a REST interface to allow programatic access to the module's functionality. To get started navigate to "),e("code",[c._v("./x/nameservice/client/rest/rest.go")]),c._v(" where HTTP handlers are held.")]),c._v(" "),e("blockquote",[e("p",[e("em",[e("em",[c._v("NOTE")])]),c._v(": Your application needs to import the code you just wrote. Here the import path is set to this repository ("),e("code",[c._v("github.com/cosmos/sdk-tutorials/nameservice/x/nameservice")]),c._v("). If you are following along in your own repo you will need to change the import path to reflect that ("),e("code",[c._v("github.com/{ .Username }/{ .Project.Repo }/x/nameservice")]),c._v(").")])]),c._v(" "),e("h3",{attrs:{id:"registerroutes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#registerroutes"}},[c._v("#")]),c._v(" RegisterRoutes")]),c._v(" "),e("p",[c._v("First, define the REST client interface for your module in a "),e("code",[c._v("RegisterRoutes")]),c._v(" function. Have the routes all starting with your module name to prevent name space collisions with other modules' routes:")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSByZXN0CgppbXBvcnQgKAoJJnF1b3Q7Z2l0aHViLmNvbS9nb3JpbGxhL211eCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50L2NvbnRleHQmcXVvdDsKKQoKLy8gUmVnaXN0ZXJSb3V0ZXMgcmVnaXN0ZXJzIG5hbWVzZXJ2aWNlLXJlbGF0ZWQgUkVTVCBoYW5kbGVycyB0byBhIHJvdXRlcgpmdW5jIFJlZ2lzdGVyUm91dGVzKGNsaUN0eCBjb250ZXh0LkNMSUNvbnRleHQsIHIgKm11eC5Sb3V0ZXIpIHsKCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nCglyLkhhbmRsZUZ1bmMoJnF1b3Q7L25hbWVzZXJ2aWNlL3dob2lzJnF1b3Q7LCBidXlOYW1lSGFuZGxlcihjbGlDdHgpKS5NZXRob2RzKCZxdW90O1BPU1QmcXVvdDspCglyLkhhbmRsZUZ1bmMoJnF1b3Q7L25hbWVzZXJ2aWNlL3dob2lzJnF1b3Q7LCBsaXN0V2hvaXNIYW5kbGVyKGNsaUN0eCwgJnF1b3Q7bmFtZXNlcnZpY2UmcXVvdDspKS5NZXRob2RzKCZxdW90O0dFVCZxdW90OykKCXIuSGFuZGxlRnVuYygmcXVvdDsvbmFtZXNlcnZpY2Uvd2hvaXMve2tleX0mcXVvdDssIGdldFdob2lzSGFuZGxlcihjbGlDdHgsICZxdW90O25hbWVzZXJ2aWNlJnF1b3Q7KSkuTWV0aG9kcygmcXVvdDtHRVQmcXVvdDspCglyLkhhbmRsZUZ1bmMoJnF1b3Q7L25hbWVzZXJ2aWNlL3dob2lzL3trZXl9L3Jlc29sdmUmcXVvdDssIHJlc29sdmVOYW1lSGFuZGxlcihjbGlDdHgsICZxdW90O25hbWVzZXJ2aWNlJnF1b3Q7KSkuTWV0aG9kcygmcXVvdDtHRVQmcXVvdDspCglyLkhhbmRsZUZ1bmMoJnF1b3Q7L25hbWVzZXJ2aWNlL3dob2lzJnF1b3Q7LCBzZXRXaG9pc0hhbmRsZXIoY2xpQ3R4KSkuTWV0aG9kcygmcXVvdDtQVVQmcXVvdDspCglyLkhhbmRsZUZ1bmMoJnF1b3Q7L25hbWVzZXJ2aWNlL3dob2lzJnF1b3Q7LCBkZWxldGVXaG9pc0hhbmRsZXIoY2xpQ3R4KSkuTWV0aG9kcygmcXVvdDtERUxFVEUmcXVvdDspCgp9Cg=="}}),c._v(" "),e("h3",{attrs:{id:"query-handlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-handlers"}},[c._v("#")]),c._v(" Query Handlers")]),c._v(" "),e("p",[c._v("Next, its time to define the handlers mentioned above in "),e("code",[c._v("queryWhois.go")]),c._v(". These will be very similar to the CLI methods defined earlier. "),e("code",[c._v("listWhoisHandler")]),c._v(" and "),e("code",[c._v("getWhoisHandler")]),c._v(" should already be defined, and you can use "),e("code",[c._v("getWhois")]),c._v(" as a template to write the "),e("code",[c._v("resolveNameHandler")]),c._v(" function.")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSByZXN0CgppbXBvcnQgKAoJJnF1b3Q7Zm10JnF1b3Q7CgkmcXVvdDtuZXQvaHR0cCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50L2NvbnRleHQmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvcmVzdCZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9nb3JpbGxhL211eCZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS91c2VyL25hbWVzZXJ2aWNlL3gvbmFtZXNlcnZpY2UvdHlwZXMmcXVvdDsKKQoKZnVuYyBsaXN0V2hvaXNIYW5kbGVyKGNsaUN0eCBjb250ZXh0LkNMSUNvbnRleHQsIHN0b3JlTmFtZSBzdHJpbmcpIGh0dHAuSGFuZGxlckZ1bmMgewoJcmV0dXJuIGZ1bmModyBodHRwLlJlc3BvbnNlV3JpdGVyLCByICpodHRwLlJlcXVlc3QpIHsKCQlyZXMsIF8sIGVyciA6PSBjbGlDdHguUXVlcnlXaXRoRGF0YShmbXQuU3ByaW50ZigmcXVvdDtjdXN0b20vJXMvJXMmcXVvdDssIHN0b3JlTmFtZSwgdHlwZXMuUXVlcnlMaXN0V2hvaXMpLCBuaWwpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJlc3QuV3JpdGVFcnJvclJlc3BvbnNlKHcsIGh0dHAuU3RhdHVzTm90Rm91bmQsIGVyci5FcnJvcigpKQoJCQlyZXR1cm4KCQl9CgkJcmVzdC5Qb3N0UHJvY2Vzc1Jlc3BvbnNlKHcsIGNsaUN0eCwgcmVzKQoJfQp9CgpmdW5jIGdldFdob2lzSGFuZGxlcihjbGlDdHggY29udGV4dC5DTElDb250ZXh0LCBzdG9yZU5hbWUgc3RyaW5nKSBodHRwLkhhbmRsZXJGdW5jIHsKCXJldHVybiBmdW5jKHcgaHR0cC5SZXNwb25zZVdyaXRlciwgciAqaHR0cC5SZXF1ZXN0KSB7CgkJdmFycyA6PSBtdXguVmFycyhyKQoJCWtleSA6PSB2YXJzWyZxdW90O2tleSZxdW90O10KCgkJcmVzLCBfLCBlcnIgOj0gY2xpQ3R4LlF1ZXJ5V2l0aERhdGEoZm10LlNwcmludGYoJnF1b3Q7Y3VzdG9tLyVzLyVzLyVzJnF1b3Q7LCBzdG9yZU5hbWUsIHR5cGVzLlF1ZXJ5R2V0V2hvaXMsIGtleSksIG5pbCkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmVzdC5Xcml0ZUVycm9yUmVzcG9uc2UodywgaHR0cC5TdGF0dXNOb3RGb3VuZCwgZXJyLkVycm9yKCkpCgkJCXJldHVybgoJCX0KCQlyZXN0LlBvc3RQcm9jZXNzUmVzcG9uc2UodywgY2xpQ3R4LCByZXMpCgl9Cn0KCmZ1bmMgcmVzb2x2ZU5hbWVIYW5kbGVyKGNsaUN0eCBjb250ZXh0LkNMSUNvbnRleHQsIHN0b3JlTmFtZSBzdHJpbmcpIGh0dHAuSGFuZGxlckZ1bmMgewoJcmV0dXJuIGZ1bmModyBodHRwLlJlc3BvbnNlV3JpdGVyLCByICpodHRwLlJlcXVlc3QpIHsKCQl2YXJzIDo9IG11eC5WYXJzKHIpCgkJcGFyYW1UeXBlIDo9IHZhcnNbJnF1b3Q7a2V5JnF1b3Q7XQoKCQlyZXMsIF8sIGVyciA6PSBjbGlDdHguUXVlcnlXaXRoRGF0YShmbXQuU3ByaW50ZigmcXVvdDtjdXN0b20vJXMvJXMvJXMmcXVvdDssIHN0b3JlTmFtZSwgdHlwZXMuUXVlcnlSZXNvbHZlTmFtZSwgcGFyYW1UeXBlKSwgbmlsKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXN0LldyaXRlRXJyb3JSZXNwb25zZSh3LCBodHRwLlN0YXR1c05vdEZvdW5kLCBlcnIuRXJyb3IoKSkKCQkJcmV0dXJuCgkJfQoKCQlyZXN0LlBvc3RQcm9jZXNzUmVzcG9uc2UodywgY2xpQ3R4LCByZXMpCgl9Cn0K"}}),c._v(" "),e("p",[c._v("Notes on the above code:")]),c._v(" "),e("ul",[e("li",[c._v("Notice we are using the same "),e("code",[c._v("cliCtx.QueryWithData")]),c._v(" function to fetch the data")]),c._v(" "),e("li",[c._v("These functions are almost the same as the corresponding CLI functionality")])]),c._v(" "),e("h3",{attrs:{id:"tx-handlers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tx-handlers"}},[c._v("#")]),c._v(" Tx Handlers")]),c._v(" "),e("p",[c._v("Now define the "),e("code",[c._v("buyName")]),c._v(", "),e("code",[c._v("setName")]),c._v(" and "),e("code",[c._v("deleteName")]),c._v(" transaction routes in "),e("code",[c._v("txWhois.go")]),c._v(" - you can replace the existing handlers that were generated by "),e("code",[c._v("starport type")]),c._v(". Notice these aren't actually performing the transactions to buy, set and delete names, as in a general case this would require some form of authentication. Instead these endpoints build and return each specific transaction which can then be signed in a secure manner and afterwards broadcast to the network using a standard endpoint like "),e("code",[c._v("/txs")]),c._v(".")]),c._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSByZXN0CgppbXBvcnQgKAoJJnF1b3Q7bmV0L2h0dHAmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC9jb250ZXh0JnF1b3Q7CglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy9yZXN0JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYXV0aC9jbGllbnQvdXRpbHMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vdXNlci9uYW1lc2VydmljZS94L25hbWVzZXJ2aWNlL3R5cGVzJnF1b3Q7CikKCnR5cGUgYnV5TmFtZVJlcXVlc3Qgc3RydWN0IHsKCUJhc2VSZXEgcmVzdC5CYXNlUmVxIGBqc29uOiZxdW90O2Jhc2VfcmVxJnF1b3Q7YAoJQnV5ZXIgICBzdHJpbmcgICAgICAgYGpzb246JnF1b3Q7YnV5ZXImcXVvdDtgCglOYW1lICAgIHN0cmluZyAgICAgICBganNvbjomcXVvdDtuYW1lJnF1b3Q7YAoJUHJpY2UgICBzdHJpbmcgICAgICAgYGpzb246JnF1b3Q7cHJpY2UmcXVvdDtgCn0KCmZ1bmMgYnV5TmFtZUhhbmRsZXIoY2xpQ3R4IGNvbnRleHQuQ0xJQ29udGV4dCkgaHR0cC5IYW5kbGVyRnVuYyB7CglyZXR1cm4gZnVuYyh3IGh0dHAuUmVzcG9uc2VXcml0ZXIsIHIgKmh0dHAuUmVxdWVzdCkgewoJCXZhciByZXEgYnV5TmFtZVJlcXVlc3QKCQlpZiAhcmVzdC5SZWFkUkVTVFJlcSh3LCByLCBjbGlDdHguQ29kZWMsICZhbXA7cmVxKSB7CgkJCXJlc3QuV3JpdGVFcnJvclJlc3BvbnNlKHcsIGh0dHAuU3RhdHVzQmFkUmVxdWVzdCwgJnF1b3Q7ZmFpbGVkIHRvIHBhcnNlIHJlcXVlc3QmcXVvdDspCgkJCXJldHVybgoJCX0KCQliYXNlUmVxIDo9IHJlcS5CYXNlUmVxLlNhbml0aXplKCkKCQlpZiAhYmFzZVJlcS5WYWxpZGF0ZUJhc2ljKHcpIHsKCQkJcmV0dXJuCgkJfQoJCWFkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIocmVxLkJ1eWVyKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXN0LldyaXRlRXJyb3JSZXNwb25zZSh3LCBodHRwLlN0YXR1c0JhZFJlcXVlc3QsIGVyci5FcnJvcigpKQoJCQlyZXR1cm4KCQl9CgkJY29pbnMsIGVyciA6PSBzZGsuUGFyc2VDb2lucyhyZXEuUHJpY2UpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJlc3QuV3JpdGVFcnJvclJlc3BvbnNlKHcsIGh0dHAuU3RhdHVzQmFkUmVxdWVzdCwgZXJyLkVycm9yKCkpCgkJCXJldHVybgoJCX0KCQltc2cgOj0gdHlwZXMuTmV3TXNnQnV5TmFtZShyZXEuTmFtZSwgY29pbnMsIGFkZHIpCgoJCWVyciA9IG1zZy5WYWxpZGF0ZUJhc2ljKCkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmVzdC5Xcml0ZUVycm9yUmVzcG9uc2UodywgaHR0cC5TdGF0dXNCYWRSZXF1ZXN0LCBlcnIuRXJyb3IoKSkKCQkJcmV0dXJuCgkJfQoKCQl1dGlscy5Xcml0ZUdlbmVyYXRlU3RkVHhSZXNwb25zZSh3LCBjbGlDdHgsIGJhc2VSZXEsIFtdc2RrLk1zZ3ttc2d9KQoJfQp9Cgp0eXBlIHNldFdob2lzUmVxdWVzdCBzdHJ1Y3QgewoJQmFzZVJlcSByZXN0LkJhc2VSZXEgYGpzb246JnF1b3Q7YmFzZV9yZXEmcXVvdDtgCglOYW1lICAgIHN0cmluZyAgICAgICBganNvbjomcXVvdDtuYW1lJnF1b3Q7YAoJVmFsdWUgICBzdHJpbmcgICAgICAgYGpzb246JnF1b3Q7dmFsdWUmcXVvdDtgCglDcmVhdG9yIHN0cmluZyAgICAgICBganNvbjomcXVvdDtjcmVhdG9yJnF1b3Q7YAp9CgpmdW5jIHNldFdob2lzSGFuZGxlcihjbGlDdHggY29udGV4dC5DTElDb250ZXh0KSBodHRwLkhhbmRsZXJGdW5jIHsKCXJldHVybiBmdW5jKHcgaHR0cC5SZXNwb25zZVdyaXRlciwgciAqaHR0cC5SZXF1ZXN0KSB7CgkJdmFyIHJlcSBzZXRXaG9pc1JlcXVlc3QKCQlpZiAhcmVzdC5SZWFkUkVTVFJlcSh3LCByLCBjbGlDdHguQ29kZWMsICZhbXA7cmVxKSB7CgkJCXJlc3QuV3JpdGVFcnJvclJlc3BvbnNlKHcsIGh0dHAuU3RhdHVzQmFkUmVxdWVzdCwgJnF1b3Q7ZmFpbGVkIHRvIHBhcnNlIHJlcXVlc3QmcXVvdDspCgkJCXJldHVybgoJCX0KCQliYXNlUmVxIDo9IHJlcS5CYXNlUmVxLlNhbml0aXplKCkKCQlpZiAhYmFzZVJlcS5WYWxpZGF0ZUJhc2ljKHcpIHsKCQkJcmV0dXJuCgkJfQoJCWFkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIocmVxLkNyZWF0b3IpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJlc3QuV3JpdGVFcnJvclJlc3BvbnNlKHcsIGh0dHAuU3RhdHVzQmFkUmVxdWVzdCwgZXJyLkVycm9yKCkpCgkJCXJldHVybgoJCX0KCQltc2cgOj0gdHlwZXMuTmV3TXNnU2V0TmFtZShyZXEuTmFtZSwgcmVxLlZhbHVlLCBhZGRyKQoKCQllcnIgPSBtc2cuVmFsaWRhdGVCYXNpYygpCgkJaWYgZXJyICE9IG5pbCB7CgkJCXJlc3QuV3JpdGVFcnJvclJlc3BvbnNlKHcsIGh0dHAuU3RhdHVzQmFkUmVxdWVzdCwgZXJyLkVycm9yKCkpCgkJCXJldHVybgoJCX0KCgkJdXRpbHMuV3JpdGVHZW5lcmF0ZVN0ZFR4UmVzcG9uc2UodywgY2xpQ3R4LCBiYXNlUmVxLCBbXXNkay5Nc2d7bXNnfSkKCX0KfQoKdHlwZSBkZWxldGVXaG9pc1JlcXVlc3Qgc3RydWN0IHsKCUJhc2VSZXEgcmVzdC5CYXNlUmVxIGBqc29uOiZxdW90O2Jhc2VfcmVxJnF1b3Q7YAoJT3duZXIgICBzdHJpbmcgICAgICAgYGpzb246JnF1b3Q7b3duZXImcXVvdDtgCglOYW1lICAgIHN0cmluZyAgICAgICBganNvbjomcXVvdDtuYW1lJnF1b3Q7YAp9CgpmdW5jIGRlbGV0ZVdob2lzSGFuZGxlcihjbGlDdHggY29udGV4dC5DTElDb250ZXh0KSBodHRwLkhhbmRsZXJGdW5jIHsKCXJldHVybiBmdW5jKHcgaHR0cC5SZXNwb25zZVdyaXRlciwgciAqaHR0cC5SZXF1ZXN0KSB7CgkJdmFyIHJlcSBkZWxldGVXaG9pc1JlcXVlc3QKCQlpZiAhcmVzdC5SZWFkUkVTVFJlcSh3LCByLCBjbGlDdHguQ29kZWMsICZhbXA7cmVxKSB7CgkJCXJlc3QuV3JpdGVFcnJvclJlc3BvbnNlKHcsIGh0dHAuU3RhdHVzQmFkUmVxdWVzdCwgJnF1b3Q7ZmFpbGVkIHRvIHBhcnNlIHJlcXVlc3QmcXVvdDspCgkJCXJldHVybgoJCX0KCQliYXNlUmVxIDo9IHJlcS5CYXNlUmVxLlNhbml0aXplKCkKCQlpZiAhYmFzZVJlcS5WYWxpZGF0ZUJhc2ljKHcpIHsKCQkJcmV0dXJuCgkJfQoJCWFkZHIsIGVyciA6PSBzZGsuQWNjQWRkcmVzc0Zyb21CZWNoMzIocmVxLk93bmVyKQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXN0LldyaXRlRXJyb3JSZXNwb25zZSh3LCBodHRwLlN0YXR1c0JhZFJlcXVlc3QsIGVyci5FcnJvcigpKQoJCQlyZXR1cm4KCQl9CgkJbXNnIDo9IHR5cGVzLk5ld01zZ0RlbGV0ZU5hbWUocmVxLk5hbWUsIGFkZHIpCgoJCWVyciA9IG1zZy5WYWxpZGF0ZUJhc2ljKCkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJcmVzdC5Xcml0ZUVycm9yUmVzcG9uc2UodywgaHR0cC5TdGF0dXNCYWRSZXF1ZXN0LCBlcnIuRXJyb3IoKSkKCQkJcmV0dXJuCgkJfQoKCQl1dGlscy5Xcml0ZUdlbmVyYXRlU3RkVHhSZXNwb25zZSh3LCBjbGlDdHgsIGJhc2VSZXEsIFtdc2RrLk1zZ3ttc2d9KQoJfQp9Cg=="}}),c._v(" "),e("p",[c._v("Notes on the above code:")]),c._v(" "),e("ul",[e("li",[c._v("The "),e("a",{attrs:{href:"https://godoc.org/github.com/cosmos/cosmos-sdk/client/utils#BaseReq",target:"_blank",rel:"noopener noreferrer"}},[e("code",[c._v("BaseReq")]),e("OutboundLink")],1),c._v(" contains the basic required fields for making a transaction (which key to use, how to decode it, which chain you are on, etc...) and is designed to be embedded as shown.")]),c._v(" "),e("li",[e("code",[c._v("baseReq.ValidateBasic")]),c._v(" handles setting the response code for you and therefore you don't need to worry about handling errors or successes when using those functions.")])]),c._v(" "),e("h3",{attrs:{id:"next-its-time-to-augment-nameservice-by-implementing-the-appmodule-interface"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-its-time-to-augment-nameservice-by-implementing-the-appmodule-interface"}},[c._v("#")]),c._v(" Next its time to augment "),e("code",[c._v("nameservice")]),c._v(" by implementing the AppModule interface.")])],1)}),[],!1,null,null,null);l.default=t.exports}}]);