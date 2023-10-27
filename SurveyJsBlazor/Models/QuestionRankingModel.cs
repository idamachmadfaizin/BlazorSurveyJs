namespace SurveyJsBlazor.Models;
public class QuestionRankingModel : QuestionCheckboxModel
{
    public bool LongTap { get; set; }
    public string SelectToRankAreasLayout { get; set; } = default!;
    public bool SelectToRankEnabled { get; set; }
}
