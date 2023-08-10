const staffInfo = [
  {
    name: 'John Doe',
    job: 'Chef',
    phone: '555-555-5554',
    email: 'johndoe@burgerming.com',
  },
  {
    name: 'Mark Doe',
    job: 'Manager',
    phone: '555-555-5555',
    email: 'markdoe@burgerming.com',
  },
  {
    name: 'Maxwell Doe',
    job: 'Waiter',
    phone: '555-555-5556',
    email: 'maxdoe@gmail.com',
  },
];

export default function Contact() {
  const sectionName = document.createElement('h1');
  sectionName.textContent = 'Contact';

  const sectionGrid = document.createElement('div');
  sectionGrid.className = 'content-grid';

  staffInfo.forEach(staff => {
    const Item = document.createElement('div')
    Item.className = 'item';

    const ItemName = document.createElement('h3')
    ItemName.className = 'item-title';
    ItemName.textContent = staff.name;

    const ItemJob = document.createElement('p')
    ItemJob.className = 'item-desc';
    ItemJob.textContent = staff.job;

    const ItemPhone = document.createElement('p')
    ItemPhone.classList = 'item-price';
    ItemPhone.textContent = staff.phone;

    const ItemEmail = document.createElement('p')
    ItemEmail.className = 'item-image';
    ItemEmail.textContent = staff.email;

    Item.append(ItemName);
    Item.append(ItemJob);
    Item.append(ItemPhone);
    Item.append(ItemEmail);

    sectionGrid.append(Item);
  });

  return {
    sectionName,
    sectionGrid,
  };
}
