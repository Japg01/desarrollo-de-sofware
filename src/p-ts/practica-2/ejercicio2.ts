//Práctica Básica de POO

class Product {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly price: number,
        private stock: number
    ) {}

    public reduceStock(quantity: number): void {
        if (quantity > this.stock || quantity < 0) {
            console.log("No se puede reducir el stock: cantidad inválida.");
            return;
        }
        this.stock -= quantity;
    }

    public increaseStock(quantity: number): void {
        if (quantity < 0) {
            console.log("No se puede incrementar el stock: cantidad inválida.");
            return;
        }
        this.stock += quantity;
    }

    public getStock(): number {
        return this.stock;
    }
}

class Order {
    private products: { product: Product; quantity: number }[] = [];
    private total: number = 0;

    public addProduct(product: Product, quantity: number): void {
        if (product.getStock() >= quantity) {
            this.products.push({ product, quantity });
            product.reduceStock(quantity);
            this.total += product.price * quantity;
        } else {
            console.log(`No hay suficiente stock del producto ${product.name}.`);
        }
    }

    public removeProduct(productId: string): void {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].product.id === productId) {
                const { product, quantity } = this.products[i];
                product.increaseStock(quantity);
                this.total -= product.price * quantity;
                this.products.splice(i, 1);
                console.log(`Producto ${product.name} eliminado de la orden.`);
                return;
            }
        }
        console.log("Producto no encontrado en la orden.");
    }

    public calculateTotal(): number {
        return this.total;
    }
}

class Inventory {
    private products: Product[] = [];

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public findProductById(productId: string): Product | null {
        return this.products.find((product) => product.id === productId) || null;
    }

    public showProducts(): void {
        console.log("Lista de productos disponibles:");
        for (const product of this.products) {
            console.log(`${product.name}, Precio: ${product.price}, Stock: ${product.getStock()}`);
        }
    }
}


const inventory = new Inventory();
const order = new Order();

const products = [
    new Product("p1", "Laptop", 1200, 15),
    new Product("p2", "Mouse", 20, 50),
    new Product("p3", "Keyboard", 50, 30),
];

products.forEach((product) => inventory.addProduct(product));

inventory.showProducts();

order.addProduct(products[0], 3); 
order.addProduct(products[1], 2); 

order.removeProduct("p1"); 

console.log(`Precio total de la orden: ${order.calculateTotal()}`);
