/**
 * @fileoverview gRPC-Web generated client stub for zhst
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var PreprocessDataSvc_pb = require('./PreprocessDataSvc_pb.js')

var monitor_pb = require('./monitor_pb.js')

var search_pb = require('./search_pb.js')
const proto = {};
proto.zhst = require('./SearchPlayback_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zhst.SearchPlaybackServiceClient =
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
proto.zhst.SearchPlaybackServicePromiseClient =
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
 *   !proto.zhst.CreateSearchPlaybackRequest,
 *   !proto.zhst.CreateSearchPlaybackResponse>}
 */
const methodDescriptor_SearchPlaybackService_CreateSearchPlayback = new grpc.web.MethodDescriptor(
  '/zhst.SearchPlaybackService/CreateSearchPlayback',
  grpc.web.MethodType.UNARY,
  proto.zhst.CreateSearchPlaybackRequest,
  proto.zhst.CreateSearchPlaybackResponse,
  /**
   * @param {!proto.zhst.CreateSearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.CreateSearchPlaybackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.CreateSearchPlaybackRequest,
 *   !proto.zhst.CreateSearchPlaybackResponse>}
 */
const methodInfo_SearchPlaybackService_CreateSearchPlayback = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.CreateSearchPlaybackResponse,
  /**
   * @param {!proto.zhst.CreateSearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.CreateSearchPlaybackResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.CreateSearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.CreateSearchPlaybackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.CreateSearchPlaybackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.SearchPlaybackServiceClient.prototype.createSearchPlayback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.SearchPlaybackService/CreateSearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_CreateSearchPlayback,
      callback);
};


/**
 * @param {!proto.zhst.CreateSearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.CreateSearchPlaybackResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.SearchPlaybackServicePromiseClient.prototype.createSearchPlayback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.SearchPlaybackService/CreateSearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_CreateSearchPlayback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.DeleteSearchPlaybackRequest,
 *   !proto.zhst.DeleteSearchPlaybackResponse>}
 */
const methodDescriptor_SearchPlaybackService_DeleteSearchPlayback = new grpc.web.MethodDescriptor(
  '/zhst.SearchPlaybackService/DeleteSearchPlayback',
  grpc.web.MethodType.UNARY,
  proto.zhst.DeleteSearchPlaybackRequest,
  proto.zhst.DeleteSearchPlaybackResponse,
  /**
   * @param {!proto.zhst.DeleteSearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DeleteSearchPlaybackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.DeleteSearchPlaybackRequest,
 *   !proto.zhst.DeleteSearchPlaybackResponse>}
 */
const methodInfo_SearchPlaybackService_DeleteSearchPlayback = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.DeleteSearchPlaybackResponse,
  /**
   * @param {!proto.zhst.DeleteSearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DeleteSearchPlaybackResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.DeleteSearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.DeleteSearchPlaybackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.DeleteSearchPlaybackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.SearchPlaybackServiceClient.prototype.deleteSearchPlayback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.SearchPlaybackService/DeleteSearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_DeleteSearchPlayback,
      callback);
};


/**
 * @param {!proto.zhst.DeleteSearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.DeleteSearchPlaybackResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.SearchPlaybackServicePromiseClient.prototype.deleteSearchPlayback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.SearchPlaybackService/DeleteSearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_DeleteSearchPlayback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.ModifySearchPlaybackRequest,
 *   !proto.zhst.ModifySearchPlaybackResponse>}
 */
const methodDescriptor_SearchPlaybackService_ModifySearchPlayback = new grpc.web.MethodDescriptor(
  '/zhst.SearchPlaybackService/ModifySearchPlayback',
  grpc.web.MethodType.UNARY,
  proto.zhst.ModifySearchPlaybackRequest,
  proto.zhst.ModifySearchPlaybackResponse,
  /**
   * @param {!proto.zhst.ModifySearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ModifySearchPlaybackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.ModifySearchPlaybackRequest,
 *   !proto.zhst.ModifySearchPlaybackResponse>}
 */
const methodInfo_SearchPlaybackService_ModifySearchPlayback = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.ModifySearchPlaybackResponse,
  /**
   * @param {!proto.zhst.ModifySearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ModifySearchPlaybackResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.ModifySearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.ModifySearchPlaybackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.ModifySearchPlaybackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.SearchPlaybackServiceClient.prototype.modifySearchPlayback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.SearchPlaybackService/ModifySearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_ModifySearchPlayback,
      callback);
};


/**
 * @param {!proto.zhst.ModifySearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.ModifySearchPlaybackResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.SearchPlaybackServicePromiseClient.prototype.modifySearchPlayback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.SearchPlaybackService/ModifySearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_ModifySearchPlayback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.DescribeSearchPlaybackRequest,
 *   !proto.zhst.DescribeSearchPlaybackResponse>}
 */
const methodDescriptor_SearchPlaybackService_DescribeSearchPlayback = new grpc.web.MethodDescriptor(
  '/zhst.SearchPlaybackService/DescribeSearchPlayback',
  grpc.web.MethodType.UNARY,
  proto.zhst.DescribeSearchPlaybackRequest,
  proto.zhst.DescribeSearchPlaybackResponse,
  /**
   * @param {!proto.zhst.DescribeSearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DescribeSearchPlaybackResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.DescribeSearchPlaybackRequest,
 *   !proto.zhst.DescribeSearchPlaybackResponse>}
 */
const methodInfo_SearchPlaybackService_DescribeSearchPlayback = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.DescribeSearchPlaybackResponse,
  /**
   * @param {!proto.zhst.DescribeSearchPlaybackRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.DescribeSearchPlaybackResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.DescribeSearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.DescribeSearchPlaybackResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.DescribeSearchPlaybackResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.SearchPlaybackServiceClient.prototype.describeSearchPlayback =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.SearchPlaybackService/DescribeSearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_DescribeSearchPlayback,
      callback);
};


/**
 * @param {!proto.zhst.DescribeSearchPlaybackRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.DescribeSearchPlaybackResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.SearchPlaybackServicePromiseClient.prototype.describeSearchPlayback =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.SearchPlaybackService/DescribeSearchPlayback',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_DescribeSearchPlayback);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.zhst.ListSearchPlaybacksRequest,
 *   !proto.zhst.ListSearchPlaybacksResponse>}
 */
const methodDescriptor_SearchPlaybackService_ListSearchPlaybacks = new grpc.web.MethodDescriptor(
  '/zhst.SearchPlaybackService/ListSearchPlaybacks',
  grpc.web.MethodType.UNARY,
  proto.zhst.ListSearchPlaybacksRequest,
  proto.zhst.ListSearchPlaybacksResponse,
  /**
   * @param {!proto.zhst.ListSearchPlaybacksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListSearchPlaybacksResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.ListSearchPlaybacksRequest,
 *   !proto.zhst.ListSearchPlaybacksResponse>}
 */
const methodInfo_SearchPlaybackService_ListSearchPlaybacks = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.ListSearchPlaybacksResponse,
  /**
   * @param {!proto.zhst.ListSearchPlaybacksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ListSearchPlaybacksResponse.deserializeBinary
);


/**
 * @param {!proto.zhst.ListSearchPlaybacksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.ListSearchPlaybacksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.ListSearchPlaybacksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.SearchPlaybackServiceClient.prototype.listSearchPlaybacks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.SearchPlaybackService/ListSearchPlaybacks',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_ListSearchPlaybacks,
      callback);
};


/**
 * @param {!proto.zhst.ListSearchPlaybacksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.ListSearchPlaybacksResponse>}
 *     A native promise that resolves to the response
 */
proto.zhst.SearchPlaybackServicePromiseClient.prototype.listSearchPlaybacks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.SearchPlaybackService/ListSearchPlaybacks',
      request,
      metadata || {},
      methodDescriptor_SearchPlaybackService_ListSearchPlaybacks);
};


module.exports = proto.zhst;

