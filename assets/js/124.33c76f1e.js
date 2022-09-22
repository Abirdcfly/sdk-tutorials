(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{734:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"incentivize-players"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incentivize-players"}},[e._v("#")]),e._v(" Incentivize Players")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concept of gas.")]),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with the game wager and its handling. If not, follow the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/5-game-wager.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/game-wager",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Add transaction fees.")]),e._v(" "),a("li",[e._v("Set fees and add metering.")]),e._v(" "),a("li",[e._v("Do integration tests.")])])]),e._v(" "),a("p",[e._v("Players can start playing checkers with your Cosmos blockchain. Transaction fees are paid by the players themselves, at least the fee related to transporting the serialized bytes and the other gas-metered parts like "),a("code",[e._v("bank")]),e._v(".")]),e._v(" "),a("p",[e._v("Your blockchain is taking shape, but you need to take care of peripheral concerns. For instance, how do you make sure that participants pay their fair share of the costs they impose on the network?")]),e._v(" "),a("p",[e._v("Next, you should add your own gas metering to reflect the costs that different transactions impose, or you can add costs to discourage spam.")]),e._v(" "),a("h2",{attrs:{id:"some-initial-thoughts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),a("p",[e._v("To continue developing your checkers blockchain:")]),e._v(" "),a("ul",[a("li",[e._v("At what junctures can you charge gas?")]),e._v(" "),a("li",[e._v("At what junctures can you "),a("strong",[e._v("not")]),e._v(" charge gas, and what do you do about it?")]),e._v(" "),a("li",[e._v("Are there new errors to report back?")]),e._v(" "),a("li",[e._v("What event should you emit?")])]),e._v(" "),a("h2",{attrs:{id:"code-needs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),a("p",[e._v("Before diving into the specifics, ask yourself:")]),e._v(" "),a("ul",[a("li",[e._v("What Ignite CLI commands, if any, will assist you?")]),e._v(" "),a("li",[e._v("How do you adjust what Ignite CLI created for you?")]),e._v(" "),a("li",[e._v("Where do you make your changes?")]),e._v(" "),a("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),a("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),a("h2",{attrs:{id:"new-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-data"}},[e._v("#")]),e._v(" New data")]),e._v(" "),a("p",[e._v("These values provide examples but you can, and should, set your own. To get a rule-of-thumb idea of how much gas is already consumed without your additions, look back at your previous transactions. Save your pick of the values as new constants:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgQ3JlYXRlR2FtZUdhcyAgICAgICA9IDE1MDAwCiAgICBQbGF5TW92ZUdhcyAgICAgICAgID0gMTAwMAogICAgUmVqZWN0R2FtZVJlZnVuZEdhcyA9IDE0MDAwCikK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/gas-meter/x/checkers/types/keys.go#L71-L75"}}),e._v(" "),a("p",[e._v("Here are the debatable rationales for these values:")]),e._v(" "),a("ol",[a("li",[e._v("Creating a game imposes a large cost because it creates a brand new entry in storage, which contains many fields. This new storage entry is stored on all nodes.")]),e._v(" "),a("li",[e._v("Playing a game imposes a smaller cost because it makes changes to an existing storage entry, which was already paid for. On the other hand it costs some computation and pushes back the time by when the game expires.")]),e._v(" "),a("li",[e._v("When a player rejects a game, the storage entry is deleted, which relieves the nodes of the burden of storing it. Hence it makes sense to incentivize players to reject games by "),a("strong",[e._v("refunding")]),e._v(" some gas. Since some computation was still done between creation and rejection, the refund is less than the cost of creation.")])]),e._v(" "),a("p",[e._v("As a checkers blockchain creator, your goal may be to have as many on-going games as possible. Adding costs sounds counter to this goal. However, here the goal is to optimize potential congestion at the margin. If there is little activity, then the gas price will go down, and these additional costs will be trivial for players anyway. Conversely, if there is a lot of network activity, the gas price will go up, and whether you have put additional costs or not players will still be less likely to participate.")]),e._v(" "),a("h2",{attrs:{id:"add-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-handling"}},[e._v("#")]),e._v(" Add handling")]),e._v(" "),a("p",[e._v("Add a line that consumes or refunds the designated amount of gas in each relevant handler:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("When handling a game creation:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5DcmVhdGVHYW1lR2FzLCAmcXVvdDtDcmVhdGUgZ2FtZSZxdW90OykK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/gas-meter/x/checkers/keeper/msg_server_create_game.go#L46"}})],1),e._v(" "),a("li",[a("p",[e._v("When handling a move:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4Lkdhc01ldGVyKCkuQ29uc3VtZUdhcyh0eXBlcy5QbGF5TW92ZUdhcywgJnF1b3Q7UGxheSBhIG1vdmUmcXVvdDspCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/gas-meter/x/checkers/keeper/msg_server_play_move.go#L88"}})],1),e._v(" "),a("li",[a("p",[e._v("When handling a game rejection, you make sure that you are not refunding more than what has already been consumed:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cmVmdW5kIDo9IHVpbnQ2NCh0eXBlcy5SZWplY3RHYW1lUmVmdW5kR2FzKQppZiBjb25zdW1lZCA6PSBjdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpOyBjb25zdW1lZCAmbHQ7IHJlZnVuZCB7CiAgICByZWZ1bmQgPSBjb25zdW1lZAp9CmN0eC5HYXNNZXRlcigpLlJlZnVuZEdhcyhyZWZ1bmQsICZxdW90O1JlamVjdCBnYW1lJnF1b3Q7KQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/gas-meter/x/checkers/keeper/msg_server_reject_game.go#L46-L50"}})],1)]),e._v(" "),a("p",[e._v("You do not meter gas in your "),a("code",[e._v("EndBlock")]),e._v(" handler because it is "),a("strong",[e._v("not")]),e._v(" called by a player sending a transaction. Instead, it is a service rendered by the network. If you want to account for the gas cost of a game expiration, you have to devise a way to pre-collect it from players as part of the other messages.")]),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[e._v("As part of your code optimization, avoid calling "),a("code",[e._v("ConsumeGas")]),e._v(" with a fixed gas cost (for instance "),a("code",[e._v("k")]),e._v(") from within a loop. Each pass of the loop uses computation resources ("),a("code",[e._v("c")]),e._v(") on each node. If you know the number of times your code loops ("),a("code",[e._v("n")]),e._v("), you know that running the full loop will use "),a("code",[e._v("n*c")]),e._v(" computation resources.\n"),a("br"),a("br"),e._v("\nNow consider the case of a user who sent a transaction without enough gas. The transaction will fail anyway, but at what point will it fail?")]),e._v(" "),a("ol",[a("li",[e._v("If you call "),a("code",[e._v("ConsumeGas(k)")]),e._v(" "),a("em",[e._v("within")]),e._v(" the loop, the transaction will fail during one of the passes (the "),a("code",[e._v("m")]),e._v("th pass). This means that the node has already used "),a("code",[e._v("m*c")]),e._v(" computation resources.")]),e._v(" "),a("li",[e._v("If you call "),a("code",[e._v("ConsumeGas(n*k)")]),e._v(" once "),a("em",[e._v("before")]),e._v(" the loop, the transaction will fail immediately, and the node will have used "),a("code",[e._v("0")]),e._v(" computation resources.")])]),e._v(" "),a("p",[e._v("Choosing option 2 improves the effectiveness of your blockchain, and potentially protects it from spam and denial-of-service attacks.")]),e._v(" "),a("p",[e._v("Additionally, making only a single call to "),a("code",[e._v("ConsumeGas")]),e._v(" slightly saves computation resources of the node.")])]),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("Now you must add tests that confirm the gas consumption. However, it is not possible to differentiate the gas cost that BaseApp is incurring on your messages from the gas cost your module imposes on top of it. Also, you cannot distinguish via the descriptor "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.45.4/store/types/gas.go#L90-L101",target:"_blank",rel:"noopener noreferrer"}},[e._v("unless it panics"),a("OutboundLink")],1),e._v(". Nevertheless, you can add a lame test like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0Q3JlYXRlMUdhbWVDb25zdW1lZEdhcyh0ICp0ZXN0aW5nLlQpIHsKICAgIG1zZ1NydnIsIF8sIGNvbnRleHQgOj0gc2V0dXBNc2dTZXJ2ZXJDcmVhdGVHYW1lKHQpCiAgICBjdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoY29udGV4dCkKICAgIGJlZm9yZSA6PSBjdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpCiAgICBtc2dTcnZyLkNyZWF0ZUdhbWUoY29udGV4dCwgJmFtcDt0eXBlcy5Nc2dDcmVhdGVHYW1lewogICAgICAgIENyZWF0b3I6IGFsaWNlLAogICAgICAgIEJsYWNrOiAgIGJvYiwKICAgICAgICBSZWQ6ICAgICBjYXJvbCwKICAgICAgICBXYWdlcjogICA0NSwKICAgIH0pCiAgICBhZnRlciA6PSBjdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpCiAgICByZXF1aXJlLkdyZWF0ZXJPckVxdWFsKHQsIGFmdGVyLCBiZWZvcmUrMjVfMDAwKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/gas-meter/x/checkers/keeper/msg_server_create_game_test.go#L125-L137"}}),e._v(" "),a("p",[e._v("Now add another test for "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/gas-meter/x/checkers/keeper/msg_server_play_move_test.go#L176-L192",target:"_blank",rel:"noopener noreferrer"}},[e._v("play"),a("OutboundLink")],1),e._v(" and one for reject. Note that "),a("code",[e._v("after")]),e._v(" is much less than "),a("code",[e._v("before")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UmVqZWN0R2FtZUJ5QmxhY2tSZWZ1bmRlZEdhcyh0ICp0ZXN0aW5nLlQpIHsKICAgIG1zZ1NlcnZlciwgXywgY29udGV4dCwgY3RybCwgXyA6PSBzZXR1cE1zZ1NlcnZlcldpdGhPbmVHYW1lRm9yUmVqZWN0R2FtZSh0KQogICAgY3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpCiAgICBkZWZlciBjdHJsLkZpbmlzaCgpCiAgICBiZWZvcmUgOj0gY3R4Lkdhc01ldGVyKCkuR2FzQ29uc3VtZWQoKQogICAgbXNnU2VydmVyLlJlamVjdEdhbWUoY29udGV4dCwgJmFtcDt0eXBlcy5Nc2dSZWplY3RHYW1lewogICAgICAgIENyZWF0b3I6ICAgYm9iLAogICAgICAgIEdhbWVJbmRleDogJnF1b3Q7MSZxdW90OywKICAgIH0pCiAgICBhZnRlciA6PSBjdHguR2FzTWV0ZXIoKS5HYXNDb25zdW1lZCgpCiAgICByZXF1aXJlLkxlc3NPckVxdWFsKHQsIGFmdGVyLCBiZWZvcmUtNV8wMDApCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/gas-meter/x/checkers/keeper/msg_server_reject_game_test.go#L96-L107"}}),e._v(" "),a("p",[e._v("These new tests are lame, because their "),a("code",[e._v("5_000")]),e._v(" or "),a("code",[e._v("25_000")]),e._v(" values cannot be predicted but have to be found by trial and error.")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("Here, you want to confirm that gas is consumed by different actions. The difficulty is that Alice's and Bob's balances in "),a("code",[e._v("stake")]),e._v(" tokens change not only because of the gas used but also depending on the gas price. An easy measurement is to use "),a("code",[e._v("--dry-run")]),e._v(":")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC0tZHJ5LXJ1bgo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIDEwMDAwMDAgLS1mcm9tICRhbGljZSAtLWRyeS1ydW4K"}})],1)],1),e._v(" "),a("p",[e._v("Say this returns "),a("code",[e._v("69422")]),e._v(", which is the estimated gas used. Now comment out the "),a("code",[e._v(".ConsumeGas")]),e._v(" line in "),a("code",[e._v("msg_server_create_game.go")]),e._v(", save it, wait a few minutes for Ignite CLI to rebuild, and try again:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC0tZHJ5LXJ1bgo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIDEwMDAwMDAgLS1mcm9tICRhbGljZSAtLWRyeS1ydW4K"}})],1)],1),e._v(" "),a("p",[e._v("Say, this time you get "),a("code",[e._v("54422")]),e._v(". This is good: the "),a("code",[e._v("15000")]),e._v(" gas is no longer part of the estimation, as expected. Uncomment the "),a("code",[e._v(".ConsumeGas")]),e._v(" line. You can try "),a("code",[e._v("--dry-run")]),e._v(" on play and reject too.")]),e._v(" "),a("p",[e._v("Estimating with "),a("code",[e._v("--dry-run")]),e._v(" is a good start. Now have Alice create a game and check the gas used in the transaction:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIDEwMDAwMDAgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),a("p",[e._v("This mentions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCmdhc191c2VkOiAmcXVvdDs2OTQyMiZxdW90OwouLi4K"}}),e._v(" "),a("p",[e._v("You could impose a "),a("code",[e._v("--gas-prices")]),e._v(" and then check balances, but this would obfuscate the gas consumption which is what you want to confirm.")]),e._v(" "),a("p",[e._v("As before, comment the "),a("code",[e._v(".ConsumeGas")]),e._v(" line "),a("code",[e._v("msg_server_create_game.go")]),e._v(" and wait for Ignite CLI to rebuild. Then try again:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIGNyZWF0ZS1nYW1lICRhbGljZSAkYm9iIDEwMDAwMDAgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),a("p",[e._v("This mentions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCmdhc191c2VkOiAmcXVvdDs2NTU0MCZxdW90OwouLi4K"}}),e._v(" "),a("p",[e._v("There is only a difference of "),a("code",[e._v("4000")]),e._v(". The rest of the system likely had some under-the-hood initializations, such as Merkle tree creations, which may "),a("em",[e._v("falsify")]),e._v(" the early results. Create 10 more games without "),a("code",[e._v(".Consume")]),e._v("ing gas and only look at the "),a("code",[e._v("gas_used")]),e._v(". It should stabilize at a certain value:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC15IHwgZ3JlcCBnYXNfdXNlZAo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC15IHwgZ3JlcCBnYXNfdXNlZCZxdW90Owo="}})],1)],1),e._v(" "),a("p",[e._v("This mentions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Z2FzX3VzZWQ6ICZxdW90OzY1NTA3JnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("Put back the "),a("code",[e._v(".ConsumeGas")]),e._v(" line and rebuild. Then try again:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC15IHwgZ3JlcCBnYXNfdXNlZAo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtjaGVja2Vyc2QgdHggY2hlY2tlcnMgY3JlYXRlLWdhbWUgJGFsaWNlICRib2IgMTAwMDAwMCAtLWZyb20gJGFsaWNlIC15IHwgZ3JlcCBnYXNfdXNlZCZxdW90Owo="}})],1)],1),e._v(" "),a("p",[e._v("It now consistently mentions a difference of "),a("code",[e._v("15000")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Z2FzX3VzZWQ6ICZxdW90OzgwNTA3JnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("That is sufficient confirmation.")]),e._v(" "),a("p",[e._v("What about the refund on reject? With the gas refund in place, reject one of the many games you created:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcmVqZWN0LWdhbWUgOSAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHJlamVjdC1nYW1lIDkgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),a("p",[e._v("This shows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Z2FzX3VzZWQ6ICZxdW90OzU1MDAzJnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("Now comment out the "),a("code",[e._v("RefundGas")]),e._v(" part and reject another game. This shows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Z2FzX3VzZWQ6ICZxdW90OzY5MTU3JnF1b3Q7Cg=="}}),e._v(" "),a("p",[e._v("This is close to "),a("code",[e._v("14000")]),e._v(" more expensive than when there is a refund.")]),e._v(" "),a("p",[e._v("Do not worry if you do not get the same values. At least try multiple times to see if the values look like each other on your system.")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("How to add gas metering to your application so participants contribute toward the cost of the work being demanded of the network by gameplay, and add costs to discourage spam.")]),e._v(" "),a("li",[e._v("What new data constants need to be added, such as fees for creating games or playing moves, and gas consumption lines for handlers relating to these gameplay aspects.")]),e._v(" "),a("li",[e._v("Best practices for gas metering, including where not to call fixed gas costs and the implications of a user sending transactions without enough gas to process them.")]),e._v(" "),a("li",[e._v("What texts to add that confirm gas consumption, acknowledging the limitations on precision that the use of BaseApp and your module also imposes on understanding how much gas is used by various transactions.")]),e._v(" "),a("li",[e._v("How to interact via the CLI to confirm that gas is being consumed by different actions, acknowledging the additional complications arising from variable account balances and gas price.")])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);