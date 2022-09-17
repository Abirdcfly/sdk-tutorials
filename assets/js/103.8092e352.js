(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{713:function(e,t,g){"use strict";g.r(t);var d=g(1),o=Object(d.a)({},(function(){var e=this,t=e.$createElement,g=e._self._c||t;return g("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[g("h1",{attrs:{id:"events-emitting-game-information"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#events-emitting-game-information"}},[e._v("#")]),e._v(" Events - Emitting Game Information")]),e._v(" "),g("HighlightBox",{attrs:{type:"prerequisite"}},[g("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),g("ul",[g("li",[e._v("You understand the concepts of "),g("RouterLink",{attrs:{to:"/academy/2-main-concepts/events.html"}},[e._v("events")]),e._v(".")],1),e._v(" "),g("li",[e._v("Go is installed.")]),e._v(" "),g("li",[e._v("You have the checkers blockchain codebase with "),g("code",[e._v("MsgPlayMove")]),e._v(" and its handling. If not, follow the "),g("RouterLink",{attrs:{to:"/academy/3-my-own-chain/play-game.html"}},[e._v("previous steps")]),e._v(" or check out "),g("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/play-move-handler",target:"_blank",rel:"noopener noreferrer"}},[e._v("the relevant version"),g("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),g("HighlightBox",{attrs:{type:"learning"}},[g("p",[e._v("In this section, you will:")]),e._v(" "),g("ul",[g("li",[e._v("Define event types.")]),e._v(" "),g("li",[e._v("Emit events.")]),e._v(" "),g("li",[e._v("Extend unit tests.")])])]),e._v(" "),g("p",[e._v("Now that you have "),g("RouterLink",{attrs:{to:"/academy/3-my-own-chain/play-game.html"}},[e._v("added the possible actions")]),e._v(", including their return values, use events to notify players. Your blockchain can now create and play games. However, it does not inform the outside world about this in a convenient way. That is where events come in - but what do you need to emit them?")],1),e._v(" "),g("p",[e._v("Imagine a potential or current player waiting for their turn. It is not practical to look at all the transactions and search for the ones signifying the player's turn. It is better to listen to known events that let clients determine which player's turn it is.")]),e._v(" "),g("p",[e._v("Adding events to your application is as simple as:")]),e._v(" "),g("ol",[g("li",[e._v("Defining the events you want to use.")]),e._v(" "),g("li",[e._v("Emitting corresponding events as actions unfold.")])]),e._v(" "),g("h2",{attrs:{id:"some-initial-thoughts"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#some-initial-thoughts"}},[e._v("#")]),e._v(" Some initial thoughts")]),e._v(" "),g("p",[e._v("Before you dive into the specifics of the exercise, ask yourself:")]),e._v(" "),g("ul",[g("li",[e._v("Why do actions warrant a detailed event?")]),e._v(" "),g("li",[e._v("What level of detail goes into each event?")]),e._v(" "),g("li",[e._v("How do you make it easy for external parties to understand your events?")]),e._v(" "),g("li",[e._v("At what stage do you emit events?")])]),e._v(" "),g("h2",{attrs:{id:"code-needs"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#code-needs"}},[e._v("#")]),e._v(" Code needs")]),e._v(" "),g("p",[e._v("Now start by thinking about the following:")]),e._v(" "),g("ul",[g("li",[e._v("How do you adjust your code to do all this?")]),e._v(" "),g("li",[e._v("How would you unit-test these new elements?")]),e._v(" "),g("li",[e._v("How would you use Ignite CLI to locally run a one-node blockchain and interact with it via the CLI to see what you get?")])]),e._v(" "),g("p",[e._v("Only focus on the narrow issue of event emission.")]),e._v(" "),g("h2",{attrs:{id:"game-created-event"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#game-created-event"}},[e._v("#")]),e._v(" Game-created event")]),e._v(" "),g("p",[e._v("Start with the event that announces the creation of a new game. The goal is to:")]),e._v(" "),g("ul",[g("li",[e._v("Inform the players about the game.")]),e._v(" "),g("li",[e._v("Make it easy for the players to find the relevant game.")])]),e._v(" "),g("p",[e._v("Define new keys in "),g("code",[e._v("x/checkers/types/keys.go")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgR2FtZUNyZWF0ZWRFdmVudFR5cGUgICAgICA9ICZxdW90O25ldy1nYW1lLWNyZWF0ZWQmcXVvdDsgLy8gSW5kaWNhdGVzIHdoYXQgZXZlbnQgdHlwZSB0byBsaXN0ZW4gdG8KICAgIEdhbWVDcmVhdGVkRXZlbnRDcmVhdG9yICAgPSAmcXVvdDtjcmVhdG9yJnF1b3Q7ICAgICAgICAgIC8vIFN1YnNpZGlhcnkgaW5mb3JtYXRpb24KICAgIEdhbWVDcmVhdGVkRXZlbnRHYW1lSW5kZXggPSAmcXVvdDtnYW1lLWluZGV4JnF1b3Q7ICAgICAgIC8vIFdoYXQgZ2FtZSBpcyByZWxldmFudAogICAgR2FtZUNyZWF0ZWRFdmVudEJsYWNrICAgICA9ICZxdW90O2JsYWNrJnF1b3Q7ICAgICAgICAgICAgLy8gSXMgaXQgcmVsZXZhbnQgdG8gbWU/CiAgICBHYW1lQ3JlYXRlZEV2ZW50UmVkICAgICAgID0gJnF1b3Q7cmVkJnF1b3Q7ICAgICAgICAgICAgICAvLyBJcyBpdCByZWxldmFudCB0byBtZT8KKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/two-events/x/checkers/types/keys.go#L28-L34"}}),e._v(" "),g("p",[e._v("Emit the event in your handler file "),g("code",[e._v("x/checkers/keeper/msg_server_create_game.go")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudCh0eXBlcy5HYW1lQ3JlYXRlZEV2ZW50VHlwZSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLkdhbWVDcmVhdGVkRXZlbnRDcmVhdG9yLCBtc2cuQ3JlYXRvciksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5HYW1lQ3JlYXRlZEV2ZW50R2FtZUluZGV4LCBuZXdJbmRleCksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5HYW1lQ3JlYXRlZEV2ZW50QmxhY2ssIG1zZy5CbGFjayksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5HYW1lQ3JlYXRlZEV2ZW50UmVkLCBtc2cuUmVkKSwKICAgICksCikK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/two-events/x/checkers/keeper/msg_server_create_game.go#L39-L46"}}),e._v(" "),g("p",[e._v("Now you must implement this correspondingly in the GUI, or include a server to listen for such events.")]),e._v(" "),g("h2",{attrs:{id:"player-moved-event"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#player-moved-event"}},[e._v("#")]),e._v(" Player-moved event")]),e._v(" "),g("p",[e._v("The created transaction to play a move informs the opponent about:")]),e._v(" "),g("ul",[g("li",[e._v("Which player is relevant.")]),e._v(" "),g("li",[e._v("Which game the move relates to.")]),e._v(" "),g("li",[e._v("When the move happened.")]),e._v(" "),g("li",[e._v("The move's outcome.")]),e._v(" "),g("li",[e._v("Whether the game was won.")])]),e._v(" "),g("HighlightBox",{attrs:{type:"info"}},[g("p",[e._v("Contrary to the "),g("em",[e._v("create game")]),e._v(" event, which alerted the players about a new game, the players now know which game IDs to watch for. There is no need to repeat the players' addresses, the game ID is information enough.")])]),e._v(" "),g("p",[e._v("You define new keys in "),g("code",[e._v("x/checkers/types/keys.go")]),e._v(" similarly:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgTW92ZVBsYXllZEV2ZW50VHlwZSAgICAgID0gJnF1b3Q7bW92ZS1wbGF5ZWQmcXVvdDsKICAgIE1vdmVQbGF5ZWRFdmVudENyZWF0b3IgICA9ICZxdW90O2NyZWF0b3ImcXVvdDsKICAgIE1vdmVQbGF5ZWRFdmVudEdhbWVJbmRleCA9ICZxdW90O2dhbWUtaW5kZXgmcXVvdDsKICAgIE1vdmVQbGF5ZWRFdmVudENhcHR1cmVkWCA9ICZxdW90O2NhcHR1cmVkLXgmcXVvdDsKICAgIE1vdmVQbGF5ZWRFdmVudENhcHR1cmVkWSA9ICZxdW90O2NhcHR1cmVkLXkmcXVvdDsKICAgIE1vdmVQbGF5ZWRFdmVudFdpbm5lciAgICA9ICZxdW90O3dpbm5lciZxdW90OwopCg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/two-events/x/checkers/types/keys.go#L36-L43"}}),e._v(" "),g("p",[e._v("Emit the event in your file "),g("code",[e._v("x/checkers/keeper/msg_server_play_move.go")]),e._v(":")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudCh0eXBlcy5Nb3ZlUGxheWVkRXZlbnRUeXBlLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuTW92ZVBsYXllZEV2ZW50Q3JlYXRvciwgbXNnLkNyZWF0b3IpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuTW92ZVBsYXllZEV2ZW50R2FtZUluZGV4LCBtc2cuR2FtZUluZGV4KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHR5cGVzLk1vdmVQbGF5ZWRFdmVudENhcHR1cmVkWCwgc3RyY29udi5Gb3JtYXRJbnQoaW50NjQoY2FwdHVyZWQuWCksIDEwKSksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSh0eXBlcy5Nb3ZlUGxheWVkRXZlbnRDYXB0dXJlZFksIHN0cmNvbnYuRm9ybWF0SW50KGludDY0KGNhcHR1cmVkLlkpLCAxMCkpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUodHlwZXMuTW92ZVBsYXllZEV2ZW50V2lubmVyLCBydWxlcy5QaWVjZVN0cmluZ3NbZ2FtZS5XaW5uZXIoKV0pLAogICAgKSwKKQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/two-events/x/checkers/keeper/msg_server_play_move.go#L61-L69"}}),e._v(" "),g("h2",{attrs:{id:"unit-tests"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),g("p",[e._v("The unit tests you have created so far still pass. However you also want to confirm that the events have been emitted in both situations. The events are recorded in the context, so the test is a little bit different. In "),g("code",[e._v("msg_server_create_game_test.go")]),e._v(", add this test:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0Q3JlYXRlMUdhbWVFbWl0dGVkKHQgKnRlc3RpbmcuVCkgewogICAgbXNnU3J2ciwgXywgY29udGV4dCA6PSBzZXR1cE1zZ1NlcnZlckNyZWF0ZUdhbWUodCkKICAgIG1zZ1NydnIuQ3JlYXRlR2FtZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ0NyZWF0ZUdhbWV7CiAgICAgICAgQ3JlYXRvcjogYWxpY2UsCiAgICAgICAgQmxhY2s6ICAgYm9iLAogICAgICAgIFJlZDogICAgIGNhcm9sLAogICAgfSkKICAgIGN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjb250ZXh0KQogICAgcmVxdWlyZS5Ob3ROaWwodCwgY3R4KQogICAgZXZlbnRzIDo9IHNkay5TdHJpbmdpZnlFdmVudHMoY3R4LkV2ZW50TWFuYWdlcigpLkFCQ0lFdmVudHMoKSkKICAgIHJlcXVpcmUuTGVuKHQsIGV2ZW50cywgMSkKICAgIGV2ZW50IDo9IGV2ZW50c1swXQogICAgcmVxdWlyZS5FcXVhbFZhbHVlcyh0LCBzZGsuU3RyaW5nRXZlbnR7CiAgICAgICAgVHlwZTogJnF1b3Q7bmV3LWdhbWUtY3JlYXRlZCZxdW90OywKICAgICAgICBBdHRyaWJ1dGVzOiBbXXNkay5BdHRyaWJ1dGV7CiAgICAgICAgICAgIHtLZXk6ICZxdW90O2NyZWF0b3ImcXVvdDssIFZhbHVlOiBhbGljZX0sCiAgICAgICAgICAgIHtLZXk6ICZxdW90O2dhbWUtaW5kZXgmcXVvdDssIFZhbHVlOiAmcXVvdDsxJnF1b3Q7fSwKICAgICAgICAgICAge0tleTogJnF1b3Q7YmxhY2smcXVvdDssIFZhbHVlOiBib2J9LAogICAgICAgICAgICB7S2V5OiAmcXVvdDtyZWQmcXVvdDssIFZhbHVlOiBjYXJvbH0sCiAgICAgICAgfSwKICAgIH0sIGV2ZW50KQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/two-events/x/checkers/keeper/msg_server_create_game_test.go#L82-L103"}}),e._v(" "),g("p",[e._v("How can you "),g("em",[e._v("guess")]),e._v(" the order of elements? Easily, as you created them in this order. Alternatively, you can "),g("em",[e._v("peek")]),e._v(" by using Visual Studio Code:")]),e._v(" "),g("ol",[g("li",[e._v("Put a breakpoint on the line after "),g("code",[e._v("event := events[0]")]),e._v(".")]),e._v(" "),g("li",[e._v("Run this test in "),g("strong",[e._v("debug mode")]),e._v(": right-click the green arrow next to the test name.")]),e._v(" "),g("li",[e._v("Observe the live values on the left.")])]),e._v(" "),g("p",[g("tm-image",{attrs:{src:"/academy/3-my-own-chain/images/go_test_debug_event_attributes.png"}})],1),e._v(" "),g("p",[e._v("As for the events emitted during the "),g("em",[e._v("play move")]),e._v(" test, there are two of them: one for the creation and the other for the play. Because this is a unit test and each action is not isolated into individual transactions, the context collects all events emitted during the test. It just so happens that the context prepends them - the newest one is at index "),g("code",[e._v("0")]),e._v(". Which is why, when you fetch them, the play event is at "),g("code",[e._v("events[0]")]),e._v(".")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UGxheU1vdmVFbWl0dGVkKHQgKnRlc3RpbmcuVCkgewogICAgbXNnU2VydmVyLCBfLCBjb250ZXh0IDo9IHNldHVwTXNnU2VydmVyV2l0aE9uZUdhbWVGb3JQbGF5TW92ZSh0KQogICAgbXNnU2VydmVyLlBsYXlNb3ZlKGNvbnRleHQsICZhbXA7dHlwZXMuTXNnUGxheU1vdmV7CiAgICAgICAgQ3JlYXRvcjogICBib2IsCiAgICAgICAgR2FtZUluZGV4OiAmcXVvdDsxJnF1b3Q7LAogICAgICAgIEZyb21YOiAgICAgMSwKICAgICAgICBGcm9tWTogICAgIDIsCiAgICAgICAgVG9YOiAgICAgICAyLAogICAgICAgIFRvWTogICAgICAgMywKICAgIH0pCiAgICBjdHggOj0gc2RrLlVud3JhcFNES0NvbnRleHQoY29udGV4dCkKICAgIHJlcXVpcmUuTm90TmlsKHQsIGN0eCkKICAgIGV2ZW50cyA6PSBzZGsuU3RyaW5naWZ5RXZlbnRzKGN0eC5FdmVudE1hbmFnZXIoKS5BQkNJRXZlbnRzKCkpCiAgICByZXF1aXJlLkxlbih0LCBldmVudHMsIDIpCiAgICBldmVudCA6PSBldmVudHNbMF0KICAgIHJlcXVpcmUuRXF1YWxWYWx1ZXModCwgc2RrLlN0cmluZ0V2ZW50ewogICAgICAgIFR5cGU6ICZxdW90O21vdmUtcGxheWVkJnF1b3Q7LAogICAgICAgIEF0dHJpYnV0ZXM6IFtdc2RrLkF0dHJpYnV0ZXsKICAgICAgICAgICAge0tleTogJnF1b3Q7Y3JlYXRvciZxdW90OywgVmFsdWU6IGJvYn0sCiAgICAgICAgICAgIHtLZXk6ICZxdW90O2dhbWUtaW5kZXgmcXVvdDssIFZhbHVlOiAmcXVvdDsxJnF1b3Q7fSwKICAgICAgICAgICAge0tleTogJnF1b3Q7Y2FwdHVyZWQteCZxdW90OywgVmFsdWU6ICZxdW90Oy0xJnF1b3Q7fSwKICAgICAgICAgICAge0tleTogJnF1b3Q7Y2FwdHVyZWQteSZxdW90OywgVmFsdWU6ICZxdW90Oy0xJnF1b3Q7fSwKICAgICAgICAgICAge0tleTogJnF1b3Q7d2lubmVyJnF1b3Q7LCBWYWx1ZTogJnF1b3Q7KiZxdW90O30sCiAgICAgICAgfSwKICAgIH0sIGV2ZW50KQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/two-events/x/checkers/keeper/msg_server_play_move_test.go#L110-L135"}}),e._v(" "),g("p",[e._v("When two players play one after the other, the context collates the attributes of "),g("code",[e._v("move-played")]),e._v(" all together in a single array in an appending fashion, with the older attributes at the lower indices, starting at "),g("code",[e._v("0")]),e._v(". For instance, you have to rely on array slices like "),g("code",[e._v("event.Attributes[5:]")]),e._v(" to test the attributes of the second "),g("code",[e._v("move-played")]),e._v(" event:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBUZXN0UGxheU1vdmUyRW1pdHRlZCh0ICp0ZXN0aW5nLlQpIHsKICAgIG1zZ1NlcnZlciwgXywgY29udGV4dCA6PSBzZXR1cE1zZ1NlcnZlcldpdGhPbmVHYW1lRm9yUGxheU1vdmUodCkKICAgIG1zZ1NlcnZlci5QbGF5TW92ZShjb250ZXh0LCAmYW1wO3R5cGVzLk1zZ1BsYXlNb3ZlewogICAgICAgIENyZWF0b3I6ICAgYm9iLAogICAgICAgIEdhbWVJbmRleDogJnF1b3Q7MSZxdW90OywKICAgICAgICBGcm9tWDogICAgIDEsCiAgICAgICAgRnJvbVk6ICAgICAyLAogICAgICAgIFRvWDogICAgICAgMiwKICAgICAgICBUb1k6ICAgICAgIDMsCiAgICB9KQogICAgbXNnU2VydmVyLlBsYXlNb3ZlKGNvbnRleHQsICZhbXA7dHlwZXMuTXNnUGxheU1vdmV7CiAgICAgICAgQ3JlYXRvcjogICBjYXJvbCwKICAgICAgICBHYW1lSW5kZXg6ICZxdW90OzEmcXVvdDssCiAgICAgICAgRnJvbVg6ICAgICAwLAogICAgICAgIEZyb21ZOiAgICAgNSwKICAgICAgICBUb1g6ICAgICAgIDEsCiAgICAgICAgVG9ZOiAgICAgICA0LAogICAgfSkKICAgIGN0eCA6PSBzZGsuVW53cmFwU0RLQ29udGV4dChjb250ZXh0KQogICAgcmVxdWlyZS5Ob3ROaWwodCwgY3R4KQogICAgZXZlbnRzIDo9IHNkay5TdHJpbmdpZnlFdmVudHMoY3R4LkV2ZW50TWFuYWdlcigpLkFCQ0lFdmVudHMoKSkKICAgIHJlcXVpcmUuTGVuKHQsIGV2ZW50cywgMikKICAgIGV2ZW50IDo9IGV2ZW50c1swXQogICAgcmVxdWlyZS5FcXVhbCh0LCAmcXVvdDttb3ZlLXBsYXllZCZxdW90OywgZXZlbnQuVHlwZSkKICAgIHJlcXVpcmUuRXF1YWxWYWx1ZXModCwgW11zZGsuQXR0cmlidXRlewogICAgICAgIHtLZXk6ICZxdW90O2NyZWF0b3ImcXVvdDssIFZhbHVlOiBjYXJvbH0sCiAgICAgICAge0tleTogJnF1b3Q7Z2FtZS1pbmRleCZxdW90OywgVmFsdWU6ICZxdW90OzEmcXVvdDt9LAogICAgICAgIHtLZXk6ICZxdW90O2NhcHR1cmVkLXgmcXVvdDssIFZhbHVlOiAmcXVvdDstMSZxdW90O30sCiAgICAgICAge0tleTogJnF1b3Q7Y2FwdHVyZWQteSZxdW90OywgVmFsdWU6ICZxdW90Oy0xJnF1b3Q7fSwKICAgICAgICB7S2V5OiAmcXVvdDt3aW5uZXImcXVvdDssIFZhbHVlOiAmcXVvdDsqJnF1b3Q7fSwKICAgIH0sIGV2ZW50LkF0dHJpYnV0ZXNbNTpdKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/two-events/x/checkers/keeper/msg_server_play_move_test.go#L261-L292"}}),e._v(" "),g("p",[e._v("Try these tests:")]),e._v(" "),g("CodeGroup",[g("CodeGroupItem",{attrs:{title:"Local",active:""}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBnbyB0ZXN0IGdpdGh1Yi5jb20vYWxpY2UvY2hlY2tlcnMveC9jaGVja2Vycy9rZWVwZXIK"}})],1),e._v(" "),g("CodeGroupItem",{attrs:{title:"Docker"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgZ28gdGVzdCBnaXRodWIuY29tL2FsaWNlL2NoZWNrZXJzL3gvY2hlY2tlcnMva2VlcGVyCg=="}})],1)],1),e._v(" "),g("h2",{attrs:{id:"interact-with-the-cli"}},[g("a",{staticClass:"header-anchor",attrs:{href:"#interact-with-the-cli"}},[e._v("#")]),e._v(" Interact with the CLI")]),e._v(" "),g("p",[e._v("If you did not do it already, start your chain with Ignite.")]),e._v(" "),g("p",[e._v("Alice made a move. Will Bob's move emit an event?")]),e._v(" "),g("CodeGroup",[g("CodeGroupItem",{attrs:{title:"Local",active:""}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMCA1IDEgNCAtLWZyb20gJGJvYgo="}})],1),e._v(" "),g("CodeGroupItem",{attrs:{title:"Docker"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDAgNSAxIDQgLS1mcm9tICRib2IK"}})],1)],1),e._v(" "),g("p",[e._v("The log is longer and not very readable, but the expected elements are present:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtwbGF5X21vdmUmcXVvdDt9XX0seyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bW92ZS1wbGF5ZWQmcXVvdDssJnF1b3Q7YXR0cmlidXRlcyZxdW90OzpbeyZxdW90O2tleSZxdW90OzomcXVvdDtjcmVhdG9yJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O2Nvc21vczF4ZjZzNjRrYXc3YXQ3dW04bG53ajY1dmFkeHFyNmhueWhyOXY4MyZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDtnYW1lLWluZGV4JnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90OzEmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7Y2FwdHVyZWQteCZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDstMSZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDtjYXB0dXJlZC15JnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90Oy0xJnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O3dpbm5lciZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDsqJnF1b3Q7fV19XX1dJwo="}}),e._v(" "),g("p",[e._v("To parse the events and display them in a more user-friendly way, take the "),g("code",[e._v("txhash")]),e._v(" again:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgdHggNTMxRTU3MDhBMUVGQkUwOEQxNEFCRjk0N0ZCQzg4OEJGQzY5Q0Q2RjA0QTU4OUQ0NzgyMDRCRjNCQTg5MUFCNyAtLW91dHB1dCBqc29uIHwganEgJnF1b3Q7LnJhd19sb2cgfCBmcm9tanNvbiZxdW90Owo="}}),e._v(" "),g("CodeGroup",[g("CodeGroupItem",{attrs:{title:"Local",active:""}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgdHggNTMxRTU3MDhBMUVGQkUwOEQxNEFCRjk0N0ZCQzg4OEJGQzY5Q0Q2RjA0QTU4OUQ0NzgyMDRCRjNCQTg5MUFCNyAtLW91dHB1dCBqc29uIHwganEgJy5yYXdfbG9nIHwgZnJvbWpzb24nCg=="}})],1),e._v(" "),g("CodeGroupItem",{attrs:{title:"Docker"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtjaGVja2Vyc2QgcXVlcnkgdHggNTMxRTU3MDhBMUVGQkUwOEQxNEFCRjk0N0ZCQzg4OEJGQzY5Q0Q2RjA0QTU4OUQ0NzgyMDRCRjNCQTg5MUFCNyAtLW91dHB1dCBqc29uIHwganEgJy5yYXdfbG9nIHwgZnJvbWpzb24nJnF1b3Q7Cg=="}})],1)],1),e._v(" "),g("p",[e._v("This returns something like:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"WwogIHsKICAgICZxdW90O2V2ZW50cyZxdW90OzogWwogICAgICB7CiAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7bWVzc2FnZSZxdW90OywKICAgICAgICAmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7YWN0aW9uJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7cGxheV9tb3ZlJnF1b3Q7CiAgICAgICAgICB9CiAgICAgICAgXQogICAgICB9LAogICAgICB7CiAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7bW92ZS1wbGF5ZWQmcXVvdDssCiAgICAgICAgJnF1b3Q7YXR0cmlidXRlcyZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2NyZWF0b3ImcXVvdDssCiAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxeGY2czY0a2F3N2F0N3VtOGxud2o2NXZhZHhxcjZobnlocjl2ODMmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7Z2FtZS1pbmRleCZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7Y2FwdHVyZWQteCZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90Oy0xJnF1b3Q7CiAgICAgICAgICB9LAogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2NhcHR1cmVkLXkmcXVvdDssCiAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDstMSZxdW90OwogICAgICAgICAgfSwKICAgICAgICAgIHsKICAgICAgICAgICAgJnF1b3Q7a2V5JnF1b3Q7OiAmcXVvdDt3aW5uZXImcXVvdDssCiAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDsqJnF1b3Q7CiAgICAgICAgICB9CiAgICAgICAgXQogICAgICB9CiAgICBdCiAgfQpdCg=="}}),e._v(" "),g("p",[e._v("As you can see, no pieces were captured. However, it turns out that Bob placed his piece ready to be captured by Alice:")]),e._v(" "),g("CodeGroup",[g("CodeGroupItem",{attrs:{title:"Linux",active:""}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuc3RvcmVkR2FtZS5ib2FyZCZxdW90OyB8IHNlZCAncy8mcXVvdDsvL2cnIHwgc2VkICdzL3wvXG4vZycK"}})],1),e._v(" "),g("CodeGroupItem",{attrs:{title:"Docker"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgYmFzaCAtYyAmcXVvdDtjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSBcJnF1b3Q7LnN0b3JlZEdhbWUuYm9hcmRcJnF1b3Q7IHwgc2VkICdzL1wmcXVvdDsvL2cnIHwgc2VkICdzL3wvXG4vZycmcXVvdDsK"}})],1),e._v(" "),g("CodeGroupItem",{attrs:{title:"Mac"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxIC0tb3V0cHV0IGpzb24gfCBqcSAmcXVvdDsuc3RvcmVkR2FtZS5ib2FyZCZxdW90OyB8IHNlZCAncy8mcXVvdDsvL2cnIHwgc2VkICdzL3wvXCckJ1xuL2cnCg=="}})],1)],1),e._v(" "),g("p",[e._v("Which prints:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"KmIqYipiKmIKYipiKmIqYioKKioqYipiKmIKKipiKioqKioKKnIqKioqKiogICAgJmx0Oy0tIFJlYWR5IHRvIGJlIGNhcHR1cmVkCioqcipyKnIqCipyKnIqcipyCnIqcipyKnIqCg=="}}),e._v(" "),g("p",[e._v("The rules of the game included in this project mandate that the player captures a piece when possible. So Alice captures the piece:")]),e._v(" "),g("CodeGroup",[g("CodeGroupItem",{attrs:{title:"Local",active:""}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMiAzIDAgNSAtLWZyb20gJGFsaWNlCg=="}})],1),e._v(" "),g("CodeGroupItem",{attrs:{title:"Docker"}},[g("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDIgMyAwIDUgLS1mcm9tICRhbGljZQo="}})],1)],1),e._v(" "),g("p",[e._v("This returns:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCnJhd19sb2c6ICdbeyZxdW90O2V2ZW50cyZxdW90OzpbeyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bWVzc2FnZSZxdW90OywmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7Olt7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2FjdGlvbiZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDtwbGF5X21vdmUmcXVvdDt9XX0seyZxdW90O3R5cGUmcXVvdDs6JnF1b3Q7bW92ZS1wbGF5ZWQmcXVvdDssJnF1b3Q7YXR0cmlidXRlcyZxdW90OzpbeyZxdW90O2tleSZxdW90OzomcXVvdDtjcmVhdG9yJnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90O2Nvc21vczFxeGV1MGFjbHBsNDU0MjlhZXZlaDN0NGU3eTlnaHIyMnI1ZDlyMiZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDtnYW1lLWluZGV4JnF1b3Q7LCZxdW90O3ZhbHVlJnF1b3Q7OiZxdW90OzEmcXVvdDt9LHsmcXVvdDtrZXkmcXVvdDs6JnF1b3Q7Y2FwdHVyZWQteCZxdW90OywmcXVvdDt2YWx1ZSZxdW90OzomcXVvdDsxJnF1b3Q7fSx7JnF1b3Q7a2V5JnF1b3Q7OiZxdW90O2NhcHR1cmVkLXkmcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7NCZxdW90O30seyZxdW90O2tleSZxdW90OzomcXVvdDt3aW5uZXImcXVvdDssJnF1b3Q7dmFsdWUmcXVvdDs6JnF1b3Q7KiZxdW90O31dfV19XScK"}}),e._v(" "),g("p",[e._v("When formatted for clarity, you see the following::")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"WwogIHsKICAgICZxdW90O2V2ZW50cyZxdW90OzogWwogICAgICB7CiAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7bWVzc2FnZSZxdW90OywKICAgICAgICAmcXVvdDthdHRyaWJ1dGVzJnF1b3Q7OiBbCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7YWN0aW9uJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7cGxheV9tb3ZlJnF1b3Q7CiAgICAgICAgICB9CiAgICAgICAgXQogICAgICB9LAogICAgICB7CiAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7bW92ZS1wbGF5ZWQmcXVvdDssCiAgICAgICAgJnF1b3Q7YXR0cmlidXRlcyZxdW90OzogWwogICAgICAgICAgewogICAgICAgICAgICAmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2NyZWF0b3ImcXVvdDssCiAgICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiAmcXVvdDtjb3Ntb3MxcXhldTBhY2xwbDQ1NDI5YWV2ZWgzdDRlN3k5Z2hyMjJyNWQ5cjImcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7Z2FtZS1pbmRleCZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7Y2FwdHVyZWQteCZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7Y2FwdHVyZWQteSZxdW90OywKICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90OzQmcXVvdDsKICAgICAgICAgIH0sCiAgICAgICAgICB7CiAgICAgICAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7d2lubmVyJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7KiZxdW90OwogICAgICAgICAgfQogICAgICAgIF0KICAgICAgfQogICAgXQogIH0KXQo="}}),e._v(" "),g("p",[e._v("Correct: Alice captured a piece and the board now looks like this:")]),e._v(" "),g("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"KmIqYipiKmIKYipiKmIqYioKKioqYipiKmIKKioqKioqKioKKioqKioqKioKYipyKnIqcioKKnIqcipyKnIKcipyKnIqcioK"}}),e._v(" "),g("p",[e._v("This confirms that the "),g("em",[e._v("play")]),e._v(" event is emitted as expected. You can confirm the same for the "),g("em",[e._v("game created")]),e._v(" event.")]),e._v(" "),g("p",[e._v("When you are done with this exercise you can stop Ignite's "),g("code",[e._v("chain serve.")])]),e._v(" "),g("HighlightBox",{attrs:{type:"synopsis"}},[g("p",[e._v("To summarize, this section has explored:")]),e._v(" "),g("ul",[g("li",[e._v("How to define event types and then emit events to cause the UI to notify players of game actions as they occur, such as creating games and playing moves.")]),e._v(" "),g("li",[e._v("How listening to known events which let clients determine which player must move next is better than the impractical alternative of examining all transactions to search for the ones which signify a player's turn.")]),e._v(" "),g("li",[e._v("How to define a Game-created event that will notify the participating players and make it easy for them to find the game.")]),e._v(" "),g("li",[e._v("How to define a Player-moved event that will indicate which player and game is involved, when the move occurred, the move's outcome, and whether the game was won as a result.")]),e._v(" "),g("li",[e._v("How to test your code to ensure that it functions as desired.")]),e._v(" "),g("li",[e._v("How to interact with the CLI to check the effectiveness of an emitted event.")])])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);