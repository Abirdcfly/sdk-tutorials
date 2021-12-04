(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{754:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"scavenger-hunt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scavenger-hunt"}},[e._v("#")]),e._v(" Scavenger Hunt")]),e._v(" "),o("p",[e._v("If you are ready to try earning more "),o("code",[e._v("XP")]),e._v(" as well as "),o("code",[e._v("brain")]),e._v(" in order to win the NFT Badges you should begin interacting with the Scavenge module. To get the first hint try printing out the questions being asked. These are stored by hashes of the answers. This means that once you think you know the answer, you can try hashing it to see if it matches the one recorded on the blockchain. To retrieve a list of all answer hashes use the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgcXVlcnkgc2NhdmVuZ2UgbGlzdApbCiAgJnF1b3Q7ZmNkZTJiMmVkYmE1NmJmNDA4NjAxZmI3MjFmZTliNWMzMzhkMTBlZTQyOWVhMDRmYWU1NTExYjY4ZmJmOGZiOSZxdW90OywKICAmcXVvdDtmY2RlMmIyZWRiYTU2YmY0MDg2MDFmYjcyMWZlOWI1YzMzOGQxMGVlNDI5ZWEwNGZhZTU1MTFiNjhmYmY4ZmI5JnF1b3Q7LAogICZxdW90O2ZjZGUyYjJlZGJhNTZiZjQwODYwMWZiNzIxZmU5YjVjMzM4ZDEwZWU0MjllYTA0ZmFlNTUxMWI2OGZiZjhmYjkmcXVvdDssCiAgJnF1b3Q7ZmNkZTJiMmVkYmE1NmJmNDA4NjAxZmI3MjFmZTliNWMzMzhkMTBlZTQyOWVhMDRmYWU1NTExYjY4ZmJmOGZiOSZxdW90OywKXQo="}}),e._v(" "),o("p",[e._v("This will show you a list of hashes. Take each of the hashes and request more information about that specific question with the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgcXVlcnkgc2NhdmVuZ2UgZ2V0IGZjZGUyYjJlZGJhNTZiZjQwODYwMWZiNzIxZmU5YjVjMzM4ZDEwZWU0MjllYTA0ZmFlNTUxMWI2OGZiZjhmYjkKewogICZxdW90O2NyZWF0b3ImcXVvdDs6ICZxdW90O2Nvc21vczE3cGw1NWt5Z3ZwM2ducWYyeHF3eWU5bHlzZ3AybW5kdWZ6YXVwNiZxdW90OywKICAmcXVvdDtkZXNjcmlwdGlvbiZxdW90OzogJnF1b3Q7Zm9vJnF1b3Q7LAogICZxdW90O3NvbHV0aW9uSGFzaCZxdW90OzogJnF1b3Q7ZmNkZTJiMmVkYmE1NmJmNDA4NjAxZmI3MjFmZTliNWMzMzhkMTBlZTQyOWVhMDRmYWU1NTExYjY4ZmJmOGZiOSZxdW90OywKICAmcXVvdDtyZXdhcmQmcXVvdDs6IFsKICAgIHsKICAgICAgJnF1b3Q7ZGVub20mcXVvdDs6ICZxdW90O2JyYWluJnF1b3Q7LAogICAgICAmcXVvdDthbW91bnQmcXVvdDs6ICZxdW90OzEmcXVvdDsKICAgIH0KICBdLAogICZxdW90O3NvbHV0aW9uJnF1b3Q7OiAmcXVvdDsmcXVvdDssCiAgJnF1b3Q7c2NhdmVuZ2VyJnF1b3Q7OiAmcXVvdDsmcXVvdDsKfQoK"}}),e._v(" "),o("p",[e._v("This will give you the description of the challenge and start you on your journey to solving the problem. It will also show you whether someone has already beat you to the punch and solved the riddle ahead of you. If you'd like to combine these two commands you can install "),o("code",[e._v("jq")]),e._v(" and use some bash-jitsu as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgcXVlcnkgc2NhdmVuZ2UgbGlzdCB8IGpxICZxdW90Oy5bXSZxdW90OyB8IHhhcmdzIC1JIHt9IGViY2xpIHF1ZXJ5IHNjYXZlbmdlIGdldCB7fQo="}}),e._v(" "),o("p",[e._v("This should get you ready to begin solving the riddles! Once you think you have the answer you can submit it with a commit reveal scheme. This means that you first submit your answer and it is hashed together with your address (that way no one can see what you think the answer is). Following this is the plain text submssion of your answer. At this point the app will hash your submission with your address to make sure you have already commited it. This prevents someone else from submitting your answer by watching the mempool of pending transactions.")]),e._v(" "),o("p",[e._v("Your commit command should look like the following:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgdHggc2NhdmVuZ2UgY29tbWl0U29sdXRpb24gJnF1b3Q7eW91ciBhbnN3ZXImcXVvdDsgLS1mcm9tIHlvdXItbmlja25hbWUK"}}),e._v(" "),o("p",[e._v("This command will hash it on your behalf and submit the transaction after asking you to sign with the key you generated earlier. Once submitted you can confirm it was successful by taking the resulting "),o("code",[e._v("txhash")]),e._v(" (looks like "),o("code",[e._v("9E869380BFD482DE05DD19B6DB00E3DB01B3E60F6422C12356D5F27459C8372C")]),e._v(") and querying the status of the tx as follows:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgcXVlcnkgdHggOUU4NjkzODBCRkQ0ODJERTA1REQxOUI2REIwMEUzREIwMUIzRTYwRjY0MjJDMTIzNTZENUYyNzQ1OUM4MzcyQwo="}}),e._v(" "),o("p",[e._v("You should be able to see a series of events which were triggered when this transaction was sent. If it was successful you can proceed to reveal your answer and claim your reward:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgdHggc2NhdmVuZ2UgcmV2ZWFsU29sdXRpb24gJnF1b3Q7eW91ciBhbnN3ZXImcXVvdDsgLS1mcm9tIHlvdXItbmlja25hbWUK"}}),e._v(" "),o("p",[e._v("This command will build the transaction and submit it after you sign with your key. To check whether the transaction was successful you can run a similar command as we previously did to check the transaction status:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgcXVlcnkgdHggOUU4NjkzODBCRkQ0ODJERTA1REQxOUI2REIwMEUzREIwMUIzRTYwRjY0MjJDMTIzNTZENUYyNzQ1OUM4MzcyQwo="}}),e._v(" "),o("p",[e._v("You could also query the scavange directly to see if your name shows up as the solver:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgcXVlcnkgc2NhdmVuZ2UgZ2V0IGZjZGUyYjJlZGJhNTZiZjQwODYwMWZiNzIxZmU5YjVjMzM4ZDEwZWU0MjllYTA0ZmFlNTUxMWI2OGZiZjhmYjkK"}}),e._v(" "),o("p",[e._v("If you see your name you should be able to confirm that you received the NFT reward by using the following command:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWJjbGkgcXVlcnkgYWNjb3VudCAkKGViY2xpIGtleXMgc2hvdyB5b3VyLW5pY2tuYW1lIC1hKQo="}}),e._v(" "),o("p",[e._v("Now that you've earned the "),o("code",[e._v("XP")]),e._v(" or "),o("code",[e._v("brain")]),e._v(" you can transfer it to your Ethereum Address on the xDai chain. If it is "),o("code",[e._v("XP")]),e._v(", it originated on the xDai side so you will "),o("code",[e._v("burn")]),e._v(" the peggy tokens like we saw before ("),o("strong",[e._v("note")]),e._v(" sadly not possible yet). The "),o("code",[e._v("brain")]),e._v(" tokens are native to the burner chain so they would be locked and minted as wrapped "),o("code",[e._v("brain")]),e._v(" on xDai. The following command demonstrated what that would look like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"undefined",base64:"ZWJjbGkgdHggZXRoYnJpZGdlIGxvY2sgJChlYmNsaSBrZXlzIHNob3cgeW91ci1uaWNrbmFtZSAtYSkgRVRIRVJFVU1fQUREUkVTU19PRl9SRUNJUElFTlQgMTBicmFpbiBcCi0tZnJvbSB5b3VyLW5pY2tuYW1lIFwKLS1ldGhlcmV1bS1jaGFpbi1pZCAxMDAgXAotLXRva2VuLWNvbnRyYWN0LWFkZHJlc3MgMHgxNjRCODhEMTFiRDU5Njk1NmI2YTdCMWY2NjJmMTE4NjRFQzEyMDJlCg=="}}),e._v(" "),o("blockquote",[o("p",[e._v("Notice: You don't have to move the "),o("code",[e._v("brain")]),e._v(" token to win the NFT. We will see who has the most "),o("code",[e._v("brain")]),e._v(" at the end of the weekend and reward the NFT to them, but this does not require the "),o("code",[e._v("brain")]),e._v(" to be on the xDai chain.")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);