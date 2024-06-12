import { Router } from "express";
import {
    getAllActivitiesController, 
    filteredActivitiesController, 
    createActivitiesController
} from "@controllers/activity.controller";
import validate from "@middlewares/joiValidation.middleware";

import { activitiesSchema } from "src/validations/activity.validation";


/**
 * @swagger
 * tags:
 *   name: Activities
 *   description: API for managing activities
 */
const router = Router();

/**
 * @swagger
 * /activities:
 *   get:
 *     summary: Retrieve a list of activities
 *     tags: [Activities]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of items to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: A list of activities
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Activity'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     limit:
 *                       type: integer
 *                       example: 10
 *                     offset:
 *                       type: integer
 *                       example: 0
 */
router.get("/", getAllActivitiesController);

/**
 * @swagger
 * /activities/search:
 *   get:
 *     summary: Search for activities based on filters
 *     tags: [Activities]
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: The search query for the activity title
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: The number of items to return
 *       - in: query
 *         name: offset
 *         schema:
 *           type: integer
 *           default: 0
 *         description: The number of items to skip before starting to collect the result set
 *     responses:
 *       200:
 *         description: A list of activities matching the search query
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Activity'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     limit:
 *                       type: integer
 *                       example: 10
 *                     offset:
 *                       type: integer
 *                       example: 0
 */
router.get("/search", filteredActivitiesController);

/**
 * @swagger
 * /activities:
 *   post:
 *     summary: Create a new activity
 *     tags: [Activities]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - price
 *               - currency
 *               - supplier_name
 *               - location
 *             properties:
 *               title:
 *                 type: string
 *                 example: "City Sightseeing Tour"
 *               price:
 *                 type: number
 *                 format: float
 *                 example: 45.0
 *               currency:
 *                 type: string
 *                 example: "EUR"
 *               rating:
 *                 type: number
 *                 format: float
 *                 example: 4.5
 *               special_offer:
 *                 type: boolean
 *                 example: false
 *               supplier_name:
 *                 type: string
 *                 example: "City Tours Ltd."
 *               location:
 *                 type: string
 *                 example: "Berlin"
 *     responses:
 *       201:
 *         description: The activity was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   $ref: '#/components/schemas/Activity'
 */
router.post("/", validate(activitiesSchema), createActivitiesController);



export default router;