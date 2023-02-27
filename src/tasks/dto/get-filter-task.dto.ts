import { IsOptional, IsString, IsEnum } from 'class-validator';

import { TaskStatus } from '../tasks-status.enum';

export class GetFilterDTO {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
