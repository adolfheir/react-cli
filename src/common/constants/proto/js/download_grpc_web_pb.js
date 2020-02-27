/**
 * @fileoverview gRPC-Web generated client stub for zhst
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.zhst = require('./download_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.zhst.PreprocessTaskClient =
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
proto.zhst.PreprocessTaskPromiseClient =
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
 *   !proto.zhst.ImgServiceMsg,
 *   !proto.zhst.ImgServiceMsg>}
 */
const methodDescriptor_PreprocessTask_CallRocksDbServer = new grpc.web.MethodDescriptor(
  '/zhst.PreprocessTask/CallRocksDbServer',
  grpc.web.MethodType.UNARY,
  proto.zhst.ImgServiceMsg,
  proto.zhst.ImgServiceMsg,
  /**
   * @param {!proto.zhst.ImgServiceMsg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ImgServiceMsg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.zhst.ImgServiceMsg,
 *   !proto.zhst.ImgServiceMsg>}
 */
const methodInfo_PreprocessTask_CallRocksDbServer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.zhst.ImgServiceMsg,
  /**
   * @param {!proto.zhst.ImgServiceMsg} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.zhst.ImgServiceMsg.deserializeBinary
);


/**
 * @param {!proto.zhst.ImgServiceMsg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.zhst.ImgServiceMsg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.zhst.ImgServiceMsg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.zhst.PreprocessTaskClient.prototype.callRocksDbServer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/zhst.PreprocessTask/CallRocksDbServer',
      request,
      metadata || {},
      methodDescriptor_PreprocessTask_CallRocksDbServer,
      callback);
};


/**
 * @param {!proto.zhst.ImgServiceMsg} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.zhst.ImgServiceMsg>}
 *     A native promise that resolves to the response
 */
proto.zhst.PreprocessTaskPromiseClient.prototype.callRocksDbServer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/zhst.PreprocessTask/CallRocksDbServer',
      request,
      metadata || {},
      methodDescriptor_PreprocessTask_CallRocksDbServer);
};


module.exports = proto.zhst;

