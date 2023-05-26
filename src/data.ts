type generic = string | number;

export interface IData {
  upc: string;
  description: string;
  price: generic;
  cases: generic;
  units: generic;
  free: generic;
  return_item: generic;
  cost: generic;
}

export const data: IData[] = [
  {
    upc: '1',
    description: 'item 1',
    price: '1.0',
    cases: '2',
    units: '3',
    free: '0',
    return_item: '1',
    cost: '0.79',
  },
  {
    upc: '2',
    description: 'item 2',
    price: 2.0,
    cases: 0,
    units: 3,
    free: 0,
    return_item: 0,
    cost: 1.79,
  },
  {
    upc: '3',
    description: 'item 3',
    price: 3.0,
    cases: 4,
    units: 0,
    free: 0,
    return_item: 0,
    cost: 2.79,
  },
  {
    upc: '4',
    description: 'item 4',
    price: 4.0,
    cases: 0,
    units: 6,
    free: 0,
    return_item: 0,
    cost: 3.79,
  },
  {
    upc: '5',
    description: 'item 5',
    price: 5.0,
    cases: 0,
    units: 9,
    free: 1,
    return_item: 0,
    cost: 4.79,
  },
  {
    upc: '6',
    description: 'item 6',
    price: 6.0,
    cases: 6,
    units: 0,
    free: 0,
    return_item: 0,
    cost: 5.79,
  },
  {
    upc: '7',
    description: 'item 7',
    price: 7.0,
    cases: 5,
    units: 5,
    free: 0,
    return_item: 0,
    cost: 6.79,
  },
  {
    upc: '8',
    description: 'item 8',
    price: 8.0,
    cases: 0,
    units: 3,
    free: 1,
    return_item: 0,
    cost: 7.79,
  },
  {
    upc: '9',
    description: 'item 9',
    price: 9.0,
    cases: 0,
    units: 4,
    free: 1,
    return_item: 0,
    cost: 8.79,
  },
  {
    upc: '10',
    description: 'item 10',
    price: 10.0,
    cases: 5,
    units: 3,
    free: 0,
    return_item: 0,
    cost: 9.79,
  },
];
