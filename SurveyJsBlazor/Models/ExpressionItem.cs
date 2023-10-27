using SurveyJsBlazor.Interfaces;

namespace SurveyJsBlazor.Models;
public class ExpressionItem : Base, ILocalizableOwner
{
    //private ILocalizableOwner LocOwner;
    public string Expression { get; set; } = default!;

    public LocalizableString LocHtml { get; } = default!;
}