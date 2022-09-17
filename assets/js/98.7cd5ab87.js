(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{708:function(e,t,o){"use strict";o.r(t);var s=o(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[e._v("#")]),e._v(" Transactions")]),e._v(" "),o("HighlightBox",{attrs:{type:"learning"}},[o("p",[e._v("In this section you will dive into the various functions and features of making transactions in Cosmos:")]),e._v(" "),o("ul",[o("li",[e._v("Transactions and Messages")]),e._v(" "),o("li",[e._v("Signing Transactions")]),e._v(" "),o("li",[e._v("Generating Transactions")]),e._v(" "),o("li",[e._v("Broadcasting Transactions")]),e._v(" "),o("li",[e._v("Introducing the CLI, the gRPC service, the REST API, and the Tendermint RPC service")])])]),e._v(" "),o("p",[e._v("Transactions are objects created by end-users to trigger state changes in applications. They are comprised of metadata that defines a context, and one or more "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L11-L33",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sdk.Msg")]),o("OutboundLink")],1),e._v(" that trigger state changes within a module through the module’s Protobuf message service.")]),e._v(" "),o("h2",{attrs:{id:"transaction-process-from-an-end-user-perspective"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transaction-process-from-an-end-user-perspective"}},[e._v("#")]),e._v(" Transaction process from an end-user perspective")]),e._v(" "),o("p",[e._v("While there is much to explore as you journey through the stack, begin by understanding the transaction process from a user perspective:")]),e._v(" "),o("Accordion",{attrs:{items:[{title:"Decide",description:"**Decide** on the messages to put into the transaction. This is normally done with the assistance of a wallet or application and a user interface."},{title:"Generate",description:"**Generate** the transaction using the Cosmos SDK's `TxBuilder`. `TxBuilder` is the preferred way to generate a transaction."},{title:"Sign",description:"**Sign** the transaction. Transactions must be signed before a validator includes them in a block."},{title:"Broadcast",description:"**Broadcast** the signed transaction using one of the available interfaces."}]}}),e._v(" "),o("p",[o("strong",[e._v("Deciding")]),e._v(" and "),o("strong",[e._v("signing")]),e._v(" are the main interactions of a user. "),o("strong",[e._v("Generating")]),e._v(" and "),o("strong",[e._v("broadcasting")]),e._v(" are attended to by the user interface and other automation.")]),e._v(" "),o("h2",{attrs:{id:"transaction-objects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#transaction-objects"}},[e._v("#")]),e._v(" Transaction objects")]),e._v(" "),o("p",[e._v("Transaction objects are Cosmos SDK types that implement the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L50-L57",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Tx")]),o("OutboundLink")],1),e._v(" interface. They contain the following methods:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L52",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("GetMsgs")]),o("OutboundLink")],1),e._v(": unwraps the transaction and returns a list of contained "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L11-L33",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sdk.Msg")]),o("OutboundLink")],1),e._v(". One transaction may have one or multiple messages.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L56",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ValidateBasic")]),o("OutboundLink")],1),e._v(": includes lightweight, stateless checks used by the ABCI messages' "),o("code",[e._v("CheckTx")]),e._v(" and "),o("code",[e._v("DeliverTx")]),e._v(" to make sure transactions are not invalid. For example, the auth module's "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/x/auth/legacy/legacytx/stdtx.go#L77-L83",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("StdTx")]),o("OutboundLink")],1),e._v(" "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/x/auth/legacy/legacytx/stdtx.go#L100-L126",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ValidateBasic")]),o("OutboundLink")],1),e._v(" function checks that its transactions are signed by the correct number of signers and that the fees do not exceed the user's maximum.")])]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("This function is different from the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L24",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("ValidateBasic")]),o("OutboundLink")],1),e._v(" functions for "),o("code",[e._v("sdk.Msg")]),e._v(", which perform basic validity checks on messages only. For example, "),o("code",[e._v("runTX")]),e._v(" first runs "),o("code",[e._v("ValidateBasic")]),e._v(" on each message when it checks a transaction created from the auth module. Then it runs the auth module's "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/handler.go#L8",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("AnteHandler")]),o("OutboundLink")],1),e._v(", which calls "),o("code",[e._v("ValidateBasic")]),e._v(" for the transaction itself.")])]),e._v(" "),o("p",[e._v("You should rarely manipulate a "),o("code",[e._v("Tx")]),e._v(" object directly. It is an intermediate type used for transaction generation. Developers usually use the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/client/tx_config.go#L36-L46",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TxBuilder")]),o("OutboundLink")],1),e._v(" interface.")]),e._v(" "),o("h2",{attrs:{id:"messages"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#messages"}},[e._v("#")]),e._v(" Messages")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Transaction messages are not to be confused with ABCI messages, which define interactions between Tendermint and application layers.")])]),e._v(" "),o("p",[e._v("Messages or "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L11-L33",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("sdk.Msg")]),o("OutboundLink")],1),e._v(" are module-specific objects that trigger state transitions within the scope of the module they belong to. Module developers define module messages by adding methods to the Protobuf "),o("code",[e._v("Msg")]),e._v(" service and defining a "),o("code",[e._v("MsgServer")]),e._v(". Each "),o("code",[e._v("sdk.Msg")]),e._v(" is related to exactly one Protobuf "),o("code",[e._v("Msg")]),e._v(" service RPC defined inside each module's "),o("code",[e._v("tx.proto")]),e._v(" file. A Cosmos SDK app router automatically maps every "),o("code",[e._v("sdk.Msg")]),e._v(" to a corresponding RPC service, which routes it to the appropriate method. Protobuf generates a "),o("code",[e._v("MsgServer")]),e._v(" interface for each module's "),o("code",[e._v("Msg")]),e._v(" service and the module developer implements this interface.")]),e._v(" "),o("p",[e._v("This design puts more responsibility on module developers. It allows application developers to reuse common functionalities without having to repetitively implement state transition logic. While messages contain the information for the state transition logic, a transaction's other metadata and relevant information are stored in the "),o("code",[e._v("TxBuilder")]),e._v(" and "),o("code",[e._v("Context")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"signing-transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#signing-transactions"}},[e._v("#")]),e._v(" Signing Transactions")]),e._v(" "),o("p",[e._v("Every message in a transaction must be signed by the addresses specified by its "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx_msg.go#L32",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("GetSigners")]),o("OutboundLink")],1),e._v(". The Cosmos SDK currently allows signing transactions in two different ways:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx/signing/signing.pb.go#L36",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("SIGN_MODE_DIRECT")]),o("OutboundLink")],1),e._v(" (preferred): the most used implementation of the "),o("code",[e._v("Tx")]),e._v(" interface is the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx/tx.pb.go#L32-L42",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf "),o("code",[e._v("Tx")]),o("OutboundLink")],1),e._v(" message, which is used in "),o("code",[e._v("SIGN_MODE_DIRECT")]),e._v(". Once signed by all signers, the "),o("code",[e._v("BodyBytes")]),e._v(", "),o("code",[e._v("AuthInfoBytes")]),e._v(", and "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx/tx.pb.go#L113",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Signatures")]),o("OutboundLink")],1),e._v(" are gathered into "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx/tx.pb.go#L103-L114",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TxRaw")]),o("OutboundLink")],1),e._v(", whose "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx/tx.pb.go#L125-L136",target:"_blank",rel:"noopener noreferrer"}},[e._v("serialized bytes"),o("OutboundLink")],1),e._v(" are broadcast over the network.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/types/tx/signing/signing.pb.go#L43",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),o("OutboundLink")],1),e._v(": the legacy implementation of the "),o("code",[e._v("Tx")]),e._v(" interface is the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/x/auth/legacy/legacytx/stdtx.go#L77-L83",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("StdTx")]),o("OutboundLink")],1),e._v(" struct from "),o("code",[e._v("x/auth")]),e._v(". The document signed by all signers is "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/x/auth/legacy/legacytx/stdsign.go#L24-L32",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("StdSignDoc")]),o("OutboundLink")],1),e._v(", which is encoded into "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/x/auth/legacy/legacytx/stdsign.go#L35-L58",target:"_blank",rel:"noopener noreferrer"}},[e._v("bytes"),o("OutboundLink")],1),e._v(" using Amino JSON. Once all signatures are gathered into "),o("code",[e._v("StdTx")]),e._v(", "),o("code",[e._v("StdTx")]),e._v(" is serialized using Amino JSON and these bytes are broadcast over the network. "),o("strong",[e._v("This method is being deprecated")]),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"generating-transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#generating-transactions"}},[e._v("#")]),e._v(" Generating transactions")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("TxBuilder")]),e._v(" interface contains metadata closely related to the generation of transactions. The end-user can freely set these parameters for the transaction to be generated:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/client/tx_config.go#L39",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Msgs")]),o("OutboundLink")],1),e._v(": the array of messages included in the transaction.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/client/tx_config.go#L43",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("GasLimit")]),o("OutboundLink")],1),e._v(": an option chosen by the users for how to calculate the gas amount they are willing to spend.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/client/tx_config.go#L41",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Memo")]),o("OutboundLink")],1),e._v(": a note or comment to send with the transaction.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/client/tx_config.go#L42",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("FeeAmount")]),o("OutboundLink")],1),e._v(": the maximum amount the user is willing to pay in fees.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/client/tx_config.go#L44",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TimeoutHeight")]),o("OutboundLink")],1),e._v(": the block height until which the transaction is valid.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/9fd866e3820b3510010ae172b682d71594cd8c14/client/tx_config.go#L40",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("Signatures")]),o("OutboundLink")],1),e._v(": the array of signatures from all signers of the transaction.")])]),e._v(" "),o("p",[e._v("As there are currently two modes for signing transactions, there are also two implementations of "),o("code",[e._v("TxBuilder")]),e._v(". There is a wrapper for "),o("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" and the "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/8fc9f76329dd2433d9b258a867500de419522619/x/auth/migrations/legacytx/stdtx_builder.go#L18-L21",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("StdTxBuilder")]),o("OutboundLink")],1),e._v(" for "),o("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(". The two possibilities should normally be hidden because end-users should prefer the overarching "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/a72f6a8d4fcb1328ead8f14e212c95c1c0c6d64d/client/tx_config.go#L25-L31",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TxConfig")]),o("OutboundLink")],1),e._v(" interface. "),o("code",[e._v("TxConfig")]),e._v(" is an "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/a72f6a8d4fcb1328ead8f14e212c95c1c0c6d64d/client/context.go#L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("app-wide"),o("OutboundLink")],1),e._v(" configuration for managing transactions accessible from the context. Most importantly, it holds the information about whether to sign each transaction with "),o("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),o("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(".")]),e._v(" "),o("p",[e._v("A new "),o("code",[e._v("TxBuilder")]),e._v(" will be instantiated with the appropriate sign mode by calling "),o("code",[e._v("txBuilder := txConfig.NewTxBuilder()")]),e._v(". "),o("code",[e._v("TxConfig")]),e._v(" will correctly encode the bytes either using "),o("code",[e._v("SIGN_MODE_DIRECT")]),e._v(" or "),o("code",[e._v("SIGN_MODE_LEGACY_AMINO_JSON")]),e._v(" once "),o("code",[e._v("TxBuilder")]),e._v(" is correctly populated with the setters of the fields described previously.")]),e._v(" "),o("p",[e._v("This is a pseudo-code snippet of how to generate and encode a transaction using the "),o("code",[e._v("TxEncoder()")]),e._v(" method:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHhCdWlsZGVyIDo9IHR4Q29uZmlnLk5ld1R4QnVpbGRlcigpCnR4QnVpbGRlci5TZXRNc2dzKC4uLikgLy8gYW5kIG90aGVyIHNldHRlcnMgb24gdHhCdWlsZGVyCg=="}}),e._v(" "),o("h2",{attrs:{id:"broadcasting-the-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#broadcasting-the-transaction"}},[e._v("#")]),e._v(" Broadcasting the transaction")]),e._v(" "),o("p",[e._v("Once the transaction bytes are generated and signed, there are "),o("strong",[e._v("three primary ways of broadcasting")]),e._v(" the transaction:")]),e._v(" "),o("ul",[o("li",[e._v("Using the command-line interface (CLI).")]),e._v(" "),o("li",[e._v("Using gRPC.")]),e._v(" "),o("li",[e._v("Using REST endpoints.")])]),e._v(" "),o("p",[e._v("Application developers create entrypoints to the application by creating a command-line interface typically found in the application's "),o("code",[e._v("./cmd")]),e._v(" folder, gRPC, and/or REST interface. These interfaces allow users to interact with the application.")]),e._v(" "),o("h3",{attrs:{id:"cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),o("p",[e._v("For the command-line interface (CLI) module developers create subcommands to add as children to the application top-level transaction command "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/56ab4e4c934365662162a91bcf35108a0bd78fef/x/bank/client/cli/tx.go#L29-L60",target:"_blank",rel:"noopener noreferrer"}},[o("code",[e._v("TxCmd")]),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("CLI commands bundle all the steps of transaction processing into one simple command:")]),e._v(" "),o("ul",[o("li",[e._v("Creating messages.")]),e._v(" "),o("li",[e._v("Generating transactions.")]),e._v(" "),o("li",[e._v("Signing.")]),e._v(" "),o("li",[e._v("Broadcasting.")])]),e._v(" "),o("h3",{attrs:{id:"grpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc"}},[e._v("#")]),e._v(" gRPC")]),e._v(" "),o("p",[e._v("The principal usage of gRPC is in the context of module query services. The Cosmos SDK also exposes other module-agnostic gRPC services. One of these is the "),o("code",[e._v("Tx")]),e._v(" service, which exposes a handful of utility functions such as simulating a transaction or querying a transaction, and also one method to "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/run-node/txs.md#broadcasting-a-transaction-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("broadcast transactions"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("See this "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/run-node/txs.md#programmatically-with-go",target:"_blank",rel:"noopener noreferrer"}},[e._v("code example"),o("OutboundLink")],1),e._v(" for more insight.")])]),e._v(" "),o("h3",{attrs:{id:"rest"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[e._v("#")]),e._v(" REST")]),e._v(" "),o("p",[e._v("Each gRPC method has its corresponding REST endpoint generated using gRPC-gateway. Rather than using gRPC, you can also use HTTP to broadcast the same transaction on the "),o("code",[e._v("POST")]),e._v(" "),o("code",[e._v("/cosmos/tx/v1beta1/txs")]),e._v(" endpoint.")]),e._v(" "),o("HighlightBox",{attrs:{type:"tip"}},[o("p",[e._v("See this "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/run-node/txs.md#using-rest",target:"_blank",rel:"noopener noreferrer"}},[e._v("code example"),o("OutboundLink")],1),e._v(" for more details.")])]),e._v(" "),o("h3",{attrs:{id:"tendermint-rpc"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-rpc"}},[e._v("#")]),e._v(" Tendermint RPC")]),e._v(" "),o("p",[e._v("The three methods presented previously are higher abstractions on the Tendermint RPC "),o("code",[e._v("/broadcast_tx_{async,sync,commit}")]),e._v(" endpoints. You can use the "),o("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/#/Tx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint RPC endpoints"),o("OutboundLink")],1),e._v(" to directly broadcast the transaction through Tendermint if you wish to.")]),e._v(" "),o("HighlightBox",{attrs:{type:"info"}},[o("p",[e._v("Tendermint supports the following RPC protocols:")]),e._v(" "),o("ul",[o("li",[e._v("URI over HTTP.")]),e._v(" "),o("li",[e._v("JSONRPC over HTTP.")]),e._v(" "),o("li",[e._v("JSONRPC over WebSockets.")])]),e._v(" "),o("p",[e._v("For more information on broadcasting with Tendermint RPC, see the documentation on "),o("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/#/Tx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint RPC transactions broadcast APIs"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h2",{attrs:{id:"code-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-example"}},[e._v("#")]),e._v(" Code example")]),e._v(" "),o("ExpansionPanel",{attrs:{title:"Show me some code for my checkers blockchain"}},[o("p",[o("RouterLink",{attrs:{to:"/academy/2-main-concepts/architecture.html"}},[e._v("Previously")]),e._v(", the ABCI application knew of a single transaction type: a checkers move with four "),o("code",[e._v("int")]),e._v(". This is no longer sufficient with multiple games. You need to conform to its "),o("code",[e._v("Tx")]),e._v(" expectations, which means that you must create messages which are then placed into a transaction.\n"),o("br"),o("br"),e._v("\nSee the "),o("RouterLink",{attrs:{to:"/academy/2-main-concepts/messages.html"}},[e._v("section on messages")]),e._v(" to learn how to do that.")],1)]),e._v(" "),o("HighlightBox",{attrs:{type:"synopsis"}},[o("p",[e._v("To summarize, this section has explored:")]),e._v(" "),o("ul",[o("li",[e._v("How transactions are objects created by end-users to trigger state changes in an application module through that module's Protobuf message service.")]),e._v(" "),o("li",[e._v("How transaction messages are not to be confused with ABCI messages, which define interactions between Tendermint and application layers.")]),e._v(" "),o("li",[e._v("How "),o("em",[e._v("deciding")]),e._v(" and "),o("em",[e._v("signing")]),e._v(" transactions are the main interactions of a user, whereas "),o("em",[e._v("generating")]),e._v(" and "),o("em",[e._v("broadcasting")]),e._v(" transactions are attended to by the user interface and other automation.")]),e._v(" "),o("li",[e._v("How the modular nature of the Cosmos SDK places more responsibility on "),o("em",[e._v("module")]),e._v(" developers to effectively code transaction processes, so "),o("em",[e._v("application")]),e._v(" developers can reuse common functionalities without having to repetitively implement state transition logic.")])])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);