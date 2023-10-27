using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace SurveyJsBlazor.Models;

public class CreatorOptions
{
    public bool AllowChangeThemeInPreview { get; set; } = true;
    public bool AllowEditExpressionsInTextEditor { get; set; } = true;
    public bool AllowModifyPages { get; set; } = true;
    public bool GenerateValidJSON { get; set; } = true;
    public bool IsAutoSave { get; set; } = false;
    public bool IsRTL { get; set; } = false;
    public int MaximumChoicesCount { get; set; }
    public int MaximumColumnsCount { get; set; }
    public int MaximumRateValues { get; set; }
    public int MaximumRowsCount { get; set; }
    public int MaxLogicItemsInCondition { get; set; } = -1;
    public int MaxNestedPanels { get; set; } = -1;
    public int MaxVisibleChoices { get; set; } = 10;
    public int MinimumChoicesCount { get; set; }
    public PageEditModeType PageEditMode { get; set; } = PageEditModeType.Standard;
    public PreviewOrientationType PreviewOrientation { get; set; } = PreviewOrientationType.Landscape;

    /// <summary>
    /// Limits question and panel types available in the Toolbox and Add Question menu.
    /// 
    /// Refer to the [Limit Available Question and Panel Types](https://surveyjs.io/Documentation/Survey-Creator?id=toolbox#limit-available-question-and-panel-types) help topic for more information.
    /// </summary>
    public List<QuestionType>? QuestionTypes { get; set; }
    public bool ReadOnly { get; set; } = false;
    public ShowDefaultLanguageInPreviewTabType ShowDefaultLanguageInPreviewTab { get; set; } = ShowDefaultLanguageInPreviewTabType.Auto;
    public bool ShowDesignerTab { get; set; } = true;
    public bool ShowErrorOnFailedSave { get; set; } = true;
    public bool ShowHeaderInEmptySurvey { get; set; } = false;
    public bool ShowInvisibleElementsInPreviewTab { get; set; } = true;
    public bool ShowJSONEditorTab { get; set; } = true;
    public bool ShowLogicTab { get; set; } = false;
    public bool ShowObjectTitles { get; set; } = false;
    public bool ShowPagesInPreviewTab { get; set; } = true;
    public bool ShowPreviewTab { get; set; } = true;
    public bool ShowSimulatorInPreviewTab { get; set; } = true;
    public bool ShowSurveyTitle { get; set; } = true;
    public bool ShowTitlesInExpressions { get; set; } = false;
    public bool ShowTranslationTab { get; set; } = false;
    public ThemeForPreviewType ThemeForPreview { get; set; } = ThemeForPreviewType.DefaultV2;
}

[JsonConverter(typeof(StringEnumConverter))]
public enum PageEditModeType
{
    Standard, Single, Bypage
}

[JsonConverter(typeof(StringEnumConverter))]
public enum PreviewOrientationType
{
    Landscape, Portrait
}

[JsonConverter(typeof(StringEnumConverter))]
public enum ShowDefaultLanguageInPreviewTabType
{
    Auto, True, False, All
}

[JsonConverter(typeof(StringEnumConverter))]
public enum QuestionType
{
    Boolean,
    Checkbox,
    Comment,
    Dropdown,
    Tagbox,
    Expression,
    File,
    Html,
    Image,
    Imagepicker,
    Matrix,
    Matrixdropdown,
    Matrixdynamic,
    Multipletext,
    Panel,
    Paneldynamic,
    Radiogroup,
    Rating,
    Ranking,
    Signaturepad,
    Text
}

[JsonConverter(typeof(StringEnumConverter))]
public enum ThemeForPreviewType
{
    Modern, Default, DefaultV2,
}