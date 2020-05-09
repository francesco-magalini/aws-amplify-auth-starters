// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Company, Party, Customer, Vendor, SalesOrder, SalesOrderLine, Item, Employee } = initSchema(schema);

export {
  Company,
  Party,
  Customer,
  Vendor,
  SalesOrder,
  SalesOrderLine,
  Item,
  Employee
};