(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{730:function(e,t,a){"use strict";a.r(t);var o=a(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keep-an-up-to-date-game-deadline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keep-an-up-to-date-game-deadline"}},[e._v("#")]),e._v(" Keep an Up-To-Date Game Deadline")]),e._v(" "),a("HighlightBox",{attrs:{type:"prerequisite"}},[a("p",[e._v("Make sure you have everything you need before proceeding:")]),e._v(" "),a("ul",[a("li",[e._v("You understand the concepts of "),a("RouterLink",{attrs:{to:"/academy/2-cosmos-concepts/6-protobuf.html"}},[e._v("Protobuf")]),e._v(".")],1),e._v(" "),a("li",[e._v("Go is installed.")]),e._v(" "),a("li",[e._v("You have the checkers blockchain codebase with the game FIFO. If not, follow the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/1-game-fifo.html"}},[e._v("previous steps")]),e._v(" or check out the "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/tree/game-fifo",target:"_blank",rel:"noopener noreferrer"}},[e._v("relevant version"),a("OutboundLink")],1),e._v(".")],1)])]),e._v(" "),a("HighlightBox",{attrs:{type:"learning"}},[a("p",[e._v("In this section, you will:")]),e._v(" "),a("ul",[a("li",[e._v("Implement a deadline.")]),e._v(" "),a("li",[e._v("Work with dates.")]),e._v(" "),a("li",[e._v("Extend your unit tests.")])])]),e._v(" "),a("p",[e._v("In the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/1-game-fifo.html"}},[e._v("previous section")]),e._v(" you introduced a FIFO that keeps the "),a("em",[e._v("oldest")]),e._v(" games at its head and the most recently updated games at its tail.")],1),e._v(" "),a("p",[e._v("Just because a game has not been updated in a while does not mean that it has expired. To ascertain this you need to add a new field to a game, "),a("code",[e._v("deadline")]),e._v(", and test against it.")]),e._v(" "),a("h2",{attrs:{id:"new-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-information"}},[e._v("#")]),e._v(" New information")]),e._v(" "),a("p",[e._v("To prepare the field, add in the "),a("code",[e._v("StoredGame")]),e._v("'s Protobuf definition:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBTdG9yZWRHYW1lIHsKICAgIC4uLgogICAgc3RyaW5nIGRlYWRsaW5lID0gOTsKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/proto/checkers/stored_game.proto#L15"}}),e._v(" "),a("p",[e._v("To have Ignite CLI and Protobuf recompile this file, use:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgZ2VuZXJhdGUgcHJvdG8tZ28K"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC12ICQocHdkKTovY2hlY2tlcnMgLXcgL2NoZWNrZXJzIGNoZWNrZXJzX2kgaWduaXRlIGdlbmVyYXRlIHByb3RvLWdvCg=="}})],1)],1),e._v(" "),a("p",[e._v("On each update the deadline will always be "),a("em",[e._v("now")]),e._v(" plus a fixed duration. In this context, "),a("em",[e._v("now")]),e._v(" refers to the block's time. Declare this duration as a new constant, plus how the date is to be represented - encoded in the saved game as a string:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogICAgTWF4VHVybkR1cmF0aW9uID0gdGltZS5EdXJhdGlvbigyNCAqIDNfNjAwICogMTAwMF8wMDBfMDAwKSAvLyAxIGRheQogICAgRGVhZGxpbmVMYXlvdXQgID0gJnF1b3Q7MjAwNi0wMS0wMiAxNTowNDowNS45OTk5OTk5OTkgKzAwMDAgVVRDJnF1b3Q7CikK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/types/keys.go#L57-L60"}}),e._v(" "),a("h2",{attrs:{id:"date-manipulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date-manipulation"}},[e._v("#")]),e._v(" Date manipulation")]),e._v(" "),a("p",[e._v("Helper functions can encode and decode the deadline in the storage.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Define a new error:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"RXJySW52YWxpZERlYWRsaW5lID0gc2RrZXJyb3JzLlJlZ2lzdGVyKE1vZHVsZU5hbWUsIDExMDksICZxdW90O2RlYWRsaW5lIGNhbm5vdCBiZSBwYXJzZWQ6ICVzJnF1b3Q7KQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/types/errors.go#L20"}})],1),e._v(" "),a("li",[a("p",[e._v("Add your date helpers. A reasonable location to pick is "),a("code",[e._v("full_game.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoc3RvcmVkR2FtZSAqU3RvcmVkR2FtZSkgR2V0RGVhZGxpbmVBc1RpbWUoKSAoZGVhZGxpbmUgdGltZS5UaW1lLCBlcnIgZXJyb3IpIHsKICAgIGRlYWRsaW5lLCBlcnJEZWFkbGluZSA6PSB0aW1lLlBhcnNlKERlYWRsaW5lTGF5b3V0LCBzdG9yZWRHYW1lLkRlYWRsaW5lKQogICAgcmV0dXJuIGRlYWRsaW5lLCBzZGtlcnJvcnMuV3JhcGYoZXJyRGVhZGxpbmUsIEVyckludmFsaWREZWFkbGluZS5FcnJvcigpLCBzdG9yZWRHYW1lLkRlYWRsaW5lKQp9CgpmdW5jIEZvcm1hdERlYWRsaW5lKGRlYWRsaW5lIHRpbWUuVGltZSkgc3RyaW5nIHsKICAgIHJldHVybiBkZWFkbGluZS5VVEMoKS5Gb3JtYXQoRGVhZGxpbmVMYXlvdXQpCn0K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/types/full_game.go#L35-L42"}}),e._v(" "),a("p",[e._v("Note that "),a("code",[e._v("sdkerrors.Wrapf(err, ...)")]),e._v(" conveniently returns "),a("code",[e._v("nil")]),e._v(" if "),a("code",[e._v("err")]),e._v(" is "),a("code",[e._v("nil")]),e._v(".")])],1),e._v(" "),a("li",[a("p",[e._v("At the same time, add this to the "),a("code",[e._v("Validate")]),e._v(" function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCl8sIGVyciA9IHN0b3JlZEdhbWUuUGFyc2VHYW1lKCkKaWYgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCn0KXywgZXJyID0gc3RvcmVkR2FtZS5HZXREZWFkbGluZUFzVGltZSgpCnJldHVybiBlcnIK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/types/full_game.go#L57-L62"}})],1),e._v(" "),a("li",[a("p",[e._v("Add a function that encapsulates how the next deadline is calculated in the same file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBHZXROZXh0RGVhZGxpbmUoY3R4IHNkay5Db250ZXh0KSB0aW1lLlRpbWUgewogICAgcmV0dXJuIGN0eC5CbG9ja1RpbWUoKS5BZGQoTWF4VHVybkR1cmF0aW9uKQp9Cg==",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/types/full_game.go#L44-L46"}})],1)]),e._v(" "),a("h2",{attrs:{id:"updated-deadline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updated-deadline"}},[e._v("#")]),e._v(" Updated deadline")]),e._v(" "),a("p",[e._v("Next, you need to update this new field with its appropriate value:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("At creation, in the message handler for game creation:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCnN0b3JlZEdhbWUgOj0gdHlwZXMuU3RvcmVkR2FtZXsKICAgIC4uLgogICAgRGVhZGxpbmU6IHR5cGVzLkZvcm1hdERlYWRsaW5lKHR5cGVzLkdldE5leHREZWFkbGluZShjdHgpKSwKfQo=",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/keeper/msg_server_create_game.go#L31"}})],1),e._v(" "),a("li",[a("p",[e._v("After a move, in the message handler:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCnN0b3JlZEdhbWUuTW92ZUNvdW50KysKc3RvcmVkR2FtZS5EZWFkbGluZSA9IHR5cGVzLkZvcm1hdERlYWRsaW5lKHR5cGVzLkdldE5leHREZWFkbGluZShjdHgpKQouLi4K",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/keeper/msg_server_play_move.go#L64"}})],1)]),e._v(" "),a("p",[e._v("Confirm that your project still compiles:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBpZ25pdGUgY2hhaW4gYnVpbGQK"}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgcnVuIC0tcm0gLWl0IC0tbmFtZSBjaGVja2VycyAtdiAkKHB3ZCk6L2NoZWNrZXJzIC13IC9jaGVja2VycyBjaGVja2Vyc19pIGlnbml0ZSBjaGFpbiBidWlsZAo="}})],1)],1),e._v(" "),a("h2",{attrs:{id:"unit-tests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unit-tests"}},[e._v("#")]),e._v(" Unit tests")]),e._v(" "),a("p",[e._v("After these changes, your previous unit tests fail. Fix them by adding "),a("code",[e._v("Deadline")]),e._v(" wherever it should be. Do not forget that the time is taken from the block's timestamp. In the case of tests, it is stored in the context's "),a("code",[e._v("ctx.BlockTime()")]),e._v(". In effect, you need to add this single line:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y3R4IDo9IHNkay5VbndyYXBTREtDb250ZXh0KGNvbnRleHQpCi4uLgpyZXF1aXJlLkVxdWFsVmFsdWVzKHQsIHR5cGVzLlN0b3JlZEdhbWV7CiAgICAuLi4KICAgIERlYWRsaW5lOiAgdHlwZXMuRm9ybWF0RGVhZGxpbmUoY3R4LkJsb2NrVGltZSgpLkFkZCh0eXBlcy5NYXhUdXJuRHVyYXRpb24pKSwKfSwgZ2FtZSkK",url:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/keeper/msg_server_reject_game_fifo_test.go#L41"}}),e._v(" "),a("p",[e._v("Also add a couple of unit tests that confirm the "),a("code",[e._v("GetDeadlineAsTime")]),e._v(" function "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/types/full_game_test.go#L103-L117",target:"_blank",rel:"noopener noreferrer"}},[e._v("works as intended"),a("OutboundLink")],1),e._v(" and that the dates saved "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/keeper/msg_server_create_game_test.go#L327-L339",target:"_blank",rel:"noopener noreferrer"}},[e._v("on create"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/b9-checkers-academy-draft/blob/game-deadline/x/checkers/keeper/msg_server_play_move_test.go#L389-L404",target:"_blank",rel:"noopener noreferrer"}},[e._v("on play"),a("OutboundLink")],1),e._v(" are parseable.")]),e._v(" "),a("h2",{attrs:{id:"interact-via-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interact-via-the-cli"}},[e._v("#")]),e._v(" Interact via the CLI")]),e._v(" "),a("p",[e._v("There is not much to test here. Remember that you added a new field, but if your blockchain state already contains games then they are missing the new field:")]),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3RvcmVkLWdhbWUgMQo="}})],1)],1),e._v(" "),a("p",[e._v("This demonstrates some missing information:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCiAgZGVhZGxpbmU6ICZxdW90OyZxdW90OwogIC4uLgo="}}),e._v(" "),a("p",[e._v("In effect, your blockchain state is broken. Examine the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/3-cosmjs-adv/6-migration.html"}},[e._v("section on migrations")]),e._v(" to see how to update your blockchain state to avoid such a breaking change. This broken state still lets you test the update of the deadline on play:")],1),e._v(" "),a("CodeGroup",[a("CodeGroupItem",{attrs:{title:"Local",active:""}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjaGVja2Vyc2QgdHggY2hlY2tlcnMgcGxheS1tb3ZlIDEgMSAyIDIgMyAtLWZyb20gJGFsaWNlCiQgY2hlY2tlcnNkIHF1ZXJ5IGNoZWNrZXJzIHNob3ctc3RvcmVkLWdhbWUgMQo="}})],1),e._v(" "),a("CodeGroupItem",{attrs:{title:"Docker"}},[a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBkb2NrZXIgZXhlYyAtaXQgY2hlY2tlcnMgY2hlY2tlcnNkIHR4IGNoZWNrZXJzIHBsYXktbW92ZSAxIDEgMiAyIDMgLS1mcm9tICRhbGljZQokIGRvY2tlciBleGVjIC1pdCBjaGVja2VycyBjaGVja2Vyc2QgcXVlcnkgY2hlY2tlcnMgc2hvdy1zdG9yZWQtZ2FtZSAxCg=="}})],1)],1),e._v(" "),a("p",[e._v("This contains:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"txt",base64:"Li4uCiAgZGVhZGxpbmU6IDIwMjItMDItMDUgMTU6MjY6MjYuODMyNTMzICswMDAwIFVUQwouLi4K"}}),e._v(" "),a("p",[e._v("In the same vein, you can create a new game and confirm it contains the deadline.")]),e._v(" "),a("HighlightBox",{attrs:{type:"synopsis"}},[a("p",[e._v("To summarize, this section has explored:")]),e._v(" "),a("ul",[a("li",[e._v("How to implement a new "),a("code",[e._v("deadline")]),e._v(" field and work with dates to enable the application to check whether games which have not been recently updated have expired or not.")]),e._v(" "),a("li",[e._v("How the deadline must use the block's time as its reference point, since a non-deterministic "),a("code",[e._v("Date.now()")]),e._v(" would change with each execution.")]),e._v(" "),a("li",[e._v("How to test your code to ensure that it functions as desired.")]),e._v(" "),a("li",[e._v("How to interact with the CLI to create a new game with the deadline field in place")]),e._v(" "),a("li",[e._v("How, if your blockchain contains preexisting games, that the blockchain state is now effectively broken, since the deadline field of those games demonstrates missing information (which can be corrected through migration).")])])]),e._v(" "),a("p",[e._v("Before you can do that, there is one other field you need to add. Discover which in the "),a("RouterLink",{attrs:{to:"/hands-on-exercise/2-ignite-cli-adv/3-game-winner.html"}},[e._v("next section")]),e._v(".--\x3e")],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);