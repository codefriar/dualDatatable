const fixedColumnData = [];

const names = [
  'John Doe', 'Jane Smith', 'Alice Johnson', 'Robert Brown', 'Michael Davis',
  'Emily Wilson', 'David Clark', 'Sarah Lewis', 'James Walker', 'Linda Hall',
  'Daniel Allen', 'Jessica Young', 'Matthew King', 'Laura Wright', 'Andrew Scott',
  'Megan Green', 'Joshua Adams', 'Sophia Baker', 'Ryan Nelson', 'Olivia Carter',
  'Brandon Mitchell', 'Emma Perez', 'Justin Roberts', 'Grace Turner', 'Kevin Phillips',
  'Chloe Campbell', 'Brian Parker', 'Hannah Evans', 'Jason Edwards', 'Samantha Collins',
  'Eric Stewart', 'Natalie Morris', 'Adam Rogers', 'Victoria Reed', 'Nathan Cook',
  'Isabella Morgan', 'Tyler Bell', 'Ava Murphy', 'Zachary Bailey', 'Lily Rivera',
  'Ethan Cooper', 'Mia Richardson', 'Benjamin Cox', 'Ella Howard', 'Jacob Ward',
  'Abigail Torres', 'Logan Peterson', 'Madison Gray', 'Alexander Ramirez', 'Avery James',
  'Christian Brooks', 'Scarlett Watson', 'Jonathan Kelly', 'Zoe Sanders', 'Aaron Price',
  'Layla Bennett', 'Charles Wood', 'Lillian Barnes', 'Thomas Ross', 'Ellie Henderson',
  'Patrick Coleman', 'Aria Jenkins', 'Samuel Perry', 'Aubrey Powell', 'Christopher Long',
  'Brooklyn Patterson', 'Nicholas Hughes', 'Savannah Flores', 'Anthony Foster', 'Evelyn Simmons',
  'Gabriel Butler', 'Harper Gonzales', 'Jack Bryant', 'Camila Alexander', 'Dylan Russell',
  'Penelope Griffin', 'Henry Hayes', 'Riley Myers', 'Owen Ford', 'Nora Hamilton',
  'Lucas Graham', 'Luna Fisher', 'Isaac Wallace', 'Stella Shaw', 'Mason Reynolds',
  'Violet Hart', 'Caleb Chapman', 'Aurora Lane', 'Elijah Gardner', 'Hazel Harper',
  'Aiden Elliott', 'Paisley Spencer', 'Carter Lawson', 'Elliana Wells', 'Wyatt Baldwin',
  'Lucy Stone', 'Sebastian Black', 'Mila Warren', 'Julian Hunter', 'Addison Bishop'
];

for (let i = 0; i < 100; i++) {
  const name = names[i % names.length];
  const email = name.toLowerCase().replace(/ /g, '.') + '@example.com';
  fixedColumnData.push({ id: i + 1, name, email });
}

export default fixedColumnData;