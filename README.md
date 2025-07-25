## Cart-App

## Overview

Cart-App is a modern, responsive React and TypeScript application that fetches product data from a public API and provides a seamless shopping cart experience with persistent state saved to localStorage. The app features a clean UI built with TailwindCSS and supports common e-commerce cart functionalities such as adding products, adjusting quantities, removing items, and viewing total prices.

## Features

- Fetches product data from [Fake Store API](https://fakestoreapi.com/products).
- Displays products in a responsive grid layout using TailwindCSS.
- Allows adding products to a shopping cart.
- Supports increasing, decreasing, and removing products from the cart.
- Shows total quantity and price in the cart.
- Cart state is persisted using localStorage, maintaining the cart across page reloads.
- Responsive header with a cart icon and quantity badge.
- Cart dropdown toggles on icon click for easy access.

## Tech Stack

- React with TypeScript
- TailwindCSS for styling
- React Context API for state management of the cart
- Fetch API for data retrieval
- localStorage for cart state persistence

## Getting Started

### Prerequisites

- Node.js (version 14 or above)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sewar77/Cart-App.git
   cd Cart-App
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Project Structure

- `src/components`: Contains reusable React components such as Header, ProductList, CartDropdown, and ProductCard.
- `src/context`: Holds the CartContext for managing cart state.
- `src/hooks`: Custom hooks including `useProducts` for fetching product data.
- `src/App.tsx`: Main application component orchestrating layout and state.
