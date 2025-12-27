# Failing Repositories

## Smorgasbord

Failed due to the following Error:
```
Xunit.Sdk.FailException: Unable to Validate "https://raw.githubusercontent.com/Fluffernuttersandwich/Smorgasbord/main/modlists.json". Due to the following Error:
Xunit.Sdk.TrueException: MachineUrl/ModlistRepository is not valid! Allowed Characters are: 0-9, A-Z, a-z, _ and - use https://regex101.com/r/cVYtyA/2to test: "Smorgasbord/Smorgasbord" ("Smorgasbord")
   at Xunit.Assert.True(Nullable`1 condition, String userMessage) in /_/src/xunit.assert/Asserts/BooleanAsserts.cs:line 141
   at Xunit.Assert.True(Boolean condition, String userMessage) in /_/src/xunit.assert/Asserts/BooleanAsserts.cs:line 123
   at ModlistValidation.TestModlists.ValidateMachineUrl(String machineUrl, String name) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 195
   at ModlistValidation.TestModlists.ValidateIndividualModlists(List`1 modlists) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 174
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 88
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 92
```

## SmorgasbordV2

Failed due to the following Error:
```
Xunit.Sdk.FailException: Unable to Validate "https://raw.githubusercontent.com/LBeast161776/Better7D2DbyFNS/main/modlists.json". Due to the following Error:
Xunit.Sdk.TrueException: MachineUrl/ModlistRepository is not valid! Allowed Characters are: 0-9, A-Z, a-z, _ and - use https://regex101.com/r/cVYtyA/2to test: "Smorgasbord/Smorgasbord" ("Smorgasbord")
   at Xunit.Assert.True(Nullable`1 condition, String userMessage) in /_/src/xunit.assert/Asserts/BooleanAsserts.cs:line 141
   at Xunit.Assert.True(Boolean condition, String userMessage) in /_/src/xunit.assert/Asserts/BooleanAsserts.cs:line 123
   at ModlistValidation.TestModlists.ValidateMachineUrl(String machineUrl, String name) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 195
   at ModlistValidation.TestModlists.ValidateIndividualModlists(List`1 modlists) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 174
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 88
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 92
```

## jamesthewicked88

Failed due to the following Error:
```
Xunit.Sdk.FailException: Unable to Validate "https://raw.githubusercontent.com/jamesthewicked88/modlists/refs/heads/main/modlists.json". Due to the following Error:
Xunit.Sdk.FailException: Uri "https://github.com/jamesthewicked88/modlists/blob/main/Cyberpunk 2077SamuraiLogo.png" is not valid. You need to provide the direct link to the image/readme. ("Cyberpunk 2079 Project Liberation")
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.ValidateGitHubUri(Uri uri, String name) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 205
   at ModlistValidation.TestModlists.ValidateIndividualModlists(List`1 modlists) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 173
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 88
   at Xunit.Assert.Fail(String message) in /_/src/xunit.assert/Asserts/FailAsserts.cs:line 38
   at ModlistValidation.TestModlists.TestRepositories(String file) in /home/runner/work/mod-lists/mod-lists/Validation/ModlistValidation/TestModlists.cs:line 92
```

