const { run } = require("hardhat")

async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    // run package (see at the top) allows us to run any hardhat tasks in the code
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
