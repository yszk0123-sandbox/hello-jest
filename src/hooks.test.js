import {
  initializeDatabase,
  clearDatabase,
  User,
  addUser,
  getUsers,
} from './hooks';

beforeEach(async () => {
  await initializeDatabase();
});

afterEach(async () => {
  await clearDatabase();
});

test('database is initialized before each test (1)', async () => {
  expect.assertions(2);
  const users = await getUsers();

  expect(users.length).toBe(1);

  await addUser(new User(2));

  const newUsers = await getUsers();

  expect(newUsers.length).toBe(2);
});

test('database is initialized before each test (2)', async () => {
  expect.assertions(2);
  const users = await getUsers();

  expect(users.length).toBe(1);

  await addUser(new User(2));

  const newUsers = await getUsers();

  expect(newUsers.length).toBe(2);
});
