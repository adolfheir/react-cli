/**
 * @fileoverview gRPC-Web generated client stub for search.internal
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var search_pb = require('./search_pb.js')
const proto = {};
proto.search = {};
proto.search.internal = require('./search_internal_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.search.internal.SearchServiceClient =
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
proto.search.internal.SearchServicePromiseClient =
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
 *   !proto.search.internal.SearchRequest,
 *   !proto.search.internal.SearchResponse>}
 */
const methodDescriptor_SearchService_Search = new grpc.web.MethodDescriptor(
  '/search.internal.SearchService/Search',
  grpc.web.MethodType.UNARY,
  proto.search.internal.SearchRequest,
  proto.search.internal.SearchResponse,
  /**
   * @param {!proto.search.internal.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.search.internal.SearchResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.search.internal.SearchRequest,
 *   !proto.search.internal.SearchResponse>}
 */
const methodInfo_SearchService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.search.internal.SearchResponse,
  /**
   * @param {!proto.search.internal.SearchRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.search.internal.SearchResponse.deserializeBinary
);


/**
 * @param {!proto.search.internal.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.search.internal.SearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.search.internal.SearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.search.internal.SearchServiceClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/search.internal.SearchService/Search',
      request,
      metadata || {},
      methodDescriptor_SearchService_Search,
      callback);
};


/**
 * @param {!proto.search.internal.SearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.search.internal.SearchResponse>}
 *     A native promise that resolves to the response
 */
proto.search.internal.SearchServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/search.internal.SearchService/Search',
      request,
      metadata || {},
      methodDescriptor_SearchService_Search);
};


module.exports = proto.search.internal;

