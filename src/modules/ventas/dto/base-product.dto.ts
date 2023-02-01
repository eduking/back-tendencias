import { CatalogueEntity, PlanningEntity } from '@uic/models';
import {
  IsNotEmpty,
  IsDate,
  Allow,
  IsPositive,
  IsBoolean,
} from 'class-validator';


import { isNotEmptyValidationOptions } from '@shared/validation';

export class BaseProductDto {
  @IsNotEmpty(IsNotEmptyValidationOptions())
  @IsString(IsStringValidationOptions())
  readonly title:string;



  @IsNotEmpty(IsNotEmptyValidationOptions())
  @IsNumber(IsNotEmptyValidationOptions())
  readonly price:number;



  @IsNotEmpty(IsNotEmptyValidationOptions())
  @IsString(IsStringValidationOptions())
  readonly description:string;


  @IsnotEmpty(isNotEmptyValidationOptions ())
  @IsString(ArrayNotEmptyValidationOptions())
  readonly imagen:string[];
}
