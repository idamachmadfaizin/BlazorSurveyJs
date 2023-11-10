using Microsoft.JSInterop;
using SurveyJsBlazor.Components;

namespace SurveyJsBlazor.Models;

/// <summary>
/// The Class representasion of JsInvokable method params.
/// </summary>
internal abstract class CreatorJs
{
    internal class Render : IDotNetObject<SurveyJsCreator>, IHashId
    {
        public DotNetObjectReference<SurveyJsCreator>? DotNetObject { get; set; }
        public int HashId { get; set; }
        public CreatorOptions? CreatorOptions { get; set; } = default!;
        public string? JsonScheme { get; set; }
        public string? Locale { get; set; }
    }

    internal class Dispose : IHashId
    {
        public int HashId { get; set; }
    }

    internal class SetLocal : IHashId
    {
        public int HashId { get; set; }
        public string Locale { get; set; } = default!;
    }
}
