const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");


const categoryrouter = require('./api/category/category.router');
const contactrouter = require('./api/contact/contact.router');
const faqsrouter = require('./api/faqs/faqs.router');
const merchantrouter = require('./api/merchant/merchant.router');
const productrouter = require('./api/product/product.router');
const reviewrouter = require('./api/review/review.router');
const subscriptionrouter = require('./api/subscription/subscription.router');
const billingrouter = require('./api/billing/billing.router');
const userrouter = require('./api/user/user.router');
const cartrouter = require('./api/cart/cart.router');
const messagerouter = require('./api/message/message.router');
const notificationrouter = require('./api/notification/notification.router');
const push_notificationrouter = require('./api/push_notification/push_notification.router');
const wishlistrouter = require('./api/wishlist/wishlist.router');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use('/api/category', categoryrouter);
app.use('/api/contact', contactrouter);
app.use('/api/faqs', faqsrouter);
app.use('/api/merchant', merchantrouter);
app.use('/api/product', productrouter);
app.use('/api/review', reviewrouter);
app.use('/api/subscription', subscriptionrouter);
app.use('/api/billing', billingrouter);
app.use('/api/user', userrouter);
app.use('/api/cart', cartrouter);
app.use('/api/message', messagerouter);
app.use('/api/notification', notificationrouter);
app.use('/api/push_notification', push_notificationrouter);
app.use('/api/wishlist', wishlistrouter);



app.use("/uploads", express.static('uploads'));

// Start the server
const port = 3011;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

