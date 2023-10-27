namespace SurveyJsBlazor.Models;
public class PageModel : PanelModelBase
{
    public bool IsActive { get; }
    public bool IsStartPage { get; }
    public int MaxTimeToFinish { get; set; }
    public string NavigationButtonsVisibility { get; set; } = default!;
    public string NavigationDescription { get; set; } = default!;
    public string NavigationTitle { get; set; } = default!;
    public int TimeSpent { get; }
    public int VisibleIndex { get; set; }
    public bool WasShown { get; }
}
