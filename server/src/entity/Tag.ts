import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "tags" })
export class User {

  @PrimaryGeneratedColumn()
  tid: number;

  @Column({
    type: "text",
    nullable: false,
    unique: true
  })
  name: string;
}
