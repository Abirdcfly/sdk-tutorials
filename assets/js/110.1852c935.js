(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{720:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"ignite-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ignite-cli"}},[e._v("#")]),e._v(" Ignite CLI")]),e._v(" "),o("HighlightBox",{attrs:{type:"prerequisite"}},[o("p",[e._v("Before diving into the details of how Ignite CLI helps you scaffold the basics for your application blockchain make sure to understand the main concepts presented in the following sections:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/1-architecture.html"}},[e._v("A Blockchain App Architecture")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/2-accounts.html"}},[e._v("Accounts")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("Transactions")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("Messages")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/5-modules.html"}},[e._v("Modules")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/8-base-app.html"}},[e._v("BaseApp")])],1)])]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[e._v("In this section, you will:")]),e._v(" "),o("ul",[o("li",[e._v("Install the Ignite CLI.")]),e._v(" "),o("li",[e._v("Scaffold a blockchain.")]),e._v(" "),o("li",[e._v("Use the CLI.")]),e._v(" "),o("li",[e._v("Start the Ignite UI server.")]),e._v(" "),o("li",[e._v("Send your first message.")])]),e._v(" "),o("p",[e._v("You can follow a hands-on exercise for Ignite CLI in the sections that follow this introduction.")])]),e._v(" "),o("p",[e._v("The Cosmos SDK provides the building blocks for a complete Tendermint blockchain, which implements the Inter-Blockchain Communication Protocol (IBC). The "),o("em",[e._v("BaseApp")]),e._v(" of the Cosmos SDK assembles these building blocks and provides a fully-running blockchain. All there is left to do for the specific blockchain application is to create specific modules and integrate them with BaseApp to make the application "),o("em",[e._v("your own")]),e._v(".")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Ignite CLI assists with scaffolding modules and integrating them with BaseApp. Ignite CLI is a command-line tool that writes code files and updates them when instructed to do so. If you come from an "),o("em",[e._v("on Rails")]),e._v(" world, the concept will look familiar to you.\n"),o("br"),o("br"),e._v("\nIgnite CLI also handles some compilation, runs a local blockchain node, and helps you with other tasks.")])]),e._v(" "),o("YoutubePlayer",{attrs:{videoId:"MTUQQ6nOkZo"}}),e._v(" "),o("h2",{attrs:{id:"install"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),o("HighlightBox",{attrs:{type:"reading"}},[o("p",[e._v("Want to dedicate some time to dive deeper into installing Ignite CLI? Learn "),o("a",{attrs:{href:"https://docs.ignite.com/guide/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to install Ignite CLI in the Ignite CLI Developer Guide"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("HighlightBox",{attrs:{type:"best-practice"}},[o("p",[e._v("If you do not want to install Go and Ignite on your computer, look at the "),o("strong",[e._v("section about Docker below")]),e._v(" to facilitate your handling of specific versions and platforms.")])]),e._v(" "),o("p",[e._v("This entire exercise was built using the Ignite CLI version 0.22.1. To install it at the command line:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIGh0dHBzOi8vZ2V0Lmlnbml0ZS5jb20vY2xpQHYwLjIyLjEhIHwgYmFzaAo="}}),e._v(" "),o("p",[e._v("Or if you install it in a Linux VM:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIGh0dHBzOi8vZ2V0Lmlnbml0ZS5jb20vY2xpQHYwLjIyLjEhIHwgc3VkbyBiYXNoCg=="}}),e._v(" "),o("p",[e._v("You can verify the version of Ignite CLI you have once it is installed:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgdmVyc2lvbgo="}}),e._v(" "),o("p",[e._v("This prints its version:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"SWduaXRlIENMSSB2ZXJzaW9uOiAgICAgdjAuMjIuMQouLi4K"}}),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("This entire exercise was built using the Ignite CLI version noted above. Using a newer version could work, but you might run into compatibility issues if you clone any code made with "),o("em",[e._v("this")]),e._v(" version of Ignite CLI and then try to continue the project with "),o("em",[e._v("your")]),e._v(" version of Ignite CLI.\n"),o("br"),o("br"),e._v("\nIf you need to install the latest version of Ignite CLI, use:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIGh0dHBzOi8vZ2V0Lmlnbml0ZS5jb20vY2xpQCEgfCBiYXNoCg=="}}),e._v(" "),o("p",[e._v("When you then run "),o("code",[e._v("ignite version")]),e._v(", it prints its version:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"SWduaXRlIENMSSB2ZXJzaW9uOiAgICAgdjAuMjIuMgo="}})],1),e._v(" "),o("HighlightBox",{attrs:{type:"docs"}},[o("p",[e._v("If you'd like to upgrade an existing project to the latest version of Ignite CLI, you can follow the "),o("a",{attrs:{href:"https://docs.ignite.com/migration/v0.24",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ignite CLI migration documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("You can also just type "),o("code",[e._v("ignite")]),e._v(" to see the offered commands:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"SWduaXRlIENMSSBpcyBhIHRvb2wgZm9yIGNyZWF0aW5nIHNvdmVyZWlnbiBibG9ja2NoYWlucyBidWlsdCB3aXRoIENvc21vcyBTREssIHRoZSB3b3JsZOKAmXMKbW9zdCBwb3B1bGFyIG1vZHVsYXIgYmxvY2tjaGFpbiBmcmFtZXdvcmsuIElnbml0ZSBDTEkgb2ZmZXJzIGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gc2NhZmZvbGQsCnRlc3QsIGJ1aWxkLCBhbmQgbGF1bmNoIHlvdXIgYmxvY2tjaGFpbi4KClRvIGdldCBzdGFydGVkLCBjcmVhdGUgYSBibG9ja2NoYWluOgoKaWduaXRlIHNjYWZmb2xkIGNoYWluIGdpdGh1Yi5jb20vdXNlcm5hbWUvbWFycwoKVXNhZ2U6CiAgaWduaXRlIFtjb21tYW5kXQoKQXZhaWxhYmxlIENvbW1hbmRzOgogIHNjYWZmb2xkICAgIFNjYWZmb2xkIGEgbmV3IGJsb2NrY2hhaW4sIG1vZHVsZSwgbWVzc2FnZSwgcXVlcnksIGFuZCBtb3JlCiAgY2hhaW4gICAgICAgQnVpbGQsIGluaXRpYWxpemUgYW5kIHN0YXJ0IGEgYmxvY2tjaGFpbiBub2RlIG9yIHBlcmZvcm0gb3RoZXIgYWN0aW9ucyBvbiB0aGUgYmxvY2tjaGFpbgogIGdlbmVyYXRlICAgIEdlbmVyYXRlIGNsaWVudHMsIEFQSSBkb2NzIGZyb20gc291cmNlIGNvZGUKICBhY2NvdW50ICAgICBDb21tYW5kcyBmb3IgbWFuYWdpbmcgYWNjb3VudHMKICByZWxheWVyICAgICBDb25uZWN0IGJsb2NrY2hhaW5zIGJ5IHVzaW5nIElCQyBwcm90b2NvbAogIHRvb2xzICAgICAgIFRvb2xzIGZvciBhZHZhbmNlZCB1c2VycwogIGRvY3MgICAgICAgIFNob3cgSWduaXRlIENMSSBkb2NzCiAgdmVyc2lvbiAgICAgUHJpbnQgdGhlIGN1cnJlbnQgYnVpbGQgaW5mb3JtYXRpb24KICBoZWxwICAgICAgICBIZWxwIGFib3V0IGFueSBjb21tYW5kCiAgY29tcGxldGlvbiAgR2VuZXJhdGUgdGhlIGF1dG9jb21wbGV0aW9uIHNjcmlwdCBmb3IgdGhlIHNwZWNpZmllZCBzaGVsbAoKRmxhZ3M6CiAgLWgsIC0taGVscCAgIGhlbHAgZm9yIGlnbml0ZQoKVXNlICZxdW90O2lnbml0ZSBbY29tbWFuZF0gLS1oZWxwJnF1b3Q7IGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGEgY29tbWFuZC4K"}}),e._v(" "),o("h2",{attrs:{id:"prepare-docker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prepare-docker"}},[e._v("#")]),e._v(" Prepare Docker")]),e._v(" "),o("p",[e._v("If you want portability and to avoid version issues, it is advisable to use "),o("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),o("OutboundLink")],1),e._v(". First, you need to create a "),o("code",[e._v("Dockerfile")]),e._v(" that details the same preparation steps. Save this as "),o("code",[e._v("Dockerfile-ubuntu")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"dockerfile",base64:"RlJPTSAtLXBsYXRmb3JtPWxpbnV4IHVidW50dToyMi4wNApBUkcgQlVJTERBUkNICgojIENoYW5nZSB5b3VyIHZlcnNpb25zIGhlcmUKRU5WIEdPX1ZFUlNJT049MS4xOC4zCkVOViBJR05JVEVfVkVSU0lPTj0wLjIyLjEKRU5WIE5PREVfVkVSU0lPTj0xOC54CgpFTlYgTE9DQUw9L3Vzci9sb2NhbApFTlYgR09ST09UPSRMT0NBTC9nbwpFTlYgSE9NRT0vcm9vdApFTlYgR09QQVRIPSRIT01FL2dvCkVOViBQQVRIPSRHT1JPT1QvYmluOiRHT1BBVEgvYmluOiRQQVRICgpSVU4gbWtkaXIgLXAgJEdPUEFUSC9iaW4KCkVOViBQQUNLQUdFUyBjdXJsIGdjYyBqcQpSVU4gYXB0LWdldCB1cGRhdGUKUlVOIGFwdC1nZXQgaW5zdGFsbCAteSAkUEFDS0FHRVMKCiMgSW5zdGFsbCBHbwpSVU4gY3VybCAtTCBodHRwczovL2dvLmRldi9kbC9nbyR7R09fVkVSU0lPTn0ubGludXgtJEJVSUxEQVJDSC50YXIuZ3ogfCB0YXIgLUMgJExPQ0FMIC14emYgLQoKIyBJbnN0YWxsIElnbml0ZQpSVU4gY3VybCAtTCBodHRwczovL2dldC5pZ25pdGUuY29tL2NsaUB2JHtJR05JVEVfVkVSU0lPTn0hIHwgYmFzaAoKIyBJbnN0YWxsIE5vZGUKUlVOIGN1cmwgLWZzU0wgaHR0cHM6Ly9kZWIubm9kZXNvdXJjZS5jb20vc2V0dXBfJHtOT0RFX1ZFUlNJT059IHwgYmFzaCAtClJVTiBhcHQtZ2V0IGluc3RhbGwgLXkgbm9kZWpzCgpFWFBPU0UgMTMxNyAzMDAwIDQ1MDAgNTAwMCAyNjY1NwoKV09SS0RJUiAvY2hlY2tlcnMK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/ignite-start/Dockerfile-ubuntu"}}),e._v(" "),o("p",[e._v("Next you need to create the Docker image:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgYnVpbGQgLWYgRG9ja2VyZmlsZS11YnVudHUgLiAtdCBjaGVja2Vyc19pCg=="}}),e._v(" "),o("p",[e._v("You can confirm the installed version of Ignite:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IGNoZWNrZXJzX2kgaWduaXRlIHZlcnNpb24K"}}),e._v(" "),o("p",[e._v("It should return, among other things:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"SWduaXRlIENMSSB2ZXJzaW9uOiAgICAgdjAuMjIuMQo="}}),e._v(" "),o("p",[e._v("That is the bare minimum required to be able to run the commands that come on this page. If at a later stage you want to create a persistent container named "),o("code",[e._v("checkers")]),e._v(", you can do:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgY3JlYXRlIC0tbmFtZSBjaGVja2VycyAtaSAtdiAkKHB3ZCk6L2NoZWNrZXJzIC13IC9jaGVja2VycyAtcCAxMzE3OjEzMTcgLXAgMzAwMDozMDAwIC1wIDQ1MDA6NDUwMCAtcCA1MDAwOjUwMDAgLXAgMjY2NTc6MjY2NTcgY2hlY2tlcnNfaQokIGRvY2tlciBzdGFydCBjaGVja2Vycwo="}}),e._v(" "),o("h2",{attrs:{id:"your-chain"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#your-chain"}},[e._v("#")]),e._v(" Your chain")]),e._v(" "),o("p",[e._v("Start by scaffolding a basic chain called "),o("code",[e._v("checkers")]),e._v(" that you will place under the GitHub path "),o("code",[e._v("alice")]),e._v(":")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgY2hhaW4gZ2l0aHViLmNvbS9hbGljZS9jaGVja2Vycwo="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Throwaway Docker container"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgaWduaXRlIHNjYWZmb2xkIGNoYWluIGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMK"}}),e._v(" "),o("p",[e._v("This only works if you have prepared the "),o("code",[e._v("checkers_i")]),e._v(" Docker image.")])],1)],1),e._v(" "),o("p",[o("code",[e._v("github.com/alice/checkers")]),e._v(" is the name of the Golang module by which this project will be known. If you own the "),o("code",[e._v("github.com/alice")]),e._v(" path, you can even eventually host it there and have other people use your project as a module.")]),e._v(" "),o("ExpansionPanel",{attrs:{title:"Troubleshooting"}},[o("p",[e._v("For the sake of good support, the versions of all software used are communicated as encountered throughout this course. It is natural that after the writing of the course material some version changes will appear, and it may occur that something breaks. Instead of using different versions of the software from the ones in the course, please look at the following list, which might fix problems you are running into. Otherwise, use Docker as explained on this page.\n")]),o("p"),e._v("\nIf all else fails, please post the issue you face on Discord."),o("p"),e._v(" "),o("PanelListItem",{attrs:{number:"1"}},[o("p",[o("strong",[e._v("Apple M1")])]),e._v(" "),o("p",[e._v("If you work with a machine using M1 architecture, the Docker image should allow you to run with your specific CPU architecture. However, if you encounter too many problems you can try the following:")]),e._v(" "),o("ol",[o("li",[e._v("Follow this course in a "),o("a",{attrs:{href:"https://www.courier.com/blog/tips-and-tricks-to-setup-your-apple-m1-for-development/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rosetta"),o("OutboundLink")],1),e._v(" terminal.")]),e._v(" "),o("li",[e._v("Install "),o("a",{attrs:{href:"https://brew.sh/index",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Install Golang with "),o("code",[e._v("brew install go")]),e._v(".")])])]),e._v(" "),o("PanelListItem",{attrs:{number:"2",last:!0}},[o("p",[o("strong",[e._v("Building Errors during "),o("code",[e._v("scaffold")])])]),e._v(" "),o("p",[e._v("If you work with Go 1.18, you may need to install the following:")]),e._v(" "),o("ul",[o("li",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyBpbnN0YWxsIGdpdGh1Yi5jb20vZ3JwYy1lY29zeXN0ZW0vZ3JwYy1nYXRld2F5L3Byb3RvYy1nZW4tZ3JwYy1nYXRld2F5QGxhdGVzdAo="}})],1),e._v(" "),o("li",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyBpbnN0YWxsIGdpdGh1Yi5jb20vZ3JwYy1lY29zeXN0ZW0vZ3JwYy1nYXRld2F5L3Byb3RvYy1nZW4tc3dhZ2dlckBsYXRlc3QK"}})],1),e._v(" "),o("li",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyBpbnN0YWxsIGdpdGh1Yi5jb20vZ3JwYy1lY29zeXN0ZW0vZ3JwYy1nYXRld2F5L3YyL3Byb3RvYy1nZW4tb3BlbmFwaXYyQGxhdGVzdAo="}})],1),e._v(" "),o("li",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL3JlZ2VuLW5ldHdvcmsvY29zbW9zLXByb3RvCiQgY2QgY29zbW9zLXByb3RvL3Byb3RvYy1nZW4tZ29jb3Ntb3MKJCBnbyBpbnN0YWxsCg=="}})],1),e._v(" "),o("li",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyBnZXQgZ2l0aHViLmNvbS9nb2xhbmdjaS9nb2xhbmdjaS1saW50L2NtZC9nb2xhbmdjaS1saW50Cg=="}})],1),e._v(" "),o("li",[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyBnZXQgZ29sYW5nLm9yZy94L2NyeXB0by9zc2gvdGVybWluYWxAdjAuMC4wLTIwMjIwNDExMjIwMjI2LTdiODJhNGU5NWRmNAo="}})],1)])])],1),e._v(" "),o("p",[e._v("The scaffolding takes some time as it generates the source code for a fully functional, ready-to-use blockchain. Ignite CLI creates a folder named "),o("code",[e._v("checkers")]),e._v(" and scaffolds the chain inside it.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("checkers")]),e._v(" folder contains several generated files and directories that make up the structure of a Cosmos SDK blockchain. It contains the following folders:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/ignite-start/app",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("app")]),o("OutboundLink")],1),e._v(": a folder for the application.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/ignite-start/cmd",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("cmd")]),o("OutboundLink")],1),e._v(": a folder for the command-line interface commands.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/ignite-start/proto",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("proto")]),o("OutboundLink")],1),e._v(": a folder for the Protobuf objects definitions.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/ignite-start/vue",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("vue")]),o("OutboundLink")],1),e._v(": a folder for the auto-generated UI.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/ignite-start/x",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("x")]),o("OutboundLink")],1),e._v(": a folder for all your modules, in particular "),o("code",[e._v("checkers")]),e._v(".")])]),e._v(" "),o("HighlightBox",{attrs:{type:"docs"}},[o("p",[e._v("If Vue.js is something new to you, check out the "),o("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js website"),o("OutboundLink")],1),e._v(" for more on this JavaScript framework.")])]),e._v(" "),o("p",[e._v("If you look at the code that Ignite CLI generates, for instance in "),o("code",[e._v("./x/checkers/module.go")]),e._v(", you will often see comments like the following:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gdGhpcyBsaW5lIGlzIHVzZWQgYnkgc3RhcnBvcnQgc2NhZmZvbGRpbmcgIyAxCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/ignite-start/x/checkers/module.go#L6"}}),e._v(" "),o("HighlightBox",{attrs:{type:"warn"}},[o("p",[e._v("Do not remove or replace any lines like these in your code as they provide markers for Ignite CLI on where to add further code when instructed to do so. For the same reason, do not rename or move any file that contains such a line.")])]),e._v(" "),o("p",[e._v("Go to the "),o("code",[e._v("checkers")]),e._v(" folder and run:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjZCBjaGVja2VycwokIGlnbml0ZSBjaGFpbiBzZXJ2ZQo="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Throwaway Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjZCBjaGVja2VycwokIGRvY2tlciBydW4gLS1ybSAtaXQgLXYgJChwd2QpOi9jaGVja2VycyAtdyAvY2hlY2tlcnMgLXAgMTMxNzoxMzE3IC1wIDMwMDA6MzAwMCAtcCA0NTAwOjQ1MDAgLXAgNTAwMDo1MDAwIC1wIDI2NjU3OjI2NjU3IC0tbmFtZSBjaGVja2VycyBjaGVja2Vyc19pIGlnbml0ZSBjaGFpbiBzZXJ2ZQo="}}),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("Notice how you still name the container "),o("code",[e._v("checkers")]),e._v(" so that you can access it for further commands.")])])],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Persistent Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjZCBjaGVja2VycwokIGRvY2tlciBjcmVhdGUgLS1uYW1lIGNoZWNrZXJzIC1pIC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIC1wIDEzMTc6MTMxNyAtcCAzMDAwOjMwMDAgLXAgNDUwMDo0NTAwIC1wIDUwMDA6NTAwMCAtcCAyNjY1NzoyNjY1NyBjaGVja2Vyc19pCiQgZG9ja2VyIHN0YXJ0IGNoZWNrZXJzCiQgZG9ja2VyIGV4ZWMgLWl0IGNoZWNrZXJzIGlnbml0ZSBjaGFpbiBzZXJ2ZQo="}})],1)],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ignite chain serve")]),e._v(" command downloads (a lot of) dependencies and compiles the source code into a binary called "),o("code",[e._v("checkersd")]),e._v(". This command:")]),e._v(" "),o("ul",[o("li",[e._v("Installs all dependencies.")]),e._v(" "),o("li",[e._v("Builds Protobuf files.")]),e._v(" "),o("li",[e._v("Compiles the application.")]),e._v(" "),o("li",[e._v("Initializes the node with a single validator.")]),e._v(" "),o("li",[e._v("Adds accounts.")])]),e._v(" "),o("ExpansionPanel",{attrs:{title:"Go dependencies and Docker"}},[o("p",[e._v("If you use Docker with throwaway containers ("),o("code",[e._v("run --rm")]),e._v(") you will notice that it downloads the Go dependencies every time. To increase your productivity, you can have the dependencies be downloaded in the Docker image itself:")]),e._v(" "),o("ol",[o("li",[e._v("Move your "),o("code",[e._v("Dockerfile-ubuntu")]),e._v(" file into your checkers project, next to the "),o("code",[e._v("go.mod")]),e._v(" file.")]),e._v(" "),o("li",[e._v("Add the following lines to "),o("code",[e._v("Dockerfile-ubuntu")]),e._v(":")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"ockerfile",base64:"Q09QWSBnby5tb2QgL2NoZWNrZXJzL2dvLm1vZApSVU4gZ28gbW9kIGRvd25sb2FkClJVTiBybSAvY2hlY2tlcnMvZ28ubW9kCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/ignite-start/Dockerfile-ubuntu#L35-L37"}}),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Recreate the image:")])]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgYnVpbGQgLWYgRG9ja2VyZmlsZS11YnVudHUgLiAtdCBjaGVja2Vyc19pCg=="}})],1),e._v(" "),o("p",[e._v("After the "),o("code",[e._v("chain serve")]),e._v(" command completes, you have a local testnet with a running node. What about the added accounts? Take a look:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"yaml",base64:"YWNjb3VudHM6CiAgLSBuYW1lOiBhbGljZQogICAgY29pbnM6IFsmcXVvdDsyMDAwMHRva2VuJnF1b3Q7LCAmcXVvdDsyMDAwMDAwMDBzdGFrZSZxdW90O10KICAtIG5hbWU6IGJvYgogICAgY29pbnM6IFsmcXVvdDsxMDAwMHRva2VuJnF1b3Q7LCAmcXVvdDsxMDAwMDAwMDBzdGFrZSZxdW90O10KdmFsaWRhdG9yOgogIG5hbWU6IGFsaWNlCiAgc3Rha2VkOiAmcXVvdDsxMDAwMDAwMDBzdGFrZSZxdW90OwpjbGllbnQ6CiAgb3BlbmFwaToKICAgIHBhdGg6ICZxdW90O2RvY3Mvc3RhdGljL29wZW5hcGkueW1sJnF1b3Q7CiAgdnVleDoKICAgIHBhdGg6ICZxdW90O3Z1ZS9zcmMvc3RvcmUmcXVvdDsKZmF1Y2V0OgogIG5hbWU6IGJvYgogIGNvaW5zOiBbJnF1b3Q7NXRva2VuJnF1b3Q7LCAmcXVvdDsxMDAwMDBzdGFrZSZxdW90O10K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/ignite-start/config.yml"}}),e._v(" "),o("p",[e._v("In this file you can set the accounts, the accounts' starting balances, and the validator. You can also let Ignite CLI generate a client and a faucet. The faucet gives away five "),o("code",[e._v("token")]),e._v(" and 100,000 "),o("code",[e._v("stake")]),e._v(" tokens belonging to Bob each time it is called.")]),e._v(" "),o("p",[e._v("You can observe the endpoints of the blockchain in the output of the "),o("code",[e._v("ignite chain serve")]),e._v(" command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"8J+MjSBUZW5kZXJtaW50IG5vZGU6IGh0dHA6Ly8wLjAuMC4wOjI2NjU3CvCfjI0gQmxvY2tjaGFpbiBBUEk6IGh0dHA6Ly8wLjAuMC4wOjEzMTcK8J+MjSBUb2tlbiBmYXVjZXQ6IGh0dHA6Ly8wLjAuMC4wOjQ1MDAK"}}),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Ignite CLI can detect any change to the source code. When it does, it immediately rebuilds the binaries before restarting the blockchain and keeping the state.")])]),e._v(" "),o("h2",{attrs:{id:"interact-via-the-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),o("p",[e._v("You can already interact with your running chain. With the chain running in its shell, open another shell and try:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2Qgc3RhdHVzCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHN0YXR1cwo="}})],1)],1),e._v(" "),o("p",[e._v("This prints:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"eyZxdW90O05vZGVJbmZvJnF1b3Q7OnsmcXVvdDtwcm90b2NvbF92ZXJzaW9uJnF1b3Q7OnsmcXVvdDtwMnAmcXVvdDs6JnF1b3Q7OCZxdW90OywmcXVvdDtibG9jayZxdW90OzomcXVvdDsxMSZxdW90OywmcXVvdDthcHAmcXVvdDs6JnF1b3Q7MCZxdW90O30sJnF1b3Q7aWQmcXVvdDs6JnF1b3Q7OGRmMTI1M2I0ZGViNTlmNjNjYzkxMmRjZTA5NmFiMDEwYzk1MWU5ZCZxdW90OywmcXVvdDtsaXN0ZW5fYWRkciZxdW90OzomcXVvdDt0Y3A6Ly8wLjAuMC4wOjI2NjU2JnF1b3Q7LCZxdW90O25ldHdvcmsmcXVvdDs6JnF1b3Q7Y2hlY2tlcnMmcXVvdDssJnF1b3Q7dmVyc2lvbiZxdW90OzomcXVvdDswLjM0LjE5JnF1b3Q7LCZxdW90O2NoYW5uZWxzJnF1b3Q7OiZxdW90OzQwMjAyMTIyMjMzMDM4NjA2MTAwJnF1b3Q7LCZxdW90O21vbmlrZXImcXVvdDs6JnF1b3Q7bXlub2RlJnF1b3Q7LCZxdW90O290aGVyJnF1b3Q7OnsmcXVvdDt0eF9pbmRleCZxdW90OzomcXVvdDtvbiZxdW90OywmcXVvdDtycGNfYWRkcmVzcyZxdW90OzomcXVvdDt0Y3A6Ly8wLjAuMC4wOjI2NjU3JnF1b3Q7fX0sJnF1b3Q7U3luY0luZm8mcXVvdDs6eyZxdW90O2xhdGVzdF9ibG9ja19oYXNoJnF1b3Q7OiZxdW90OzZGMTY3QzRFMkM5OTM4NTg1NzY2M0I5NTMxMDE2REJDODVEQzBBRUMxQjU4QkY3NTlCNzI5RUVBQzg0M0I5MkEmcXVvdDssJnF1b3Q7bGF0ZXN0X2FwcF9oYXNoJnF1b3Q7OiZxdW90O0VFNDA4Qzc1ODBFMUU0QTgxRTIwMTkwRDkxMzFGQkQwN0FFMUM1MzZEMzUwN0RGOUM2RTBDQjQ3NkEyRDc2ODAmcXVvdDssJnF1b3Q7bGF0ZXN0X2Jsb2NrX2hlaWdodCZxdW90OzomcXVvdDsxMyZxdW90OywmcXVvdDtsYXRlc3RfYmxvY2tfdGltZSZxdW90OzomcXVvdDsyMDIyLTA2LTI3VDE1OjQzOjE0LjkwNjc4MjU1MlomcXVvdDssJnF1b3Q7ZWFybGllc3RfYmxvY2tfaGFzaCZxdW90OzomcXVvdDs0ODI1MENGMjU3RTExN0YyOEZFMjA3QTcxRERDQTY3NDU5RkVCRTJFRjEzNjdEN0IwRUFFNDM3NTRENUE1M0ExJnF1b3Q7LCZxdW90O2VhcmxpZXN0X2FwcF9oYXNoJnF1b3Q7OiZxdW90O0UzQjBDNDQyOThGQzFDMTQ5QUZCRjRDODk5NkZCOTI0MjdBRTQxRTQ2NDlCOTM0Q0E0OTU5OTFCNzg1MkI4NTUmcXVvdDssJnF1b3Q7ZWFybGllc3RfYmxvY2tfaGVpZ2h0JnF1b3Q7OiZxdW90OzEmcXVvdDssJnF1b3Q7ZWFybGllc3RfYmxvY2tfdGltZSZxdW90OzomcXVvdDsyMDIyLTA2LTI3VDE1OjQyOjU3LjY5Nzc0NTMxNFomcXVvdDssJnF1b3Q7Y2F0Y2hpbmdfdXAmcXVvdDs6ZmFsc2V9LCZxdW90O1ZhbGlkYXRvckluZm8mcXVvdDs6eyZxdW90O0FkZHJlc3MmcXVvdDs6JnF1b3Q7OThFOUUxNTdDODdBNDQ1MDNCQjhEMDFDQUZDOTdEREI1RDBDNzhERSZxdW90OywmcXVvdDtQdWJLZXkmcXVvdDs6eyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7dGVuZGVybWludC9QdWJLZXlFZDI1NTE5JnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O1Uzd2xYOCtseDZZUXEzZzJRYllubkFkVXVNUTdBbE1YSDIxVnhycTJPSGc9JnF1b3Q7fSwmcXVvdDtWb3RpbmdQb3dlciZxdW90OzomcXVvdDsxMDAmcXVvdDt9fQo="}}),e._v(" "),o("p",[e._v("In there you can see a hint of liveness: "),o("code",[e._v('"latest_block_height":"13"')]),e._v(". You can use this one-liner to better see the information:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2Qgc3RhdHVzIDImZ3Q7JmFtcDsxIHwganEK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtjaGVja2Vyc2Qgc3RhdHVzIDImZ3Q7JmFtcDsxIHwganEmcXVvdDsK"}})],1)],1),e._v(" "),o("p",[e._v("You can learn a lot by going through the possibilities with:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgLS1oZWxwCiQgY2hlY2tlcnNkIHN0YXR1cyAtLWhlbHAKJCBjaGVja2Vyc2QgcXVlcnkgLS1oZWxwCg=="}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIC0taGVscAokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBjaGVja2Vyc2Qgc3RhdHVzIC0taGVscAokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBjaGVja2Vyc2QgcXVlcnkgLS1oZWxwCg=="}})],1)],1),e._v(" "),o("p",[e._v("And so on.")]),e._v(" "),o("h2",{attrs:{id:"your-gui"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#your-gui"}},[e._v("#")]),e._v(" Your GUI")]),e._v(" "),o("p",[e._v("Ignite CLI also scaffolded a frontend. Boot it up by using the commands provided in the "),o("code",[e._v("README.md")]),e._v(" file of the "),o("code",[e._v("vue")]),e._v(" folder. Let the chain run in its own process and open a new terminal window in your "),o("code",[e._v("checkers")]),e._v(" folder. In this terminal, execute:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjZCB2dWUKJCBucG0gaW5zdGFsbAokIG5wbSBydW4gZGV2Cg=="}}),e._v(" "),o("p",[e._v("If you want to serve on all network addresses, you need to run "),o("code",[e._v("npm run dev -- --host")]),e._v(".")])],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtjZCB2dWUgJmFtcDsmYW1wOyBucG0gaW5zdGFsbCZxdW90OwokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBiYXNoIC1jICZxdW90O2NkIHZ1ZSAmYW1wOyZhbXA7IG5wbSBydW4gZGV2IC0tIC0taG9zdCZxdW90Owo="}})],1)],1),e._v(" "),o("hr"),e._v(" "),o("p",[e._v("Note the "),o("code",[e._v("--host")]),e._v(" flag, which is forwarded to the underlying "),o("code",[e._v("vite")]),e._v(" command thanks to the "),o("code",[e._v("--")]),e._v(" separator. This is necessary if you run the frontend within Docker.")]),e._v(" "),o("p",[e._v("Navigate to "),o("a",{attrs:{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer"}},[e._v("localhost:3000"),o("OutboundLink")],1),e._v(", or to whichever address was listed when running "),o("code",[e._v("dev")]),e._v(". The first load may take a few seconds. On the client-side, from the top right you can connect to the page via "),o("a",{attrs:{href:"chrome://extensions/?id=dmkamcknogkgcdfhhbddcghachkejeap"}},[e._v("Keplr")]),e._v(" if you are on the Chrome browser. You should see something like this:")]),e._v(" "),o("p",[o("tm-image",{attrs:{src:"/hands-on-exercise/1-ignite-cli/images/ignite-vue-keplr-no-assets.png"}})],1),e._v(" "),o("p",[e._v("Your account is connected but has no balance. This is a good opportunity to use the faucet:")]),e._v(" "),o("ol",[o("li",[e._v("Head to "),o("a",{attrs:{href:"http://localhost:4500",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:4500"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Expand the "),o("kbd",[e._v("POST / Send tokens to receiver account")]),e._v(" box.")]),e._v(" "),o("li",[e._v("Click the "),o("kbd",[e._v("Try it out")]),e._v(" button.")]),e._v(" "),o("li",[e._v("Paste your address in the JSON at "),o("code",[e._v('"address"')]),e._v(".")]),e._v(" "),o("li",[e._v("Click the big blue "),o("kbd",[e._v("Execute")]),e._v(" button.")])]),e._v(" "),o("p",[o("tm-image",{attrs:{src:"/hands-on-exercise/1-ignite-cli/images/faucet-request-1.png"}})],1),e._v(" "),o("p",[e._v("When you return to the main page, you should see your new assets:")]),e._v(" "),o("p",[o("tm-image",{attrs:{src:"/hands-on-exercise/1-ignite-cli/images/ignite-vue-keplr-with-tokens.png"}})],1),e._v(" "),o("p",[e._v("From here, you can send tokens around. You can also ask for "),o("code",[e._v('"10stake"')]),e._v(" from the faucet, if you recall the name of the tokens from "),o("code",[e._v("config.yml")]),e._v(".")]),e._v(" "),o("p",[e._v("There is not much else to do. After all, this is the Cosmos BaseApp. Ignite will continue scaffolding this GUI as your checkers project advances.")]),e._v(" "),o("HighlightBox",{attrs:{type:"note"}},[o("p",[e._v("Keplr is also able to import Alice and Bob (i.e. the accounts that Ignite created). Use Keplr's "),o("kbd",[e._v("+Add account")]),e._v(" feature. This is a convenient way to bypass having to use the faucet. You will need to use Alice's mnemonic, which you can find in the output of the "),o("code",[e._v("ignite chain serve")]),e._v(" command.")]),e._v(" "),o("p",[e._v("If you do not see the mnemonic, that is because the mnemonic was shown to you the first time you ran the command and you did not copy it. If so, reset with "),o("code",[e._v("ignite chain serve --reset-once")]),e._v(".")]),e._v(" "),o("p",[e._v("Now you should see the balance of Alice's account and can act on her behalf.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"best-practice"}},[o("p",[e._v("Make a Git commit before you create a new "),o("code",[e._v("message")]),e._v(". In fact, it is generally recommended to make a Git commit before running "),o("strong",[e._v("any")]),e._v(" "),o("code",[e._v("ignite scaffold")]),e._v(" command. A Git commit protects the work you have done so far and makes it easier to see what the "),o("code",[e._v("scaffold")]),e._v(" command added. It also makes it easy to just revert all changes if you are unsatisfied and want to run a different "),o("code",[e._v("scaffold")]),e._v(" command.")])]),e._v(" "),o("h2",{attrs:{id:"your-first-message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#your-first-message"}},[e._v("#")]),e._v(" Your first message")]),e._v(" "),o("p",[e._v("After your Git commit, and having stopped running Ignite, create a simple "),o("code",[e._v("message")]),e._v(" with:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSBjcmVhdGVQb3N0IHRpdGxlIGJvZHkK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgaWduaXRlIHNjYWZmb2xkIG1lc3NhZ2UgY3JlYXRlUG9zdCB0aXRsZSBib2R5Cg=="}})],1)],1),e._v(" "),o("p",[e._v("The "),o("code",[e._v("ignite scaffold message")]),e._v(" command accepts a message name (here "),o("code",[e._v("createPost")]),e._v(") as the first argument, and a list of fields for the message (here "),o("code",[e._v("title")]),e._v(" and "),o("code",[e._v("body")]),e._v("), which are "),o("code",[e._v("string")]),e._v(" fields unless mentioned otherwise.")]),e._v(" "),o("p",[e._v("A message is scaffolded in a module with a name that matches the name of the project by default. It is named "),o("code",[e._v("checkers")]),e._v(" in this case. Alternatively you could have used "),o("code",[e._v("--module checkers")]),e._v(". Learn more about your options with:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"Local",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSAtLWhlbHAK"}})],1),e._v(" "),o("CodeGroupItem",{attrs:{title:"Docker"}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IGNoZWNrZXJzX2kgaWduaXRlIHNjYWZmb2xkIG1lc3NhZ2UgLS1oZWxwCg=="}})],1)],1),e._v(" "),o("p",[e._v("You can see a list of files that were created or modified by the "),o("code",[e._v("scaffold message")]),e._v(" command in the Terminal output:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"bW9kaWZ5IHByb3RvL2NoZWNrZXJzL3R4LnByb3RvCm1vZGlmeSB4L2NoZWNrZXJzL2NsaWVudC9jbGkvdHguZ28KY3JlYXRlIHgvY2hlY2tlcnMvY2xpZW50L2NsaS90eF9jcmVhdGVfcG9zdC5nbwptb2RpZnkgeC9jaGVja2Vycy9oYW5kbGVyLmdvCmNyZWF0ZSB4L2NoZWNrZXJzL2tlZXBlci9tc2dfc2VydmVyX2NyZWF0ZV9wb3N0LmdvCm1vZGlmeSB4L2NoZWNrZXJzL21vZHVsZV9zaW11bGF0aW9uLmdvCmNyZWF0ZSB4L2NoZWNrZXJzL3NpbXVsYXRpb24vY3JlYXRlX3Bvc3QuZ28KbW9kaWZ5IHgvY2hlY2tlcnMvdHlwZXMvY29kZWMuZ28KY3JlYXRlIHgvY2hlY2tlcnMvdHlwZXMvbWVzc2FnZV9jcmVhdGVfcG9zdC5nbwpjcmVhdGUgeC9jaGVja2Vycy90eXBlcy9tZXNzYWdlX2NyZWF0ZV9wb3N0X3Rlc3QuZ28K"}}),e._v(" "),o("p",[e._v("The "),o("code",[e._v("modify")]),e._v(" was made possible thanks to the lines like "),o("code",[e._v("// this line is used by starport scaffolding # 1")]),e._v(" that you did not remove.")]),e._v(" "),o("p",[e._v("So where is everything? You can find the root definition of your new message in:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"proto/checkers/tx.proto",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dDcmVhdGVQb3N0IHsKICBzdHJpbmcgY3JlYXRvciA9IDE7CiAgc3RyaW5nIHRpdGxlID0gMjsKICBzdHJpbmcgYm9keSA9IDM7Cn0K"}})],1)],1),e._v(" "),o("p",[e._v("Ignite CLI also wired a new command into your chain's CLI in:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"x/checkers/client/cli/tx_create_post.go",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBDbWRDcmVhdGVQb3N0KCkgKmNvYnJhLkNvbW1hbmQgewogIGNtZCA6PSAmYW1wO2NvYnJhLkNvbW1hbmR7CiAgICBVc2U6ICAgJnF1b3Q7Y3JlYXRlLXBvc3QgW3RpdGxlXSBbYm9keV0mcXVvdDssCiAgICBTaG9ydDogJnF1b3Q7QnJvYWRjYXN0IG1lc3NhZ2UgY3JlYXRlUG9zdCZxdW90OywKICAgIEFyZ3M6ICBjb2JyYS5FeGFjdEFyZ3MoMiksCiAgICAuLi4KICB9Cn0K"}})],1)],1),e._v(" "),o("p",[e._v("Ignite CLI scaffolded GUI elements relating to your message with a Vue.js frontend framework. You can, for instance, start with this function in:")]),e._v(" "),o("CodeGroup",[o("CodeGroupItem",{attrs:{title:"vue/src/store/generated/alice/checkers/alice.checkers.checkers/index.ts",active:""}},[o("tm-code-block",{staticClass:"codeblock",attrs:{language:"typescript",base64:"YXN5bmMgTXNnQ3JlYXRlUG9zdCh7IHJvb3RHZXR0ZXJzIH0sIHsgdmFsdWUgfSkgewogICAgdHJ5IHsKICAgICAgICBjb25zdCB0eENsaWVudD1hd2FpdCBpbml0VHhDbGllbnQocm9vdEdldHRlcnMpCiAgICAgICAgY29uc3QgbXNnID0gYXdhaXQgdHhDbGllbnQubXNnQ3JlYXRlUG9zdCh2YWx1ZSkKICAgICAgICByZXR1cm4gbXNnCiAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgaWYgKGUgPT0gTWlzc2luZ1dhbGxldEVycm9yKSB7CiAgICAgICAgICAgIHRocm93IG5ldyBTcFZ1ZXhFcnJvcignVHhDbGllbnQ6TXNnQ3JlYXRlUG9zdDpJbml0JywgJ0NvdWxkIG5vdCBpbml0aWFsaXplIHNpZ25pbmcgY2xpZW50LiBXYWxsZXQgaXMgcmVxdWlyZWQuJykKICAgICAgICB9ZWxzZXsKICAgICAgICAgICAgdGhyb3cgbmV3IFNwVnVleEVycm9yKCdUeENsaWVudDpNc2dDcmVhdGVQb3N0OkNyZWF0ZScsICdDb3VsZCBub3QgY3JlYXRlIG1lc3NhZ2U6ICcgKyBlLm1lc3NhZ2UpCgogICAgICAgIH0KICAgIH0KfSwK"}})],1)],1),e._v(" "),o("p",[e._v("When you are done with this exercise you can stop Ignite's "),o("code",[e._v("chain serve.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How to install Ignite CLI, a command-line tool that writes code files and updates them when instructed, handles some compilation, runs a local blockchain node, and assists with other tasks.")]),e._v(" "),o("li",[e._v("How to scaffold a basic blockchain, with the suggested best practice not to replace lines with code markers indicating where to add further code on later instruction, nor to rename or move any file containing such a line.")]),e._v(" "),o("li",[e._v("How to interact via the CLI to demonstrate that your chain is live when running in its shell.")]),e._v(" "),o("li",[e._v("How to boot up the frontend that Ignite CLI has created by using a terminal window and navigating to the localhost on your browser.")]),e._v(" "),o("li",[e._v("How to test the base functionality of your chain by creating a simple message.")])])]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("You can remove the "),o("code",[e._v("MsgCreatePost")]),e._v(" message as it is not part of the guided exercise in the next sections. You can clean it all by running:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnaXQgc3Rhc2ggLXUgJmFtcDsmYW1wOyBnaXQgc3Rhc2ggZHJvcAo="}})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);