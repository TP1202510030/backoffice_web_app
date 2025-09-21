# CropsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**advanceCropPhase**](#advancecropphase) | **POST** /api/v1/crops/{cropId}/advance-phase | Advance the crop phase|
|[**createCrop**](#createcrop) | **POST** /api/v1/grow-rooms/{growRoomId}/crops | Create a new crop for a grow room|
|[**deleteCrop**](#deletecrop) | **DELETE** /api/v1/crops/{cropId} | Delete a crop|
|[**finishCrop**](#finishcrop) | **POST** /api/v1/crops/{cropId}/finish | Finish a crop and record total production|
|[**getCropById**](#getcropbyid) | **GET** /api/v1/crops/{cropId} | Get crop by ID|
|[**getCropsByGrowRoomId**](#getcropsbygrowroomid) | **GET** /api/v1/grow-rooms/{growRoomId}/crops | Get crops by grow room ID|
|[**getFinishedCrops**](#getfinishedcrops) | **GET** /api/v1/grow-rooms/{growRoomId}/crops/finished | Get finished crops by grow room ID|

# **advanceCropPhase**
> advanceCropPhase()

Advances the current phase of the specified crop to the next phase.

### Example

```typescript
import {
    CropsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CropsApi(configuration);

let cropId: number; // (default to undefined)

const { status, data } = await apiInstance.advanceCropPhase(
    cropId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cropId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Crop phase advanced successfully |  -  |
|**400** | Invalid input or unable to advance phase |  -  |
|**404** | Crop not found or no phases available |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createCrop**
> CropResource createCrop(createCropResource)

Creates a new crop associated to a grow room with sensor activation frequency and defined phases.

### Example

```typescript
import {
    CropsApi,
    Configuration,
    CreateCropResource
} from './api';

const configuration = new Configuration();
const apiInstance = new CropsApi(configuration);

let growRoomId: number; // (default to undefined)
let createCropResource: CreateCropResource; //

const { status, data } = await apiInstance.createCrop(
    growRoomId,
    createCropResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createCropResource** | **CreateCropResource**|  | |
| **growRoomId** | [**number**] |  | defaults to undefined|


### Return type

**CropResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Crop created successfully |  -  |
|**400** | Invalid input or unable to create crop |  -  |
|**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteCrop**
> deleteCrop()

Marks a grow room as deleted (soft delete). This action is only available to administrators.

### Example

```typescript
import {
    CropsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CropsApi(configuration);

let cropId: number; // (default to undefined)

const { status, data } = await apiInstance.deleteCrop(
    cropId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cropId** | [**number**] |  | defaults to undefined|


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

# **finishCrop**
> finishCrop(finishCropResource)

Marks a crop as finished, sets its end date, and records the total production.

### Example

```typescript
import {
    CropsApi,
    Configuration,
    FinishCropResource
} from './api';

const configuration = new Configuration();
const apiInstance = new CropsApi(configuration);

let cropId: number; // (default to undefined)
let finishCropResource: FinishCropResource; //

const { status, data } = await apiInstance.finishCrop(
    cropId,
    finishCropResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **finishCropResource** | **FinishCropResource**|  | |
| **cropId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Crop finished successfully |  -  |
|**400** | Invalid input, e.g., crop not on last phase |  -  |
|**404** | Crop not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCropById**
> CropResource getCropById()

Retrieves a crop by its ID.

### Example

```typescript
import {
    CropsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CropsApi(configuration);

let cropId: number; // (default to undefined)

const { status, data } = await apiInstance.getCropById(
    cropId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cropId** | [**number**] |  | defaults to undefined|


### Return type

**CropResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Crop retrieved successfully |  -  |
|**404** | Crop not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getCropsByGrowRoomId**
> CropResource getCropsByGrowRoomId()

Retrieves a list of crops associated with a given grow room ID.

### Example

```typescript
import {
    CropsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CropsApi(configuration);

let growRoomId: number; // (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getCropsByGrowRoomId(
    growRoomId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **growRoomId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**CropResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Crops retrieved successfully |  -  |
|**204** | No crops found for the grow room |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getFinishedCrops**
> CropResource getFinishedCrops()

Retrieves a list of crops that have an end date (finished crops) by grow room ID.

### Example

```typescript
import {
    CropsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CropsApi(configuration);

let growRoomId: number; // (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getFinishedCrops(
    growRoomId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **growRoomId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**CropResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Finished crops retrieved successfully |  -  |
|**204** | No finished crops found for the requested grow room |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

