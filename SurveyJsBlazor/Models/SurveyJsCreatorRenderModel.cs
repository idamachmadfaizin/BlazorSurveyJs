using Microsoft.JSInterop;
using SurveyJsBlazor.Components;

namespace SurveyJsBlazor.Models;
internal class SurveyJsCreatorRenderModel : IDotNetObject<SurveyJsCreator>, IHashId
{
    public DotNetObjectReference<SurveyJsCreator>? DotNetObject { get; set; }
    public int HashId { get; set; }
    public CreatorOptions? CreatorOptions { get; set; } = default!;
    public string? JsonScheme { get; set; }
}
