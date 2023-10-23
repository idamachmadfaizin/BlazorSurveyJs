using Microsoft.JSInterop;

namespace BlazorSurveyJs;

public static class JSRuntimeExtension
{
    public static async ValueTask<IJSObjectReference> ImportAsync(this IJSRuntime jSRuntime, string path)
    {
        return await jSRuntime.InvokeAsync<IJSObjectReference>("import", path);
    }
}
