# Unit Tests

## Crypto Table

1. Correctly handles page change (table pagination).
2. Details button should have margin left set to 20px.
3. When name cells for coins with prices less than 100 should have color set to green.
4. Correctly opens the dialog by passing the expected currency property.
5. Calls the /close_event GET request when closing the dialog is successful.
6. Displays a div with a Try again message when close_event endpoint fails.
7. Displays the description.

## Crypto Basket

1. Can be added to an empty basket.
2. When there is already in the basket, clicking the buy button does not add another one.
3. Should remove coin from basket when quantity equals 0.
4. Should correctly calculate the average price per single coin (coin_1_price + coin_2_price + ... + coin_n_price) / n).
5. Should correctly calculate the sum.
6. AddOrder btn content field should be focused when user clicks on order name and there is an empty basket or not empty.
7. Calls the contracts addOrder() with basket and comment value when comment and name are not empty or not.

## Crypto Order

1. Can be added to an empty order list.
