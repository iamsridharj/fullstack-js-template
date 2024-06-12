import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "src/configs/swagger.config";

const router = Router();

router.use("/",  swaggerUi.serve, swaggerUi.setup(swaggerConfig));

export default router;