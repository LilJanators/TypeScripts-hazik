interface IdKezelo {
  getId(): string;
}

class Product implements IdKezelo {
  private id: string;
  private name: string;
  private price: number;
  private description?: string;

  constructor(id: string, name: string, price: number, description?: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProductById(id: string): void {
    this.products = this.products.filter(p => p.getId() !== id);
  }

  findProductById(id: string): Product | undefined {
    return this.products.find(p => p.getId() === id);
  }

  findProductByName(name: string): Product[] {
    return this.products.filter(p => p.getName().toLowerCase().includes(name.toLowerCase()));
  }

  listAllProducts(): Product[] {
    return [...this.products];
  }
}

enum OrderStatus {
  New = "Új",
  Processing = "Feldolgozás alatt",
  Shipped = "Kiszállítva"
}

class Order implements IdKezelo {
  private orderId: string;
  private termekek: Product[];
  private status: OrderStatus;

  constructor(orderId: string, termekek: Product[]) {
    this.orderId = orderId;
    this.termekek = termekek;
    this.status = OrderStatus.New;
  }

  getId(): string {
    return this.orderId;
  }

  updateStatus(status: OrderStatus): void {
    this.status = status;
  }

  getTotal(): number {
    return this.termekek.reduce((sum, p) => sum + p.getPrice(), 0);
  }
}

class User {
  private felhasznaloId: string;
  private nev: string;
  private email: string;

  constructor(felhasznaloId: string, nev: string, email: string) {
    this.felhasznaloId = felhasznaloId;
    this.nev = nev;
    this.email = email;
  }
}