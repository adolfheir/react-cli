/**
 * @fileoverview gRPC-Web generated client stub for PreprocessDataSvc
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = {};
proto.PreprocessDataSvc = require('./PreprocessDataSvc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.PreprocessDataSvc.PreprocessDataServiceClient =
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
proto.PreprocessDataSvc.PreprocessDataServicePromiseClient =
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
 *   !proto.PreprocessDataSvc.SubscribePreprocessDataRequest,
 *   !proto.PreprocessDataSvc.SubscribePreprocessDataResponse>}
 */
const methodDescriptor_PreprocessDataService_SubscribePreprocessData = new grpc.web.MethodDescriptor(
  '/PreprocessDataSvc.PreprocessDataService/SubscribePreprocessData',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.PreprocessDataSvc.SubscribePreprocessDataRequest,
  proto.PreprocessDataSvc.SubscribePreprocessDataResponse,
  /**
   * @param {!proto.PreprocessDataSvc.SubscribePreprocessDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PreprocessDataSvc.SubscribePreprocessDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.PreprocessDataSvc.SubscribePreprocessDataRequest,
 *   !proto.PreprocessDataSvc.SubscribePreprocessDataResponse>}
 */
const methodInfo_PreprocessDataService_SubscribePreprocessData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.PreprocessDataSvc.SubscribePreprocessDataResponse,
  /**
   * @param {!proto.PreprocessDataSvc.SubscribePreprocessDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PreprocessDataSvc.SubscribePreprocessDataResponse.deserializeBinary
);


/**
 * @param {!proto.PreprocessDataSvc.SubscribePreprocessDataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.PreprocessDataSvc.SubscribePreprocessDataResponse>}
 *     The XHR Node Readable Stream
 */
proto.PreprocessDataSvc.PreprocessDataServiceClient.prototype.subscribePreprocessData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/PreprocessDataSvc.PreprocessDataService/SubscribePreprocessData',
      request,
      metadata || {},
      methodDescriptor_PreprocessDataService_SubscribePreprocessData);
};


/**
 * @param {!proto.PreprocessDataSvc.SubscribePreprocessDataRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.PreprocessDataSvc.SubscribePreprocessDataResponse>}
 *     The XHR Node Readable Stream
 */
proto.PreprocessDataSvc.PreprocessDataServicePromiseClient.prototype.subscribePreprocessData =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/PreprocessDataSvc.PreprocessDataService/SubscribePreprocessData',
      request,
      metadata || {},
      methodDescriptor_PreprocessDataService_SubscribePreprocessData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.PreprocessDataSvc.ListPreprocessDataRequest,
 *   !proto.PreprocessDataSvc.ListPreprocessDataResponse>}
 */
const methodDescriptor_PreprocessDataService_ListPreprocessData = new grpc.web.MethodDescriptor(
  '/PreprocessDataSvc.PreprocessDataService/ListPreprocessData',
  grpc.web.MethodType.UNARY,
  proto.PreprocessDataSvc.ListPreprocessDataRequest,
  proto.PreprocessDataSvc.ListPreprocessDataResponse,
  /**
   * @param {!proto.PreprocessDataSvc.ListPreprocessDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PreprocessDataSvc.ListPreprocessDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.PreprocessDataSvc.ListPreprocessDataRequest,
 *   !proto.PreprocessDataSvc.ListPreprocessDataResponse>}
 */
const methodInfo_PreprocessDataService_ListPreprocessData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.PreprocessDataSvc.ListPreprocessDataResponse,
  /**
   * @param {!proto.PreprocessDataSvc.ListPreprocessDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.PreprocessDataSvc.ListPreprocessDataResponse.deserializeBinary
);


/**
 * @param {!proto.PreprocessDataSvc.ListPreprocessDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.PreprocessDataSvc.ListPreprocessDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.PreprocessDataSvc.ListPreprocessDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.PreprocessDataSvc.PreprocessDataServiceClient.prototype.listPreprocessData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/PreprocessDataSvc.PreprocessDataService/ListPreprocessData',
      request,
      metadata || {},
      methodDescriptor_PreprocessDataService_ListPreprocessData,
      callback);
};


/**
 * @param {!proto.PreprocessDataSvc.ListPreprocessDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.PreprocessDataSvc.ListPreprocessDataResponse>}
 *     A native promise that resolves to the response
 */
proto.PreprocessDataSvc.PreprocessDataServicePromiseClient.prototype.listPreprocessData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/PreprocessDataSvc.PreprocessDataService/ListPreprocessData',
      request,
      metadata || {},
      methodDescriptor_PreprocessDataService_ListPreprocessData);
};


module.exports = proto.PreprocessDataSvc;

