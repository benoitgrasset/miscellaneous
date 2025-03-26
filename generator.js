function* fetchUsers() {
  yield fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
      return users;
    });
}

const fetchUsersPromise = fetchUsers().next().value;
fetchUsersPromise.then(res => console.log('response', res));



const BASE_URL = "https://jsonplaceholder.typicode.com/users";
const LIMIT = 10;

async function* fetchUsers() {
  let page = 0;
  while (true) {
    yield await fetch(`${BASE_URL}?_limit=${LIMIT}&_start=${LIMIT * page}`)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });

    page++;
  }
}

async function* fetchUser() {
  for await (const page of fetchUsers()) {
    for (const user of page) {
      yield user;
    }
  }
}

const fetchUsersPromise = fetchUsers().next().value;
fetchUsersPromise.then(res => console.log(res));
