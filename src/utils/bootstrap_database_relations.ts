import setupRelationUserAndOrder from "../models/relation_user_and_order_table";

export default function bootstrapDatabaseRelations() {
  // register relations between tables here
  setupRelationUserAndOrder();
}
