namespace SurveyJsBlazor.Models;
public class SurveyElementCore : Base
{
    public string Description { get; set; } = default!;
    public bool HasDescription { get; }
    public string Title { get; set; } = default!;
}
