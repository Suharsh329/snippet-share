import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
  createdAt: string;

  @Column({
    type: "timestamp with time zone",
    default: () => "CURRENT_TIMESTAMP"
  })
  updatedAt: string;

}
