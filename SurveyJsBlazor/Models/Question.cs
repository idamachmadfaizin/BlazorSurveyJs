namespace SurveyJsBlazor.Models;
public class Question : SurveyElement<Question>
{
    public string ClearIfInvisible { get; set; } = default!;
    public string Comment { get; set; } = default!;
    public string CommentPlaceholder { get; set; } = default!;
    public string CommentText { get; set; } = default!;
    public object CorrectAnswer { get; set; } = default!;
    public object DefaultValue { get; set; } = default!;
    public object DefaultValueExpression { get; set; } = default!;
    public string DescriptionLocation { get; set; } = default!;
    public string EnableIf { get; set; } = default!;
    public string ErrorLocation { get; set; } = default!;
    public bool HasInput { get; }
    public bool HasSingleInput { get; }
    public bool HasTitle { get; }
    public bool HideNumber { get; set; } = default!;
    public string Id { get; set; } = default!;
    public bool IsAllowTitleLeft { get; }
    public bool IsParentVisible { get; }
    public bool IsRequired { get; set; } = default!;
    public bool IsVisible { get; }
    public string No { get; } = default!;
    public PageModel Page { get; set; } = default!;
    public PanelModel Parent { get; set; } = default!;
    public int QuizQuestionCount { get; }
    public string RequiredErrorText { get; set; } = default!;
    public string RequiredIf { get; set; } = default!;
    public string RequiredText { get; } = default!;
    public string ResetValueIf { get; set; } = default!;
    public string SetValueExpression { get; set; } = default!;
    public string SetValueIf { get; set; } = default!;
    public bool ShowCommentArea { get; set; } = default!;
    public bool ShowOtherItem { get; set; } = default!;
    public bool StartWithNewLine { get; set; } = default!;
    public string TitleLocation { get; set; } = default!;
    public bool UseDisplayValuesInDynamicTexts { get; set; } = default!;
    public List<SurveyValidator> Validators { get; set; } = default!;
    public object Value { get; set; } = default!;
    public string ValueName { get; set; } = default!;
    public bool Visible { get; set; } = default!;
    public string VisibleIf { get; set; } = default!;
    public int VisibleIndex { get; }
}
