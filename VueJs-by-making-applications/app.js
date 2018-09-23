new Vue({
    el: "#app",
    data: {
        items: [
            { name: "Rice", price: 10.4 },
            { name: "Wheat", price: 10.6 },
            { name: "Rice", price: 20.0 }
        ],
        newItem: ""
    },
    computed: {
        totalPrice() {
            let total = this.items.reduce((sum, item) => {
                return (sum += parseFloat(item.price));
            }, 0);
            return total;
        }
    },
    methods: {
        addItem() {
            this.items.push({ name: this.newItem, price: 0.0 });
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }
});
