import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "likes" })
export class Like {

  @PrimaryGeneratedColumn()
  lid: number;

  @Column({
    type: "int",
    nullable: false
  })
  uid: number;

  @Column({
    type: "int",
    nullable: false,
  })
  sid: number;
}
