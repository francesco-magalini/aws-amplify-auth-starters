/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      Vat
      Name
      Logo
      Enabled
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      Vat
      Name
      Logo
      Enabled
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      Vat
      Name
      Logo
      Enabled
    }
  }
`;
export const createParty = /* GraphQL */ `
  mutation CreateParty(
    $input: CreatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    createParty(input: $input, condition: $condition) {
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
export const updateParty = /* GraphQL */ `
  mutation UpdateParty(
    $input: UpdatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    updateParty(input: $input, condition: $condition) {
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
export const deleteParty = /* GraphQL */ `
  mutation DeleteParty(
    $input: DeletePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    deleteParty(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
export const createSalesOrder = /* GraphQL */ `
  mutation CreateSalesOrder(
    $input: CreateSalesOrderInput!
    $condition: ModelSalesOrderConditionInput
  ) {
    createSalesOrder(input: $input, condition: $condition) {
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
export const updateSalesOrder = /* GraphQL */ `
  mutation UpdateSalesOrder(
    $input: UpdateSalesOrderInput!
    $condition: ModelSalesOrderConditionInput
  ) {
    updateSalesOrder(input: $input, condition: $condition) {
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
export const deleteSalesOrder = /* GraphQL */ `
  mutation DeleteSalesOrder(
    $input: DeleteSalesOrderInput!
    $condition: ModelSalesOrderConditionInput
  ) {
    deleteSalesOrder(input: $input, condition: $condition) {
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
export const createSalesOrderLine = /* GraphQL */ `
  mutation CreateSalesOrderLine(
    $input: CreateSalesOrderLineInput!
    $condition: ModelSalesOrderLineConditionInput
  ) {
    createSalesOrderLine(input: $input, condition: $condition) {
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
export const updateSalesOrderLine = /* GraphQL */ `
  mutation UpdateSalesOrderLine(
    $input: UpdateSalesOrderLineInput!
    $condition: ModelSalesOrderLineConditionInput
  ) {
    updateSalesOrderLine(input: $input, condition: $condition) {
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
export const deleteSalesOrderLine = /* GraphQL */ `
  mutation DeleteSalesOrderLine(
    $input: DeleteSalesOrderLineInput!
    $condition: ModelSalesOrderLineConditionInput
  ) {
    deleteSalesOrderLine(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
