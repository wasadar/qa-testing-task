import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

export interface Item {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class TaskService {
  private items: Item[] = [];
  private idCounter = 1;

  create(createItemDto: CreateItemDto): Item {
    const newItem: Item = {
      id: this.idCounter++,
      ...createItemDto,
    };
    this.items.push(newItem);
    return newItem;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find((item) => item.id === id);
    if (!item) throw new NotFoundException(`Item with id ${id} not found`);
    return item;
  }

  update(id: number, updateItemDto: CreateItemDto): Item {
    const item = this.findOne(id);
    Object.assign(item, updateItemDto);
    return item;
  }

  remove(id: number): void {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) throw new NotFoundException(`Item with id ${id} not found`);
    this.items.splice(index, 1);
  }
}
