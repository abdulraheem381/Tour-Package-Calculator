# Database Setup

This folder contains the database schema, seed data, and connection configuration.

## Files

- `schema.sql`: Defines the database tables (`products`, `orders`, `order_items`).
- `seed.sql`: Populates the database with initial DevOps-themed products.
- `db.js`: A Node.js module to connect to the MySQL database.

## Instructions

### Prerequisites

Ensure you have a MySQL instance running (e.g., via Docker) with the following credentials:
- **Host**: localhost
- **Port**: 3306
- **User**: root
- **Password**: root
- **Database**: commit2prod_storefront

### Running Scripts inside Docker

If your MySQL is running in a Docker container (e.g., named `mysql-container`), you can execute the SQL scripts using the following commands:

1.  **Copy files to container** (optional, or separate clean command):
    ```bash
    docker cp schema.sql mysql-container:/tmp/schema.sql
    docker cp seed.sql mysql-container:/tmp/seed.sql
    ```

2.  **Run Schema**:
    ```bash
    docker exec -i mysql-container mysql -u root -proot commit2prod_storefront < schema.sql
    # OR if copied:
    # docker exec -it mysql-container mysql -u root -proot commit2prod_storefront -e "source /tmp/schema.sql"
    ```

3.  **Run Seed**:
    ```bash
    docker exec -i mysql-container mysql -u root -proot commit2prod_storefront < seed.sql
    ```

### Configuring db.js

The `db.js` file is pre-configured with the default credentials. To use it in your backend application:

1.  Copy `db.js` to your backend source directory (e.g., `app/backend/src/config/db.js`).
2.  Import it in your code:
    ```javascript
    const db = require('./path/to/db');
    const [rows] = await db.query('SELECT * FROM products');
    ```
