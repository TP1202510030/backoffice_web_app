# GrowRoomsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createGrowRoom**](#creategrowroom) | **POST** /api/v1/grow-rooms | Create a new grow room and provision its IoT device|
|[**deleteGrowRoom**](#deletegrowroom) | **DELETE** /api/v1/grow-rooms/{growRoomId} | Delete a grow room|
|[**getGrowRoomById**](#getgrowroombyid) | **GET** /api/v1/grow-rooms/{growRoomId} | Get a grow room by ID|
|[**getGrowRoomsByCompanyId**](#getgrowroomsbycompanyid) | **GET** /api/v1/companies/{companyId}/grow-rooms | Get grow rooms by company ID|
|[**patchGrowRoom**](#patchgrowroom) | **PATCH** /api/v1/grow-rooms/{growRoomId} | Patch a grow room|

# **createGrowRoom**
> DeviceCredentialsResource createGrowRoom(createGrowRoomResource)

Creates a new grow room and returns the credentials for its IoT device. These credentials should be downloaded immediately as they are not stored.

### Example

```typescript
import {
    GrowRoomsApi,
    Configuration,
    CreateGrowRoomResource
} from './api';

const configuration = new Configuration();
const apiInstance = new GrowRoomsApi(configuration);

let companyId: number; // (default to undefined)
let createGrowRoomResource: CreateGrowRoomResource; //

const { status, data } = await apiInstance.createGrowRoom(
    companyId,
    createGrowRoomResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGrowRoomResource** | **CreateGrowRoomResource**|  | |
| **companyId** | [**number**] |  | defaults to undefined|


### Return type

**DeviceCredentialsResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Grow room created and device provisioned successfully |  -  |
|**400** | Invalid input or failed to provision device |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGrowRoom**
> deleteGrowRoom()

Marks a grow room as deleted (soft delete). This action is only available to administrators.

### Example

```typescript
import {
    GrowRoomsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrowRoomsApi(configuration);

let growRoomId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteGrowRoom(
    growRoomId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **growRoomId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Grow room deleted successfully |  -  |
|**403** | Forbidden. User is not an admin. |  -  |
|**404** | Grow room not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGrowRoomById**
> GrowRoomResource getGrowRoomById()

Retrieves a grow room by its ID.

### Example

```typescript
import {
    GrowRoomsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrowRoomsApi(configuration);

let growRoomId: number; // (default to undefined)

const { status, data } = await apiInstance.getGrowRoomById(
    growRoomId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **growRoomId** | [**number**] |  | defaults to undefined|


### Return type

**GrowRoomResource**

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

# **getGrowRoomsByCompanyId**
> PageGrowRoomResource getGrowRoomsByCompanyId()

Retrieves a list of grow rooms by the provided company ID.

### Example

```typescript
import {
    GrowRoomsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new GrowRoomsApi(configuration);

let companyId: number; // (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getGrowRoomsByCompanyId(
    companyId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**PageGrowRoomResource**

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

# **patchGrowRoom**
> GrowRoomResource patchGrowRoom(patchGrowRoomResource)

Updates one or more properties of a grow room. Only fields provided in the request body will be updated. This action is only available to administrators.

### Example

```typescript
import {
    GrowRoomsApi,
    Configuration,
    PatchGrowRoomResource
} from './api';

const configuration = new Configuration();
const apiInstance = new GrowRoomsApi(configuration);

let growRoomId: number; // (default to undefined)
let patchGrowRoomResource: PatchGrowRoomResource; //

const { status, data } = await apiInstance.patchGrowRoom(
    growRoomId,
    patchGrowRoomResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchGrowRoomResource** | **PatchGrowRoomResource**|  | |
| **growRoomId** | [**number**] |  | defaults to undefined|


### Return type

**GrowRoomResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Grow room updated successfully |  -  |
|**400** | Invalid input data |  -  |
|**403** | Forbidden. User is not an admin. |  -  |
|**404** | Grow room not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

