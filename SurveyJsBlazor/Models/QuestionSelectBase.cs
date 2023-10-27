namespace SurveyJsBlazor.Models;
public class QuestionSelectBase : Question
{
    public List<Choice> Choices { get; set; } = default!;
    public ChoicesRestful ChoicesByUrl { get; set; } = default!;
    public string ChoicesEnableIf { get; set; } = default!;
    public string ChoicesFromQuestion { get; set; } = default!;
    public string ChoicesFromQuestionMode { get; set; } = default!;
    public string ChoicesOrder { get; set; } = default!;
    public string ChoicesVisibleIf { get; set; } = default!;
    public string ChoiceTextsFromQuestion { get; set; } = default!;
    public string ChoiceValuesFromQuestion { get; set; } = default!;
    public List<ItemValue> EnabledChoices { get; } = default!;
    public bool HideIfChoicesEmpty { get; set; }
    public bool IsOtherSelected { get; }
    public string ItemComponent { get; set; } = default!;
    public bool KeepIncorrectValues { get; set; }
    public ItemValue NoneItem { get; } = default!;
    public string NoneText { get; set; } = default!;
    public string OtherErrorText { get; set; } = default!;
    public ItemValue OtherItem { get; } = default!;
    public string OtherPlaceholder { get; set; } = default!;
    public string OtherText { get; set; } = default!;
    public bool SeparateSpecialChoices { get; }
    public bool ShowNoneItem { get; set; }
    public List<ItemValue> VisibleChoices { get; } = default!;
}
