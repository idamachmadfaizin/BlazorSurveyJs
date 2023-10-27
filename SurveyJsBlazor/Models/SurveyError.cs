using SurveyJsBlazor.Interfaces;

namespace SurveyJsBlazor.Models;
public class SurveyError
{
    public string Text { get; set; } = default!;
    protected ISurveyErrorOwner ErrorOwner { get; set; } = default!;
    //private string LocTextValue { get; set; }
    public bool Visible { get; set; }
    public LocalizableString LocText { get; } = default!;
    public Action<SurveyError> OnUpdateErrorTextCallback { get; set; } = default!;
}