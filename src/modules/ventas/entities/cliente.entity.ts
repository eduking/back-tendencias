import { FacturaEntity } from "./factura.entity";

@Entity('clients', {schema:'registro'} )
export class ClienteEntity{
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
@OneToMany(() => ClienteEntity, (cliente) => cliente.factura)
  children: ClienteEntity[];
//Columna de Nombre
@Column('varchar', {
 name:'name',
 unique:true,
 comment:'Nombre del Cliente',
})
name: string;
//Columna de Cedula
@Column('number', {
 name:'cedula',
 comment:'Cedula Cliente',
})
cedula: number;
//Columna de Email
@Column('varchar', {
 name:'email',
 nullable:true,
 comment:'correo del cliente',
})
email: string;
//Columna de Celular
@Column('varchar', {
    name:'celular',
    nullable:true,
    comment:'Numero de celular del cliente',
   })
celular: string;
}
