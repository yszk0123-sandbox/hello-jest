let users = [];

export class User {
  constructor(id) {
    this.id = id;
  }
}

export async function initializeDatabase() {
  addUser(new User(1));
}

export async function clearDatabase() {
  users = [];
}

export async function addUser(user) {
  users.push(user);
}

export async function getUsers() {
  return users;
}
