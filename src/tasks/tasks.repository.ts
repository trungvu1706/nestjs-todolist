import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Task } from './task.entity';
import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TaskRepository extends Repository<Task> {
  constructor(private dataSource: DataSource) {
    super(Task, dataSource.createEntityManager());
  }

  async createTask({ title, description }: CreateTaskDTO): Promise<Task> {
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
