(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{756:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"arrays-and-slices-in-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arrays-and-slices-in-go"}},[e._v("#")]),e._v(" Arrays and Slices in Go")]),e._v(" "),a("p",[e._v("In this section, arrays and slices are introduced.")]),e._v(" "),a("h2",{attrs:{id:"arrays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arrays"}},[e._v("#")]),e._v(" Arrays")]),e._v(" "),a("p",[e._v("In Go, the size of an array is a part of the type. Therefore, arrays have a fixed size. The declaration has the following syntax:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dmFyIGFycmF5IFtzaXplXXR5cGUK"}}),e._v(" "),a("p",[e._v("You can access the data with "),a("code",[e._v("array[index]")]),e._v(". You can see this with a cross product:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCmltcG9ydCAoCiAgICAmcXVvdDtmbXQmcXVvdDsKKQpmdW5jIG1haW4oKSB7CiAgICB2MSA6PSBbM11mbG9hdDY0ezcsIDUsIDR9CiAgICB2YXIgdjIgWzNdZmxvYXQ2NAogICAgdjIgPSBbM11mbG9hdDY0ezIsIDQsIDZ9CiAgICBmb3IgdjMsaSA6PSBbLi4uXWZsb2F0NjR7MCwgMCwgMH0sIDA7IGkgJmx0OyBsZW4odjMpOyBpKysgewogICAgICAgIHYzW2ldID0gdjFbKGkgKyAxKSAlIDNdICogdjJbKGkgKyAyKSAlIDNdIC0gdjFbKGkgKyAyKSAlIDNdICogdjJbKGkgKyAxKSAlIDNdCiAgICAgICAgZGVmZXIgZm10LlByaW50ZigmcXVvdDsldFxuJnF1b3Q7LCB2MykKICAgIH0KfQo="}}),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[a("a",{attrs:{href:"https://go.dev/play/p/dHKzLGNNjxC",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("The compiler fits the array depending on the number of elements.")]),e._v(" "),a("HighlightBox",{attrs:{type:"note"}},[a("p",[e._v("The previous example code is not well-written, but it demonstrates different aspects of arrays.\n"),a("br"),a("br"),e._v(" "),a("code",[e._v("len(array)")]),e._v(" is a built-in function that gives the size of an array.\n"),a("br"),a("br"),e._v(" "),a("code",[e._v("defer")]),e._v(" is used to defer the execution of last-in-first-out order until surrounding functions return.")])]),e._v(" "),a("h2",{attrs:{id:"slices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slices"}},[e._v("#")]),e._v(" Slices")]),e._v(" "),a("p",[e._v("In Go, a "),a("em",[e._v("slice")]),e._v(" is an abstraction built on top of arrays. Slices are more flexible than arrays and are used more often than arrays because of this flexibility.")]),e._v(" "),a("p",[e._v("A slice does not have a fixed size. To declare a slice, use the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dmFyIHNsaWNlIFtddHlwZQo="}}),e._v(" "),a("p",[e._v("A slice has a length ("),a("code",[e._v("len(slice)")]),e._v(") and a capacity ("),a("code",[e._v("cap(slice)")]),e._v(").")]),e._v(" "),a("p",[e._v("You can also use a built-in function to declare a slice: "),a("code",[e._v("func make([]type, length, capacity) []type")]),e._v(". This returns a slice with the given length, capacity, and type. It allocates an array, which is referred to by the returned slice.")]),e._v(" "),a("p",[e._v("Now create a simple slice with three vectors, and then add a vector with the built-in "),a("code",[e._v("func append(s []T, vs ...T) [] T")]),e._v(" function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCmltcG9ydCAmcXVvdDtmbXQmcXVvdDsKZnVuYyBtYWluKCkgewogICAgdmVjdG9ycyA6PSBbXXN0cnVjdCB7CiAgICAgICAgeCx5LHogZmxvYXQ2NAogICAgfSB7CiAgICAgICAgeyAxLCAyLCAzIH0sCiAgICAgICAgeyAzLjIsIDQsIDYgfSwKICAgICAgICB7IDQsIDMsIDF9LAogICAgfQogICAgZm10LlByaW50ZigmcXVvdDt0eXBlICUjVCBhbmQgdmFsdWUgJXZcbiZxdW90OywgdmVjdG9ycywgdmVjdG9ycykKICAgIHZlY3RvcnMgPSBhcHBlbmQodmVjdG9ycywgc3RydWN0eyB4LCB5LCB6IGZsb2F0NjQgfXsgNywgNywgNyB9KQogICAgZm10LlByaW50ZigmcXVvdDt0eXBlICUjVCBhbmQgdmFsdWUgJXZcbiZxdW90OywgdmVjdG9yc1szOl0sIHZlY3RvcnNbMzpdKQogICAgZm10LlByaW50ZigmcXVvdDt0eXBlICUjVCBhbmQgdmFsdWUgJXZcbiZxdW90OywgdmVjdG9yc1szXSwgdmVjdG9yc1szXSkKICAgIGZvciBpLCB2IDo9IHJhbmdlIHZlY3RvcnMgewogICAgICAgIGZtdC5QcmludGxuKGksICZxdW90OyA6ICZxdW90OywgdikKICAgIH0KICAgIG51bWJlcnMgOj0gbWFrZShbXWludCwgMTAsIDEwKSAvLyBjcmVhdGUgYSBzbGljZSB3aXRoIGFuIHVuZGVybHlpbmcgYXJyYXkKICAgIGZtdC5QcmludGxuKG51bWJlcnMpCiAgICBmb3IgaSA6PSByYW5nZSBudW1iZXJzIHsKICAgICAgICBudW1iZXJzW2ldID0gaQogICAgfQogICAgZm10LlByaW50bG4obnVtYmVycykKfQo="}}),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[a("a",{attrs:{href:"https://go.dev/play/p/T8Ppscz5YjO",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("You can use "),a("code",[e._v("range")]),e._v(" to iterate over an array, a slice, or a map. "),a("code",[e._v("i")]),e._v(" is the index, and "),a("code",[e._v("v")]),e._v(" is the value of that index.")]),e._v(" "),a("p",[e._v("There is also a built-in "),a("code",[e._v("func copy(dst, src []T) int")]),e._v(" to copy one slice into another and return the number of copied elements.")]),e._v(" "),a("h2",{attrs:{id:"maps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maps"}},[e._v("#")]),e._v(" Maps")]),e._v(" "),a("p",[e._v("Maps are stored key/value pairs. The declaration is as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dmFyIG0gbWFwW2tleVR5cGVddmFsdWVUeXBlCg=="}}),e._v(" "),a("p",[e._v("However, this creates a "),a("code",[e._v("nil")]),e._v(" map, which is not so useful. You can read such a map but not write to it. You use "),a("code",[e._v("make")]),e._v(" to initialize a map so you can write to it. The following is more useful:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"bSA6PSBtYWtlKG1hcFtrZXlUeXBlXXZhbHVlVHlwZSkK"}}),e._v(" "),a("p",[e._v("Now you can work with maps:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"cGFja2FnZSBtYWluCmltcG9ydCAmcXVvdDtmbXQmcXVvdDsKZnVuYyBtYWluKCkgewogICAgYWdlIDo9IG1hcFtzdHJpbmddaW50IHsmcXVvdDttYXgmcXVvdDs6IDI0LCAmcXVvdDt0b20mcXVvdDs6IDI4fQogICAgZm10LlByaW50bG4oJnF1b3Q7bWFwOiZxdW90OywgYWdlKQogICAgbSA6PSBtYWtlKG1hcFtzdHJpbmddZmxvYXQ2NCkKICAgIG1bJnF1b3Q7RSZxdW90O10gID0gMi43MTgyODE4Mjg0CiAgICBtWyZxdW90O1BpJnF1b3Q7XSA9IDMuMTQxNTkyNjUzNQogICAgbVsmcXVvdDtQaGkmcXVvdDtdPSAxLjYxODAzMzk4ODcKICAgIAogICAgZm9yIGtleSwgdiA6PSByYW5nZSBtIHsKICAgICAgICBmbXQuUHJpbnRmKCZxdW90O0tleTogJXYsIFZhbHVlOiAldiwgVmFsdWU6ICV2IFxuJnF1b3Q7LCBrZXksIHYsIG1ba2V5XSkKICAgIH0KICAgIGRlbGV0ZShtLCAmcXVvdDtFJnF1b3Q7KSAvLyBkb2VzIG5vdCByZXR1cm4gYW55dGhpbmcuIEl0IGRvZXMgbm90aGluZywgaWYgdGhlIGtleSBkb2VzIG5vdCBleGlzdC4KICAgIGZtdC5QcmludGxuKCZxdW90O2xlbjomcXVvdDssIGxlbihtKSkKICAgIGZtdC5QcmludGxuKCZxdW90O21hcDomcXVvdDssIG0pCiAgICAKICAgIF8sIG9rIDo9IG1bJnF1b3Q7RSZxdW90O10gLy8gZG9lcyB0aGUga2V5IGV4aXN0cz8KICAgIGZtdC5QcmludGxuKCZxdW90O29rOiZxdW90Oywgb2spCn0K"}}),e._v(" "),a("HighlightBox",{attrs:{type:"tip"}},[a("p",[a("a",{attrs:{href:"https://go.dev/play/p/1Ny9l13nHUg",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test it online"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("The built-in function "),a("code",[e._v("func delete(m map[Type]Type1, key Type)")]),e._v(" deletes the element with the key from the map.")]),e._v(" "),a("HighlightBox",{attrs:{type:"warn"}},[a("p",[e._v("When iterating over maps, the order is not deterministic.")])]),e._v(" "),a("HighlightBox",{attrs:{type:"reading"}},[a("p",[a("strong",[e._v("Further reading:")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.golang.org/go-slices-usage-and-internals",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go slices"),a("OutboundLink")],1)])])]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[e._v("After discovering slices and arrays, you can now dive into some of the useful standard packages Go offers. In the "),a("RouterLink",{attrs:{to:"/academy/golang-intro/6_packages.html"}},[e._v("next section")]),e._v(", you can explore "),a("em",[e._v("fmt")]),e._v(", "),a("em",[e._v("strconv")]),e._v(", and "),a("em",[e._v("errors")]),e._v(".")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);