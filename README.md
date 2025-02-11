# Fullstack Node.js Grocery Management Application

This is a fullstack Node.js application for managing grocery items. It includes functionalities for both admin and user roles.

## Features

### Admin Responsibilities:
- Add new grocery items to the system
- View existing grocery items
- Remove grocery items from the system
- Update details (e.g., name, price) of existing grocery items
- Manage inventory levels of grocery items

### User Responsibilities:
- View the list of available grocery items
- Ability to book multiple grocery items in a single order

## Technologies Used
- Node.js
- Express
- MongoDB
- Mongoose


## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/fullstack-node-app.git
    cd fullstack-node-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the MongoDB server:
    ```sh
    mongod
    ```

4. Start the application:
    ```sh
    npm start
    ```

The server will start on port 3000. You can access the API endpoints at `http://localhost:3000`.

## API Endpoints

### Admin Endpoints

#### Add New Grocery Item
- **Method**: POST
- **URL**: `/admin/add`
- **Body**: (JSON)
  ```json
  {
    "name": "Apple",
    "price": 1.5,
    "inventory": 100
  }
  ```

#### View Existing Grocery Items
- **Method**: GET
- **URL**: `/admin/view`

#### Remove Grocery Item
- **Method**: DELETE
- **URL**: `/admin/remove/:id`
Replace `:id` with the actual ID of the grocery item you want to remove.

#### Update Grocery Item
- **Method**: PUT
- **URL**: `/admin/update/:id`
Replace `:id` with the actual ID of the grocery item you want to update.
- **Body**: (JSON)
  ```json
  {
    "name": "Banana",
    "price": 0.5,
    "inventory": 150
  }
  ```

#### Manage Inventory
- **Method**: PUT
- **URL**: `/admin/inventory`
- **Body**: (JSON)
  ```json
  {
    "id": "groceryItemId",
    "inventory": 200
  }
  ```

### User Endpoints

#### View Available Grocery Items
- **Method**: GET
- **URL**: `/user/view`

#### Book Multiple Grocery Items
- **Method**: POST
- **URL**: `/user/book`
- **Body**: (JSON)
  ```json
  {
    "items": [
      { "id": "groceryItemId1", "quantity": 2 },
      { "id": "groceryItemId2", "quantity": 3 }
    ]
  }
  ```
