import { Body, Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';
import { CreateDto } from './dto/create-cat.dto';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {

    constructor(private catService: CatService) { }
    @Get()
    findAll(@Query('age') age?: string, @Query('gender') gender?: string) {
        return this.catService.getAll();
    }

    @Post()
    create(@Body() body: CreateDto) {
        return this.catService.create(body)
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
