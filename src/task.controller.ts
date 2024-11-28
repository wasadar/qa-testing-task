import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ParseIntPipe,
  } from '@nestjs/common';
import { Item, TaskService } from './task.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class TaskController {
    constructor(private readonly itemService: TaskService) {}

    @Post()
    create(@Body() createItemDto: CreateItemDto) : Item {
        return this.itemService.create(createItemDto);
    }

    @Get()
    findAll() : Item[] {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) : Item {
        return this.itemService.findOne(id);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateItemDto: CreateItemDto,
    ) : Item {
        return this.itemService.update(id, updateItemDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        this.itemService.remove(id);
        return { message: `Item with id ${id} deleted successfully` };
    }
}