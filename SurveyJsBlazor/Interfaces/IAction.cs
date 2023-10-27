using SurveyJsBlazor.Models;

namespace SurveyJsBlazor.Interfaces;
public interface IAction
{
    string Id { get; set; }
    bool Visible { get; set; }
    string Title { get; set; }
    LocalizableString LocTitle { get; set; }
    string LocTitleName { get; set; }
    string Tooltip { get; set; }
    string LocTooltipName { get; set; }
    bool Enabled { get; set; }
    bool ShowTitle { get; set; }
    Action<object> Action { get; set; }
    string Css { get; set; }
    string InnerCss { get; set; }
    object Data { get; set; }
    object PopupModel { get; set; }
    bool NeedSeparator { get; set; }
    bool Active { get; set; }
    bool Pressed { get; set; }
    string Template { get; set; }
    string Component { get; set; }
    string IconName { get; set; }
    object IconSize { get; set; }
    string Location { get; set; }
    bool DisableTabStop { get; set; }
    bool DisableShrink { get; set; }
    bool DisableHide { get; set; }
    object Mode { get; set; }
    int VisibleIndex { get; set; }
    bool NeedSpace { get; set; }
    bool AriaChecked { get; set; }
    bool AriaExpanded { get; set; }
    string AriaRole { get; set; }
    string ElementId { get; set; }
}