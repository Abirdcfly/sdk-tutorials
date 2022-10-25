(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{727:function(e,t,a){"use strict";a.r(t);var o=a(1),c=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-custom-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-custom-messages"}},[e._v("#")]),e._v(" Create Custom Messages")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/3-transactions.html"}},[e._v("transactions")]),e._v(", "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/4-messages.html"}},[e._v("messages")]),e._v(", and "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain scaffold with the "),a("code",[e._v("StoredGame")]),e._v(" and its helpers. If not, follow the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/1-ignite-cli/3-stored-game.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/full-game-object",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Create a game Protobuf object.")]),e._v(" "),a("li",[e._v("Create a game Protobuf service interface.")]),e._v(" "),a("li",[e._v("Extend your unit tests.")]),e._v(" "),a("li",[e._v("Interact via the CLI.")])])]),e._v(" "),a("p",[e._v("You have created your game object type and have decided how to lay games in storage. Time to make it possible for participants to create games.")]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("Because this operation changes the state, it has to originate from transactions and messages. Your module receives a message to create a game - what should go into this message? Questions that you have to answer include:")]),e._v(" "),a("ul",[a("li",[e._v("Who is allowed to create a game?")]),e._v(" "),a("li",[e._v("Are there any limitations to creating games?")]),e._v(" "),a("li",[e._v("Given that a game involves two players, how do you prevent coercion and generally foster good behavior?")]),e._v(" "),a("li",[e._v("Do you want to establish leagues?")])]),e._v(" "),a("p",[e._v("Your implementation does not have to answer everything immediately, but you should be careful that decisions made now do not impede your own future plans or make things more complicated later.")]),e._v(" "),a("p",[e._v("Keep it simple: a single message should be enough to create a game.")]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("p",[e._v("As before:")]),e._v(" "),a("ul",[a("li",[e._v("What Ignite CLI commands will create your message?")]),e._v(" "),a("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),a("li",[e._v("How would you unit-test your addition?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("p",[e._v("Run the commands, make the adjustments, run some tests. "),a("strong",[e._v("Create the message only")]),e._v(", do not create any games in storage for now.")]),e._v(" "),a("h2",{attrs:{id:"create-the-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-message"}},[e._v("#")]),e._v(" Create the message")]),e._v(" "),a("p",[e._v("Currently:")]),e._v(" "),a("ul",[a("li",[e._v("Your game objects have been defined in storage.")]),e._v(" "),a("li",[e._v("You prevented a simple CRUD to set the objects straight from transactions.")])]),e._v(" "),a("p",[e._v("Now you need a message to instruct the checkers blockchain to create a game. This message needs to:")]),e._v(" "),a("ul",[a("li",[e._v("Not specify the ID of the game, because the system uses an incrementing counter. However, the server needs to return the newly created ID value, since the eventual value cannot be known before the transaction is included in a block and the state computed. Call this "),a("code",[e._v("gameIndex")]),e._v(".")]),e._v(" "),a("li",[e._v("Not specify the game board as this is controlled by the checkers rules.")]),e._v(" "),a("li",[e._v("Specify who is playing with the black pieces. Call the field "),a("code",[e._v("black")]),e._v(".")]),e._v(" "),a("li",[e._v("Specify who is playing with the red pieces. Call the field "),a("code",[e._v("red")]),e._v(".")])]),e._v(" "),a("p",[e._v("Instruct Ignite CLI to do all of this:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgc2NhZmZvbGQgbWVzc2FnZSBjcmVhdGVHYW1lIGJsYWNrIHJlZCAtLW1vZHVsZSBjaGVja2VycyAtLXJlc3BvbnNlIGdhbWVJbmRleAo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgaWduaXRlIHNjYWZmb2xkIG1lc3NhZ2UgY3JlYXRlR2FtZSBibGFjayByZWQgLS1tb2R1bGUgY2hlY2tlcnMgLS1yZXNwb25zZSBnYW1lSW5kZXgK"}})],1)],1),e._v(" "),a("p",[e._v("This creates a "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/commit/66ae6e1",target:"_blank",rel:"noopener noreferrer"}},[e._v("certain number of files"),a("OutboundLink")],1),e._v(" plus "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/commit/0365f55",target:"_blank",rel:"noopener noreferrer"}},[e._v("some GUI elements"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"protobuf-objects"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-objects"}},[e._v("#")]),e._v(" Protobuf objects")]),e._v(" "),a("p",[e._v("Simple Protobuf objects are created:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBNc2dDcmVhdGVHYW1lIHsKICAgIHN0cmluZyBjcmVhdG9yID0gMTsKICAgIHN0cmluZyBibGFjayA9IDI7CiAgICBzdHJpbmcgcmVkID0gMzsKfQoKbWVzc2FnZSBNc2dDcmVhdGVHYW1lUmVzcG9uc2UgewogICAgc3RyaW5nIGdhbWVJbmRleCA9IDE7Cn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/proto/checkers/tx.proto#L14-L22"}}),e._v(" "),a("p",[e._v("When compiled, for instance with "),a("code",[e._v("ignite generate proto-go")]),e._v(", these yield:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dDcmVhdGVHYW1lIHN0cnVjdCB7CiAgICBDcmVhdG9yIHN0cmluZyBgcHJvdG9idWY6JnF1b3Q7Ynl0ZXMsMSxvcHQsbmFtZT1jcmVhdG9yLHByb3RvMyZxdW90OyBqc29uOiZxdW90O2NyZWF0b3Isb21pdGVtcHR5JnF1b3Q7YAogICAgQmxhY2sgICBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDIsb3B0LG5hbWU9YmxhY2sscHJvdG8zJnF1b3Q7IGpzb246JnF1b3Q7YmxhY2ssb21pdGVtcHR5JnF1b3Q7YAogICAgUmVkICAgICBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDMsb3B0LG5hbWU9cmVkLHByb3RvMyZxdW90OyBqc29uOiZxdW90O3JlZCxvbWl0ZW1wdHkmcXVvdDtgCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/types/tx.pb.go#L30-L34"}}),e._v(" "),a("p",[e._v("And:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBNc2dDcmVhdGVHYW1lUmVzcG9uc2Ugc3RydWN0IHsKICAgIEdhbWVJbmRleCBzdHJpbmcgYHByb3RvYnVmOiZxdW90O2J5dGVzLDEsb3B0LG5hbWU9Z2FtZUluZGV4LHByb3RvMyZxdW90OyBqc29uOiZxdW90O2dhbWVJbmRleCxvbWl0ZW1wdHkmcXVvdDtgCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/types/tx.pb.go#L90-L92"}}),e._v(" "),a("HighlightBox",{attrs:{type:"warn"}},[a("p",[e._v("Files were generated to serialize the pair which are named "),a("code",[e._v("*.pb.go")]),e._v(". You should not edit these files.")])]),e._v(" "),a("p",[e._v("Ignite CLI also registered "),a("code",[e._v("MsgCreateGame")]),e._v(" as a concrete message type with the two (de-)serialization engines:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBSZWdpc3RlckNvZGVjKGNkYyAqY29kZWMuTGVnYWN5QW1pbm8pIHsKICAgIGNkYy5SZWdpc3RlckNvbmNyZXRlKCZhbXA7TXNnQ3JlYXRlR2FtZXt9LCAmcXVvdDtjaGVja2Vycy9DcmVhdGVHYW1lJnF1b3Q7LCBuaWwpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/types/codec.go#L11"}}),e._v(" "),a("p",[e._v("And:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBSZWdpc3RlckludGVyZmFjZXMocmVnaXN0cnkgY2RjdHlwZXMuSW50ZXJmYWNlUmVnaXN0cnkpIHsKICAgIHJlZ2lzdHJ5LlJlZ2lzdGVySW1wbGVtZW50YXRpb25zKCgqc2RrLk1zZykobmlsKSwKICAgICAgICAmYW1wO01zZ0NyZWF0ZUdhbWV7fSwKICAgICkKICAgIC4uLgp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/types/codec.go#L16-L18"}}),e._v(" "),a("p",[e._v("This is code that you probably do not need to change.")]),e._v(" "),a("p",[e._v("Ignite CLI also creates boilerplate code to have the message conform to the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L11-L33",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("sdk.Msg")]),a("OutboundLink")],1),e._v(" type:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAobXNnICpNc2dDcmVhdGVHYW1lKSBHZXRTaWduZXJzKCkgW11zZGsuQWNjQWRkcmVzcyB7CiAgICBjcmVhdG9yLCBlcnIgOj0gc2RrLkFjY0FkZHJlc3NGcm9tQmVjaDMyKG1zZy5DcmVhdG9yKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcGFuaWMoZXJyKQogICAgfQogICAgcmV0dXJuIFtdc2RrLkFjY0FkZHJlc3N7Y3JlYXRvcn0KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/types/message_create_game.go#L28-L34"}}),e._v(" "),a("p",[e._v("This code is created only once. You can modify it as you see fit.")]),e._v(" "),a("h2",{attrs:{id:"protobuf-service-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#protobuf-service-interface"}},[e._v("#")]),e._v(" Protobuf service interface")]),e._v(" "),a("p",[e._v("Ignite CLI also adds a new function to your gRPC interface that receives all transaction messages for the module, because the message is meant to be sent and received. The interface is called "),a("code",[e._v("service Msg")]),e._v(" and is declared inside "),a("code",[e._v("proto/checkers/tx.proto")]),e._v(".")]),e._v(" "),a("HighlightBox",{attrs:{type:"info"}},[a("p",[e._v("Ignite CLI creates this "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/stored-game/proto/checkers/tx.proto",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("tx.proto")]),a("OutboundLink")],1),e._v(" file at the beginning when you scaffold your project's module. Ignite CLI separates different concerns into different files so that it knows where to add elements according to instructions received. Ignite CLI adds a function to the empty "),a("code",[e._v("service Msg")]),e._v(" with your instruction.")])]),e._v(" "),a("p",[e._v("The new function receives this "),a("code",[e._v("MsgCreateGame")]),e._v(", namely:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"c2VydmljZSBNc2cgewogICAgcnBjIENyZWF0ZUdhbWUoTXNnQ3JlYXRlR2FtZSkgcmV0dXJucyAoTXNnQ3JlYXRlR2FtZVJlc3BvbnNlKTsKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/proto/checkers/tx.proto#L10"}}),e._v(" "),a("p",[e._v("As an interface, it does not describe what should happen when called. With the help of Protobuf, Ignite CLI compiles the interface and creates a default Go implementation.")]),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("The code of this section was created by Ignite CLI, so there is no point in testing it. However, since you are going to adjust the keeper to do what you want, you should add a test file for that. Add "),a("code",[e._v("keeper/msg_server_create_game_test.go")]),e._v(", declared with "),a("code",[e._v("package keeper_test")]),e._v(", and add in:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgYWxpY2UgPSAmcXVvdDtjb3Ntb3Mxam1qZnEwdHBscDl0bXg0djl1ZW13NzJ5NGQyd2E1bnIzeG45ZDMmcXVvdDsKICAgIGJvYiAgID0gJnF1b3Q7Y29zbW9zMXh5eHMzc2tmM2Y0amZxZXV2ODl5eWFxdmpjNmxmZmF2eHFoYzhnJnF1b3Q7CiAgICBjYXJvbCA9ICZxdW90O2Nvc21vczFlMHc1dDUzbnJxN3A2NmZ5ZTZjOHAweW55aGY2eTI0bDR5dXhkNyZxdW90OwopCgpmdW5jIFRlc3RDcmVhdGVHYW1lKHQgKnRlc3RpbmcuVCkgewogICAgbXNnU2VydmVyLCBjb250ZXh0IDo9IHNldHVwTXNnU2VydmVyKHQpCiAgICBjcmVhdGVSZXNwb25zZSwgZXJyIDo9IG1zZ1NlcnZlci5DcmVhdGVHYW1lKGNvbnRleHQsICZhbXA7dHlwZXMuTXNnQ3JlYXRlR2FtZXsKICAgICAgICBDcmVhdG9yOiBhbGljZSwKICAgICAgICBCbGFjazogICBib2IsCiAgICAgICAgUmVkOiAgICAgY2Fyb2wsCiAgICB9KQogICAgcmVxdWlyZS5OaWwodCwgZXJyKQogICAgcmVxdWlyZS5FcXVhbFZhbHVlcyh0LCB0eXBlcy5Nc2dDcmVhdGVHYW1lUmVzcG9uc2V7CiAgICAgICAgSWRWYWx1ZTogJnF1b3Q7JnF1b3Q7LCAvLyBUT0RPOiB1cGRhdGUgd2l0aCBhIHByb3BlciB2YWx1ZSB3aGVuIHVwZGF0ZWQKICAgIH0sICpjcmVhdGVSZXNwb25zZSkKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/keeper/msg_server_create_game_test.go"}}),e._v(" "),a("p",[e._v("You can test this with:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgZ28gdGVzdCBnaXRodWIuY29tL2FsaWNlL2NoZWNrZXJzL3gvY2hlY2tlcnMva2VlcGVyCg=="}})],1)],1),e._v(" "),a("p",[e._v("This convenient "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/x/checkers/keeper/msg_server_test.go#L13-L16",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("setupMsgServer")]),a("OutboundLink")],1),e._v(" function was created by Ignite CLI. To call this a "),a("em",[e._v("unit")]),e._v(" test is a slight misnomer because the "),a("code",[e._v("msgServer")]),e._v(" created uses a real context and keeper, although with a "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/create-game-msg/testutil/keeper/checkers.go#L24",target:"_blank",rel:"noopener noreferrer"}},[e._v("memory database"),a("OutboundLink")],1),e._v(", not mocks.")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("First, run the chain:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgY2hhaW4gc2VydmUK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC0tbmFtZSBjaGVja2VycyAtdiAkKHB3ZCk6L2NoZWNrZXJzIC13IC9jaGVja2VycyBjaGVja2Vyc19pIGlnbml0ZSBjaGFpbiBzZXJ2ZQo="}})],1)],1),e._v(" "),a("p",[e._v("Time to see which new CLI command was created by Ignite CLI. In another shell:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgLS1oZWxwCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIC0taGVscAo="}})],1)],1),e._v(" "),a("p",[e._v("Among other things, this informs you of the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCkF2YWlsYWJsZSBDb21tYW5kczoKICBjcmVhdGUtZ2FtZSBCcm9hZGNhc3QgbWVzc2FnZSBjcmVhdGVHYW1lCg=="}}),e._v(" "),a("p",[e._v("And also:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgLS1oZWxwCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lIC0taGVscAo="}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uClVzYWdlOgogIGNoZWNrZXJzZCB0eCBjaGVja2VycyBjcmVhdGUtZ2FtZSBbYmxhY2tdIFtyZWRdIFtmbGFnc10KCkZsYWdzOgogICAtYSwgLS1hY2NvdW50LW51bWJlciB1aW50ICAgICAgVGhlIGFjY291bnQgbnVtYmVyIG9mIHRoZSBzaWduaW5nIGFjY291bnQgKG9mZmxpbmUgbW9kZSBvbmx5KQogICAtYiwgLS1icm9hZGNhc3QtbW9kZSBzdHJpbmcgICAgVHJhbnNhY3Rpb24gYnJvYWRjYXN0aW5nIG1vZGUgKHN5bmN8YXN5bmN8YmxvY2spIChkZWZhdWx0ICZxdW90O3N5bmMmcXVvdDspCiAgICAgICAtLWRyeS1ydW4gICAgICAgICAgICAgICAgICBJZ25vcmUgdGhlIC0tZ2FzIGZsYWcgYW5kIHBlcmZvcm0gYSBzaW11bGF0aW9uIG9mIGEgdHJhbnNhY3Rpb24sIGJ1dCBkb24ndCBicm9hZGNhc3QgaXQKICAgICAgIC0tZmVlLWFjY291bnQgc3RyaW5nICAgICAgIEZlZSBhY2NvdW50IHBheXMgZmVlcyBmb3IgdGhlIHRyYW5zYWN0aW9uIGluc3RlYWQgb2YgZGVkdWN0aW5nIGZyb20gdGhlIHNpZ25lcgogICAgICAgLS1mZWVzIHN0cmluZyAgICAgICAgICAgICAgRmVlcyB0byBwYXkgYWxvbmcgd2l0aCB0cmFuc2FjdGlvbjsgZWc6IDEwdWF0b20KICAgICAgIC0tZnJvbSBzdHJpbmcgICAgICAgICAgICAgIE5hbWUgb3IgYWRkcmVzcyBvZiBwcml2YXRlIGtleSB3aXRoIHdoaWNoIHRvIHNpZ24KICAgICAgIC0tZ2FzIHN0cmluZyAgICAgICAgICAgICAgIEdhcyBsaW1pdCB0byBzZXQgcGVyLXRyYW5zYWN0aW9uOyBzZXQgdG8gJnF1b3Q7YXV0byZxdW90OyB0byBjYWxjdWxhdGUgc3VmZmljaWVudCBnYXMgYXV0b21hdGljYWxseSAoZGVmYXVsdCAyMDAwMDApCi4uLgo="}}),e._v(" "),a("p",[e._v("You kept the two accounts created by Ignite CLI.")]),e._v(" "),a("p",[e._v("Have "),a("code",[e._v("alice")]),e._v(" start a game with "),a("code",[e._v("bob")]),e._v(".")]),e._v(" "),a("HighlightBox",{attrs:{type:"remember"}},[a("p",[e._v("Instead of having to copy and paste the addresses each time you need them, you can store these as variables:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBleHBvcnQgYWxpY2U9JChjaGVja2Vyc2Qga2V5cyBzaG93IGFsaWNlIC1hKQokIGV4cG9ydCBib2I9JChjaGVja2Vyc2Qga2V5cyBzaG93IGJvYiAtYSkK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBleHBvcnQgYWxpY2U9JChkb2NrZXIgZXhlYyBjaGVja2VycyBjaGVja2Vyc2Qga2V5cyBzaG93IGFsaWNlIC1hKQokIGV4cG9ydCBib2I9JChkb2NrZXIgZXhlYyBjaGVja2VycyBjaGVja2Vyc2Qga2V5cyBzaG93IGJvYiAtYSkK"}}),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[a("code",[e._v("docker")]),e._v(" is called without "),a("code",[e._v("-it")]),e._v(", otherwise it would add a "),a("code",[e._v("\\r")]),e._v(" to the addresses.")])])],1)],1),e._v(" "),a("p",[e._v("You will have to redo this for every new shell, and for every use of the "),a("code",[e._v("--reset-once")]),e._v(" flag.")])],1),e._v(" "),a("p",[e._v("How much gas is needed? You can get an estimate by dry running the transaction using the "),a("code",[e._v("--dry-run")]),e._v(" flag:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZSAtLWRyeS1ydW4K"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UgLS1kcnktcnVuCg=="}})],1)],1),e._v(" "),a("p",[e._v("It appears the dry-run function is broken in this version. It if were not, it would print:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Z2FzIGVzdGltYXRlOiA0MDQ1Mgo="}}),e._v(" "),a("p",[e._v("It is hard to assess how much gas that represents. In any case, keep gas on "),a("code",[e._v("auto")]),e._v(":")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgLS1mcm9tICRhbGljZSAtLWdhcyBhdXRvCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIC0tZnJvbSAkYWxpY2UgLS1nYXMgYXV0bwo="}})],1)],1),e._v(" "),a("ExpansionPanel",{attrs:{title:"The command prints a lot and prompts you for confirmation"}},[a("p",[e._v("Note how it also prints the gas estimate:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Z2FzIGVzdGltYXRlOiA0MzAzMgp7JnF1b3Q7Ym9keSZxdW90Ozp7JnF1b3Q7bWVzc2FnZXMmcXVvdDs6W3smcXVvdDtAdHlwZSZxdW90OzomcXVvdDsvYWxpY2UuY2hlY2tlcnMuY2hlY2tlcnMuTXNnQ3JlYXRlR2FtZSZxdW90OywmcXVvdDtjcmVhdG9yJnF1b3Q7OiZxdW90O2Nvc21vczE2OW1jOHFxZDZ0bHVlZDAwejIzZnM3NXR5ZWNmY2F6cHV3YXBjNCZxdW90OywmcXVvdDtibGFjayZxdW90OzomcXVvdDtjb3Ntb3MxNjltYzhxcWQ2dGx1ZWQwMHoyM2ZzNzV0eWVjZmNhenB1d2FwYzQmcXVvdDssJnF1b3Q7cmVkJnF1b3Q7OiZxdW90O2Nvc21vczEwbXF5dmo1NWhtNHd1bnNkNjJ3cHJ3ZnY5ZWhjZXJrZmdoY2pmbCZxdW90O31dLCZxdW90O21lbW8mcXVvdDs6JnF1b3Q7JnF1b3Q7LCZxdW90O3RpbWVvdXRfaGVpZ2h0JnF1b3Q7OiZxdW90OzAmcXVvdDssJnF1b3Q7ZXh0ZW5zaW9uX29wdGlvbnMmcXVvdDs6W10sJnF1b3Q7bm9uX2NyaXRpY2FsX2V4dGVuc2lvbl9vcHRpb25zJnF1b3Q7OltdfSwmcXVvdDthdXRoX2luZm8mcXVvdDs6eyZxdW90O3NpZ25lcl9pbmZvcyZxdW90OzpbXSwmcXVvdDtmZWUmcXVvdDs6eyZxdW90O2Ftb3VudCZxdW90OzpbXSwmcXVvdDtnYXNfbGltaXQmcXVvdDs6JnF1b3Q7NDMwMzImcXVvdDssJnF1b3Q7cGF5ZXImcXVvdDs6JnF1b3Q7JnF1b3Q7LCZxdW90O2dyYW50ZXImcXVvdDs6JnF1b3Q7JnF1b3Q7fX0sJnF1b3Q7c2lnbmF0dXJlcyZxdW90OzpbXX0KCmNvbmZpcm0gdHJhbnNhY3Rpb24gYmVmb3JlIHNpZ25pbmcgYW5kIGJyb2FkY2FzdGluZyBbeS9OXTogeQpjb2RlOiAwCmNvZGVzcGFjZTogJnF1b3Q7JnF1b3Q7CmRhdGE6IDBBMjgwQTI2MkY2MjM5NkM2MTYyMkU2MzY4NjU2MzZCNjU3MjczMkU2MzY4NjU2MzZCNjU3MjczMkU0RDczNjc0MzcyNjU2MTc0NjU0NzYxNkQ2NQpldmVudHM6Ci0gYXR0cmlidXRlczoKICAtIGluZGV4OiB0cnVlCiAgICBrZXk6IFptVmwKICAgIHZhbHVlOiAmcXVvdDsmcXVvdDsKICB0eXBlOiB0eAotIGF0dHJpYnV0ZXM6CiAgLSBpbmRleDogdHJ1ZQogICAga2V5OiBZV05qWDNObGNRPT0KICAgIHZhbHVlOiBZMjl6Ylc5ek1UWTViV000Y1hGa05uUnNkV1ZrTURCNk1qTm1jemMxZEhsbFkyWmpZWHB3ZFhkaGNHTTBMekU9CiAgdHlwZTogdHgKLSBhdHRyaWJ1dGVzOgogIC0gaW5kZXg6IHRydWUKICAgIGtleTogYzJsbmJtRjBkWEpsCiAgICB2YWx1ZTogYjFNd2NXTnJaRXRQYXl0NVVsTkhkVXROYlhabWRGVmlUakpaYmtSVGNFUjBSbk5HWlZOQmFpczVXV1FyUWs5dlluUnhkSGg0WWxwNlpVbGliMjlxZDBWTlIxQldTMWw1TWtnMWVISjNWRVpoUTBSNVIzYzlQUT09CiAgdHlwZTogdHgKLSBhdHRyaWJ1dGVzOgogIC0gaW5kZXg6IHRydWUKICAgIGtleTogWVdOMGFXOXUKICAgIHZhbHVlOiBZM0psWVhSbFgyZGhiV1U9CiAgdHlwZTogbWVzc2FnZQpnYXNfdXNlZDogJnF1b3Q7NDEwNzgmcXVvdDsKZ2FzX3dhbnRlZDogJnF1b3Q7NDMwMzImcXVvdDsKaGVpZ2h0OiAmcXVvdDsxNTk4JnF1b3Q7CmluZm86ICZxdW90OyZxdW90Owpsb2dzOgotIGV2ZW50czoKICAtIGF0dHJpYnV0ZXM6CiAgICAtIGtleTogYWN0aW9uCiAgICAgIHZhbHVlOiBjcmVhdGVfZ2FtZQogICAgdHlwZTogbWVzc2FnZQogIGxvZzogJnF1b3Q7JnF1b3Q7CiAgbXNnX2luZGV4OiAwCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtjcmVhdGVfZ2FtZSZxdW90O31dfV19XScKdGltZXN0YW1wOiAmcXVvdDsmcXVvdDsKdHg6IG51bGwKdHhoYXNoOiA1NzZDMzAzRTNDNDNCNDA5QjBERUExQ0JGRjE4QjdGMzRGMUU2OTQ5MkVFOEE1NjI3NTE2NjgxMTdFNDI4MzRCCg=="}}),e._v(" "),a("p",[e._v("If you are curious, the "),a("code",[e._v(".events.attributes")]),e._v(" are encoded in Base64:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBlY2hvIFlXTjBhVzl1IHwgYmFzZTY0IC1kCiQgZWNobyBZM0psWVhSbFgyZGhiV1U9IHwgYmFzZTY0IC1kCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtlY2hvIFlXTjBhVzl1IHwgYmFzZTY0IC1kJnF1b3Q7CiQgZG9ja2VyIGV4ZWMgLWl0IGNoZWNrZXJzIGJhc2ggLWMgJnF1b3Q7ZWNobyBZM0psWVhSbFgyZGhiV1U9IHwgYmFzZTY0IC1kJnF1b3Q7Cg=="}})],1)],1),e._v(" "),a("p",[e._v("Return respectively:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"YWN0aW9uJQpjcmVhdGVfZ2FtZSUK"}}),e._v(" "),a("p",[e._v("Which can be found again in "),a("code",[e._v(".raw_log")]),e._v(".")])],1),e._v(" "),a("p",[e._v("You can query your chain to check whether the system info remains unchanged:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zeXN0ZW0taW5mbwo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3lzdGVtLWluZm8K"}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"U3lzdGVtSW5mbzoKICBuZXh0SWQ6ICZxdW90OzEmcXVvdDsK"}}),e._v(" "),a("p",[e._v("It remains unchanged.")]),e._v(" "),a("p",[e._v("Check whether any game was created:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgbGlzdC1zdG9yZWQtZ2FtZQo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIGxpc3Qtc3RvcmVkLWdhbWUK"}})],1)],1),e._v(" "),a("p",[e._v("This returns:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"cGFnaW5hdGlvbjoKICBuZXh0X2tleTogbnVsbAogIHRvdGFsOiAmcXVvdDswJnF1b3Q7CnN0b3JlZEdhbWU6IFtdCg=="}}),e._v(" "),a("p",[e._v("It appears that nothing changed. Ignite CLI created a message, you even signed and broadcast one. However you have not yet implemented what actions the chain should undertake when it receives this message.")]),e._v(" "),a("p",[e._v("When you are done with this exercise you can stop Ignite's "),a("code",[e._v("chain serve.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("How to make it possible for participants of the checkers blockchain game to create games with a single message, using a Protobuf object and a Protobuf service interface.")]),e._v(" "),a("li",[e._v("Which elements must be specified (and which must not) when instructing Ignite CLI to send a game creation message.")]),e._v(" "),a("li",[e._v("How to add a test file to check the functionality of your code.")]),e._v(" "),a("li",[e._v('How to interact via the CLI to confirm the "create a game" message occurs as intended - though the absence of a dedicated Message Handler means that currently no game is created.')])])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);