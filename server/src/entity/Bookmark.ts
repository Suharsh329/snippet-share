import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "bookmarks" })
export class Bookmark {

  @PrimaryGeneratedColumn()
  bid: number;

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
