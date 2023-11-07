declare const Survey;

module SurveyJsBlazor {
    export function addQuestionProperty() {
        Survey.Serializer.addProperty("question", {
            name: "score",
            type: "number",
            category: "data",
        });
    }
}

export default SurveyJsBlazor;