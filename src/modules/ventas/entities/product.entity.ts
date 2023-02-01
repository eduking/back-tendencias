import { create } from "domain";
import { title } from "process";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn ,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,

} from "typeorm";

@Entity('product',{schema: 'ventas'} )
export class ProductEntity{
    @PrimaryGeneratedColumn(
        @PrimaryGeneratedColumn(sv)
    )
    id:number;

    @CreateDateColumn({
            name:'created_date',
            type: 'timestamptz' ,
            default:() =>'CURRENT_TIMESTAP'

        })
        createdAt:Date;

        @UpdateDateColumn({
            name:'updated_date',
            type: 'timestamptz' ,
            default:() =>'CURRENT_TIMESTAP'

        })
        updatedAt: Date;


        @DeleteDateColumn({

            name:'deleted_date',
            type: 'timestamptz' ,
            nullable :true,
        })
        deletedAt:Date;
    



    //RelationShip
@ManyToOne(() => CategoryEntity, (category)=> category.product)
category: CategoryEntity;



@Column('varchar',{
    name:title,
    unique:true,
    comment: 'titulo del producto'
})
title:string;

@Column ('integer',{
    name:'price',
    comment: 'precio del producto condos decimales ',
})
price :number;

@Column('varchar',{
    name:'description',
    nullable :true,
    comment:'descripcion del producto'
})
description:string;

/*@Column('boolean',{
    name:'estate',

})
state:boolean;*/
/*@Column('enum',{
    name:'language',
    enum:languageTypeEnum,

})
language:LanguageTypeEnum;*/


//Completar 
 @BeforeInsert()
 @BeforeUpdate()

async setTitle(){
    if(!this.title){
        return;
    }
    this.title = this.title.toUpperCase();
}
/*setEmail(){
    return;
}
this.email = this.email.toLowerCase().trim();
    
async hashPassword(){

    if(!this.password){
        return;
    }
    this.password = await Bcrypt.hash();
}*/

}





