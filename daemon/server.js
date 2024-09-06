/* Import modules. */
import { encodeAddress } from '@nexajs/address'
import { hash160 } from '@nexajs/crypto'
import { getCoins } from '@nexajs/purse'
import {
    encodeDataPush,
    encodeNullData,
    OP,
} from '@nexajs/script'
import {
    binToHex,
    hexToBin,
} from '@nexajs/utils'
import { Wallet } from '@nexajs/wallet'

console.log('\n  Starting Pythia Daemon...')

/* Initialize constants. */
const PYTHIA_PROTOCOL_ID = 'PYTHIA'

/* Initialize globals. */
let address
let wallet

const init = async () => {
    console.info('  Initializing...\n')
    console.log('MNEMONIC', process.env.MNEMONIC)

    wallet = await Wallet.init()
    // console.log('WALLET', wallet)

    address = wallet.address
    console.log('ADDRESS', address)

    buildPkg()
}

const buildPkg = async () => {
    /* Initialize locals. */
    let coins
    let contractAddress
    let lockingScript
    let nullData
    let prefix
    let receivers
    let response
    let scriptHash
    let scriptPubKey
    let userData

    /* Set prefix. */
    prefix = 'nexa'

    // NOTE: NexScript v0.1.0 offers a less-than optimized version
    //       of this (script) contract (w/ the addition of `OP_SWAP`).
    lockingScript = new Uint8Array([
        OP.TXOUTPUTCOUNT,
        OP.THREE,
        OP.NUMEQUALVERIFY,
    ])
    console.info('\n  Script / Contract:', binToHex(lockingScript))

    scriptHash = hash160(lockingScript)
    console.log('SCRIPT HASH (hex):', binToHex(scriptHash))

    /* Build script public key. */
    scriptPubKey = new Uint8Array([
        OP.ZERO, // groupid or empty stack item
        ...encodeDataPush(scriptHash), // PUSH HASH160(script template)
        OP.ZERO, // HASH160(args script) or empty stack item
    ])
    console.info('\n  Script Public Key:', binToHex(scriptPubKey))

    /* Encode the public key hash into a P2PKH nexa address. */
    contractAddress = encodeAddress(
        prefix,
        'TEMPLATE',
        scriptPubKey,
    )
    console.info('CONTRACT ADDRESS', contractAddress)
    // nexareg:nqtsq9q2wwv65p4hraae0etlu2w32trv9zn66mcqxz96expj

    coins = await getCoins(process.env.ALICE_WIF, scriptPubKey)
        .catch(err => console.error(err))
    console.log('COINS', coins)

    userData = [
        PYTHIA_PROTOCOL_ID,
        'PUBLIC_HAHS_GOES/-HERE',
    ]

    /* Initialize hex data. */
    nullData = encodeNullData(userData)
    // console.log('HEX DATA', nullData)

    receivers = [
        {
            data: nullData
        },
        {
            address: primaryAddress,
            satoshis: SATOSHIS,
        },
    ]

    // FIXME: FOR DEV PURPOSES ONLY
    receivers.push({
        address: contractAddress,
    })
    console.log('RECEIVERS', receivers)

    /* Send UTXO request. */
    response = await buildCoins({
        coins,
        receivers,
        locking: lockingScript,
        unlocking: false, // NOTE: disables "automatic" transaction signing.
    })
    console.log('Send UTXO (response):', response)

}

init()
