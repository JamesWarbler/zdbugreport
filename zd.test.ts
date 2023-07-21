import {
    ZeroDevEthersProvider,
    convertEthersSignerToAccountSigner,
} from "@zerodevapp/sdk";
import {ethers} from "ethers";

test('adds 1 + 2 to equal 3', () => {
    expect(7).toBe(3);
});

test("can get a wallet address", async () => {
    const randomWallet = ethers.Wallet.createRandom();

    const provider = await ZeroDevEthersProvider.init("ECDSA", {
        projectId: process.env.ZERODEV_PROJECT_ID!,
        owner: convertEthersSignerToAccountSigner(randomWallet),
        opts: {
            paymasterConfig: {
                policy: "VERIFYING_PAYMASTER",
            },
        },
    });
    const zdSigner = provider.getAccountSigner();
    const zdSignerAddress = await zdSigner.getAddress();
});
