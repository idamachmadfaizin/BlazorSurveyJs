using SurveyJsBlazor.Interfaces;

namespace SurveyJsBlazor.Models;
public class ItemValue : ILocalizableOwner, IShortcutText
{
    public string ShortcutText { get; set; } = default!;
}
