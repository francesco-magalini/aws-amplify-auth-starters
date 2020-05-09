/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      Vat
      Name
      Logo
      Enabled
    }
  }
`;
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Vat
        Name
        Logo
        Enabled
      }
      nextToken
    }
  }
`;
export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
      Company {
        Vat
        Name
        Logo
        Enabled
      }
      CompanyName
      FirstName
      LastName
      Email
      Mobile
      AddressLine1
      AddressLine2
      Country
    }
  }
`;
export const listPartys = /* GraphQL */ `
  query ListPartys(
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        CompanyName
        FirstName
        LastName
        Email
        Mobile
        AddressLine1
        AddressLine2
        Country
      }
      nextToken
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      Company {
        Vat
        Name
        Logo
        Enabled
      }
      Party {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        CompanyName
        FirstName
        LastName
        Email
        Mobile
        AddressLine1
        AddressLine2
        Country
      }
      Description
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        Party {
          CompanyName
          FirstName
          LastName
          Email
          Mobile
          AddressLine1
          AddressLine2
          Country
        }
        Description
      }
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      Company {
        Vat
        Name
        Logo
        Enabled
      }
      Party {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        CompanyName
        FirstName
        LastName
        Email
        Mobile
        AddressLine1
        AddressLine2
        Country
      }
      Description
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        Party {
          CompanyName
          FirstName
          LastName
          Email
          Mobile
          AddressLine1
          AddressLine2
          Country
        }
        Description
      }
      nextToken
    }
  }
`;
export const getSalesOrder = /* GraphQL */ `
  query GetSalesOrder($id: ID!) {
    getSalesOrder(id: $id) {
      Company {
        Vat
        Name
        Logo
        Enabled
      }
      Customer {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        Party {
          CompanyName
          FirstName
          LastName
          Email
          Mobile
          AddressLine1
          AddressLine2
          Country
        }
        Description
      }
      Title
      SalesOrderLine {
        items {
          Qty
          Status
        }
        nextToken
      }
    }
  }
`;
export const listSalesOrders = /* GraphQL */ `
  query ListSalesOrders(
    $filter: ModelSalesOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        Customer {
          Description
        }
        Title
        SalesOrderLine {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSalesOrderLine = /* GraphQL */ `
  query GetSalesOrderLine($id: ID!) {
    getSalesOrderLine(id: $id) {
      Company {
        Vat
        Name
        Logo
        Enabled
      }
      Item {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        Name
        Description
      }
      Qty
      Status
    }
  }
`;
export const listSalesOrderLines = /* GraphQL */ `
  query ListSalesOrderLines(
    $filter: ModelSalesOrderLineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesOrderLines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        Item {
          Name
          Description
        }
        Qty
        Status
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      Company {
        Vat
        Name
        Logo
        Enabled
      }
      Name
      Description
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        Name
        Description
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      Company {
        Vat
        Name
        Logo
        Enabled
      }
      FirstName
      LastName
      Email
      Position
      Enabled
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Company {
          Vat
          Name
          Logo
          Enabled
        }
        FirstName
        LastName
        Email
        Position
        Enabled
      }
      nextToken
    }
  }
`;
