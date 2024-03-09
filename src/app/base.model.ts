// readonly variables de solo lectura, no se puede enviar valores sobre escritos
export interface BaseModel{
  readonly id:  string;
  readonly createdAt: Date;
  updatedAt: Date;
}
