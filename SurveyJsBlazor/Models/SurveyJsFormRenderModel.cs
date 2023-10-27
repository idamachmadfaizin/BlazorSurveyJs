using Microsoft.JSInterop;
using SurveyJsBlazor.Components;

namespace SurveyJsBlazor.Models;
internal class SurveyJsFormRenderModel : IDotNetObject<SurveyJsForm>, IHashId
{
    public DotNetObjectReference<SurveyJsForm>? DotNetObject { get; set; }
    public int HashId { get; set; }
    public string? JsonScheme { get; set; }
}
