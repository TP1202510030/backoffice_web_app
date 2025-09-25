# RolesApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**getAllRoles**](#getallroles) | **GET** /api/v1/roles | Get all roles|

# **getAllRoles**
> Array<RoleResource> getAllRoles()

Get all roles.

### Example

```typescript
import {
    RolesApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new RolesApi(configuration);

const { status, data } = await apiInstance.getAllRoles();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<RoleResource>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Roles retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

