# Pinniped-SDK

An easy to use SDK for communicating with your Pinniped backend, using
axios.

#### Setup

```javascript
import Pinniped from "Pinniped-sdk";

//Your sdk instance ready for use in your frontend
const pnpd = new Pinniped("http://yourwebsite.com");
```

### Usage

## Authentication

```javascript
//Register
await pnpd.auth.register(username, password);

//Login
await pnpd.auth.login(username, password);

//Logout
await pnpd.auth.logout();
```

## Database Access

```javascript
//Get all rows from a table
const rows = await pnpd.db.getAll(tableId);

//Get all rows from a table with pagination and sorting by a given column name
const rows = await pnpd.db.getAll(tableId, pageNum, limit, sortBy, order);

//Get one row from a table
const row = await pnpd.db.getOne(tableId, rowId);

//Create a new row in a table
const createdRow = await pnpd.db.createOne(tableId, data);

//Update a row in a table
const updatedRow = await pnpd.db.updateOne(tableId, rowId, data);

//Delete a row ina table
await pnpd.db.deleteOne(tableId, rowId);
```
