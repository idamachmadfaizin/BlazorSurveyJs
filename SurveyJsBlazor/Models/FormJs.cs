using Microsoft.JSInterop;
using SurveyJsBlazor.Components;

namespace SurveyJsBlazor.Models;

/// <summary>
/// The Class representasion of JsInvokable method params.
/// </summary>
internal abstract class FormJs
{
    internal class Render : IDotNetObject<SurveyJsForm>, IHashId
    {
        public DotNetObjectReference<SurveyJsForm>? DotNetObject { get; set; }
        public int HashId { get; set; }
        public string? JsonScheme { get; set; }
    }


    internal class Dispose : IHashId
    {
        public int HashId { get; set; }
    }

    internal class Clear : IHashId
    {
        public int HashId { get; set; }
    }
}


