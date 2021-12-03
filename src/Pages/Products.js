import ProductItem from "./ProductItem";

const data = [
  {
    id: 1,
    name: "Margherita",
    type: "Veg",
    description: "Delecious Pizza made up of Tomato sauce and Cherry Tomato ",
    price: 100,
    image:
      "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw946a4573/images/project/WLRECIP-8829/Mini-Margharita-Pizzas.jpg?sw=1440&sh=750&sm=fit",
  },
  {
    id: 2,
    name: "Veg Calzone",
    type: "Veg",
    description: "Delecious Pizza made up of HomeMade Tomato and Herb",
    price: 150,
    image:
      "https://media.istockphoto.com/photos/delicious-pizza-calzone-picture-id1061654734?k=20&m=1061654734&s=612x612&w=0&h=kEcM7nr5MVdBYfEAKbs17jmgDxHdCuVrWuYNnr_MfUU=",
  },
  {
    id: 3,
    name: "Dolce Vita",
    type: "Non-Veg",
    description:
      "Delecious Pizza made up of Tomato sauce , Red onions and Chicken",
    price: 220,
    image:
      "https://images.squarespace-cdn.com/content/v1/595fe8f21e5b6ce14ffb43eb/1499881625427-96RO7W0EMVXXJJURNZ0C/VeggieSide.jpg?format=1500w",
  },
  {
    id: 4,
    name: "Hawaiian",
    type: "Non-Veg",
    description: "Delecious Pizza made up of Tomato sauce, Ham and Pineapple",
    price: 250,
    image:
      "https://www.kingarthurbaking.com/sites/default/files/2020-03/hawaiian-pizza.jpg",
  },
  {
    id: 5,
    name: "Pepperoni",
    type: "Non-Veg",
    description:
      "Delecious Pizza made up of Tomato sauce and lots of pepperoni ",
    price: 300,
    image:
      "https://assets.thehansindia.com/h-upload/2021/09/19/1112620-pepperoni-pizza-day.webp",
  },
  {
    id: 6,
    name: "Bee Sting",
    type: "Non-Veg",
    description: "Delecious Pizza made up of Tomato sauce ,Pepproni and honey",
    price: 330,
    image:
      "https://www.kingsford.com/wp-content/uploads/2020/07/beesting_pizza.jpg",
  },
];

function Products() {
  return (
    <div className="container">
      <div className="row">
        {data.map((e) => (
          <ProductItem items={e} />
        ))}
      </div>
    </div>
  );
}

export default Products;
