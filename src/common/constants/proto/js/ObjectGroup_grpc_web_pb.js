/**
 * @fileoverview gRPC-Web generated client stub for ObjectGroup
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = {};
proto.ObjectGroup = require('./ObjectGroup_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ObjectGroup.ObjectGroupServiceClient =
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
proto.ObjectGroup.ObjectGroupServicePromiseClient =
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
 *   !proto.ObjectGroup.CreateObjectRequest,
 *   !proto.ObjectGroup.CreateObjectResponse>}
 */
const methodDescriptor_ObjectGroupService_CreateObject = new grpc.web.MethodDescriptor(
  '/ObjectGroup.ObjectGroupService/CreateObject',
  grpc.web.MethodType.UNARY,
  proto.ObjectGroup.CreateObjectRequest,
  proto.ObjectGroup.CreateObjectResponse,
  /**
   * @param {!proto.ObjectGroup.CreateObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.CreateObjectResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ObjectGroup.CreateObjectRequest,
 *   !proto.ObjectGroup.CreateObjectResponse>}
 */
const methodInfo_ObjectGroupService_CreateObject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ObjectGroup.CreateObjectResponse,
  /**
   * @param {!proto.ObjectGroup.CreateObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.CreateObjectResponse.deserializeBinary
);


/**
 * @param {!proto.ObjectGroup.CreateObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ObjectGroup.CreateObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ObjectGroup.CreateObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ObjectGroup.ObjectGroupServiceClient.prototype.createObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/CreateObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_CreateObject,
      callback);
};


/**
 * @param {!proto.ObjectGroup.CreateObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ObjectGroup.CreateObjectResponse>}
 *     A native promise that resolves to the response
 */
proto.ObjectGroup.ObjectGroupServicePromiseClient.prototype.createObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/CreateObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_CreateObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ObjectGroup.DeleteObjectRequest,
 *   !proto.ObjectGroup.DeleteObjectResponse>}
 */
const methodDescriptor_ObjectGroupService_DeleteObject = new grpc.web.MethodDescriptor(
  '/ObjectGroup.ObjectGroupService/DeleteObject',
  grpc.web.MethodType.UNARY,
  proto.ObjectGroup.DeleteObjectRequest,
  proto.ObjectGroup.DeleteObjectResponse,
  /**
   * @param {!proto.ObjectGroup.DeleteObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.DeleteObjectResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ObjectGroup.DeleteObjectRequest,
 *   !proto.ObjectGroup.DeleteObjectResponse>}
 */
const methodInfo_ObjectGroupService_DeleteObject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ObjectGroup.DeleteObjectResponse,
  /**
   * @param {!proto.ObjectGroup.DeleteObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.DeleteObjectResponse.deserializeBinary
);


/**
 * @param {!proto.ObjectGroup.DeleteObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ObjectGroup.DeleteObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ObjectGroup.DeleteObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ObjectGroup.ObjectGroupServiceClient.prototype.deleteObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/DeleteObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_DeleteObject,
      callback);
};


/**
 * @param {!proto.ObjectGroup.DeleteObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ObjectGroup.DeleteObjectResponse>}
 *     A native promise that resolves to the response
 */
proto.ObjectGroup.ObjectGroupServicePromiseClient.prototype.deleteObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/DeleteObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_DeleteObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ObjectGroup.DescribeObjectRequest,
 *   !proto.ObjectGroup.DescribeObjectResponse>}
 */
const methodDescriptor_ObjectGroupService_DescribeObject = new grpc.web.MethodDescriptor(
  '/ObjectGroup.ObjectGroupService/DescribeObject',
  grpc.web.MethodType.UNARY,
  proto.ObjectGroup.DescribeObjectRequest,
  proto.ObjectGroup.DescribeObjectResponse,
  /**
   * @param {!proto.ObjectGroup.DescribeObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.DescribeObjectResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ObjectGroup.DescribeObjectRequest,
 *   !proto.ObjectGroup.DescribeObjectResponse>}
 */
const methodInfo_ObjectGroupService_DescribeObject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ObjectGroup.DescribeObjectResponse,
  /**
   * @param {!proto.ObjectGroup.DescribeObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.DescribeObjectResponse.deserializeBinary
);


/**
 * @param {!proto.ObjectGroup.DescribeObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ObjectGroup.DescribeObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ObjectGroup.DescribeObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ObjectGroup.ObjectGroupServiceClient.prototype.describeObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/DescribeObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_DescribeObject,
      callback);
};


/**
 * @param {!proto.ObjectGroup.DescribeObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ObjectGroup.DescribeObjectResponse>}
 *     A native promise that resolves to the response
 */
proto.ObjectGroup.ObjectGroupServicePromiseClient.prototype.describeObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/DescribeObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_DescribeObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ObjectGroup.ModifyObjectRequest,
 *   !proto.ObjectGroup.ModifyObjectResponse>}
 */
const methodDescriptor_ObjectGroupService_ModifyObject = new grpc.web.MethodDescriptor(
  '/ObjectGroup.ObjectGroupService/ModifyObject',
  grpc.web.MethodType.UNARY,
  proto.ObjectGroup.ModifyObjectRequest,
  proto.ObjectGroup.ModifyObjectResponse,
  /**
   * @param {!proto.ObjectGroup.ModifyObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.ModifyObjectResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ObjectGroup.ModifyObjectRequest,
 *   !proto.ObjectGroup.ModifyObjectResponse>}
 */
const methodInfo_ObjectGroupService_ModifyObject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ObjectGroup.ModifyObjectResponse,
  /**
   * @param {!proto.ObjectGroup.ModifyObjectRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.ModifyObjectResponse.deserializeBinary
);


/**
 * @param {!proto.ObjectGroup.ModifyObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ObjectGroup.ModifyObjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ObjectGroup.ModifyObjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ObjectGroup.ObjectGroupServiceClient.prototype.modifyObject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/ModifyObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_ModifyObject,
      callback);
};


/**
 * @param {!proto.ObjectGroup.ModifyObjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ObjectGroup.ModifyObjectResponse>}
 *     A native promise that resolves to the response
 */
proto.ObjectGroup.ObjectGroupServicePromiseClient.prototype.modifyObject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/ModifyObject',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_ModifyObject);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ObjectGroup.CreateObjectDataRequest,
 *   !proto.ObjectGroup.CreateDataResponse>}
 */
const methodDescriptor_ObjectGroupService_CreateObjectData = new grpc.web.MethodDescriptor(
  '/ObjectGroup.ObjectGroupService/CreateObjectData',
  grpc.web.MethodType.UNARY,
  proto.ObjectGroup.CreateObjectDataRequest,
  proto.ObjectGroup.CreateDataResponse,
  /**
   * @param {!proto.ObjectGroup.CreateObjectDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.CreateDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ObjectGroup.CreateObjectDataRequest,
 *   !proto.ObjectGroup.CreateDataResponse>}
 */
const methodInfo_ObjectGroupService_CreateObjectData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ObjectGroup.CreateDataResponse,
  /**
   * @param {!proto.ObjectGroup.CreateObjectDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.CreateDataResponse.deserializeBinary
);


/**
 * @param {!proto.ObjectGroup.CreateObjectDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ObjectGroup.CreateDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ObjectGroup.CreateDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ObjectGroup.ObjectGroupServiceClient.prototype.createObjectData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/CreateObjectData',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_CreateObjectData,
      callback);
};


/**
 * @param {!proto.ObjectGroup.CreateObjectDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ObjectGroup.CreateDataResponse>}
 *     A native promise that resolves to the response
 */
proto.ObjectGroup.ObjectGroupServicePromiseClient.prototype.createObjectData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/CreateObjectData',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_CreateObjectData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ObjectGroup.DeleteObjectDataRequest,
 *   !proto.ObjectGroup.DeleteDataResponse>}
 */
const methodDescriptor_ObjectGroupService_DeleteObjectData = new grpc.web.MethodDescriptor(
  '/ObjectGroup.ObjectGroupService/DeleteObjectData',
  grpc.web.MethodType.UNARY,
  proto.ObjectGroup.DeleteObjectDataRequest,
  proto.ObjectGroup.DeleteDataResponse,
  /**
   * @param {!proto.ObjectGroup.DeleteObjectDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.DeleteDataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ObjectGroup.DeleteObjectDataRequest,
 *   !proto.ObjectGroup.DeleteDataResponse>}
 */
const methodInfo_ObjectGroupService_DeleteObjectData = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ObjectGroup.DeleteDataResponse,
  /**
   * @param {!proto.ObjectGroup.DeleteObjectDataRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ObjectGroup.DeleteDataResponse.deserializeBinary
);


/**
 * @param {!proto.ObjectGroup.DeleteObjectDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ObjectGroup.DeleteDataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ObjectGroup.DeleteDataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ObjectGroup.ObjectGroupServiceClient.prototype.deleteObjectData =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/DeleteObjectData',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_DeleteObjectData,
      callback);
};


/**
 * @param {!proto.ObjectGroup.DeleteObjectDataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ObjectGroup.DeleteDataResponse>}
 *     A native promise that resolves to the response
 */
proto.ObjectGroup.ObjectGroupServicePromiseClient.prototype.deleteObjectData =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/DeleteObjectData',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_DeleteObjectData);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Common.GetFeatureRequest,
 *   !proto.Common.ObjectFeatureResponse>}
 */
const methodDescriptor_ObjectGroupService_GetObjectFeature = new grpc.web.MethodDescriptor(
  '/ObjectGroup.ObjectGroupService/GetObjectFeature',
  grpc.web.MethodType.UNARY,
  common_pb.GetFeatureRequest,
  common_pb.ObjectFeatureResponse,
  /**
   * @param {!proto.Common.GetFeatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.ObjectFeatureResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Common.GetFeatureRequest,
 *   !proto.Common.ObjectFeatureResponse>}
 */
const methodInfo_ObjectGroupService_GetObjectFeature = new grpc.web.AbstractClientBase.MethodInfo(
  common_pb.ObjectFeatureResponse,
  /**
   * @param {!proto.Common.GetFeatureRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.ObjectFeatureResponse.deserializeBinary
);


/**
 * @param {!proto.Common.GetFeatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Common.ObjectFeatureResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Common.ObjectFeatureResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ObjectGroup.ObjectGroupServiceClient.prototype.getObjectFeature =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/GetObjectFeature',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_GetObjectFeature,
      callback);
};


/**
 * @param {!proto.Common.GetFeatureRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Common.ObjectFeatureResponse>}
 *     A native promise that resolves to the response
 */
proto.ObjectGroup.ObjectGroupServicePromiseClient.prototype.getObjectFeature =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ObjectGroup.ObjectGroupService/GetObjectFeature',
      request,
      metadata || {},
      methodDescriptor_ObjectGroupService_GetObjectFeature);
};


module.exports = proto.ObjectGroup;

