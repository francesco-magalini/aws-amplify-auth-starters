import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Company {
  readonly id: string;
  readonly Vat?: string;
  readonly Name?: string;
  readonly Logo?: string;
  readonly Enabled?: boolean;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class Party {
  readonly id: string;
  readonly Company?: Company;
  readonly CompanyName?: string;
  readonly FirstName?: string;
  readonly LastName?: string;
  readonly Email?: string;
  readonly Mobile?: string;
  readonly AddressLine1?: string;
  readonly AddressLine2?: string;
  readonly Country?: string;
  constructor(init: ModelInit<Party>);
  static copyOf(source: Party, mutator: (draft: MutableModel<Party>) => MutableModel<Party> | void): Party;
}

export declare class Customer {
  readonly id: string;
  readonly Company?: Company;
  readonly Party?: Party;
  readonly Description?: string;
  constructor(init: ModelInit<Customer>);
  static copyOf(source: Customer, mutator: (draft: MutableModel<Customer>) => MutableModel<Customer> | void): Customer;
}

export declare class Vendor {
  readonly id: string;
  readonly Company?: Company;
  readonly Party?: Party;
  readonly Description?: string;
  constructor(init: ModelInit<Vendor>);
  static copyOf(source: Vendor, mutator: (draft: MutableModel<Vendor>) => MutableModel<Vendor> | void): Vendor;
}

export declare class SalesOrder {
  readonly id: string;
  readonly Company?: Company;
  readonly Customer?: Customer;
  readonly Title?: string;
  readonly SalesOrderLine?: SalesOrderLine[];
  constructor(init: ModelInit<SalesOrder>);
  static copyOf(source: SalesOrder, mutator: (draft: MutableModel<SalesOrder>) => MutableModel<SalesOrder> | void): SalesOrder;
}

export declare class SalesOrderLine {
  readonly id: string;
  readonly Company?: Company;
  readonly Item?: Item;
  readonly Qty?: number;
  readonly Status?: string;
  readonly salesOrderSalesOrderLineId?: string;
  constructor(init: ModelInit<SalesOrderLine>);
  static copyOf(source: SalesOrderLine, mutator: (draft: MutableModel<SalesOrderLine>) => MutableModel<SalesOrderLine> | void): SalesOrderLine;
}

export declare class Item {
  readonly id: string;
  readonly Company?: Company;
  readonly Name?: string;
  readonly Description?: string;
  constructor(init: ModelInit<Item>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

export declare class Employee {
  readonly id: string;
  readonly Company?: Company;
  readonly FirstName?: string;
  readonly LastName?: string;
  readonly Email?: string;
  readonly Position?: string;
  readonly Enabled?: boolean;
  constructor(init: ModelInit<Employee>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee>) => MutableModel<Employee> | void): Employee;
}