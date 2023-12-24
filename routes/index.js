const { Router } = require("express");
const User = require("../model/user");
const Product = require("../model/product");
const ProductTu = require("../model/productTu");
const ProductTre = require("../model/producTre");
const Checkout = require("../model/checkout");
const jwt = require("jsonwebtoken");
const { SECRET, MAX_AGE } = require("../consts")
const { requireLogin } = require("../middleware/authentication");
const { requireAdmin } = require("../middleware/authentication");


const router = Router();

const createJwt = (payload) => {
    return jwt.sign({ payload }, SECRET, { expiresIn: MAX_AGE });
}

/**
 * @route POST api/users/register
 * @desc Register new user
 * @access Private
 */
router.post("/users/register", (req, res) => {
    const { username, email, password, namaRekening, namaBank, nomorRekening } = req.body;
    User.create({ username, email, password, namaRekening, namaBank, nomorRekening })
        .then(() => {
            return res.status(200).json({ message: "success" })
        })
        .catch(error => {
            console.log(error);
            return res.status(400).json({ message: "failed", error })
        });
});

/**
 * @route POST api/users/login
 * @desc Login user
 * @access Public
 */
router.post("/users/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email, password: password })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: "failed", error: "wrong-credentials" });
            }
            const maxAge = 3 * 24 * 60 * 60
            const token = createJwt(user._id, maxAge);
            res.cookie("auth", token, { httpOnly: true, maxAge: maxAge * 10 });
            return res.status(200).json({ message: "success", data: user })
        })
        .catch(err => {
            return res.status(400).json({ message: "failed", err })
        });
});

/**
 * @route POST api/users/logout
 * @desc Log user out
 * @access Public
 */
router.post("/users/logout", (req, res) => {
    res.clearCookie("auth");
    return res.status(200).json({ message: "success" })
});

/**
 * @route GET api/users
 * @desc Get authenticated user
 * @access Private
 */
router.get("/users", requireLogin, (req, res) => {
    const token = req.cookies.auth;
    const _id = jwt.verify(token, SECRET).payload;
    User.findOne({ _id }, { username: 1, email: 1, namaRekening: 1, namaBank: 1, nomorRekening: 1, registrationDate: 1 })
        .then(user => {
            return res.status(200).json({ message: "success", data: user })
        })
        .catch((err) => {
            console.log(err);
            return res.status(401).json({ message: "error", code: "unauthenticated-access" });
        })
});

/**
 * @route GET api/users
 * @desc Get authenticated user
 * @access Private
 */
router.get("/product", (req, res) => {
    Product.find()
        .then((productList) => {
            const formattedData = productList.map((product) => {
                return {
                    imageUrl: product.imageUrl,
                    name: product.name,
                    deskripsi: product.deskripsi,
                    price: product.price
                };
            });

            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
});

router.get("/products", (req, res) => {
    ProductTu.find()
        .then((productLists) => {
            const formattedData = productLists.map((product) => {
                return {
                    imageUrl: product.imageUrl,
                    name: product.name,
                    deskripsi: product.deskripsi,
                    price: product.price
                };
            });

            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
});

router.get("/productsx", (req, res) => {
    ProductTre.find()
        .then((productListsx) => {
            const formattedData = productListsx.map((product) => {
                return {
                    imageUrl: product.imageUrl,
                    name: product.name,
                    deskripsi: product.deskripsi,
                    price: product.price
                };
            });

            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
});

/**
 * @route POST api/checkout
 * @desc Checkout product
 * @access Private
 */
router.post('/checkout', requireLogin, async (req, res) => {
    const { nama, selectedProducts } = req.body;

    try {
        const checkoutItems = [];

        const checkoutData = selectedProducts.map((product) => {
            const { name, inputValue, price, statusPay } = product;
            return {
                username: nama,
                productName: name,
                ProductQuantity: inputValue,
                ProductPrice: price * inputValue,
                status: statusPay
            };
        });

        const newCheckout = new Checkout({
            username: nama,
            checkoutItems: checkoutData,
        });

        const savedCheckout = await newCheckout.save();

        return res.status(201).json({ message: 'success', data: savedCheckout });
    } catch (error) {
        console.error('Error during checkout:', error);
        return res.status(500).json({ message: 'error', error: 'internal-server-error' });
    }
});

/**
 * @route GET api/users/checkout
 * @desc Get user's checkout data
 * @access Private
 */
router.get("/checkout", requireLogin, (req, res) => {
    Checkout.find()
        .then((checkoutList) => {
            const formattedData = checkoutList.map((checkout) => {
                return {
                    name: checkout.username,
                    checkoutItems: checkout.checkoutItems,
                };
            });

            return res.status(200).json({ message: "success", data: formattedData });
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({ message: "error", error: "internal-server-error" });
        });
});

/**
 * @route GET api/admin/dashboard
 * @desc Get user and checkout data for admin dashboard
 * @access Private (admin)
 */
router.get('/admin', requireLogin, requireAdmin, async (req, res) => {
    try {
        const userData = await User.find({}, { username: 1, email: 1, namaRekening: 1, namaBank: 1, nomorRekening: 1, registrationDate: 1 });
        const checkoutData = await Checkout.find().populate('username', 'checkoutItems');

        return res.status(200).json({ message: 'success', userData, checkoutData });
    } catch (error) {
        console.error('Error fetching admin dashboard data:', error);
        return res.status(500).json({ message: 'error', error: 'internal-server-error' });
    }
});

router.post('/checkout/:id/update-status', requireLogin, requireAdmin, async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedCheckout = await Checkout.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedCheckout) {
            return res.status(404).json({ message: 'error', error: 'Checkout not found' });
        }

        return res.status(200).json({ message: 'success', data: updatedCheckout });
    } catch (error) {
        console.error('Error updating checkout status:', error);
        return res.status(500).json({ message: 'error', error: 'internal-server-error' });
    }
});

router.get('/user/checkout/status', requireLogin, async (req, res) => {
    const loggedInUsername = req.user.username;

    try {
        const checkoutStatus = await Checkout.findOne({ username: loggedInUsername }).select('status');

        if (!checkoutStatus) {
            return res.status(404).json({ message: 'error', error: 'Checkout status not found' });
        }

        return res.status(200).json({ message: 'success', data: checkoutStatus });
    } catch (error) {
        console.error('Error fetching user checkout status:', error);
        return res.status(500).json({ message: 'error', error: 'internal-server-error' });
    }
});



module.exports = router;