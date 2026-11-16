import type { NextFunction, Request, Response } from 'express';
import { createEnquiry, enquirySubmissionSchema } from '../services/enquiry-service.js';

export async function submitEnquiry(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const parsed = enquirySubmissionSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ ok: false, errors: parsed.error.flatten().fieldErrors });
      return;
    }

    const { website, ...data } = parsed.data;
    if (website) {
      res.status(201).json({ ok: true });
      return;
    }

    await createEnquiry(data);
    res.status(201).json({ ok: true });
  } catch (error) {
    next(error);
  }
}
