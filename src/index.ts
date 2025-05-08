{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper || toUpper === undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const highQualityItems: { title: string; rating: number }[] = [];
    items.forEach((item) => {
      const rating = item.rating;
      if (rating >= 4) {
        highQualityItems.push(item);
      }
    });
    return highQualityItems;
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const sumUpArray: T[] = [];
    arrays.forEach((array) => {
      sumUpArray.push(...array);
    });
    return sumUpArray;
  }

  class Vehicle {
    constructor(private make: string, private year: number) {}

    getInfo() {
      return `"Make: ${this.make}, Year: ${this.year}"`;
    }
  }

  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }

    getModel() {
      return `"Model: ${this.model}"`;
    }
  }

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      const stringLength = value.length;
      return stringLength;
    } else {
      const doubleValue = 2 * value;
      return doubleValue;
    }
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    let highestPricedProduct: Product = products[0];
    products.forEach((product) => {
      let price = product.price;
      if (price > highestPricedProduct.price) {
        highestPricedProduct = product;
      }
    });
    return highestPricedProduct;
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day >= Day.Monday && day <= Day.Friday) {
      return "Weekday";
    } else {
      return "Weekend";
    }
  }

  async function squareAsync(n: number): Promise<number> {
    const promise = new Promise<number>((resolve, reject) => {
      if (n < 0) {
        reject("Negative number not allowed");
      } else {
        setTimeout(() => {
          resolve(n * n);
        }, 1000);
      }
    });

    return promise;
  }
}
