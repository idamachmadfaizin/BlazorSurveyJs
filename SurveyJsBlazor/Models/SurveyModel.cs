namespace SurveyJsBlazor.Models;
public class SurveyModel : SurveyElementCore
{
    public object ActivePage { get; } = default!;
    public bool AllowCompleteSurveyAutomatic { get; set; } = default!;
    public bool AllowResizeComment { get; set; } = default!;
    public bool AutoGrowComment { get; set; } = default!;
    public string BackgroundImage { get; } = default!;
    public int BackgroundOpacity { get; set; } = default!;
    public List<CalculatedValue> CalculatedValues { get; set; } = default!;
    public string CheckErrorsMode { get; set; } = default!;
    public object ClearInvisibleValues { get; set; } = default!;
    public bool ClearValueOnDisableItems { get; set; } = default!;
    public string ClientId { get; set; } = default!;
    public object Comments { get; } = default!;
    public string CommentSuffix { get; set; } = default!;
    public string CompletedBeforeHtml { get; set; } = default!;
    public string CompletedHtml { get; set; } = default!;
    public List<HtmlConditionItem> CompletedHtmlOnCondition { get; set; } = default!;
    public string CompleteText { get; set; } = default!;
    public string CookieName { get; set; } = default!;
    public object Css { get; set; } = default!;
    public object CurrentPage { get; set; } = default!;
    public int CurrentPageNo { get; set; } = default!;
    public object Data { get; set; } = default!;
    public string EditText { get; set; } = default!;
    public string EmptySurveyText { get; } = default!;
    public bool FirstPageIsStarted { get; set; } = default!;
    public bool FocusFirstQuestionAutomatic { get; set; } = default!;
    public bool FocusOnFirstError { get; set; } = default!;
    public bool GoNextPageAutomatic { get; set; } = default!;
    public bool HasCookie { get; }
    /// <value>"advanced" | "basic"</value>
    public string HeaderView { get; } = default!;
    public bool HideRequiredErrors { get; }
    public bool IgnoreValidation { get; }
    public bool IsCurrentPageValid { get; }
    public bool IsEmpty { get; }
    public bool IsFirstPage { get; }
    public bool IsLastPage { get; }
    public bool IsShowStartingPage { get; }
    public bool IsValidatingOnServer { get; }
    public List<JsonError> JsonErrors { get; } = default!;
    public bool KeepIncorrectValues { get; set; } = default!;
    public bool LazyRendering { get; set; } = default!;
    public string LoadingHtml { get; set; } = default!;
    public string Locale { get; set; } = default!;
    public string Logo { get; set; } = default!;
    public string LogoFit { get; set; } = default!;
    public object LogoHeight { get; set; } = default!;
    public string LogoPosition { get; set; } = default!;
    public object LogoWidth { get; set; } = default!;
    public string MatrixDragHandleArea { get; set; } = default!;
    public int MaxOthersLength { get; set; } = default!;
    public int MaxTextLength { get; set; } = default!;
    public int MaxTimeToFinish { get; set; } = default!;
    public int MaxTimeToFinishPage { get; set; } = default!;
    public string Mode { get; set; } = default!;
    public string NavigateToUrl { get; set; } = default!;
    public List<UrlConditionItem> NavigateToUrlOnCondition { get; set; } = default!;
    public int PageCount { get; }
    public string PageNextText { get; set; } = default!;
    public string PagePrevText { get; set; } = default!;
    public List<PageModel> Pages { get; } = default!;
    public string PreviewText { get; set; } = default!;
    public string ProcessedCompletedBeforeHtml { get; } = default!;
    public string ProcessedCompletedHtml { get; } = default!;
    public string ProcessedLoadingHtml { get; } = default!;
    public string ProgressBarType { get; set; } = default!;
    public string ProgressText { get; } = default!;
    public int ProgressValue { get; }
    public string QuestionDescriptionLocation { get; set; } = default!;
    public string QuestionErrorLocation { get; set; } = default!;
    public string QuestionsOnPageMode { get; set; } = default!;
    public string QuestionsOrder { get; set; } = default!;
    public string QuestionStartIndex { get; set; } = default!;
    public string QuestionTitleLocation { get; set; } = default!;
    public string QuestionTitlePattern { get; set; } = default!;
    public string RequiredText { get; set; } = default!;
    public bool SendResultOnPageNext { get; set; } = default!;
    public bool ShowCompletedPage { get; set; } = default!;
    public bool ShowInvisibleElements { get; set; } = default!;
    public object ShowNavigationButtons { get; set; } = default!;
    public bool ShowPageNumbers { get; set; } = default!;
    public bool ShowPageTitles { get; set; } = default!;
    public bool ShowPrevButton { get; set; } = default!;
    public string ShowPreviewBeforeComplete { get; set; } = default!;
    public string ShowProgressBar { get; set; } = default!;
    public bool ShowQuestionNumbers { get; set; } = default!;
    public string ShowTimerPanel { get; set; } = default!;
    public string ShowTimerPanelMode { get; set; } = default!;
    public bool ShowTitle { get; set; } = default!;
    public bool ShowTOC { get; set; } = default!;
    public PageModel StartedPage { get; } = default!;
    public string StartSurveyText { get; set; } = default!;
    public string State { get; } = default!;
    public bool StoreOthersAsComment { get; set; } = default!;
    public string SurveyId { get; set; } = default!;
    public string SurveyPostId { get; set; } = default!;
    public bool SurveyShowDataSaving { get; set; } = default!;
    public string TextUpdateMode { get; set; } = default!;
    public int TimeSpent { get; set; } = default!;
    /// <value>"left" | "right"</value>
    public string TocLocation { get; set; } = default!;
    public List<SurveyTrigger> Triggers { get; set; } = default!;
    public int VisiblePageCount { get; }
    public List<PageModel> VisiblePages { get; } = default!;
    public string Width { get; set; } = default!;
    public string WidthMode { get; set; } = default!;
}
