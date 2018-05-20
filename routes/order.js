const router = require('express').Router()
const Gig = require('../models/gig')

const fee = 3.15

router.get('/checkout/single_package/:id', (req, res, next) => {
    Gig.findOne({_id: req.params.id }, function(err, gig) {
        var totalPrice = gig.price + fee
        req.session.gig = gig 
        req.session.price = totalPrice 
        res.render('checkout/single_package', { gig: gig, totalPrice: totalPrice })
    })
})

router.route('/payment')
    .get((req, res, next) => {
        res.render('checkout/payment')
    })

module.exports = router