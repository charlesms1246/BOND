<h1 align='center'>THE IDEA</h1>
<br>

Name: **Bond**

Track: **Extend Limit Order Protocol**

The base idea is to implement features of the real world stock market into Web3 trading using the 1inch Limit Order Protocol and other API's, while making it as simple as possible for the people who are new to the Web3 platform

The expected outcome is as follows
1. Implement a API wrapper around Limit Order protocol and Orderbook API for the following:
    1. Stop Loss
    2. Take Profit
    3. Time/hour limited orders
    4. Trailing Stop Order
    5. Stop-limit order
    6. Trailing buy order 
2. Use Chart API to view live chart info on the site
3. Use Balance API to view wallet balance of the use
4. Use History API for transaction History

For Debugging: Traces API

Tech Stack:
1. Node JS
2. Express JS
3. React JS
4. TypeScript

<h1 align='center'>PROBLEM STATEMENTS</h1>

## Build a full Application using 1inch APIs ⸺ $30,000

1inch offers a variety of REST APIs that make building onchain applications simpler. Create a full dApp using as many 1inch APIs as possible.

**Example integration points:**
- Add swap functionality with one of our swap protocols (1inch Cross-chain Swap (Fusion+), Intent-based Swap (Fusion), Classic Swap, or Limit Order protocol)
- Source onchain data using our data APIs (price feeds API, wallet balances API, token metadata API, and many more)
- Post transactions our Web3 API to interact with the blockchain

**Qualification Requirements:**
- Application should use 1inch API as much as possible
- Consistent commit history should be in the GitHub project. No low or single-commit entries allowed!

## Expand Limit Order Protocol ⸺ $65,000
1inch Limit Order Protocol is an onchain orderbook that can be extended to do much more. Build advanced strategies and hooks for the 1inch Limit Order Protocol like options, concentrated liquidity, TWAP swaps, etc.

**Qualification Requirements:**
Requirements:
- Onchain execution of strategy should be presented during the final demo
- Custom Limit Orders should not be posted to official Limit Order API
- Consistent commit history should be in the GitHub project. No low or single-commit entries allowed!

**Stretch goals (not hard requirements):**
- UI

## <s>Extend Fusion+ to Sui ⸺ $32,000 
Build a novel extension for 1inch Cross-chain Swap (Fusion+) that enables swaps between Ethereum and Sui.

**Qualification Requirements:**
- Preserve hashlock and timelock functionality for the non-EVM implementation
- Swap functionality should be bidirectional (swaps should be possible to and from Ethereum)
- Onchain (mainnet or testnet) execution of token transfers should be presented during the final demo

**Stretch goals (not hard requirements):**
- UI
- Enable partial fills
- Relayer and resolver </s>

<h1 align='center'>REQ. LINKS</h1>
In order to successfully complete this project, the following are the essential links.

## Solidity
Docs: https://docs.soliditylang.org/en/v0.8.30/

Template: https://github.com/ZumZoom/solidity-template

Hardhat : https://hardhat.org/tutorial
## 1inch API Docs

1inch API: https://portal.1inch.dev/documentation/overview


Fusion+: https://portal.1inch.dev/documentation/apis/swap/fusion-plus/introduction

Fusion+ Test: https://portal.1inch.dev/documentation/becoming-a-resolver/fusion-plus-test-examples

Order Book API: https://portal.1inch.dev/documentation/apis/orderbook/introduction

Limit Order Protocol: https://help.1inch.io/en/articles/4656415-1inch-v4-limit-orders

## 1inch API Github

Cross Chain Swap: https://github.com/1inch/cross-chain-swap

Cross Chain Resolver: https://github.com/1inch/cross-chain-resolver-example

Limit Order Protocol: https://github.com/1inch/limit-order-protocol

Limit Order SDK: https://github.com/1inch/limit-order-sdk

Fusion Protocol (Dutch Auction): https://github.com/1inch/fusion-protocol

## SUI
Docs: https://docs.sui.io/guides/developer/getting-started

Move: https://github.com/sui-foundation/sui-move-intro-course

Git: https://github.com/MystenLabs/sui

Audit: https://github.com/sui-foundation/security-audits/blob/main/docs/Sui_Bridge_v1_Zellic.pdf

Bridge: https://docs.sui.io/concepts/tokenomics/sui-bridging

Sample: https://github.com/MystenLabs/sui/tree/main/bridge

Source: https://github.com/MystenLabs/sui/tree/main/crates/sui-bridge

## Miscellaneous:

https://github.com/chatch/hashed-timelock-contract-ethereum

https://github.com/hashlocked-xyz/hashlocked-cli

https://101blockchains.com/escrow-smart-contract/

