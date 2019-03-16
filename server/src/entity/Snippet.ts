import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({ name: "snippets" })
export class Snippet {

  @PrimaryGeneratedColumn()
  sid: number;

  @Column({
    type: "text",
    nullable: false
  })
  title: string;

  @Column({
    type: "text",
    nullable: false,
  })
  code: string;

  @Column({
    type: "text",
    nullable: false,
  })
  language: string;

  @Column({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
  createdAt: string;

  @ManyToOne(type => User, user => user.uid, { eager: true })
  user: User

}
