
var OGVDecoderVideoAV1MTW = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(OGVDecoderVideoAV1MTW) {
  OGVDecoderVideoAV1MTW = OGVDecoderVideoAV1MTW || {};

function GROWABLE_HEAP_U8(){if(wasmMemory.buffer!=buffer){updateGlobalBufferAndViews(wasmMemory.buffer)}return HEAPU8}function GROWABLE_HEAP_I32(){if(wasmMemory.buffer!=buffer){updateGlobalBufferAndViews(wasmMemory.buffer)}return HEAP32}function GROWABLE_HEAP_F64(){if(wasmMemory.buffer!=buffer){updateGlobalBufferAndViews(wasmMemory.buffer)}return HEAPF64}var Module=typeof OGVDecoderVideoAV1MTW!="undefined"?OGVDecoderVideoAV1MTW:{};var readyPromiseResolve,readyPromiseReject;Module["ready"]=new Promise(function(resolve,reject){readyPromiseResolve=resolve;readyPromiseReject=reject});var options=Module;var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";var ENVIRONMENT_IS_PTHREAD=Module["ENVIRONMENT_IS_PTHREAD"]||false;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;function logExceptionOnExit(e){if(e instanceof ExitStatus)return;let toLog=e;err("exiting due to exception: "+toLog)}var fs;var nodePath;var requireNodeFS;if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}requireNodeFS=(()=>{if(!nodePath){fs=require("fs");nodePath=require("path")}});read_=function shell_read(filename,binary){requireNodeFS();filename=nodePath["normalize"](filename);return fs.readFileSync(filename,binary?undefined:"utf8")};readBinary=(filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}return ret});readAsync=((filename,onload,onerror)=>{requireNodeFS();filename=nodePath["normalize"](filename);fs.readFile(filename,function(err,data){if(err)onerror(err);else onload(data.buffer)})});if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);process["on"]("unhandledRejection",function(reason){throw reason});quit_=((status,toThrow)=>{if(keepRuntimeAlive()){process["exitCode"]=status;throw toThrow}logExceptionOnExit(toThrow);process["exit"](status)});Module["inspect"]=function(){return"[Emscripten Module object]"};let nodeWorkerThreads;try{nodeWorkerThreads=require("worker_threads")}catch(e){console.error('The "worker_threads" module is not supported in this node.js build - perhaps a newer version is needed?');throw e}global.Worker=nodeWorkerThreads.Worker}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(_scriptDir){scriptDirectory=_scriptDir}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}if(!ENVIRONMENT_IS_NODE){read_=(url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText});if(ENVIRONMENT_IS_WORKER){readBinary=(url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)})}readAsync=((url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=(()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()});xhr.onerror=onerror;xhr.send(null)})}setWindowTitle=(title=>document.title=title)}else{}if(ENVIRONMENT_IS_NODE){if(typeof performance=="undefined"){global.performance=require("perf_hooks").performance}}var defaultPrint=console.log.bind(console);var defaultPrintErr=console.warn.bind(console);if(ENVIRONMENT_IS_NODE){requireNodeFS();defaultPrint=(str=>fs.writeSync(1,str+"\n"));defaultPrintErr=(str=>fs.writeSync(2,str+"\n"))}var out=Module["print"]||defaultPrint;var err=Module["printErr"]||defaultPrintErr;Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];function warnOnce(text){if(!warnOnce.shown)warnOnce.shown={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;err(text)}}var Atomics_load=Atomics.load;var Atomics_store=Atomics.store;var Atomics_compareExchange=Atomics.compareExchange;var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var wasmModule;var ABORT=false;var EXITSTATUS;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.buffer instanceof SharedArrayBuffer?heapOrArray.slice(idx,endPtr):heapOrArray.subarray(idx,endPtr))}else{var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(GROWABLE_HEAP_U8(),ptr,maxBytesToRead):""}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;if(ENVIRONMENT_IS_PTHREAD){buffer=Module["buffer"]}function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;if(ENVIRONMENT_IS_PTHREAD){wasmMemory=Module["wasmMemory"];buffer=Module["buffer"]}else{if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_MEMORY/65536,"maximum":1073741824/65536,"shared":true});if(!(wasmMemory.buffer instanceof SharedArrayBuffer)){err("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag");if(ENVIRONMENT_IS_NODE){console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)")}throw Error("bad memory")}}}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function keepRuntimeAlive(){return noExitRuntime}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;if(ENVIRONMENT_IS_PTHREAD)return;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(ENVIRONMENT_IS_PTHREAD)return;if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}Module["preloadedImages"]={};Module["preloadedAudios"]={};function abort(what){if(ENVIRONMENT_IS_PTHREAD){postMessage({"cmd":"onAbort","arg":what})}else{if(Module["onAbort"]){Module["onAbort"](what)}}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(what);readyPromiseReject(e);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;wasmBinaryFile="ogv-decoder-video-av1-mt-wasm.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}else{throw"both async and sync fetching of the wasm failed"}}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;registerTlsInit(Module["asm"]["E"]);wasmTable=Module["asm"]["C"];addOnInit(Module["asm"]["v"]);wasmModule=module;if(!ENVIRONMENT_IS_PTHREAD){var numWorkersToLoad=PThread.unusedWorkers.length;PThread.unusedWorkers.forEach(function(w){PThread.loadWasmModuleToWorker(w,function(){if(!--numWorkersToLoad)removeRunDependency("wasm-instantiate")})})}}if(!ENVIRONMENT_IS_PTHREAD){addRunDependency("wasm-instantiate")}function receiveInstantiationResult(result){receiveInstance(result["instance"],result["module"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync().catch(readyPromiseReject);return{}}var ASM_CONSTS={};function callRuntimeCallbacks(callbacks){while(callbacks.length>0){var callback=callbacks.shift();if(typeof callback=="function"){callback(Module);continue}var func=callback.func;if(typeof func=="number"){if(callback.arg===undefined){getWasmTableEntry(func)()}else{getWasmTableEntry(func)(callback.arg)}}else{func(callback.arg===undefined?null:callback.arg)}}}function withStackSave(f){var stack=stackSave();var ret=f();stackRestore(stack);return ret}function killThread(pthread_ptr){GROWABLE_HEAP_I32()[pthread_ptr>>2]=0;var pthread=PThread.pthreads[pthread_ptr];delete PThread.pthreads[pthread_ptr];pthread.worker.terminate();__emscripten_thread_free_data(pthread_ptr);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(pthread.worker),1);pthread.worker.pthread=undefined}function cancelThread(pthread_ptr){var pthread=PThread.pthreads[pthread_ptr];pthread.worker.postMessage({"cmd":"cancel"})}function cleanupThread(pthread_ptr){var pthread=PThread.pthreads[pthread_ptr];if(pthread){GROWABLE_HEAP_I32()[pthread_ptr>>2]=0;var worker=pthread.worker;PThread.returnWorkerToPool(worker)}}function spawnThread(threadParams){var worker=PThread.getNewWorker();if(!worker){return 6}PThread.runningWorkers.push(worker);var pthread=PThread.pthreads[threadParams.pthread_ptr]={worker:worker,threadInfoStruct:threadParams.pthread_ptr};worker.pthread=pthread;var msg={"cmd":"run","start_routine":threadParams.startRoutine,"arg":threadParams.arg,"threadInfoStruct":threadParams.pthread_ptr};worker.runPthread=(()=>{msg.time=performance.now();worker.postMessage(msg,threadParams.transferList)});if(worker.loaded){worker.runPthread();delete worker.runPthread}return 0}function _exit(status){exit(status)}function handleException(e){if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)}var PThread={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],init:function(){if(ENVIRONMENT_IS_PTHREAD){PThread.initWorker()}else{PThread.initMainThread()}},initMainThread:function(){var pthreadPoolSize=1;for(var i=0;i<pthreadPoolSize;++i){PThread.allocateUnusedWorker()}},initWorker:function(){noExitRuntime=false},pthreads:{},setExitStatus:function(status){EXITSTATUS=status},terminateAllThreads:function(){for(var t in PThread.pthreads){var pthread=PThread.pthreads[t];if(pthread&&pthread.worker){PThread.returnWorkerToPool(pthread.worker)}}for(var i=0;i<PThread.unusedWorkers.length;++i){var worker=PThread.unusedWorkers[i];worker.terminate()}PThread.unusedWorkers=[]},returnWorkerToPool:function(worker){PThread.runWithoutMainThreadQueuedCalls(function(){delete PThread.pthreads[worker.pthread.threadInfoStruct];PThread.unusedWorkers.push(worker);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker),1);__emscripten_thread_free_data(worker.pthread.threadInfoStruct);worker.pthread=undefined})},runWithoutMainThreadQueuedCalls:function(func){GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls>>2]=0;try{func()}finally{GROWABLE_HEAP_I32()[__emscripten_allow_main_runtime_queued_calls>>2]=1}},receiveObjectTransfer:function(data){},threadInit:function(){for(var i in PThread.tlsInitFunctions){if(PThread.tlsInitFunctions.hasOwnProperty(i))PThread.tlsInitFunctions[i]()}},loadWasmModuleToWorker:function(worker,onFinishedLoading){worker.onmessage=(e=>{var d=e["data"];var cmd=d["cmd"];if(worker.pthread)PThread.currentProxiedOperationCallerThread=worker.pthread.threadInfoStruct;if(d["targetThread"]&&d["targetThread"]!=_pthread_self()){var thread=PThread.pthreads[d.targetThread];if(thread){thread.worker.postMessage(d,d["transferList"])}else{err('Internal error! Worker sent a message "'+cmd+'" to target pthread '+d["targetThread"]+", but that thread no longer exists!")}PThread.currentProxiedOperationCallerThread=undefined;return}if(cmd==="processProxyingQueue"){_emscripten_proxy_execute_queue(d["queue"]);Atomics.sub(GROWABLE_HEAP_I32(),d["queue"]>>2,1)}else if(cmd==="spawnThread"){spawnThread(d)}else if(cmd==="cleanupThread"){cleanupThread(d["thread"])}else if(cmd==="killThread"){killThread(d["thread"])}else if(cmd==="cancelThread"){cancelThread(d["thread"])}else if(cmd==="loaded"){worker.loaded=true;if(onFinishedLoading)onFinishedLoading(worker);if(worker.runPthread){worker.runPthread();delete worker.runPthread}}else if(cmd==="print"){out("Thread "+d["threadId"]+": "+d["text"])}else if(cmd==="printErr"){err("Thread "+d["threadId"]+": "+d["text"])}else if(cmd==="alert"){alert("Thread "+d["threadId"]+": "+d["text"])}else if(d.target==="setimmediate"){worker.postMessage(d)}else if(cmd==="onAbort"){if(Module["onAbort"]){Module["onAbort"](d["arg"])}}else if(cmd){err("worker sent an unknown command "+cmd)}PThread.currentProxiedOperationCallerThread=undefined});worker.onerror=(e=>{var message="worker sent an error!";err(message+" "+e.filename+":"+e.lineno+": "+e.message);throw e});if(ENVIRONMENT_IS_NODE){worker.on("message",function(data){worker.onmessage({data:data})});worker.on("error",function(e){worker.onerror(e)});worker.on("detachedExit",function(){})}worker.postMessage({"cmd":"load","urlOrBlob":Module["mainScriptUrlOrBlob"]||_scriptDir,"wasmMemory":wasmMemory,"wasmModule":wasmModule})},allocateUnusedWorker:function(){var pthreadMainJs=locateFile("ogv-decoder-video-av1-mt-wasm.worker.js");PThread.unusedWorkers.push(new Worker(pthreadMainJs))},getNewWorker:function(){if(PThread.unusedWorkers.length==0){PThread.allocateUnusedWorker();PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])}return PThread.unusedWorkers.pop()}};function establishStackSpace(){var pthread_ptr=_pthread_self();var stackTop=GROWABLE_HEAP_I32()[pthread_ptr+44>>2];var stackSize=GROWABLE_HEAP_I32()[pthread_ptr+48>>2];var stackMax=stackTop-stackSize;_emscripten_stack_set_limits(stackTop,stackMax);stackRestore(stackTop)}Module["establishStackSpace"]=establishStackSpace;function exitOnMainThread(returnCode){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(1,0,returnCode);try{_exit(returnCode)}catch(e){handleException(e)}}var wasmTableMirror=[];function getWasmTableEntry(funcPtr){var func=wasmTableMirror[funcPtr];if(!func){if(funcPtr>=wasmTableMirror.length)wasmTableMirror.length=funcPtr+1;wasmTableMirror[funcPtr]=func=wasmTable.get(funcPtr)}return func}function invokeEntryPoint(ptr,arg){return getWasmTableEntry(ptr)(arg)}Module["invokeEntryPoint"]=invokeEntryPoint;function registerTlsInit(tlsInitFunc){PThread.tlsInitFunctions.push(tlsInitFunc)}function ___emscripten_init_main_thread_js(tb){__emscripten_thread_init(tb,!ENVIRONMENT_IS_WORKER,1,!ENVIRONMENT_IS_WEB);PThread.threadInit()}function ___emscripten_thread_cleanup(thread){if(!ENVIRONMENT_IS_PTHREAD)cleanupThread(thread);else postMessage({"cmd":"cleanupThread","thread":thread})}function pthreadCreateProxied(pthread_ptr,attr,start_routine,arg){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(2,1,pthread_ptr,attr,start_routine,arg);return ___pthread_create_js(pthread_ptr,attr,start_routine,arg)}function ___pthread_create_js(pthread_ptr,attr,start_routine,arg){if(typeof SharedArrayBuffer=="undefined"){err("Current environment does not support SharedArrayBuffer, pthreads are not available!");return 6}var transferList=[];var error=0;if(ENVIRONMENT_IS_PTHREAD&&(transferList.length===0||error)){return pthreadCreateProxied(pthread_ptr,attr,start_routine,arg)}if(error)return error;var threadParams={startRoutine:start_routine,pthread_ptr:pthread_ptr,arg:arg,transferList:transferList};if(ENVIRONMENT_IS_PTHREAD){threadParams.cmd="spawnThread";postMessage(threadParams,transferList);return 0}return spawnThread(threadParams)}function __emscripten_default_pthread_stack_size(){return 2097152}function __emscripten_notify_proxying_queue(targetThreadId,currThreadId,mainThreadId,queue){if(targetThreadId==currThreadId){setTimeout(()=>{if(_pthread_self()){_emscripten_proxy_execute_queue(queue)}Atomics.sub(GROWABLE_HEAP_I32(),queue>>2,1)})}else if(ENVIRONMENT_IS_PTHREAD){postMessage({"targetThread":targetThreadId,"cmd":"processProxyingQueue","queue":queue})}else{var pthread=PThread.pthreads[targetThreadId];var worker=pthread&&pthread.worker;if(!worker){return}worker.postMessage({"cmd":"processProxyingQueue","queue":queue})}return 1}function __emscripten_set_offscreencanvas_size(target,width,height){return-1}function _abort(){abort("")}function _emscripten_check_blocking_allowed(){if(ENVIRONMENT_IS_NODE)return;if(ENVIRONMENT_IS_WORKER)return;warnOnce("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")}var _emscripten_get_now;if(ENVIRONMENT_IS_NODE){_emscripten_get_now=(()=>{var t=process["hrtime"]();return t[0]*1e3+t[1]/1e6})}else if(ENVIRONMENT_IS_PTHREAD){_emscripten_get_now=(()=>performance.now()-Module["__performance_now_clock_drift"])}else _emscripten_get_now=(()=>performance.now());function _emscripten_memcpy_big(dest,src,num){GROWABLE_HEAP_U8().copyWithin(dest,src,src+num)}function _emscripten_num_logical_cores(){if(ENVIRONMENT_IS_NODE)return require("os").cpus().length;return navigator["hardwareConcurrency"]}function _emscripten_proxy_to_main_thread_js(index,sync){var numCallArgs=arguments.length-2;var outerArgs=arguments;return withStackSave(function(){var serializedNumCallArgs=numCallArgs;var args=stackAlloc(serializedNumCallArgs*8);var b=args>>3;for(var i=0;i<numCallArgs;i++){var arg=outerArgs[2+i];GROWABLE_HEAP_F64()[b+i]=arg}return _emscripten_run_in_main_runtime_thread_js(index,serializedNumCallArgs,args,sync)})}var _emscripten_receive_on_main_thread_js_callArgs=[];function _emscripten_receive_on_main_thread_js(index,numCallArgs,args){_emscripten_receive_on_main_thread_js_callArgs.length=numCallArgs;var b=args>>3;for(var i=0;i<numCallArgs;i++){_emscripten_receive_on_main_thread_js_callArgs[i]=GROWABLE_HEAP_F64()[b+i]}var isEmAsmConst=index<0;var func=!isEmAsmConst?proxiedFunctionTable[index]:ASM_CONSTS[-index-1];return func.apply(null,_emscripten_receive_on_main_thread_js_callArgs)}function _emscripten_get_heap_max(){return 1073741824}function emscripten_realloc_buffer(size){try{wasmMemory.grow(size-buffer.byteLength+65535>>>16);updateGlobalBufferAndViews(wasmMemory.buffer);return 1}catch(e){}}function _emscripten_resize_heap(requestedSize){var oldSize=GROWABLE_HEAP_U8().length;requestedSize=requestedSize>>>0;if(requestedSize<=oldSize){return false}var maxHeapSize=_emscripten_get_heap_max();if(requestedSize>maxHeapSize){return false}let alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=emscripten_realloc_buffer(newSize);if(replacement){return true}}return false}function _emscripten_unwind_to_js_event_loop(){throw"unwind"}var SYSCALLS={buffers:[null,[],[]],printChar:function(stream,curr){var buffer=SYSCALLS.buffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}},varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=GROWABLE_HEAP_I32()[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret},get64:function(low,high){return low}};function _fd_close(fd){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(3,1,fd);return 0}function _fd_seek(fd,offset_low,offset_high,whence,newOffset){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(4,1,fd,offset_low,offset_high,whence,newOffset)}function _fd_write(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return _emscripten_proxy_to_main_thread_js(5,1,fd,iov,iovcnt,pnum);var num=0;for(var i=0;i<iovcnt;i++){var ptr=GROWABLE_HEAP_I32()[iov>>2];var len=GROWABLE_HEAP_I32()[iov+4>>2];iov+=8;for(var j=0;j<len;j++){SYSCALLS.printChar(fd,GROWABLE_HEAP_U8()[ptr+j])}num+=len}GROWABLE_HEAP_I32()[pnum>>2]=num;return 0}function _ogvjs_callback_async_complete(ret,cpuTime){var callback=Module.callbacks.shift();Module["cpuTime"]+=cpuTime;callback(ret);return}function _ogvjs_callback_frame(bufferY,strideY,bufferCb,strideCb,bufferCr,strideCr,width,height,chromaWidth,chromaHeight,picWidth,picHeight,picX,picY,displayWidth,displayHeight){var heap=wasmMemory.buffer;var format=Module["videoFormat"];function copyAndTrim(arr,buffer,stride,height,picX,picY,picWidth,picHeight,fill){arr.set(new Uint8Array(heap,buffer,stride*height));var x,y,ptr;for(ptr=0,y=0;y<picY;y++,ptr+=stride){for(x=0;x<stride;x++){arr[ptr+x]=fill}}for(;y<picY+picHeight;y++,ptr+=stride){for(x=0;x<picX;x++){arr[ptr+x]=fill}for(x=picX+picWidth;x<stride;x++){arr[ptr+x]=fill}}for(;y<height;y++,ptr+=stride){for(x=0;x<stride;x++){arr[ptr+x]=fill}}return arr}var outPicX=picX&~1;var outPicY=picY&~1;var chromaPicX=outPicX*chromaWidth/width;var chromaPicY=outPicY*chromaHeight/height;var chromaPicWidth=picWidth*chromaWidth/width;var chromaPicHeight=picHeight*chromaHeight/height;var isOriginal=picWidth===format["cropWidth"]&&picHeight===format["cropHeight"];if(isOriginal){displayWidth=format["displayWidth"];displayHeight=format["displayHeight"]}var recycled=Module["recycledFrames"],frame,lenY=height*strideY,lenCb=chromaHeight*strideCb,lenCr=chromaHeight*strideCr;while(recycled.length>0){var next=recycled.shift(),format=next["format"];if(format["width"]===width&&format["height"]===height&&format["chromaWidth"]===chromaWidth&&format["chromaHeight"]===chromaHeight&&format["cropLeft"]===picX&&format["cropTop"]===picY&&format["cropWidth"]===picWidth&&format["cropHeight"]===picHeight&&format["displayWidth"]===displayWidth&&format["displayHeight"]===displayHeight&&next["y"]["bytes"].length===lenY&&next["u"]["bytes"].length===lenCb&&next["v"]["bytes"].length===lenCr){frame=next;break}}if(!frame){frame={"format":{"width":width,"height":height,"chromaWidth":chromaWidth,"chromaHeight":chromaHeight,"cropLeft":picX,"cropTop":picY,"cropWidth":picWidth,"cropHeight":picHeight,"displayWidth":displayWidth,"displayHeight":displayHeight},"y":{"bytes":new Uint8Array(lenY),"stride":strideY},"u":{"bytes":new Uint8Array(lenCb),"stride":strideCb},"v":{"bytes":new Uint8Array(lenCr),"stride":strideCr}}}copyAndTrim(frame["y"]["bytes"],bufferY,strideY,height,picX,picY,picWidth,picHeight,0);copyAndTrim(frame["u"]["bytes"],bufferCb,strideCb,chromaHeight,chromaPicX,chromaPicY,chromaPicWidth,chromaPicHeight,128);copyAndTrim(frame["v"]["bytes"],bufferCr,strideCr,chromaHeight,chromaPicX,chromaPicY,chromaPicWidth,chromaPicHeight,128);Module["frameBuffer"]=frame}PThread.init();var proxiedFunctionTable=[null,exitOnMainThread,pthreadCreateProxied,_fd_close,_fd_seek,_fd_write];var asmLibraryArg={"i":___emscripten_init_main_thread_js,"e":___emscripten_thread_cleanup,"r":___pthread_create_js,"s":__emscripten_default_pthread_stack_size,"h":__emscripten_notify_proxying_queue,"k":__emscripten_set_offscreencanvas_size,"g":_abort,"f":_emscripten_check_blocking_allowed,"b":_emscripten_get_now,"t":_emscripten_memcpy_big,"u":_emscripten_num_logical_cores,"j":_emscripten_receive_on_main_thread_js,"o":_emscripten_resize_heap,"c":_emscripten_unwind_to_js_event_loop,"q":_exit,"p":_fd_close,"n":_fd_seek,"d":_fd_write,"a":wasmMemory||Module["wasmMemory"],"l":_ogvjs_callback_async_complete,"m":_ogvjs_callback_frame};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["v"]).apply(null,arguments)};var _ogv_video_decoder_init=Module["_ogv_video_decoder_init"]=function(){return(_ogv_video_decoder_init=Module["_ogv_video_decoder_init"]=Module["asm"]["w"]).apply(null,arguments)};var _free=Module["_free"]=function(){return(_free=Module["_free"]=Module["asm"]["x"]).apply(null,arguments)};var _ogv_video_decoder_async=Module["_ogv_video_decoder_async"]=function(){return(_ogv_video_decoder_async=Module["_ogv_video_decoder_async"]=Module["asm"]["y"]).apply(null,arguments)};var _ogv_video_decoder_destroy=Module["_ogv_video_decoder_destroy"]=function(){return(_ogv_video_decoder_destroy=Module["_ogv_video_decoder_destroy"]=Module["asm"]["z"]).apply(null,arguments)};var _ogv_video_decoder_process_header=Module["_ogv_video_decoder_process_header"]=function(){return(_ogv_video_decoder_process_header=Module["_ogv_video_decoder_process_header"]=Module["asm"]["A"]).apply(null,arguments)};var _ogv_video_decoder_process_frame=Module["_ogv_video_decoder_process_frame"]=function(){return(_ogv_video_decoder_process_frame=Module["_ogv_video_decoder_process_frame"]=Module["asm"]["B"]).apply(null,arguments)};var _malloc=Module["_malloc"]=function(){return(_malloc=Module["_malloc"]=Module["asm"]["D"]).apply(null,arguments)};var _emscripten_tls_init=Module["_emscripten_tls_init"]=function(){return(_emscripten_tls_init=Module["_emscripten_tls_init"]=Module["asm"]["E"]).apply(null,arguments)};var __emscripten_thread_init=Module["__emscripten_thread_init"]=function(){return(__emscripten_thread_init=Module["__emscripten_thread_init"]=Module["asm"]["F"]).apply(null,arguments)};var __emscripten_thread_crashed=Module["__emscripten_thread_crashed"]=function(){return(__emscripten_thread_crashed=Module["__emscripten_thread_crashed"]=Module["asm"]["G"]).apply(null,arguments)};var _emscripten_run_in_main_runtime_thread_js=Module["_emscripten_run_in_main_runtime_thread_js"]=function(){return(_emscripten_run_in_main_runtime_thread_js=Module["_emscripten_run_in_main_runtime_thread_js"]=Module["asm"]["H"]).apply(null,arguments)};var _emscripten_proxy_execute_queue=Module["_emscripten_proxy_execute_queue"]=function(){return(_emscripten_proxy_execute_queue=Module["_emscripten_proxy_execute_queue"]=Module["asm"]["I"]).apply(null,arguments)};var _pthread_self=Module["_pthread_self"]=function(){return(_pthread_self=Module["_pthread_self"]=Module["asm"]["J"]).apply(null,arguments)};var __emscripten_thread_free_data=Module["__emscripten_thread_free_data"]=function(){return(__emscripten_thread_free_data=Module["__emscripten_thread_free_data"]=Module["asm"]["K"]).apply(null,arguments)};var __emscripten_thread_exit=Module["__emscripten_thread_exit"]=function(){return(__emscripten_thread_exit=Module["__emscripten_thread_exit"]=Module["asm"]["L"]).apply(null,arguments)};var _emscripten_stack_set_limits=Module["_emscripten_stack_set_limits"]=function(){return(_emscripten_stack_set_limits=Module["_emscripten_stack_set_limits"]=Module["asm"]["M"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["N"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["O"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["P"]).apply(null,arguments)};var __emscripten_allow_main_runtime_queued_calls=Module["__emscripten_allow_main_runtime_queued_calls"]=108308;Module["keepRuntimeAlive"]=keepRuntimeAlive;Module["PThread"]=PThread;Module["PThread"]=PThread;Module["wasmMemory"]=wasmMemory;Module["ExitStatus"]=ExitStatus;var calledRun;function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}if(ENVIRONMENT_IS_PTHREAD){readyPromiseResolve(Module);initRuntime();postMessage({"cmd":"loaded"});return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();readyPromiseResolve(Module);if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}Module["run"]=run;function exit(status,implicit){EXITSTATUS=status;if(!implicit){if(ENVIRONMENT_IS_PTHREAD){exitOnMainThread(status);throw"unwind"}else{}}procExit(status)}function procExit(code){EXITSTATUS=code;if(!keepRuntimeAlive()){PThread.terminateAllThreads();if(Module["onExit"])Module["onExit"](code);ABORT=true}quit_(code,new ExitStatus(code))}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();var inputBuffer,inputBufferSize;function reallocInputBuffer(size){if(inputBuffer&&inputBufferSize>=size){return inputBuffer}if(inputBuffer){Module["_free"](inputBuffer)}inputBufferSize=size;inputBuffer=Module["_malloc"](inputBufferSize);return inputBuffer}var getTimestamp;if(typeof performance==="undefined"||typeof performance.now==="undefined"){getTimestamp=Date.now}else{getTimestamp=performance.now.bind(performance)}function time(func){var start=getTimestamp(),ret;ret=func();Module["cpuTime"]+=getTimestamp()-start;return ret}Module["loadedMetadata"]=!!options["videoFormat"];Module["videoFormat"]=options["videoFormat"]||null;Module["frameBuffer"]=null;Module["cpuTime"]=0;Object.defineProperty(Module,"processing",{get:function getProcessing(){return false}});Module["init"]=function(callback){time(function(){Module["_ogv_video_decoder_init"]()});callback()};Module["processHeader"]=function(data,callback){var ret=time(function(){var len=data.byteLength;var buffer=reallocInputBuffer(len);var dest=new Uint8Array(wasmMemory.buffer,buffer,len);dest.set(new Uint8Array(data));return Module["_ogv_video_decoder_process_header"](buffer,len)});callback(ret)};Module.callbacks=[];Module["processFrame"]=function(data,callback){var isAsync=Module["_ogv_video_decoder_async"]();var len=data.byteLength;var buffer=Module["_malloc"](len);function callbackWrapper(ret){Module["_free"](buffer);callback(ret)}if(isAsync){Module.callbacks.push(callbackWrapper)}var ret=time(function(){var dest=new Uint8Array(wasmMemory.buffer,buffer,len);dest.set(new Uint8Array(data));return Module["_ogv_video_decoder_process_frame"](buffer,len)});if(!isAsync){callbackWrapper(ret)}};Module["close"]=function(){};Module["sync"]=function(){var isAsync=Module["_ogv_video_decoder_async"]();if(isAsync){Module.callbacks.push(function(){});time(function(){Module["_ogv_video_decoder_process_frame"](0,0)})}};Module["recycledFrames"]=[];Module["recycleFrame"]=function(frame){var arr=Module["recycledFrames"];arr.push(frame);if(arr.length>16){arr.shift()}};


  return OGVDecoderVideoAV1MTW.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoAV1MTW;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return OGVDecoderVideoAV1MTW; });
else if (typeof exports === 'object')
  exports["OGVDecoderVideoAV1MTW"] = OGVDecoderVideoAV1MTW;
