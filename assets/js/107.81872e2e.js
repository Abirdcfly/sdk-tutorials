(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{729:function(t,e,a){"use strict";a.r(e);var o=a(1),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cosmwasm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cosmwasm"}},[t._v("#")]),t._v(" CosmWasm")]),t._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[t._v("Discover how multi-chain smart contracts become possible with CosmWasm. The following sections are recommended as a preparation:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/transactions.html"}},[t._v("Transactions")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[t._v("Messages")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/queries.html"}},[t._v("Queries")])],1)])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cosmwasm.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm"),a("OutboundLink")],1),t._v(" offers multi-chain solutions for smart contracts through an actor-model design focused on providing a library.")]),t._v(" "),a("ExpansionPanel",{attrs:{title:"More on the actor model"}},[a("p",[t._v("The actor model is a design pattern for reliable, distributed systems. It is the pattern underlying CosmWasm smart contracts.")]),t._v(" "),a("p",[t._v("Each actor has access to its own internal state and can only message other actors through a so-called dispatcher, which maintains the state and maps addresses to code and storage.")]),t._v(" "),a("p",[t._v("Want to read more on the actor model? Check out "),a("a",{attrs:{href:"https://docs.cosmwasm.com/docs/0.16/architecture/actor",target:"_blank",rel:"noopener noreferrer"}},[t._v("the CosmWasm documentation on the Actor Model for Contract Calls"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[t._v("CosmWasm's design makes the code agnostic to the details of underlying chains. It only requires a Cosmos SDK application to embed the "),a("code",[t._v("Wasm")]),t._v(" module.")]),t._v(" "),a("p",[t._v("CosmWasm is adaptable to different development environments by design and makes it possible to connect chains. It is a solid platform to develop on because:")]),t._v(" "),a("ul",[a("li",[t._v("If you want to change chains, you can easily transfer smart contracts and decentralized applications (dApps).")]),t._v(" "),a("li",[t._v("If your application grows, you can launch your chain for the next version of your smart contract. You do not need to compile and deploy the binaries again.")])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),a("p",[t._v("You need to have installed Go to use the Cosmos SDK. You also need Rust to write smart contracts.")]),t._v(" "),a("p",[t._v("Go to "),a("a",{attrs:{href:"https://rustup.rs",target:"_blank",rel:"noopener noreferrer"}},[t._v("rustup.rs"),a("OutboundLink")],1),t._v(" to install Rust, or update your version with "),a("code",[t._v("rustup update")]),t._v(". Then, have it download and install the "),a("code",[t._v("wasm32")]),t._v(" compilation target:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBydXN0dXAgdGFyZ2V0IGxpc3QgLS1pbnN0YWxsZWQKIyBpZiB3YXNtMzIgaXMgbm90IGxpc3RlZCBhYm92ZSwgcnVuIHRoaXMKJCBydXN0dXAgdGFyZ2V0IGFkZCB3YXNtMzItdW5rbm93bi11bmtub3duCg=="}}),t._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[a("code",[t._v("wasmd")]),t._v(" is the easiest way to get started. It is forked from "),a("a",{attrs:{href:"https://github.com/cosmos/gaia",target:"_blank",rel:"noopener noreferrer"}},[t._v("gaiad (the Gaia Daemon)"),a("OutboundLink")],1),t._v(", which is a binary build with the Cosmos Hub, and includes the "),a("a",{attrs:{href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wasm"),a("OutboundLink")],1),t._v(" module.")])]),t._v(" "),a("p",[t._v("Create a folder and clone the "),a("a",{attrs:{href:"https://github.com/CosmWasm/wasmd",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("wasmd")]),a("OutboundLink")],1),t._v(" repository into it:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL0Nvc21XYXNtL3dhc21kLmdpdAokIGNkIHdhc21kCiQgZ2l0IGNoZWNrb3V0IHYwLjE4LjAKJCBtYWtlIGluc3RhbGwK"}}),t._v(" "),a("p",[t._v("Verify your installation:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCB2ZXJzaW9uCjAuMTguMAo="}}),t._v(" "),a("p",[t._v("If you cannot call "),a("code",[t._v("wasmd")]),t._v(", make sure your "),a("code",[t._v("$GOPATH")]),t._v(" and "),a("code",[t._v("$PATH")]),t._v(" are set correctly.")]),t._v(" "),a("h2",{attrs:{id:"connect-to-a-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-a-testnet"}},[t._v("#")]),t._v(" Connect to a testnet")]),t._v(" "),a("p",[t._v("First test the "),a("code",[t._v("wasmd")]),t._v(" client with the "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/tree/master/pebblenet-1",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pebblenet"),a("OutboundLink")],1),t._v(" testnet. "),a("code",[t._v("wasmd")]),t._v(" is configured via environment variables. Export the most recent environment from "),a("a",{attrs:{href:"https://github.com/CosmWasm/testnets/blob/master/pebblenet-1/defaults.env",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Db3NtV2FzbS90ZXN0bmV0cy9tYXN0ZXIvcGViYmxlbmV0LTEvZGVmYXVsdHMuZW52IC1vIHBlYmJsZW5ldC0xLWRlZmF1bHRzLmVudgokIHNvdXJjZSBwZWJibGVuZXQtMS1kZWZhdWx0cy5lbnYK"}}),t._v(" "),a("p",[t._v("Confirm you got it right:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBlY2hvICRDSEFJTl9JRApwZWJibGVuZXQtMQo="}}),t._v(" "),a("p",[t._v("And if you happen to open another terminal window, don't forget to repeat this "),a("code",[t._v("source")]),t._v(" command as this is local to the session.")]),t._v(" "),a("h2",{attrs:{id:"your-accounts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#your-accounts"}},[t._v("#")]),t._v(" Your accounts")]),t._v(" "),a("p",[t._v("Now add some keys:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCBrZXlzIGFkZCB3YWxsZXQKJCB3YXNtZCBrZXlzIGFkZCB3YWxsZXQyCg=="}}),t._v(" "),a("p",[t._v("Let's see what was created:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCBrZXlzIHNob3cgd2FsbGV0IC0tYWRkcmVzcwp3YXNtMWpqN2d6YXp4dmd5NTZyajhrZXJzdWM0NGVodmVwMHVleTg1amRuCg=="}}),t._v(" "),a("p",[t._v("That's your address, query your token balance:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"d2FzbWQgcXVlcnkgYmFuayBiYWxhbmNlcyAkKHdhc21kIGtleXMgc2hvdyB3YWxsZXQgLS1hZGRyZXNzKSAtLW5vZGUgJFJQQwpwYWdpbmF0aW9uOiB7fQo="}}),t._v(" "),a("p",[t._v("None. Time to ask the "),a("a",{attrs:{href:"https://faucet.pebblenet.cosmwasm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("faucet"),a("OutboundLink")],1),t._v(" to remedy that sorry state. To facilitate command-line actions, install "),a("a",{attrs:{href:"https://stedolan.github.io/jq/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jq"),a("OutboundLink")],1),t._v(", which is a lightweight and flexible command-line JSON processor. Then prepare the request for your "),a("code",[t._v("wallet")]),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBKU09OPSQoanEgLS1udWxsLWlucHV0IC0tYXJnIGFkZHIgJCh3YXNtZCBrZXlzIHNob3cgd2FsbGV0IC0tYWRkcmVzcykgJ3smcXVvdDtkZW5vbSZxdW90OzomcXVvdDt1cGViYmxlJnF1b3Q7LCZxdW90O2FkZHJlc3MmcXVvdDs6JGFkZHJ9JykKJCBlY2hvICZxdW90OyRKU09OJnF1b3Q7CnsKICAmcXVvdDtkZW5vbSZxdW90OzogJnF1b3Q7dXBlYmJsZSZxdW90OywKICAmcXVvdDthZGRyZXNzJnF1b3Q7OiAmcXVvdDt3YXNtMWpqN2d6YXp4dmd5NTZyajhrZXJzdWM0NGVodmVwMHVleTg1amRuJnF1b3Q7Cn0K"}}),t._v(" "),a("p",[a("code",[t._v("upebble")]),t._v(" is the denomination of the test net token. With the content of the request ready, you can call the faucet:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIC1YIFBPU1QgLS1oZWFkZXIgJnF1b3Q7Q29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uJnF1b3Q7IC0tZGF0YSAmcXVvdDskSlNPTiZxdW90OyBodHRwczovL2ZhdWNldC5wZWJibGVuZXQuY29zbXdhc20uY29tL2NyZWRpdApvawo="}}),t._v(" "),a("p",[t._v("Query your balance again:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCBxdWVyeSBiYW5rIGJhbGFuY2VzICQod2FzbWQga2V5cyBzaG93IHdhbGxldCAtLWFkZHJlc3MpIC0tbm9kZSAkUlBDCmJhbGFuY2VzOgotIGFtb3VudDogJnF1b3Q7MTAwMDAwJnF1b3Q7CiAgZGVub206IHVwZWJibGUKcGFnaW5hdGlvbjoge30K"}}),t._v(" "),a("p",[t._v("Repeat the same for "),a("code",[t._v("wallet2")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"compile-a-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#compile-a-smart-contract"}},[t._v("#")]),t._v(" Compile a smart contract")]),t._v(" "),a("p",[t._v("Now that you have enough tokens to deploy a smart contract on Pebblenet, clone the contract samples away from your "),a("code",[t._v("wasmd")]),t._v(" folder:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL0ludGVyV2FzbS9jdy1jb250cmFjdHMKJCBjZCBjdy1jb250cmFjdHMvY29udHJhY3RzL25hbWVzZXJ2aWNlCiQgY2FyZ28gd2FzbQouLi4KQ29tcGlsaW5nIGN3LW5hbWVzZXJ2aWNlIHYwLjExLjAgKC9Vc2Vycy9tZS9jdy1jb250cmFjdHMvY29udHJhY3RzL25hbWVzZXJ2aWNlKQogRmluaXNoZWQgcmVsZWFzZSBbb3B0aW1pemVkXSB0YXJnZXQocykgaW4gMW0gMjBzCg=="}}),t._v(" "),a("p",[t._v("In this last command, "),a("code",[t._v("wasm")]),t._v(" is "),a("a",{attrs:{href:"https://github.com/InterWasm/cw-contracts/blob/ac4c2b9/contracts/nameservice/.cargo/config#L2",target:"_blank",rel:"noopener noreferrer"}},[t._v("an alias"),a("OutboundLink")],1),t._v(" for "),a("code",[t._v("wasm build --release --target wasm32-unknown-unknown")]),t._v(".")]),t._v(" "),a("p",[t._v("You now have a compiled smart contract on file. You want to maintain your smart contract binary as small as possible and Rust compiled with default settings. Check the size of your build with:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBscyAtbGggdGFyZ2V0L3dhc20zMi11bmtub3duLXVua25vd24vcmVsZWFzZS9jd19uYW1lc2VydmljZS53YXNtCi1yd3hyLXhyLXggMiBtZSBzdGFmZiAxLjdNIHRhcmdldC93YXNtMzItdW5rbm93bi11bmtub3duL3JlbGVhc2UvY3dfbmFtZXNlcnZpY2Uud2FzbQo="}}),t._v(" "),a("p",[t._v("You can optimize the code with a "),a("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker"),a("OutboundLink")],1),t._v(" container based on an "),a("a",{attrs:{href:"https://hub.docker.com/r/cosmwasm/rust-optimizer/tags",target:"_blank",rel:"noopener noreferrer"}},[t._v("image provided by CosmWasm"),a("OutboundLink")],1),t._v(" for production purposes:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLXYgJnF1b3Q7JChwd2QpJnF1b3Q7Oi9jb2RlIFwKICAtLW1vdW50IHR5cGU9dm9sdW1lLHNvdXJjZT0mcXVvdDskKGJhc2VuYW1lICZxdW90OyQocHdkKSZxdW90OylfY2FjaGUmcXVvdDssdGFyZ2V0PS9jb2RlL3RhcmdldCBcCiAgLS1tb3VudCB0eXBlPXZvbHVtZSxzb3VyY2U9cmVnaXN0cnlfY2FjaGUsdGFyZ2V0PS91c3IvbG9jYWwvY2FyZ28vcmVnaXN0cnkgXAogIGNvc213YXNtL3J1c3Qtb3B0aW1pemVyOjAuMTIuMwo="}}),t._v(" "),a("p",[t._v("Compare the result:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBscyAtYWxoIGFydGlmYWN0cy9jd19uYW1lc2VydmljZS53YXNtCi1ydy1yLS1yLS0gIDEgbWUgc3RhZmYgMTM5SyBhcnRpZmFjdHMvY3dfbmFtZXNlcnZpY2Uud2FzbQo="}}),t._v(" "),a("h2",{attrs:{id:"upload-a-smart-contract-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-a-smart-contract-binary"}},[t._v("#")]),t._v(" Upload a smart contract binary")]),t._v(" "),a("p",[t._v("Time to store the smart contract binaries on the blockchain:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBSRVM9JCh3YXNtZCB0eCB3YXNtIHN0b3JlIGFydGlmYWN0cy9jd19uYW1lc2VydmljZS53YXNtIC0tZnJvbSB3YWxsZXQgLS1ub2RlICRSUEMgLS1jaGFpbi1pZCBwZWJibGVuZXQtMSAtLWdhcy1wcmljZXMgMC4wMDF1cGViYmxlIC0tZ2FzIGF1dG8gLS1nYXMtYWRqdXN0bWVudCAxLjMpCiQgQ09ERV9JRD0kKGVjaG8gJFJFUyB8IGpxIC1yICcubG9nc1swXS5ldmVudHNbLTFdLmF0dHJpYnV0ZXNbMF0udmFsdWUnKQo="}}),t._v(" "),a("p",[t._v("The response returns a "),a("code",[t._v("code_id")]),t._v(" value, which uniquely identifies your newly uploaded binary in the blockchain. Keep it at hand in order to instantiate a name service with this binary in the next steps.")]),t._v(" "),a("h2",{attrs:{id:"instantiate-your-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instantiate-your-smart-contract"}},[t._v("#")]),t._v(" Instantiate your smart contract")]),t._v(" "),a("p",[t._v("You only uploaded some code but do not yet have any smart contract instance. You can now instantiate a new smart contract that uses this code. Look at the aptly-named "),a("code",[t._v("instantiate")]),t._v(" function in the name server contract:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1tjZmdfYXR0cihub3QoZmVhdHVyZSA9ICZxdW90O2xpYnJhcnkmcXVvdDspLCBlbnRyeV9wb2ludCldCnB1YiBmbiBpbnN0YW50aWF0ZSgKICAgIGRlcHM6IERlcHNNdXQsCiAgICBfZW52OiBFbnYsCiAgICBfaW5mbzogTWVzc2FnZUluZm8sCiAgICBtc2c6IEluc3RhbnRpYXRlTXNnLAopIC0mZ3Q7IFJlc3VsdCZsdDtSZXNwb25zZSwgU3RkRXJyb3ImZ3Q7IHsKICAgIGxldCBjb25maWdfc3RhdGUgPSBDb25maWcgewogICAgICAgIHB1cmNoYXNlX3ByaWNlOiBtc2cucHVyY2hhc2VfcHJpY2UsCiAgICAgICAgdHJhbnNmZXJfcHJpY2U6IG1zZy50cmFuc2Zlcl9wcmljZSwKICAgIH07CgogICAgY29uZmlnKGRlcHMuc3RvcmFnZSkuc2F2ZSgmYW1wO2NvbmZpZ19zdGF0ZSk/OwoKICAgIE9rKFJlc3BvbnNlOjpkZWZhdWx0KCkpCn0K",url:"https://github.com/InterWasm/cw-contracts/blob/2f545b7b8b8511bc0f92f2f3f838c236ba0d850c/contracts/nameservice/src/contract.rs#L14-L28"}}),t._v(" "),a("p",[t._v("Among the parameters the function expects are "),a("a",{attrs:{href:"https://github.com/InterWasm/cw-contracts/blob/2f545b7/contracts/nameservice/src/msg.rs#L6-L9",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("msg.purchase_price")]),t._v(" and "),a("code",[t._v("msg.transfer_price")]),a("OutboundLink")],1),t._v(". Both have the type "),a("a",{attrs:{href:"https://docs.rs/cosmwasm-std/0.9.2/cosmwasm_std/struct.Coin.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("cosmwasm_std::Coin"),a("OutboundLink")],1),t._v(", which, you will note, looks very similar to Cosmos SDK's "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/c41ac20c6cd6cc2b65afa6af587bf39048b2f251/types/coin.pb.go#L31-L34",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Coin")]),a("OutboundLink")],1),t._v(". Of course this is no coincidence. With this knowledge, instantiate a new name service with a "),a("code",[t._v("purchase_price")]),t._v(" and "),a("code",[t._v("transfer_price")]),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCB0eCB3YXNtIGluc3RhbnRpYXRlICRDT0RFX0lEICd7JnF1b3Q7cHVyY2hhc2VfcHJpY2UmcXVvdDs6eyZxdW90O2Ftb3VudCZxdW90OzomcXVvdDsxMDAmcXVvdDssJnF1b3Q7ZGVub20mcXVvdDs6JnF1b3Q7dXBlYmJsZSZxdW90O30sJnF1b3Q7dHJhbnNmZXJfcHJpY2UmcXVvdDs6eyZxdW90O2Ftb3VudCZxdW90OzomcXVvdDs5OTkmcXVvdDssJnF1b3Q7ZGVub20mcXVvdDs6JnF1b3Q7dXBlYmJsZSZxdW90O319JyAtLWZyb20gd2FsbGV0IC0tbm9kZSAkUlBDIC0tY2hhaW4taWQgcGViYmxlbmV0LTEgLS1nYXMtcHJpY2VzIDAuMDAxdXBlYmJsZSAtLWdhcyBhdXRvIC0tZ2FzLWFkanVzdG1lbnQgMS4zICAtLWxhYmVsICZxdW90O0Nvc21XYXNtIHR1dG9yaWFsIG5hbWUgc2VydmljZSZxdW90Owo="}}),t._v(" "),a("p",[t._v("You see again the "),a("code",[t._v("CODE_ID")]),t._v(" that refers to which binary to use for the instantiation. Check that the name service instance was successfully created with:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCBxdWVyeSB3YXNtIGxpc3QtY29udHJhY3QtYnktY29kZSAkQ09ERV9JRCAtLW5vZGUgJFJQQyAtLW91dHB1dCBqc29uCg=="}}),t._v(" "),a("p",[t._v("You can find the contract address in the response. Make it a variable too:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBDT05UUkFDVCA9IHRoZV9hZGRyZXNzX2luX3RoZV9yZXNwb25zZQo="}}),t._v(" "),a("p",[t._v("Use it to fetch more information with the following command:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCBxdWVyeSB3YXNtIGNvbnRyYWN0ICRDT05UUkFDVCAtLW5vZGUgJFJQQwo="}}),t._v(" "),a("h2",{attrs:{id:"call-your-smart-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-your-smart-contract"}},[t._v("#")]),t._v(" Call your smart contract")]),t._v(" "),a("p",[t._v("With your instance now running, you can call other functions on it.")]),t._v(" "),a("h3",{attrs:{id:"register-a-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#register-a-name"}},[t._v("#")]),t._v(" Register a name")]),t._v(" "),a("p",[t._v("Looking back into the contract code, you can find the "),a("code",[t._v("execute")]),t._v(" function:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1tjZmdfYXR0cihub3QoZmVhdHVyZSA9ICZxdW90O2xpYnJhcnkmcXVvdDspLCBlbnRyeV9wb2ludCldCnB1YiBmbiBleGVjdXRlKAogICAgZGVwczogRGVwc011dCwKICAgIGVudjogRW52LAogICAgaW5mbzogTWVzc2FnZUluZm8sCiAgICBtc2c6IEV4ZWN1dGVNc2csCikgLSZndDsgUmVzdWx0Jmx0O1Jlc3BvbnNlLCBDb250cmFjdEVycm9yJmd0OyB7CiAgICBtYXRjaCBtc2cgewogICAgICAgIEV4ZWN1dGVNc2c6OlJlZ2lzdGVyIHsgbmFtZSB9ID0mZ3Q7IGV4ZWN1dGVfcmVnaXN0ZXIoZGVwcywgZW52LCBpbmZvLCBuYW1lKSwKICAgICAgICBFeGVjdXRlTXNnOjpUcmFuc2ZlciB7IG5hbWUsIHRvIH0gPSZndDsgZXhlY3V0ZV90cmFuc2ZlcihkZXBzLCBlbnYsIGluZm8sIG5hbWUsIHRvKSwKICAgIH0KfQo=",url:"https://github.com/InterWasm/cw-contracts/blob/2f545b7b8b8511bc0f92f2f3f838c236ba0d850c/contracts/nameservice/src/contract.rs#L30-L41"}}),t._v(" "),a("p",[t._v("There are two "),a("em",[t._v("execute")]),t._v(" message types. It is used to register or transfer a name within the name service. Start by "),a("a",{attrs:{href:"https://github.com/InterWasm/cw-contracts/blob/2f545b7b8b8511bc0f92f2f3f838c236ba0d850c/contracts/nameservice/src/msg.rs#L11-L16",target:"_blank",rel:"noopener noreferrer"}},[t._v("registering"),a("OutboundLink")],1),t._v(" a new name with your instance:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCB0eCB3YXNtIGV4ZWN1dGUgJENPTlRSQUNUICd7JnF1b3Q7cmVnaXN0ZXImcXVvdDs6eyZxdW90O25hbWUmcXVvdDs6JnF1b3Q7ZnJlZCZxdW90O319JyAtLWFtb3VudCAxMDB1cGViYmxlIC0tZnJvbSB3YWxsZXQgLS1ub2RlICRSUEMgLS1jaGFpbi1pZCBwZWJibGVuZXQtMSAtLWdhcy1wcmljZXMgMC4wMDF1cGViYmxlIC0tZ2FzIGF1dG8gLS1nYXMtYWRqdXN0bWVudCAxLjMK"}}),t._v(" "),a("h3",{attrs:{id:"verify-the-name-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-name-registration"}},[t._v("#")]),t._v(" Verify the name registration")]),t._v(" "),a("p",[t._v("With the transaction posted, it is time to verify that the name was registered. In the contract you can find the "),a("code",[t._v("query")]),t._v(" function:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"rust",base64:"I1tjZmdfYXR0cihub3QoZmVhdHVyZSA9ICZxdW90O2xpYnJhcnkmcXVvdDspLCBlbnRyeV9wb2ludCldCnB1YiBmbiBxdWVyeShkZXBzOiBEZXBzLCBlbnY6IEVudiwgbXNnOiBRdWVyeU1zZykgLSZndDsgU3RkUmVzdWx0Jmx0O0JpbmFyeSZndDsgewogICAgbWF0Y2ggbXNnIHsKICAgICAgICBRdWVyeU1zZzo6UmVzb2x2ZVJlY29yZCB7IG5hbWUgfSA9Jmd0OyBxdWVyeV9yZXNvbHZlcihkZXBzLCBlbnYsIG5hbWUpLAogICAgICAgIFF1ZXJ5TXNnOjpDb25maWcge30gPSZndDsgdG9fYmluYXJ5KCZhbXA7Y29uZmlnX3JlYWQoZGVwcy5zdG9yYWdlKS5sb2FkKCk/KSwKICAgIH0KfQo=",url:"https://github.com/InterWasm/cw-contracts/blob/2f545b7b8b8511bc0f92f2f3f838c236ba0d850c/contracts/nameservice/src/contract.rs#L95-L101"}}),t._v(" "),a("p",[t._v("There are two "),a("em",[t._v("query")]),t._v(" message types. Note that you now have "),a("code",[t._v("deps: Deps")]),t._v(" instead of "),a("code",[t._v("deps: DepsMut")]),t._v(". This indicates that the execution of the function does not mutate the state. This is indeed what you want to use with your functions that implement a "),a("em",[t._v("query")]),t._v(" type of service.")]),t._v(" "),a("p",[t._v("Verify the registration with "),a("a",{attrs:{href:"https://github.com/InterWasm/cw-contracts/blob/2f545b7b8b8511bc0f92f2f3f838c236ba0d850c/contracts/nameservice/src/msg.rs#L18-L24",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("ResolveRecord")]),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCBxdWVyeSB3YXNtIGNvbnRyYWN0LXN0YXRlIHNtYXJ0ICRDT05UUkFDVCAneyZxdW90O3Jlc29sdmVfcmVjb3JkJnF1b3Q7OiB7JnF1b3Q7bmFtZSZxdW90OzogJnF1b3Q7ZnJlZCZxdW90O319JyAtLW5vZGUgJFJQQyAtLW91dHB1dCBqc29uCg=="}}),t._v(" "),a("p",[t._v("The response gives you the wallet address owning the registered name, which should be "),a("code",[t._v("wallet")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"transfer-a-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transfer-a-name"}},[t._v("#")]),t._v(" Transfer a name")]),t._v(" "),a("p",[t._v("Now create another transaction to transfer the name to the second wallet "),a("code",[t._v("wallet2")]),t._v(". First prepare the query with the address of your other wallet:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBKU09OPSQoanEgLS1udWxsLWlucHV0IC0tYXJnIGFkZHIgJCh3YXNtZCBrZXlzIHNob3cgd2FsbGV0MiAtLWFkZHJlc3MpICd7JnF1b3Q7dHJhbnNmZXImcXVvdDs6eyZxdW90O25hbWUmcXVvdDs6JnF1b3Q7ZnJlZCZxdW90OywmcXVvdDt0byZxdW90OzokYWRkcn19JykK"}}),t._v(" "),a("p",[t._v("Then send the transaction:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB3YXNtZCB0eCB3YXNtIGV4ZWN1dGUgJENPTlRSQUNUICZxdW90OyRKU09OJnF1b3Q7IC0tYW1vdW50IDk5OXVwZWJibGUgLS1mcm9tIHdhbGxldCAtLW5vZGUgJFJQQyAtLWNoYWluLWlkIHBlYmJsZW5ldC0xIC0tZ2FzLXByaWNlcyAwLjAwMXVwZWJibGUgLS1nYXMgYXV0byAtLWdhcy1hZGp1c3RtZW50IDEuMwo="}}),t._v(" "),a("p",[t._v("Under the hood, the execution used "),a("code",[t._v("transfer_price")]),t._v(", which you set at the instantiation.")]),t._v(" "),a("p",[t._v("Check again with a "),a("code",[t._v("resolve_record")]),t._v(" query to confirm that the transfer was successful. Experiment with another transfer from "),a("code",[t._v("wallet2")]),t._v(" to "),a("code",[t._v("wallet")]),t._v(", and pay attention at which wallet can perform which transaction.")]),t._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[t._v("CosmWasm offers good "),a("a",{attrs:{href:"https://docs.cosmwasm.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("documentation"),a("OutboundLink")],1),t._v(". This section is a summary of the "),a("a",{attrs:{href:"https://docs.cosmwasm.com/docs/getting-started/intro/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Getting Started section"),a("OutboundLink")],1),t._v(". Store the "),a("code",[t._v("env")]),t._v(" script from [here]https://docs.cosmwasm.com/docs/1.0/getting-started/setting-env#setup-go-cli) in case you wish to test on your local node. Also have a look at the "),a("a",{attrs:{href:"https://docs.cosmwasm.com/docs/SEMANTICS/",target:"_blank",rel:"noopener noreferrer"}},[t._v("contract semantics"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("You can find more information in the "),a("a",{attrs:{href:"https://docs.cosmwasm.com/dev-academy/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("CosmWasm Developer Academy"),a("OutboundLink")],1),t._v(" and modular tutorials in the "),a("a",{attrs:{href:"https://docs.cosmwasm.com/tutorials/hijack-escrow/intro",target:"_blank",rel:"noopener noreferrer"}},[t._v("Wasm tutorials"),a("OutboundLink")],1),t._v(". You can also find various hands-on videos on the "),a("a",{attrs:{href:"https://docs.cosmwasm.com/tutorials/videos-workshops",target:"_blank",rel:"noopener noreferrer"}},[t._v("workshops"),a("OutboundLink")],1),t._v(" page.")])]),t._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[t._v("#")]),t._v(" Next up")]),t._v(" "),a("p",[t._v("At this point, you have:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/academy/1-what-is-cosmos/blockchain-and-cosmos.html"}},[t._v("Understood how Cosmos and the Cosmos SDK fit in the overall development of blockchain technology.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/1-what-is-cosmos/cosmos-ecosystem.html"}},[t._v("A better sense of what comprises the Cosmos ecosystem.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/1-what-is-cosmos/atom-staking.html"}},[t._v("Set up a wallet, got some ATOM tokens, and staked them.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/architecture.html"}},[t._v("Learned more about the elements of application architecture.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/2-main-concepts/"}},[t._v("Understood and applied main concepts of the Cosmos SDK.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/3-running-a-chain/node-api-and-cli.html"}},[t._v("Ran a node, API, and CLI for a Cosmos chain.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/starport.html"}},[t._v("Used Starport to develop your chain.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/cosmjs.html"}},[t._v("Explored CosmJS and the code generated by Starport.")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/academy/4-my-own-chain/cosmwasm.html"}},[t._v("Discovered how CosmWasm assists with developing multi-chain smart contracts in Rust.")])],1)]),t._v(" "),a("p",[t._v("You might wonder: what's next? There are vast opportunities to continue your journey with Cosmos to:")]),t._v(" "),a("ul",[a("li",[t._v("Reach out to the community.")]),t._v(" "),a("li",[t._v("Contribute to the Cosmos SDK, IBC, and Tendermint BFT consensus development.")]),t._v(" "),a("li",[t._v("Get support for enterprise solutions, which you are developing.")])]),t._v(" "),a("p",[t._v("Head to the "),a("RouterLink",{attrs:{to:"/academy/5-whats-next/"}},[t._v("What's Next section")]),t._v(" to find useful information to launch your journey into the Cosmos universe.")],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);