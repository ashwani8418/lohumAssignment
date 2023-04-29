# lohumAssignment
#### Live Hosted Link : https://lohumassignment-production-4e3a.up.railway.app/price

#### Project Details

### express package: A fast, minimalist web framework for Node.js
### route : A custom route module which handles the endpoint for retrieving lithium-ion battery prices from a specific website.

### Express
express is used to create the server instance and configure middleware. The app variable is an instance of the express module, which is used to configure and run the server. It is initialized with app = express();.

app.use('/price', route); sets up the route for accessing lithium-ion battery prices. Whenever a request comes to the /price endpoint, it will be routed to the route module.

app.use((req, res) => { ... }); sets up a catch-all middleware for handling 404 errors. If no matching routes are found, this middleware will be executed, and it will send a JSON response with a message indicating that the requested resource was not found.

Finally, app.listen(port, () => { ... }); starts the server and listens for incoming requests on the specified port.

Route
route is a custom module that handles the endpoint for retrieving lithium-ion battery prices. It makes use of the following packages:

### axios: A promise-based HTTP client for Node.js

### cheerio: A fast, flexible, and lean implementation of core jQuery designed specifically for the server
When a request is made to the /price endpoint, route sends a GET request to the target website using axios, and retrieves the HTML response. cheerio is then used to parse the HTML and extract the price information from the page.

If an error occurs during this process, a 500 error response is sent to the client.

Finally, the extracted price information is sent back to the client as a JSON response.
