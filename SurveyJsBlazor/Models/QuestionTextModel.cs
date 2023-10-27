namespace SurveyJsBlazor.Models;
public class QuestionTextModel : QuestionTextBase
{
    public string Autocomplete { get; set; } = default!;
    public List<string> DataList { get; set; } = default!;
    public string InputType { get; set; } = default!;
    public bool IsMinMaxType { get; }
    public string Max { get; set; } = default!;
    public string MaxErrorText { get; set; } = default!;
    public string MaxValueExpression { get; set; } = default!;
    public string Min { get; set; } = default!;
    public string MinErrorText { get; set; } = default!;
    public string MinValueExpression { get; set; } = default!;
    public int Size { get; set; } = default!;
    public string Step { get; set; } = default!;
}
