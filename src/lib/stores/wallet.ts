import { writable } from "svelte/store";

const _wallet = writable(10);

export function getWallet() {
    const { subscribe, update } = _wallet;

    return {
        buy: (price: number) => {
            // subtract amount from wallet
            update(coins => {
                // if you only have 2 coins
                // and the price was 3
                // it will not go into this if statement
                if (coins > price) {
                    return coins - price;
                }
                // it will return 2 coins
                return coins;
            });
        },
        sell: (price: number) => {
            // add amount to wallet
            update(coins => {
                return coins + price;
            });
        },
        subscribe,
    }
}