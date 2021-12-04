(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{755:function(a,t,o){"use strict";o.r(t);var e=o(1),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[o("h1",{attrs:{id:"building-and-starting-a-full-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-and-starting-a-full-node"}},[a._v("#")]),a._v(" Building and Starting a Full Node")]),a._v(" "),o("p",[a._v("To build and start a full node, you build the binary, and then initialize and start a node.")]),a._v(" "),o("h2",{attrs:{id:"building-the-binary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#building-the-binary"}},[a._v("#")]),a._v(" Building the Binary")]),a._v(" "),o("p",[a._v("This testnet repo is "),o("code",[a._v("cosmos/gaia")]),a._v(". This repo provides the functionality of:")]),a._v(" "),o("ul",[o("li",[o("code",[a._v("cosmos/gaia")]),a._v(" the source code behind Cosmos Hub")])]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Clone the code repository:")]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIC0tYnJhbmNoIHY1LjAuNSBodHRwczovL2dpdGh1Yi5jb20vY29zbW9zL2dhaWEK"}}),a._v(" "),o("p",[a._v("You can safely ignore this message:")]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"WW91IGFyZSBpbiAnZGV0YWNoZWQgSEVBRCcgc3RhdGUuLi4K"}})],1),a._v(" "),o("li",[o("p",[a._v("Install the node's binary "),o("code",[a._v("gaiad")]),a._v(":")]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2QgZ2FpYSAmYW1wOyZhbXA7IG1ha2UgaW5zdGFsbAo="}})],1)]),a._v(" "),o("h2",{attrs:{id:"initializing-a-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initializing-a-node"}},[a._v("#")]),a._v(" Initializing a Node")]),a._v(" "),o("p",[a._v("To initialize your node:")]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgaW5pdCBZT1VSX01PTklLRVIK"}}),a._v(" "),o("p",[a._v("where "),o("code",[a._v("YOUR_MONIKER")]),a._v(" is a placeholder for a string that identifies your node. Be sure to replace "),o("code",[a._v("YOUR_MONIKER")]),a._v(" with a self-describing string for your node.")]),a._v(" "),o("h2",{attrs:{id:"starting-a-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#starting-a-node"}},[a._v("#")]),a._v(" Starting a Node")]),a._v(" "),o("ol",[o("li",[o("p",[a._v("Download and save the genesis file in the data directory of your node:")]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtcyBodHRwczovL3JwYy50ZXN0bmV0LmNvc21vcy5uZXR3b3JrL2dlbmVzaXMgfCBqcSAtciAucmVzdWx0LmdlbmVzaXMgJmd0OyB+Ly5nYWlhL2NvbmZpZy9nZW5lc2lzLmpzb24K"}})],1),a._v(" "),o("li",[o("p",[a._v("Add seed nodes using the command that is suitable for your environment.")]),a._v(" "),o("ul",[o("li",[a._v("For operating systems other than macOS:")])]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2VkIC1pICdzL3NlZWRzID0uKi9zZWVkcyA9ICZxdW90O2U2ZmFiMDI5NmMwY2MzMTIyODc1NjgyMmIxNWU5OGNmYTg0ZmY5N2JAcDJwLnRlc3RuZXQuY29zbW9zLm5ldHdvcms6MzE3MjksNjRmZWZjOTg5MTVhYTQzMDQxN2JhODkzYmYxM2JkOGNjMTAxYWVkZkBwMnAudGVzdG5ldC5jb3Ntb3MubmV0d29yazozMjA3MyZxdW90Oy9nJyB+Ly5nYWlhL2NvbmZpZy9jb25maWcudG9tbAo="}}),a._v(" "),o("ul",[o("li",[a._v("For macOS operating systems:")])]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"c2VkIC1pICcnICdzL3NlZWRzID0uKi9zZWVkcyA9ICZxdW90O2U2ZmFiMDI5NmMwY2MzMTIyODc1NjgyMmIxNWU5OGNmYTg0ZmY5N2JAcDJwLnRlc3RuZXQuY29zbW9zLm5ldHdvcms6MzE3MjksNjRmZWZjOTg5MTVhYTQzMDQxN2JhODkzYmYxM2JkOGNjMTAxYWVkZkBwMnAudGVzdG5ldC5jb3Ntb3MubmV0d29yazozMjA3MyZxdW90Oy9nJyB+Ly5nYWlhL2NvbmZpZy9jb25maWcudG9tbAo="}})],1),a._v(" "),o("li",[o("p",[a._v("Start the node:")]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWQgc3RhcnQK"}})],1)]),a._v(" "),o("p",[a._v("Your node starts syncing and over time catches up with the network. By default, your node's RPC is accessible on "),o("a",{attrs:{href:"http://localhost:26657",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:26657"),o("OutboundLink")],1),a._v(".")]),a._v(" "),o("ol",[o("li",[a._v("To verify your node sync status, open http://localhost:26657/status and look for "),o("code",[a._v("result.sync_info.catching_up")]),a._v(" as shown in the last line of this example:")])]),a._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ICAgICZxdW90O3N5bmNfaW5mbyZxdW90OzogewogICAgICAmcXVvdDtsYXRlc3RfYmxvY2tfaGFzaCZxdW90OzogJnF1b3Q7MTY5Mjk5NDgzOThENzg3QUI5Mzg4MDM4MkJFQjVDQTkzMjlBRjhDQjk5RDREQTg2NDYwM0M5RjIwNjhGODY3MCZxdW90OywKICAgICAgJnF1b3Q7bGF0ZXN0X2FwcF9oYXNoJnF1b3Q7OiAmcXVvdDtEMzFFNzM0RTE1RDhENjA2NTQzMjI4ODlCNkM2NkFFOEQ4QjY5RkVCOTQzRkY0M0VGODcyRkVGN0YzRTNDMTk1JnF1b3Q7LAogICAgICAmcXVvdDtsYXRlc3RfYmxvY2tfaGVpZ2h0JnF1b3Q7OiAmcXVvdDs4ODU3OCZxdW90OywKICAgICAgJnF1b3Q7bGF0ZXN0X2Jsb2NrX3RpbWUmcXVvdDs6ICZxdW90OzIwMjEtMDUtMThUMTM6Mzg6MTguMjgxMDMyODk3WiZxdW90OywKICAgICAgJnF1b3Q7ZWFybGllc3RfYmxvY2tfaGFzaCZxdW90OzogJnF1b3Q7QjkyNzUzNjUwODgzMkFBNzk5MUFBOEJERDUzMjA4NEQyNjU3QjU3MDYxMTA1NERGNDY0NzEyNkNEQzJDN0NBOSZxdW90OywKICAgICAgJnF1b3Q7ZWFybGllc3RfYXBwX2hhc2gmcXVvdDs6ICZxdW90O0UzQjBDNDQyOThGQzFDMTQ5QUZCRjRDODk5NkZCOTI0MjdBRTQxRTQ2NDlCOTM0Q0E0OTU5OTFCNzg1MkI4NTUmcXVvdDssCiAgICAgICZxdW90O2VhcmxpZXN0X2Jsb2NrX2hlaWdodCZxdW90OzogJnF1b3Q7MSZxdW90OywKICAgICAgJnF1b3Q7ZWFybGllc3RfYmxvY2tfdGltZSZxdW90OzogJnF1b3Q7MjAyMS0wNS0xM1QwOTo1NzozMy43MTYyODIxOThaJnF1b3Q7LAogICAgICAmcXVvdDtjYXRjaGluZ191cCZxdW90OzogdHJ1ZQogICAgfSwK"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);