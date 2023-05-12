
# Getting Started

## Install Dependancies

```bash
npm install
```

## Starting the express server

```bash
npm run start
```

### Using axios example

```js
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

More info at [the official site](https://axios-http.com/docs/intro "Getting Started")


## Note
1. The folder structure/projects structure; These are just suggestive btw - needs could change prompting restructure.
1. All front end code is in src folder, backend in the backend folder, the index page at the root, because it's what browsers will try to access first
1. The backend is built in TypScript. Which is just a superset of Js, so all Js code should work.