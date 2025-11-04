# CompaniesApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCompany**](#createcompany) | **POST** /api/v1/companies | Create a new company|
|[**deleteCompany**](#deletecompany) | **DELETE** /api/v1/companies/{companyId} | Delete a company by ID|
|[**getAllCompanies**](#getallcompanies) | **GET** /api/v1/companies | Get all companies|
|[**getCompanyById**](#getcompanybyid) | **GET** /api/v1/companies/{companyId} | Get company by ID|
|[**patchCompany**](#patchcompany) | **PATCH** /api/v1/companies/{companyId} | Patch a company|

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

# **deleteCompany**
> CompanyResource deleteCompany()

Deletes a company identified by the provided ID. This action will remove all associated data.

### Example

```typescript
import {
    CompaniesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompaniesApi(configuration);

let companyId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteCompany(
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
|**204** | Company deleted successfully |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllCompanies**
> CompanyResource getAllCompanies()

Retrieves a list of paginated companies.

### Example

```typescript
import {
    CompaniesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CompaniesApi(configuration);

let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllCompanies(
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


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
|**200** | Companies retrieved successfully |  -  |
|**204** | No companies found |  -  |
|**401** | Unauthorized. |  -  |

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

# **patchCompany**
> CompanyResource patchCompany(patchCompanyResource)

Updates one or more properties of a company. Only fields provided in the request body will be updated. This action is only available to administrators.

### Example

```typescript
import {
    CompaniesApi,
    Configuration,
    PatchCompanyResource
} from './api';

const configuration = new Configuration();
const apiInstance = new CompaniesApi(configuration);

let companyId: number; // (default to undefined)
let patchCompanyResource: PatchCompanyResource; //

const { status, data } = await apiInstance.patchCompany(
    companyId,
    patchCompanyResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchCompanyResource** | **PatchCompanyResource**|  | |
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
|**200** | Company updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**403** | Forbidden. User is not an admin. |  -  |
|**404** | Company not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

