namespace SurveyJsBlazor.Models;
public class QuestionRadiogroupModel : QuestionCheckboxBase
{
    public ItemValue SelectedItem { get; } = default!;
    public bool ShowClearButton { get; set; }
}
