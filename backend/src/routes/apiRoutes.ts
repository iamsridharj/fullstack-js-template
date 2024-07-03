import { Router } from "express";

import healthCheckRoute from "@routes/healthCheck.route";

const router = Router();


router.use("/healthCheck", healthCheckRoute);

export default router;
