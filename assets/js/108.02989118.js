(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{713:function(e,a,t){"use strict";t.r(a);var o=t(0),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"store-fifo-put-your-games-in-order"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-fifo-put-your-games-in-order"}},[e._v("#")]),e._v(" Store FIFO - Put Your Games in Order")]),e._v(" "),t("HighlightBox",{attrs:{type:"synopsis"}},[t("p",[e._v("Make sure you have all you need before proceeding:")]),e._v(" "),t("ul",[t("li",[e._v("You understand the concepts of "),t("RouterLink",{attrs:{to:"/academy/2-main-concepts/architecture.html"}},[e._v("ABCI")]),e._v(", "),t("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")]),e._v(", and of a "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Doubly_linked_list",target:"_blank",rel:"noopener noreferrer"}},[e._v("doubly-linked list"),t("OutboundLink")],1),e._v(".")],1),e._v(" "),t("li",[e._v("Have Go installed.")]),e._v(" "),t("li",[e._v("The checkers blockchain codebase with "),t("code",[e._v("MsgRejectGame")]),e._v(" and its handling. You can get there by following the "),t("RouterLink",{attrs:{to:"/academy/4-my-own-chain/reject-game.html"}},[e._v("previous steps")]),e._v(" or checking out "),t("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/reject-game-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),t("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),t("p",[e._v("In the "),t("RouterLink",{attrs:{to:"/academy/4-my-own-chain/reject-game.html"}},[e._v("previous step")]),e._v(" you added a way for players to reject a game. There are two ways for a game to advance through its lifecycle until resolution, win or draw: "),t("em",[e._v("play")]),e._v(" and "),t("em",[e._v("reject")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"the-why"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-why"}},[e._v("#")]),e._v(" The why")]),e._v(" "),t("p",[e._v("What if a player never shows up again? Should a game remain in limbo forever?")]),e._v(" "),t("p",[e._v("You eventually want to let players wager on the outcome of games especially if "),t("em",[e._v("value")]),e._v(" is tied up in games. You need to add a way for games to be forcibly resolved if a player stops responding.")]),e._v(" "),t("p",[e._v("The simplest mechanism to expire a game is to use a "),t("strong",[e._v("deadline")]),e._v(". If the deadline is reached, then the game is forcibly terminated and expires. The deadline is pushed further back every time a game is played.")]),e._v(" "),t("p",[e._v("To enforce the termination it is a good idea to use the "),t("strong",[t("code",[e._v("EndBlock")])]),e._v(" part of the ABCI protocol. The call "),t("code",[e._v("EndBlock")]),e._v(" is triggered when all transactions of the block are delivered and gives you a chance to do some tidying up before the block is sealed. In your case, all games that have reached their deadline will be terminated.")]),e._v(" "),t("p",[e._v("How do you find all the games that reached their deadline? Maybe with a pseudo-code like:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"javascript",base64:"ZmluZEFsbChnYW1lID0mZ3Q7IGdhbWUuZGVhZGxpbmUgJmx0OyBub3cpCg=="}}),e._v(" "),t("p",[e._v("This approach is "),t("strong",[e._v("expensive")]),e._v(" in terms of computation. The "),t("code",[e._v("EndBlock")]),e._v(" code should not have to pull up all games out of the storage just to find the dozen that are relevant. Doing a "),t("code",[e._v("findAll")]),e._v(" costs "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Big_O_notation",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("O(n)")]),t("OutboundLink")],1),e._v(", where "),t("code",[e._v("n")]),e._v(" is the total number of games.")]),e._v(" "),t("h2",{attrs:{id:"the-how"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-how"}},[e._v("#")]),e._v(" The how")]),e._v(" "),t("p",[e._v("You need another data structure. The simplest one is a First-In-First-Out (FIFO) that is constantly updated so that:")]),e._v(" "),t("ul",[t("li",[e._v("The just played games are taken out of where they are and sent to the tail.")]),e._v(" "),t("li",[e._v("The games that have not been played for the longest time eventually end up at the head.")])]),e._v(" "),t("p",[e._v("You keep dealing with the expired games that are at the head of the FIFO when terminating expired games in "),t("code",[e._v("EndBlock")]),e._v(". Do not stop until the head includes an ongoing game. The cost is:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("O(1)")]),e._v(" on each game creation and gameplay.")]),e._v(" "),t("li",[t("code",[e._v("O(k)")]),e._v(" where "),t("code",[e._v("k")]),e._v(" is the number of expired games on each block.")]),e._v(" "),t("li",[t("code",[e._v("k <= n")])])]),e._v(" "),t("p",[t("code",[e._v("k")]),e._v(" still is an unbounded number of operations. But if you use the same expiration duration on each game, for "),t("code",[e._v("k")]),e._v(" games to expire together in a block, these "),t("code",[e._v("k")]),e._v(" games would all have to have had a move in the same previous block. Give or take the block before or after. The largest "),t("code",[e._v("EndBlock")]),e._v(" computation will be proportional to the largest regular block in the past in the worst case. This is a reasonable risk to take.")]),e._v(" "),t("p",[e._v("Remember this only works if the expiration duration is the same for all games instead of being a parameter left to a potentially malicious game creator.")]),e._v(" "),t("h2",{attrs:{id:"new-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),t("p",[e._v("How do you implement a FIFO from which you extract elements at random positions? Choose a doubly-linked list for that:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("You need to remember the game ID at the head, to pick expired games, and at the tail, to send back fresh games. The existing "),t("code",[e._v("NextGame")]),e._v(" object is a good place for this as it is already an object and expandable. Just add a bit to its Protobuf declaration:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBOZXh0R2FtZSB7CiAgICAuLi4KICAgIHN0cmluZyBmaWZvSGVhZCA9IDM7IC8vIFdpbGwgY29udGFpbiB0aGUgaW5kZXggb2YgdGhlIGdhbWUgYXQgdGhlIGhlYWQuCiAgICBzdHJpbmcgZmlmb1RhaWwgPSA0OyAvLyBXaWxsIGNvbnRhaW4gdGhlIGluZGV4IG9mIHRoZSBnYW1lIGF0IHRoZSB0YWlsLgp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/proto/checkers/next_game.proto#L11-L12"}})],1),e._v(" "),t("li",[t("p",[e._v("To make extraction possible each game needs to know which other game takes place before it in the FIFO, and which after. The right place to store this double link information is "),t("code",[e._v("StoredGame")]),e._v(". Thus, you add them in the game's Protobuf declaration:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIGJlZm9yZUlkID0gODsgLy8gUGVydGFpbnMgdG8gdGhlIEZJRk8uIFRvd2FyZHMgaGVhZC4KICAgIHN0cmluZyBhZnRlcklkID0gOTsgLy8gUGVydGFpbnMgdG8gdGhlIEZJRk8uIFRvd2FyZHMgdGFpbC4KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/proto/checkers/stored_game.proto#L16-L17"}})],1),e._v(" "),t("li",[t("p",[e._v('There needs to be an "ID" that indicates '),t("em",[e._v("no game")]),e._v(". Let's use "),t("code",[e._v('"-1"')]),e._v(", which you save as a constant:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgTm9GaWZvSWRLZXkgPSAmcXVvdDstMSZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/x/checkers/types/keys.go#L32-L34"}})],1),e._v(" "),t("li",[t("p",[e._v("Adjust the default genesis values, so that it has proper head and tail:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBEZWZhdWx0R2VuZXNpcygpICpHZW5lc2lzU3RhdGUgewogICAgcmV0dXJuICZhbXA7R2VuZXNpc1N0YXRlewogICAgICAgIC4uLgogICAgICAgIE5leHRHYW1lOiAmYW1wO05leHRHYW1lewogICAgICAgICAgICAuLi4KICAgICAgICAgICAgRmlmb0hlYWQ6IE5vRmlmb0lkS2V5LAogICAgICAgICAgICBGaWZvVGFpbDogTm9GaWZvSWRLZXksCiAgICAgICAgfSwKICAgIH0KfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/x/checkers/types/genesis.go#L20-L21"}})],1)]),e._v(" "),t("p",[e._v("To have Ignite CLI and Protobuf recompile the files:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgY2hhaW4gYnVpbGQK"}}),e._v(" "),t("h2",{attrs:{id:"fifo-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fifo-management"}},[e._v("#")]),e._v(" FIFO management")]),e._v(" "),t("p",[e._v("Now that the new fields are created, you need to update them accordingly to keep your FIFO always up-to-date. It's better to create a separate file that encapsulates this knowledge. Create "),t("code",[e._v("x/checkers/keeper/stored_game_in_fifo.go")]),e._v(" with:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("A function to remove from the FIFO:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIFJlbW92ZUZyb21GaWZvKGN0eCBzZGsuQ29udGV4dCwgZ2FtZSAqdHlwZXMuU3RvcmVkR2FtZSwgaW5mbyAqdHlwZXMuTmV4dEdhbWUpIHsKICAgIC8vIERvZXMgaXQgaGF2ZSBhIHByZWRlY2Vzc29yPwogICAgaWYgZ2FtZS5CZWZvcmVJZCAhPSB0eXBlcy5Ob0ZpZm9JZEtleSB7CiAgICAgICAgYmVmb3JlRWxlbWVudCwgZm91bmQgOj0gay5HZXRTdG9yZWRHYW1lKGN0eCwgZ2FtZS5CZWZvcmVJZCkKICAgICAgICBpZiAhZm91bmQgewogICAgICAgICAgICBwYW5pYygmcXVvdDtFbGVtZW50IGJlZm9yZSBpbiBGaWZvIHdhcyBub3QgZm91bmQmcXVvdDspCiAgICAgICAgfQogICAgICAgIGJlZm9yZUVsZW1lbnQuQWZ0ZXJJZCA9IGdhbWUuQWZ0ZXJJZAogICAgICAgIGsuU2V0U3RvcmVkR2FtZShjdHgsIGJlZm9yZUVsZW1lbnQpCiAgICAgICAgaWYgZ2FtZS5BZnRlcklkID09IHR5cGVzLk5vRmlmb0lkS2V5IHsKICAgICAgICAgICAgaW5mby5GaWZvVGFpbCA9IGJlZm9yZUVsZW1lbnQuSW5kZXgKICAgICAgICB9CiAgICB9CiAgICAvLyBEb2VzIGl0IGhhdmUgYSBzdWNjZXNzb3I/CiAgICBpZiBnYW1lLkFmdGVySWQgIT0gdHlwZXMuTm9GaWZvSWRLZXkgewogICAgICAgIGFmdGVyRWxlbWVudCwgZm91bmQgOj0gay5HZXRTdG9yZWRHYW1lKGN0eCwgZ2FtZS5BZnRlcklkKQogICAgICAgIGlmICFmb3VuZCB7CiAgICAgICAgICAgIHBhbmljKCZxdW90O0VsZW1lbnQgYWZ0ZXIgaW4gRmlmbyB3YXMgbm90IGZvdW5kJnF1b3Q7KQogICAgICAgIH0KICAgICAgICBhZnRlckVsZW1lbnQuQmVmb3JlSWQgPSBnYW1lLkJlZm9yZUlkCiAgICAgICAgay5TZXRTdG9yZWRHYW1lKGN0eCwgYWZ0ZXJFbGVtZW50KQogICAgICAgIGlmIGdhbWUuQmVmb3JlSWQgPT0gdHlwZXMuTm9GaWZvSWRLZXkgewogICAgICAgICAgICBpbmZvLkZpZm9IZWFkID0gYWZ0ZXJFbGVtZW50LkluZGV4CiAgICAgICAgfQogICAgfQogICAgZ2FtZS5CZWZvcmVJZCA9IHR5cGVzLk5vRmlmb0lkS2V5CiAgICBnYW1lLkFmdGVySWQgPSB0eXBlcy5Ob0ZpZm9JZEtleQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/x/checkers/keeper/stored_game_in_fifo.go#L9-L36"}}),e._v(" "),t("p",[e._v("The game passed as an argument is "),t("strong",[e._v("not")]),e._v(" saved in storage here, even if it was updated. Only its fields in memory are adjusted. The "),t("em",[e._v("before")]),e._v(" and "),t("em",[e._v("after")]),e._v(" games are saved in storage. It is advised to do a "),t("code",[e._v("SetStoredGame")]),e._v(" after calling this function to avoid having a mix of saves and memory states. The same applies to "),t("code",[e._v("SetNextGame")]),e._v(".")])],1),e._v(" "),t("li",[t("p",[e._v("A function to send to the tail:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoayBLZWVwZXIpIFNlbmRUb0ZpZm9UYWlsKGN0eCBzZGsuQ29udGV4dCwgZ2FtZSAqdHlwZXMuU3RvcmVkR2FtZSwgaW5mbyAqdHlwZXMuTmV4dEdhbWUpIHsKICAgIGlmIGluZm8uRmlmb0hlYWQgPT0gdHlwZXMuTm9GaWZvSWRLZXkgJmFtcDsmYW1wOyBpbmZvLkZpZm9UYWlsID09IHR5cGVzLk5vRmlmb0lkS2V5IHsKICAgICAgICBnYW1lLkJlZm9yZUlkID0gdHlwZXMuTm9GaWZvSWRLZXkKICAgICAgICBnYW1lLkFmdGVySWQgPSB0eXBlcy5Ob0ZpZm9JZEtleQogICAgICAgIGluZm8uRmlmb0hlYWQgPSBnYW1lLkluZGV4CiAgICAgICAgaW5mby5GaWZvVGFpbCA9IGdhbWUuSW5kZXgKICAgIH0gZWxzZSBpZiBpbmZvLkZpZm9IZWFkID09IHR5cGVzLk5vRmlmb0lkS2V5IHx8IGluZm8uRmlmb1RhaWwgPT0gdHlwZXMuTm9GaWZvSWRLZXkgewogICAgICAgIHBhbmljKCZxdW90O0ZpZm8gc2hvdWxkIGhhdmUgYm90aCBoZWFkIGFuZCB0YWlsIG9yIG5vbmUmcXVvdDspCiAgICB9IGVsc2UgaWYgaW5mby5GaWZvVGFpbCA9PSBnYW1lLkluZGV4IHsKICAgICAgICAvLyBOb3RoaW5nIHRvIGRvLCBhbHJlYWR5IGF0IHRhaWwKICAgIH0gZWxzZSB7CiAgICAgICAgLy8gU25pcCBnYW1lIG91dAogICAgICAgIGsuUmVtb3ZlRnJvbUZpZm8oY3R4LCBnYW1lLCBpbmZvKQoKICAgICAgICAvLyBOb3cgYWRkIHRvIHRhaWwKICAgICAgICBjdXJyZW50VGFpbCwgZm91bmQgOj0gay5HZXRTdG9yZWRHYW1lKGN0eCwgaW5mby5GaWZvVGFpbCkKICAgICAgICBpZiAhZm91bmQgewogICAgICAgICAgICBwYW5pYygmcXVvdDtDdXJyZW50IEZpZm8gdGFpbCB3YXMgbm90IGZvdW5kJnF1b3Q7KQogICAgICAgIH0KICAgICAgICBjdXJyZW50VGFpbC5BZnRlcklkID0gZ2FtZS5JbmRleAogICAgICAgIGdhbWUuQmVmb3JlSWQgPSBjdXJyZW50VGFpbC5JbmRleAoKICAgICAgICBpbmZvLkZpZm9UYWlsID0gZ2FtZS5JbmRleAogICAgfQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/x/checkers/keeper/stored_game_in_fifo.go#L39-L63"}})],1)]),e._v(" "),t("h2",{attrs:{id:"use-it"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-it"}},[e._v("#")]),e._v(" Use it")]),e._v(" "),t("p",[e._v("With these functions ready, it is time to use them in the message handlers.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("In the handler when creating a new game, send the new game to the tail because it is freshly created:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCmsuS2VlcGVyLlNlbmRUb0ZpZm9UYWlsKGN0eCwgJmFtcDtzdG9yZWRHYW1lLCAmYW1wO25leHRHYW1lKQprLktlZXBlci5TZXRTdG9yZWRHYW1lKGN0eCwgc3RvcmVkR2FtZSkKLi4uCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/x/checkers/keeper/msg_server_create_game.go#L32"}})],1),e._v(" "),t("li",[t("p",[e._v("In the handler when playing a move, send the game back to the tail because it was freshly updated:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCm5leHRHYW1lLCBmb3VuZCA6PSBrLktlZXBlci5HZXROZXh0R2FtZShjdHgpCmlmICFmb3VuZCB7CiAgICBwYW5pYygmcXVvdDtOZXh0R2FtZSBub3QgZm91bmQmcXVvdDspCn0Kay5LZWVwZXIuU2VuZFRvRmlmb1RhaWwoY3R4LCAmYW1wO3N0b3JlZEdhbWUsICZhbXA7bmV4dEdhbWUpCnN0b3JlZEdhbWUuR2FtZSA9IGdhbWUuU3RyaW5nKCkKLi4uCmsuS2VlcGVyLlNldE5leHRHYW1lKGN0eCwgbmV4dEdhbWUpCi4uLgo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/x/checkers/keeper/msg_server_play_move.go#L58-L68"}})],1),e._v(" "),t("li",[t("p",[e._v("In the handler when rejecting a game, remove the game from the FIFO:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCm5leHRHYW1lLCBmb3VuZCA6PSBrLktlZXBlci5HZXROZXh0R2FtZShjdHgpCmlmICFmb3VuZCB7CiAgICBwYW5pYygmcXVvdDtOZXh0R2FtZSBub3QgZm91bmQmcXVvdDspCn0Kay5LZWVwZXIuUmVtb3ZlRnJvbUZpZm8oY3R4LCAmYW1wO3N0b3JlZEdhbWUsICZhbXA7bmV4dEdhbWUpCmsuS2VlcGVyLlJlbW92ZVN0b3JlZEdhbWUoY3R4LCBtc2cuSWRWYWx1ZSkKLi4uCmsuS2VlcGVyLlNldE5leHRHYW1lKGN0eCwgbmV4dEdhbWUpCi4uLgo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/2343af69cd1f2c22acfac13f46393aa8ce686685/x/checkers/keeper/msg_server_reject_game.go#L34-L42"}})],1)]),e._v(" "),t("p",[e._v("You implemented a FIFO that is updated but never really used.")]),e._v(" "),t("h2",{attrs:{id:"next-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),t("p",[e._v("Now you need to add an expiry date on the games. That's the goal of the "),t("RouterLink",{attrs:{to:"/academy/4-my-own-chain/game-deadline.html"}},[e._v("next section")]),e._v(".")],1)],1)}),[],!1,null,null,null);a.default=s.exports}}]);