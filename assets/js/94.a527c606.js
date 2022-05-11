(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{699:function(e,t,o){"use strict";o.r(t);var a=o(0),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("Dedicate some time to events in the Cosmos SDK: learn what events are, how events are useful, and how events are implemented in applications.")]),e._v(" "),o("p",[e._v("Before diving into events, ensure you understand the concepts covered in the following sections:")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/transactions.html"}},[e._v("Transactions")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("Messages")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/modules.html"}},[e._v("Modules")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/protobuf.html"}},[e._v("Protobuf")])],1)]),e._v(" "),o("p",[e._v("Code examples are provided at the end of this section, which show events implemented in the checkers blockchain.")])]),e._v(" "),o("p",[e._v("An event is an object that contains information about the execution of applications. Events are used by service providers like block explorers and wallets to track the execution of various messages and index transactions.")]),e._v(" "),o("p",[e._v("Events are implemented as an alias of the ABCI "),o("code",[e._v("event")]),e._v(" type in the form "),o("code",[e._v("{eventType}.{attributeKey}={attributeValue}")]),e._v(" in the Cosmos SDK.")]),e._v(" "),o("p",[e._v("Events allow application developers to attach additional information. This means that transactions might be queried using events:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"Ly8gRXZlbnRzIGFsbG93IGFwcGxpY2F0aW9uIGRldmVsb3BlcnMgdG8gYXR0YWNoIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gdG8KLy8gUmVzcG9uc2VCZWdpbkJsb2NrLCBSZXNwb25zZUVuZEJsb2NrLCBSZXNwb25zZUNoZWNrVHgsIGFuZCBSZXNwb25zZURlbGl2ZXJUeC4KLy8gTGF0ZXIsIHRyYW5zYWN0aW9ucyBtYXkgYmUgcXVlcmllZCB1c2luZyB0aGVzZSBldmVudHMuCm1lc3NhZ2UgRXZlbnQgewogIHN0cmluZyAgICAgICAgICAgICAgICAgIHR5cGUgICAgICAgPSAxOwogIHJlcGVhdGVkIEV2ZW50QXR0cmlidXRlIGF0dHJpYnV0ZXMgPSAyIFsKICAgIChnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2UsCiAgICAoZ29nb3Byb3RvLmpzb250YWcpICA9ICZxdW90O2F0dHJpYnV0ZXMsb21pdGVtcHR5JnF1b3Q7CiAgXTsKfQo="}}),e._v(" "),o("h2",{attrs:{id:"structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),o("p",[e._v("Two elements stand out in the previous:")]),e._v(" "),o("ul",[o("li",[e._v("A "),o("code",[e._v("type")]),e._v(" to categorize the event at a high level. For example, the Cosmos SDK uses the "),o("code",[e._v("message")]),e._v(" "),o("em",[e._v("type")]),e._v(" to filter events by "),o("code",[e._v("Msg")]),e._v(".")]),e._v(" "),o("li",[e._v("A list of "),o("code",[e._v("attributes")]),e._v(", which are key-value pairs giving more information on the categorized event. For example, we can filter events by key-value pairs using "),o("code",[e._v("message.action={some_action}")]),e._v(", "),o("code",[e._v("message.module={some_module}")]),e._v(" or "),o("code",[e._v("message.sender={a_sender}")]),e._v(" for the "),o("code",[e._v("message")]),e._v(" type.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("Make sure to add "),o("code",[e._v("'")]),e._v(" (single quotes) around each attribute value to parse the attribute values as strings.")])]),e._v(" "),o("p",[e._v("Events, their type, and attributes are defined on a per-module basis in the module's "),o("code",[e._v("/types/events.go")]),e._v(" file. Each module additionally documents its events under "),o("code",[e._v("spec/xx_events.md")]),e._v(".")]),e._v(" "),o("p",[e._v("Events are returned to the underlying consensus engine in response to the following ABCI messages:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("BeginBlock")])]),e._v(" "),o("li",[o("code",[e._v("EndBlock")])]),e._v(" "),o("li",[o("code",[e._v("CheckTx")])]),e._v(" "),o("li",[o("code",[e._v("DeliverTx")])])]),e._v(" "),o("p",[e._v("Events are managed by an abstraction called the "),o("code",[e._v("EventManager")]),e._v(". Events are triggered from the module's Protobuf "),o("code",[e._v("Msg")]),e._v(" service with "),o("code",[e._v("EventManager")]),e._v(". This abstraction demands further exploration.")]),e._v(" "),o("h2",{attrs:{id:"eventmanager"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eventmanager"}},[e._v("#")]),e._v(" "),o("code",[e._v("EventManager")])]),e._v(" "),o("p",[o("code",[e._v("Eventmanager")]),e._v(" tracks a list of events for the entire execution flow of a transaction, or "),o("code",[e._v("BeginBlock")]),e._v("/"),o("code",[e._v("EndBlock")]),e._v(". "),o("code",[e._v("EventManager")]),e._v(" implements a simple wrapper around a slice of event objects, which can be emitted from and provide useful methods. The most used method for Cosmos SDK module and application developers is "),o("code",[e._v("EmitEvent")]),e._v(".")]),e._v(" "),o("p",[e._v("Module developers should handle event emission via "),o("code",[e._v("EventManager#EmitEvent")]),e._v(" in each message handler and in each "),o("code",[e._v("BeginBlock")]),e._v(" or "),o("code",[e._v("EndBlock")]),e._v(" handler accessed via the "),o("code",[e._v("Context")]),e._v(". Event emission generally follows this pattern:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoZW0gKkV2ZW50TWFuYWdlcikgRW1pdEV2ZW50KGV2ZW50IEV2ZW50KSB7CiAgICBlbS5ldmVudHMgPSBlbS5ldmVudHMuQXBwZW5kRXZlbnQoZXZlbnQpCn0K"}}),e._v(" "),o("p",[e._v("Each module's handler function should also set a new "),o("code",[e._v("EventManager")]),e._v(" to the context to isolate emitted events per message:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdIYW5kbGVyKGtlZXBlciBLZWVwZXIpIHNkay5IYW5kbGVyIHsKICAgIHJldHVybiBmdW5jKGN0eCBzZGsuQ29udGV4dCwgbXNnIHNkay5Nc2cpICgqc2RrLlJlc3VsdCwgZXJyb3IpIHsKICAgICAgICBjdHggPSBjdHguV2l0aEV2ZW50TWFuYWdlcihzZGsuTmV3RXZlbnRNYW5hZ2VyKCkpCiAgICAgICAgc3dpdGNoIG1zZyA6PSBtc2cuKHR5cGUpIHsKICAgICAgICAgICAgLy8gZXZlbnQgdHlwZXMKICAgICAgICB9CiAgICAuLi4KICAgIH0KfQo="}}),e._v(" "),o("h2",{attrs:{id:"subscribing-to-events"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-events"}},[e._v("#")]),e._v(" Subscribing to events")]),e._v(" "),o("p",[e._v("You can use Tendermint's "),o("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/subscription.html#subscribing-to-events-via-websocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("WebSocket"),o("OutboundLink")],1),e._v(" to subscribe to events by calling the "),o("code",[e._v("subscribe")]),e._v(" RPC method.")]),e._v(" "),o("p",[e._v("The main "),o("code",[e._v("eventCategories")]),e._v(" you can subscribe to are:")]),e._v(" "),o("ul",[o("li",[o("strong",[o("code",[e._v("NewBlock")]),e._v(":")]),e._v(" contains events triggered during "),o("code",[e._v("BeginBlock")]),e._v(" and "),o("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),o("li",[o("strong",[o("code",[e._v("Tx")]),e._v(":")]),e._v(" contains events triggered during "),o("code",[e._v("DeliverTx")]),e._v(", the transaction processing.")]),e._v(" "),o("li",[o("strong",[o("code",[e._v("ValidatorSetUpdates")]),e._v(":")]),e._v(" contains updates about the set of validators for the block.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"reading"}},[o("p",[e._v("You can find a full list of event categories in the "),o("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#pkg-constants",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint Go documentation"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("p",[e._v("You can filter for event types and attribute values. For example, a transfer transaction triggers an event of type "),o("code",[e._v("Transfer")]),e._v(" and has "),o("code",[e._v("Recipient")]),e._v(" and "),o("code",[e._v("Sender")]),e._v(" as attributes, as defined in the "),o("code",[e._v("events.go")]),e._v(" file of the "),o("code",[e._v("bank")]),e._v(" module.")]),e._v(" "),o("h2",{attrs:{id:"next-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),o("p",[e._v("You just learned about events, where they are expected, and how to emit or receive them. Look at the code samples below, or go to the "),o("RouterLink",{attrs:{to:"/academy/2-main-concepts/context.html"}},[e._v("next section")]),e._v(" to learn about the "),o("code",[e._v("Context")]),e._v(" object.")],1),e._v(" "),o("ExpansionPanel",{attrs:{title:"Show me some code for my checkers blockchain"}},[o("p",[e._v("It would be good to document a game's lifecycle via events in your checkers blockchain.")]),e._v(" "),o("p",[e._v("For instance, you can emit a specific event such that when creating the game:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dmFyIGN0eCBzZGsuQ29udGV4dApjdHguRXZlbnRNYW5hZ2VyKCkuRW1pdEV2ZW50KAogICAgc2RrLk5ld0V2ZW50KHNkay5FdmVudFR5cGVNZXNzYWdlLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoc2RrLkF0dHJpYnV0ZUtleU1vZHVsZSwgJnF1b3Q7Y2hlY2tlcnMmcXVvdDspLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoc2RrLkF0dHJpYnV0ZUtleUFjdGlvbiwgJnF1b3Q7TmV3R2FtZUNyZWF0ZWQmcXVvdDspLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7Q3JlYXRvciZxdW90OywgbXNnLkNyZWF0b3IpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7SW5kZXgmcXVvdDssIG5ld0luZGV4KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKCZxdW90O1JlZCZxdW90OywgbXNnLlJlZCksCiAgICAgICAgc2RrLk5ld0F0dHJpYnV0ZSgmcXVvdDtCbGFjayZxdW90OywgbXNnLkJsYWNrKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKCZxdW90O1dhZ2VyJnF1b3Q7LCBzdHJjb252LkZvcm1hdFVpbnQobXNnLldhZ2VyLCAxMCkpLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7VG9rZW4mcXVvdDssIG1zZy5Ub2tlbiksCiAgICApLAopCg=="}}),e._v(" "),o("p",[e._v("It is easy to add events to the other transaction types. Events are meant to inform and notify relevant parties.")]),e._v(" "),o("p",[e._v("You should also emit an event for games that have timed out. This is part of their lifecycle after all. You would do that in the end blocker:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4LkV2ZW50TWFuYWdlcigpLkVtaXRFdmVudCgKICAgIHNkay5OZXdFdmVudChzZGsuRXZlbnRUeXBlTWVzc2FnZSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlNb2R1bGUsICZxdW90O2NoZWNrZXJzJnF1b3Q7KSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKHNkay5BdHRyaWJ1dGVLZXlBY3Rpb24sICZxdW90O0dhbWVGb3JmZWl0ZWQmcXVvdDspLAogICAgICAgIHNkay5OZXdBdHRyaWJ1dGUoJnF1b3Q7SWRWYWx1ZSZxdW90Oywgc3RvcmVkR2FtZUlkKSwKICAgICAgICBzZGsuTmV3QXR0cmlidXRlKCZxdW90O1dpbm5lciZxdW90OywgcnVsZXMuTk9fUExBWUVSLkNvbG9yKSwgLy8gT3IgdGhlIHJpZ2h0ZnVsIHdpbm5lci4KICAgICksCikK"}})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);