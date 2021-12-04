(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{764:function(l,Z,b){"use strict";b.r(Z);var c=b(1),g=Object(c.a)({},(function(){var l=this,Z=l.$createElement,b=l._self._c||Z;return b("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[b("h1",{attrs:{id:"create-the-order-book"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#create-the-order-book"}},[l._v("#")]),l._v(" Create the Order Book")]),l._v(" "),b("p",[l._v("In this chapter you implement the code for the order book, for buy orders and sell orders.")]),l._v(" "),b("p",[l._v("In this chapter you will create a "),b("code",[l._v("order_book.go")]),l._v(" file with the implementation for the order book.\nThe order book will allow to publish buy or sell orders. The order book for a certain pair of token has to be registered first. After registering the order book for a pair of token, you can add sell orders and buy orders.\nYou will create the "),b("code",[l._v("sell_order_book.go")]),l._v(" file with the implementation of a sell order book. Sell order books contain sell orders that contain the data of the token denomination and a price you offer to sell a token for.\nYou will create the "),b("code",[l._v("buy_order_book.go")]),l._v(" file with the implementation of a buy order book. Buy order books contain buy orders that contain the data of the token denomination and a price you offer to buy a token for. Buy orders and sell orders will live on different blockchain apps.\nWhen a buy and a sell order match, the exchange will be executed.")]),l._v(" "),b("h2",{attrs:{id:"add-the-order-book"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#add-the-order-book"}},[l._v("#")]),l._v(" Add The Order Book")]),l._v(" "),b("p",[l._v("The protobuffer definition defines the data that an order book has.\nAdd the "),b("code",[l._v("OrderBook")]),l._v(" and "),b("code",[l._v("Order")]),l._v(" messages to the "),b("code",[l._v("order.proto")]),l._v(" file.")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gcHJvdG8vaWJjZGV4L29yZGVyLnByb3RvCnN5bnRheCA9ICZxdW90O3Byb3RvMyZxdW90OzsKcGFja2FnZSB1c2VybmFtZS5pbnRlcmNoYW5nZS5pYmNkZXg7CgpvcHRpb24gZ29fcGFja2FnZSA9ICZxdW90O2dpdGh1Yi5jb20vdXNlcm5hbWUvaW50ZXJjaGFuZ2UveC9pYmNkZXgvdHlwZXMmcXVvdDs7CgptZXNzYWdlIE9yZGVyQm9vayB7CiAgaW50MzIgaWRDb3VudCA9IDE7CiAgcmVwZWF0ZWQgT3JkZXIgb3JkZXJzID0gMjsKfQoKbWVzc2FnZSBPcmRlciB7CiAgaW50MzIgaWQgPSAxOwogIHN0cmluZyBjcmVhdG9yID0gMjsKICBpbnQzMiBhbW91bnQgPSAzOwogIGludDMyIHByaWNlID0gNDsKfQo="}}),l._v(" "),b("p",[l._v("Create a new file "),b("code",[l._v("order_book.go")]),l._v(" in the "),b("code",[l._v("ibcdex")]),l._v(" module "),b("code",[l._v("types")]),l._v(" directory.\nIn this file, you will define the logic to create a new order book.\nThis is the common logic between sell and buy order books.")]),l._v(" "),b("p",[l._v("Create a "),b("code",[l._v("order_book.go")]),l._v(" file and add the code:")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgvdHlwZXMvb3JkZXJfYm9vay5nbwpwYWNrYWdlIHR5cGVzCgppbXBvcnQgKAoJJnF1b3Q7ZXJyb3JzJnF1b3Q7CgkmcXVvdDtzb3J0JnF1b3Q7CikKCmNvbnN0ICgKCU1heEFtb3VudCA9IGludDMyKDEwMDAwMCkKCU1heFByaWNlICA9IGludDMyKDEwMDAwMCkKKQoKdHlwZSBPcmRlcmluZyBpbnQKCmNvbnN0ICgKCUluY3JlYXNpbmcgT3JkZXJpbmcgPSBpb3RhCglEZWNyZWFzaW5nCikKCnZhciAoCglFcnJNYXhBbW91bnQgICAgID0gZXJyb3JzLk5ldygmcXVvdDttYXggYW1vdW50IHJlYWNoZWQmcXVvdDspCglFcnJNYXhQcmljZSAgICAgID0gZXJyb3JzLk5ldygmcXVvdDttYXggcHJpY2UgcmVhY2hlZCZxdW90OykKCUVyclplcm9BbW91bnQgICAgPSBlcnJvcnMuTmV3KCZxdW90O2Ftb3VudCBpcyB6ZXJvJnF1b3Q7KQoJRXJyWmVyb1ByaWNlICAgICA9IGVycm9ycy5OZXcoJnF1b3Q7cHJpY2UgaXMgemVybyZxdW90OykKCUVyck9yZGVyTm90Rm91bmQgPSBlcnJvcnMuTmV3KCZxdW90O29yZGVyIG5vdCBmb3VuZCZxdW90OykKKQoKLy8gY2hlY2tBbW91bnRBbmRQcmljZSBjaGVja3MgY29ycmVjdCBhbW91bnQgb3IgcHJpY2UKZnVuYyBjaGVja0Ftb3VudEFuZFByaWNlKGFtb3VudCBpbnQzMiwgcHJpY2UgaW50MzIpIGVycm9yIHsKCWlmIGFtb3VudCA9PSBpbnQzMigwKSB7CgkJcmV0dXJuIEVyclplcm9BbW91bnQKCX0KCWlmIGFtb3VudCAmZ3Q7IE1heEFtb3VudCB7CgkJcmV0dXJuIEVyck1heEFtb3VudAoJfQoJaWYgcHJpY2UgPT0gaW50MzIoMCkgewoJCXJldHVybiBFcnJaZXJvUHJpY2UKCX0KCWlmIHByaWNlICZndDsgTWF4UHJpY2UgewoJCXJldHVybiBFcnJNYXhQcmljZQoJfQoKCXJldHVybiBuaWwKfQoKZnVuYyBOZXdPcmRlckJvb2soKSBPcmRlckJvb2sgewoJcmV0dXJuIE9yZGVyQm9va3sKCQlJZENvdW50OiAwLAoJfQp9CgovLyBHZXRPcmRlciBnZXRzIHRoZSBvcmRlciBmcm9tIGFuIGluZGV4CmZ1bmMgKGJvb2sgT3JkZXJCb29rKSBHZXRPcmRlcihpbmRleCBpbnQpIChvcmRlciBPcmRlciwgZXJyIGVycm9yKSB7CglpZiBpbmRleCAmZ3Q7PSBsZW4oYm9vay5PcmRlcnMpIHsKCQlyZXR1cm4gb3JkZXIsIEVyck9yZGVyTm90Rm91bmQKCX0KCglyZXR1cm4gKmJvb2suT3JkZXJzW2luZGV4XSwgbmlsCn0KCi8vIEdldE5leHRPcmRlcklEIGdldHMgdGhlIElEIG9mIHRoZSBuZXh0IG9yZGVyIHRvIGFwcGVuZApmdW5jIChib29rIE9yZGVyQm9vaykgR2V0TmV4dE9yZGVySUQoKSBpbnQzMiB7CglyZXR1cm4gYm9vay5JZENvdW50Cn0KCi8vIEdldE9yZGVyRnJvbUlEIGdldHMgYW4gb3JkZXIgZnJvbSB0aGUgYm9vayBmcm9tIGl0cyBpZApmdW5jIChib29rIE9yZGVyQm9vaykgR2V0T3JkZXJGcm9tSUQoaWQgaW50MzIpIChPcmRlciwgZXJyb3IpIHsKCWZvciBfLCBvcmRlciA6PSByYW5nZSBib29rLk9yZGVycyB7CgkJaWYgb3JkZXIuSWQgPT0gaWQgewoJCQlyZXR1cm4gKm9yZGVyLCBuaWwKCQl9Cgl9CglyZXR1cm4gT3JkZXJ7fSwgRXJyT3JkZXJOb3RGb3VuZAp9CgovLyBTZXRPcmRlciBnZXRzIHRoZSBvcmRlciBmcm9tIGFuIGluZGV4CmZ1bmMgKGJvb2sgKk9yZGVyQm9vaykgU2V0T3JkZXIoaW5kZXggaW50LCBvcmRlciBPcmRlcikgZXJyb3IgewoJaWYgaW5kZXggJmd0Oz0gbGVuKGJvb2suT3JkZXJzKSB7CgkJcmV0dXJuIEVyck9yZGVyTm90Rm91bmQKCX0KCglib29rLk9yZGVyc1tpbmRleF0gPSAmYW1wO29yZGVyCgoJcmV0dXJuIG5pbAp9CgovLyBJbmNyZW1lbnROZXh0T3JkZXJJRCB1cGRhdGVzIHRoZSBJRCBjb3VudCBmb3Igb3JkZXJzCmZ1bmMgKGJvb2sgKk9yZGVyQm9vaykgSW5jcmVtZW50TmV4dE9yZGVySUQoKSB7CgkvLyBFdmVuIG51bWJlcnMgdG8gaGF2ZSBkaWZmZXJlbnQgSUQgdGhhbiBidXkgb3JkZXJzCglib29rLklkQ291bnQrKwp9CgovLyBSZW1vdmVPcmRlckZyb21JRCByZW1vdmVzIGFuIG9yZGVyIGZyb20gdGhlIGJvb2sgYW5kIGtlZXAgaXQgb3JkZXJlZApmdW5jIChib29rICpPcmRlckJvb2spIFJlbW92ZU9yZGVyRnJvbUlEKGlkIGludDMyKSBlcnJvciB7Cglmb3IgaSwgb3JkZXIgOj0gcmFuZ2UgYm9vay5PcmRlcnMgewoJCWlmIG9yZGVyLklkID09IGlkIHsKCQkJYm9vay5PcmRlcnMgPSBhcHBlbmQoYm9vay5PcmRlcnNbOmldLCBib29rLk9yZGVyc1tpKzE6XS4uLikKCQkJcmV0dXJuIG5pbAoJCX0KCX0KCXJldHVybiBFcnJPcmRlck5vdEZvdW5kCn0KCi8vIEFwcGVuZE9yZGVyIGluaXRpYWxpemVzIGFuZCBhcHBlbmRzIGEgbmV3IG9yZGVyIGluIGEgYm9vayBmcm9tIG9yZGVyIGluZm9ybWF0aW9uCmZ1bmMgKGJvb2sgKk9yZGVyQm9vaykgYXBwZW5kT3JkZXIoY3JlYXRvciBzdHJpbmcsIGFtb3VudCBpbnQzMiwgcHJpY2UgaW50MzIsIG9yZGVyaW5nIE9yZGVyaW5nKSAoaW50MzIsIGVycm9yKSB7CglpZiBlcnIgOj0gY2hlY2tBbW91bnRBbmRQcmljZShhbW91bnQsIHByaWNlKTsgZXJyICE9IG5pbCB7CgkJcmV0dXJuIDAsIGVycgoJfQoKCS8vIEluaXRpYWxpemUgdGhlIG9yZGVyCgl2YXIgb3JkZXIgT3JkZXIKCW9yZGVyLklkID0gYm9vay5HZXROZXh0T3JkZXJJRCgpCglvcmRlci5DcmVhdG9yID0gY3JlYXRvcgoJb3JkZXIuQW1vdW50ID0gYW1vdW50CglvcmRlci5QcmljZSA9IHByaWNlCgoJLy8gSW5jcmVtZW50IElEIHRyYWNrZXIKCWJvb2suSW5jcmVtZW50TmV4dE9yZGVySUQoKQoKCS8vIEluc2VydCB0aGUgb3JkZXIKCWJvb2suaW5zZXJ0T3JkZXIob3JkZXIsIG9yZGVyaW5nKQoKCXJldHVybiBvcmRlci5JZCwgbmlsCn0KCi8vIGluc2VydE9yZGVyIGluc2VydHMgdGhlIG9yZGVyIGluIHRoZSBib29rIHdpdGggdGhlIHByb3ZpZGVkIG9yZGVyCmZ1bmMgKGJvb2sgKk9yZGVyQm9vaykgaW5zZXJ0T3JkZXIob3JkZXIgT3JkZXIsIG9yZGVyaW5nIE9yZGVyaW5nKSB7CglpZiBsZW4oYm9vay5PcmRlcnMpICZndDsgMCB7CgkJdmFyIGkgaW50CgoJCS8vIGdldCB0aGUgaW5kZXggb2YgdGhlIG5ldyBvcmRlciBkZXBlbmRpbmcgb24gdGhlIHByb3ZpZGVkIG9yZGVyaW5nCgkJaWYgb3JkZXJpbmcgPT0gSW5jcmVhc2luZyB7CgkJCWkgPSBzb3J0LlNlYXJjaChsZW4oYm9vay5PcmRlcnMpLCBmdW5jKGkgaW50KSBib29sIHsgcmV0dXJuIGJvb2suT3JkZXJzW2ldLlByaWNlICZndDsgb3JkZXIuUHJpY2UgfSkKCQl9IGVsc2UgewoJCQlpID0gc29ydC5TZWFyY2gobGVuKGJvb2suT3JkZXJzKSwgZnVuYyhpIGludCkgYm9vbCB7IHJldHVybiBib29rLk9yZGVyc1tpXS5QcmljZSAmbHQ7IG9yZGVyLlByaWNlIH0pCgkJfQoKCQkvLyBpbnNlcnQgb3JkZXIKCQlvcmRlcnMgOj0gYXBwZW5kKGJvb2suT3JkZXJzLCAmYW1wO29yZGVyKQoJCWNvcHkob3JkZXJzW2krMTpdLCBvcmRlcnNbaTpdKQoJCW9yZGVyc1tpXSA9ICZhbXA7b3JkZXIKCQlib29rLk9yZGVycyA9IG9yZGVycwoJfSBlbHNlIHsKCQlib29rLk9yZGVycyA9IGFwcGVuZChib29rLk9yZGVycywgJmFtcDtvcmRlcikKCX0KfQo="}}),l._v(" "),b("h2",{attrs:{id:"add-the-sellorder"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#add-the-sellorder"}},[l._v("#")]),l._v(" Add The Sellorder")]),l._v(" "),b("p",[l._v("Modify the "),b("code",[l._v("sell_order_book.proto")]),l._v(" file to add the order book into the sell order book.\nThe proto definition for the "),b("code",[l._v("SellOrderBook")]),l._v(" should look like follows:")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gcHJvdG8vaWJjZGV4L3NlbGxfb3JkZXJfYm9vay5wcm90bwpzeW50YXggPSAmcXVvdDtwcm90bzMmcXVvdDs7CnBhY2thZ2UgdXNlcm5hbWUuaW50ZXJjaGFuZ2UuaWJjZGV4OwoKb3B0aW9uIGdvX3BhY2thZ2UgPSAmcXVvdDtnaXRodWIuY29tL3VzZXJuYW1lL2ludGVyY2hhbmdlL3gvaWJjZGV4L3R5cGVzJnF1b3Q7OwoKaW1wb3J0ICZxdW90O2liY2RleC9vcmRlci5wcm90byZxdW90OzsgLy8gJmx0Oy0tCgptZXNzYWdlIFNlbGxPcmRlckJvb2sgewogIHN0cmluZyBjcmVhdG9yID0gMTsKICBzdHJpbmcgaW5kZXggPSAyOwogIHN0cmluZyBhbW91bnREZW5vbSA9IDM7CiAgc3RyaW5nIHByaWNlRGVub20gPSA0OwogIE9yZGVyQm9vayBib29rID0gNTsgLy8gJmx0Oy0tCn0K"}}),l._v(" "),b("p",[l._v("For the code of the sell order book, create a "),b("code",[l._v("sell_order_book.go")]),l._v(" file in the "),b("code",[l._v("types")]),l._v(" directory and add the following code:")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9pYmNkZXgvdHlwZXMvc2VsbF9vcmRlcl9ib29rLmdvCnBhY2thZ2UgdHlwZXMKCi8vIE5ld1NlbGxPcmRlckJvb2sgY3JlYXRlcyBhIG5ldyBzZWxsIG9yZGVyIGJvb2sKZnVuYyBOZXdTZWxsT3JkZXJCb29rKEFtb3VudERlbm9tIHN0cmluZywgUHJpY2VEZW5vbSBzdHJpbmcpIFNlbGxPcmRlckJvb2sgewoJYm9vayA6PSBOZXdPcmRlckJvb2soKQoJcmV0dXJuIFNlbGxPcmRlckJvb2t7CgkJQW1vdW50RGVub206IEFtb3VudERlbm9tLAoJCVByaWNlRGVub206IFByaWNlRGVub20sCgkJQm9vazogJmFtcDtib29rLAoJfQp9CgovLyBBcHBlbmRPcmRlciBhcHBlbmRzIGFuIG9yZGVyIGluIHNlbGwgb3JkZXIgYm9vawpmdW5jIChzICpTZWxsT3JkZXJCb29rKSBBcHBlbmRPcmRlcihjcmVhdG9yIHN0cmluZywgYW1vdW50IGludDMyLCBwcmljZSBpbnQzMikgKGludDMyLCBlcnJvcikgewoJcmV0dXJuIHMuQm9vay5hcHBlbmRPcmRlcihjcmVhdG9yLCBhbW91bnQsIHByaWNlLCBEZWNyZWFzaW5nKQp9CgovLyBMaXF1aWRhdGVGcm9tQnV5T3JkZXIgbGlxdWlkYXRlcyB0aGUgZmlyc3Qgc2VsbCBvcmRlciBvZiB0aGUgYm9vayBmcm9tIHRoZSBidXkgb3JkZXIKLy8gaWYgbm8gbWF0Y2ggaXMgZm91bmQsIHJldHVybiBmYWxzZSBmb3IgbWF0Y2gKZnVuYyAocyAqU2VsbE9yZGVyQm9vaykgTGlxdWlkYXRlRnJvbUJ1eU9yZGVyKG9yZGVyIE9yZGVyKSAoCglyZW1haW5pbmdCdXlPcmRlciBPcmRlciwKCWxpcXVpZGF0ZWRTZWxsT3JkZXIgT3JkZXIsCglwdXJjaGFzZSBpbnQzMiwKCW1hdGNoIGJvb2wsCglmaWxsZWQgYm9vbCwKKSB7CglyZW1haW5pbmdCdXlPcmRlciA9IG9yZGVyCgoJLy8gTm8gbWF0Y2ggaWYgbm8gb3JkZXIKCW9yZGVyQ291bnQgOj0gbGVuKHMuQm9vay5PcmRlcnMpCglpZiBvcmRlckNvdW50ID09IDAgewoJCXJldHVybiBvcmRlciwgbGlxdWlkYXRlZFNlbGxPcmRlciwgcHVyY2hhc2UsIGZhbHNlLCBmYWxzZQoJfQoKCS8vIENoZWNrIGlmIG1hdGNoCglsb3dlc3RBc2sgOj0gcy5Cb29rLk9yZGVyc1tvcmRlckNvdW50LTFdCglpZiBvcmRlci5QcmljZSAmbHQ7IGxvd2VzdEFzay5QcmljZSB7CgkJcmV0dXJuIG9yZGVyLCBsaXF1aWRhdGVkU2VsbE9yZGVyLCBwdXJjaGFzZSwgZmFsc2UsIGZhbHNlCgl9CgoJbGlxdWlkYXRlZFNlbGxPcmRlciA9ICpsb3dlc3RBc2sKCgkvLyBDaGVjayBpZiBidXkgb3JkZXIgY2FuIGJlIGVudGlyZWx5IGZpbGxlZAoJaWYgbG93ZXN0QXNrLkFtb3VudCAmZ3Q7PSBvcmRlci5BbW91bnQgewoJCXJlbWFpbmluZ0J1eU9yZGVyLkFtb3VudCA9IDAKCQlsaXF1aWRhdGVkU2VsbE9yZGVyLkFtb3VudCA9IG9yZGVyLkFtb3VudAoJCXB1cmNoYXNlID0gb3JkZXIuQW1vdW50CgoJCS8vIFJlbW92ZSBsb3dlc3QgYXNrIGlmIGl0IGhhcyBiZWVuIGVudGlyZWx5IGxpcXVpZGF0ZWQKCQlsb3dlc3RBc2suQW1vdW50IC09IG9yZGVyLkFtb3VudAoJCWlmIGxvd2VzdEFzay5BbW91bnQgPT0gMCB7CgkJCXMuQm9vay5PcmRlcnMgPSBzLkJvb2suT3JkZXJzWzpvcmRlckNvdW50LTFdCgkJfSBlbHNlIHsKCQkJcy5Cb29rLk9yZGVyc1tvcmRlckNvdW50LTFdID0gbG93ZXN0QXNrCgkJfQoKCQlyZXR1cm4gcmVtYWluaW5nQnV5T3JkZXIsIGxpcXVpZGF0ZWRTZWxsT3JkZXIsIHB1cmNoYXNlLCB0cnVlLCB0cnVlCgl9CgoJLy8gTm90IGVudGlyZWx5IGZpbGxlZAoJcHVyY2hhc2UgPSBsb3dlc3RBc2suQW1vdW50CglzLkJvb2suT3JkZXJzID0gcy5Cb29rLk9yZGVyc1s6b3JkZXJDb3VudC0xXQoJcmVtYWluaW5nQnV5T3JkZXIuQW1vdW50IC09IGxvd2VzdEFzay5BbW91bnQKCglyZXR1cm4gcmVtYWluaW5nQnV5T3JkZXIsIGxpcXVpZGF0ZWRTZWxsT3JkZXIsIHB1cmNoYXNlLCB0cnVlLCBmYWxzZQp9CgovLyBGaWxsQnV5T3JkZXIgdHJ5IHRvIGZpbGwgdGhlIGJ1eSBvcmRlciB3aXRoIHRoZSBvcmRlciBib29rIGFuZCByZXR1cm5zIGFsbCB0aGUgc2lkZSBlZmZlY3RzCmZ1bmMgKHMgKlNlbGxPcmRlckJvb2spIEZpbGxCdXlPcmRlcihvcmRlciBPcmRlcikgKAoJcmVtYWluaW5nQnV5T3JkZXIgT3JkZXIsCglsaXF1aWRhdGVkIFtdT3JkZXIsCglwdXJjaGFzZSBpbnQzMiwKCWZpbGxlZCBib29sLAopIHsKCXZhciBsaXF1aWRhdGVkTGlzdCBbXU9yZGVyCgl0b3RhbFB1cmNoYXNlIDo9IGludDMyKDApCglyZW1haW5pbmdCdXlPcmRlciA9IG9yZGVyCgoJLy8gTGlxdWlkYXRlIGFzIGxvbmcgYXMgdGhlcmUgaXMgbWF0Y2gKCWZvciB7CgkJdmFyIG1hdGNoIGJvb2wKCQl2YXIgbGlxdWlkYXRpb24gT3JkZXIKCQlyZW1haW5pbmdCdXlPcmRlciwgbGlxdWlkYXRpb24sIHB1cmNoYXNlLCBtYXRjaCwgZmlsbGVkID0gcy5MaXF1aWRhdGVGcm9tQnV5T3JkZXIoCgkJCXJlbWFpbmluZ0J1eU9yZGVyLAoJCSkKCQlpZiAhbWF0Y2ggewoJCQlicmVhawoJCX0KCgkJLy8gVXBkYXRlIGdhaW5zCgkJdG90YWxQdXJjaGFzZSArPSBwdXJjaGFzZQoKCQkvLyBVcGRhdGUgbGlxdWlkYXRlZAoJCWxpcXVpZGF0ZWRMaXN0ID0gYXBwZW5kKGxpcXVpZGF0ZWRMaXN0LCBsaXF1aWRhdGlvbikKCgkJaWYgZmlsbGVkIHsKCQkJYnJlYWsKCQl9Cgl9CgoJcmV0dXJuIHJlbWFpbmluZ0J1eU9yZGVyLCBsaXF1aWRhdGVkTGlzdCwgdG90YWxQdXJjaGFzZSwgZmlsbGVkCn0K"}}),l._v(" "),b("h2",{attrs:{id:"add-the-buyorder"}},[b("a",{staticClass:"header-anchor",attrs:{href:"#add-the-buyorder"}},[l._v("#")]),l._v(" Add The Buyorder")]),l._v(" "),b("p",[l._v("Modify the "),b("code",[l._v("buy_order_book.proto")]),l._v(" file to add the order book into the buy order book.\nThe proto definition for the "),b("code",[l._v("BuyOrderBook")]),l._v(" should look like follows:")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gcHJvdG8vaWJjZGV4L2J1eV9vcmRlcl9ib29rLnByb3RvCnN5bnRheCA9ICZxdW90O3Byb3RvMyZxdW90OzsKcGFja2FnZSB1c2VybmFtZS5pbnRlcmNoYW5nZS5pYmNkZXg7CgpvcHRpb24gZ29fcGFja2FnZSA9ICZxdW90O2dpdGh1Yi5jb20vdXNlcm5hbWUvaW50ZXJjaGFuZ2UveC9pYmNkZXgvdHlwZXMmcXVvdDs7CgppbXBvcnQgJnF1b3Q7aWJjZGV4L29yZGVyLnByb3RvJnF1b3Q7OyAvLyAmbHQ7LS0KCm1lc3NhZ2UgQnV5T3JkZXJCb29rIHsKICBzdHJpbmcgY3JlYXRvciA9IDE7CiAgc3RyaW5nIGluZGV4ID0gMjsKICBzdHJpbmcgYW1vdW50RGVub20gPSAzOwogIHN0cmluZyBwcmljZURlbm9tID0gNDsKICBPcmRlckJvb2sgYm9vayA9IDU7IC8vICZsdDstLQp9Cg=="}}),l._v(" "),b("p",[l._v("For the buy order book, create a "),b("code",[l._v("buy_order_book.go")]),l._v(" file in the "),b("code",[l._v("types")]),l._v(" directory and add the following code:")]),l._v(" "),b("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"IC8vIHgvaWJjZGV4L3R5cGVzL2J1eV9vcmRlcl9ib29rLmdvCnBhY2thZ2UgdHlwZXMKCi8vIE5ld0J1eU9yZGVyQm9vayBjcmVhdGVzIGEgbmV3IGJ1eSBvcmRlciBib29rCmZ1bmMgTmV3QnV5T3JkZXJCb29rKEFtb3VudERlbm9tIHN0cmluZywgUHJpY2VEZW5vbSBzdHJpbmcpIEJ1eU9yZGVyQm9vayB7Cglib29rIDo9IE5ld09yZGVyQm9vaygpCglyZXR1cm4gQnV5T3JkZXJCb29rewogICAgICAgIEFtb3VudERlbm9tOiBBbW91bnREZW5vbSwKICAgICAgICBQcmljZURlbm9tOiBQcmljZURlbm9tLAogICAgICAgIEJvb2s6ICZhbXA7Ym9vaywKICAgIH0KfQoKIC8vIEFwcGVuZE9yZGVyIGFwcGVuZHMgYW4gb3JkZXIgaW4gYnV5IG9yZGVyIGJvb2sKIGZ1bmMgKGIgKkJ1eU9yZGVyQm9vaykgQXBwZW5kT3JkZXIoY3JlYXRvciBzdHJpbmcsIGFtb3VudCBpbnQzMiwgcHJpY2UgaW50MzIpIChpbnQzMiwgZXJyb3IpIHsKCSByZXR1cm4gYi5Cb29rLmFwcGVuZE9yZGVyKGNyZWF0b3IsIGFtb3VudCwgcHJpY2UsIEluY3JlYXNpbmcpCiB9CgogLy8gTGlxdWlkYXRlRnJvbVNlbGxPcmRlciBsaXF1aWRhdGVzIHRoZSBmaXJzdCBidXkgb3JkZXIgb2YgdGhlIGJvb2sgZnJvbSB0aGUgc2VsbCBvcmRlcgogLy8gaWYgbm8gbWF0Y2ggaXMgZm91bmQsIHJldHVybiBmYWxzZSBmb3IgbWF0Y2gKIGZ1bmMgKGIgKkJ1eU9yZGVyQm9vaykgTGlxdWlkYXRlRnJvbVNlbGxPcmRlcihvcmRlciBPcmRlcikgKAoJIHJlbWFpbmluZ1NlbGxPcmRlciBPcmRlciwKCSBsaXF1aWRhdGVkQnV5T3JkZXIgT3JkZXIsCgkgZ2FpbiBpbnQzMiwKCSBtYXRjaCBib29sLAoJIGZpbGxlZCBib29sLAogKSB7CgkgcmVtYWluaW5nU2VsbE9yZGVyID0gb3JkZXIKCgkgLy8gTm8gbWF0Y2ggaWYgbm8gb3JkZXIKCSBvcmRlckNvdW50IDo9IGxlbihiLkJvb2suT3JkZXJzKQoJIGlmIG9yZGVyQ291bnQgPT0gMCB7CgkJIHJldHVybiBvcmRlciwgbGlxdWlkYXRlZEJ1eU9yZGVyLCBnYWluLCBmYWxzZSwgZmFsc2UKCSB9CgoJIC8vIENoZWNrIGlmIG1hdGNoCgkgaGlnaGVzdEJpZCA6PSBiLkJvb2suT3JkZXJzW29yZGVyQ291bnQtMV0KCSBpZiBvcmRlci5QcmljZSAmZ3Q7IGhpZ2hlc3RCaWQuUHJpY2UgewoJCSByZXR1cm4gb3JkZXIsIGxpcXVpZGF0ZWRCdXlPcmRlciwgZ2FpbiwgZmFsc2UsIGZhbHNlCgkgfQoKCSBsaXF1aWRhdGVkQnV5T3JkZXIgPSAqaGlnaGVzdEJpZAoKCSAvLyBDaGVjayBpZiBzZWxsIG9yZGVyIGNhbiBiZSBlbnRpcmVseSBmaWxsZWQKCSBpZiBoaWdoZXN0QmlkLkFtb3VudCAmZ3Q7PSBvcmRlci5BbW91bnQgewoJCSByZW1haW5pbmdTZWxsT3JkZXIuQW1vdW50ID0gMAoJCSBsaXF1aWRhdGVkQnV5T3JkZXIuQW1vdW50ID0gb3JkZXIuQW1vdW50CgkJIGdhaW4gPSBvcmRlci5BbW91bnQgKiBoaWdoZXN0QmlkLlByaWNlCgoJCSAvLyBSZW1vdmUgaGlnaGVzdCBiaWQgaWYgaXQgaGFzIGJlZW4gZW50aXJlbHkgbGlxdWlkYXRlZAoJCSBoaWdoZXN0QmlkLkFtb3VudCAtPSBvcmRlci5BbW91bnQKCQkgaWYgaGlnaGVzdEJpZC5BbW91bnQgPT0gMCB7CgkJCSBiLkJvb2suT3JkZXJzID0gYi5Cb29rLk9yZGVyc1s6b3JkZXJDb3VudC0xXQoJCSB9IGVsc2UgewoJCQkgYi5Cb29rLk9yZGVyc1tvcmRlckNvdW50LTFdID0gaGlnaGVzdEJpZAoJCSB9CgkJIHJldHVybiByZW1haW5pbmdTZWxsT3JkZXIsIGxpcXVpZGF0ZWRCdXlPcmRlciwgZ2FpbiwgdHJ1ZSwgdHJ1ZQoJIH0KCgkgLy8gTm90IGVudGlyZWx5IGZpbGxlZAoJIGdhaW4gPSBoaWdoZXN0QmlkLkFtb3VudCAqIGhpZ2hlc3RCaWQuUHJpY2UKCSBiLkJvb2suT3JkZXJzID0gYi5Cb29rLk9yZGVyc1s6b3JkZXJDb3VudC0xXQoJIHJlbWFpbmluZ1NlbGxPcmRlci5BbW91bnQgLT0gaGlnaGVzdEJpZC5BbW91bnQKCgkgcmV0dXJuIHJlbWFpbmluZ1NlbGxPcmRlciwgbGlxdWlkYXRlZEJ1eU9yZGVyLCBnYWluLCB0cnVlLCBmYWxzZQogfQoKCiAvLyBGaWxsU2VsbE9yZGVyIHRyeSB0byBmaWxsIHRoZSBzZWxsIG9yZGVyIHdpdGggdGhlIG9yZGVyIGJvb2sgYW5kIHJldHVybnMgYWxsIHRoZSBzaWRlIGVmZmVjdHMKZnVuYyAoYiAqQnV5T3JkZXJCb29rKSBGaWxsU2VsbE9yZGVyKG9yZGVyIE9yZGVyKSAoCglyZW1haW5pbmdTZWxsT3JkZXIgT3JkZXIsCglsaXF1aWRhdGVkIFtdT3JkZXIsCglnYWluIGludDMyLAoJZmlsbGVkIGJvb2wsCikgewoJdmFyIGxpcXVpZGF0ZWRMaXN0IFtdT3JkZXIKCXRvdGFsR2FpbiA6PSBpbnQzMigwKQoJcmVtYWluaW5nU2VsbE9yZGVyID0gb3JkZXIKCgkvLyBMaXF1aWRhdGUgYXMgbG9uZyBhcyB0aGVyZSBpcyBtYXRjaAoJZm9yIHsKCQl2YXIgbWF0Y2ggYm9vbAoJCXZhciBsaXF1aWRhdGlvbiBPcmRlcgoJCXJlbWFpbmluZ1NlbGxPcmRlciwgbGlxdWlkYXRpb24sIGdhaW4sIG1hdGNoLCBmaWxsZWQgPSBiLkxpcXVpZGF0ZUZyb21TZWxsT3JkZXIoCgkJCXJlbWFpbmluZ1NlbGxPcmRlciwKCQkpCgkJaWYgIW1hdGNoIHsKCQkJYnJlYWsKCQl9CgoJCS8vIFVwZGF0ZSBnYWlucwoJCXRvdGFsR2FpbiArPSBnYWluCgoJCS8vIFVwZGF0ZSBsaXF1aWRhdGVkCgkJbGlxdWlkYXRlZExpc3QgPSBhcHBlbmQobGlxdWlkYXRlZExpc3QsIGxpcXVpZGF0aW9uKQoKCQlpZiBmaWxsZWQgewoJCQlicmVhawoJCX0KCX0KCglyZXR1cm4gcmVtYWluaW5nU2VsbE9yZGVyLCBsaXF1aWRhdGVkTGlzdCwgdG90YWxHYWluLCBmaWxsZWQKfQo="}}),l._v(" "),b("p",[l._v("This finishes your code for the order book module with buy and sell orders.\nIn the next chapters, you will make them IBC compatible.\nYou will have to implement how IBC packets are handled that are sent over a blockchain.\nThese packets will be received and acknowledged by the recipient blockchain.")])],1)}),[],!1,null,null,null);Z.default=g.exports}}]);