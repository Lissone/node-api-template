import { Router } from 'express';

import { userRoutes } from './userRoutes';

// ---------------------------------------------------- //

export const apiRoutes = Router();

apiRoutes.use('/api/v1/user', userRoutes);

