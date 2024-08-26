
### Detailed Requirements

#### 1\. Homepage / Landing Page
 
> Always show the latest 6 created products from your database. hints: You can use the sort method in this case.  (BACKEND INTEGRATION)
> 

#### 2\. Products Page :

*   **Searching and Filtering:** (AFTER COMPLETING BACKEND)
    *   A search bar to allow users to search for products by name, brand.
    *   Filters for product price range.
    *   Options to sort products by price (low to high and high to low).
    *   A clear filter button to reset all applied filters. 


#### 4\. Cart Page

*   **Cart Items:**
    *   List all products that have been added to the cart, along with their quantities.
    *   Include controls to increase or decrease the quantity of each product.
    *   Provide a button to remove a product from the cart.
*   **Pricing Details:**
    *   Show the detailed total pricing below the product list.
    *   Update the total price dynamically as products are added, removed, or quantities are changed.
*   **Proceed To Checkout Button**: Allows the user to place an order.
    *   If the product is in stock, this button will be activated. If the product is out of stock, the button will be deactivated. Clicking this button will take the user to the checkout page.

  

#### **5\. Checkout Page** (QUANTITY DEDUCTION NEED TO IMPLEMENT)

*   **Payment Methods:** There will be two types of payment methods:
    1. **Cash on Delivery:** By choosing this option and then clicking the "Place Order" button, the user will be directed to a success page, and the quantity will be deducted from the actual product stock.
 

  

#### 6\. Product Management/Dashboard Page

*   **Product List Table:**
    *   Display products in a table format. The table should include columns for the product name, price, brand, and actions.
*   **Action Buttons:**
    *   Include buttons for updating and deleting products.
    *   Updating a product should open a form in a modal allowing the user to modify existing details.
    *   Deleting a product should open a confirmation modal, asking the user for confirmation before removal.
*   **Adding a Product:**
    *   Include a button to create the new product.
    *   Provide a form to add new products with fields for name, price, description, available quantity, rating, image (you can use ImgBB for image upload or allow direct link entry), and brand.

> All update, delete, and create actions should reflect in real-time, implementing an optimistic update of the UI.

#### 7\. About Us Page

- Try to make the About Us page as attractive and creative as possible by using some basic animations and fancy gradients.

#### 8\. Contact Us Page

- Provide detailed contact information and encourage users to reach out with questions or feedback.
    *   Try to make the page as attractive by using some basic animations.

#### 9\. UI/UX

*   **UI/UX Quality**: The user interface should be reasonably good, with wisely chosen color combinations. The user experience should be smooth and intuitive. Consider using UI/UX design principles to enhance the overall aesthetics and usability of the site. There will be a dedicated mark allocated for UI/UX quality.
*   **Responsiveness**: The entire website must be responsive for both mobile and desktop devices.

  

### Bonus Features

*   **Debounce API Calls:**
    *   Implement debouncing for the search functionality to reduce the number of API calls and improve performance.
*   **Page Refresh Warning:**
    *   Show a warning message when the user attempts to refresh the page if the cart is not empty, to prevent the loss of cart data.
*   **Animations**:
    *   Try to use micro-animations on your website

### Optional Features

*   **Integrate Stripe Payment**: For processing payments.
*   **Implement Pagination**: In the Products page, with a custom implementation.

_Note: We highly recommend implementing these optional features, as they will make your project stand out._

  

### References for Idea Generation

Here are some websites to inspire ideas for your project. These references are only for idea generation and should not be copied directly:

- [https://mechanicalkeyboards.com/](https://mechanicalkeyboards.com/)
- [https://kbdfans.com/](https://kbdfans.com/)
- [https://keygem.com/](https://keygem.com/)
- [https://keebsforall.com/](https://keebsforall.com/)
- [https://kono.store/](https://kono.store/)

> Note: The references are only for idea generation. Do not copy the design from these sources.