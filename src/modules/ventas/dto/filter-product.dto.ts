export class FilterProductoDto extends PaginationDto{
  @isOptional()
  @IsString(IsStringValidationOptions())
  readonly title;
  


}
