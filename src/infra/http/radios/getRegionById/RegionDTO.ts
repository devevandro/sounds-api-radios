import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RegionDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  regionId: string;
}
