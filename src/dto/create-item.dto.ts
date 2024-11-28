import { IsNotEmpty, IsString } from "class-validator";

export class CreateItemDto {

    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    description: string;
}
  