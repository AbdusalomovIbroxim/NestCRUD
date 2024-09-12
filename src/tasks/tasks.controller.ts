import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.tasksService.findOne(numericId);
  }

  @Post()
  create(@Body() createTaskDto: any) {
    return this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: any) {
    const numericId = parseInt(id, 10);
    return this.tasksService.update(numericId, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const numericId = parseInt(id, 10);
    return this.tasksService.remove(numericId);
  }
}
