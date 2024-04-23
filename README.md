# Pinniped-SDK

An easy-to-use SDK for communicating with your Pinniped backend, using
Axios.

### Setup

- Install the SDK: `npm install pinniped-sdk`

- Import the library and point it to your Pinniped backend:

```javascript
import pinniped from "pinniped-sdk";

//Your sdk instance ready for use in your frontend
const pnpd = pinniped("https://yourwebsite.com");
```

You can access all of the SDK methods on `pnpd`.

### Usage

**Note:** In the examples below we `await` the sdk methods since in the background they are making an async Axios network request. These `await` calls must be in an `async` function in order to have any effect.

## Authentication

Authentication is how users are registered and logged in/out. **Note**: You will not be able to log in as an admin, the SDK only supports user operations. Any adminstrative actions should utilize the [Admin UI](https://github.com/pinniped-baas/pinniped-admin-ui).

```javascript
// Register
await pnpd.auth.register(username, password);

// Login
await pnpd.auth.login(username, password);

// Logout
await pnpd.auth.logout();

// Returns the current user session data
await pnpd.auth.getUser();
```

## Database Access

```javascript
// Get all rows from a table
const rows = await pnpd.db.getAll(tableName);

// Get all rows from a table with pagination and sorting by a given column name
const rows = await pnpd.db.getAll(tableName, pageNum, limit, sortBy, order);

// Get one row from a table
const row = await pnpd.db.getOne(tableName, rowId);

// Create a new row in a table
const createdRow = await pnpd.db.createOne(tableName, data);

// Update a row in a table
const updatedRow = await pnpd.db.updateOne(tableName, rowId, data);

// Delete a row in a table
await pnpd.db.deleteOne(tableName, rowId);
```

The `data` argument supplied to `createOne` and `updateOne` should be an object with key-value pairs that correspond to the columns of the table. For instance, if my table had columns for `type` and `description`, I would send an object that looked like: `{type: "Elephant Seal", description: "Really big!"}.

You may notice the columns: `id`, `created_at`, and `updated_at`. These are all system columns that are automatically populated upon creation of a row.

## Return Value

The sdk operations return an object (the standard object that Axios returns from a request) with the following properties:

```
{
  status
  statusText
  headers
  config
  request
  data
}
```

Any response data from the backend can be accessed by using the `data` property of the object:

```javascript
const response = await pnpd.db.getAll("seals");
console.log(response.data.rows); // -> logs an array of rows from the seals table
```
