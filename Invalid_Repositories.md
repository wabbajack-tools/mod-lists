# Failing Repositories

The validation re-runs those every 4 hours or when a pull requestis merged into the main branch of this repository.

## NG-EVO

`RepoMachineURL`:`NG-EVO`

`GithubURL`:`https://raw.githubusercontent.com/1ittey/NG-EVO/main/modlists.json`

Failed due to the following Error:
```
Xunit.Sdk.FailException: Unable to Validate "https://raw.githubusercontent.com/1ittey/NG-EVO/main/modlists.json". Due to the following Error:
System.Text.Json.JsonException: '"' is invalid after a value. Expected either ',', '}', or ']'. Path: $[0].tags[1] | LineNumber: 12 | BytePositionInLine: 6.
 ---> System.Text.Json.JsonReaderException: '"' is invalid after a value. Expected either ',', '}', or ']'. LineNumber: 12 | BytePositionInLine: 6.
   at System.Text.Json.ThrowHelper.ThrowJsonReaderException(Utf8JsonReader& json, ExceptionResource resource, Byte nextByte, ReadOnlySpan`1 bytes)
   at System.Text.Json.Utf8JsonReader.ConsumeNextTokenUntilAfterAllCommentsAreSkipped(Byte marker)
   at System.Text.Json.Utf8JsonReader.ConsumeNextToken(Byte marker)
   at System.Text.Json.Utf8JsonReader.ReadSingleSegment()
   at System.Text.Json.Serialization.JsonCollectionConverter`2.OnTryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, TCollection& value)
   at System.Text.Json.Serialization.JsonConverter`1.TryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, T& value, Boolean& isPopulatedValue)
   at System.Text.Json.Serialization.Metadata.JsonPropertyInfo`1.ReadJsonAndSetMember(Object obj, ReadStack& state, Utf8JsonReader& reader)
   at System.Text.Json.Serialization.Converters.ObjectDefaultConverter`1.OnTryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, T& value)
   at System.Text.Json.Serialization.JsonCollectionConverter`2.OnTryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, TCollection& value)
   at System.Text.Json.Serialization.JsonConverter`1.ReadCore(Utf8JsonReader& reader, T& value, JsonSerializerOptions options, ReadStack& state)
   --- End of inner exception stack trace ---
   at System.Text.Json.ThrowHelper.ReThrowWithPath(ReadStack& state, JsonReaderException ex)
   at System.Text.Json.Serialization.JsonConverter`1.ReadCore(Utf8JsonReader& reader, T& value, JsonSerializerOptions options, ReadStack& state)
   at System.Text.Json.JsonSerializer.ReadFromSpan[TValue](ReadOnlySpan`1 json, JsonTypeInfo`1 jsonTypeInfo)
   at Wabbajack.DTOs.JsonConverters.DTOSerializer.Deserialize[T](String text)
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 113
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 118
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

