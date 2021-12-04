(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{792:function(c,l,d){"use strict";d.r(l);var Z=d(1),W=Object(Z.a)({},(function(){var c=this,l=c.$createElement,d=c._self._c||l;return d("ContentSlotsDistributor",{attrs:{"slot-key":c.$parent.slotKey}},[d("h1",{attrs:{id:"complete-app"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#complete-app"}},[c._v("#")]),c._v(" Complete App")]),c._v(" "),d("p",[c._v("When you used the "),d("code",[c._v("starport type")]),c._v(" command, your application has already been incorporated in the "),d("code",[c._v(".app/app.go")]),c._v(" file.")]),c._v(" "),d("blockquote",[d("p",[d("em",[d("em",[c._v("NOTE")])]),c._v(": Your application needs to import the code you just wrote. Here the import path is set to this repository ("),d("code",[c._v("github.com/cosmos/sdk-tutorials/nameservice/x/nameservice")]),c._v("). If you are following along in your own repo you will need to change the import path to reflect that ("),d("code",[c._v("github.com/{ .Username }/{ .Project.Repo }/x/nameservice")]),c._v(").")])]),c._v(" "),d("p",[c._v("Inside the "),d("code",[c._v("./app/app.go")]),c._v(" file, it made the following changes:")]),c._v(" "),d("ul",[d("li",[c._v("Instantiate required "),d("code",[c._v("Keepers")]),c._v(" from each desired module.")]),c._v(" "),d("li",[c._v("Generate "),d("code",[c._v("storeKeys")]),c._v(" required by each "),d("code",[c._v("Keeper")]),c._v(".")]),c._v(" "),d("li",[c._v("Register "),d("code",[c._v("Handler")]),c._v("s from each module. The "),d("code",[c._v("AddRoute()")]),c._v(" method from "),d("code",[c._v("baseapp")]),c._v("'s "),d("code",[c._v("router")]),c._v(" is used to this end.")]),c._v(" "),d("li",[c._v("Register "),d("code",[c._v("Querier")]),c._v("s from each module. The "),d("code",[c._v("AddRoute()")]),c._v(" method from "),d("code",[c._v("baseapp")]),c._v("'s "),d("code",[c._v("queryRouter")]),c._v(" is used to this end.")]),c._v(" "),d("li",[c._v("Mount "),d("code",[c._v("KVStore")]),c._v("s to the provided keys in the "),d("code",[c._v("baseApp")]),c._v(" multistore.")]),c._v(" "),d("li",[c._v("Set the "),d("code",[c._v("initChainer")]),c._v(" for defining the initial application state.")])]),c._v(" "),d("p",[c._v("As a result, the file should look like this -")]),c._v(" "),d("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBhcHAKCmltcG9ydCAoCgkmcXVvdDtlbmNvZGluZy9qc29uJnF1b3Q7CgkmcXVvdDtpbyZxdW90OwoJJnF1b3Q7b3MmcXVvdDsKCglhYmNpICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvbG9nJnF1b3Q7Cgl0bW9zICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvb3MmcXVvdDsKCWRibSAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdG0tZGImcXVvdDsKCgliYW0gJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay9iYXNlYXBwJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2NvZGVjJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3NpbWFwcCZxdW90OwoJc2RrICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvbW9kdWxlJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3ZlcnNpb24mcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9hdXRoJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYmFuayZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2dlbnV0aWwmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9wYXJhbXMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9zdGFraW5nJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvc3VwcGx5JnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3VzZXIvbmFtZXNlcnZpY2UveC9uYW1lc2VydmljZSZxdW90OwoJbmFtZXNlcnZpY2VrZWVwZXIgJnF1b3Q7Z2l0aHViLmNvbS91c2VyL25hbWVzZXJ2aWNlL3gvbmFtZXNlcnZpY2Uva2VlcGVyJnF1b3Q7CgluYW1lc2VydmljZXR5cGVzICZxdW90O2dpdGh1Yi5jb20vdXNlci9uYW1lc2VydmljZS94L25hbWVzZXJ2aWNlL3R5cGVzJnF1b3Q7CgkvLyB0aGlzIGxpbmUgaXMgdXNlZCBieSBzdGFycG9ydCBzY2FmZm9sZGluZwopCgpjb25zdCBhcHBOYW1lID0gJnF1b3Q7bmFtZXNlcnZpY2UmcXVvdDsKCnZhciAoCglEZWZhdWx0Q0xJSG9tZSAgPSBvcy5FeHBhbmRFbnYoJnF1b3Q7JEhPTUUvLm5hbWVzZXJ2aWNlY2xpJnF1b3Q7KQoJRGVmYXVsdE5vZGVIb21lID0gb3MuRXhwYW5kRW52KCZxdW90OyRIT01FLy5uYW1lc2VydmljZWQmcXVvdDspCglNb2R1bGVCYXNpY3MgICAgPSBtb2R1bGUuTmV3QmFzaWNNYW5hZ2VyKAoJCWdlbnV0aWwuQXBwTW9kdWxlQmFzaWN7fSwKCQlhdXRoLkFwcE1vZHVsZUJhc2lje30sCgkJYmFuay5BcHBNb2R1bGVCYXNpY3t9LAoJCXN0YWtpbmcuQXBwTW9kdWxlQmFzaWN7fSwKCQlwYXJhbXMuQXBwTW9kdWxlQmFzaWN7fSwKCQlzdXBwbHkuQXBwTW9kdWxlQmFzaWN7fSwKCQluYW1lc2VydmljZS5BcHBNb2R1bGVCYXNpY3t9LAoJCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgMgoJKQoKCW1hY2NQZXJtcyA9IG1hcFtzdHJpbmddW11zdHJpbmd7CgkJYXV0aC5GZWVDb2xsZWN0b3JOYW1lOiAgICAgbmlsLAoJCXN0YWtpbmcuQm9uZGVkUG9vbE5hbWU6ICAgIHtzdXBwbHkuQnVybmVyLCBzdXBwbHkuU3Rha2luZ30sCgkJc3Rha2luZy5Ob3RCb25kZWRQb29sTmFtZToge3N1cHBseS5CdXJuZXIsIHN1cHBseS5TdGFraW5nfSwKCX0KKQoKZnVuYyBNYWtlQ29kZWMoKSAqY29kZWMuQ29kZWMgewoJdmFyIGNkYyA9IGNvZGVjLk5ldygpCgoJTW9kdWxlQmFzaWNzLlJlZ2lzdGVyQ29kZWMoY2RjKQoJc2RrLlJlZ2lzdGVyQ29kZWMoY2RjKQoJY29kZWMuUmVnaXN0ZXJDcnlwdG8oY2RjKQoKCXJldHVybiBjZGMuU2VhbCgpCn0KCnR5cGUgTmV3QXBwIHN0cnVjdCB7CgkqYmFtLkJhc2VBcHAKCWNkYyAqY29kZWMuQ29kZWMKCglpbnZDaGVja1BlcmlvZCB1aW50CgoJa2V5cyAgbWFwW3N0cmluZ10qc2RrLktWU3RvcmVLZXkKCXRLZXlzIG1hcFtzdHJpbmddKnNkay5UcmFuc2llbnRTdG9yZUtleQoKCXN1YnNwYWNlcyBtYXBbc3RyaW5nXXBhcmFtcy5TdWJzcGFjZQoKCWFjY291bnRLZWVwZXIgICAgIGF1dGguQWNjb3VudEtlZXBlcgoJYmFua0tlZXBlciAgICAgICAgYmFuay5LZWVwZXIKCXN0YWtpbmdLZWVwZXIgICAgIHN0YWtpbmcuS2VlcGVyCglzdXBwbHlLZWVwZXIgICAgICBzdXBwbHkuS2VlcGVyCglwYXJhbXNLZWVwZXIgICAgICBwYXJhbXMuS2VlcGVyCgluYW1lc2VydmljZUtlZXBlciBuYW1lc2VydmljZWtlZXBlci5LZWVwZXIKCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgMwoJbW0gKm1vZHVsZS5NYW5hZ2VyCgoJc20gKm1vZHVsZS5TaW11bGF0aW9uTWFuYWdlcgp9Cgp2YXIgXyBzaW1hcHAuQXBwID0gKCpOZXdBcHApKG5pbCkKCmZ1bmMgTmV3SW5pdEFwcCgKCWxvZ2dlciBsb2cuTG9nZ2VyLCBkYiBkYm0uREIsIHRyYWNlU3RvcmUgaW8uV3JpdGVyLCBsb2FkTGF0ZXN0IGJvb2wsCglpbnZDaGVja1BlcmlvZCB1aW50LCBiYXNlQXBwT3B0aW9ucyAuLi5mdW5jKCpiYW0uQmFzZUFwcCksCikgKk5ld0FwcCB7CgljZGMgOj0gTWFrZUNvZGVjKCkKCgliQXBwIDo9IGJhbS5OZXdCYXNlQXBwKGFwcE5hbWUsIGxvZ2dlciwgZGIsIGF1dGguRGVmYXVsdFR4RGVjb2RlcihjZGMpLCBiYXNlQXBwT3B0aW9ucy4uLikKCWJBcHAuU2V0Q29tbWl0TXVsdGlTdG9yZVRyYWNlcih0cmFjZVN0b3JlKQoJYkFwcC5TZXRBcHBWZXJzaW9uKHZlcnNpb24uVmVyc2lvbikKCglrZXlzIDo9IHNkay5OZXdLVlN0b3JlS2V5cygKCQliYW0uTWFpblN0b3JlS2V5LAoJCWF1dGguU3RvcmVLZXksCgkJc3Rha2luZy5TdG9yZUtleSwKCQlzdXBwbHkuU3RvcmVLZXksCgkJcGFyYW1zLlN0b3JlS2V5LAoJCW5hbWVzZXJ2aWNldHlwZXMuU3RvcmVLZXksCgkJLy8gdGhpcyBsaW5lIGlzIHVzZWQgYnkgc3RhcnBvcnQgc2NhZmZvbGRpbmcgIyA1CgkpCgoJdEtleXMgOj0gc2RrLk5ld1RyYW5zaWVudFN0b3JlS2V5cyhzdGFraW5nLlRTdG9yZUtleSwgcGFyYW1zLlRTdG9yZUtleSkKCgl2YXIgYXBwID0gJmFtcDtOZXdBcHB7CgkJQmFzZUFwcDogICAgICAgIGJBcHAsCgkJY2RjOiAgICAgICAgICAgIGNkYywKCQlpbnZDaGVja1BlcmlvZDogaW52Q2hlY2tQZXJpb2QsCgkJa2V5czogICAgICAgICAgIGtleXMsCgkJdEtleXM6ICAgICAgICAgIHRLZXlzLAoJCXN1YnNwYWNlczogICAgICBtYWtlKG1hcFtzdHJpbmddcGFyYW1zLlN1YnNwYWNlKSwKCX0KCglhcHAucGFyYW1zS2VlcGVyID0gcGFyYW1zLk5ld0tlZXBlcihhcHAuY2RjLCBrZXlzW3BhcmFtcy5TdG9yZUtleV0sIHRLZXlzW3BhcmFtcy5UU3RvcmVLZXldKQoJYXBwLnN1YnNwYWNlc1thdXRoLk1vZHVsZU5hbWVdID0gYXBwLnBhcmFtc0tlZXBlci5TdWJzcGFjZShhdXRoLkRlZmF1bHRQYXJhbXNwYWNlKQoJYXBwLnN1YnNwYWNlc1tiYW5rLk1vZHVsZU5hbWVdID0gYXBwLnBhcmFtc0tlZXBlci5TdWJzcGFjZShiYW5rLkRlZmF1bHRQYXJhbXNwYWNlKQoJYXBwLnN1YnNwYWNlc1tzdGFraW5nLk1vZHVsZU5hbWVdID0gYXBwLnBhcmFtc0tlZXBlci5TdWJzcGFjZShzdGFraW5nLkRlZmF1bHRQYXJhbXNwYWNlKQoKCWFwcC5hY2NvdW50S2VlcGVyID0gYXV0aC5OZXdBY2NvdW50S2VlcGVyKAoJCWFwcC5jZGMsCgkJa2V5c1thdXRoLlN0b3JlS2V5XSwKCQlhcHAuc3Vic3BhY2VzW2F1dGguTW9kdWxlTmFtZV0sCgkJYXV0aC5Qcm90b0Jhc2VBY2NvdW50LAoJKQoKCWFwcC5iYW5rS2VlcGVyID0gYmFuay5OZXdCYXNlS2VlcGVyKAoJCWFwcC5hY2NvdW50S2VlcGVyLAoJCWFwcC5zdWJzcGFjZXNbYmFuay5Nb2R1bGVOYW1lXSwKCQlhcHAuTW9kdWxlQWNjb3VudEFkZHJzKCksCgkpCgoJYXBwLnN1cHBseUtlZXBlciA9IHN1cHBseS5OZXdLZWVwZXIoCgkJYXBwLmNkYywKCQlrZXlzW3N1cHBseS5TdG9yZUtleV0sCgkJYXBwLmFjY291bnRLZWVwZXIsCgkJYXBwLmJhbmtLZWVwZXIsCgkJbWFjY1Blcm1zLAoJKQoKCXN0YWtpbmdLZWVwZXIgOj0gc3Rha2luZy5OZXdLZWVwZXIoCgkJYXBwLmNkYywKCQlrZXlzW3N0YWtpbmcuU3RvcmVLZXldLAoJCWFwcC5zdXBwbHlLZWVwZXIsCgkJYXBwLnN1YnNwYWNlc1tzdGFraW5nLk1vZHVsZU5hbWVdLAoJKQoKCWFwcC5zdGFraW5nS2VlcGVyID0gKnN0YWtpbmdLZWVwZXIuU2V0SG9va3MoCgkJc3Rha2luZy5OZXdNdWx0aVN0YWtpbmdIb29rcygpLAoJKQoKCWFwcC5uYW1lc2VydmljZUtlZXBlciA9IG5hbWVzZXJ2aWNla2VlcGVyLk5ld0tlZXBlcigKCQlhcHAuYmFua0tlZXBlciwKCQlhcHAuY2RjLAoJCWtleXNbbmFtZXNlcnZpY2V0eXBlcy5TdG9yZUtleV0sCgkpCgoJLy8gdGhpcyBsaW5lIGlzIHVzZWQgYnkgc3RhcnBvcnQgc2NhZmZvbGRpbmcgIyA0CgoJYXBwLm1tID0gbW9kdWxlLk5ld01hbmFnZXIoCgkJZ2VudXRpbC5OZXdBcHBNb2R1bGUoYXBwLmFjY291bnRLZWVwZXIsIGFwcC5zdGFraW5nS2VlcGVyLCBhcHAuQmFzZUFwcC5EZWxpdmVyVHgpLAoJCWF1dGguTmV3QXBwTW9kdWxlKGFwcC5hY2NvdW50S2VlcGVyKSwKCQliYW5rLk5ld0FwcE1vZHVsZShhcHAuYmFua0tlZXBlciwgYXBwLmFjY291bnRLZWVwZXIpLAoJCXN1cHBseS5OZXdBcHBNb2R1bGUoYXBwLnN1cHBseUtlZXBlciwgYXBwLmFjY291bnRLZWVwZXIpLAoJCW5hbWVzZXJ2aWNlLk5ld0FwcE1vZHVsZShhcHAubmFtZXNlcnZpY2VLZWVwZXIsIGFwcC5iYW5rS2VlcGVyKSwKCQlzdGFraW5nLk5ld0FwcE1vZHVsZShhcHAuc3Rha2luZ0tlZXBlciwgYXBwLmFjY291bnRLZWVwZXIsIGFwcC5zdXBwbHlLZWVwZXIpLAoJCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgNgoJKQoKCWFwcC5tbS5TZXRPcmRlckVuZEJsb2NrZXJzKHN0YWtpbmcuTW9kdWxlTmFtZSkKCglhcHAubW0uU2V0T3JkZXJJbml0R2VuZXNpcygKCQlzdGFraW5nLk1vZHVsZU5hbWUsCgkJYXV0aC5Nb2R1bGVOYW1lLAoJCWJhbmsuTW9kdWxlTmFtZSwKCQluYW1lc2VydmljZXR5cGVzLk1vZHVsZU5hbWUsCgkJc3VwcGx5Lk1vZHVsZU5hbWUsCgkJZ2VudXRpbC5Nb2R1bGVOYW1lLAoJCS8vIHRoaXMgbGluZSBpcyB1c2VkIGJ5IHN0YXJwb3J0IHNjYWZmb2xkaW5nICMgNwoJKQoKCWFwcC5tbS5SZWdpc3RlclJvdXRlcyhhcHAuUm91dGVyKCksIGFwcC5RdWVyeVJvdXRlcigpKQoKCWFwcC5TZXRJbml0Q2hhaW5lcihhcHAuSW5pdENoYWluZXIpCglhcHAuU2V0QmVnaW5CbG9ja2VyKGFwcC5CZWdpbkJsb2NrZXIpCglhcHAuU2V0RW5kQmxvY2tlcihhcHAuRW5kQmxvY2tlcikKCglhcHAuU2V0QW50ZUhhbmRsZXIoCgkJYXV0aC5OZXdBbnRlSGFuZGxlcigKCQkJYXBwLmFjY291bnRLZWVwZXIsCgkJCWFwcC5zdXBwbHlLZWVwZXIsCgkJCWF1dGguRGVmYXVsdFNpZ1ZlcmlmaWNhdGlvbkdhc0NvbnN1bWVyLAoJCSksCgkpCgoJYXBwLk1vdW50S1ZTdG9yZXMoa2V5cykKCWFwcC5Nb3VudFRyYW5zaWVudFN0b3Jlcyh0S2V5cykKCglpZiBsb2FkTGF0ZXN0IHsKCQllcnIgOj0gYXBwLkxvYWRMYXRlc3RWZXJzaW9uKGFwcC5rZXlzW2JhbS5NYWluU3RvcmVLZXldKQoJCWlmIGVyciAhPSBuaWwgewoJCQl0bW9zLkV4aXQoZXJyLkVycm9yKCkpCgkJfQoJfQoKCXJldHVybiBhcHAKfQoKdHlwZSBHZW5lc2lzU3RhdGUgbWFwW3N0cmluZ11qc29uLlJhd01lc3NhZ2UKCmZ1bmMgTmV3RGVmYXVsdEdlbmVzaXNTdGF0ZSgpIEdlbmVzaXNTdGF0ZSB7CglyZXR1cm4gTW9kdWxlQmFzaWNzLkRlZmF1bHRHZW5lc2lzKCkKfQoKZnVuYyAoYXBwICpOZXdBcHApIEluaXRDaGFpbmVyKGN0eCBzZGsuQ29udGV4dCwgcmVxIGFiY2kuUmVxdWVzdEluaXRDaGFpbikgYWJjaS5SZXNwb25zZUluaXRDaGFpbiB7Cgl2YXIgZ2VuZXNpc1N0YXRlIHNpbWFwcC5HZW5lc2lzU3RhdGUKCglhcHAuY2RjLk11c3RVbm1hcnNoYWxKU09OKHJlcS5BcHBTdGF0ZUJ5dGVzLCAmYW1wO2dlbmVzaXNTdGF0ZSkKCglyZXR1cm4gYXBwLm1tLkluaXRHZW5lc2lzKGN0eCwgZ2VuZXNpc1N0YXRlKQp9CgpmdW5jIChhcHAgKk5ld0FwcCkgQmVnaW5CbG9ja2VyKGN0eCBzZGsuQ29udGV4dCwgcmVxIGFiY2kuUmVxdWVzdEJlZ2luQmxvY2spIGFiY2kuUmVzcG9uc2VCZWdpbkJsb2NrIHsKCXJldHVybiBhcHAubW0uQmVnaW5CbG9jayhjdHgsIHJlcSkKfQoKZnVuYyAoYXBwICpOZXdBcHApIEVuZEJsb2NrZXIoY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0RW5kQmxvY2spIGFiY2kuUmVzcG9uc2VFbmRCbG9jayB7CglyZXR1cm4gYXBwLm1tLkVuZEJsb2NrKGN0eCwgcmVxKQp9CgpmdW5jIChhcHAgKk5ld0FwcCkgTG9hZEhlaWdodChoZWlnaHQgaW50NjQpIGVycm9yIHsKCXJldHVybiBhcHAuTG9hZFZlcnNpb24oaGVpZ2h0LCBhcHAua2V5c1tiYW0uTWFpblN0b3JlS2V5XSkKfQoKZnVuYyAoYXBwICpOZXdBcHApIE1vZHVsZUFjY291bnRBZGRycygpIG1hcFtzdHJpbmddYm9vbCB7Cgltb2RBY2NBZGRycyA6PSBtYWtlKG1hcFtzdHJpbmddYm9vbCkKCWZvciBhY2MgOj0gcmFuZ2UgbWFjY1Blcm1zIHsKCQltb2RBY2NBZGRyc1tzdXBwbHkuTmV3TW9kdWxlQWRkcmVzcyhhY2MpLlN0cmluZygpXSA9IHRydWUKCX0KCglyZXR1cm4gbW9kQWNjQWRkcnMKfQoKZnVuYyAoYXBwICpOZXdBcHApIENvZGVjKCkgKmNvZGVjLkNvZGVjIHsKCXJldHVybiBhcHAuY2RjCn0KCmZ1bmMgKGFwcCAqTmV3QXBwKSBTaW11bGF0aW9uTWFuYWdlcigpICptb2R1bGUuU2ltdWxhdGlvbk1hbmFnZXIgewoJcmV0dXJuIGFwcC5zbQp9CgpmdW5jIEdldE1hY2NQZXJtcygpIG1hcFtzdHJpbmddW11zdHJpbmcgewoJbW9kQWNjUGVybXMgOj0gbWFrZShtYXBbc3RyaW5nXVtdc3RyaW5nKQoJZm9yIGssIHYgOj0gcmFuZ2UgbWFjY1Blcm1zIHsKCQltb2RBY2NQZXJtc1trXSA9IHYKCX0KCXJldHVybiBtb2RBY2NQZXJtcwp9Cg=="}}),c._v(" "),d("blockquote",[d("p",[d("em",[d("em",[c._v("NOTE")])]),c._v(": The TransientStore mentioned above is an in-memory implementation of the KVStore for state that is not persisted.")])]),c._v(" "),d("blockquote",[d("p",[d("em",[d("em",[c._v("NOTE")])]),c._v(": Pay attention to how the modules are initiated: the order matters! Here the sequence goes Auth --\x3e Bank --\x3e Feecollection --\x3e Staking --\x3e Distribution --\x3e Slashing, then the hooks were set for the staking module. This is because some of these modules depend on others existing before they can be used.")])]),c._v(" "),d("p",[c._v("You'll notice a few functions at the end of the file. The "),d("code",[c._v("initChainer")]),c._v(" defines how accounts in "),d("code",[c._v("genesis.json")]),c._v(" are mapped into the application state on initial chain start. The "),d("code",[c._v("ExportAppStateAndValidators")]),c._v(" function helps bootstrap the initial state for the application. "),d("code",[c._v("BeginBlocker")]),c._v(" and "),d("code",[c._v("EndBlocker")]),c._v(" are optional methods module developers can implement in their module. They will be triggered at the beginning and at the end of each block respectively, when the "),d("code",[c._v("BeginBlock")]),c._v(" and "),d("code",[c._v("EndBlock")]),c._v(" ABCI messages are received from the underlying consensus engine.")]),c._v(" "),d("h3",{attrs:{id:"now-it-s-time-to-update-your-entrypoints"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#now-it-s-time-to-update-your-entrypoints"}},[c._v("#")]),c._v(" Now, it's time to update your entrypoints.")])],1)}),[],!1,null,null,null);l.default=W.exports}}]);