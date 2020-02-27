/**
 * @fileoverview gRPC-Web generated client stub for Monitor
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var ObjectGroup_pb = require('./ObjectGroup_pb.js')
const proto = {};
proto.Monitor = require('./monitor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Monitor.MonitorServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Monitor.MonitorServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.CreateMonitorRequest,
 *   !proto.Monitor.CreateMonitorResponse>}
 */
const methodDescriptor_MonitorService_CreateMonitor = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/CreateMonitor',
  grpc.web.MethodType.UNARY,
  proto.Monitor.CreateMonitorRequest,
  proto.Monitor.CreateMonitorResponse,
  /**
   * @param {!proto.Monitor.CreateMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.CreateMonitorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.CreateMonitorRequest,
 *   !proto.Monitor.CreateMonitorResponse>}
 */
const methodInfo_MonitorService_CreateMonitor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.CreateMonitorResponse,
  /**
   * @param {!proto.Monitor.CreateMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.CreateMonitorResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.CreateMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.CreateMonitorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.CreateMonitorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.createMonitor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/CreateMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_CreateMonitor,
      callback);
};


/**
 * @param {!proto.Monitor.CreateMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.CreateMonitorResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.createMonitor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/CreateMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_CreateMonitor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.DeleteMonitorRequest,
 *   !proto.Monitor.DeleteMonitorResponse>}
 */
const methodDescriptor_MonitorService_DeleteMonitor = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/DeleteMonitor',
  grpc.web.MethodType.UNARY,
  proto.Monitor.DeleteMonitorRequest,
  proto.Monitor.DeleteMonitorResponse,
  /**
   * @param {!proto.Monitor.DeleteMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.DeleteMonitorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.DeleteMonitorRequest,
 *   !proto.Monitor.DeleteMonitorResponse>}
 */
const methodInfo_MonitorService_DeleteMonitor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.DeleteMonitorResponse,
  /**
   * @param {!proto.Monitor.DeleteMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.DeleteMonitorResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.DeleteMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.DeleteMonitorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.DeleteMonitorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.deleteMonitor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/DeleteMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_DeleteMonitor,
      callback);
};


/**
 * @param {!proto.Monitor.DeleteMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.DeleteMonitorResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.deleteMonitor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/DeleteMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_DeleteMonitor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.ModifyMonitorRequest,
 *   !proto.Monitor.ModifyMonitorResponse>}
 */
const methodDescriptor_MonitorService_ModifyMonitor = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/ModifyMonitor',
  grpc.web.MethodType.UNARY,
  proto.Monitor.ModifyMonitorRequest,
  proto.Monitor.ModifyMonitorResponse,
  /**
   * @param {!proto.Monitor.ModifyMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ModifyMonitorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.ModifyMonitorRequest,
 *   !proto.Monitor.ModifyMonitorResponse>}
 */
const methodInfo_MonitorService_ModifyMonitor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.ModifyMonitorResponse,
  /**
   * @param {!proto.Monitor.ModifyMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ModifyMonitorResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.ModifyMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.ModifyMonitorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.ModifyMonitorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.modifyMonitor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/ModifyMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ModifyMonitor,
      callback);
};


/**
 * @param {!proto.Monitor.ModifyMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.ModifyMonitorResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.modifyMonitor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/ModifyMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ModifyMonitor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.DescribeMonitorRequest,
 *   !proto.Monitor.DescribeMonitorResponse>}
 */
const methodDescriptor_MonitorService_DescribeMonitor = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/DescribeMonitor',
  grpc.web.MethodType.UNARY,
  proto.Monitor.DescribeMonitorRequest,
  proto.Monitor.DescribeMonitorResponse,
  /**
   * @param {!proto.Monitor.DescribeMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.DescribeMonitorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.DescribeMonitorRequest,
 *   !proto.Monitor.DescribeMonitorResponse>}
 */
const methodInfo_MonitorService_DescribeMonitor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.DescribeMonitorResponse,
  /**
   * @param {!proto.Monitor.DescribeMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.DescribeMonitorResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.DescribeMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.DescribeMonitorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.DescribeMonitorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.describeMonitor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/DescribeMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_DescribeMonitor,
      callback);
};


/**
 * @param {!proto.Monitor.DescribeMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.DescribeMonitorResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.describeMonitor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/DescribeMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_DescribeMonitor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.ListMonitorsRequest,
 *   !proto.Monitor.ListMonitorsResponse>}
 */
const methodDescriptor_MonitorService_ListMonitors = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/ListMonitors',
  grpc.web.MethodType.UNARY,
  proto.Monitor.ListMonitorsRequest,
  proto.Monitor.ListMonitorsResponse,
  /**
   * @param {!proto.Monitor.ListMonitorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ListMonitorsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.ListMonitorsRequest,
 *   !proto.Monitor.ListMonitorsResponse>}
 */
const methodInfo_MonitorService_ListMonitors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.ListMonitorsResponse,
  /**
   * @param {!proto.Monitor.ListMonitorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ListMonitorsResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.ListMonitorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.ListMonitorsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.ListMonitorsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.listMonitors =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/ListMonitors',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ListMonitors,
      callback);
};


/**
 * @param {!proto.Monitor.ListMonitorsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.ListMonitorsResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.listMonitors =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/ListMonitors',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ListMonitors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.StartMonitorRequest,
 *   !proto.Monitor.StartMonitorResponse>}
 */
const methodDescriptor_MonitorService_StartMonitor = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/StartMonitor',
  grpc.web.MethodType.UNARY,
  proto.Monitor.StartMonitorRequest,
  proto.Monitor.StartMonitorResponse,
  /**
   * @param {!proto.Monitor.StartMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.StartMonitorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.StartMonitorRequest,
 *   !proto.Monitor.StartMonitorResponse>}
 */
const methodInfo_MonitorService_StartMonitor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.StartMonitorResponse,
  /**
   * @param {!proto.Monitor.StartMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.StartMonitorResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.StartMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.StartMonitorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.StartMonitorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.startMonitor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/StartMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_StartMonitor,
      callback);
};


/**
 * @param {!proto.Monitor.StartMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.StartMonitorResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.startMonitor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/StartMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_StartMonitor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.StopMonitorRequest,
 *   !proto.Monitor.StopMonitorResponse>}
 */
const methodDescriptor_MonitorService_StopMonitor = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/StopMonitor',
  grpc.web.MethodType.UNARY,
  proto.Monitor.StopMonitorRequest,
  proto.Monitor.StopMonitorResponse,
  /**
   * @param {!proto.Monitor.StopMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.StopMonitorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.StopMonitorRequest,
 *   !proto.Monitor.StopMonitorResponse>}
 */
const methodInfo_MonitorService_StopMonitor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.StopMonitorResponse,
  /**
   * @param {!proto.Monitor.StopMonitorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.StopMonitorResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.StopMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.StopMonitorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.StopMonitorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.stopMonitor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/StopMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_StopMonitor,
      callback);
};


/**
 * @param {!proto.Monitor.StopMonitorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.StopMonitorResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.stopMonitor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/StopMonitor',
      request,
      metadata || {},
      methodDescriptor_MonitorService_StopMonitor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.ListMonitorResultsRequest,
 *   !proto.Monitor.ListMonitorResultsResponse>}
 */
const methodDescriptor_MonitorService_ListMonitorResults = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/ListMonitorResults',
  grpc.web.MethodType.UNARY,
  proto.Monitor.ListMonitorResultsRequest,
  proto.Monitor.ListMonitorResultsResponse,
  /**
   * @param {!proto.Monitor.ListMonitorResultsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ListMonitorResultsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.ListMonitorResultsRequest,
 *   !proto.Monitor.ListMonitorResultsResponse>}
 */
const methodInfo_MonitorService_ListMonitorResults = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.ListMonitorResultsResponse,
  /**
   * @param {!proto.Monitor.ListMonitorResultsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ListMonitorResultsResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.ListMonitorResultsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.ListMonitorResultsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.ListMonitorResultsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.listMonitorResults =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/ListMonitorResults',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ListMonitorResults,
      callback);
};


/**
 * @param {!proto.Monitor.ListMonitorResultsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.ListMonitorResultsResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.listMonitorResults =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/ListMonitorResults',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ListMonitorResults);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.SubscribeMonitorResultsRequest,
 *   !proto.Monitor.SubscribeMonitorResultsResponse>}
 */
const methodDescriptor_MonitorService_SubscribeMonitorResults = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/SubscribeMonitorResults',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Monitor.SubscribeMonitorResultsRequest,
  proto.Monitor.SubscribeMonitorResultsResponse,
  /**
   * @param {!proto.Monitor.SubscribeMonitorResultsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.SubscribeMonitorResultsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.SubscribeMonitorResultsRequest,
 *   !proto.Monitor.SubscribeMonitorResultsResponse>}
 */
const methodInfo_MonitorService_SubscribeMonitorResults = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.SubscribeMonitorResultsResponse,
  /**
   * @param {!proto.Monitor.SubscribeMonitorResultsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.SubscribeMonitorResultsResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.SubscribeMonitorResultsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.SubscribeMonitorResultsResponse>}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.subscribeMonitorResults =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Monitor.MonitorService/SubscribeMonitorResults',
      request,
      metadata || {},
      methodDescriptor_MonitorService_SubscribeMonitorResults);
};


/**
 * @param {!proto.Monitor.SubscribeMonitorResultsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.SubscribeMonitorResultsResponse>}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServicePromiseClient.prototype.subscribeMonitorResults =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Monitor.MonitorService/SubscribeMonitorResults',
      request,
      metadata || {},
      methodDescriptor_MonitorService_SubscribeMonitorResults);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.GetCameraStatisticsRequest,
 *   !proto.Monitor.GetCameraStatisticsResponse>}
 */
const methodDescriptor_MonitorService_GetCameraStatistics = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/GetCameraStatistics',
  grpc.web.MethodType.UNARY,
  proto.Monitor.GetCameraStatisticsRequest,
  proto.Monitor.GetCameraStatisticsResponse,
  /**
   * @param {!proto.Monitor.GetCameraStatisticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.GetCameraStatisticsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.GetCameraStatisticsRequest,
 *   !proto.Monitor.GetCameraStatisticsResponse>}
 */
const methodInfo_MonitorService_GetCameraStatistics = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.GetCameraStatisticsResponse,
  /**
   * @param {!proto.Monitor.GetCameraStatisticsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.GetCameraStatisticsResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.GetCameraStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.GetCameraStatisticsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.GetCameraStatisticsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.getCameraStatistics =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/GetCameraStatistics',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetCameraStatistics,
      callback);
};


/**
 * @param {!proto.Monitor.GetCameraStatisticsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.GetCameraStatisticsResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.getCameraStatistics =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/GetCameraStatistics',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetCameraStatistics);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.GetResultCountRequest,
 *   !proto.Monitor.GetResultCountResponse>}
 */
const methodDescriptor_MonitorService_GetResultCount = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/GetResultCount',
  grpc.web.MethodType.UNARY,
  proto.Monitor.GetResultCountRequest,
  proto.Monitor.GetResultCountResponse,
  /**
   * @param {!proto.Monitor.GetResultCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.GetResultCountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.GetResultCountRequest,
 *   !proto.Monitor.GetResultCountResponse>}
 */
const methodInfo_MonitorService_GetResultCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.GetResultCountResponse,
  /**
   * @param {!proto.Monitor.GetResultCountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.GetResultCountResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.GetResultCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.GetResultCountResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.GetResultCountResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.getResultCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/GetResultCount',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetResultCount,
      callback);
};


/**
 * @param {!proto.Monitor.GetResultCountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.GetResultCountResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.getResultCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/GetResultCount',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetResultCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.ListMonitorsByCameraRequest,
 *   !proto.Monitor.ListMonitorsByCameraResponse>}
 */
const methodDescriptor_MonitorService_ListMonitorsByCamera = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/ListMonitorsByCamera',
  grpc.web.MethodType.UNARY,
  proto.Monitor.ListMonitorsByCameraRequest,
  proto.Monitor.ListMonitorsByCameraResponse,
  /**
   * @param {!proto.Monitor.ListMonitorsByCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ListMonitorsByCameraResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.ListMonitorsByCameraRequest,
 *   !proto.Monitor.ListMonitorsByCameraResponse>}
 */
const methodInfo_MonitorService_ListMonitorsByCamera = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.ListMonitorsByCameraResponse,
  /**
   * @param {!proto.Monitor.ListMonitorsByCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ListMonitorsByCameraResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.ListMonitorsByCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.ListMonitorsByCameraResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.ListMonitorsByCameraResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.listMonitorsByCamera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/ListMonitorsByCamera',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ListMonitorsByCamera,
      callback);
};


/**
 * @param {!proto.Monitor.ListMonitorsByCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.ListMonitorsByCameraResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.listMonitorsByCamera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/ListMonitorsByCamera',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ListMonitorsByCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.GetCameraResultCountAllRequest,
 *   !proto.Monitor.GetCameraResultCountAllResponse>}
 */
const methodDescriptor_MonitorService_GetCameraResultCount = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/GetCameraResultCount',
  grpc.web.MethodType.UNARY,
  proto.Monitor.GetCameraResultCountAllRequest,
  proto.Monitor.GetCameraResultCountAllResponse,
  /**
   * @param {!proto.Monitor.GetCameraResultCountAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.GetCameraResultCountAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.GetCameraResultCountAllRequest,
 *   !proto.Monitor.GetCameraResultCountAllResponse>}
 */
const methodInfo_MonitorService_GetCameraResultCount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.GetCameraResultCountAllResponse,
  /**
   * @param {!proto.Monitor.GetCameraResultCountAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.GetCameraResultCountAllResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.GetCameraResultCountAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.GetCameraResultCountAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.GetCameraResultCountAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.getCameraResultCount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/GetCameraResultCount',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetCameraResultCount,
      callback);
};


/**
 * @param {!proto.Monitor.GetCameraResultCountAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.GetCameraResultCountAllResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.getCameraResultCount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/GetCameraResultCount',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetCameraResultCount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.SubscribeMonitorObjectChangeRequest,
 *   !proto.Monitor.SubscribeMonitorObjectChangeResponse>}
 */
const methodDescriptor_MonitorService_SubscribeMonitorObjectChange = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/SubscribeMonitorObjectChange',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Monitor.SubscribeMonitorObjectChangeRequest,
  proto.Monitor.SubscribeMonitorObjectChangeResponse,
  /**
   * @param {!proto.Monitor.SubscribeMonitorObjectChangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.SubscribeMonitorObjectChangeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.SubscribeMonitorObjectChangeRequest,
 *   !proto.Monitor.SubscribeMonitorObjectChangeResponse>}
 */
const methodInfo_MonitorService_SubscribeMonitorObjectChange = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.SubscribeMonitorObjectChangeResponse,
  /**
   * @param {!proto.Monitor.SubscribeMonitorObjectChangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.SubscribeMonitorObjectChangeResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.SubscribeMonitorObjectChangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.SubscribeMonitorObjectChangeResponse>}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.subscribeMonitorObjectChange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Monitor.MonitorService/SubscribeMonitorObjectChange',
      request,
      metadata || {},
      methodDescriptor_MonitorService_SubscribeMonitorObjectChange);
};


/**
 * @param {!proto.Monitor.SubscribeMonitorObjectChangeRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.SubscribeMonitorObjectChangeResponse>}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServicePromiseClient.prototype.subscribeMonitorObjectChange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Monitor.MonitorService/SubscribeMonitorObjectChange',
      request,
      metadata || {},
      methodDescriptor_MonitorService_SubscribeMonitorObjectChange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Monitor.ProcessMonitorResultRequest,
 *   !proto.Monitor.ProcessMonitorResultResponse>}
 */
const methodDescriptor_MonitorService_ProcessMonitorResult = new grpc.web.MethodDescriptor(
  '/Monitor.MonitorService/ProcessMonitorResult',
  grpc.web.MethodType.UNARY,
  proto.Monitor.ProcessMonitorResultRequest,
  proto.Monitor.ProcessMonitorResultResponse,
  /**
   * @param {!proto.Monitor.ProcessMonitorResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ProcessMonitorResultResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Monitor.ProcessMonitorResultRequest,
 *   !proto.Monitor.ProcessMonitorResultResponse>}
 */
const methodInfo_MonitorService_ProcessMonitorResult = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Monitor.ProcessMonitorResultResponse,
  /**
   * @param {!proto.Monitor.ProcessMonitorResultRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Monitor.ProcessMonitorResultResponse.deserializeBinary
);


/**
 * @param {!proto.Monitor.ProcessMonitorResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Monitor.ProcessMonitorResultResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Monitor.ProcessMonitorResultResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Monitor.MonitorServiceClient.prototype.processMonitorResult =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Monitor.MonitorService/ProcessMonitorResult',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ProcessMonitorResult,
      callback);
};


/**
 * @param {!proto.Monitor.ProcessMonitorResultRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Monitor.ProcessMonitorResultResponse>}
 *     A native promise that resolves to the response
 */
proto.Monitor.MonitorServicePromiseClient.prototype.processMonitorResult =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Monitor.MonitorService/ProcessMonitorResult',
      request,
      metadata || {},
      methodDescriptor_MonitorService_ProcessMonitorResult);
};


module.exports = proto.Monitor;

