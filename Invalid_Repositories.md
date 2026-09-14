# Failing Repositories

The validation re-runs those every 4 hours or when a pull requestis merged into the main branch of this repository.

## wj-featured

`RepoMachineURL`:`wj-featured`

`GithubURL`:`https://raw.githubusercontent.com/wabbajack-tools/mod-lists/master/modlists.json`

Failed due to the following Error:
```
System.Net.Http.HttpRequestException: The SSL connection could not be established, see inner exception.
 ---> System.IO.IOException: Unable to read data from the transport connection: Connection reset by peer.
 ---> System.Net.Sockets.SocketException (104): Connection reset by peer
   at System.Net.Sockets.Socket.AwaitableSocketAsyncEventArgs.CreateException(SocketError error, Boolean forAsyncThrow)
   at System.Net.Sockets.Socket.AwaitableSocketAsyncEventArgs.ReceiveAsync(Socket socket, CancellationToken cancellationToken)
   at System.Net.Sockets.Socket.ReceiveAsync(Memory`1 buffer, SocketFlags socketFlags, Boolean fromNetworkStream, CancellationToken cancellationToken)
   at System.Net.Sockets.NetworkStream.ReadAsync(Memory`1 buffer, CancellationToken cancellationToken)
   at System.Net.Security.SslStream.EnsureFullTlsFrameAsync[TIOAdapter](CancellationToken cancellationToken, Int32 estimatedSize)
   at System.Runtime.CompilerServices.PoolingAsyncValueTaskMethodBuilder`1.StateMachineBox`1.ExecutionContextCallback(Object s)
   at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
   at System.Runtime.CompilerServices.PoolingAsyncValueTaskMethodBuilder`1.StateMachineBox`1.MoveNext()
   at System.Net.Sockets.SocketAsyncEventArgs.TransferCompletionCallbackCore(Int32 bytesTransferred, Memory`1 socketAddress, SocketFlags receivedFlags, SocketError socketError)
   at System.Net.Sockets.SocketAsyncEngine.System.Threading.IThreadPoolWorkItem.Execute()
   at System.Threading.ThreadPoolWorkQueue.Dispatch()
   at System.Threading.PortableThreadPool.WorkerThread.WorkerThreadStart()
--- End of stack trace from previous location ---

   --- End of inner exception stack trace ---
   at System.Net.Security.SslStream.EnsureFullTlsFrameAsync[TIOAdapter](CancellationToken cancellationToken, Int32 estimatedSize)
   at System.Runtime.CompilerServices.PoolingAsyncValueTaskMethodBuilder`1.StateMachineBox`1.System.Threading.Tasks.Sources.IValueTaskSource<TResult>.GetResult(Int16 token)
   at System.Net.Security.SslStream.ReceiveHandshakeFrameAsync[TIOAdapter](CancellationToken cancellationToken)
   at System.Net.Security.SslStream.ForceAuthenticationAsync[TIOAdapter](Boolean receiveFirst, Byte[] reAuthenticationData, CancellationToken cancellationToken)
   at System.Net.Http.ConnectHelper.EstablishSslConnectionAsync(SslClientAuthenticationOptions sslOptions, HttpRequestMessage request, Boolean async, Stream stream, CancellationToken cancellationToken)
   --- End of inner exception stack trace ---
   at System.Net.Http.ConnectHelper.EstablishSslConnectionAsync(SslClientAuthenticationOptions sslOptions, HttpRequestMessage request, Boolean async, Stream stream, CancellationToken cancellationToken)
   at System.Net.Http.HttpConnectionPool.ConnectAsync(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
   at System.Net.Http.HttpConnectionPool.CreateHttp11ConnectionAsync(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
   at System.Net.Http.HttpConnectionPool.InjectNewHttp11ConnectionAsync(QueueItem queueItem)
   at System.Threading.Tasks.TaskCompletionSourceWithCancellation`1.WaitWithCancellationAsync(CancellationToken cancellationToken)
   at System.Net.Http.HttpConnectionPool.SendWithVersionDetectionAndRetryAsync(HttpRequestMessage request, Boolean async, Boolean doRequestAuth, CancellationToken cancellationToken)
   at System.Net.Http.RedirectHandler.SendAsync(HttpRequestMessage request, Boolean async, CancellationToken cancellationToken)
   at System.Net.Http.HttpClient.GetStringAsyncCore(HttpRequestMessage request, CancellationToken cancellationToken)
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 109
```

## Just_Another_Requiem_List

`RepoMachineURL`:`Just_Another_Requiem_List`

`GithubURL`:`https://raw.githubusercontent.com/mccakit/Just_Another_Requiem_List/main/modlists.json`

Failed due to the following Error:
```
System.Net.Http.HttpRequestException: Response status code does not indicate success: 404 (Not Found).
   at System.Net.Http.HttpResponseMessage.EnsureSuccessStatusCode()
   at System.Net.Http.HttpClient.GetStringAsyncCore(HttpRequestMessage request, CancellationToken cancellationToken)
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 109
```

## jamesthewicked88

`RepoMachineURL`:`jamesthewicked88`

`GithubURL`:`https://raw.githubusercontent.com/jamesthewicked88/modlists/refs/heads/main/modlists.json`

Failed due to the following Error:
```
Xunit.Sdk.FailException: Unable to Validate "https://raw.githubusercontent.com/jamesthewicked88/modlists/refs/heads/main/modlists.json". Due to the following Error:
Xunit.Sdk.FailException: Uri "https://github.com/jamesthewicked88/modlists/blob/main/Cyberpunk 2077SamuraiLogo.png" is not valid. You need to provide the direct link to the image/readme. ("Cyberpunk 2079 Project Liberation")
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.ValidateGitHubUri(Uri uri, String name) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 234
   at ModlistValidation.TestModlists.ValidateIndividualModlists(List`1 modlists) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 202
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 114
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 118
```

