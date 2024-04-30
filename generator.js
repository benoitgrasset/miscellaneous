function* fetchUsers() {
  yield fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
      return users;
    });
}

const fetchUsersPromise = fetchUsers().next().value;
fetchUsersPromise.then(res => console.log('response', res));