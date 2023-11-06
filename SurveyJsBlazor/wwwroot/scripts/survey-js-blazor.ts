module SurveyJsBlazor {
    export function addQuestionProperty() {
        // @ts-ignore
        Survey.Serializer.addProperty("question", {
            name: "score",
            type: "number",
            category: "data"
        });
    }
}

export default SurveyJsBlazor;