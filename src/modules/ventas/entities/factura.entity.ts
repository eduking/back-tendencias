import { ClienteEntity } from "./cliente.entity"; 

@Entity('factura', {schema:'registro'} )
export class FacturaEntity{
@PrimaryGeneratedColumn('sv')
id:string;
//Crear
@CreateDateColumn({
   name:'created_date',
   type:'timestamptz',
   default:() => 'CURRENT_TIMESTAMP',
 })
 createdAt: Date;
 //Actualizar
@UpdateDateColumn({
 name:'updated_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
updatedAt: Date;
//Borrar
@DeleteDateColumn({
 name:'deleted_date',
 type:'timestamptz',
 default:() => 'CURRENT_TIMESTAMP',
})
deletedAt: Date;
//Relaciones
@ManyToOne(() => FacturaEntity, (factura) => factura.products)
factura: FacturaEntity;
//Columna de Titulo
@Column('varchar', {
    name:'title',
    unique:true,
    comment:'Titulo de la factura',
  })
  title: string;
//Columna de Descripción
  @Column('varchar', {
    name:'descripcion',
    nullable:true,
    comment:'Descripción de la factura',
  })
  descripcion: string;
//Columna de Cantidad
  @Column('varchar', {
    name:'cantidad',
    nullable:true,
    comment:'Descripción de la factura',
  })
  cantidad: string;
//Columna de Precio
  @Column('varchar', {
    name:'precio',
    nullable:true,
    comment:'Descripción del precio',
  })
  precio: string;
//Columna de Subtotal
  @Column('varchar', {
    name:'subtotal',
    nullable:true,
    comment:'Descripción del subtotal',
  })
  subtotal: string;
}