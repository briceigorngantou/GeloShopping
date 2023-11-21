import { prisma } from '../config/index';
import { ResponseHelper } from '../helpers/index.js';
/**
 * A controller class for handling products-related requests.
 */
class ProductsController {
    /**
     * Login a user with the given email and password.
     * @async
     * @param {Object} req - The Express request object.
     * @param {Object} res - The Express response object.
     * @param {Function} next - The Express next function.
     * @returns {Promise<void>} A promise that resolves when the user has the right credential rejects with an error.
     */
    async createProduct(req, res, next) {
        try {
            /**
             * @description: creating a new product
             * > collect data from the req.body
             * > query the products entity
             * > add a new product in the db
             * > return that newly added product
             * **/

            /**
             * req.body = {
             *   name: "shoes"
             *   price: "1200"
             *   description:  "This is a shoe with size 45"
             *   imageUrl: "https://unsplash.com/shoes/shoes-1.png"
             *   tax: "0.5"
             *   color: "mixed"
             *   quantity: "2"
             *   shipping: "200"
             *   size: "400"
             * }
             * **/

            //get props from req.body
            const data = req.body;
            //query db and add new product
            const newProduct = await prisma.products.create({ data });

            //return the new product.
            return next(new ResponseHelper(res).success(newProduct));
        } catch (e) {
            return next(new ResponseHelper(res).error('Internal server error'));
        }
    }
    /**
     * Get all products from the database.
     * @async
     * @param {Object} req - The Express request object.
     * @param {Object} res - The Express response object.
     * @param {Function} next - The Express next function.
     * @returns {Promise<void>} A promise that resolves when the user has the right credential rejects with an error.
     */
    async getProduct(req, res, next) {
        try {
            /**
             * @description: Getting all products
             * > collect data from the req.body
             * > query the products entity
             * >get the  products in the db
             * > return all products
             * **/

            /**
             * req.body is empty since it is a get request
             * **/

            //query db and add get all products
            const allProduct = await prisma.products.findMany();

            //return the new product.
            return next(new ResponseHelper(res).success(allProduct));
        } catch (e) {
            return next(new ResponseHelper(res).error('Internal server error'));
        }
    }
    /**
     * Get Single product from the database.
     * @async
     * @param {Object} req - The Express request object.
     * @param {Object} res - The Express response object.
     * @param {Function} next - The Express next function.
     * @returns {Promise<void>} A promise that resolves when the user has the right credential rejects with an error.
     */
    async getSingleProduct(req, res, next) {
        try {
            /**
             * @description: Getting one product
             * > collect data from the req.body
             * > query the products entity
             * >get the  product in the db by searching for the product id
             * >if the id is not null:{
             * pass
             * }else: 400 saying invalid id received.
             * >If the product exist:{
             *  return the product
             * >}else: an empty object
             * **/

            /**
             * req.body is empty since it is a get request
             * req.params is not empty
             *
             * **/
            const { id } = req.params;

            //if id is null
            if (id === null) {
                return next(
                    new ResponseHelper(res).error('Invalid id received', 400)
                );
            }

            //query db and add get a product with id
            const singleProduct = await prisma.products.findUnique({
                where: { id },
            });

            //return the product.
            return next(new ResponseHelper(res).success(singleProduct ?? {}));
        } catch (e) {
            return next(new ResponseHelper(res).error('Internal server error'));
        }
    }
}

export const productsController = new ProductsController();
