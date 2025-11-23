import { Router } from "express";
import { uploadSingleImageController } from "../../../controllers/portifolio-upload/portifolioUploadController";
import { FilePortfolioManager } from "../../../middlewares/portifolio-upload/fileManager";

const router = Router()

router.post('/upload', FilePortfolioManager.single('file'), uploadSingleImageController)