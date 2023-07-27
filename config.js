const DEV_LINK = 'http://localhost:5000/';
const PROD_LINK = 'https://api.leotheprodu.com/';
const envelopment =
    process.env.NODE_ENV === 'production' ? PROD_LINK : DEV_LINK;

export const apiLink = (link) => {
    return envelopment + link;
};
