import Stripe from 'stripe';


// function for payment

export const payment = async (req, res) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    stripe.charges.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        // add rupee as currency
        currency:"inr"
    }).then((response) => {
        res.status(200).json(response);
    }
    ).catch((err) => {
        res.status(500).json(err);
    })
}




