namespace SurveyJsBlazor.Models;
public class QuestionTextBase : Question
{
    public int MaxLength { get; set; }
    public string Placeholder { get; set; } = default!;
    public string TextUpdateMode { get; set; } = default!;
}
