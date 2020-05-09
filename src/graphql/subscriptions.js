/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
      Vat
      Name
      Logo
      Enabled
    }
  }
`;
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
      Vat
      Name
      Logo
      Enabled
    }
  }
`;
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
      Vat
      Name
      Logo
      Enabled
    }
  }
`;
export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty {
    onCreateParty {
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
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty {
    onUpdateParty {
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
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty {
    onDeleteParty {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer {
    onCreateCustomer {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer {
    onUpdateCustomer {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer {
    onDeleteCustomer {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor {
    onCreateVendor {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor {
    onUpdateVendor {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor {
    onDeleteVendor {
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
export const onCreateSalesOrder = /* GraphQL */ `
  subscription OnCreateSalesOrder {
    onCreateSalesOrder {
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
export const onUpdateSalesOrder = /* GraphQL */ `
  subscription OnUpdateSalesOrder {
    onUpdateSalesOrder {
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
export const onDeleteSalesOrder = /* GraphQL */ `
  subscription OnDeleteSalesOrder {
    onDeleteSalesOrder {
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
export const onCreateSalesOrderLine = /* GraphQL */ `
  subscription OnCreateSalesOrderLine {
    onCreateSalesOrderLine {
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
export const onUpdateSalesOrderLine = /* GraphQL */ `
  subscription OnUpdateSalesOrderLine {
    onUpdateSalesOrderLine {
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
export const onDeleteSalesOrderLine = /* GraphQL */ `
  subscription OnDeleteSalesOrderLine {
    onDeleteSalesOrderLine {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
