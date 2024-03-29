import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Entities } from "./Entities";
import { Users } from "./Users";

@Index("user_accounts_usac_account_number_key", ["usacAccountNumber"], {
  unique: true,
})
@Index("user_accounts_pk", ["usacEntityId", "usacUserId"], { unique: true })
@Entity("user_accounts", { schema: "payment" })
export class UserAccounts {
  @Column("integer", { primary: true, name: "usac_entity_id" })
  usacEntityId: number;

  @Column("integer", { primary: true, name: "usac_user_id" })
  usacUserId: number;

  @Column("character varying", {
    name: "usac_account_number",
    nullable: true,
    unique: true,
    length: 25,
  })
  usacAccountNumber: string | null;

  @Column("numeric", { name: "usac_saldo", nullable: true })
  usacSaldo: string | null;

  @Column("character varying", {
    name: "usac_type",
    nullable: true,
    length: 15,
  })
  usacType: string | null;

  @Column("smallint", { name: "usac_expmonth", nullable: true })
  usacExpmonth: number | null;

  @Column("smallint", { name: "usac_expyear", nullable: true })
  usacExpyear: number | null;

  @Column("timestamp without time zone", {
    name: "usac_modified_date",
    nullable: true,
    default: () => "now()",
  })
  usacModifiedDate: Date | null;

  @Column("character varying", {
    name: "usac_card_holder_name",
    nullable: true,
    length: 50,
  })
  usacCardHolderName: string | null;

  @Column("character varying", { name: "usac_secured_key", nullable: true })
  usacSecuredKey: string | null;

  @ManyToOne(() => Entities, (entities) => entities.userAccounts, {
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "usac_entity_id", referencedColumnName: "entityId" }])
  usacEntity: Entities;

  @ManyToOne(() => Users, (users) => users.userAccounts, {
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "usac_user_id", referencedColumnName: "userId" }])
  usacUser: Users;
}
