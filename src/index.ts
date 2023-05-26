import { add } from './modules/math';

console.log('you are ready to start coding typescript...');

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

const main = document.createElement('div');
const child = document.createElement('p');
child.innerHTML = 'Hello';
main.appendChild(child);
root.appendChild(main);

import { Box } from './Box';
import { data, IData } from './data';

// total units
// total unit cost
// total cases
// total case cost
// cost of all purchased items
// total free items
// total returns

const totalUnits = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => parseInt(y.units as string) > 0))
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1'))
  .map((x: IData[]) => x.filter((y: IData) => y.return_item != '1'))
  .map((x: IData[]) =>
    x.reduce((acc, cur) => acc + parseInt(cur.units as string), 0)
  )
  .fold((x: number) => x);

// console.log(totalUnits);
document.getElementById('totalUnits')!.innerHTML = `Total Units: ${totalUnits}`;

const totalUnitCost = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => parseInt(y.units as string) > 0))
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1'))
  .map((x: IData[]) => x.filter((y: IData) => y.return_item != '1'))
  .map((x: IData[]) =>
    x.reduce(
      (acc, cur) =>
        acc + parseInt(cur.units as string) * parseFloat(cur.cost as string),
      0
    )
  )
  .map((x: number) => `$${x.toFixed(2)}`)
  .fold((x: IData[]) => x);

// console.log(totalUnitCost);
document.getElementById(
  'totalUnitCost'
)!.innerHTML = `Total Unit Cost: ${totalUnitCost}`;

const trace = <T>(x: T) => {
  console.log(x);
  return x;
};

const totalPurchased = Box(data)
  .map((x: IData[]) => x.filter((y: IData) => y.free != '1'))
  // .map((x: IData[]) => trace(x))
  .trace()
  .map((x: IData[]) =>
    x.map((y: IData) => ({
      cases: parseInt(y.cases as string) * parseFloat(y.cost as string),
      units: parseInt(y.units as string) * parseFloat(y.cost as string),
      return_item: y.return_item,
      upc: y.upc,
    }))
  )
  .map((x: IData[]) =>
    x.reduce(
      (acc, cur) =>
        cur.return_item
          ? acc - +cur.cases + +cur.units
          : acc + parseFloat(cur.cases as string) + Number(cur.units),
      0
    )
  )
  .trace()
  .map((x: number) => `$${x.toFixed(2)}`)
  .fold((x: IData[]) => x);

console.log(totalPurchased);

const moneyToFloat = (str: string): number => parseFloat(str.replace(/\$/, ''));

const percentToFloat = (str: string): number =>
  parseFloat(str.replace(/\%/, '')) * 0.01;

const applyDiscount_ = (price: string, discount: number) => {
  const cents = moneyToFloat(price);
  const savings = percentToFloat(discount.toString());
  console.log('savings', savings);
  return cents - cents * savings;
};

const applyDiscount = (price: string, discount: number) =>
  Box(price)
    .map((x: number) => moneyToFloat(x.toString()))
    .map((price: number) =>
      Box(price)
        .map(() => percentToFloat(discount.toString()))
        // .map((x: any) => console.log('price', price, 'discount', x))
        .map((discount: number) => price - price * discount)
        .fold((x: number) => x)
    )
    .fold((x: number) => x);

console.log(applyDiscount_('$5.00', 5));
console.log(applyDiscount('$5.00', 5));

import { Item, Discount, items, discounts } from './json';

console.log('***************************************');

interface IDiscount {
  discount: number;
  salePrice: number;
}

const saleCalculation = Box(items)
  .map((xs: Item[]) =>
    xs.map((y: Item) =>
      Box(y)
        .map(
          (i: Item) =>
            discounts.filter((d: Discount) => d.dept === i.deptNumber)[0]
        )
        .map((x: Discount) => (x ? x.discount : ''))
        .map((x: number) => ({
          discount: x,
          offAmount: ((y.price as number) / (y.split as number)) * (x * 0.01),
        }))
        .map((x: { discount: number; offAmount: number }) => ({
          discount: x.discount,
          salePrice: (y.price as number) / (y.split as number) - x.offAmount,
        }))
        .map((x: IDiscount) => ({
          discount: x.discount,
          salePrice: x.salePrice.toFixed(2),
        }))
        .trace()
        .map((x: IDiscount) => ({
          ...y,
          discount: x.discount,
          salePrice: +x.salePrice,
        }))
        .fold((x: Item) => x)
    )
  )
  .fold((x: Item[]) => x);

console.log(saleCalculation);
