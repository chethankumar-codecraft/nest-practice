import { Body, Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';
import { CreateDto } from './dto/create-cat.dto';

@Controller('cat')
export class CatController {
    @Get()
    findAll(@Query('age') age?: string, @Query('gender') gender?: string) {
        return `My age is ${age} and gender ${gender}`
    }

    @Post()
    create(@Body() body: CreateDto) {
        return [];
    }
    @Get('abcd/*')
    getall(): string {
        return 'This will run for all /abcd path';
    }

    @Redirect('another-url')
    @Get('users')
    findAll2() {
        return 'first url';
    }

    @Get('another-url')
    shjh() {
        return 'an url'
    }

    @Get(':id')
    getparam(@Param('id') id: string) {
        return id;
    }


}
