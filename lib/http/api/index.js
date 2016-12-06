import { Router } from "express";

const router = Router();

router.use((req, res, next) => {
    console.log(`Client request to "/api/**" has been intercepted.`);
    next();
});

router.use("/tpi", require("../../tpi/api").default);

export default router;
