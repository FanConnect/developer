const fetchMenuData = async () => {
  try {
    return [
      {
        category: 'beverages',
        items: [
          { id: '1', name: 'Domestic Can Beer', price: '10.00' },
          { id: '2', name: 'Premium Can Beer', price: '12.00' },
          { id: '3', name: 'Wine By The Glass', price: '9.50' },
          { id: '4', name: 'Regular Soda', price: '5.00' },
          { id: '5', name: 'Bottomless Large Soda', price: '9.50' },
          { id: '6', name: 'Deja Blue Water', price: '5.00' },
        ],
      },
      {
        category: 'snacks',
        items: [
          { id: '7', name: 'Peanuts', price: '6.00' },
          { id: '8', name: '3 Breadsticks', price: '5.50' },
          { id: '9', name: "Hershey's Chocolate Chip Cookie", price: '11.00' },
        ],
      },
      {
        category: 'pizza',
        items: [
          { id: '10', name: 'Cheese', price: '11.00' },
          { id: '11', name: 'Pepperoni', price: '12.00' },
          { id: '12', name: 'Sausage', price: '12.00' },
        ],
      },
    ];
  } catch (err) {
    console.warn('Unable to load menu data!');
    console.warn(err);
  }
};

const updateMenuItem = (elementId, name, price) => {
  const menuElement = document.getElementById(elementId);
  const nameElement = menuElement.querySelector('.menu-item-name');
  nameElement.textContent = name;
  const priceElement = menuElement.querySelector('.menu-item-price');
  priceElement.textContent = price;
};

const run = async () => {
  const menuData = await fetchMenuData();

  menuData.flatMap((category) =>
    category.items.forEach((item) => {
      try {
        updateMenuItem(`menu-item-${item.id}`, item.name, item.price);
      } catch (e) {
        console.error(`Unable to update menu item: ${e}`);
      }
    }),
  );
};

run();
