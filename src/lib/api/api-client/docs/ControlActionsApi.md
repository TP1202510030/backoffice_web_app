# ControlActionsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addControlActionsToCurrentPhase**](#addcontrolactionstocurrentphase) | **POST** /api/v1/crops/{cropId}/control-actions | Add multiple control actions to the current phase of a crop|
|[**getControlActionsByCropPhaseId**](#getcontrolactionsbycropphaseid) | **GET** /api/v1/crop-phases/{phaseId}/control-actions | Get control actions by crop phase ID|
|[**getControlActionsForCurrentPhase**](#getcontrolactionsforcurrentphase) | **GET** /api/v1/crops/{cropId}/control-actions/current | Get control Actions for the current phase of a crop|

# **addControlActionsToCurrentPhase**
> addControlActionsToCurrentPhase(addControlActionsToCurrentPhaseResource)

Adds multiple control actions to the current phase of the specified crop and returns a success message.

### Example

```typescript
import {
    ControlActionsApi,
    Configuration,
    AddControlActionsToCurrentPhaseResource
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlActionsApi(configuration);

let cropId: number; // (default to undefined)
let addControlActionsToCurrentPhaseResource: AddControlActionsToCurrentPhaseResource; //

const { status, data } = await apiInstance.addControlActionsToCurrentPhase(
    cropId,
    addControlActionsToCurrentPhaseResource
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addControlActionsToCurrentPhaseResource** | **AddControlActionsToCurrentPhaseResource**|  | |
| **cropId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ControlActions added successfully |  -  |
|**400** | Invalid input or unable to add controlActions |  -  |
|**401** | Unauthorized |  -  |
|**404** | Crop not found or no current phase set |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getControlActionsByCropPhaseId**
> PageControlActionResource getControlActionsByCropPhaseId()

Retrieves a paginated list of controlActions associated with a given crop phase ID.

### Example

```typescript
import {
    ControlActionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlActionsApi(configuration);

let phaseId: number; // (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getControlActionsByCropPhaseId(
    phaseId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **phaseId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**PageControlActionResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ControlActions retrieved successfully |  -  |
|**400** | Invalid input or unable to retrieve controlActions |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getControlActionsForCurrentPhase**
> PageControlActionResource getControlActionsForCurrentPhase()

Retrieve all controlActions for the current phase of a crop by its ID.

### Example

```typescript
import {
    ControlActionsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ControlActionsApi(configuration);

let cropId: number; // (default to undefined)
let page: number; //Zero-based page index (0..N) (optional) (default to 0)
let size: number; //The size of the page to be returned (optional) (default to 20)
let sort: Array<string>; //Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. (optional) (default to undefined)

const { status, data } = await apiInstance.getControlActionsForCurrentPhase(
    cropId,
    page,
    size,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cropId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | Zero-based page index (0..N) | (optional) defaults to 0|
| **size** | [**number**] | The size of the page to be returned | (optional) defaults to 20|
| **sort** | **Array&lt;string&gt;** | Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. | (optional) defaults to undefined|


### Return type

**PageControlActionResource**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | ControlActions added successfully |  -  |
|**400** | Invalid input or unable to add controlActions |  -  |
|**401** | Unauthorized |  -  |
|**404** | Crop not found or no current phase set |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

