<script lang="ts">
    import type { IPhone } from "./phone";

    let phoneObj: IPhone = {
        case: true,
        manufacturer: 'samsung',
        screenSize: 6,
    };

    let boxOfAppleObjs = [];

    const boxOfFruits = [
        { name: 'apple', color: 'red' },
        { name: 'banana', color: 'yellow' },
        { name: 'pineapple', color: 'yellow' },
        { name: 'mango', color: 'yellow' },
        { name: 'pear', color: 'red' },
        { name: 'orange', color: 'orange' },
        { name: 'strawberry', color: 'red' },
        { name: 'blueberry', color: 'blue' },
        { name: 'coconut', color: 'white' },
        { name: 'cherry', color: 'red' },
        { name: 'mango', color: 'yellow' },
        { name: 'apple', color: 'red' },
    ];

    const redFruits = boxOfFruits.filter(obj => {
        if (obj.color === 'red') {
            return true;
        }
        return false;
    });
</script>

<!-- What is an object -->

<!-- What is an array -->
{#each redFruits as fruit}
    <div>{fruit.color} {fruit.name}</div>
{/each}