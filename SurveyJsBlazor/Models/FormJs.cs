using Microsoft.JSInterop;
using SurveyJsBlazor.Components;

namespace SurveyJsBlazor.Models;

/// <summary>
/// The Class representasion of JsInvokable method params.
/// </summary>
internal abstract class FormJs
{
    internal class Render : IDotNetObject<SurveyJsForm>, IHashId, ILocale, ITheme
    {
        public DotNetObjectReference<SurveyJsForm>? DotNetObject { get; set; }
        public int HashId { get; set; }
        public string? JsonScheme { get; set; }
        public string? Locale { get; set; }
        public string? Theme { get; set; }
    }

    internal class Dispose : IHashId
    {
        public int HashId { get; set; }
    }

    internal class Clear : IHashId
    {
        public int HashId { get; set; }
    }

    internal class SetLocale : IHashId, ILocale
    {
        public int HashId { get; set; }
        public string? Locale { get; set; }
    }

    internal class SetTheme : IHashId, ITheme
    {
        public int HashId { get; set; }
        public string? Theme { get; set; }
    }
}


