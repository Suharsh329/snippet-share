import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Snippet } from "./Snippet";

@Entity({ name: "users" })
export class User {

  @PrimaryGeneratedColumn()
  uid: number;

  @Column({
    type: "text",
    nullable: false
  })
  name: string;

  @Column({
    type: "text",
    nullable: false,
    unique: true
  })
  username: string;

  @Column({
    type: "text",
    nullable: false,
    unique: true
  })
  email: string;

  @Column({
    type: "text",
    nullable: false,
    select: false
  })
  password: string;

  @Column({
    type: "text",
    default: "'profile_pics/default.png'"
  })
  profile_pic: string;

  @Column({
    type: "simple-array",
    nullable: true
  })
  links: string[];

  @Column({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
  createdAt: string;

  @OneToMany(type => Snippet, snippet => snippet.user)
  snippet: Snippet[]

}
