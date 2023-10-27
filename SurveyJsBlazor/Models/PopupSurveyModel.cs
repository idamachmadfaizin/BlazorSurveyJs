namespace SurveyJsBlazor.Models;
public class PopupSurveyModel : Base
{
    public bool AllowClose { get; set; } = default!;
    public int CloseOnCompleteTimeout { get; }
    public bool IsExpanded { get; set; }
    public bool IsShowing { get; set; }
    public SurveyModel Survey { get; } = default!;
    public string Title { get; set; } = default!;
}
