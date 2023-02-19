import { IsOptional, IsString, IsEnum } from 'class-validator';

import { TaskStatus } from './../tasks.model';

export class GetFilterDTO {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
