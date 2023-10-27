using AngleSharp.Dom;

namespace SurveyJsBlazor.Models;
public class PanelModelBase : SurveyElement<Question>
{
    public bool AreQuestionsRandomized { get; }
    public List<IElement> Elements { get; } = default!;
    public string EnableIf { get; set; } = default!;
    public string Id { get; set; } = default!;
    public bool IsRequired { get; set; }
    public bool IsVisible { get; }
    public PanelModelBase? Parent { get; set; }
    public string QuestionErrorLocation { get; set; } = default!;
    public List<Question> Questions { get; } = default!;
    public string QuestionsOrder { get; set; } = default!;
    public string QuestionTitleLocation { get; set; } = default!;
    public string RequiredErrorText { get; set; } = default!;
    public string RequiredIf { get; set; } = default!;
    public string RequiredText { get; } = default!;
    public bool Visible { get; set; } = default!;
    public string VisibleIf { get; set; } = default!;
}
