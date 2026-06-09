import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create-cat.dto';

@Injectable()
export class CatService {

    getAll() {
        return [];
    }
    create(createDto: CreateDto) {
        return createDto;
    }
}
