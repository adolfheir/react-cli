/**
 * @fileoverview gRPC-Web generated client stub for zhst
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var device_manager_pb = require('./device_manager_pb.js')
const proto = {};
proto.zhst = require('./preprocess_worker_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zhst.PreProcessWorkerServiceClient =
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
proto.zhst.PreProcessWorkerServicePromiseClient =
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
 *   !proto.zhst.StartTaskRequest,
 *   !proto.zhst.StartTaskResponse>}
 */
const methodDescriptor_PreProcessWorkerService_StartTask = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessWorkerService/StartTask',
  grpc.web.MethodType.UNARY,
  proto.zhst.StartTaskRequest,
  proto.zhst.StartTaskResponse,
  /**
   * @param {!proto.zhst.StartTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StartTaskResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.StartTaskRequest,
 *   !proto.zhst.StartTaskResponse>}
 */
const methodInfo_PreProcessWorkerService_StartTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.StartTaskResponse,
  /**
   * @param {!proto.zhst.StartTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StartTaskResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.StartTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.StartTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.StartTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessWorkerServiceClient.prototype.startTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreProcessWorkerService/StartTask',
      request,
      metadata || {},
      methodDescriptor_PreProcessWorkerService_StartTask,
      callback);
};


/**
 * @param {!proto.zhst.StartTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.StartTaskResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreProcessWorkerServicePromiseClient.prototype.startTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreProcessWorkerService/StartTask',
      request,
      metadata || {},
      methodDescriptor_PreProcessWorkerService_StartTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.StopTaskRequest,
 *   !proto.zhst.StopTaskResponse>}
 */
const methodDescriptor_PreProcessWorkerService_StopTask = new grpc.web.MethodDescriptor(
  '/zhst.PreProcessWorkerService/StopTask',
  grpc.web.MethodType.UNARY,
  proto.zhst.StopTaskRequest,
  proto.zhst.StopTaskResponse,
  /**
   * @param {!proto.zhst.StopTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StopTaskResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.StopTaskRequest,
 *   !proto.zhst.StopTaskResponse>}
 */
const methodInfo_PreProcessWorkerService_StopTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.StopTaskResponse,
  /**
   * @param {!proto.zhst.StopTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.StopTaskResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.StopTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.StopTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.StopTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreProcessWorkerServiceClient.prototype.stopTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreProcessWorkerService/StopTask',
      request,
      metadata || {},
      methodDescriptor_PreProcessWorkerService_StopTask,
      callback);
};


/**
 * @param {!proto.zhst.StopTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.StopTaskResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreProcessWorkerServicePromiseClient.prototype.stopTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreProcessWorkerService/StopTask',
      request,
      metadata || {},
      methodDescriptor_PreProcessWorkerService_StopTask);
};


module.exports = proto.zhst;

