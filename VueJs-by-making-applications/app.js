new Vue({
    el: "#app",
    data: {
        items: [
            { name: "Rice", price: "10.40" },
            { name: "Wheat", price: "10.60" },
            { name: "Rice", price: "20.00" }
        ],
        newItem: ""
    },
    methods: {
        addItem() {
            this.items.push({ name: this.newItem, price: 0.0 });
        }
    }
});
