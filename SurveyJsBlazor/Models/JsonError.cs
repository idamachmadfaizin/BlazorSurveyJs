namespace SurveyJsBlazor.Models;
public class JsonError
{
    public string Type { get; set; } = default!;
    public string Message { get; set; } = default!;
    public string Description { get; set; } = default!;
    public int At { get; set; }
    public int End { get; set; }
    public object JsonObj { get; set; } = default!;
    public Base Element { get; set; } = default!;
}
