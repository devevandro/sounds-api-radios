import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RadiosRegionDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  regionId: string;
}
