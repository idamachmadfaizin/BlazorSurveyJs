using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace SurveyJsBlazor.Models;
internal interface IDotNetObject<Component>
    where Component : ComponentBase
{
    DotNetObjectReference<Component>? DotNetObject { get; set; }
}
