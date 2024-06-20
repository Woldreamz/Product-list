# Product Listing Application

## Project Description
This project is a responsive and dynamic product listing application built with Next.js. It features fetching product data from an API, sorting, searching, and displaying the products in an interactive and visually appealing way. The application showcases creativity and attention to detail through its design and functionality.

## Installation Instructions
Prerequisites
Node.js (>= 12.x)
npm (>= 6.x)
Steps
Clone the repository

bash
Copy code
git clone <your-github-repo-url>
cd my-product-list
Install dependencies

bash
Copy code
npm install
Run the development server

bash
Copy code
npm run dev
Open http://localhost:3000 to view it in your browser.

## Build for production

bash
npm run build

Start the production server

bash
npm start

## Features
Responsive Design: The application is fully responsive and works seamlessly on different devices.
Product Listing: Displays a list of products fetched from an API.
Sorting: Allows sorting products by price (ascending and descending).
Search: Enables searching for products by name.
Animations: Smooth animations using Framer Motion.
Error Handling: Gracefully handles loading and error states.

## Deployment
The application is deployed on Vercel. You can access it at the following link:

Product Listing Application on Vercel

## Screenshots
Home Page

Sorting and Search

# Getting Started

## Project Structure

/components
  └── Header.js <br />
  └── ProductCard.js <br />
  └── ProductList.js <br />
  └── SortFilter.js <br />
/services <br />
  └── productService.js <br />
/styles <br />
  └── Home.module.css <br />
  └── globals.css <br />
  └── ProductCard.module.css <br />
  └── ProductList.module.css <br />
/pages <br />
  └── index.js <br />

## Code Examples

Fetching Products
services/productService.js:
javascript
Copy code
import axios from 'axios';

const API_URL = ['https://dummyjson.com/products'];

export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data.products;
};

Contributing
Feel free to fork this project and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License
# MIT

