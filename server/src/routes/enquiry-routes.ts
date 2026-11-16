import { Router } from 'express';
import { submitEnquiry } from '../controllers/enquiry-controller.js';
import { enquiryRateLimit } from '../middlewares/rate-limit.js';

export const enquiryRouter = Router();

enquiryRouter.post('/', enquiryRateLimit, submitEnquiry);
