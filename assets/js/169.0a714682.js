(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{793:function(b,l,c){"use strict";c.r(l);var Z=c(1),d=Object(Z.a)({},(function(){var b=this,l=b.$createElement,c=b._self._c||l;return c("ContentSlotsDistributor",{attrs:{"slot-key":b.$parent.slotKey}},[c("h1",{attrs:{id:"entrypoints"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#entrypoints"}},[b._v("#")]),b._v(" Entrypoints")]),b._v(" "),c("p",[b._v("In Golang the convention is to place files that compile to a binary in the "),c("code",[b._v("./cmd")]),b._v(" folder of a project. For your application there are 2 binaries that you want to create:")]),b._v(" "),c("ul",[c("li",[c("code",[b._v("nameservicecli")]),b._v(": This binary provides commands that allow users to interact with your application.")]),b._v(" "),c("li",[c("code",[b._v("nameserviced")]),b._v(": This binary is similar to "),c("code",[b._v("bitcoind")]),b._v(" or other cryptocurrency daemons in that it maintains p2p connections, propagates transactions, handles local storage and provides an RPC interface to interact with the network. In this case, Tendermint is used for networking and transaction ordering.")])]),b._v(" "),c("p",[b._v("We should have the following two files already scaffolded for us:")]),b._v(" "),c("ul",[c("li",[c("code",[b._v("./cmd/nameserviced/main.go")])]),b._v(" "),c("li",[c("code",[b._v("./cmd/nameservicecli/main.go")])])]),b._v(" "),c("h2",{attrs:{id:"nameserviced"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#nameserviced"}},[b._v("#")]),b._v(" "),c("code",[b._v("nameserviced")])]),b._v(" "),c("p",[b._v("Start by verifying that your "),c("code",[b._v("cmd/nameserviced/main.go")]),b._v(" looks like this:")]),b._v(" "),c("blockquote",[c("p",[c("em",[c("em",[b._v("NOTE")])]),b._v(": Your application needs to import the code you just wrote. Here the import path is set to this repository ("),c("code",[b._v("github.com/cosmos/sdk-tutorials/nameservice")]),b._v("). If you are following along in your own repo you will need to change the import path to reflect that ("),c("code",[b._v("github.com/{ .Username }/{ .Project.Repo }")]),b._v(").")])]),b._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7ZW5jb2RpbmcvanNvbiZxdW90OwoJJnF1b3Q7aW8mcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL3NwZjEzL2NvYnJhJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3NwZjEzL3ZpcGVyJnF1b3Q7CgoJYWJjaSAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9hYmNpL3R5cGVzJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9saWJzL2NsaSZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9sb2cmcXVvdDsKCXRtdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvdHlwZXMmcXVvdDsKCWRibSAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdG0tZGImcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL3VzZXIvbmFtZXNlcnZpY2UvYXBwJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9iYXNlYXBwJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC9kZWJ1ZyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQvZmxhZ3MmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvc2VydmVyJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3N0b3JlJnF1b3Q7CglzZGsgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2F1dGgmcXVvdDsKCWdlbnV0aWxjbGkgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2dlbnV0aWwvY2xpZW50L2NsaSZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L3N0YWtpbmcmcXVvdDsKKQoKY29uc3QgZmxhZ0ludkNoZWNrUGVyaW9kID0gJnF1b3Q7aW52LWNoZWNrLXBlcmlvZCZxdW90OwoKdmFyIGludkNoZWNrUGVyaW9kIHVpbnQKCmZ1bmMgbWFpbigpIHsKCWNkYyA6PSBhcHAuTWFrZUNvZGVjKCkKCglhcHAuU2V0Q29uZmlnKCkKCgljdHggOj0gc2VydmVyLk5ld0RlZmF1bHRDb250ZXh0KCkKCWNvYnJhLkVuYWJsZUNvbW1hbmRTb3J0aW5nID0gZmFsc2UKCXJvb3RDbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAgICAgICAgICAgICAmcXVvdDtuYW1lc2VydmljZWQmcXVvdDssCgkJU2hvcnQ6ICAgICAgICAgICAgICZxdW90O2FwcCBEYWVtb24gKHNlcnZlcikmcXVvdDssCgkJUGVyc2lzdGVudFByZVJ1bkU6IHNlcnZlci5QZXJzaXN0ZW50UHJlUnVuRUZuKGN0eCksCgl9CgoJcm9vdENtZC5BZGRDb21tYW5kKGdlbnV0aWxjbGkuSW5pdENtZChjdHgsIGNkYywgYXBwLk1vZHVsZUJhc2ljcywgYXBwLkRlZmF1bHROb2RlSG9tZSkpCglyb290Q21kLkFkZENvbW1hbmQoZ2VudXRpbGNsaS5Db2xsZWN0R2VuVHhzQ21kKGN0eCwgY2RjLCBhdXRoLkdlbmVzaXNBY2NvdW50SXRlcmF0b3J7fSwgYXBwLkRlZmF1bHROb2RlSG9tZSkpCglyb290Q21kLkFkZENvbW1hbmQoZ2VudXRpbGNsaS5NaWdyYXRlR2VuZXNpc0NtZChjdHgsIGNkYykpCglyb290Q21kLkFkZENvbW1hbmQoCgkJZ2VudXRpbGNsaS5HZW5UeENtZCgKCQkJY3R4LCBjZGMsIGFwcC5Nb2R1bGVCYXNpY3MsIHN0YWtpbmcuQXBwTW9kdWxlQmFzaWN7fSwKCQkJYXV0aC5HZW5lc2lzQWNjb3VudEl0ZXJhdG9ye30sIGFwcC5EZWZhdWx0Tm9kZUhvbWUsIGFwcC5EZWZhdWx0Q0xJSG9tZSwKCQkpLAoJKQoJcm9vdENtZC5BZGRDb21tYW5kKGdlbnV0aWxjbGkuVmFsaWRhdGVHZW5lc2lzQ21kKGN0eCwgY2RjLCBhcHAuTW9kdWxlQmFzaWNzKSkKCXJvb3RDbWQuQWRkQ29tbWFuZChBZGRHZW5lc2lzQWNjb3VudENtZChjdHgsIGNkYywgYXBwLkRlZmF1bHROb2RlSG9tZSwgYXBwLkRlZmF1bHRDTElIb21lKSkKCXJvb3RDbWQuQWRkQ29tbWFuZChmbGFncy5OZXdDb21wbGV0aW9uQ21kKHJvb3RDbWQsIHRydWUpKQoJcm9vdENtZC5BZGRDb21tYW5kKGRlYnVnLkNtZChjZGMpKQoKCXNlcnZlci5BZGRDb21tYW5kcyhjdHgsIGNkYywgcm9vdENtZCwgbmV3QXBwLCBleHBvcnRBcHBTdGF0ZUFuZFRNVmFsaWRhdG9ycykKCgkvLyBwcmVwYXJlIGFuZCBhZGQgZmxhZ3MKCWV4ZWN1dG9yIDo9IGNsaS5QcmVwYXJlQmFzZUNtZChyb290Q21kLCAmcXVvdDtBVSZxdW90OywgYXBwLkRlZmF1bHROb2RlSG9tZSkKCXJvb3RDbWQuUGVyc2lzdGVudEZsYWdzKCkuVWludFZhcigmYW1wO2ludkNoZWNrUGVyaW9kLCBmbGFnSW52Q2hlY2tQZXJpb2QsCgkJMCwgJnF1b3Q7QXNzZXJ0IHJlZ2lzdGVyZWQgaW52YXJpYW50cyBldmVyeSBOIGJsb2NrcyZxdW90OykKCWVyciA6PSBleGVjdXRvci5FeGVjdXRlKCkKCWlmIGVyciAhPSBuaWwgewoJCXBhbmljKGVycikKCX0KfQoKZnVuYyBuZXdBcHAobG9nZ2VyIGxvZy5Mb2dnZXIsIGRiIGRibS5EQiwgdHJhY2VTdG9yZSBpby5Xcml0ZXIpIGFiY2kuQXBwbGljYXRpb24gewoJdmFyIGNhY2hlIHNkay5NdWx0aVN0b3JlUGVyc2lzdGVudENhY2hlCgoJaWYgdmlwZXIuR2V0Qm9vbChzZXJ2ZXIuRmxhZ0ludGVyQmxvY2tDYWNoZSkgewoJCWNhY2hlID0gc3RvcmUuTmV3Q29tbWl0S1ZTdG9yZUNhY2hlTWFuYWdlcigpCgl9CglwcnVuaW5nT3B0cywgZXJyIDo9IHNlcnZlci5HZXRQcnVuaW5nT3B0aW9uc0Zyb21GbGFncygpCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CglyZXR1cm4gYXBwLk5ld0luaXRBcHAoCgkJbG9nZ2VyLCBkYiwgdHJhY2VTdG9yZSwgdHJ1ZSwgaW52Q2hlY2tQZXJpb2QsCgkJYmFzZWFwcC5TZXRQcnVuaW5nKHBydW5pbmdPcHRzKSwKCQliYXNlYXBwLlNldE1pbkdhc1ByaWNlcyh2aXBlci5HZXRTdHJpbmcoc2VydmVyLkZsYWdNaW5HYXNQcmljZXMpKSwKCQliYXNlYXBwLlNldEhhbHRIZWlnaHQodmlwZXIuR2V0VWludDY0KHNlcnZlci5GbGFnSGFsdEhlaWdodCkpLAoJCWJhc2VhcHAuU2V0SGFsdFRpbWUodmlwZXIuR2V0VWludDY0KHNlcnZlci5GbGFnSGFsdFRpbWUpKSwKCQliYXNlYXBwLlNldEludGVyQmxvY2tDYWNoZShjYWNoZSksCgkpCn0KCmZ1bmMgZXhwb3J0QXBwU3RhdGVBbmRUTVZhbGlkYXRvcnMoCglsb2dnZXIgbG9nLkxvZ2dlciwgZGIgZGJtLkRCLCB0cmFjZVN0b3JlIGlvLldyaXRlciwgaGVpZ2h0IGludDY0LCBmb3JaZXJvSGVpZ2h0IGJvb2wsIGphaWxXaGl0ZUxpc3QgW11zdHJpbmcsCikgKGpzb24uUmF3TWVzc2FnZSwgW110bXR5cGVzLkdlbmVzaXNWYWxpZGF0b3IsIGVycm9yKSB7CgoJaWYgaGVpZ2h0ICE9IC0xIHsKCQlhQXBwIDo9IGFwcC5OZXdJbml0QXBwKGxvZ2dlciwgZGIsIHRyYWNlU3RvcmUsIGZhbHNlLCB1aW50KDEpKQoJCWVyciA6PSBhQXBwLkxvYWRIZWlnaHQoaGVpZ2h0KQoJCWlmIGVyciAhPSBuaWwgewoJCQlyZXR1cm4gbmlsLCBuaWwsIGVycgoJCX0KCQlyZXR1cm4gYUFwcC5FeHBvcnRBcHBTdGF0ZUFuZFZhbGlkYXRvcnMoZm9yWmVyb0hlaWdodCwgamFpbFdoaXRlTGlzdCkKCX0KCglhQXBwIDo9IGFwcC5OZXdJbml0QXBwKGxvZ2dlciwgZGIsIHRyYWNlU3RvcmUsIHRydWUsIHVpbnQoMSkpCgoJcmV0dXJuIGFBcHAuRXhwb3J0QXBwU3RhdGVBbmRWYWxpZGF0b3JzKGZvclplcm9IZWlnaHQsIGphaWxXaGl0ZUxpc3QpCn0K"}}),b._v(" "),c("p",[b._v("Notes on the above code:")]),b._v(" "),c("ul",[c("li",[b._v("Most of the code above combines the CLI commands from Tendermint, Cosmos-SDK and your Nameservice module.")])]),b._v(" "),c("h2",{attrs:{id:"nameservicecli"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#nameservicecli"}},[b._v("#")]),b._v(" "),c("code",[b._v("nameservicecli")])]),b._v(" "),c("p",[b._v("Finish up by confirming your "),c("code",[b._v("nameservicecli")]),b._v(" command looks as follows:")]),b._v(" "),c("blockquote",[c("p",[c("em",[c("em",[b._v("NOTE")])]),b._v(": Your application needs to import the code you just wrote. Here the import path is set to this repository ("),c("code",[b._v("github.com/cosmos/sdk-tutorials/nameservice")]),b._v("). If you are following along in your own repo you will need to change the import path to reflect that ("),c("code",[b._v("github.com/{ .Username }/{ .Project.Repo }")]),b._v(").")])]),b._v(" "),c("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7Zm10JnF1b3Q7CgkmcXVvdDtvcyZxdW90OwoJJnF1b3Q7cGF0aCZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY2xpZW50JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC9mbGFncyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQva2V5cyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9jbGllbnQvbGNkJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NsaWVudC9ycGMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdmVyc2lvbiZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2F1dGgmcXVvdDsKCWF1dGhjbWQgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2F1dGgvY2xpZW50L2NsaSZxdW90OwoJYXV0aHJlc3QgJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2F1dGgvY2xpZW50L3Jlc3QmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rJnF1b3Q7CgliYW5rY21kICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rL2NsaWVudC9jbGkmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL3NwZjEzL2NvYnJhJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3NwZjEzL3ZpcGVyJnF1b3Q7CgoJJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L2dvLWFtaW5vJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9saWJzL2NsaSZxdW90OwoKCSZxdW90O2dpdGh1Yi5jb20vdXNlci9uYW1lc2VydmljZS9hcHAmcXVvdDsKCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nCikKCmZ1bmMgbWFpbigpIHsKCS8vIENvbmZpZ3VyZSBjb2JyYSB0byBzb3J0IGNvbW1hbmRzCgljb2JyYS5FbmFibGVDb21tYW5kU29ydGluZyA9IGZhbHNlCgoJLy8gSW5zdGFudGlhdGUgdGhlIGNvZGVjIGZvciB0aGUgY29tbWFuZCBsaW5lIGFwcGxpY2F0aW9uCgljZGMgOj0gYXBwLk1ha2VDb2RlYygpCgoJYXBwLlNldENvbmZpZygpCgoJLy8gVE9ETzogc2V0dXAga2V5YmFzZSwgdmlwZXIgb2JqZWN0LCBldGMuIHRvIGJlIHBhc3NlZCBpbnRvCgkvLyB0aGUgYmVsb3cgZnVuY3Rpb25zIGFuZCBlbGltaW5hdGUgZ2xvYmFsIHZhcnMsIGxpa2Ugd2UgZG8KCS8vIHdpdGggdGhlIGNkYwoKCXJvb3RDbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAmcXVvdDtuYW1lc2VydmljZWNsaSZxdW90OywKCQlTaG9ydDogJnF1b3Q7Q29tbWFuZCBsaW5lIGludGVyZmFjZSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBuYW1lc2VydmljZWQmcXVvdDssCgl9CgoJLy8gQWRkIC0tY2hhaW4taWQgdG8gcGVyc2lzdGVudCBmbGFncyBhbmQgbWFyayBpdCByZXF1aXJlZAoJcm9vdENtZC5QZXJzaXN0ZW50RmxhZ3MoKS5TdHJpbmcoZmxhZ3MuRmxhZ0NoYWluSUQsICZxdW90OyZxdW90OywgJnF1b3Q7Q2hhaW4gSUQgb2YgdGVuZGVybWludCBub2RlJnF1b3Q7KQoJcm9vdENtZC5QZXJzaXN0ZW50UHJlUnVuRSA9IGZ1bmMoXyAqY29icmEuQ29tbWFuZCwgXyBbXXN0cmluZykgZXJyb3IgewoJCXJldHVybiBpbml0Q29uZmlnKHJvb3RDbWQpCgl9CgoJLy8gQ29uc3RydWN0IFJvb3QgQ29tbWFuZAoJcm9vdENtZC5BZGRDb21tYW5kKAoJCXJwYy5TdGF0dXNDb21tYW5kKCksCgkJY2xpZW50LkNvbmZpZ0NtZChhcHAuRGVmYXVsdENMSUhvbWUpLAoJCXF1ZXJ5Q21kKGNkYyksCgkJdHhDbWQoY2RjKSwKCQlmbGFncy5MaW5lQnJlYWssCgkJbGNkLlNlcnZlQ29tbWFuZChjZGMsIHJlZ2lzdGVyUm91dGVzKSwKCQlmbGFncy5MaW5lQnJlYWssCgkJa2V5cy5Db21tYW5kcygpLAoJCWZsYWdzLkxpbmVCcmVhaywKCQl2ZXJzaW9uLkNtZCwKCQlmbGFncy5OZXdDb21wbGV0aW9uQ21kKHJvb3RDbWQsIHRydWUpLAoJKQoKCS8vIEFkZCBmbGFncyBhbmQgcHJlZml4IGFsbCBlbnYgZXhwb3NlZCB3aXRoIEFBCglleGVjdXRvciA6PSBjbGkuUHJlcGFyZU1haW5DbWQocm9vdENtZCwgJnF1b3Q7QUEmcXVvdDssIGFwcC5EZWZhdWx0Q0xJSG9tZSkKCgllcnIgOj0gZXhlY3V0b3IuRXhlY3V0ZSgpCglpZiBlcnIgIT0gbmlsIHsKCQlmbXQuUHJpbnRmKCZxdW90O0ZhaWxlZCBleGVjdXRpbmcgQ0xJIGNvbW1hbmQ6ICVzLCBleGl0aW5nLi4uXG4mcXVvdDssIGVycikKCQlvcy5FeGl0KDEpCgl9Cn0KCmZ1bmMgcXVlcnlDbWQoY2RjICphbWluby5Db2RlYykgKmNvYnJhLkNvbW1hbmQgewoJcXVlcnlDbWQgOj0gJmFtcDtjb2JyYS5Db21tYW5kewoJCVVzZTogICAgICZxdW90O3F1ZXJ5JnF1b3Q7LAoJCUFsaWFzZXM6IFtdc3RyaW5neyZxdW90O3EmcXVvdDt9LAoJCVNob3J0OiAgICZxdW90O1F1ZXJ5aW5nIHN1YmNvbW1hbmRzJnF1b3Q7LAoJfQoKCXF1ZXJ5Q21kLkFkZENvbW1hbmQoCgkJYXV0aGNtZC5HZXRBY2NvdW50Q21kKGNkYyksCgkJZmxhZ3MuTGluZUJyZWFrLAoJCXJwYy5WYWxpZGF0b3JDb21tYW5kKGNkYyksCgkJcnBjLkJsb2NrQ29tbWFuZCgpLAoJCWF1dGhjbWQuUXVlcnlUeHNCeUV2ZW50c0NtZChjZGMpLAoJCWF1dGhjbWQuUXVlcnlUeENtZChjZGMpLAoJCWZsYWdzLkxpbmVCcmVhaywKCSkKCgkvLyBhZGQgbW9kdWxlcycgcXVlcnkgY29tbWFuZHMKCWFwcC5Nb2R1bGVCYXNpY3MuQWRkUXVlcnlDb21tYW5kcyhxdWVyeUNtZCwgY2RjKQoKCXJldHVybiBxdWVyeUNtZAp9CgpmdW5jIHR4Q21kKGNkYyAqYW1pbm8uQ29kZWMpICpjb2JyYS5Db21tYW5kIHsKCXR4Q21kIDo9ICZhbXA7Y29icmEuQ29tbWFuZHsKCQlVc2U6ICAgJnF1b3Q7dHgmcXVvdDssCgkJU2hvcnQ6ICZxdW90O1RyYW5zYWN0aW9ucyBzdWJjb21tYW5kcyZxdW90OywKCX0KCgl0eENtZC5BZGRDb21tYW5kKAoJCWJhbmtjbWQuU2VuZFR4Q21kKGNkYyksCgkJZmxhZ3MuTGluZUJyZWFrLAoJCWF1dGhjbWQuR2V0U2lnbkNvbW1hbmQoY2RjKSwKCQlhdXRoY21kLkdldE11bHRpU2lnbkNvbW1hbmQoY2RjKSwKCQlmbGFncy5MaW5lQnJlYWssCgkJYXV0aGNtZC5HZXRCcm9hZGNhc3RDb21tYW5kKGNkYyksCgkJYXV0aGNtZC5HZXRFbmNvZGVDb21tYW5kKGNkYyksCgkJYXV0aGNtZC5HZXREZWNvZGVDb21tYW5kKGNkYyksCgkJZmxhZ3MuTGluZUJyZWFrLAoJKQoKCS8vIGFkZCBtb2R1bGVzJyB0eCBjb21tYW5kcwoJYXBwLk1vZHVsZUJhc2ljcy5BZGRUeENvbW1hbmRzKHR4Q21kLCBjZGMpCgoJLy8gcmVtb3ZlIGF1dGggYW5kIGJhbmsgY29tbWFuZHMgYXMgdGhleSdyZSBtb3VudGVkIHVuZGVyIHRoZSByb290IHR4IGNvbW1hbmQKCXZhciBjbWRzVG9SZW1vdmUgW10qY29icmEuQ29tbWFuZAoKCWZvciBfLCBjbWQgOj0gcmFuZ2UgdHhDbWQuQ29tbWFuZHMoKSB7CgkJaWYgY21kLlVzZSA9PSBhdXRoLk1vZHVsZU5hbWUgfHwgY21kLlVzZSA9PSBiYW5rLk1vZHVsZU5hbWUgewoJCQljbWRzVG9SZW1vdmUgPSBhcHBlbmQoY21kc1RvUmVtb3ZlLCBjbWQpCgkJfQoJfQoKCXR4Q21kLlJlbW92ZUNvbW1hbmQoY21kc1RvUmVtb3ZlLi4uKQoKCXJldHVybiB0eENtZAp9CgovLyByZWdpc3RlclJvdXRlcyByZWdpc3RlcnMgdGhlIHJvdXRlcyBmcm9tIHRoZSBkaWZmZXJlbnQgbW9kdWxlcyBmb3IgdGhlIExDRC4KLy8gTk9URTogZGV0YWlscyBvbiB0aGUgcm91dGVzIGFkZGVkIGZvciBlYWNoIG1vZHVsZSBhcmUgaW4gdGhlIG1vZHVsZSBkb2N1bWVudGF0aW9uCi8vIE5PVEU6IElmIG1ha2luZyB1cGRhdGVzIGhlcmUgeW91IGFsc28gbmVlZCB0byB1cGRhdGUgdGhlIHRlc3QgaGVscGVyIGluIGNsaWVudC9sY2QvdGVzdF9oZWxwZXIuZ28KZnVuYyByZWdpc3RlclJvdXRlcyhycyAqbGNkLlJlc3RTZXJ2ZXIpIHsKCWNsaWVudC5SZWdpc3RlclJvdXRlcyhycy5DbGlDdHgsIHJzLk11eCkKCWF1dGhyZXN0LlJlZ2lzdGVyVHhSb3V0ZXMocnMuQ2xpQ3R4LCBycy5NdXgpCglhcHAuTW9kdWxlQmFzaWNzLlJlZ2lzdGVyUkVTVFJvdXRlcyhycy5DbGlDdHgsIHJzLk11eCkKCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgMgp9CgpmdW5jIGluaXRDb25maWcoY21kICpjb2JyYS5Db21tYW5kKSBlcnJvciB7Cglob21lLCBlcnIgOj0gY21kLlBlcnNpc3RlbnRGbGFncygpLkdldFN0cmluZyhjbGkuSG9tZUZsYWcpCglpZiBlcnIgIT0gbmlsIHsKCQlyZXR1cm4gZXJyCgl9CgoJY2ZnRmlsZSA6PSBwYXRoLkpvaW4oaG9tZSwgJnF1b3Q7Y29uZmlnJnF1b3Q7LCAmcXVvdDtjb25maWcudG9tbCZxdW90OykKCWlmIF8sIGVyciA6PSBvcy5TdGF0KGNmZ0ZpbGUpOyBlcnIgPT0gbmlsIHsKCQl2aXBlci5TZXRDb25maWdGaWxlKGNmZ0ZpbGUpCgoJCWlmIGVyciA6PSB2aXBlci5SZWFkSW5Db25maWcoKTsgZXJyICE9IG5pbCB7CgkJCXJldHVybiBlcnIKCQl9Cgl9CglpZiBlcnIgOj0gdmlwZXIuQmluZFBGbGFnKGZsYWdzLkZsYWdDaGFpbklELCBjbWQuUGVyc2lzdGVudEZsYWdzKCkuTG9va3VwKGZsYWdzLkZsYWdDaGFpbklEKSk7IGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCWlmIGVyciA6PSB2aXBlci5CaW5kUEZsYWcoY2xpLkVuY29kaW5nRmxhZywgY21kLlBlcnNpc3RlbnRGbGFncygpLkxvb2t1cChjbGkuRW5jb2RpbmdGbGFnKSk7IGVyciAhPSBuaWwgewoJCXJldHVybiBlcnIKCX0KCXJldHVybiB2aXBlci5CaW5kUEZsYWcoY2xpLk91dHB1dEZsYWcsIGNtZC5QZXJzaXN0ZW50RmxhZ3MoKS5Mb29rdXAoY2xpLk91dHB1dEZsYWcpKQp9Cg=="}}),b._v(" "),c("p",[b._v("Note:")]),b._v(" "),c("ul",[c("li",[b._v("The code combines the CLI commands from Tendermint, Cosmos-SDK and your Nameservice module.")]),b._v(" "),c("li",[b._v("The "),c("a",{attrs:{href:"http://github.com/spf13/cobra",target:"_blank",rel:"noopener noreferrer"}},[c("code",[b._v("cobra")]),b._v(" CLI documentation"),c("OutboundLink")],1),b._v(" will help with understanding the above code.")]),b._v(" "),c("li",[b._v("You can see the "),c("code",[b._v("ModuleClient")]),b._v(" defined earlier in action here.")]),b._v(" "),c("li",[b._v("Note how the routes are included in the "),c("code",[b._v("registerRoutes")]),b._v(" function.")])]),b._v(" "),c("h3",{attrs:{id:"now-that-you-have-your-binaries-defined-its-time-to-deal-with-dependency-management-and-build-your-app"}},[c("a",{staticClass:"header-anchor",attrs:{href:"#now-that-you-have-your-binaries-defined-its-time-to-deal-with-dependency-management-and-build-your-app"}},[b._v("#")]),b._v(" Now that you have your binaries defined its time to deal with dependency management and build your app.")])],1)}),[],!1,null,null,null);l.default=d.exports}}]);