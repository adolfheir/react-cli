/**
 * @fileoverview gRPC-Web generated client stub for zhst
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = {};
proto.zhst = require('./device_manager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zhst.DeviceServiceClient =
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
proto.zhst.DeviceServicePromiseClient =
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
 *   !proto.zhst.ListCameraAndDirRequest,
 *   !proto.zhst.ListCameraAndDirResponse>}
 */
const methodDescriptor_DeviceService_ListCameraAndDir = new grpc.web.MethodDescriptor(
  '/zhst.DeviceService/ListCameraAndDir',
  grpc.web.MethodType.UNARY,
  proto.zhst.ListCameraAndDirRequest,
  proto.zhst.ListCameraAndDirResponse,
  /**
   * @param {!proto.zhst.ListCameraAndDirRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListCameraAndDirResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.ListCameraAndDirRequest,
 *   !proto.zhst.ListCameraAndDirResponse>}
 */
const methodInfo_DeviceService_ListCameraAndDir = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.ListCameraAndDirResponse,
  /**
   * @param {!proto.zhst.ListCameraAndDirRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListCameraAndDirResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.ListCameraAndDirRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.ListCameraAndDirResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.ListCameraAndDirResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.DeviceServiceClient.prototype.listCameraAndDir =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.DeviceService/ListCameraAndDir',
      request,
      metadata || {},
      methodDescriptor_DeviceService_ListCameraAndDir,
      callback);
};


/**
 * @param {!proto.zhst.ListCameraAndDirRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.ListCameraAndDirResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.DeviceServicePromiseClient.prototype.listCameraAndDir =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.DeviceService/ListCameraAndDir',
      request,
      metadata || {},
      methodDescriptor_DeviceService_ListCameraAndDir);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.EditCameraInfoRequest,
 *   !proto.zhst.EditCameraInfoResponse>}
 */
const methodDescriptor_DeviceService_EditCamera = new grpc.web.MethodDescriptor(
  '/zhst.DeviceService/EditCamera',
  grpc.web.MethodType.UNARY,
  proto.zhst.EditCameraInfoRequest,
  proto.zhst.EditCameraInfoResponse,
  /**
   * @param {!proto.zhst.EditCameraInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.EditCameraInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.EditCameraInfoRequest,
 *   !proto.zhst.EditCameraInfoResponse>}
 */
const methodInfo_DeviceService_EditCamera = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.EditCameraInfoResponse,
  /**
   * @param {!proto.zhst.EditCameraInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.EditCameraInfoResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.EditCameraInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.EditCameraInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.EditCameraInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.DeviceServiceClient.prototype.editCamera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.DeviceService/EditCamera',
      request,
      metadata || {},
      methodDescriptor_DeviceService_EditCamera,
      callback);
};


/**
 * @param {!proto.zhst.EditCameraInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.EditCameraInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.DeviceServicePromiseClient.prototype.editCamera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.DeviceService/EditCamera',
      request,
      metadata || {},
      methodDescriptor_DeviceService_EditCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.SearchCameraRequest,
 *   !proto.zhst.SearchCameraResponse>}
 */
const methodDescriptor_DeviceService_SearchCamera = new grpc.web.MethodDescriptor(
  '/zhst.DeviceService/SearchCamera',
  grpc.web.MethodType.UNARY,
  proto.zhst.SearchCameraRequest,
  proto.zhst.SearchCameraResponse,
  /**
   * @param {!proto.zhst.SearchCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.SearchCameraResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.SearchCameraRequest,
 *   !proto.zhst.SearchCameraResponse>}
 */
const methodInfo_DeviceService_SearchCamera = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.SearchCameraResponse,
  /**
   * @param {!proto.zhst.SearchCameraRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.SearchCameraResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.SearchCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.SearchCameraResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.SearchCameraResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.DeviceServiceClient.prototype.searchCamera =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.DeviceService/SearchCamera',
      request,
      metadata || {},
      methodDescriptor_DeviceService_SearchCamera,
      callback);
};


/**
 * @param {!proto.zhst.SearchCameraRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.SearchCameraResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.DeviceServicePromiseClient.prototype.searchCamera =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.DeviceService/SearchCamera',
      request,
      metadata || {},
      methodDescriptor_DeviceService_SearchCamera);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.SearchCameraPathRequest,
 *   !proto.zhst.SearchCameraPathResponse>}
 */
const methodDescriptor_DeviceService_SearchCameraPath = new grpc.web.MethodDescriptor(
  '/zhst.DeviceService/SearchCameraPath',
  grpc.web.MethodType.UNARY,
  proto.zhst.SearchCameraPathRequest,
  proto.zhst.SearchCameraPathResponse,
  /**
   * @param {!proto.zhst.SearchCameraPathRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.SearchCameraPathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.SearchCameraPathRequest,
 *   !proto.zhst.SearchCameraPathResponse>}
 */
const methodInfo_DeviceService_SearchCameraPath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.SearchCameraPathResponse,
  /**
   * @param {!proto.zhst.SearchCameraPathRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.SearchCameraPathResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.SearchCameraPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.SearchCameraPathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.SearchCameraPathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.DeviceServiceClient.prototype.searchCameraPath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.DeviceService/SearchCameraPath',
      request,
      metadata || {},
      methodDescriptor_DeviceService_SearchCameraPath,
      callback);
};


/**
 * @param {!proto.zhst.SearchCameraPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.SearchCameraPathResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.DeviceServicePromiseClient.prototype.searchCameraPath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.DeviceService/SearchCameraPath',
      request,
      metadata || {},
      methodDescriptor_DeviceService_SearchCameraPath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.ListVmsPlatformRequest,
 *   !proto.zhst.ListVmsPlatformResponse>}
 */
const methodDescriptor_DeviceService_ListVmsPlatform = new grpc.web.MethodDescriptor(
  '/zhst.DeviceService/ListVmsPlatform',
  grpc.web.MethodType.UNARY,
  proto.zhst.ListVmsPlatformRequest,
  proto.zhst.ListVmsPlatformResponse,
  /**
   * @param {!proto.zhst.ListVmsPlatformRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListVmsPlatformResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.ListVmsPlatformRequest,
 *   !proto.zhst.ListVmsPlatformResponse>}
 */
const methodInfo_DeviceService_ListVmsPlatform = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.ListVmsPlatformResponse,
  /**
   * @param {!proto.zhst.ListVmsPlatformRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListVmsPlatformResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.ListVmsPlatformRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.ListVmsPlatformResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.ListVmsPlatformResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.DeviceServiceClient.prototype.listVmsPlatform =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.DeviceService/ListVmsPlatform',
      request,
      metadata || {},
      methodDescriptor_DeviceService_ListVmsPlatform,
      callback);
};


/**
 * @param {!proto.zhst.ListVmsPlatformRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.ListVmsPlatformResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.DeviceServicePromiseClient.prototype.listVmsPlatform =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.DeviceService/ListVmsPlatform',
      request,
      metadata || {},
      methodDescriptor_DeviceService_ListVmsPlatform);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.CreateVmsRequest,
 *   !proto.zhst.CreateVmsResponse>}
 */
const methodDescriptor_DeviceService_CreateVms = new grpc.web.MethodDescriptor(
  '/zhst.DeviceService/CreateVms',
  grpc.web.MethodType.UNARY,
  proto.zhst.CreateVmsRequest,
  proto.zhst.CreateVmsResponse,
  /**
   * @param {!proto.zhst.CreateVmsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.CreateVmsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.CreateVmsRequest,
 *   !proto.zhst.CreateVmsResponse>}
 */
const methodInfo_DeviceService_CreateVms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.CreateVmsResponse,
  /**
   * @param {!proto.zhst.CreateVmsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.CreateVmsResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.CreateVmsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.CreateVmsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.CreateVmsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.DeviceServiceClient.prototype.createVms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.DeviceService/CreateVms',
      request,
      metadata || {},
      methodDescriptor_DeviceService_CreateVms,
      callback);
};


/**
 * @param {!proto.zhst.CreateVmsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.CreateVmsResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.DeviceServicePromiseClient.prototype.createVms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.DeviceService/CreateVms',
      request,
      metadata || {},
      methodDescriptor_DeviceService_CreateVms);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.DeleteVmsRequest,
 *   !proto.zhst.DeteleVmsResponse>}
 */
const methodDescriptor_DeviceService_DeleteVms = new grpc.web.MethodDescriptor(
  '/zhst.DeviceService/DeleteVms',
  grpc.web.MethodType.UNARY,
  proto.zhst.DeleteVmsRequest,
  proto.zhst.DeteleVmsResponse,
  /**
   * @param {!proto.zhst.DeleteVmsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DeteleVmsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.DeleteVmsRequest,
 *   !proto.zhst.DeteleVmsResponse>}
 */
const methodInfo_DeviceService_DeleteVms = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.DeteleVmsResponse,
  /**
   * @param {!proto.zhst.DeleteVmsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DeteleVmsResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.DeleteVmsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.DeteleVmsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.DeteleVmsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.DeviceServiceClient.prototype.deleteVms =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.DeviceService/DeleteVms',
      request,
      metadata || {},
      methodDescriptor_DeviceService_DeleteVms,
      callback);
};


/**
 * @param {!proto.zhst.DeleteVmsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.DeteleVmsResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.DeviceServicePromiseClient.prototype.deleteVms =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.DeviceService/DeleteVms',
      request,
      metadata || {},
      methodDescriptor_DeviceService_DeleteVms);
};


module.exports = proto.zhst;

