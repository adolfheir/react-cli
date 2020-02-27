/**
 * @fileoverview gRPC-Web generated client stub for SipServer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.SipServer = require('./sipserver_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SipServer.sipServiceClient =
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
proto.SipServer.sipServicePromiseClient =
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
 *   !proto.SipServer.GetCameraListRequest,
 *   !proto.SipServer.GetCameraListResponse>}
 */
const methodDescriptor_sipService_GetCameraList = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/GetCameraList',
  grpc.web.MethodType.UNARY,
  proto.SipServer.GetCameraListRequest,
  proto.SipServer.GetCameraListResponse,
  /**
   * @param {!proto.SipServer.GetCameraListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.GetCameraListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.GetCameraListRequest,
 *   !proto.SipServer.GetCameraListResponse>}
 */
const methodInfo_sipService_GetCameraList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.GetCameraListResponse,
  /**
   * @param {!proto.SipServer.GetCameraListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.GetCameraListResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.GetCameraListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.GetCameraListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.GetCameraListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.getCameraList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/GetCameraList',
      request,
      metadata || {},
      methodDescriptor_sipService_GetCameraList,
      callback);
};


/**
 * @param {!proto.SipServer.GetCameraListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.GetCameraListResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.getCameraList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/GetCameraList',
      request,
      metadata || {},
      methodDescriptor_sipService_GetCameraList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.StartDownloadRequest,
 *   !proto.SipServer.StartDownloadResponse>}
 */
const methodDescriptor_sipService_StartDownload = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/StartDownload',
  grpc.web.MethodType.UNARY,
  proto.SipServer.StartDownloadRequest,
  proto.SipServer.StartDownloadResponse,
  /**
   * @param {!proto.SipServer.StartDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.StartDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.StartDownloadRequest,
 *   !proto.SipServer.StartDownloadResponse>}
 */
const methodInfo_sipService_StartDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.StartDownloadResponse,
  /**
   * @param {!proto.SipServer.StartDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.StartDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.StartDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.StartDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.StartDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.startDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/StartDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_StartDownload,
      callback);
};


/**
 * @param {!proto.SipServer.StartDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.StartDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.startDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/StartDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_StartDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.StopDownloadRequest,
 *   !proto.SipServer.StopDownloadResponse>}
 */
const methodDescriptor_sipService_StopDownload = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/StopDownload',
  grpc.web.MethodType.UNARY,
  proto.SipServer.StopDownloadRequest,
  proto.SipServer.StopDownloadResponse,
  /**
   * @param {!proto.SipServer.StopDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.StopDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.StopDownloadRequest,
 *   !proto.SipServer.StopDownloadResponse>}
 */
const methodInfo_sipService_StopDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.StopDownloadResponse,
  /**
   * @param {!proto.SipServer.StopDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.StopDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.StopDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.StopDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.StopDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.stopDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/StopDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_StopDownload,
      callback);
};


/**
 * @param {!proto.SipServer.StopDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.StopDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.stopDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/StopDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_StopDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.PauseDownloadRequest,
 *   !proto.SipServer.PauseDownloadResponse>}
 */
const methodDescriptor_sipService_PauseDownload = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/PauseDownload',
  grpc.web.MethodType.UNARY,
  proto.SipServer.PauseDownloadRequest,
  proto.SipServer.PauseDownloadResponse,
  /**
   * @param {!proto.SipServer.PauseDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PauseDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.PauseDownloadRequest,
 *   !proto.SipServer.PauseDownloadResponse>}
 */
const methodInfo_sipService_PauseDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.PauseDownloadResponse,
  /**
   * @param {!proto.SipServer.PauseDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PauseDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.PauseDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.PauseDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.PauseDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.pauseDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/PauseDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_PauseDownload,
      callback);
};


/**
 * @param {!proto.SipServer.PauseDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.PauseDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.pauseDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/PauseDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_PauseDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.ResumeDownloadRequest,
 *   !proto.SipServer.ResumeDownloadResponse>}
 */
const methodDescriptor_sipService_ResumeDownload = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/ResumeDownload',
  grpc.web.MethodType.UNARY,
  proto.SipServer.ResumeDownloadRequest,
  proto.SipServer.ResumeDownloadResponse,
  /**
   * @param {!proto.SipServer.ResumeDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.ResumeDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.ResumeDownloadRequest,
 *   !proto.SipServer.ResumeDownloadResponse>}
 */
const methodInfo_sipService_ResumeDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.ResumeDownloadResponse,
  /**
   * @param {!proto.SipServer.ResumeDownloadRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.ResumeDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.ResumeDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.ResumeDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.ResumeDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.resumeDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/ResumeDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_ResumeDownload,
      callback);
};


/**
 * @param {!proto.SipServer.ResumeDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.ResumeDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.resumeDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/ResumeDownload',
      request,
      metadata || {},
      methodDescriptor_sipService_ResumeDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.GetStatusRequest,
 *   !proto.SipServer.GetStatusResponse>}
 */
const methodDescriptor_sipService_GetStatus = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/GetStatus',
  grpc.web.MethodType.UNARY,
  proto.SipServer.GetStatusRequest,
  proto.SipServer.GetStatusResponse,
  /**
   * @param {!proto.SipServer.GetStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.GetStatusResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.GetStatusRequest,
 *   !proto.SipServer.GetStatusResponse>}
 */
const methodInfo_sipService_GetStatus = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.GetStatusResponse,
  /**
   * @param {!proto.SipServer.GetStatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.GetStatusResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.GetStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.GetStatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.GetStatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.getStatus =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/GetStatus',
      request,
      metadata || {},
      methodDescriptor_sipService_GetStatus,
      callback);
};


/**
 * @param {!proto.SipServer.GetStatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.GetStatusResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.getStatus =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/GetStatus',
      request,
      metadata || {},
      methodDescriptor_sipService_GetStatus);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.PlayHistoryVideoRequest,
 *   !proto.SipServer.PlayHistoryVideoResponse>}
 */
const methodDescriptor_sipService_StartHisPlay = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/StartHisPlay',
  grpc.web.MethodType.UNARY,
  proto.SipServer.PlayHistoryVideoRequest,
  proto.SipServer.PlayHistoryVideoResponse,
  /**
   * @param {!proto.SipServer.PlayHistoryVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PlayHistoryVideoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.PlayHistoryVideoRequest,
 *   !proto.SipServer.PlayHistoryVideoResponse>}
 */
const methodInfo_sipService_StartHisPlay = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.PlayHistoryVideoResponse,
  /**
   * @param {!proto.SipServer.PlayHistoryVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PlayHistoryVideoResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.PlayHistoryVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.PlayHistoryVideoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.PlayHistoryVideoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.startHisPlay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/StartHisPlay',
      request,
      metadata || {},
      methodDescriptor_sipService_StartHisPlay,
      callback);
};


/**
 * @param {!proto.SipServer.PlayHistoryVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.PlayHistoryVideoResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.startHisPlay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/StartHisPlay',
      request,
      metadata || {},
      methodDescriptor_sipService_StartHisPlay);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.PlayRealVideoRequest,
 *   !proto.SipServer.PlayRealVideoResponse>}
 */
const methodDescriptor_sipService_StartRealPlay = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/StartRealPlay',
  grpc.web.MethodType.UNARY,
  proto.SipServer.PlayRealVideoRequest,
  proto.SipServer.PlayRealVideoResponse,
  /**
   * @param {!proto.SipServer.PlayRealVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PlayRealVideoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.PlayRealVideoRequest,
 *   !proto.SipServer.PlayRealVideoResponse>}
 */
const methodInfo_sipService_StartRealPlay = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.PlayRealVideoResponse,
  /**
   * @param {!proto.SipServer.PlayRealVideoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PlayRealVideoResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.PlayRealVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.PlayRealVideoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.PlayRealVideoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.startRealPlay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/StartRealPlay',
      request,
      metadata || {},
      methodDescriptor_sipService_StartRealPlay,
      callback);
};


/**
 * @param {!proto.SipServer.PlayRealVideoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.PlayRealVideoResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.startRealPlay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/StartRealPlay',
      request,
      metadata || {},
      methodDescriptor_sipService_StartRealPlay);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.StopPlayRequest,
 *   !proto.SipServer.StopPlayResponse>}
 */
const methodDescriptor_sipService_StopPlay = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/StopPlay',
  grpc.web.MethodType.UNARY,
  proto.SipServer.StopPlayRequest,
  proto.SipServer.StopPlayResponse,
  /**
   * @param {!proto.SipServer.StopPlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.StopPlayResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.StopPlayRequest,
 *   !proto.SipServer.StopPlayResponse>}
 */
const methodInfo_sipService_StopPlay = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.StopPlayResponse,
  /**
   * @param {!proto.SipServer.StopPlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.StopPlayResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.StopPlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.StopPlayResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.StopPlayResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.stopPlay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/StopPlay',
      request,
      metadata || {},
      methodDescriptor_sipService_StopPlay,
      callback);
};


/**
 * @param {!proto.SipServer.StopPlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.StopPlayResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.stopPlay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/StopPlay',
      request,
      metadata || {},
      methodDescriptor_sipService_StopPlay);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.PausePlayRequest,
 *   !proto.SipServer.PausePlayResponse>}
 */
const methodDescriptor_sipService_PausePlay = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/PausePlay',
  grpc.web.MethodType.UNARY,
  proto.SipServer.PausePlayRequest,
  proto.SipServer.PausePlayResponse,
  /**
   * @param {!proto.SipServer.PausePlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PausePlayResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.PausePlayRequest,
 *   !proto.SipServer.PausePlayResponse>}
 */
const methodInfo_sipService_PausePlay = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.PausePlayResponse,
  /**
   * @param {!proto.SipServer.PausePlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.PausePlayResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.PausePlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.PausePlayResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.PausePlayResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.pausePlay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/PausePlay',
      request,
      metadata || {},
      methodDescriptor_sipService_PausePlay,
      callback);
};


/**
 * @param {!proto.SipServer.PausePlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.PausePlayResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.pausePlay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/PausePlay',
      request,
      metadata || {},
      methodDescriptor_sipService_PausePlay);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.ResumePlayRequest,
 *   !proto.SipServer.ResumePlayResponse>}
 */
const methodDescriptor_sipService_ResumePlay = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/ResumePlay',
  grpc.web.MethodType.UNARY,
  proto.SipServer.ResumePlayRequest,
  proto.SipServer.ResumePlayResponse,
  /**
   * @param {!proto.SipServer.ResumePlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.ResumePlayResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.ResumePlayRequest,
 *   !proto.SipServer.ResumePlayResponse>}
 */
const methodInfo_sipService_ResumePlay = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.ResumePlayResponse,
  /**
   * @param {!proto.SipServer.ResumePlayRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.ResumePlayResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.ResumePlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.ResumePlayResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.ResumePlayResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.resumePlay =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/ResumePlay',
      request,
      metadata || {},
      methodDescriptor_sipService_ResumePlay,
      callback);
};


/**
 * @param {!proto.SipServer.ResumePlayRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.ResumePlayResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.resumePlay =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/ResumePlay',
      request,
      metadata || {},
      methodDescriptor_sipService_ResumePlay);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.SetPlayPosRequest,
 *   !proto.SipServer.SetPlayPosResponse>}
 */
const methodDescriptor_sipService_SetPlayPos = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/SetPlayPos',
  grpc.web.MethodType.UNARY,
  proto.SipServer.SetPlayPosRequest,
  proto.SipServer.SetPlayPosResponse,
  /**
   * @param {!proto.SipServer.SetPlayPosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.SetPlayPosResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.SetPlayPosRequest,
 *   !proto.SipServer.SetPlayPosResponse>}
 */
const methodInfo_sipService_SetPlayPos = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.SetPlayPosResponse,
  /**
   * @param {!proto.SipServer.SetPlayPosRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.SetPlayPosResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.SetPlayPosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.SetPlayPosResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.SetPlayPosResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.setPlayPos =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/SetPlayPos',
      request,
      metadata || {},
      methodDescriptor_sipService_SetPlayPos,
      callback);
};


/**
 * @param {!proto.SipServer.SetPlayPosRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.SetPlayPosResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.setPlayPos =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/SetPlayPos',
      request,
      metadata || {},
      methodDescriptor_sipService_SetPlayPos);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SipServer.SetPlaySpeedRequest,
 *   !proto.SipServer.SetPlaySpeedResponse>}
 */
const methodDescriptor_sipService_SetPlaySpeed = new grpc.web.MethodDescriptor(
  '/SipServer.sipService/SetPlaySpeed',
  grpc.web.MethodType.UNARY,
  proto.SipServer.SetPlaySpeedRequest,
  proto.SipServer.SetPlaySpeedResponse,
  /**
   * @param {!proto.SipServer.SetPlaySpeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.SetPlaySpeedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SipServer.SetPlaySpeedRequest,
 *   !proto.SipServer.SetPlaySpeedResponse>}
 */
const methodInfo_sipService_SetPlaySpeed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SipServer.SetPlaySpeedResponse,
  /**
   * @param {!proto.SipServer.SetPlaySpeedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SipServer.SetPlaySpeedResponse.deserializeBinary
);


/**
 * @param {!proto.SipServer.SetPlaySpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SipServer.SetPlaySpeedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SipServer.SetPlaySpeedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SipServer.sipServiceClient.prototype.setPlaySpeed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SipServer.sipService/SetPlaySpeed',
      request,
      metadata || {},
      methodDescriptor_sipService_SetPlaySpeed,
      callback);
};


/**
 * @param {!proto.SipServer.SetPlaySpeedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SipServer.SetPlaySpeedResponse>}
 *     A native promise that resolves to the response
 */
proto.SipServer.sipServicePromiseClient.prototype.setPlaySpeed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SipServer.sipService/SetPlaySpeed',
      request,
      metadata || {},
      methodDescriptor_sipService_SetPlaySpeed);
};


module.exports = proto.SipServer;

