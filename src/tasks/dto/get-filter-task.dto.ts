import { TaskStatus } from './../tasks.model';

export class GetFilterDTO {
  search?: string;
  status?: TaskStatus;
}
