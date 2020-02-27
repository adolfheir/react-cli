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
proto.zhst = require('./preprocess_manager_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zhst.PreProcessManagerServiceClient =
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
proto.zhst.PreProcessManagerServicePromiseClient =
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
 *   !proto.zhst.CreatePreProcessRequest,
 *   !proto.zhst.CreatePreProcessResponse>}
 */
const methodDescriptor_PreProcessManagerService_CreatePreProcess = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessManagerService/CreatePreProcess',
  grpc.web.MethodType.UNARY,
  proto.zhst.CreatePreProcessRequest,
  proto.zhst.CreatePreProcessResponse,
  /**
   * @param {!proto.zhst.CreatePreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.CreatePreProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.CreatePreProcessRequest,
 *   !proto.zhst.CreatePreProcessResponse>}
 */
const methodInfo_PreProcessManagerService_CreatePreProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.CreatePreProcessResponse,
  /**
   * @param {!proto.zhst.CreatePreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.CreatePreProcessResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.CreatePreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.CreatePreProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.CreatePreProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessManagerServiceClient.prototype.createPreProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreProcessManagerService/CreatePreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_CreatePreProcess,
      callback);
};


/**
 * @param {!proto.zhst.CreatePreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.CreatePreProcessResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreProcessManagerServicePromiseClient.prototype.createPreProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreProcessManagerService/CreatePreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_CreatePreProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.ListPreProcessRequest,
 *   !proto.zhst.ListPreProcessResponse>}
 */
const methodDescriptor_PreProcessManagerService_ListPreProcess = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessManagerService/ListPreProcess',
  grpc.web.MethodType.UNARY,
  proto.zhst.ListPreProcessRequest,
  proto.zhst.ListPreProcessResponse,
  /**
   * @param {!proto.zhst.ListPreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListPreProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.ListPreProcessRequest,
 *   !proto.zhst.ListPreProcessResponse>}
 */
const methodInfo_PreProcessManagerService_ListPreProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.ListPreProcessResponse,
  /**
   * @param {!proto.zhst.ListPreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListPreProcessResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.ListPreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.ListPreProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.ListPreProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessManagerServiceClient.prototype.listPreProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreProcessManagerService/ListPreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_ListPreProcess,
      callback);
};


/**
 * @param {!proto.zhst.ListPreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.ListPreProcessResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreProcessManagerServicePromiseClient.prototype.listPreProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreProcessManagerService/ListPreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_ListPreProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.DeletePreProcessRequest,
 *   !proto.zhst.DeletePreProcessResponse>}
 */
const methodDescriptor_PreProcessManagerService_DeletePreProcess = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessManagerService/DeletePreProcess',
  grpc.web.MethodType.UNARY,
  proto.zhst.DeletePreProcessRequest,
  proto.zhst.DeletePreProcessResponse,
  /**
   * @param {!proto.zhst.DeletePreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DeletePreProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.DeletePreProcessRequest,
 *   !proto.zhst.DeletePreProcessResponse>}
 */
const methodInfo_PreProcessManagerService_DeletePreProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.DeletePreProcessResponse,
  /**
   * @param {!proto.zhst.DeletePreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DeletePreProcessResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.DeletePreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.DeletePreProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.DeletePreProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessManagerServiceClient.prototype.deletePreProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreProcessManagerService/DeletePreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_DeletePreProcess,
      callback);
};


/**
 * @param {!proto.zhst.DeletePreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.DeletePreProcessResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreProcessManagerServicePromiseClient.prototype.deletePreProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreProcessManagerService/DeletePreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_DeletePreProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.StopPreProcessRequest,
 *   !proto.zhst.StopPreProcessResponse>}
 */
const methodDescriptor_PreProcessManagerService_StopPreProcess = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessManagerService/StopPreProcess',
  grpc.web.MethodType.UNARY,
  proto.zhst.StopPreProcessRequest,
  proto.zhst.StopPreProcessResponse,
  /**
   * @param {!proto.zhst.StopPreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StopPreProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.StopPreProcessRequest,
 *   !proto.zhst.StopPreProcessResponse>}
 */
const methodInfo_PreProcessManagerService_StopPreProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.StopPreProcessResponse,
  /**
   * @param {!proto.zhst.StopPreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StopPreProcessResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.StopPreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.StopPreProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.StopPreProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessManagerServiceClient.prototype.stopPreProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreProcessManagerService/StopPreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_StopPreProcess,
      callback);
};


/**
 * @param {!proto.zhst.StopPreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.StopPreProcessResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreProcessManagerServicePromiseClient.prototype.stopPreProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreProcessManagerService/StopPreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_StopPreProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.StartPreProcessRequest,
 *   !proto.zhst.StartPreProcessResponse>}
 */
const methodDescriptor_PreProcessManagerService_StartPreProcess = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessManagerService/StartPreProcess',
  grpc.web.MethodType.UNARY,
  proto.zhst.StartPreProcessRequest,
  proto.zhst.StartPreProcessResponse,
  /**
   * @param {!proto.zhst.StartPreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StartPreProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.StartPreProcessRequest,
 *   !proto.zhst.StartPreProcessResponse>}
 */
const methodInfo_PreProcessManagerService_StartPreProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.StartPreProcessResponse,
  /**
   * @param {!proto.zhst.StartPreProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StartPreProcessResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.StartPreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.StartPreProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.StartPreProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessManagerServiceClient.prototype.startPreProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreProcessManagerService/StartPreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_StartPreProcess,
      callback);
};


/**
 * @param {!proto.zhst.StartPreProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.StartPreProcessResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreProcessManagerServicePromiseClient.prototype.startPreProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreProcessManagerService/StartPreProcess',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_StartPreProcess);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.PreProcessStatusRequest,
 *   !proto.zhst.PreProcessStatusResponse>}
 */
const methodDescriptor_PreProcessManagerService_SubscribePreProcessStatus = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessManagerService/SubscribePreProcessStatus',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.zhst.PreProcessStatusRequest,
  proto.zhst.PreProcessStatusResponse,
  /**
   * @param {!proto.zhst.PreProcessStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.PreProcessStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.PreProcessStatusRequest,
 *   !proto.zhst.PreProcessStatusResponse>}
 */
const methodInfo_PreProcessManagerService_SubscribePreProcessStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.PreProcessStatusResponse,
  /**
   * @param {!proto.zhst.PreProcessStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.PreProcessStatusResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.PreProcessStatusRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.PreProcessStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessManagerServiceClient.prototype.subscribePreProcessStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zhst.PreProcessManagerService/SubscribePreProcessStatus',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_SubscribePreProcessStatus);
};


/**
 * @param {!proto.zhst.PreProcessStatusRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.PreProcessStatusResponse>}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessManagerServicePromiseClient.prototype.subscribePreProcessStatus =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/zhst.PreProcessManagerService/SubscribePreProcessStatus',
      request,
      metadata || {},
      methodDescriptor_PreProcessManagerService_SubscribePreProcessStatus);
};


module.exports = proto.zhst;

