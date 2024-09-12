import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/servise/prisma.service'; // Убедись, что путь верный

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async create(data: { title: string; description: string }) {
    return this.prisma.task.create({ data });
  }

  async update(id: number, data: { title?: string; description?: string; done?: boolean }) {
    return this.prisma.task.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}
