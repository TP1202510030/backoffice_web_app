# CompaniesApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCompany**](#createcompany) | **POST** /api/v1/companies | Create a new company|
|[**getCompanyById**](#getcompanybyid) | **GET** /api/v1/companies/{companyId} | Get company by ID|
|[**updateCompany**](#updatecompany) | **PUT** /api/v1/companies/{companyId} | Update company|

# **createCompany**
> CompanyResource createCompany(createCompanyResource)

Creates a new company with the provided details and returns the created company resource.

### Example

```typescript
import {
    CompaniesApi,
    Configuration,
    CreateCompanyResource
} from './api';

const configuration = new Configuration();
const apiInstance = new CompaniesApi(configuration);

let createCompanyResource: CreateCompanyResource; //

const { status, data } = await apiInstance.createCompany(
    createCompanyResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCompanyResource** | **CreateCompanyResource**|  | |


### Return type

**CompanyResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Company created successfully |  -  |
|**400** | Invalid input or unable to create company |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCompanyById**
> CompanyResource getCompanyById()

Retrieves a company by the provided ID.

### Example

```typescript
import {
    CompaniesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompaniesApi(configuration);

let companyId: number; // (default to undefined)

const { status, data } = await apiInstance.getCompanyById(
    companyId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyId** | [**number**] |  | defaults to undefined|


### Return type

**CompanyResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateCompany**
> CompanyResource updateCompany(updateCompanyResource)

Update company

### Example

```typescript
import {
    CompaniesApi,
    Configuration,
    UpdateCompanyResource
} from './api';

const configuration = new Configuration();
const apiInstance = new CompaniesApi(configuration);

let companyId: number; // (default to undefined)
let updateCompanyResource: UpdateCompanyResource; //

const { status, data } = await apiInstance.updateCompany(
    companyId,
    updateCompanyResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateCompanyResource** | **UpdateCompanyResource**|  | |
| **companyId** | [**number**] |  | defaults to undefined|


### Return type

**CompanyResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Company updated |  -  |
|**404** | Company not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

