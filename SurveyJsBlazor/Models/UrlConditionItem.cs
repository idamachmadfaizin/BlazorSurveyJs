namespace SurveyJsBlazor.Models;
public class UrlConditionItem : ExpressionItem
{
    public string Url { get; set; } = default!;
    public LocalizableString LocUrl { get; set; } = default!;
}
