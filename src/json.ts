export interface Item {
  upc: string;
  description: string;
  price: number;
  split: number;
  caseCost: number;
  caseCount: number;
  deptNumber: number;
  deptName: string;
  discount?: number;
  salePrice?: number;
}

export interface Discount {
  discount: number;
  dept: number;
  deptName: string;
}

export const discounts: Discount[] = [
  {
    discount: 5,
    dept: 1,
    deptName: 'Grocery',
  },
  {
    discount: 10,
    dept: 2,
    deptName: 'Produce',
  },
  {
    discount: 15,
    dept: 3,
    deptName: 'Meat',
  },
];

export const items: Item[] = [
  {
    upc: '0000000004011',
    description: 'Bananas',
    price: 0.39,
    split: 1,
    caseCost: 2.99,
    caseCount: 2,
    deptNumber: 2,
    deptName: 'Produce',
  },
  {
    upc: '000413900002',
    description: 'Kikkoman Soy Sauce',
    price: 1.69,
    split: 1,
    caseCost: 10.99,
    caseCount: 12,
    deptNumber: 1,
    deptName: 'Grocery',
  },
  {
    upc: '0004280011300',
    description: 'Totino Cheese Pizza',
    price: 1.59,
    split: 1,
    caseCost: 35.0,
    caseCount: 24,
    deptNumber: 1,
    deptName: 'Grocery',
  },
  {
    upc: '0004470000063',
    description: 'Oscar Myer Hot Dogs',
    price: 3.29,
    split: 1,
    caseCost: 38.99,
    caseCount: 12,
    deptNumber: 1,
    deptName: 'Grocery',
  },
  {
    upc: '000125460111',
    description: 'Trident',
    price: 1.29,
    split: 1,
    caseCost: 11.25,
    caseCount: 12,
    deptNumber: 1,
    deptName: 'Grocery',
  },
  {
    upc: '0020000300000',
    description: 'Ground Beef 93/7',
    price: 0.99,
    split: 1,
    caseCost: 1.5,
    caseCount: 2,
    deptNumber: 3,
    deptName: 'Meat',
  },
  {
    upc: '0020000600000',
    description: 'Barbacoa',
    price: 3.59,
    split: 1,
    caseCost: 2.59,
    caseCount: 2,
    deptNumber: 3,
    deptName: 'Meat',
  },
  {
    upc: '0004126036134',
    description: 'Liquid Bandage',
    price: 4.35,
    split: 1,
    caseCost: 3.99,
    caseCount: 1,
    deptNumber: 4,
    deptName: 'Non Food',
  },
];
