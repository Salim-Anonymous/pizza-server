Cloud firestore database design for pizza website
- Users can create an account and order pizza
- Business can create an account and manage their pizza
- Admin can manage all pizza businesses and users

User Document:
- name
- email
- password
- address
- phone number
- Role:
  - user: true
  - business: bool
  - admin: bool

Order Document:
- user id
- pizza name
- pizza size
- pizza toppings
- pizza price
- order phone number
- order notes
- order delivery time: timestamp
- order delivery address
- order status: {request, accepted, rejected, delivered}

Pizza Document:
- name
- size
- toppings
- price
- business uuid

Business Document:
- business name
- business phone number
- business owner
- business logo
- business description
- business hours
- business location

API:
- GET /api/pizzas
- GET /api/pizzas/:id
- POST /api/pizzas/
- PUT /api/pizzas/:id
- DELETE /api/pizzas/:id
****
- GET /api/businesses
- GET /api/businesses/:id
- POST /api/businesses
- PUT /api/businesses/:id
- DELETE /api/businesses/:id
****
- GET /api/users
- GET /api/users/:id
- POST /api/users
- PUT /api/users/:id
- DELETE /api/users/:id
****
- GET /api/orders
- GET /api/orders/:id
- POST /api/orders
- PUT /api/orders/:id
- DELETE /api/orders/:id




