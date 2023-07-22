import {
    ZeroDevEthersProvider,
    convertEthersSignerToAccountSigner,
} from "@zerodevapp/sdk";
import {ethers} from "ethers";

test("can get a wallet address", async () => {
    const randomWallet = ethers.Wallet.createRandom();
    const owner = convertEthersSignerToAccountSigner(randomWallet)
    console.log(`owner is ${owner}`)
    const provider = await ZeroDevEthersProvider.init("ECDSA", {
        projectId: process.env.ZERODEV_PROJECT_ID!,
        owner,
        opts: {
            paymasterConfig: {
                policy: "VERIFYING_PAYMASTER",
            },
        },
    });
    const zdSigner = provider.getAccountSigner();
    const zdSignerAddress = await zdSigner.getAddress();
});
