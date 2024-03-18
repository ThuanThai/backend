import {
    getHomePage,
    getView,
    postCreateUser,
} from "../controllers/homeController.js";

import express from "express";

const router = express.Router();

router.get("/", getHomePage);
router.get("/demo", getView);
router.post("/create-user", postCreateUser);

export default router;
