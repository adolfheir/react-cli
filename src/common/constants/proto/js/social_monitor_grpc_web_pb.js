/**
 * @fileoverview gRPC-Web generated client stub for SocialMonitor
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = {};
proto.SocialMonitor = require('./social_monitor_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SocialMonitor.MonitorServiceClient =
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
proto.SocialMonitor.MonitorServicePromiseClient =
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
 *   !proto.SocialMonitor.PutCameraPointRequest,
 *   !proto.SocialMonitor.PutCameraPointResponse>}
 */
const methodDescriptor_MonitorService_PutCameraPoint = new grpc.web.MethodDescriptor(
  '/SocialMonitor.MonitorService/PutCameraPoint',
  grpc.web.MethodType.UNARY,
  proto.SocialMonitor.PutCameraPointRequest,
  proto.SocialMonitor.PutCameraPointResponse,
  /**
   * @param {!proto.SocialMonitor.PutCameraPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.PutCameraPointResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SocialMonitor.PutCameraPointRequest,
 *   !proto.SocialMonitor.PutCameraPointResponse>}
 */
const methodInfo_MonitorService_PutCameraPoint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SocialMonitor.PutCameraPointResponse,
  /**
   * @param {!proto.SocialMonitor.PutCameraPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.PutCameraPointResponse.deserializeBinary
);


/**
 * @param {!proto.SocialMonitor.PutCameraPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SocialMonitor.PutCameraPointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialMonitor.PutCameraPointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialMonitor.MonitorServiceClient.prototype.putCameraPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialMonitor.MonitorService/PutCameraPoint',
      request,
      metadata || {},
      methodDescriptor_MonitorService_PutCameraPoint,
      callback);
};


/**
 * @param {!proto.SocialMonitor.PutCameraPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialMonitor.PutCameraPointResponse>}
 *     A native promise that resolves to the response
 */
proto.SocialMonitor.MonitorServicePromiseClient.prototype.putCameraPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialMonitor.MonitorService/PutCameraPoint',
      request,
      metadata || {},
      methodDescriptor_MonitorService_PutCameraPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialMonitor.PutClueTrailRequest,
 *   !proto.SocialMonitor.PutClueTrailResponse>}
 */
const methodDescriptor_MonitorService_PutClueTrail = new grpc.web.MethodDescriptor(
  '/SocialMonitor.MonitorService/PutClueTrail',
  grpc.web.MethodType.UNARY,
  proto.SocialMonitor.PutClueTrailRequest,
  proto.SocialMonitor.PutClueTrailResponse,
  /**
   * @param {!proto.SocialMonitor.PutClueTrailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.PutClueTrailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SocialMonitor.PutClueTrailRequest,
 *   !proto.SocialMonitor.PutClueTrailResponse>}
 */
const methodInfo_MonitorService_PutClueTrail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SocialMonitor.PutClueTrailResponse,
  /**
   * @param {!proto.SocialMonitor.PutClueTrailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.PutClueTrailResponse.deserializeBinary
);


/**
 * @param {!proto.SocialMonitor.PutClueTrailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SocialMonitor.PutClueTrailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialMonitor.PutClueTrailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialMonitor.MonitorServiceClient.prototype.putClueTrail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialMonitor.MonitorService/PutClueTrail',
      request,
      metadata || {},
      methodDescriptor_MonitorService_PutClueTrail,
      callback);
};


/**
 * @param {!proto.SocialMonitor.PutClueTrailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialMonitor.PutClueTrailResponse>}
 *     A native promise that resolves to the response
 */
proto.SocialMonitor.MonitorServicePromiseClient.prototype.putClueTrail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialMonitor.MonitorService/PutClueTrail',
      request,
      metadata || {},
      methodDescriptor_MonitorService_PutClueTrail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialMonitor.GetCameraPointRequest,
 *   !proto.SocialMonitor.GetCameraPointResponse>}
 */
const methodDescriptor_MonitorService_GetCameraPoint = new grpc.web.MethodDescriptor(
  '/SocialMonitor.MonitorService/GetCameraPoint',
  grpc.web.MethodType.UNARY,
  proto.SocialMonitor.GetCameraPointRequest,
  proto.SocialMonitor.GetCameraPointResponse,
  /**
   * @param {!proto.SocialMonitor.GetCameraPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.GetCameraPointResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SocialMonitor.GetCameraPointRequest,
 *   !proto.SocialMonitor.GetCameraPointResponse>}
 */
const methodInfo_MonitorService_GetCameraPoint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SocialMonitor.GetCameraPointResponse,
  /**
   * @param {!proto.SocialMonitor.GetCameraPointRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.GetCameraPointResponse.deserializeBinary
);


/**
 * @param {!proto.SocialMonitor.GetCameraPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SocialMonitor.GetCameraPointResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialMonitor.GetCameraPointResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialMonitor.MonitorServiceClient.prototype.getCameraPoint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialMonitor.MonitorService/GetCameraPoint',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetCameraPoint,
      callback);
};


/**
 * @param {!proto.SocialMonitor.GetCameraPointRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialMonitor.GetCameraPointResponse>}
 *     A native promise that resolves to the response
 */
proto.SocialMonitor.MonitorServicePromiseClient.prototype.getCameraPoint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialMonitor.MonitorService/GetCameraPoint',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetCameraPoint);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SocialMonitor.GetClueTrailRequest,
 *   !proto.SocialMonitor.GetClueTrailResponse>}
 */
const methodDescriptor_MonitorService_GetClueTrail = new grpc.web.MethodDescriptor(
  '/SocialMonitor.MonitorService/GetClueTrail',
  grpc.web.MethodType.UNARY,
  proto.SocialMonitor.GetClueTrailRequest,
  proto.SocialMonitor.GetClueTrailResponse,
  /**
   * @param {!proto.SocialMonitor.GetClueTrailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.GetClueTrailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SocialMonitor.GetClueTrailRequest,
 *   !proto.SocialMonitor.GetClueTrailResponse>}
 */
const methodInfo_MonitorService_GetClueTrail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SocialMonitor.GetClueTrailResponse,
  /**
   * @param {!proto.SocialMonitor.GetClueTrailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SocialMonitor.GetClueTrailResponse.deserializeBinary
);


/**
 * @param {!proto.SocialMonitor.GetClueTrailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SocialMonitor.GetClueTrailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SocialMonitor.GetClueTrailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SocialMonitor.MonitorServiceClient.prototype.getClueTrail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SocialMonitor.MonitorService/GetClueTrail',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetClueTrail,
      callback);
};


/**
 * @param {!proto.SocialMonitor.GetClueTrailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SocialMonitor.GetClueTrailResponse>}
 *     A native promise that resolves to the response
 */
proto.SocialMonitor.MonitorServicePromiseClient.prototype.getClueTrail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SocialMonitor.MonitorService/GetClueTrail',
      request,
      metadata || {},
      methodDescriptor_MonitorService_GetClueTrail);
};


module.exports = proto.SocialMonitor;

