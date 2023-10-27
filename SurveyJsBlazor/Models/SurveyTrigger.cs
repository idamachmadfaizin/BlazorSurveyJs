using SurveyJsBlazor.Interfaces;

namespace SurveyJsBlazor.Models;
public class SurveyTrigger : Trigger
{
    public ISurveyTriggerOwner OwnerValue { get; set; } = default!;
    public ISurveyTriggerOwner Owner { get; } = default!;
}
