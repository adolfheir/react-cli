/**
 * @fileoverview gRPC-Web generated client stub for fe
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = {};
proto.fe = require('./FeatureExtraction_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.fe.FeatureExtractionServiceClient =
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
proto.fe.FeatureExtractionServicePromiseClient =
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
 *   !proto.fe.GetImageFeatureRequest,
 *   !proto.fe.GetImageFeatureResponse>}
 */
const methodDescriptor_FeatureExtractionService_GetImageFeature = new grpc.web.MethodDescriptor(
  '/fe.FeatureExtractionService/GetImageFeature',
  grpc.web.MethodType.UNARY,
  proto.fe.GetImageFeatureRequest,
  proto.fe.GetImageFeatureResponse,
  /**
   * @param {!proto.fe.GetImageFeatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fe.GetImageFeatureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.fe.GetImageFeatureRequest,
 *   !proto.fe.GetImageFeatureResponse>}
 */
const methodInfo_FeatureExtractionService_GetImageFeature = new grpc.web.AbstractClientBase.MethodInfo(
  proto.fe.GetImageFeatureResponse,
  /**
   * @param {!proto.fe.GetImageFeatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.fe.GetImageFeatureResponse.deserializeBinary
);


/**
 * @param {!proto.fe.GetImageFeatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.fe.GetImageFeatureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.fe.GetImageFeatureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.fe.FeatureExtractionServiceClient.prototype.getImageFeature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/fe.FeatureExtractionService/GetImageFeature',
      request,
      metadata || {},
      methodDescriptor_FeatureExtractionService_GetImageFeature,
      callback);
};


/**
 * @param {!proto.fe.GetImageFeatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.fe.GetImageFeatureResponse>}
 *     A native promise that resolves to the response
 */
proto.fe.FeatureExtractionServicePromiseClient.prototype.getImageFeature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/fe.FeatureExtractionService/GetImageFeature',
      request,
      metadata || {},
      methodDescriptor_FeatureExtractionService_GetImageFeature);
};


module.exports = proto.fe;

