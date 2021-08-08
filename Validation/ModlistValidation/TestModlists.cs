using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.Extensions.DependencyInjection;
using Wabbajack.DTOs;
using Wabbajack.DTOs.JsonConverters;
using Xunit;

namespace ModlistValidation
{
    public class TestModlists
    {
        private readonly DTOSerializer _dtoSerializer;
        
        public TestModlists()
        {
            var services = new ServiceCollection();
            services.AddDTOConverters();
            services.AddDTOSerializer();

            var serviceProvider = services.BuildServiceProvider();
            _dtoSerializer = serviceProvider.GetRequiredService<DTOSerializer>();
        }

        [Theory]
        [InlineData("files\\modlists.json")]
        [InlineData("files\\ci_lists.json")]
        [InlineData("files\\utility_modlists.json")]
        public void TestFile(string file)
        {
            Assert.True(File.Exists(file), $"The file at \"{file}\" does not exist!");

            List<ModlistMetadata> modlists;
            try
            {
                var text = File.ReadAllText(file);
                modlists = _dtoSerializer.Deserialize<List<ModlistMetadata>>(text);
            }
            catch (Exception e)
            {
                Assert.True(e == null, $"Unable to deserialize file \"{file}\"");
                throw;
            }

            Assert.NotNull(modlists);
            Assert.NotEmpty(modlists);
            
            foreach (var modlist in modlists)
            {
                Assert.False(string.IsNullOrWhiteSpace(modlist.Title), "Modlist does not have a title!");
                Assert.False(string.IsNullOrWhiteSpace(modlist.Author), $"Modlist does not have an author! (\"{modlist.Title}\")");
                Assert.False(string.IsNullOrWhiteSpace(modlist.Description), $"Modlist does not have a description! (\"{modlist.Title}\")");
                
                Assert.True(modlist.Maintainers.All(x => !string.IsNullOrWhiteSpace(x)), $"Modlist has empty strings in Maintainers Array! (\"{modlist.Title}\")");
                Assert.True(modlist.tags.All(x => !string.IsNullOrWhiteSpace(x)), $"Modlist has empty strings in tags list! (\"{modlist.Title}\")");
                
                Assert.False(modlist.Version == null, $"Modlist has no Version! (\"{modlist.Title}\")");
                Assert.False(modlist.DownloadMetadata == null, $"Modlist has no Download Metadata! (\"{modlist.Title}\")");
                
                Assert.True(Enum.IsDefined(modlist.Game), $"Game \"{modlist.Game}\" is not a valid game! (\"{modlist.Title}\")");
                
                Assert.True(Uri.TryCreate(modlist.Links.Download, UriKind.Absolute, out _), $"Modlist has no valid Download Url (Unable to create Uri)! (\"{modlist.Title}\")");
                Assert.True(Uri.TryCreate(modlist.Links.Readme, UriKind.Absolute, out var readmeUri), $"Modlist has no valid Readme Url (Unable to create Uri)! (\"{modlist.Title}\")");
                Assert.True(Uri.TryCreate(modlist.Links.ImageUri, UriKind.Absolute, out var imageUri), $"Modlist has no valid Image Url (Unable to create Uri)! (\"{modlist.Title}\")");
                
                ValidateGitHubUri(readmeUri, modlist.Title);
                ValidateGitHubUri(imageUri, modlist.Title);
            }
        }

        private static void ValidateGitHubUri(Uri uri, string name)
        {
            if (uri.Host.Equals("www.github.com", StringComparison.OrdinalIgnoreCase) ||
                uri.Host.Equals("github.com", StringComparison.OrdinalIgnoreCase))
            {
                Assert.False(true, $"Uri \"{uri}\" is not valid. You need to provide the direct link to the image/readme. (\"{name}\")");
            }
        }
    }
}