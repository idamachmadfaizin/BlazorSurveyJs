namespace SurveyJsBlazor.Models;
public class PanelModel : PanelModelBase
{
    public int InnerIndent { get; set; }
    public string No { get; } = default!;
    public PageModel Page { get; set; } = default!;
    public string QuestionStartIndex { get; set; } = default!;
    public bool ShowNumber { get; set; }
    public string ShowQuestionNumbers { get; set; } = default!;
    public bool StartWithNewLine { get; set; }
    public int VisibleIndex { get; }
}
