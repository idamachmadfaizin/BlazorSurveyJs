using Microsoft.JSInterop;
using SurveyJsBlazor.Components;

namespace SurveyJsBlazor.Models;
internal abstract class DashboardJs
{
    internal class Render : IDotNetObject<SurveyJsDashboard>, IHashId
    {
        public DotNetObjectReference<SurveyJsDashboard>? DotNetObject { get; set; }
        public int HashId { get; set; }
        public object? VisualizationPanelOptions { get; set; } = default!;
        public string? JsonScheme { get; set; }
        public string? Data { get; set; }
    }
}
