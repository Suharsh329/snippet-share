import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "snippets_tags" })
export class SnippetTag {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "int",
    nullable: false
  })
  sid: number;

  @Column({
    type: "int",
    nullable: false,
  })
  tid: number;
}
