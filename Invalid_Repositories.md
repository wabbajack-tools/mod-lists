# Failing Repositories

## Better7D2DbyFNS

Failed due to the following Error:
```
Xunit.Sdk.FailException: Unable to Validate "https://raw.githubusercontent.com/Fluffernuttersandwich/Better7D2DbyFNS/main/modlists.json". Due to the following Error:
System.Text.Json.JsonException: The JSON value could not be converted to Wabbajack.DTOs.Game. Path: $[0].game | LineNumber: 9 | BytePositionInLine: 24.
   at System.Text.Json.ThrowHelper.ThrowJsonException(String message)
   at System.Text.Json.Serialization.Converters.EnumConverter`1.Read(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options)
   at System.Text.Json.Serialization.Metadata.JsonPropertyInfo`1.ReadJsonAndSetMember(Object obj, ReadStack& state, Utf8JsonReader& reader)
   at System.Text.Json.Serialization.Converters.ObjectDefaultConverter`1.OnTryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, T& value)
   at System.Text.Json.Serialization.JsonConverter`1.TryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, T& value, Boolean& isPopulatedValue)
   at System.Text.Json.Serialization.JsonCollectionConverter`2.OnTryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, TCollection& value)
   at System.Text.Json.Serialization.JsonConverter`1.TryRead(Utf8JsonReader& reader, Type typeToConvert, JsonSerializerOptions options, ReadStack& state, T& value, Boolean& isPopulatedValue)
   at System.Text.Json.Serialization.JsonConverter`1.ReadCore(Utf8JsonReader& reader, T& value, JsonSerializerOptions options, ReadStack& state)
   at System.Text.Json.JsonSerializer.ReadFromSpan[TValue](ReadOnlySpan`1 json, JsonTypeInfo`1 jsonTypeInfo)
   at System.Text.Json.JsonSerializer.Deserialize[TValue](String json, JsonSerializerOptions options)
   at Wabbajack.DTOs.JsonConverters.DTOSerializer.Deserialize[T](String text)
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 80
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 85
```

