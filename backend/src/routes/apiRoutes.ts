import { Router } from "express";

import activitiesRoutes from "@routes/activities.route";
import healthCheckRoute from "@routes/healthCheck.route";

const router = Router();


router.use("/activities", activitiesRoutes);
router.use("/healthCheck", healthCheckRoute);

export default router;
