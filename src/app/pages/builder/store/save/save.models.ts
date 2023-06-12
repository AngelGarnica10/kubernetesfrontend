import { Building } from '@app/models/backend/builder';
export { Building as BuildingResponse } from '@app/models/backend/builder';

export type BuildingCreateRequest =Omit<Building, 'id' | 'createdAt'>;
