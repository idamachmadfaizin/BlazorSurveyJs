namespace SurveyJsBlazor.Models;
public class QuestionCheckboxModel : QuestionCheckboxBase
{
    public bool IsAllSelected { get; set; }
    public int MaxSelectedChoices { get; set; }
    public int MinSelectedChoices { get; set; }
    public ItemValue SelectAllItem { get; } = default!;
    public string SelectAllText { get; set; } = default!;
    public List<ItemValue> SelectedChoices { get; } = default!;
    public bool ShowSelectAllItem { get; set; }
    public string ValuePropertyName { get; set; } = default!;
}
